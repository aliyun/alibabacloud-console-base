import React, {
  useState,
  useCallback
} from 'react';

import {
  H1,
  Button,
  CleanJson
} from '@alicloud/demo-rc-elements';

import {
  getAllCookies,
  getCookie,
  setCookie,
  deleteCookie
} from '../../src';

const TEST_COOKIE = 'boshit_cookie';
const ALL_COOKIES = getAllCookies();
const ONE_COOKIE = getCookie(TEST_COOKIE);

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
    <Button onClick={handleSetCookie}>setCookie</Button>
    <Button onClick={handleDeleteCookie}>deleteCookie</Button>
    <span>getCookie({TEST_COOKIE}) → {stateOneCookie}</span>
    <CleanJson {...{
      caption: 'cookies',
      o: stateCookies
    }} />
  </>;
}
