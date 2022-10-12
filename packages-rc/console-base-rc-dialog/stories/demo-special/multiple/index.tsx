import React, {
  useState
} from 'react';
import styled from 'styled-components';

import {
  H1,
  Button
} from '@alicloud/demo-rc-elements';

import Dialog from '../../../src';

const Sc1 = styled.div`
  background-color: #f00;
  height: 600px;
`;
const Sc2 = styled.div`
  background-color: #0f0;
  height: 400px;
`;
const Sc3 = styled.div`
  background-color: #00f;
  height: 200px;
`;

export default function Multiple(): JSX.Element {
  const [yes1, setYes1] = useState<boolean>(false);
  const [yes2, setYes2] = useState<boolean>(false);
  const [yes3, setYes3] = useState<boolean>(false);
  
  return <>
    <H1>多个 Dialog 一起打开</H1>
    <Button {...{
      onClick: () => setYes1(true)
    }}>open 1</Button>
    <Button {...{
      onClick: () => setYes2(true)
    }}>open 2</Button>
    <Button {...{
      onClick: () => setYes3(true)
    }}>open 3</Button>
    <Button {...{
      onClick: () => {
        setYes1(true);
        setYes2(true);
      }
    }}>open 1 + 2</Button>
    <Button {...{
      onClick: () => {
        setYes1(true);
        setYes2(true);
        setYes3(true);
      }
    }}>open 1 + 2 + 3</Button>
    
    {yes1 ? <Dialog {...{
      content: <Sc1>1111</Sc1>,
      onClose() {
        setYes1(false);
      }
    }} /> : null}
    {yes2 ? <Dialog {...{
      content: <Sc2>2222</Sc2>,
      onClose() {
        setYes2(false);
      }
    }} /> : null}
    {yes3 ? <Dialog {...{
      content: <Sc3>3333</Sc3>,
      onClose() {
        setYes3(false);
      }
    }} /> : null}
  </>;
}
