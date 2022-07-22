import WindVane from './get-windvane';
import getVmfaCodeFromWindVane from './get-vmfa-code';

const windVaneAvailable = WindVane?.isAvailable ?? false;

export {
  windVaneAvailable,
  getVmfaCodeFromWindVane
};