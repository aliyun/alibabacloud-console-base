/**
 * 三角箭头底边长
 */
export const ARROW_TRIANGLE_BASE = 12;
/**
 * 三角箭头高为底边的一半（等边直角）
 */
export const ARROW_TRIANGLE_HEIGHT = 6;
/**
 * 三角形实际上是正方形旋转而成，这个是真方形的边
 */
export const ARROW_SQUARE_BORDER = 8.5; // ARROW_TRIANGLE_HEIGHT * 1.414 = 8.484 约 8.5
/**
 * 三角直角顶点在非居中的情况下，默认距离靠近边的距离
 */
export const ARROW_OFFSET = ARROW_TRIANGLE_BASE * 0.5 + 8;
/**
 * 箭头贴住的那一边需要一个 padding 以放置箭头
 */
export const SPACING_WITHOUT_ARROW = ARROW_TRIANGLE_HEIGHT + 2;
export const SPACING_WITH_ARROW = ARROW_TRIANGLE_HEIGHT + 2;

export const ACTION_OFFSET_FROM_TOP = 8;
export const ACTION_OFFSET_FROM_RIGHT = 8;
export const ACTION_SIZE = 16;