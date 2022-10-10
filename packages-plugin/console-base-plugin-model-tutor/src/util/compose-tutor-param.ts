import composeTutorDetailKey from './compose-tutor-detail-key';

export default function composeTutorParam(productId: string, tutorId: string, step: number): string {
  const key = composeTutorDetailKey(productId, tutorId);
  
  return step > 0 ? `${key}~${step}` : key;
}