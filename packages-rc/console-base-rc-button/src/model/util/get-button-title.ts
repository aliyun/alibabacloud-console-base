export default function getButtonTitle(title?: string | boolean, label?: unknown): string | undefined {
  if (!title) {
    return;
  }
  
  if (typeof title === 'string') {
    return title;
  }
  
  if (typeof label === 'string') { // title === true
    return label;
  }
}