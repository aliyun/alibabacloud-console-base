"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = convertDate;

function convertDate(d) {
  if (!d) {
    return undefined;
  }

  var date;

  if (d instanceof Date) {
    date = d;
  } else if (typeof d === 'number') {
    date = new Date(d);
  } else {
    date = new Date(d); // IE 下，new Date('YYYY-MM-DD HH:mm:ss') 会是 Invalid Date，需要转成 'YYYY-MM-DDTHH:mm:ss'
    // 但还是有可能会是 Invalid Date，所以最后还需要一次判断

    if (isNaN(date.getTime())) {
      date = new Date(d.replace(' ', 'T'));
    }
  }

  return isNaN(date.getTime()) ? undefined : date;
}