export default function isContainedBy(containedNode: Node | null, parentNode: Node | null): boolean {
  if (!parentNode) {
    return false;
  }
  
  try { // https://developer.mozilla.org/en-US/docs/Web/API/Node/contains
    return parentNode.contains(containedNode);
  } catch (err) {
    return false;
  }
}
