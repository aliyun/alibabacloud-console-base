"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = fixRegions;

function fixRegions() {
  var shittyRegions = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  return shittyRegions.map(function (_ref) {
    var regionId = _ref.regionId,
        name = _ref.name,
        _ref$physicalList = _ref.physicalList,
        physicalList = _ref$physicalList === void 0 ? [] : _ref$physicalList,
        _ref$zoneList = _ref.zoneList,
        zoneList = _ref$zoneList === void 0 ? [] : _ref$zoneList;
    return {
      id: regionId,
      name: name || regionId,
      physicalIds: physicalList.map(function (v) {
        return v.id;
      }).filter(function (v) {
        return v;
      }),
      zones: zoneList.map(function (v) {
        return {
          id: v.zoneId,
          name: v.name
        };
      })
    };
  });
}