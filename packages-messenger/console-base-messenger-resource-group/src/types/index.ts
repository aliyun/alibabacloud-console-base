export interface IPayloadResourceGroup {
  id: string;
  name: string;
  defaultOne?: boolean;
  payload?: string;
}

export interface IPayloadResourceGroupProps {
  // 数据
  resourceGroupId?: string;
  resourceCount?: Record<string, number>;
  // 展示
  visible?: boolean;
  disabled?: boolean;
  noDefault?: boolean;
}