import {
  REG_MFA_CODE
} from '../const';
import intl from '../intl';

export default function getInputError(inputCode: string): string {
  if (inputCode === '') {
    return intl('message:vmfa_input_empty_tip');
  }
  
  if (!REG_MFA_CODE.test(inputCode)) {
    return intl('message:vmfa_input_error_tip');
  }

  return '';
}