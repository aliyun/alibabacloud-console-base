export default function getButtonAriaLabel(ariaLabel?: string, title?: string, label?: unknown): string | undefined {
  if (ariaLabel) {
    return ariaLabel;
  }
  
  if (title) {
    return title;
  }
  
  if (typeof label === 'string') {
    return label;
  }
}