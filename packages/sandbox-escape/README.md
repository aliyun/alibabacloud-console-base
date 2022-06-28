# @alicloud/sandbox-escape

沙箱逃逸，虽然 ConsoleBase 不属于沙箱，但有沙箱应用会用到 ConsoleBase 提供的包，需要保证 ConsoleBase 在这些沙箱应用下可以用到真正的 window 等全局对象。
