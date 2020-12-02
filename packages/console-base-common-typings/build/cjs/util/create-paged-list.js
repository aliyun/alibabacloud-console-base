"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createPagedList;

function createPagedList() {
  var items = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var page = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  var total = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  var pageSize = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 10;
  return {
    paging: {
      total: total,
      page: page,
      pageSize: pageSize
    },
    items: items
  };
}