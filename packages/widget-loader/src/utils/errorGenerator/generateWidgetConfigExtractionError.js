export default function generateWidgetConfigExtractionError({ message, stack }) {
  return {
    code: 'widget_config_extraction',
    message,
    stack
  }
}