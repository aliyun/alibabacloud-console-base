import React, {
  useState,
  useCallback,
  useEffect
} from 'react';

import {
  H1,
  P,
  List,
  Button,
  PrePromise,
  InputText
} from '@alicloud/demo-rc-elements';

import dataUserAkList from './data/user-ak-list';

export default function ConsoleApiTest(): JSX.Element {
  const [stateUser, setStateUser] = useState<string>('jianchun.wang.1@boshit.onaliyun.com');
  const [statePromise, setStatePromise] = useState<Promise<unknown> | null>(null);
  
  const handleFetch = useCallback(() => setStatePromise(dataUserAkList(stateUser)), [stateUser, setStatePromise]);
  
  useEffect(handleFetch, [handleFetch]);
  
  return <>
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
    <div>对应 RAM 地址：<a href={`//ram.console.aliyun.com/users/${stateUser.split('@')[0]}`} target="_blank">{stateUser}</a></div>
    <Button onClick={handleFetch}>fetch</Button>
    <PrePromise promise={statePromise} />
  </>;
}
