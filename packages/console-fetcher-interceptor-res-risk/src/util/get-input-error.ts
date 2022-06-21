import intl from '../intl';

export default function getInputError(inputCode: string, inputIsError: boolean): string {
  if (inputCode === '' && inputIsError) {
    return intl('message:vmfa_input_empty_tip');
  }
  
  if (inputIsError) {
    return intl('message:vmfa_input_error_tip');
  }

  return '';
}