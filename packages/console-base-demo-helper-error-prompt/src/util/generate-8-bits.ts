const SEED = Math.pow(36, 8);

export default function generate8Bits(): string {
  return Math.round(SEED * Math.random()).toString(36).toUpperCase().padStart(8, '0');
}