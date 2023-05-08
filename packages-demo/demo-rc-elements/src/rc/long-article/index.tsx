import React from 'react';
import styled from 'styled-components';

const ScLongArticle = styled.article`
  color: #333;
  
  .theme-dark & {
    color: #ccc;
  }
  
  audio {
    width: 100%;
  }
  
  h1,
  h2 {
    font-weight: 400;
    
    &:last-child {
      margin-bottom: 0;
    }
  }
  
  h1 {
    margin: 0.24em 0 0.5em 0;
    font-size: 1.6em;
  }
  
  h2 {
    margin: 0;
    font-size: 1em;
  }
`;

const ScLyrics = styled.div`
  margin-top: 1em;
  
  p {
    margin: 0;
    font-weight: 200;
    
    &:nth-child(2n) {
      margin-bottom: 1em;
      color: #999;
    }
  }
`;

/**
 *
 *
 * 网易云音乐 URL
 * 1. 原 URL http://music.163.com/#/song?id=1352879122 找到 ID
 * 2. 组装 http://music.163.com/song/media/outer/url?id={ID}.mp3
 */
const MUSIC_URL = 'https://music.163.com/song/media/outer/url?id=1352879122.mp3';

/**
 * 长文，撑高度用
 */
export default function LongArticle(): JSX.Element {
  return <ScLongArticle>
    <h1>Ich Verlasse Heut&#39; Dein Herz</h1>
    <audio controls src={MUSIC_URL}>
      <track kind="captions" src={MUSIC_URL} />
    </audio>
    <h2>歌手：Lacrimosa</h2>
    <h2>专辑：Elodia</h2>
    <h2>作词：Tilo Wolff</h2>
    <h2>作曲：Tilo Wolff</h2>
    <ScLyrics>
      <p>Ich verlasse heut&#39; Dein Herz</p>
      <p>今天我离开你的心</p>
      <p>Verlasse Deine Liebe</p>
      <p>舍弃你的爱</p>
      <p>Die Zuflucht Deiner Arme</p>
      <p>你双臂的庇护</p>
      <p>Die Warme Deiner Haut</p>
      <p>你肌肤的温暖</p>
      <p>Wie Kinder waren wir</p>
      <p>我们曾像孩子一样</p>
      <p>Spieler Nacht für Nacht</p>
      <p>夜夜嬉戏</p>
      <p>Dem Spiegel treu ergeben</p>
      <p>在镜前流连</p>
      <p>So tanzten wir bis in den Tag</p>
      <p>起舞直至天明</p>
      <p>Ich verlasse heut&#39; Dein Herz</p>
      <p>今天我离开你的心</p>
      <p>Verlasse Deine Liebe</p>
      <p>舍弃你的爱</p>
      <p>Ich verlasse heut&#39; Dein Herz</p>
      <p>今天我离开你的心</p>
      <p>Verlasse Deine Liebe</p>
      <p>舍弃你的爱</p>
      <p>Ich verlasse Deine Tranen</p>
      <p>我抛弃你的泪水</p>
      <p>Verlasse was ich hab&#39;</p>
      <p>抛下我所拥有的一切</p>
      <p>Ich anbefehle heut&#39; Dein Herz</p>
      <p>今天我将你的心交给</p>
      <p>Dem Leben der Freiheit</p>
      <p>生活自由</p>
      <p>Und der Liebe</p>
      <p>还有爱</p>
      <p>So bin ich ruhig</p>
      <p>我是如此平静</p>
      <p>Da ich Dich liebe</p>
      <p>因为我深爱着你</p>
      <p>Im Stillen</p>
      <p>平静地</p>
      <p>Lass ich ab von Dir</p>
      <p>我离开你</p>
      <p>Der letzte Kuss Im Geist verweht</p>
      <p>最后的吻飘散在思绪中</p>
      <p>Was do denkst bleibst do mir schuldig</p>
      <p>你的所思所想我不会反驳</p>
      <p>Was ich fühle das verdanke ich Dir</p>
      <p>我为我所感到的感谢你</p>
      <p>Ich danke Dir für all die Liebe</p>
      <p>感谢你的爱</p>
      <p>Ich danke Dir in Ewigkeit</p>
      <p>感谢你直到永远</p>
      <p>Ich verlasse heut&#39; Dein Herz</p>
      <p>今天我离开你的心</p>
      <p>Verlasse Deine Liebe</p>
      <p>舍弃你的爱</p>
      <p>Ich verlasse Dein Herz</p>
      <p>今天我离开你的心</p>
      <p>Dein Leben Deine Küsse</p>
      <p>你的生活 你的吻</p>
      <p>Deine Warme Deine Nahe</p>
      <p>你的温暖 你的身边</p>
      <p>Deine Zartlichkeit</p>
      <p>你的温柔</p>
      <p>Ich verlasse heut&#39; Dein Herz</p>
      <p>今天我离开你的心</p>
      <p>Ich verlasse heut&#39; Dein Herz</p>
      <p>今天我离开你的心</p>
      <p>Ich verlasse heut&#39; Dein Herz</p>
      <p>今天我离开你的心</p>
      <p />
      <p>~~Guitar Solo~~</p>
      <p />
      <p>~~Keyboard Solo~~</p>
      <p />
      <p>~~Guitar Solo~~</p>
      <p />
      <p>~~SOLO~~</p>
    </ScLyrics>
  </ScLongArticle>;
}
