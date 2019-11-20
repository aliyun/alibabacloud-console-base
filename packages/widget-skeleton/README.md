# @alicloud/widget-skeleton
一个通用的、可定制化的骨架屏组件。

## 安装
```sh
npm install --save @alicloud/widget-skeleton
```

## 用法
### 基本用法
```jsx
import Skeleton from '@alicloud/widget-skeleton'

<Suspense fallback={<Skeleton />}>
  <YourLazilyLoadedComponent />
</Suspense>

```

### 效果
<img src="https://gw.alicdn.com/tfs/TB1y7p9e8iE3KVjSZFMXXbQhVXa-980-480.png" width="550px">


### 定制骨架条颜色
```jsx
import Skeleton from '@alicloud/widget-skeleton'

<Suspense fallback={<Skeleton color="green" />}>
  <YourLazilyLoadedComponent />
</Suspense>
```

### 效果
<img src="https://gw.alicdn.com/tfs/TB1LtN.e75E3KVjSZFCXXbuzXXa-984-458.png" width="550px">


### 定制背景色
```jsx
import Skeleton from '@alicloud/widget-skeleton'

<Suspense fallback={<Skeleton backgroundColor="green" />}>
  <YourLazilyLoadedComponent />
</Suspense>
```

### 效果
<img src="https://gw.alicdn.com/tfs/TB1efage8Cw3KVjSZFuXXcAOpXa-988-468.png" width="550px">


### 定制骨架屏高度
```jsx
import Skeleton from '@alicloud/widget-skeleton'

<Suspense fallback={<Skeleton height="400px" />}>
  <YourLazilyLoadedComponent />
</Suspense>
```

### 效果
<img src="https://gw.alicdn.com/tfs/TB1XFqheYus3KVjSZKbXXXqkFXa-994-792.png" width="550px">


### 定制骨架条高度与间隔
```jsx
import Skeleton from '@alicloud/widget-skeleton'

<Suspense fallback={<Skeleton barHeight="8px" lineHeight="8px" />}>
  <YourLazilyLoadedComponent />
</Suspense>
```

### 效果
<img src="https://gw.alicdn.com/tfs/TB1n8dYdQxz61VjSZFtXXaDSVXa-978-438.png" width="550px">


### 定制绘制模式
#### 1. 随机（默认）
```jsx
import Skeleton from '@alicloud/widget-skeleton'

<Suspense fallback={<Skeleton mode="random" />}>
  <YourLazilyLoadedComponent />
</Suspense>
```

#### 效果
<img src="https://gw.alicdn.com/tfs/TB17OKde8Gw3KVjSZFwXXbQ2FXa-994-450.png" width="550px">

#### 2. 填充
```jsx
import Skeleton from '@alicloud/widget-skeleton'

<Suspense fallback={<Skeleton mode="fill" />}>
  <YourLazilyLoadedComponent />
</Suspense>
```

#### 效果
<img src="https://gw.alicdn.com/tfs/TB1_Vl.e.GF3KVjSZFmXXbqPXXa-1006-446.png" width="550px">


### 复杂定制（Topbar）
```jsx
import Skeleton from '@alicloud/widget-skeleton'

<Suspense fallback={<Skeleton height="50px" barHeight="6px" lineHeight="12px" padding="12px" backgroundColor="grey" />}>
  <YourLazilyLoadedComponent />
</Suspense>
```

#### 效果
<img src="https://gw.alicdn.com/tfs/TB1e8R.e21H3KVjSZFBXXbSMXXa-1020-632.png" width="550px">


### 复杂定制（Sidebar）
```jsx
import Skeleton from '@alicloud/widget-skeleton'

<Suspense fallback={<Skeleton width="50px" height="610px" barHeight="16px" lineHeight="24px" padding="16px" backgroundColor="grey" mode="fill" />}>
  <YourLazilyLoadedComponent />
</Suspense>
```

#### 效果
<img src="https://gw.alicdn.com/tfs/TB159jmcfBj_uVjSZFpXXc0SXXa-1018-1244.png" width="550px">


## API
参数|说明|类型|必填|默认值
---|---|---|---|---
width|骨架屏的宽度|String|否|100%
height|骨架屏的高度|String|否|240px
color|骨架条颜色|String|否|#e6e6e6
backgroundColor|骨架屏背景色|String|否|#fff
padding|骨架屏的 padding ，只支持单个值|String|否|24px
barHeight|骨架条的高度|String|否|10px
lineHeight|骨架条的间距|String|否|30px
minBarWidth|骨架条的最小宽度|String|否|200px
maxBarWidth|骨架条的最大宽度|String|否|width - 2 * padding
mode|绘制模式，支持「填充」和「随机」两种方式|String|否|random