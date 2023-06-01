import {
  IResponseEmailValidator,
  IResponseSmsValidator,
  IResponseU2fValidator,
  IResponseGetVerificationInfoToAuth,
  TDataGetVerificationInfoToAuth
} from '../../types';
import {
  ESubVerificationDeviceType
} from '../../const';
import {
  getSplittedPhoneNumber
} from '../../util';

export default function transferGetVerificationInfoToAuthResponseToData(response: IResponseGetVerificationInfoToAuth): TDataGetVerificationInfoToAuth {
  const {
    Validators, DeviceType, TargetUserPrincipalName
  } = response;
  
  const validators: TDataGetVerificationInfoToAuth = [];
  
  if (!Validators) {
    return [];
  }
  
  if (Validators.VMFA) {
    validators.push({
      targetUserPrincipalName: TargetUserPrincipalName,
      deviceType: ESubVerificationDeviceType.VMFA
    });
  }
  
  try {
    if (Validators.U2F) {
      const responseU2fValidator = JSON.parse(Validators.U2F) as IResponseU2fValidator;
      
      if (responseU2fValidator.U2FVersion === 'U2F_V2') {
        validators.push({
          u2FVersion: 'U2F_V2',
          u2FAppId: responseU2fValidator.U2FAppId,
          u2FChallenge: responseU2fValidator.U2FChallenge,
          u2FKeyHandle: responseU2fValidator.U2FKeyHandle,
          deviceType: ESubVerificationDeviceType.U2F,
          targetUserPrincipalName: TargetUserPrincipalName
        });
      } else {
        validators.push({
          u2FVersion: 'WebAuthn',
          rpId: responseU2fValidator.RpId,
          u2FChallenge: responseU2fValidator.U2FChallenge,
          credentialId: responseU2fValidator.CredentialId,
          deviceType: ESubVerificationDeviceType.U2F,
          targetUserPrincipalName: TargetUserPrincipalName
        });
      }
    }
    
    if (Validators.SMS) {
      const responseSmsValidator = JSON.parse(Validators.SMS) as IResponseSmsValidator;
      const {
        areaCode,
        phoneNumber
      } = getSplittedPhoneNumber(responseSmsValidator.PhoneNumber);

      validators.push({
        areaCode,
        phoneNumber,
        deviceType: ESubVerificationDeviceType.SMS,
        targetUserPrincipalName: TargetUserPrincipalName
      });
    }
    
    if (Validators.EMAIL) {
      const responseEmailValidator = JSON.parse(Validators.EMAIL) as IResponseEmailValidator;
      
      validators.push({
        deviceType: ESubVerificationDeviceType.EMAIL,
        targetUserPrincipalName: TargetUserPrincipalName,
        emailAddress: responseEmailValidator.EmailAddress
      });
    }
  } catch (error) {
    // Catch JSON.parse Error
  }
  
  // 保持设备验证首选项在前
  const firstChoiceDeviceIndex = validators.findIndex(o => o.deviceType === DeviceType);
  
  if (firstChoiceDeviceIndex > 0) {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    [validators[firstChoiceDeviceIndex], validators[0]] = [validators[0], validators[firstChoiceDeviceIndex]];
  }
  
  return validators;
}
