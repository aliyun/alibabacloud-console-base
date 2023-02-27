/* eslint-disable @typescript-eslint/naming-convention */
export enum EIconType { // 注意这里的 key 用于组件的对外 props，不要随意修改，且保持小写
  // logo
  'logo-aliyun' = 'e605', // [-]
  'logo-aliyun-word-cn' = 'e653', // 图标文字 - 「阿里云」
  'logo-aliyun-word-en' = 'e654', // 图标文字 - 「Alibaba Cloud」
  // 提示
  'info-circle' = 'e81e', // 信息 - 圈
  'info-circle-fill' = 'e7dc', // 信息 - 填充
  'help-circle' = 'e81f', // 帮助 - 圈
  'help-circle-fill' = 'e7dd', // 帮助 - 填充
  'alert-circle' = 'e821', // 警告 - 圈
  'alert-circle-fill' = 'e7de', // 警告 - 填充
  'success-circle' = 'e824', // 成功 - 圈
  'success-circle-fill' = 'e7e2', // 成功 - 填充
  'error-circle' = 'e823', // 错误 - 圈
  'error-circle-fill' = 'e7e1', // 错误 - 填充
  // 方向
  'angle-up' = 'e660', // 角箭头 - 上
  'angle-right' = 'e65e', // 角箭头 - 右
  'angle-down' = 'e65a', // 角箭头 - 下
  'angle-left' = 'e658', // 角箭头 - 左
  'arrow-left' = 'e7c3', // 箭头 ← - 左
  'arrow-right' = 'e88c', // 箭头 → - 右
  'angle-circle-right' = 'e60c', // 圈圈箭头 - 右
  // 用户
  'user-ak' = 'e871', // AK
  'user-ambassador' = 'e870', // 云大使（推荐返利后台）
  'user-auth' = 'e624', // 实名认证
  'user-club' = 'e861', // 会员积分
  'user-info' = 'e607', // 用户基本信息
  'user-security' = 'e668', // 安全信息管理
  'user-ram' = 'e862', // 访问控制（RAM）
  'user-rights' = 'e85d', // 会员权益
  'user-sc' = 'e777', // 安全控制（Security Control）
  'user-ss' = 'e600', // 安全设置（Security Settings）
  // 工具组
  'toolkit-api' = 'e740', // API Inspector
  'toolkit-contact' = 'e61f', // 联系我们
  'toolkit-contact-pre-sale' = 'e8c1', // 联系我们 - 售前智能在线
  'toolkit-contact-post-sale' = 'e69d', // 联系我们 - 售后智能在线
  'toolkit-contact-listen' = 'e8ce', // 联系我们 - 聆听
  'toolkit-qr' = 'e640', // QR
  'toolkit-survey' = 'e606', // 问卷
  'toolkit-version-new' = 'e62e', // 尝试新版
  'toolkit-version-old' = 'e72f', // 返回旧版
  // 收藏、评分
  'star-hollow' = 'e609',
  'star' = 'e611',
  // 常用
  'feedback' = 'e697',
  'home' = 'e88b', // 首页
  'plus' = 'e659', // +
  'minus' = 'e768', // -
  'x' = 'e61d', // x
  'check' = 'e645', // ✓
  'ellipsis' = 'e74f', // ...
  'config' = 'e612', // 配置（齿轮）
  'preference' = 'e6b5', // 偏好设置
  'refresh' = 'e6c1', // 刷新
  'loading' = 'e602', // 加载中
  'search' = 'e82e', // 搜索
  'filter' = 'e608', // 过滤
  'copy' = 'e60d', // 复制
  'external' = 'e610', // 外部链接
  'cart' = 'e882', // 购物车
  'lang' = 'e70b', // 语言
  'recycle-bin' = 'e621', // 删除（垃圾桶）
  'share' = 'e8d5', // 分享
  'thumb-up' = 'e601', // 大拇指朝上
  'thumb-down' = 'e88d', // 大拇指朝下
  // 其他 TODO 将业务 Icon 和组件 Icon 分开
  'lab' = 'e671', // 实验室
  'uv' = 'e6bf',
  'time' = 'e729',
  'apps' = 'e60e', // 应用（负数）
  'app' = 'e603', // 应用（单个）
  'app-mobile' = 'e61b', // 手机应用（下载）
  'dingding' = 'e881', // 钉钉
  'user-dialogue' = 'e670', // 在线技术咨询（钉钉客联）
  'drag' = 'e6e1', // 拖拽
  'empty' = 'e655', // 空
  'face-cry' = 'e7f8', // 哭脸
  'face-smile' = 'e7f9', // 笑脸
  'global' = 'e70d', // 全球
  'go-top' = 'e694', // 回到顶部
  'lights-on' = 'e664', // 主题 - 亮
  'lights-off' = 'e665', // 主题 - 暗
  'menu-all' = 'e6e3', // 菜单（九宫格）
  'notice' = 'e887', // 通知（铃铛）
  'pin' = 'e79e', // 固定
  'region' = 'e65b', // 地域
  'stick-right' = 'e657', // 面板 - 固定到右侧
  'terminal' = 'e866', // 终端
  'resource-group' = 'e634', // 资源组
  'self-svc-hall' = 'e62f' // 自助服务大厅
}
