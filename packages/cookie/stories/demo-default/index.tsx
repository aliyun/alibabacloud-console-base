import React, {
  useState,
  useCallback
} from 'react';

import {
  H1,
  Button,
  PreJson,
  Table
} from '@alicloud/demo-rc-elements';

import {
  getAllCookies,
  getCookie,
  setCookie,
  deleteCookie, CookieSetOptions
} from '../../src';

interface ITestItem {
  name: string;
  value: string;
  valueGet: string | undefined;
  sameSite: CookieSetOptions['sameSite'];
  secure: CookieSetOptions['secure'];
}

const TEST_COOKIE = 'boshit_cookie';
const ALL_COOKIES = getAllCookies();
const ONE_COOKIE = getCookie(TEST_COOKIE);

const SAME_SITES = [undefined, 'Lax', 'Strict', 'None'] as [undefined, CookieSetOptions['sameSite'], CookieSetOptions['sameSite'], CookieSetOptions['sameSite']];
const SECURES = [undefined, true, false];
const TIME = Date.now();

const TEST_ITEMS: ITestItem[] = SAME_SITES.reduce((result: ITestItem[], sameSite) => {
  SECURES.forEach(secure => {
    const name = `SameSite_${sameSite}__Secure_${secure}`;
    const value = `${sameSite}_${secure}_${TIME}`;
    
    setCookie(name, value, {
      sameSite,
      secure
    });
    
    result.push({
      name,
      value,
      valueGet: getCookie(name),
      sameSite,
      secure
    });
  });
  
  return result;
}, []);

export default function DemoDefault(): JSX.Element {
  const [stateCookies, setStateCookies] = useState(ALL_COOKIES);
  const [stateOneCookie, setStateOneCookie] = useState(ONE_COOKIE);
  
  const handleRefreshAll = useCallback(() => setStateCookies(getAllCookies()), [setStateCookies]);
  const handleRefreshOne = useCallback(() => setStateOneCookie(getCookie(TEST_COOKIE)), [setStateOneCookie]);
  
  const handleSetCookie = useCallback(() => {
    setCookie(TEST_COOKIE, new Date().toISOString());
    handleRefreshAll();
    handleRefreshOne();
  }, [handleRefreshAll, handleRefreshOne]);
  const handleDeleteCookie = useCallback(() => {
    deleteCookie(TEST_COOKIE);
    handleRefreshAll();
    handleRefreshOne();
  }, [handleRefreshAll, handleRefreshOne]);
  
  return <>
    <H1>全部 Cookie</H1>
    <Button onClick={handleDeleteCookie}>{`deleteCookie('${TEST_COOKIE}')`}</Button>
    <Button onClick={handleSetCookie}>{`setCookie('${TEST_COOKIE}') → getCookie('${TEST_COOKIE}') → ${stateOneCookie}`}</Button>
    <PreJson o={stateCookies} />
    <Table<ITestItem> {...{
      dataSource: TEST_ITEMS,
      columns: [{
        title: 'Cookie',
        dataIndex: 'name'
      }, {
        title: 'SameSite',
        dataIndex: 'sameSite'
      }, {
        title: 'Secure',
        dataIndex: 'secure'
      }, {
        title: '设置值',
        dataIndex: 'value'
      }, {
        title: '获取值',
        dataIndex: 'valueGet'
      }, {
        title: '结果',
        renderCell: o => (o.value === o.valueGet ? <span>✅</span> : <span>❌</span>)
      }]
    }} />
  </>;
}
