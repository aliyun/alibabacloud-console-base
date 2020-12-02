"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createStorageFn;

function createStorageFn(wholeDataKey, theStorage) {
  if (!wholeDataKey) {
    throw new Error('[@alicloud/storage-factory] you have to give a wholeDataKey');
  }

  function getWholeData() {
    try {
      return JSON.parse(theStorage.getItem(wholeDataKey)) || {};
    } catch (ex) {
      return {};
    }
  }

  return function (key, val) {
    var wholeData = getWholeData();

    try {
      if (key === undefined) {
        return wholeData;
      }

      if (val === undefined) {
        return wholeData[key];
      }

      wholeData[key] = val;

      if (val === null) {
        delete wholeData[key];
      }

      theStorage.setItem(wholeDataKey, JSON.stringify(wholeData));
    } catch (ex) {// ignore
    }
  };
}