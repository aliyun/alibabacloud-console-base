import React, {
  useState,
  useCallback
} from 'react';

import {
  H1,
  P,
  List,
  Button,
  PrePromise,
  InputText
} from '@alicloud/demo-rc-elements';

import PkgInfo from '../pkg-info';

import {
  dataUserAkList,
  dataUserAkLeakList,
  dataConsoleBenchProducts,
  dataConsoleBenchProductsMy
} from './data';

export default function ConsoleApiTest(): JSX.Element {
  const [stateUser, setStateUser] = useState<string>('stonehenge@flyinhighwj.onaliyun.com');
  const [statePromise, setStatePromise] = useState<Promise<unknown> | null>(null);
  
  const handleFetch = useCallback(() => setStatePromise(dataUserAkList(stateUser)), [stateUser, setStatePromise]);
  const handleFetch2 = useCallback(() => setStatePromise(dataUserAkLeakList()), [setStatePromise]);
  const handleFetch3 = useCallback(() => setStatePromise(dataConsoleBenchProducts()), [setStatePromise]);
  const handleFetch4 = useCallback(() => setStatePromise(dataConsoleBenchProductsMy()), [setStatePromise]);
  
  return <>
    <PkgInfo />
    <H1>RAM User AK 接口</H1>
    <P>用于测试如下功能：</P>
    <List ordered>
      <>调用 OpenAPI 是否成功</>
      <>调用 OpenAPI Multi 是否成功且自动</>
    </List>
    <div>
      当前等用户有权限的子账号（全名） <InputText {...{
        value: stateUser,
        onChange: setStateUser
      }} />
    </div>
    <div>对应 RAM 地址：<a href={`//ram.console.aliyun.com/users/${stateUser.split('@')[0]}`} target="_blank" rel="noopener noreferrer">{stateUser}</a></div>
    <Button onClick={handleFetch}>dataUserAkList</Button>
    <Button onClick={handleFetch2}>dataUserAkLeakList</Button>
    <Button onClick={handleFetch3}>dataConsoleBenchProducts</Button>
    <Button onClick={handleFetch4}>dataConsoleBenchProductsMy</Button>
    <PrePromise promise={statePromise} />
  </>;
}
