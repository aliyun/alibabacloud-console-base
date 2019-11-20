import EventEmitter from '@alicloud/widget-event-emitter'
import widgetStore from '../widgetStore'


function getEventEmitter() {
  if (!widgetStore.get('eventEmitter')) {
    const ee = new EventEmitter()
    widgetStore.set('eventEmitter', ee)
  }
  
  return widgetStore.get('eventEmitter')
}

// We execute the function here to initialize the eventEmitter more early
// and ignore the return
getEventEmitter()

export default getEventEmitter
