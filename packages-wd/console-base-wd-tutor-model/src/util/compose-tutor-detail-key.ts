export default function composeTutorDetailKey(productId: string, tutorId: string): string {
  return `${productId}~${tutorId}`;
}