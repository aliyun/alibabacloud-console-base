export interface IPayloadResourceGroup { // TODO mv to types package
  id: string;
  name: string;
  displayName: string;
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