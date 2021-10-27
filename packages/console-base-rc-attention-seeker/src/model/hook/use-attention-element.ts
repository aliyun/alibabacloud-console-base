import useAttentionSeeker from './use-attention-seeker';

export default function useAttentionElement(): HTMLElement | null {
  const attentionSeeker = useAttentionSeeker();
  
  return attentionSeeker ? attentionSeeker.element : null;
}
