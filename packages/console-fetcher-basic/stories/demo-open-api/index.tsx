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
import dataUserAkLeakList from './data/user-ak-leak-list';
import dataConsolebenchProducts from './data/consolebench-products';
import dataConsolebenchProductsMy from './data/consolebench-products-my';

export default function ConsoleApiTest(): JSX.Element {
  const [stateUser, setStateUser] = useState<string>('jianchun.wang.1@boshit.onaliyun.com');
  const [statePromise, setStatePromise] = useState<Promise<unknown> | null>(null);
  const [statePromise2, setStatePromise2] = useState<Promise<unknown> | null>(null);
  const [statePromise3, setStatePromise3] = useState<Promise<unknown> | null>(null);
  const [statePromise4, setStatePromise4] = useState<Promise<unknown> | null>(null);
  
  const handleFetch = useCallback(() => setStatePromise(dataUserAkList(stateUser)), [stateUser, setStatePromise]);
  const handleFetch2 = useCallback(() => setStatePromise2(dataUserAkLeakList()), [setStatePromise2]);
  const handleFetch3 = useCallback(() => setStatePromise3(dataConsolebenchProducts()), [setStatePromise3]);
  const handleFetch4 = useCallback(() => setStatePromise4(dataConsolebenchProductsMy()), [setStatePromise4]);
  
  useEffect(() => {
    handleFetch();
    handleFetch2();
    handleFetch3();
    handleFetch4();
  }, [handleFetch, handleFetch2, handleFetch3, handleFetch4]);
  
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
    <Button onClick={handleFetch2}>fetch2</Button>
    <Button onClick={handleFetch3}>fetch3</Button>
    <Button onClick={handleFetch4}>fetch4</Button>
    <PrePromise promise={statePromise} />
    <PrePromise promise={statePromise2} />
    <PrePromise promise={statePromise3} />
    <PrePromise promise={statePromise4} />
  </>;
}
