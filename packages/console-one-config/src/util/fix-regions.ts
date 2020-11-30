import {
  IShittyRegion,
  IRegion
} from '../types';

export default function fixRegions(shittyRegions: IShittyRegion[] = []): IRegion[] {
  return shittyRegions.map(({
    regionId,
    name,
    physicalList = [],
    zoneList = []
  }): IRegion => ({
    id: regionId,
    name: name || regionId,
    physicalIds: physicalList.map(v => v.id).filter(v => v),
    zones: zoneList.map(v => ({
      id: v.zoneId,
      name: v.name
    }))
  }));
}
