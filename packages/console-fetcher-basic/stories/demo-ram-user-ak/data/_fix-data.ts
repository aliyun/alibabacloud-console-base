export default function fixDate(d: string): Date | null {
  return d ? new Date(d) : null;
}
