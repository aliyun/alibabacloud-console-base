import React from 'react';
import styled from 'styled-components';

import {
  IPropsFlex100HBF
} from '../types';

const ScFlexHBF = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const ScHeader = styled.header`
  padding: 0 12px;
  background-color: #dbb585;
  height: 36px;
  line-height: 36px;
  color: #fff;
`;

const ScBody = styled.div`
  flex: 1;
  overflow: auto;
  
  video {
    width: 100%;
  }
`;

const ScFooter = styled.div`
  padding: 0 12px;
  background-color: #ec7f7f;
  height: 48px;
  line-height: 48px;
  color: #fff;
`;

const VIDEO_SRC = '//cloud.video.taobao.com/play/u/2228430214/p/1/e/6/t/1/228097371190.mp4';

function DefaultBody(): JSX.Element {
  return <video src={VIDEO_SRC} controls>
    <track kind="captions" srcLang="en" label={VIDEO_SRC} />
    Your Browser does NOT support video.
  </video>;
}

/**
 * Flex 100% 高度，上中下三部分
 */
export default function Flex100HBF({
  header,
  body,
  footer
}: IPropsFlex100HBF): JSX.Element {
  return <ScFlexHBF>
    <ScHeader>{header || 'header'}</ScHeader>
    <ScBody>
      {body || <DefaultBody />}
    </ScBody>
    <ScFooter>{footer || 'footer'}</ScFooter>
  </ScFlexHBF>;
}
