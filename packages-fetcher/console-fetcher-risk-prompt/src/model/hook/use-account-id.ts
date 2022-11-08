import useModelProps from './_use-model-props';

export default function useAccountId(): string {
  return useModelProps().accountId;
}