import generate8Bits from './generate-8-bits';

export default function generateRequestId(): string {
  return `REQUEST-ID-FAKE-${generate8Bits()}${generate8Bits()}`;
}