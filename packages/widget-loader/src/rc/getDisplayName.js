function getDisplayName(WrappedComponent) {
  return WrappedComponent.displayName || WrappedComponent.name || 'WidgetFromLoader'
}

export default getDisplayName
