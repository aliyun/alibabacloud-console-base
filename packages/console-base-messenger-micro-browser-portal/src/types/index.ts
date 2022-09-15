export interface IPayloadMicroBrowserPortalCreated<E = unknown> {
  portalKey: string;
  title: string;
  extra?: E;
}

export interface IPayloadMicroBrowserPortalToggleVisible {
  portalKey: string;
  visible: boolean;
}