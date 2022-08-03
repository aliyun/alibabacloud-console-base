# @alicloud/console-base-messenger-pref

Messenger for Pref

* `toggleMicroPref(visible = true): void` 打开/关闭微偏好面板
* `microPrefUpdated<T>(key: string, value: T): void` 通知某偏好变化
* `onToggleMicroPref(fn: (visible: boolean) => void): Unsubscribe` 响应打开/关闭微偏好面板
* `onMicroPrefUpdated<T = unknown>(fn: (key: string, value: T) => void): Unsubscribe` 响应通知某偏好变化