export interface IPayloadMicroBrowserPortalCreated<P = undefined> {
  portalKey: string;
  title: string;
  extraProps?: P;
}

export interface IPayloadMicroBrowserPortalToggleVisible {
  portalKey: string;
  visible: boolean;
}