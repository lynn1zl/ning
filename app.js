'use strict';

/* =========================================================
   아이콘
   ========================================================= */
const ICONS = {
  text: '<path d="M4 6h16M4 11h16M4 16h10"/>',
  grid: '<rect x="4" y="4" width="7" height="7" rx="2"/><rect x="13" y="4" width="7" height="7" rx="2"/><rect x="4" y="13" width="7" height="7" rx="2"/><rect x="13" y="13" width="7" height="7" rx="2"/>',
  bubble: '<path d="M5 5h14a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-7l-4 3v-3H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2z"/>',
  person: '<circle cx="12" cy="8.5" r="3.5"/><path d="M5 20c1.2-3.6 4-5.2 7-5.2s5.8 1.6 7 5.2"/>',
  type: '<path d="M4 7V5h16v2M12 5v14M9 19h6"/>',
  frame: '<path d="M8 4H5a1 1 0 0 0-1 1v3M16 4h3a1 1 0 0 1 1 1v3M8 20H5a1 1 0 0 1-1-1v-3M16 20h3a1 1 0 0 0 1-1v-3"/>',
  code: '<path d="m9 8-4 4 4 4M15 8l4 4-4 4"/>',
  undo: '<path d="M9 14 4 9l5-5"/><path d="M4 9h10.5a5.5 5.5 0 0 1 0 11H11"/>',
  redo: '<path d="m15 14 5-5-5-5"/><path d="M20 9H9.5a5.5 5.5 0 0 0 0 11H13"/>',
  more: '<circle cx="5.5" cy="12" r="1.3" fill="currentColor"/><circle cx="12" cy="12" r="1.3" fill="currentColor"/><circle cx="18.5" cy="12" r="1.3" fill="currentColor"/>',
  download: '<path d="M12 4v11M7 10.5l5 5 5-5M5 20h14"/>',
  share: '<path d="M12 15V4M8 8l4-4 4 4"/><path d="M6 12v6a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-6"/>',
  copy: '<rect x="9" y="9" width="11" height="11" rx="2.5"/><path d="M5 15V6.5A2.5 2.5 0 0 1 7.5 4H15"/>',
  plus: '<path d="M12 5v14M5 12h14"/>',
  minus: '<path d="M5 12h14"/>',
  fit: '<path d="M4 9V4h5M20 9V4h-5M4 15v5h5M20 15v5h-5"/>',
  check: '<path d="m5 12.5 4.5 4.5L19 7.5"/>',
  close: '<path d="M6 6l12 12M18 6 6 18"/>',
  camera: '<path d="M4 8.5A1.5 1.5 0 0 1 5.5 7h2l1.5-2h6l1.5 2h2A1.5 1.5 0 0 1 20 8.5v9a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 4 17.5z"/><circle cx="12" cy="13" r="3.2"/>',
  trash: '<path d="M5 7h14M10 4h4M7 7l1 12.5a1.5 1.5 0 0 0 1.5 1.5h5a1.5 1.5 0 0 0 1.5-1.5L17 7"/>',
  up: '<path d="m6 15 6-6 6 6"/>',
  down: '<path d="m6 9 6 6 6-6"/>',
  chevron: '<path d="m9 6 6 6-6 6"/>',
  folder: '<path d="M3.5 7.5A2 2 0 0 1 5.5 5.5h3.6l2 2h7.4a2 2 0 0 1 2 2v7.5a2 2 0 0 1-2 2h-13a2 2 0 0 1-2-2z"/>',
  refresh: '<path d="M19 12a7 7 0 1 1-2.05-4.95M19 4.5V8h-3.5"/>',
  marker: '<path d="m15 4 5 5-8.5 8.5H7v-4.5z"/><path d="M4 20.5h16"/>',
  chevdown: '<path d="m7 10 5 5 5-5"/>',
  image: '<rect x="4" y="5" width="16" height="14" rx="2.5"/><circle cx="9" cy="10" r="1.6"/><path d="m5 17 4.5-4.5 3 3L15 13l4 4"/>',
};
const icon = (n) => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ICONS[n] || ''}</svg>`;
const BUNNY = '<ellipse cx="8.4" cy="7.2" rx="2.4" ry="5.6" transform="rotate(-12 8.4 7.2)"/><ellipse cx="15.6" cy="7.2" rx="2.4" ry="5.6" transform="rotate(12 15.6 7.2)"/><ellipse cx="12" cy="15.4" rx="7" ry="6.3"/>';
const BRAND = `<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">${BUNNY}<circle cx="9.4" cy="14.8" r="1" fill="#3182f6"/><circle cx="14.6" cy="14.8" r="1" fill="#3182f6"/></svg>`;

const SHAPE_ICONS = {
  auto: '<rect x="7" y="6" width="34" height="20" rx="8" fill="none" stroke="currentColor" stroke-width="1.8" stroke-dasharray="3 3"/><path d="M24 10.5l1.4 3.6 3.6 1.4-3.6 1.4-1.4 3.6-1.4-3.6-3.6-1.4 3.6-1.4z"/>',
  round: '<rect x="8" y="6" width="34" height="20" rx="8"/><path d="M9.5 12 3 15.5l6.5 3z"/>',
  pill: '<rect x="5" y="7" width="38" height="18" rx="9"/>',
  square: '<rect x="8" y="6" width="34" height="20" rx="1.5"/><path d="M9.5 12 3 15.5l6.5 3z"/>',
  messenger: '<path d="M8 6h28a6 6 0 0 1 6 6v8a6 6 0 0 1-6 6H14a6 6 0 0 1-6-6z"/>',
  thought: '<rect x="9" y="3" width="34" height="20" rx="10"/><circle cx="13" cy="26" r="2.8"/><circle cx="8" cy="29.5" r="1.6"/>',
  shout: '<path d="M5 5l6 3.5 5-4 5 4 5-4 5 4 5-4 5 4 3-3.5-1 7.5 3 4.5-3 4.5 1 7.5-4-3.5-5 4-5-4-5 4-5-4-5 4-5-4-4 3.5 1-7.5-3-4.5 3-4.5z"/>',
  outline: '<rect x="8" y="6" width="34" height="20" rx="8" fill="none" stroke="currentColor" stroke-width="2"/>',
  dashed: '<rect x="8" y="6" width="34" height="20" rx="8" fill="none" stroke="currentColor" stroke-width="2" stroke-dasharray="4 3"/>',
  minimal: '<rect x="8" y="6" width="3" height="20" rx="1.5"/><rect x="15" y="10" width="25" height="3.5" rx="1.75" opacity=".5"/><rect x="15" y="18.5" width="17" height="3.5" rx="1.75" opacity=".5"/>',
  plain: '<rect x="8" y="10" width="32" height="3.5" rx="1.75" opacity=".55"/><rect x="8" y="18.5" width="22" height="3.5" rx="1.75" opacity=".55"/>',
  game: '<rect x="4" y="9" width="40" height="19" rx="2.5"/><rect x="7" y="4" width="15" height="7" rx="1.5"/><rect x="7.5" y="12" width="33" height="13" rx="1" fill="none" stroke="#fff" stroke-opacity=".7" stroke-width="1.2"/><path d="M36 20.5h4l-2 2.5z" fill="#fff" fill-opacity=".8"/>',
  retro: '<rect x="12" y="8" width="32" height="20" opacity=".45"/><rect x="8" y="4" width="32" height="20"/><path d="M8.5 10 3 13l5.5 3z"/>',
  comic: '<rect x="8" y="5" width="35" height="21" rx="10" fill="none" stroke="currentColor" stroke-width="3"/><path d="M9.5 11 2.5 15l7 3.5" fill="none" stroke="currentColor" stroke-width="3" stroke-linejoin="round"/>',
  system: '<rect x="8" y="10" width="32" height="12" rx="6" opacity=".45"/><rect x="15" y="14.8" width="18" height="2.4" rx="1.2"/>',
};
const shapeSvg = (k) => `<svg viewBox="0 0 48 32" fill="currentColor" aria-hidden="true">${SHAPE_ICONS[k]}</svg>`;

/* =========================================================
   기본 데이터
   ========================================================= */
const STORE_KEY = 'excerpt-studio-v1';

const FONT_GROUPS = { sans: '고딕', serif: '명조', hand: '손글씨', display: '디스플레이', sys: '시스템' };
const FONTS = [
  { n: 'Pretendard', label: '프리텐다드', g: 'sans', css: 'https://cdn.jsdelivr.net/npm/pretendard@1.3.9/dist/web/static/pretendard-dynamic-subset.min.css' },
  { n: 'Noto Sans KR', label: '본고딕', g: 'sans', w: '300;400;500;700;900' },
  { n: 'Nanum Gothic', label: '나눔고딕', g: 'sans', w: '400;700;800' },
  { n: 'Gowun Dodum', label: '고운돋움', g: 'sans', w: '400' },
  { n: 'IBM Plex Sans KR', label: 'IBM Plex Sans KR', g: 'sans', w: '300;400;500;700' },
  { n: 'Gothic A1', label: 'Gothic A1', g: 'sans', w: '300;400;500;700;900' },
  { n: 'Noto Serif KR', label: '본명조', g: 'serif', w: '300;400;500;700;900' },
  { n: 'Nanum Myeongjo', label: '나눔명조', g: 'serif', w: '400;700;800' },
  { n: 'Gowun Batang', label: '고운바탕', g: 'serif', w: '400;700' },
  { n: 'Hahmlet', label: '함렛', g: 'serif', w: '300;400;500;700' },
  { n: 'Song Myung', label: '송명', g: 'serif', w: '400' },
  { n: 'Nanum Pen Script', label: '나눔손글씨 펜', g: 'hand', w: '400' },
  { n: 'Gaegu', label: '개구', g: 'hand', w: '300;400;700' },
  { n: 'Hi Melody', label: '하이멜로디', g: 'hand', w: '400' },
  { n: 'Gamja Flower', label: '감자꽃', g: 'hand', w: '400' },
  { n: 'Poor Story', label: '푸어스토리', g: 'hand', w: '400' },
  { n: 'Yeon Sung', label: '연성', g: 'hand', w: '400' },
  { n: 'East Sea Dokdo', label: '동해독도', g: 'hand', w: '400' },
  { n: 'Jua', label: '주아', g: 'display', w: '400' },
  { n: 'Do Hyeon', label: '도현', g: 'display', w: '400' },
  { n: 'Black Han Sans', label: '검은고딕', g: 'display', w: '400' },
  { n: 'Dongle', label: '동글', g: 'display', w: '300;400;700' },
  { n: 'Orbit', label: '오르빗', g: 'display', w: '400' },
  { n: 'system-ui', label: '시스템 고딕', g: 'sys', sys: true },
  { n: 'serif', label: '시스템 명조', g: 'sys', sys: true },
  { n: 'monospace', label: '고정폭', g: 'sys', sys: true },
];

const SHAPES = [
  ['round', '둥근'], ['pill', '알약'], ['square', '각진'], ['messenger', '메신저'], ['thought', '생각'],
  ['shout', '외침'], ['outline', '외곽선'], ['dashed', '점선'], ['minimal', '라인'], ['plain', '텍스트'],
  ['game', '게임창'], ['retro', '레트로'], ['comic', '만화'], ['system', '시스템'],
];
const TRI_TAIL = ['round', 'pill', 'square', 'outline', 'dashed', 'retro', 'comic'];
const SIDES = [['left', '왼쪽'], ['center', '가운데'], ['right', '오른쪽']];
const ALIGN3 = [['left', '왼쪽'], ['center', '가운데'], ['right', '오른쪽']];
const ALIGN4 = [...ALIGN3, ['justify', '양쪽']];
const WEIGHTS = [[300, '얇게'], [400, '보통'], [500, '중간'], [700, '굵게'], [900, '아주 굵게']];
const RATIOS = [
  ['1:1', '1:1'], ['4:5', '4:5'], ['3:4', '3:4'], ['2:3', '2:3'],
  ['9:16', '9:16'], ['16:9', '16:9'], ['4:3', '4:3'], ['auto', '자유'],
];
const SWATCHES = [
  '#ffffff', '#f7f3ea', '#f2f4f6', '#e5e8eb', '#b0b8c1', '#6b7684', '#333d4b', '#000000',
  '#ffe066', '#ffc078', '#ff8787', '#f783ac', '#da77f2', '#9775fa', '#748ffc', '#4dabf7',
  '#3bc9db', '#38d9a9', '#69db7c', '#a9e34b', '#e3a6a6', '#c8a46a', '#33415c', '#191f28',
];

const SAMPLE = `닝: "니니닝!"`;

const DEFAULTS = {
  text: SAMPLE,
  title: '제목',
  credit: '출처',
  creator: '제작자',
  parse: { auto: true, formats: ['dq', 'sq', 'corner', 'wcorner'], custom: [], mode: 'marked', inline: false, strip: true, nameless: 'none', blank: 'para1', blankV3: true, mergeTl: true, tlShow: 'both', autoChars: true },
  typo: { font: 'Noto Serif KR', fontCustom: '', size: 13.5, lh: 1.7, ls: -0.005, weight: 400, color: '#2a2826', align: 'left', paraMode: 'gap', gap: 10, indent: 1, hl: '#ffe58a', hlStyle: 'under' },
  head: { font: 'Noto Serif KR', fontCustom: '', size: 17, weight: 700, color: '#1d1c1a', align: 'left', creditFont: 'Noto Serif KR', creditFontCustom: '', creditSize: 10.5, creditWeight: 400, creditColor: '#8a857c', creatorFont: 'Noto Serif KR', creatorFontCustom: '', creatorSize: 10.5, creatorWeight: 700, creatorColor: '#6b665e', creditAlign: 'right', creditLayout: 'inline', quoteMark: false, accent: '#c8a46a' },
  bubble: {
    speech: 'round', tail: true, side: 'left',
    font: 'Pretendard', fontCustom: '', size: 13, lh: 1.55, ls: 0, weight: 400,
    bg: '#ffffff', color: '#222222', border: '#2b2a27', bw: 0, radius: 14, px: 12, py: 8, maxw: 78, shadow: true, gap: 12,
    avatar: true, avatarSize: 34, avatarShape: 'circle', showName: true, nameSize: 10.5, nameColor: '#6b665e',
  },
  canvas: { ratio: 'auto', width: 700, pad: 48, bgType: 'solid', bg: '#f7f3ea', bg2: '#e6dcc8', gradType: 'linear', gradAngle: 160, pattern: 'dots', patColor: '#8a7f6a', patOpacity: 0.22, patSize: 18, bgImage: '', overlay: 0, overlayColor: '#000000', valign: 'flex-start', fit: false, paginate: true, pageNum: false, scale: 2 },
  chars: [
    { id: 'c1', name: '닝', avatar: '', side: 'left', shape: '', custom: true, bg: '#f2f4f6', color: '#191f28', border: '#f2f4f6' },
  ],
  overrides: {},
  skin: '',
  bgHtml: '',
  file: { prefix: true, date: true, pair: '', title: '', number: false },
};

const SKINS = {
  note: {
    name: '줄 노트',
    css: `/* 줄 노트: 본문 행간(크기×행간)을 30px에 맞추면 줄과 글자가 맞아요 */
.card {
  background-image:
    linear-gradient(90deg, transparent 30px, #f0b4b4 30px, #f0b4b4 31px, transparent 31px),
    repeating-linear-gradient(transparent 0 29px, #dbe4ee 29px 30px);
}`,
  },
  film: {
    name: '영화 자막',
    css: `/* 영화 자막: 사진 없이 가운데 정렬된 대사 */
.msg, .msg-right { flex-direction: column; align-items: center; gap: 4px; }
.msg .msg-body { align-items: center; max-width: 100%; }
.avatar { display: none; }
.bubble { background: none; border: 0; box-shadow: none; padding: 0; text-align: center; clip-path: none; color: var(--b-color); }
.bubble::before, .bubble::after { display: none; }
.narr { text-align: center; font-style: italic; opacity: .75; }`,
  },
  pastel: {
    name: '파스텔 그라데이션',
    css: `.card {
  background-image: linear-gradient(160deg, #ffe3ec 0%, #ece6ff 50%, #dff3ff 100%);
}
.card { --b-shadow: drop-shadow(0 4px 10px rgba(120, 100, 180, .18)); }`,
  },
  vintage: {
    name: '빈티지 액자',
    css: `.card {
  background-image: radial-gradient(ellipse at center, transparent 55%, rgba(90, 60, 20, .25) 100%);
}
.card::after {
  content: ""; position: absolute; inset: 14px; pointer-events: none;
  border: 1px solid rgba(80, 55, 30, .35);
  outline: 1px solid rgba(80, 55, 30, .2); outline-offset: 4px;
}`,
  },
  terminal: {
    name: '레트로 터미널',
    css: `.card { text-shadow: 0 0 6px rgba(77, 255, 136, .5); }
.bubble { border-radius: 0; }
.card::after {
  content: ""; position: absolute; inset: 0; pointer-events: none;
  background: repeating-linear-gradient(rgba(0,0,0,.22) 0 1px, transparent 1px 3px);
}`,
  },
  chungking: {
    name: '중경삼림 무드',
    css: `/* 네온 번짐 · 필름 그레인 · 비네팅 */
.card-title { letter-spacing: .14em; text-shadow: 1.5px 0 rgba(0, 255, 220, .45), -1.5px 0 rgba(255, 40, 90, .55), 0 0 14px rgba(255, 90, 78, .45); }
.bubble { text-shadow: 0 1px 2px rgba(0, 0, 0, .7), 0 0 10px rgba(255, 216, 74, .25); letter-spacing: .02em; }
.name { letter-spacing: .12em; text-transform: uppercase; }
.narr { text-shadow: 0 0 6px rgba(127, 209, 185, .18); }
.shape-plain .bubble { color: var(--b-color); }
.card::after {
  content: ""; position: absolute; inset: 0; pointer-events: none;
  background-image:
    radial-gradient(ellipse at 50% 45%, transparent 45%, rgba(0, 0, 0, .55) 100%),
    url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='2' stitchTiles='stitch'/%3E%3CfeColorMatrix values='0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 .14 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
}`,
  },
  polaroid: {
    name: '폴라로이드',
    css: `.card { box-shadow: inset 0 0 0 18px #ffffff, inset 0 0 0 19px rgba(0,0,0,.06); }
.card-footer { margin-top: 28px; }`,
  },
  glass: {
    name: '반투명 말풍선',
    css: `/* 배경 이미지와 함께 쓰면 좋아요 */
.bubble { --b-bg: rgba(255, 255, 255, .78); --b-border: rgba(255, 255, 255, .6); --b-bw: 1px; --b-color: #222; }
.msg-right .bubble { --b-bg: rgba(25, 31, 40, .78); --b-border: rgba(25, 31, 40, .78); --b-color: #fff; }
.card { --b-shadow: drop-shadow(0 6px 16px rgba(0, 0, 0, .14)); --name-color: rgba(255, 255, 255, .85); --credit-color: rgba(255, 255, 255, .7); }`,
  },
};

const TEMPLATES = [
  { id: 'paper', name: '따뜻한 종이', sub: '베이지 종이', pv: { bg: '#f7f3ea', fg: '#2b2a27', b1: '#ffffff', b2: '#33415c' }, set: {}, chars: [['#ffffff', '#222222', '#e3a6a6'], ['#33415c', '#ffffff', '#33415c']] },
  {
    id: 'clean', name: '미니멀 화이트', sub: '흰 배경 · 회색/파랑 말풍선', pv: { bg: '#ffffff', fg: '#191f28', b1: '#f2f4f6', b2: '#3182f6' },
    set: { typo: { font: 'Pretendard', color: '#191f28', lh: 1.8, ls: -0.02 }, head: { font: 'Pretendard', color: '#191f28', creditColor: '#8b95a1' }, bubble: { speech: 'messenger', bg: '#f2f4f6', color: '#191f28', shadow: false, nameColor: '#8b95a1' }, canvas: { bg: '#ffffff' } },
    chars: [['#f2f4f6', '#191f28', '#f2f4f6'], ['#3182f6', '#ffffff', '#3182f6']],
  },
  {
    id: 'night', name: '다크 노블', sub: '어두운 배경', pv: { bg: '#17171c', fg: '#e8e4dc', b1: '#2c2c36', b2: '#e8e4dc' },
    set: { typo: { color: '#e8e4dc' }, head: { color: '#ffffff', creditColor: '#8b8b99' }, bubble: { bg: '#26262f', color: '#f2f2f2', border: '#3a3a46', shadow: false, nameColor: '#a3a3b5' }, canvas: { bg: '#17171c' } },
    chars: [['#2c2c36', '#f2f2f2', '#5c5c70'], ['#e8e4dc', '#17171c', '#e8e4dc']],
  },
  {
    id: 'messenger', name: '메신저', sub: '하늘색 배경 · 노란 말풍선', pv: { bg: '#b9cde0', fg: '#4a5a6a', b1: '#ffffff', b2: '#ffe94a' },
    set: { typo: { font: 'Pretendard', size: 12, color: '#4a5a6a', align: 'center', lh: 1.6 }, head: { font: 'Pretendard', size: 20, color: '#2c3a48', creditColor: '#5a6b7c' }, bubble: { speech: 'messenger', radius: 14, shadow: false, nameColor: '#4a5a6a', gap: 12 }, canvas: { bg: '#b9cde0' } },
    chars: [['#ffffff', '#222222', '#ffffff'], ['#ffe94a', '#222222', '#ffe94a']],
  },
  {
    id: 'book', name: '단정한 페이지', sub: '미색 종이 · 글처럼 이어지는 대사', pv: { bg: '#fbfaf6', fg: '#2a2826', book: true },
    set: { typo: { font: 'Gowun Batang', size: 13.5, lh: 1.8, ls: -0.01, align: 'justify', paraMode: 'indent', indent: 1, color: '#262422' }, head: { font: 'Gowun Batang', size: 16, align: 'center', color: '#262422', creditColor: '#8f8a80', creditAlign: 'center', creditSize: 11.5 }, bubble: { speech: 'plain', font: 'Gowun Batang', size: 13.5, lh: 1.8, avatar: false, showName: false, gap: 0 }, canvas: { bg: '#fbfaf6', ratio: '2:3', pad: 52, valign: 'flex-start', pageNum: true } },
    parse: { strip: false }, chars: null, charSide: 'left',
  },
  {
    id: 'quote', name: '인용 카드', sub: '베이지 · 큰 따옴표 장식', pv: { bg: '#f4efe6', fg: '#3a3229', q: '#b08d57', center: true },
    set: { typo: { font: 'Song Myung', size: 21, lh: 1.85, align: 'center', color: '#3a3229' }, head: { font: 'Song Myung', size: 20, align: 'center', color: '#3a3229', creditColor: '#9a8b76', creditAlign: 'center', quoteMark: true, accent: '#b08d57' }, bubble: { speech: 'plain', font: 'Song Myung', size: 19, avatar: false, showName: false, side: 'center' }, canvas: { bg: '#f4efe6', ratio: '1:1', pad: 64, fit: true, valign: 'center' } },
    chars: null, charSide: 'center',
  },
  {
    id: 'line', name: '라인 메신저', sub: '하늘색 · 초록 말풍선 · 프로필', pv: { bg: '#8fabd4', fg: '#3a4a5e', b1: '#ffffff', b2: '#a6e877', center: false },
    set: { typo: { font: 'Pretendard', size: 12, color: '#33475e', align: 'center', lh: 1.6 }, head: { font: 'Pretendard', size: 17, color: '#1f2d3d', creditColor: '#3f5571', creditAlign: 'center' }, bubble: { speech: 'round', font: 'Pretendard', size: 13.5, radius: 18, px: 13, py: 8, shadow: false, tail: true, gap: 10, avatar: true, avatarSize: 36, nameSize: 11, nameColor: '#33475e' }, canvas: { bg: '#8fabd4' } },
    chars: [['#ffffff', '#1d1d1d', '#ffffff'], ['#a6e877', '#1d2a10', '#a6e877']],
  },
  {
    id: 'chungking', name: '중경삼림 무드', sub: '네온 · 필름 그레인 · 노란 자막', pv: { bg: 'linear-gradient(160deg,#103129,#1b1f1a 55%,#3d1a17)', fg: '#e9dcc0', film: true, subtitle: '#ffd84a' },
    set: { typo: { font: 'Noto Serif KR', size: 13.5, color: '#e6dcc4', lh: 1.8, ls: 0.01 }, head: { font: 'Noto Serif KR', size: 19, weight: 700, color: '#ff5a4e', creditColor: '#7fd1b9', creatorColor: '#7fd1b9', align: 'left' }, bubble: { speech: 'plain', font: 'Noto Sans KR', size: 14, weight: 500, color: '#ffd84a', side: 'center', avatar: false, nameColor: '#ff8a7a', nameSize: 10.5, gap: 14 }, canvas: { bgType: 'gradient', bg: '#103129', bg2: '#3d1a17', gradAngle: 160, pad: 52 } },
    skin: SKINS.chungking.css, chars: [['#1b1f1a', '#ffd84a', '#1b1f1a'], ['#1b1f1a', '#9ff0d6', '#1b1f1a']], charSide: 'center',
  },
  {
    id: 'film', name: '영화 자막', sub: '검은 화면 · 자막형 대사', pv: { bg: '#000000', fg: '#9a9a9a', film: true },
    set: { typo: { font: 'Noto Sans KR', color: '#d8d8d8', size: 13 }, head: { font: 'Noto Sans KR', color: '#ffffff', creditColor: '#777777', align: 'center', creditAlign: 'center' }, bubble: { font: 'Noto Sans KR', size: 14.5, color: '#ffffff', nameColor: '#ffd43b', gap: 14 }, canvas: { bg: '#000000', ratio: '16:9', pad: 40, valign: 'center' } },
    skin: SKINS.film.css, chars: [['#000000', '#ffffff', '#000000'], ['#000000', '#ffffff', '#000000']],
  },
  {
    id: 'pastel', name: '파스텔', sub: '파스텔 그라데이션', pv: { bg: 'linear-gradient(160deg,#ffe3ec,#ece6ff 50%,#dff3ff)', fg: '#4a4560', b1: 'rgba(255,255,255,.9)', b2: '#b197fc' },
    set: { typo: { font: 'Gowun Dodum', color: '#4a4560' }, head: { font: 'Gowun Dodum', color: '#3b3552', creditColor: '#8a82a8' }, bubble: { speech: 'pill', font: 'Gowun Dodum', nameColor: '#8a7fb0' }, canvas: { bgType: 'gradient', bg: '#ffe3ec', bg2: '#dff3ff', gradAngle: 160 } }, chars: [['#ffffff', '#4a4560', '#ffffff'], ['#b197fc', '#ffffff', '#b197fc']],
  },
  {
    id: 'vintage', name: '빈티지', sub: '빈티지 종이 · 액자', pv: { bg: '#efe4cc', fg: '#3b2f22', b1: '#f8f0de', b2: '#8a7356', frame: true },
    set: { typo: { font: 'Nanum Myeongjo', color: '#3b2f22' }, head: { font: 'Nanum Myeongjo', color: '#2a2017', creditColor: '#7a6650' }, bubble: { speech: 'square', font: 'Nanum Myeongjo', bg: '#f8f0de', color: '#3b2f22', border: '#8a7356', bw: 1, shadow: false, nameColor: '#7a6650' }, canvas: { bg: '#efe4cc', pad: 56 } },
    skin: SKINS.vintage.css, chars: [['#f8f0de', '#3b2f22', '#8a7356'], ['#8a7356', '#f8f0de', '#8a7356']],
  },
  {
    id: 'terminal', name: '레트로 터미널', sub: '검정 화면 · 초록 글씨', pv: { bg: '#0b110b', fg: '#4dff88', b1: '#0b110b', b2: '#0b110b', outline: '#4dff88' },
    set: { typo: { font: 'monospace', color: '#4dff88', size: 13 }, head: { font: 'monospace', color: '#8dffb0', creditColor: '#2e9e57' }, bubble: { speech: 'square', font: 'monospace', bg: '#0b110b', color: '#4dff88', border: '#4dff88', bw: 1, shadow: false, nameColor: '#2e9e57', avatar: false }, canvas: { bg: '#0b110b' } },
    skin: SKINS.terminal.css, chars: [['#0b110b', '#4dff88', '#4dff88'], ['#0b110b', '#8dffb0', '#8dffb0']],
  },
];

/* 기본 디자인은 '미니멀 화이트' 템플릿. 템플릿은 중립 기본값(BASE_DESIGN) 위에 적용 */
const DESIGN_KEYS = ['typo', 'head', 'bubble', 'canvas'];
const BASE_DESIGN = Object.fromEntries(DESIGN_KEYS.map((k) => [k, copyState(DEFAULTS[k])]));
(() => {
  const t = TEMPLATES.find((x) => x.id === 'clean');
  for (const k of DESIGN_KEYS) DEFAULTS[k] = deepMerge(copyState(BASE_DESIGN[k]), t.set[k] || {});
  Object.assign(DEFAULTS.head, { creditFont: t.set.head.font, creatorFont: t.set.head.font, creatorColor: DEFAULTS.head.creditColor });
  // 기본: 얼굴 사진 끄기, 페이지 번호 끄기 (템플릿을 골라도 그대로 유지)
  for (const d of [DEFAULTS, BASE_DESIGN]) { d.bubble.avatar = false; d.canvas.pageNum = false; }
})();

const PANES = [
  { id: 'text', label: '텍스트', icon: 'text', desc: '' },
  { id: 'bubble', label: '말풍선', icon: 'bubble', desc: '말풍선 모양과 색, 프로필 표시 방식을 정해요.' },
  { id: 'chars', label: '캐릭터', icon: 'person', desc: '본문에 쓴 이름이 여기 등록한 캐릭터 이름과 똑같아야(띄어쓰기까지) 말풍선에 사진과 색이 자동으로 연결돼요.' },
  { id: 'typo', label: '서체', icon: 'type', desc: '나레이션, 말풍선, 제목의 글꼴과 간격을 다듬어요.' },
  { id: 'canvas', label: '화면', icon: 'frame', desc: '비율과 크기, 배경을 정해요.' },
  { id: 'skin', label: '스킨', icon: 'code', desc: 'CSS로 디자인을 자유롭게 덮어써요.' },
  { id: 'template', label: '프리셋', icon: 'grid', desc: '자주 쓰는 설정을 프리셋으로 저장해 두고 불러오거나, 템플릿으로 디자인을 한 번에 바꿔요.' },
];

/* =========================================================
   유틸
   ========================================================= */
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const mq = matchMedia('(max-width: 900px)');
const isMobile = () => mq.matches;

function h(tag, attrs = {}, ...kids) {
  const el = document.createElement(tag);
  let value;
  for (const [k, v] of Object.entries(attrs)) {
    if (v === false || v == null) continue;
    if (k === 'class') el.className = v;
    else if (k === 'html') el.innerHTML = v;
    else if (k === 'value') value = v;
    else if (k === 'checked') el.checked = !!v;
    else if (k.startsWith('on')) el.addEventListener(k.slice(2), v);
    else el.setAttribute(k, v === true ? '' : v);
  }
  for (const k of kids.flat()) {
    if (k == null || k === false) continue;
    el.append(k.nodeType ? k : document.createTextNode(k));
  }
  if (value !== undefined) el.value = value;
  return el;
}

/** 객체를 복사하되 문자열(이미지 dataURL 등)은 공유해서 메모리를 아낌 */
function copyState(o) {
  if (Array.isArray(o)) return o.map(copyState);
  if (o && typeof o === 'object') {
    const r = {};
    for (const k of Object.keys(o)) r[k] = copyState(o[k]);
    return r;
  }
  return o;
}

function deepMerge(base, extra) {
  if (Array.isArray(base)) return Array.isArray(extra) ? extra : base;
  if (typeof base !== 'object' || base === null) return extra === undefined ? base : extra;
  const out = { ...base };
  if (extra && typeof extra === 'object' && !Array.isArray(extra)) {
    for (const k of Object.keys(extra)) out[k] = k in base ? deepMerge(base[k], extra[k]) : extra[k];
  }
  return out;
}

const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
function fmt(s) {
  return esc(s)
    .replace(/\*\*(.+?)\*\*/g, '<b>$1</b>')
    .replace(/__(.+?)__/g, '<u>$1</u>')
    .replace(/~~(.+?)~~/g, '<s>$1</s>')
    .replace(/==(.+?)==/g, '<mark>$1</mark>')
    .replace(/(^|[^*])\*([^*\s][^*]*?)\*(?!\*)/g, '$1<i>$2</i>');
}

/* 마지막 두 어절을 한 덩어리로 묶어 마지막 줄에 단어(또는 음절) 하나만 남는 것을 막음 */
function fmtNoOrphan(text, justify) {
  // 양쪽 정렬(음절 단위 줄바꿈)에서는 마지막 어절만, 그 외에는 마지막 두 어절을 묶음
  const m = justify ? text.match(/^([\s\S]*?\s)(\S{1,8})\s*$/) : text.match(/^([\s\S]*?)(\S+\s+\S{1,8})\s*$/);
  if (!m || m[1].length < 12) return fmt(text);
  const odd = (str, mk) => (str.split(mk).length - 1) % 2 === 1;
  if (['**', '__', '~~', '==', '*'].some((mk) => m[2].includes(mk) || odd(m[1], mk))) return fmt(text.replace(/\s+(\S{1,8})\s*$/, '\u00a0$1'));
  return fmt(m[1]) + '<span class="nobr">' + fmt(m[2]) + '</span>';
}

let toastTimer;
function toast(msg, action, ms = 2600) {
  const t = $('#toast');
  t.innerHTML = '';
  t.append(h('span', {}, msg));
  if (action) t.append(h('button', { type: 'button', onclick: () => { action.fn(); t.classList.remove('show'); } }, action.label));
  t.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.classList.remove('show'), action ? ms + 1800 : ms);
}

function readFileAsDataURL(file) {
  return new Promise((res, rej) => {
    const fr = new FileReader();
    fr.onload = () => res(fr.result);
    fr.onerror = rej;
    fr.readAsDataURL(file);
  });
}

async function shrinkImage(file, max, square) {
  const url = await readFileAsDataURL(file);
  const img = await new Promise((res, rej) => {
    const i = new Image();
    i.onload = () => res(i);
    i.onerror = rej;
    i.src = url;
  });
  let sw = img.naturalWidth, sh = img.naturalHeight, sx = 0, sy = 0;
  if (square) {
    const m = Math.min(sw, sh);
    sx = (sw - m) / 2; sy = (sh - m) / 2; sw = sh = m;
  }
  const scale = Math.min(1, max / Math.max(sw, sh));
  const cw = Math.round(sw * scale), ch = Math.round(sh * scale);
  const cv = document.createElement('canvas');
  cv.width = cw; cv.height = ch;
  cv.getContext('2d').drawImage(img, sx, sy, sw, sh, 0, 0, cw, ch);
  const webp = cv.toDataURL('image/webp', 0.88);
  return webp.startsWith('data:image/webp') ? webp : cv.toDataURL(square ? 'image/png' : 'image/jpeg', 0.9);
}

const isImageFile = (f) => f && /^image\//.test(f.type);
const isTextFile = (f) => f && (/^text\//.test(f.type) || /\.(txt|md)$/i.test(f.name));

function dropTarget(el, accept, onFile) {
  let depth = 0;
  const hasFile = (e) => e.dataTransfer && [...e.dataTransfer.types].includes('Files');
  el.addEventListener('dragenter', (e) => { if (!hasFile(e)) return; e.preventDefault(); depth++; el.classList.add('drop'); });
  el.addEventListener('dragover', (e) => { if (hasFile(e)) e.preventDefault(); });
  el.addEventListener('dragleave', () => { if (--depth <= 0) { depth = 0; el.classList.remove('drop'); } });
  el.addEventListener('drop', (e) => {
    if (!hasFile(e)) return;
    e.preventDefault();
    e.stopPropagation();
    depth = 0;
    el.classList.remove('drop');
    const f = [...e.dataTransfer.files].find(accept);
    if (f) onFile(f);
  });
}

/* =========================================================
   상태 · 저장 · 실행 취소
   ========================================================= */
let state = loadState();

function migrate(st, raw) {
  // 이전 버전: 배경 이미지만 있던 설정은 '이미지' 배경으로
  if (raw && raw.canvas && !raw.canvas.bgType && raw.canvas.bgImage) st.canvas.bgType = 'image';
  // 이전 버전: 따옴표 / 괄호 스위치 → 지문 형식
  if (raw && raw.parse && !raw.parse.formats) {
    if (raw.parse.quotes === false) st.parse.auto = false;
    if (raw.parse.parens) st.parse.formats = [...st.parse.formats, 'paren'];
  }
  // 이전 버전: 출처가 한 칸이고 제목 서체를 썼음 → 제작자 서체 · 색도 맞춰 줌
  if (raw && raw.head && !('creditFont' in raw.head)) {
    Object.assign(st.head, { creditFont: st.head.font, creditFontCustom: st.head.fontCustom, creatorFont: st.head.font, creatorFontCustom: st.head.fontCustom, creatorColor: st.head.creditColor, creatorSize: st.head.creditSize });
  }
  if (raw && !('creator' in raw)) st.creator = '';
  // 이전 버전의 빈 줄 처리 → 엔터 친 만큼 여백
  // 빈 줄 기본값을 '한 줄은 문단 나눔만'으로 (한 번만 옮김, 이후 사용자가 고른 값은 유지)
  if (raw && raw.parse && !raw.parse.blankV3) { st.parse.blank = 'para1'; st.parse.blankV3 = true; }
  if (!st.file) st.file = copyState(DEFAULTS.file);
  // 이전 버전: HTML 배경 코드를 CSS 스킨 칸에 넣었던 경우 옮겨 줌
  if (st.skin && !st.bgHtml && looksLikeHtmlBg(st.skin)) { st.bgHtml = st.skin; st.skin = ''; }
  return st;
}

function loadState() {
  try {
    const raw = localStorage.getItem(STORE_KEY);
    if (raw) return migrate(deepMerge(copyState(DEFAULTS), JSON.parse(raw)), JSON.parse(raw));
  } catch (e) { /* 무시 */ }
  return copyState(DEFAULTS);
}

let saveTimer;
let warnedQuota = false;
function save() {
  clearTimeout(saveTimer);
  saveTimer = setTimeout(() => {
    try {
      localStorage.setItem(STORE_KEY, JSON.stringify(state));
    } catch (e) {
      if (!warnedQuota) {
        warnedQuota = true;
        toast('이미지가 커서 자동 저장이 안 됐어요. 메뉴에서 설정 파일로 내보내 두세요.', null, 4200);
      }
    }
  }, 300);
}

const hist = { past: [], future: [], last: null, timer: null };
function resetHistory() {
  hist.past = []; hist.future = []; hist.last = copyState(state);
  clearTimeout(hist.timer); hist.timer = null;
  updateHistoryUI();
}
function commitSoon() {
  clearTimeout(hist.timer);
  hist.timer = setTimeout(commit, 400);
}
function commit() {
  clearTimeout(hist.timer);
  hist.timer = null;
  hist.past.push(hist.last);
  if (hist.past.length > 100) hist.past.shift();
  hist.last = copyState(state);
  hist.future = [];
  updateHistoryUI();
}
function undo() {
  if (hist.timer) commit();
  if (!hist.past.length) return;
  hist.future.push(hist.last);
  hist.last = hist.past.pop();
  state = copyState(hist.last);
  rebuildAll(); save(); updateHistoryUI();
}
function redo() {
  if (hist.timer) commit();
  if (!hist.future.length) return;
  hist.past.push(hist.last);
  hist.last = hist.future.pop();
  state = copyState(hist.last);
  rebuildAll(); save(); updateHistoryUI();
}
function updateHistoryUI() {
  $('#btn-undo').disabled = !hist.past.length && !hist.timer;
  $('#btn-redo').disabled = !hist.future.length;
}

const getPath = (p) => p.split('.').reduce((o, k) => (o == null ? o : o[k]), state);
function setPath(p, v) {
  const ks = p.split('.');
  const last = ks.pop();
  ks.reduce((o, k) => o[k], state)[last] = v;
  changed();
}
function changed() {
  save();
  scheduleRender();
  commitSoon();
  refreshConditions();
  $('#btn-undo').disabled = false;
}

/* =========================================================
   폰트
   ========================================================= */
const loadedFonts = new Set(['Pretendard']); // index.html에서 이미 불러옴
const fontName = (name, custom) => (custom || '').trim() || name;
const fontInfo = (n) => FONTS.find((x) => x.n === n);
function fontStack(name, custom) {
  const n = fontName(name, custom);
  const f = fontInfo(n);
  if (f && f.sys) return n;
  return `"${n.replace(/"/g, '')}", system-ui, sans-serif`;
}
function ensureFont(n) {
  if (loadedFonts.has(n)) return;
  const f = fontInfo(n);
  if (!f || f.sys) return;
  loadedFonts.add(n);
  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.crossOrigin = 'anonymous'; // 이미지 저장 시 폰트를 읽기 위해 필요
  link.href = f.css || `https://fonts.googleapis.com/css2?family=${encodeURIComponent(n).replace(/%20/g, '+')}:wght@${f.w}&display=swap`;
  link.onload = () => document.fonts.load(`16px "${n}"`, '가나다abc').finally(scheduleRender);
  document.head.insertBefore(link, $('#gen-style'));
}
function ensureFonts() {
  ensureFont(fontName(state.typo.font, state.typo.fontCustom));
  ensureFont(fontName(state.bubble.font, state.bubble.fontCustom));
  ensureFont(fontName(state.head.font, state.head.fontCustom));
  ensureFont(fontName(state.head.creditFont, state.head.creditFontCustom));
  ensureFont(fontName(state.head.creatorFont, state.head.creatorFontCustom));
}

/* 글꼴 목록 미리보기용: 라벨 글자만 담은 작은 폰트를 따로 불러옴 */
const pvFonts = new Map();
function previewFamily(f) {
  if (f.sys) return f.n;
  if (f.css || loadedFonts.has(f.n)) return `"${f.n}"`;
  return `"pv-${f.n}", system-ui`;
}
function loadPreviewFont(f, el) {
  if (f.sys || f.css || loadedFonts.has(f.n)) return;
  if (!pvFonts.has(f.n)) {
    pvFonts.set(f.n, (async () => {
      const url = `https://fonts.googleapis.com/css2?family=${encodeURIComponent(f.n).replace(/%20/g, '+')}&text=${encodeURIComponent(f.label)}`;
      const css = await (await fetch(url)).text();
      const m = css.match(/url\((https:[^)]+)\)/);
      if (!m) return;
      const face = new FontFace(`pv-${f.n}`, `url(${m[1]})`);
      await face.load();
      document.fonts.add(face);
    })().catch(() => {}));
  }
  pvFonts.get(f.n).then(() => { if (el) el.style.fontFamily = previewFamily(f); });
}

/* =========================================================
   텍스트 파싱
   ========================================================= */
/* 지문 형식: 소설마다 다른 대사 표기를 골라서 인식 */
const DIALOGUE_FORMATS = [
  { id: 'dq', label: '"텍스트"', pairs: [['"', '"'], ['“', '”'], ['＂', '＂']] },
  { id: 'sq', label: "'텍스트'", pairs: [["'", "'"], ['‘', '’']] },
  { id: 'corner', label: '「텍스트」', pairs: [['「', '」']] },
  { id: 'wcorner', label: '『텍스트』', pairs: [['『', '』']] },
  { id: 'star2', label: '**텍스트**', pairs: [['**', '**']] },
  { id: 'star1', label: '*텍스트*', pairs: [['*', '*']] },
  { id: 'paren', label: '(텍스트)', pairs: [['(', ')'], ['（', '）']] },
  { id: 'angle', label: '<텍스트>', pairs: [['<', '>'], ['〈', '〉'], ['《', '》'], ['＜', '＞']] },
  { id: 'bracket', label: '[텍스트]', pairs: [['[', ']'], ['【', '】']] },
  { id: 'dash', label: '— 텍스트', prefixes: ['—', '―', '–'] },
];

function dialogueRules() {
  const P = state.parse;
  const pairs = [], prefixes = [];
  for (const f of DIALOGUE_FORMATS) {
    if (!P.formats.includes(f.id)) continue;
    if (f.pairs) pairs.push(...f.pairs);
    if (f.prefixes) prefixes.push(...f.prefixes);
  }
  for (const c of P.custom || []) {
    if (!c.open) continue;
    if (c.close) pairs.push([c.open, c.close]); else prefixes.push(c.open);
  }
  pairs.sort((a, b) => b[0].length - a[0].length); // ** 를 * 보다 먼저
  prefixes.sort((a, b) => b.length - a.length);
  return { pairs, prefixes };
}

function matchFormat(s, rules) {
  const w = wrapped(s, rules.pairs);
  if (w) return w;
  for (const p of rules.prefixes) {
    if (s.startsWith(p) && s.length > p.length) return { inner: s.slice(p.length).trim() };
  }
  return null;
}

const escRe = (x) => x.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
function inlineRegex(rules) {
  if (!rules.pairs.length) return null;
  return new RegExp('(' + rules.pairs.map(([o, c]) => `${escRe(o)}.+?${escRe(c)}`).join('|') + ')');
}

function wrapped(s, pairs) {
  for (const [o, c] of pairs) {
    if (s.length > o.length + c.length - 1 && s.startsWith(o) && s.endsWith(c)) {
      const inner = s.slice(o.length, s.length - c.length);
      if (!inner.includes(c) && (o === c || !inner.includes(o))) return { inner: inner.trim() };
    }
  }
  return null;
}

const findChar = (name) => {
  const n = (name || '').trim();
  return n ? state.chars.find((c) => c.name && c.name.trim() === n) || null : null;
};
const charById = (id) => state.chars.find((c) => c.id === id) || null;

function splitSpeaker(line) {
  let m = line.match(/^\[([^\]]{1,24})\]\s*(.+)$/);
  if (m) return { name: m[1].trim(), rest: m[2].trim(), strong: true };
  // 이름 | 대사  (채팅 로그에서 흔한 형식)
  m = line.match(/^([^\s|｜ㅣ│"“「『(（'‘\[][^|｜ㅣ│"“「『]{0,29}?)\s*[|｜ㅣ│]\s*(.+)$/);
  if (m) return { name: m[1].trim(), rest: m[2].trim(), strong: !/[.?!。,，]$/.test(m[1].trim()) };
  m = line.match(/^([^\s:："“「『(（'‘\[][^:："“「『]{0,23}?)\s*[:：]\s*(.+)$/);
  if (m) return { name: m[1].trim(), rest: m[2].trim(), strong: false };
  m = line.match(/^(\S{1,12})\s+(\S.*)$/);
  if (m && findChar(m[1])) return { name: m[1].trim(), rest: m[2].trim(), strong: false, loose: true };
  return null;
}

/* 따옴표로 시작해서 닫힌 뒤에 글이 더 이어지는 줄: 「原文」 번역 */
function leadQuote(s, rules) {
  for (const [o, c] of rules.pairs) {
    if (!s.startsWith(o)) continue;
    const idx = s.indexOf(c, o.length);
    if (idx <= o.length) continue;
    const inner = s.slice(o.length, idx).trim();
    const rest = s.slice(idx + c.length).trim();
    if (inner && rest) return { inner, rest, quoted: s.slice(0, idx + c.length) };
  }
  return null;
}
const HAS_CJK = /[\u3040-\u30ff\u31f0-\u31ff\u3400-\u9fff\uf900-\ufaff]/;
const HAS_HANGUL = /[\uac00-\ud7a3]/;
// 따옴표 안이 일본어 · 중국어이고 뒤가 한국어면 번역으로 봄
const looksTranslated = (lq) => HAS_CJK.test(lq.inner) && !HAS_HANGUL.test(lq.inner) && HAS_HANGUL.test(lq.rest);
// 이름만 있는 줄: '쿠죠 후유카 ——', '닝 :', '닝ㅣ' (다음 줄이 대사일 때만)
// 구분 기호 없이 이름만 있는 줄: '카라츄' (짧고 문장 부호가 없을 때, 다음 줄이 대사일 때만)
function isBareName(t) {
  if (findChar(t)) return true;
  if (t.length > 16 || t.split(/\s+/).length > 3) return false;
  // 글자 · 숫자로 시작하고, 이름에 흔한 기호(. _ -)만 허용 (예: NO.25 CINCO)
  return /^[\p{L}\p{N}][\p{L}\p{N}\s._-]*$/u.test(t) && !/[.]$/.test(t);
}
// 장식 기호로 감싼 이름 줄: '⧙ **자이든 윈터스** ⧙', '▶ 닝', '【닝】'
function decoratedName(t) {
  const core = t.replace(/\*\*|__|~~|==/g, '').trim();
  const m = core.match(/^([^\p{L}\p{N}\s]+)\s*(.+?)\s*([^\p{L}\p{N}\s]*)$/u);
  if (!m) return null;
  const name = m[2].trim();
  if (!name || name.length > 24 || name.split(/\s+/).length > 4) return null;
  if (/["“”‘’「」『』()（）.?!。,，]/.test(name)) return null;
  return name;
}
const cleanName = (n) => (n || '').replace(/\*\*|__|~~|==/g, '').trim();
const NAME_LINE = /^([\p{L}\p{N}].{0,23}?)\s*(?:[—―–]+|-{2,}|[:：|｜ㅣ│▶▷»>])\s*$/u;

function parseText() {
  const P = state.parse;
  const lines = state.text.replace(/\r/g, '').split('\n');
  const out = [];
  const occ = {};
  const rules = dialogueRules();
  const inlineRe = inlineRegex(rules);
  const bubble = (inner, full, name, tlText) => {
    name = cleanName(name);
    const base = `speech|${inner}`;
    occ[base] = (occ[base] || 0) + 1;
    const key = `${base}|${occ[base]}`;
    if ((state.overrides[key] || {}).asText) { narr(full); out[out.length - 1].key = key; return; }
    const b = { type: 'bubble', kind: 'speech', inner, full, name: name || null, key };
    if (tlText) {
      // 번역이 ( )로 감싸져 있으면 괄호는 '기호 숨기기' 설정을 따름
      const w = wrapped(tlText, [['(', ')'], ['（', '）']]);
      b.tl = [{ inner: w ? w.inner : tlText, full: tlText }];
    }
    out.push(b);
  };
  // 이름이 붙은 대사 하나를 처리 (뒤에 번역이 이어지면 같은 말풍선에)
  const namedBubble = (rest, name) => {
    const w = matchFormat(rest, rules);
    if (w) { bubble(w.inner, rest, name); return true; }
    const lq = leadQuote(rest, rules);
    if (lq) { bubble(lq.inner, lq.quoted, name, lq.rest); return true; }
    return false;
  };
  const isDialogueLine = (t) => !!(t && (matchFormat(t, rules) || leadQuote(t, rules)));
  // 이름 줄 다음의 대사: 통째로 감싼 줄이거나, 따옴표 뒤가 번역(괄호 · 외국어 원문)일 때만
  const PARENS = [['(', ')'], ['（', '）']];
  const cleanDialogue = (t) => {
    if (!t) return false;
    if (matchFormat(t, rules)) return true;
    const lq = leadQuote(t, rules);
    return !!(lq && (looksTranslated(lq) || wrapped(lq.rest, PARENS)));
  };
  // 구분 기호 없는 이름 줄은 반복해서 나오거나 · 등록된 캐릭터이거나 · 다음 줄이 외국어 대사일 때만 이름으로
  const bareCount = {};
  for (let k = 0; k < lines.length - 1; k++) {
    const t = lines[k].trim();
    if (t && isBareName(t) && cleanDialogue(lines[k + 1].trim())) bareCount[t] = (bareCount[t] || 0) + 1;
  }
  const bareOk = (t, next) => findChar(t) || bareCount[t] >= 2 || HAS_CJK.test(next);
  let pendingName = null;

  const narr = (text) => {
    const prev = out[out.length - 1];
    out.push({ type: 'narr', text, ind: !!prev && prev.type === 'narr' });
  };
  let blanks = 0;
  for (let li = 0; li < lines.length; li++) {
    const line = lines[li].trim();
    if (!line) { blanks++; continue; }
    // 빈 줄 하나는 문단 경계일 뿐, 두 줄 이상은 장면 전환(여백)으로 본다
    const adjacent = blanks === 0;
    // 빈 줄 수만큼 여백 ('para1'이면 첫 빈 줄은 문단 나눔으로만 씀)
    const gapN = P.blank === 'para1' ? blanks - 1 : blanks;
    if (gapN > 0 && out.length) out.push({ type: 'gap', n: Math.min(gapN, 20) });
    blanks = 0;
    // 대사 바로 아랫줄의 ( ) 는 번역 · 부연으로 보고 같은 말풍선 안에 붙임
    const prevB = out[out.length - 1];
    if (P.mergeTl && adjacent && prevB && prevB.type === 'bubble') {
      const tl = wrapped(line, [['(', ')'], ['（', '）']]);
      if (tl) {
        (prevB.tl = prevB.tl || []).push({ inner: tl.inner, full: line });
        continue;
      }
    }
    if (/^(-{3,}|\*{3,}|_{3,}|—{2,})$/.test(line)) { out.push({ type: 'hr' }); continue; }

    // 윗줄에서 이름만 따로 나온 경우
    if (pendingName) {
      const name = pendingName;
      pendingName = null;
      if (namedBubble(line, name)) continue;
      if (findChar(name)) { bubble(line, line, name); continue; }
    }
    // 이름만 있는 줄 + 바로 다음 줄이 대사 → 다음 줄의 화자로
    const nl = line.match(NAME_LINE);
    const nextLine = (lines[li + 1] || '').trim();
    if (nl && !/[.?!。…]$/.test(nl[1]) && cleanDialogue(nextLine)) {
      pendingName = nl[1].trim();
      continue;
    }
    if (P.auto && !nl && isBareName(line) && cleanDialogue(nextLine) && bareOk(line, nextLine)) {
      pendingName = line;
      continue;
    }
    // 장식 기호로 감싼 이름 줄 (그 줄 자체가 지문 형식이 아니고, 다음 줄이 깔끔한 대사일 때)
    if (P.auto && !nl && cleanDialogue(nextLine) && !matchFormat(line, rules) && !leadQuote(line, rules)) {
      const dn = decoratedName(line);
      if (dn) { pendingName = dn; continue; }
    }

    const sp = splitSpeaker(line);
    if (sp) {
      if (namedBubble(sp.rest, sp.name)) continue;
      if (sp.strong || (!sp.loose && findChar(sp.name))) {
        bubble(sp.rest, sp.rest, sp.name);
        continue;
      }
    }
    if (P.auto) {
      const w = matchFormat(line, rules);
      if (P.mode === 'plain') {
        // 기호 없는 줄이 대사, 기호로 감싼 줄은 나레이션
        if (w) narr(w.inner); else bubble(line, line);
        continue;
      }
      if (w) { bubble(w.inner, line); continue; }
      const lq = leadQuote(line, rules);
      if (lq && looksTranslated(lq)) { bubble(lq.inner, lq.quoted, null, lq.rest); continue; }
      if (P.inline && inlineRe && inlineRe.test(line)) {
        for (const part of line.split(inlineRe)) {
          const t = part.trim();
          if (!t) continue;
          const wi = wrapped(t, rules.pairs);
          if (wi) bubble(wi.inner, t); else narr(t);
        }
        continue;
      }
    }
    narr(line);
  }
  while (out.length && out[out.length - 1].type === 'gap') out.pop();
  return out;
}

function resolveBubbles(blocks) {
  let last = null;
  for (const b of blocks) {
    if (b.type !== 'bubble') continue;
    const o = state.overrides[b.key] || {};
    let ch = null, name = b.name;
    if (o.speaker === '__none') { name = null; }
    else if (o.speaker) { ch = charById(o.speaker); name = ch ? ch.name : null; }
    else if (name) { ch = findChar(name); }
    else if (b.kind === 'speech' && state.chars.length) {
      const r = state.parse.nameless;
      if (r === 'alt') {
        const i = last ? state.chars.indexOf(last) : -1;
        ch = state.chars[(i + 1) % state.chars.length];
      } else if (r !== 'none') ch = charById(r);
      name = ch ? ch.name : null;
    }
    if (ch && b.kind === 'speech') last = ch;
    b.ch = ch;
    b.speaker = name || null;
    b.side = o.side || (ch && ch.side) || state.bubble.side;
    b.shape = o.shape || (ch && ch.shape) || state.bubble.speech;
  }
}

/* =========================================================
   렌더링
   ========================================================= */
const AV_COLORS = ['#f76707', '#37b24d', '#1c7ed6', '#ae3ec9', '#e64980', '#1098ad', '#7048e8', '#f59f00'];
function colorFor(name) {
  let x = 0;
  for (const c of name) x = (x * 31 + c.codePointAt(0)) >>> 0;
  return AV_COLORS[x % AV_COLORS.length];
}
function avatarColor(ch, name) {
  // 흰색이나 아주 밝은 색이면 흰 글자가 안 보이므로 이름에 따른 색으로
  const isWhite = (c) => {
    const m = /^#([0-9a-f]{3}|[0-9a-f]{6})$/i.exec(c || '');
    if (!m) return false;
    const x = m[1].length === 3 ? m[1].split('').map((d) => d + d).join('') : m[1];
    const [r, g, b] = [0, 2, 4].map((i) => parseInt(x.slice(i, i + 2), 16));
    return 0.299 * r + 0.587 * g + 0.114 * b > 215;
  };
  if (ch && ch.custom) {
    const c = ch.border !== ch.bg && !isWhite(ch.border) ? ch.border : ch.bg;
    if (!isWhite(c)) return c;
  }
  return colorFor(name || '?');
}

function genCSS() {
  const { typo: t, bubble: b, head: hd, canvas: c } = state;
  const ar = { circle: '50%', rounded: '28%', square: '4px' }[b.avatarShape] || '50%';
  const fit = (v) => `calc(${v}px * var(--fit, 1))`;
  let css = `.card {
  --card-bg: ${c.bg};
  --overlay: ${c.bgType === 'image' && c.bgImage ? c.overlay : 0};
  --overlay-color: ${c.overlayColor};
  --pad: ${c.pad}px;
  --valign: ${c.valign};
  --accent: ${hd.accent};
  --hl: ${t.hl};
  --hl-stop: ${{ full: '0%', under: '55%', thin: '78%' }[t.hlStyle] || '55%'};
  --text-font: ${fontStack(t.font, t.fontCustom)};
  --text-size: ${fit(t.size)};
  --text-lh: ${t.lh};
  --text-ls: ${t.ls}em;
  --text-weight: ${t.weight};
  --text-color: ${t.color};
  --text-align: ${t.align};
  --text-break: ${t.align === 'justify' ? 'normal' : 'keep-all'};
  --para-gap: ${t.paraMode === 'indent' ? '0px' : fit(t.gap)};
  --indent: ${t.paraMode === 'indent' ? t.indent : 0}em;
  --b-font: ${fontStack(b.font, b.fontCustom)};
  --b-size: ${fit(b.size)};
  --b-lh: ${b.lh};
  --b-ls: ${b.ls}em;
  --b-weight: ${b.weight};
  --b-bg: ${b.bg};
  --b-color: ${b.color};
  --b-border: ${b.border};
  --b-bw: ${b.bw}px;
  --b-radius: ${b.radius}px;
  --b-px: ${fit(b.px)};
  --b-py: ${fit(b.py)};
  --b-maxw: ${b.maxw}%;
  --b-shadow: ${b.shadow ? 'drop-shadow(0 2px 5px rgba(0,0,0,.09))' : 'none'};
  --msg-gap: ${fit(b.gap)};
  --avatar-size: ${fit(b.avatarSize)};
  --avatar-radius: ${ar};
  --name-size: ${fit(b.nameSize)};
  --name-color: ${b.nameColor};
  --title-font: ${fontStack(hd.font, hd.fontCustom)};
  --title-size: ${fit(hd.size)};
  --title-weight: ${hd.weight};
  --title-color: ${hd.color};
  --title-align: ${hd.align};
  --credit-font: ${fontStack(hd.creditFont, hd.creditFontCustom)};
  --credit-size: ${hd.creditSize}px;
  --credit-weight: ${hd.creditWeight};
  --credit-color: ${hd.creditColor};
  --creator-font: ${fontStack(hd.creatorFont, hd.creatorFontCustom)};
  --creator-size: ${hd.creatorSize}px;
  --creator-weight: ${hd.creatorWeight};
  --creator-color: ${hd.creatorColor};
  --credit-align: ${hd.creditAlign};
}`;
  const bg = backgroundCSS(c);
  css += `\n.card { background-image: ${bg.image}; background-size: ${bg.size}; background-repeat: ${bg.repeat}; background-position: ${bg.pos}; }`;
  return css;
}

/* 배경: 단색 · 그라데이션 · 패턴 · 이미지 */
function hexToRgba(hex, a) {
  let x = hex.replace('#', '');
  if (x.length === 3) x = x.split('').map((c) => c + c).join('');
  const n = parseInt(x.slice(0, 6), 16);
  return `rgba(${(n >> 16) & 255}, ${(n >> 8) & 255}, ${n & 255}, ${a})`;
}
const svgUrl = (svg) => `url("data:image/svg+xml,${encodeURIComponent(svg)}")`;

const PATTERNS = [['dots', '점'], ['grid', '격자'], ['lines', '줄 노트'], ['diagonal', '사선'], ['check', '체크'], ['plus', '플러스'], ['paper', '종이 질감'], ['manuscript', '원고지']];

function patternCSS(type, color, op, s) {
  const C = hexToRgba(color, op);
  switch (type) {
    case 'dots': {
      const r = Math.max(1, s * 0.09);
      return { image: `radial-gradient(circle, ${C} ${r}px, transparent ${r + 0.6}px)`, size: `${s}px ${s}px` };
    }
    case 'grid':
      return { image: `linear-gradient(${C} 1px, transparent 1px), linear-gradient(90deg, ${C} 1px, transparent 1px)`, size: `${s}px ${s}px` };
    case 'lines':
      return { image: `linear-gradient(transparent ${s - 1}px, ${C} ${s - 1}px)`, size: `100% ${s}px` };
    case 'diagonal':
      return { image: `repeating-linear-gradient(45deg, ${C} 0 1px, transparent 1px ${s / 2}px)`, size: 'auto' };
    case 'check':
      return { image: `conic-gradient(${C} 25%, transparent 0 50%, ${C} 0 75%, transparent 0)`, size: `${s}px ${s}px` };
    case 'plus': {
      const m = s / 2, a = Math.max(2.5, s * 0.14);
      return { image: svgUrl(`<svg xmlns="http://www.w3.org/2000/svg" width="${s}" height="${s}"><path d="M${m} ${m - a}v${a * 2}M${m - a} ${m}h${a * 2}" stroke="${color}" stroke-opacity="${op}" stroke-width="1.3" stroke-linecap="round"/></svg>`), size: `${s}px ${s}px` };
    }
    case 'paper': {
      const n = parseInt(color.replace('#', '').padEnd(6, '0').slice(0, 6), 16);
      const [r, g, b] = [(n >> 16) & 255, (n >> 8) & 255, n & 255].map((v) => (v / 255).toFixed(3));
      const t = 140 + s * 4;
      return { image: svgUrl(`<svg xmlns="http://www.w3.org/2000/svg" width="${t}" height="${t}"><filter id="n"><feTurbulence type="fractalNoise" baseFrequency="${(1.4 - s / 100).toFixed(2)}" numOctaves="3" stitchTiles="stitch"/><feColorMatrix values="0 0 0 0 ${r} 0 0 0 0 ${g} 0 0 0 0 ${b} ${(op * 1.6).toFixed(2)} 0 0 0 0"/></filter><rect width="100%" height="100%" filter="url(#n)"/></svg>`), size: `${t}px ${t}px` };
    }
    case 'manuscript': {
      // 원고지: 정사각 칸 + 줄 사이 여백
      const cell = s, gap = Math.round(s * 0.35), hgt = cell + gap;
      return { image: svgUrl(`<svg xmlns="http://www.w3.org/2000/svg" width="${cell}" height="${hgt}"><rect x=".5" y="${gap + 0.5}" width="${cell}" height="${cell - 1}" fill="none" stroke="${color}" stroke-opacity="${op}" stroke-width="1"/></svg>`), size: `${cell}px ${hgt}px` };
    }
  }
  return { image: 'none', size: 'auto' };
}

function backgroundCSS(c) {
  if (c.bgType === 'gradient') {
    const image = c.gradType === 'radial'
      ? `radial-gradient(ellipse at 50% 35%, ${c.bg} 0%, ${c.bg2} 100%)`
      : `linear-gradient(${c.gradAngle}deg, ${c.bg} 0%, ${c.bg2} 100%)`;
    return { image, size: '100% 100%', repeat: 'no-repeat', pos: 'center' };
  }
  if (c.bgType === 'pattern') {
    const p = patternCSS(c.pattern, c.patColor, c.patOpacity, c.patSize);
    return { image: p.image, size: p.size, repeat: 'repeat', pos: 'center top' };
  }
  if (c.bgType === 'image' && c.bgImage) return { image: `url("${c.bgImage}")`, size: 'cover', repeat: 'no-repeat', pos: 'center' };
  return { image: 'none', size: 'auto', repeat: 'no-repeat', pos: 'center' };
}

const GRADIENTS = [
  ['#ffe3ec', '#dff3ff', 160], ['#fbc2eb', '#a6c1ee', 135], ['#fdfcfb', '#e2d1c3', 120], ['#f6f3ea', '#e3d5bd', 180],
  ['#a1c4fd', '#c2e9fb', 180], ['#d4fc79', '#96e6a1', 135], ['#f6d365', '#fda085', 135], ['#e0c3fc', '#8ec5fc', 135],
  ['#2b2b33', '#121216', 160], ['#0f2027', '#2c5364', 160], ['#3a1c71', '#d76d77', 135], ['#141e30', '#243b55', 180],
];

/* HTML 배경: <style> + 장식 HTML을 카드 크기의 별도 문서로 그려 카드 뒤(와 data-layer="top"은 위)에 깔기
   - body가 카드 한 장 크기인 독립 문서로 그려서 앱 화면과 스타일이 섞이지 않음 */
function looksLikeHtmlBg(code) {
  if (!code || !/<[a-z]/i.test(code)) return false;
  const withoutStyle = code.replace(/<style[^>]*>[\s\S]*?<\/style>/gi, '');
  if (/<(?!\/?style\b)[a-z][\s\S]*?>/i.test(withoutStyle)) return true; // 장식용 HTML 요소
  const css = [...code.matchAll(/<style[^>]*>([\s\S]*?)<\/style>/gi)].map((m) => m[1]).join('\n');
  return /(^|[\s,}])(html|body)\s*[,{.:#\[]/i.test(css); // body · html 규칙
}

const htmlBg = { cache: new Map(), status: '' };
const blobToDataURL = (blob) => readFileAsDataURL(blob);
async function inlineUrl(u, base) {
  if (!u || /^(data:|#)/i.test(u)) return u;
  try {
    const abs = new URL(u, base || location.href).href;
    const r = await fetch(abs);
    if (!r.ok) return u;
    return await blobToDataURL(await r.blob());
  } catch (e) { return u; }
}
async function inlineCssUrls(css, base) {
  const urls = [...new Set([...css.matchAll(/url\(\s*(['"]?)([^'")]+)\1\s*\)/g)].map((m) => m[2]))];
  const map = new Map(await Promise.all(urls.map(async (u) => [u, await inlineUrl(u, base)])));
  return css.replace(/url\(\s*(['"]?)([^'")]+)\1\s*\)/g, (m, q, u) => `url("${map.get(u) || u}")`);
}
// @import 한 단계 펼치기 (웹폰트는 HTML 안 글자에 쓰이는 조각만)
async function expandImports(css, text) {
  const codes = new Set([...(text || '')].map((c) => c.codePointAt(0)));
  // url('…') 또는 '…' — 주소 안에 ; 가 있어도 따옴표 · 괄호까지 정확히 읽음 (예: wght@400;700)
  const re = /@import\s+(?:url\(\s*(['"]?)([^'")]+)\1\s*\)|(['"])([^'"]+)\3)[^;]*;/g;
  const found = [...css.matchAll(re)].map((m) => [m[0], m[2] || m[4]]);
  let out = css;
  for (const m of found) {
    let inner = '';
    try {
      const r = await fetch(new URL(m[1], location.href).href);
      if (r.ok) {
        inner = await r.text();
        inner = inner.replace(/@font-face\s*{[^}]*}/g, (face) => {
          const ur = (face.match(/unicode-range:\s*([^;}]+)/) || [])[1];
          if (!ur) return codes.size ? face : '';
          const ranges = parseRanges(ur);
          return [...codes].some((c) => ranges.some(([a, b]) => c >= a && c <= b)) ? face : '';
        });
        inner = await inlineCssUrls(inner, m[1]);
      }
    } catch (e) { inner = ''; }
    out = out.replace(m[0], inner);
  }
  return out;
}

async function buildHtmlBgURL(html, w, h, layer) {
  const doc = new DOMParser().parseFromString(html || '', 'text/html');
  doc.querySelectorAll('script, iframe, object, embed, meta, base, link:not([rel="stylesheet"])').forEach((el) => el.remove());
  const text = doc.body ? doc.body.textContent : '';
  // <link rel=stylesheet> → <style>
  for (const link of doc.querySelectorAll('link[rel="stylesheet"]')) {
    const st = doc.createElement('style');
    st.textContent = `@import url("${link.getAttribute('href')}");`;
    link.replaceWith(st);
  }
  // SVG 그림 안에서는 :root가 바깥 <svg>를 가리켜 변수가 전달되지 않으므로 html로 바꿔 줌
  for (const st of doc.querySelectorAll('style')) st.textContent = (await inlineCssUrls(await expandImports(st.textContent, text))).replace(/:root\b/g, 'html');
  for (const el of doc.querySelectorAll('[style]')) el.setAttribute('style', await inlineCssUrls(el.getAttribute('style')));
  for (const img of doc.querySelectorAll('img[src]')) img.setAttribute('src', await inlineUrl(img.getAttribute('src')));
  const baseStyle = doc.createElement('style');
  baseStyle.textContent = `html,body{margin:0;padding:0;width:${w}px;height:${h}px;overflow:hidden;}body{position:relative;font-family:"Pretendard",sans-serif;}*{box-sizing:border-box;}`;
  doc.head.insertBefore(baseStyle, doc.head.firstChild);
  const layerStyle = doc.createElement('style');
  layerStyle.textContent = layer === 'top'
    // 위층: data-layer="top" 요소만 보이게. 숨긴 요소의 SVG 필터(질감 등)가 새어 나오지 않도록 필터 · 혼합도 끔
    ? 'html,body{background:transparent !important;}body *{visibility:hidden !important;}'
      + 'body *:not([data-layer="top"], [data-layer="top"] *){filter:none !important;mix-blend-mode:normal !important;}'
      + 'body svg:not([data-layer="top"] svg) rect[filter]{display:none !important;}'
      + '[data-layer="top"],[data-layer="top"] *{visibility:visible !important;}'
    : '[data-layer="top"]{visibility:hidden !important;}';
  doc.head.appendChild(layerStyle);
  const xhtml = new XMLSerializer().serializeToString(doc.documentElement);
  // 그림 자체 해상도를 저장 배율만큼 키워서 흐릿해지지 않게 (내용 배치는 카드 크기 그대로)
  const k = Math.max(2, Math.min(4, Math.ceil(Math.max(state.canvas.scale, window.devicePixelRatio || 1))));
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${w * k}" height="${h * k}" viewBox="0 0 ${w} ${h}"><foreignObject x="0" y="0" width="${w}" height="${h}">${xhtml}</foreignObject></svg>`;
  const url = 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svg);
  await new Promise((res, rej) => { const im = new Image(); im.onload = res; im.onerror = () => rej(new Error('draw')); im.src = url; });
  return url;
}
/* HTML 배경 안의 {{제목}} · {{출처}} · {{제작자}} (또는 '제목을 입력하세요')를 발췌기 입력과 연동 */
const TITLE_TOKEN = /\{\{\s*(제목|title)\s*\}\}|제목을 입력하세요/gi;
const bgHasTitle = () => { TITLE_TOKEN.lastIndex = 0; return TITLE_TOKEN.test(state.bgHtml || ''); };
function fillBgTokens(html) {
  const e = (t) => esc((t || '').trim());
  return (html || '')
    .replace(TITLE_TOKEN, () => e(state.title))
    .replace(/\{\{\s*(출처|credit)\s*\}\}/gi, () => e(state.credit))
    .replace(/\{\{\s*(제작자|creator)\s*\}\}/gi, () => e(state.creator));
}
// 글이 들어갈 자리: <!-- ninining-safe: 위% 오른쪽% 아래% 왼쪽%; min-height: %--> (모두 카드 가로 기준)
function bgSafeArea() {
  const m = (state.bgHtml || '').match(/ninining-safe:\s*([\d.]+)%\s+([\d.]+)%\s+([\d.]+)%\s+([\d.]+)%(?:\s*;\s*min-height:\s*([\d.]+)%)?/);
  return m ? { t: +m[1], r: +m[2], b: +m[3], l: +m[4], minH: m[5] ? +m[5] : 0 } : null;
}

function htmlBgKey(w, h, layer) { return `${layer}|${w}x${h}|${state.canvas.scale}|${fillBgTokens(state.bgHtml)}`; }
function htmlBgURL(w, h, layer) {
  const key = htmlBgKey(w, h, layer);
  if (!htmlBg.cache.has(key)) {
    if (htmlBg.cache.size > 24) htmlBg.cache.clear();
    htmlBg.cache.set(key, buildHtmlBgURL(fillBgTokens(state.bgHtml), w, h, layer));
  }
  return htmlBg.cache.get(key);
}
function setHtmlStatus(msg, bad) {
  htmlBg.status = msg;
  const el = $('#html-bg-status');
  if (el) { el.textContent = msg; el.classList.toggle('bad', !!bad); }
}
let htmlBgSeq = 0;
const lastBg = [];
function applyHtmlBg(pages) {
  const code = (state.bgHtml || '').trim();
  if (!code) { setHtmlStatus(''); return Promise.resolve(); }
  const hasTop = /data-layer\s*=\s*["']?top/i.test(code);
  const seq = ++htmlBgSeq;
  // 새로 그려야 하는 동안에는 직전 그림을 먼저 보여 줌 (깜빡임 · 끊김 방지)
  pages.forEach((p, i) => {
    if (!p.bgImg || !lastBg[i]) return;
    p.bgImg.src = lastBg[i].base; p.bgImg.hidden = false;
    if (lastBg[i].top && p.topImg) { p.topImg.src = lastBg[i].top; p.topImg.hidden = false; }
  });
  const uncached = pages.some((p) => !htmlBg.cache.has(htmlBgKey(p.card.offsetWidth, p.card.offsetHeight, 'base')));
  setHtmlStatus('그리는 중…');
  // 글자를 치는 동안 매번 다시 그리지 않도록 잠깐 기다렸다가 그림
  const wait = uncached ? new Promise((r) => setTimeout(r, 350)) : Promise.resolve();
  return wait.then(() => seq !== htmlBgSeq ? null : Promise.all(pages.map(async (p, i) => {
    const w = p.card.offsetWidth, hgt = p.card.offsetHeight;
    const [base, top] = await Promise.all([htmlBgURL(w, hgt, 'base'), hasTop ? htmlBgURL(w, hgt, 'top') : null]);
    if (seq !== htmlBgSeq) return;
    if (!p.bgImg) return;
    p.bgImg.src = base; p.bgImg.hidden = false;
    if (top && p.topImg) { p.topImg.src = top; p.topImg.hidden = false; }
    lastBg[i] = { base, top };
    return `${w} × ${hgt}px`;
  }))).then((sizes) => {
    if (sizes && seq === htmlBgSeq) setHtmlStatus(`적용됨 · 카드 크기 ${[...new Set(sizes)].join(', ')}${bgSafeArea() ? ' · 글은 배경이 정한 자리에 들어가요' : ''}`);
  }).catch((e) => {
    console.warn(e);
    if (seq === htmlBgSeq) setHtmlStatus('HTML을 그리지 못했어요. 닫는 태그나 따옴표를 확인해 주세요.', true);
  });
}
let htmlBgReady = Promise.resolve();
// HTML 배경 프리셋: 고를 때만 불러와서 사이트는 가볍게 유지
const HTML_BG_PRESETS = [
  // 언덕 시리즈: 출처 · 제작자는 비우고, 지문 형식은 '*텍스트*'를 나레이션으로
  { name: '언덕 위의 마녀', file: 'bg/witch.html', clearCredit: true, parse: { formats: ['star1'], mode: 'plain' }, avatars: true,
    chars: ['마녀', { name: '노엘', avatar: 'bg/witch/noel.webp' }, { name: '륜', avatar: 'bg/witch/ryun.webp' }, { name: '악셀', avatar: 'bg/witch/axel.webp' }, { name: '루카', avatar: 'bg/witch/luka.webp' }] },
  { name: '언덕 위의 마왕', file: 'bg/demon.html', clearCredit: true, parse: { formats: ['star1'], mode: 'plain' }, avatars: true,
    chars: ['마왕', { name: '체페슈', avatar: 'bg/demon/tepes.webp' }, { name: '아자젤', avatar: 'bg/demon/azazel.webp' }, { name: '노먼', avatar: 'bg/demon/norman.webp' }, { name: '빌터', avatar: 'bg/demon/wilter.webp' }, { name: '한', avatar: 'bg/demon/han.webp' }, '라이케'] },
];

function applySkin() {
  const src = state.skin || '';
  const styles = [...src.matchAll(/<style[^>]*>([\s\S]*?)<\/style>/gi)].map((m) => m[1]);
  $('#skin-style').textContent = styles.length ? styles.join('\n') : src.replace(/<\/?[a-z][^>]*>/gi, '');
}

let editingKey = null;

function renderBlock(b) {
  if (b.type === 'narr') {
    return h('p', { class: 'narr' + (b.ind && !b.cont ? ' ind' : '') + (b.cont ? ' cont' : '') + (b.key ? ' was-bubble' : ''), 'data-key': b.key || false, html: fmtNoOrphan(b.text, state.typo.align === 'justify') });
  }
  if (b.type === 'gap') { const g = h('div', { class: 'gap' }); g.style.setProperty('--gap-n', b.n || 1); return g; }
  if (b.type === 'hr') return h('hr', { class: 'divider' });

  const B = state.bubble;
  const { ch, speaker, side, shape } = b;
  let tail = '';
  if (B.tail && side !== 'center') {
    if (TRI_TAIL.includes(shape)) tail = 'tail-tri';
    else if (shape === 'thought') tail = 'tail-dots';
  }
  const msg = h('div', {
    class: `msg msg-${side} kind-${b.kind} shape-${shape} ${tail}${b.key === editingKey ? ' editing' : ''}`,
    'data-key': b.key,
    'data-speaker': speaker || false,
  });
  if (ch && ch.custom) {
    msg.style.setProperty('--b-bg', ch.bg);
    msg.style.setProperty('--b-color', ch.color);
    msg.style.setProperty('--b-border', ch.border);
  }
  if (B.avatar && speaker) {
    const av = h('div', { class: 'avatar' });
    if (ch && ch.avatar) av.append(h('img', { src: ch.avatar, alt: '' }));
    else {
      av.textContent = [...speaker][0];
      av.style.background = avatarColor(ch, speaker);
    }
    msg.append(av);
  } else msg.classList.add('no-avatar');
  const body = h('div', { class: 'msg-body' });
  if (B.showName && speaker) body.append(h('div', { class: 'name' }, speaker));
  const strip = state.parse.strip;
  let inner = fmt(strip ? b.inner : b.full);
  const show = state.parse.tlShow || 'both';
  if (b.tl && show === 'tl') {
    // 번역만: 원문(외국어)을 빼고 번역을 본문 크기로
    inner = b.tl.map((t) => fmt(strip ? t.inner : t.full)).join('\n');
  } else if (b.tl && show === 'both') {
    // 번역 줄: 줄바꿈 뒤에 작은 글씨로 (말풍선 안 기호는 '기호 숨기기'를 따름)
    for (const t of b.tl) inner += '\n<span class="tl">' + fmt(strip ? t.inner : t.full) + '</span>';
  }
  body.append(h('div', { class: 'bubble', html: inner }));
  msg.append(body);
  return msg;
}

function ratioHeight(W) {
  const r = state.canvas.ratio;
  if (r === 'auto') return 0;
  const [a, b] = r.split(':').map(Number);
  return Math.round((W * b) / a);
}

function newPage(idx, W, H) {
  const card = h('div', { class: 'card' + (H ? '' : ' auto-h') + (state.typo.paraMode === 'indent' ? ' para-indent' : '') });
  card.style.width = W + 'px';
  if (H) card.style.height = H + 'px';
  card.append(h('div', { class: 'card-overlay' }));
  // HTML 배경이 있을 때만 그림 자리를 만듦 (빈 <img>는 이미지 저장을 실패시킴)
  const useHtml = !!(state.bgHtml || '').trim();
  const bgImg = useHtml ? h('img', { class: 'card-htmlbg', alt: '', hidden: true, 'aria-hidden': 'true' }) : null;
  const topImg = useHtml ? h('img', { class: 'card-htmltop', alt: '', hidden: true, 'aria-hidden': 'true' }) : null;
  if (bgImg) card.append(bgImg);
  if (idx === 0 && state.head.quoteMark) card.append(h('div', { class: 'quote-mark', 'aria-hidden': 'true' }, '“'));
  if (idx === 0 && state.title.trim() && !(state.bgHtml && bgHasTitle())) card.append(h('h2', { class: 'card-title', html: fmt(state.title) }));
  const safe = state.bgHtml ? bgSafeArea() : null;
  if (safe) {
    const px = (v) => `${Math.round((v * W) / 100)}px`;
    card.style.padding = `${px(safe.t)} ${px(safe.r)} ${px(safe.b)} ${px(safe.l)}`;
    if (!H && safe.minH) card.style.minHeight = px(safe.minH);
  }
  const content = h('div', { class: 'card-content' });
  const flow = h('div', { class: 'flow' });
  content.append(flow);
  card.append(content);
  const work = (state.credit || '').trim(), author = (state.creator || '').trim();
  if (work || author || state.canvas.pageNum) {
    const foot = h('div', { class: 'card-footer' });
    const credit = h('div', { class: `credit credit-${state.head.creditLayout}` });
    if (work) credit.append(h('span', { class: 'credit-work', html: fmt(work) }));
    if (work && author && state.head.creditLayout === 'inline') credit.append(h('span', { class: 'credit-sep' }, ' · '));
    if (author) credit.append(h('span', { class: 'credit-author', html: fmt(author) }));
    foot.append(credit);
    if (state.canvas.pageNum) foot.append(h('span', { class: 'page-num' }, '0 / 0'));
    card.append(foot);
  }
  if (topImg) card.append(topImg);
  const label = h('div', { class: 'page-label' });
  const wrap = h('div', { class: 'page-wrap' }, label, card);
  return { wrap, card, content, flow, label, bgImg, topImg };
}

/* 문단이 페이지 끝에 걸리면 줄 단위로 나눠 다음 장으로 이어 붙임
   - 앞쪽에 2줄 미만만 남으면(외톨이 줄) 문단 전체를 넘김
   - 뒤쪽에 1줄만 넘어가면(과부 줄) 한 줄을 더 넘김 */
function balanceMarks(a, rest) {
  for (const m of ['**', '__', '~~', '==']) {
    if ((a.split(m).length - 1) % 2) { a += m; rest = m + rest; }
  }
  return [a, rest];
}
function splitParagraph(page, el, b, alone) {
  const tokens = b.text.split(/(\s+)/);
  if (tokens.length < 3) return null;
  const head = (k) => tokens.slice(0, k).join('').trimEnd();
  const tail = (k) => tokens.slice(k).join('').trimStart();
  const show = (k) => { el.innerHTML = fmt(balanceMarks(head(k), tail(k))[0]); };
  const fits = (k) => { show(k); return !overflows(page); };
  let lo = 0, hi = tokens.length - 1;
  while (lo < hi) {
    const mid = Math.ceil((lo + hi) / 2);
    if (fits(mid)) lo = mid; else hi = mid - 1;
  }
  if (lo === 0 || !tail(lo)) { el.innerHTML = fmt(b.text); return null; }
  show(lo);
  const lh = parseFloat(getComputedStyle(el).lineHeight) || 24;
  const lines = Math.round(el.offsetHeight / lh);
  if (lines < 2 && !alone) { el.innerHTML = fmt(b.text); return null; }
  // 과부 줄: 넘어갈 글이 한 줄도 안 되면 한 줄을 함께 넘김
  const restLen = tail(lo).length;
  const perLine = head(lo).length / Math.max(1, lines);
  if (lines >= 3 && restLen < perLine * 0.85) {
    const target = el.offsetHeight - lh + 1;
    let k = lo;
    while (k > 1) { k--; show(k); if (el.offsetHeight <= target) break; }
    lo = k;
    show(lo);
  }
  const [a, rest] = balanceMarks(head(lo), tail(lo));
  el.innerHTML = fmt(a);
  return rest;
}

const overflows = (p) => p.flow.offsetHeight > p.content.clientHeight + 0.5;
const trimGaps = (flow) => {
  while (flow.lastElementChild && flow.lastElementChild.classList.contains('gap')) flow.lastElementChild.remove();
};

let renderQueued = false;
function scheduleRender() {
  if (renderQueued) return;
  renderQueued = true;
  requestAnimationFrame(() => { renderQueued = false; render(); });
}

let lastStats = { bubbles: 0, pages: 1 };

function render() {
  ensureFonts();
  $('#gen-style').textContent = genCSS();
  const blocks = parseText();
  resolveBubbles(blocks);

  const stage = $('#stage');
  const scrollTop = stage.scrollTop;
  stage.innerHTML = '';
  const c = state.canvas;
  const W = c.width;
  const H = ratioHeight(W);
  const fitMode = !!H && c.fit;
  const split = !!H && c.paginate && !fitMode;

  const pages = [];
  let page = newPage(0, W, H);
  stage.append(page.wrap);
  pages.push(page);

  if (!blocks.length) {
    page.flow.append(h('p', { class: 'narr placeholder' }, '텍스트를 입력하면 여기에 나타나요'));
  }

  const queue = blocks.slice();
  const nextPage = () => {
    trimGaps(page.flow);
    page = newPage(pages.length, W, H);
    stage.append(page.wrap);
    pages.push(page);
  };
  while (queue.length) {
    const b = queue.shift();
    if (b.type === 'gap' && !page.flow.childElementCount) continue;
    const el = renderBlock(b);
    page.flow.append(el);
    if (!split || !overflows(page)) continue;
    const alone = page.flow.childElementCount === 1;
    if (b.type === 'narr') {
      const rest = splitParagraph(page, el, b, alone);
      if (rest) {
        queue.unshift({ type: 'narr', text: rest, cont: true });
        nextPage();
        continue;
      }
    }
    if (alone) continue; // 한 장보다 큰 덩어리는 그대로 둠
    el.remove();
    nextPage();
    queue.unshift(b);
  }
  trimGaps(page.flow);

  if (fitMode && blocks.length) {
    const ok = (f) => { page.card.style.setProperty('--fit', f); return !overflows(page); };
    let lo, hi;
    if (ok(1)) { lo = 1; hi = 1.6; } else { lo = 0.3; hi = 1; }
    for (let i = 0; i < 9; i++) {
      const mid = (lo + hi) / 2;
      if (ok(mid)) lo = mid; else hi = mid;
    }
    page.card.style.setProperty('--fit', lo.toFixed(4));
  }

  pages.forEach((p, i) => {
    const pn = $('.page-num', p.card);
    if (pn) pn.textContent = `${i + 1} / ${pages.length}`;
    p.label.textContent = pages.length > 1 ? `${i + 1} / ${pages.length}` : '';
    p.wrap.classList.toggle('overflowing', !!H && overflows(p));
  });

  updateMeasure();
  updateFilePreview();
  syncNameless();
  updateAutoCard();
  scheduleAutoChars(blocks);
  lastStats = { bubbles: blocks.filter((b) => b.type === 'bubble').length, pages: pages.length };
  updateStats();
  const sc = c.scale;
  $('#page-info').textContent = `${pages.length}장 · ${W * sc}×${H ? H * sc : '높이 자동'}`;

  if (cardObserver) {
    cardObserver.disconnect();
    pages.forEach((p) => cardObserver.observe(p.card));
  }
  htmlBgReady = applyHtmlBg(pages);
  rescale();
  stage.scrollTop = scrollTop;
}

/* 확대 · 축소 */
let zoom = 'fit';
const ZOOM_STEPS = [0.25, 0.33, 0.5, 0.67, 0.75, 0.9, 1, 1.25, 1.5, 2];
let currentScale = 1;

function fitScale(W, Hc) {
  const st = $('#stage');
  const cs = getComputedStyle(st);
  const availW = st.clientWidth - parseFloat(cs.paddingLeft) - parseFloat(cs.paddingRight);
  const availH = st.clientHeight - parseFloat(cs.paddingTop) - parseFloat(cs.paddingBottom);
  const byH = state.canvas.ratio === 'auto' ? Infinity : availH / Hc;
  return Math.max(0.1, Math.min(1, availW / W, byH));
}

function rescale() {
  const wraps = $$('#stage .page-wrap');
  if (!wraps.length) return;
  const first = wraps[0].querySelector('.card');
  const s = zoom === 'fit' ? fitScale(first.offsetWidth, first.offsetHeight) : zoom;
  currentScale = s;
  wraps.forEach((wrap) => {
    const card = wrap.querySelector('.card');
    const W = card.offsetWidth, Hc = card.offsetHeight;
    card.style.transform = s !== 1 ? `scale(${s})` : '';
    wrap.style.width = W * s + 'px';
    wrap.style.height = Hc * s + 'px';
  });
  $('#zoom-label').textContent = `${Math.round(s * 100)}%`;
}
function stepZoom(dir) {
  const cur = currentScale;
  let next;
  if (dir > 0) next = ZOOM_STEPS.find((z) => z > cur + 0.001) || ZOOM_STEPS[ZOOM_STEPS.length - 1];
  else next = [...ZOOM_STEPS].reverse().find((z) => z < cur - 0.001) || ZOOM_STEPS[0];
  zoom = next;
  rescale();
}

const cardObserver = typeof ResizeObserver !== 'undefined' ? new ResizeObserver(() => requestAnimationFrame(rescale)) : null;

/* 인식된 새 이름을 캐릭터 목록에 자동 등록 (입력이 멈춘 뒤, 같은 이름은 한 세션에 한 번만) */
const autoTried = new Set();
let autoCharTimer;
function scheduleAutoChars(blocks) {
  if (!state.parse.autoChars) return;
  const fresh = [...new Set(blocks.filter((b) => b.type === 'bubble' && b.name && !(state.overrides[b.key] || {}).speaker).map((b) => b.name))]
    .filter((n) => !findChar(n) && !autoTried.has(n));
  clearTimeout(autoCharTimer);
  if (!fresh.length) return;
  autoCharTimer = setTimeout(() => {
    const still = new Set(parseText().filter((b) => b.type === 'bubble' && b.name).map((b) => b.name));
    const add = fresh.filter((n) => still.has(n) && !findChar(n));
    if (!add.length) return;
    add.forEach((n) => autoTried.add(n));
    const base = Date.now().toString(36);
    add.forEach((name, i) => state.chars.push({
      id: `a${base}${i}`, name, avatar: '', side: 'left', shape: '',
      custom: false, bg: '#ffffff', color: '#222222', border: '#ffffff',
    }));
    changed(); commit();
    buildChars(); buildFields(); buildQuickInsert();
    toast(add.length > 2 ? `새 캐릭터 ${add.length}명을 등록했어요` : `‘${add.join('’, ‘')}’을(를) 캐릭터에 등록했어요`, { label: '되돌리기', fn: undo }, 3200);
  }, 1500);
}

function updateAutoCard() {
  const btn = $('#auto-btn');
  if (!btn) return;
  const P = state.parse;
  const was = P.auto;
  P.auto = true;
  const n = parseText().filter((b) => b.type === 'bubble').length;
  P.auto = was;
  const named = parseText().filter((b) => b.type === 'bubble').length;
  if (was) {
    $('#auto-desc').textContent = n ? `대사 ${n}개가 말풍선이에요` : '형식에 맞는 대사가 없어요 · 아래에서 형식을 골라 보세요';
    btn.textContent = '글로 되돌리기';
    btn.className = 'btn btn-sm';
  } else {
    $('#auto-desc').textContent = n > named ? `말풍선으로 바꿀 대사 ${n - named}개를 찾았어요` : '형식에 맞는 대사가 없어요 · 아래에서 형식을 골라 보세요';
    btn.textContent = '전부 말풍선으로';
    btn.className = 'btn btn-primary btn-sm';
  }
}

function updateFilePreview() {
  const el = $('#file-preview');
  if (el) el.textContent = fileName(0, 1);
  const r = $('#result-filename');
  if (r && lastImages.length) r.textContent = fileName(0, lastImages.length);
}

function updateMeasure() {
  const el = $('#measure-val');
  if (!el) return;
  const t = state.typo, c = state.canvas;
  const cw = c.width - c.pad * 2;
  const n = Math.round(cw / (t.size * (1 + t.ls)));
  const good = n >= 24 && n <= 48;
  el.textContent = `약 ${n}자`;
  el.dataset.state = good ? 'good' : 'warn';
  $('#measure-hint').textContent = good ? '읽기 편한 길이예요' : n < 24 ? '조금 짧아요 · 글자를 줄이거나 가로를 넓혀 보세요' : '조금 길어요 · 글자를 키우거나 여백을 늘려 보세요';
}

function updateStats() {
  const n = state.text.replace(/\s/g, '').length;
  $('#text-stats').textContent = `${n.toLocaleString()}자 · 말풍선 ${lastStats.bubbles}개 · ${lastStats.pages}장`;
}

/* =========================================================
   설정 컨트롤
   ========================================================= */
let conditions = [];
function refreshConditions() {
  for (const { el, when, hide } of conditions) {
    if (hide) el.hidden = !when();
    else el.classList.toggle('disabled', !when());
  }
}

const fixedRatio = () => state.canvas.ratio !== 'auto';

const SCHEMA = {
  text: [
    { sec: '대사 인식', note: '말풍선을 누르면 캐릭터 · 위치 · 모양을 바꾸거나 다시 글로 되돌릴 수 있어요.', rows: [
      { t: 'autoDialog' },
      { t: 'formats' },
      { t: 'mode' },
      { t: 'switch', p: 'parse.inline', l: '문장 속 대사도 분리', sub: '나레이션 중간에 있는 대사도 말풍선으로 꺼내요', when: () => state.parse.mode === 'marked' },
      { t: 'switch', p: 'parse.strip', l: '말풍선에서 기호 숨기기' },
      { t: 'switch', p: 'parse.mergeTl', l: '아랫줄 괄호는 같은 말풍선에', sub: '대사 바로 아래 ( ) 줄을 번역처럼 작게 붙여요' },
      { t: 'seg', p: 'parse.tlShow', l: '원문 · 번역이 함께 있는 대사', o: [['both', '둘 다'], ['tl', '번역만'], ['orig', '원문만']], block: true },
      { t: 'switch', p: 'parse.autoChars', l: '인식된 이름을 캐릭터에 자동 등록', sub: '새 이름이 나오면 캐릭터 탭에 알아서 추가해요' },
      { t: 'select', p: 'parse.nameless', l: '이름 없는 대사의 화자', o: () => namelessOptions() },
    ] },
    { sec: '문단', rows: [
      { t: 'select', p: 'parse.blank', l: '빈 줄(엔터)', o: [['count', '친 만큼 여백'], ['para1', '한 줄은 문단 나눔만']] },
    ] },
    { sec: '제목 · 출처', rows: [
      { t: 'text', p: 'title', l: '제목', ph: '비워두면 표시하지 않아요' },
      { t: 'text', p: 'credit', l: '출처 · 작품명', ph: '예) 채팅방 이름 · 날짜' },
      { t: 'text', p: 'creator', l: '출처 · 제작자', ph: '예) @내계정' },
    ] },
  ],
  bubble: [
    { sec: '말풍선 모양', rows: [{ t: 'shapes', p: 'bubble.speech' }] },
    { sec: '세부 조정', rows: [
      { t: 'switch', p: 'bubble.tail', l: '꼬리 표시' },
      { t: 'seg', p: 'bubble.side', l: '화자 없는 말풍선', o: SIDES },
      { t: 'slider', p: 'bubble.maxw', l: '최대 너비', min: 30, max: 100, step: 1, u: '%' },
      { t: 'slider', p: 'bubble.radius', l: '모서리 둥글기', min: 0, max: 40, step: 1, u: 'px' },
      { t: 'slider', p: 'bubble.px', l: '안쪽 여백 · 좌우', min: 0, max: 40, step: 1, u: 'px' },
      { t: 'slider', p: 'bubble.py', l: '안쪽 여백 · 위아래', min: 0, max: 30, step: 1, u: 'px' },
      { t: 'slider', p: 'bubble.gap', l: '말풍선 앞뒤 간격', min: 0, max: 48, step: 1, u: 'px' },
    ] },
    { sec: '색상', note: '캐릭터 탭에서 ‘개별 색상’을 켠 캐릭터는 그 색이 우선 적용돼요.', rows: [
      { t: 'color', p: 'bubble.bg', l: '배경' },
      { t: 'color', p: 'bubble.color', l: '글자' },
      { t: 'color', p: 'bubble.border', l: '테두리' },
      { t: 'slider', p: 'bubble.bw', l: '테두리 두께', min: 0, max: 6, step: 0.5, u: 'px' },
      { t: 'switch', p: 'bubble.shadow', l: '그림자' },
    ] },
    { sec: '프로필', rows: [
      { t: 'switch', p: 'bubble.avatar', l: '얼굴 사진' },
      { t: 'slider', p: 'bubble.avatarSize', l: '사진 크기', min: 20, max: 100, step: 1, u: 'px', when: () => state.bubble.avatar },
      { t: 'seg', p: 'bubble.avatarShape', l: '사진 모양', o: [['circle', '원'], ['rounded', '둥근 사각'], ['square', '사각']], when: () => state.bubble.avatar },
      { t: 'switch', p: 'bubble.showName', l: '이름' },
      { t: 'slider', p: 'bubble.nameSize', l: '이름 크기', min: 8, max: 24, step: 0.5, u: 'px', when: () => state.bubble.showName , pt: true },
      { t: 'color', p: 'bubble.nameColor', l: '이름 색', when: () => state.bubble.showName },
    ] },
  ],
  typo: [
    { sec: '나레이션', note: '긴 글은 한 줄 25~35자, 행간 1.6~1.8, 문단은 간격과 들여쓰기 중 하나로만 구분할 때 가장 읽기 편해요. 들여쓰기는 장면 전환이나 말풍선 다음 첫 문단에는 자동으로 빠져요.', rows: [
      { t: 'font', p: 'typo.font', c: 'typo.fontCustom' },
      { t: 'slider', p: 'typo.size', l: '크기', min: 10, max: 40, step: 0.5, u: 'px' , pt: true },
      { t: 'slider', p: 'typo.lh', l: '행간', min: 1, max: 3, step: 0.05, u: '' },
      { t: 'slider', p: 'typo.ls', l: '자간', min: -0.1, max: 0.3, step: 0.005, u: 'em' },
      { t: 'select', p: 'typo.weight', l: '굵기', o: WEIGHTS, num: true },
      { t: 'color', p: 'typo.color', l: '글자 색' },
      { t: 'seg', p: 'typo.align', l: '정렬', o: ALIGN4, block: true },
      { t: 'seg', p: 'typo.paraMode', l: '문단 구분', o: [['gap', '문단 사이 간격'], ['indent', '첫 줄 들여쓰기']], block: true },
      { t: 'slider', p: 'typo.gap', l: '문단 간격', min: 0, max: 40, step: 1, u: 'px', show: () => state.typo.paraMode !== 'indent' },
      { t: 'slider', p: 'typo.indent', l: '들여쓰기', min: 0.5, max: 4, step: 0.5, u: 'em', show: () => state.typo.paraMode === 'indent' },
      { t: 'measure' },
      { t: 'color', p: 'typo.hl', l: '형광펜 색', sub: '텍스트 편집창의 형광펜 버튼에서도 바꿀 수 있어요' },
      { t: 'seg', p: 'typo.hlStyle', l: '형광펜 모양', o: [['under', '밑줄형'], ['thin', '얇게'], ['full', '전체']] },
    ] },
    { sec: '말풍선 글자', rows: [
      { t: 'font', p: 'bubble.font', c: 'bubble.fontCustom' },
      { t: 'slider', p: 'bubble.size', l: '크기', min: 10, max: 36, step: 0.5, u: 'px' , pt: true },
      { t: 'slider', p: 'bubble.lh', l: '행간', min: 1, max: 2.6, step: 0.05, u: '' },
      { t: 'slider', p: 'bubble.ls', l: '자간', min: -0.1, max: 0.3, step: 0.005, u: 'em' },
      { t: 'select', p: 'bubble.weight', l: '굵기', o: WEIGHTS, num: true },
    ] },
    { sec: '제목', rows: [
      { t: 'font', p: 'head.font', c: 'head.fontCustom' },
      { t: 'slider', p: 'head.size', l: '크기', min: 12, max: 64, step: 1, u: 'px' , pt: true },
      { t: 'select', p: 'head.weight', l: '굵기', o: WEIGHTS, num: true },
      { t: 'color', p: 'head.color', l: '색' },
      { t: 'seg', p: 'head.align', l: '정렬', o: ALIGN3 },
      { t: 'switch', p: 'head.quoteMark', l: '장식 따옴표', sub: '첫 장 위에 큰 따옴표를 넣어요' },
      { t: 'color', p: 'head.accent', l: '장식 색', when: () => state.head.quoteMark },
    ] },
    { sec: '출처 · 작품명', rows: [
      { t: 'font', p: 'head.creditFont', c: 'head.creditFontCustom' },
      { t: 'slider', p: 'head.creditSize', l: '크기', min: 8, max: 28, step: 0.5, u: 'px', pt: true },
      { t: 'select', p: 'head.creditWeight', l: '굵기', o: WEIGHTS, num: true },
      { t: 'color', p: 'head.creditColor', l: '색' },
    ] },
    { sec: '출처 · 제작자', rows: [
      { t: 'font', p: 'head.creatorFont', c: 'head.creatorFontCustom' },
      { t: 'slider', p: 'head.creatorSize', l: '크기', min: 8, max: 28, step: 0.5, u: 'px', pt: true },
      { t: 'select', p: 'head.creatorWeight', l: '굵기', o: WEIGHTS, num: true },
      { t: 'color', p: 'head.creatorColor', l: '색' },
    ] },
    { sec: '출처 배치', rows: [
      { t: 'seg', p: 'head.creditLayout', l: '배치', o: [['inline', '한 줄로'], ['stack', '두 줄로']] },
      { t: 'seg', p: 'head.creditAlign', l: '정렬', o: ALIGN3 },
    ] },
  ],
  canvas: [
    { sec: '비율', rows: [{ t: 'ratio', p: 'canvas.ratio' }] },
    { sec: '크기 · 배치', rows: [
      { t: 'slider', p: 'canvas.width', l: '가로 크기', min: 320, max: 1080, step: 10, u: 'px' },
      { t: 'seg', p: 'canvas.scale', l: '저장 해상도', o: [[1, '1x'], [2, '2x'], [3, '3x']], num: true },
      { t: 'switch', p: 'canvas.fit', l: '한 장에 맞추기', sub: '글자 크기를 자동으로 조절해 한 장에 담아요', when: fixedRatio },
      { t: 'switch', p: 'canvas.paginate', l: '넘치면 다음 장으로', sub: '긴 글을 여러 장으로 나눠요', when: () => fixedRatio() && !state.canvas.fit },
      { t: 'switch', p: 'canvas.pageNum', l: '페이지 번호' },
      { t: 'seg', p: 'canvas.valign', l: '세로 정렬', o: [['flex-start', '위'], ['center', '가운데'], ['flex-end', '아래']], when: fixedRatio },
      { t: 'slider', p: 'canvas.pad', l: '바깥 여백', min: 0, max: 300, step: 2, u: 'px' },
    ] },
    { sec: '파일 이름', note: '로그 제목을 비우면 텍스트 탭의 제목을 써요. 여러 장일 때는 번호가 자동으로 붙어요.', rows: [
      { t: 'filePreview' },
      { t: 'switch', p: 'file.date', l: '저장 날짜', sub: '예) 20261101' },
      { t: 'text', p: 'file.pair', l: '페어명', ph: '예) 닝닝' },
      { t: 'text', p: 'file.title', l: '로그 제목', ph: '비우면 카드 제목을 써요' },
      { t: 'switch', p: 'file.number', l: '한 장이어도 번호 붙이기', sub: '예) _01' },
    ] },
    { sec: '배경', rows: [
      { t: 'seg', p: 'canvas.bgType', l: '종류', o: [['solid', '단색'], ['gradient', '그라데이션'], ['pattern', '패턴'], ['image', '이미지']], block: true, rebuild: true },
      { t: 'gradients', show: () => state.canvas.bgType === 'gradient' },
      { t: 'patterns', p: 'canvas.pattern', show: () => state.canvas.bgType === 'pattern' },
      { t: 'color', p: 'canvas.bg', l: '배경 색', show: () => state.canvas.bgType !== 'gradient' },
      { t: 'color', p: 'canvas.bg', l: '시작 색', show: () => state.canvas.bgType === 'gradient' },
      { t: 'color', p: 'canvas.bg2', l: '끝 색', show: () => state.canvas.bgType === 'gradient' },
      { t: 'seg', p: 'canvas.gradType', l: '모양', o: [['linear', '직선'], ['radial', '원형']], show: () => state.canvas.bgType === 'gradient' },
      { t: 'slider', p: 'canvas.gradAngle', l: '각도', min: 0, max: 360, step: 5, u: '°', show: () => state.canvas.bgType === 'gradient' && state.canvas.gradType === 'linear' },
      { t: 'color', p: 'canvas.patColor', l: '패턴 색', show: () => state.canvas.bgType === 'pattern' },
      { t: 'slider', p: 'canvas.patOpacity', l: '패턴 진하기', min: 0.05, max: 1, step: 0.05, u: '', show: () => state.canvas.bgType === 'pattern' },
      { t: 'slider', p: 'canvas.patSize', l: '패턴 크기', min: 6, max: 60, step: 1, u: 'px', show: () => state.canvas.bgType === 'pattern' },
      { t: 'image', p: 'canvas.bgImage', l: '배경 이미지', sub: '미리보기에 이미지를 끌어다 놓아도 돼요', show: () => state.canvas.bgType === 'image' },
      { t: 'slider', p: 'canvas.overlay', l: '덮개 진하기', min: 0, max: 0.9, step: 0.05, u: '', show: () => state.canvas.bgType === 'image', when: () => !!state.canvas.bgImage },
      { t: 'color', p: 'canvas.overlayColor', l: '덮개 색', show: () => state.canvas.bgType === 'image', when: () => !!state.canvas.bgImage },
    ] },
  ],
};

const labelEl = (l, sub) => h('div', { class: 'row-label' }, l, sub ? h('small', {}, sub) : null);

function segEl(opts, val, onPick, block) {
  const seg = h('div', { class: 'seg' + (block ? ' block' : ''), role: 'radiogroup' });
  opts.forEach(([v, l]) => {
    const b = h('button', { type: 'button', role: 'radio', class: String(v) === String(val) ? 'on' : '' }, l);
    b.addEventListener('click', () => {
      $$('button', seg).forEach((x) => x.classList.toggle('on', x === b));
      onPick(v);
    });
    seg.append(b);
  });
  return seg;
}

function swatchEl(color) {
  const s = h('span', { class: 'swatch' }, h('i'));
  s.firstChild.style.background = color;
  return s;
}

function colorButton(get, set, label) {
  const sw = swatchEl(get());
  const txt = h('span', {}, label || get().toUpperCase());
  const btn = h('button', { type: 'button', class: 'color-btn', title: get().toUpperCase() }, sw, txt);
  btn.addEventListener('click', () => openColorPop(btn, get(), (v) => {
    set(v);
    sw.firstChild.style.background = v;
    btn.title = v.toUpperCase();
    if (!label) txt.textContent = v.toUpperCase();
  }));
  return btn;
}

function fieldEl(d) {
  const val = d.p ? getPath(d.p) : undefined;
  let el;
  switch (d.t) {
    case 'text':
      el = h('div', { class: 'row stack' }, labelEl(d.l),
        h('input', { type: 'text', class: 'input', value: val, placeholder: d.ph || '', oninput: (e) => setPath(d.p, e.target.value) }));
      break;

    case 'switch':
      el = h('label', { class: 'row' }, labelEl(d.l, d.sub),
        h('input', { type: 'checkbox', class: 'switch', role: 'switch', checked: val, onchange: (e) => setPath(d.p, e.target.checked) }));
      break;

    case 'slider': {
      const show = (v) => `${+(+v).toFixed(3)}${d.u || ''}`;
      const pct = (v) => `${((v - d.min) / (d.max - d.min)) * 100}%`;
      const slider = h('input', { type: 'range', class: 'slider', min: d.min, max: d.max, step: d.step, value: val, 'aria-label': d.l });
      const num = h('input', { type: 'text', class: 'value-input', inputmode: 'decimal', value: show(val), 'aria-label': `${d.l} 값` });
      slider.style.setProperty('--p', pct(val));
      slider.addEventListener('input', () => {
        num.value = show(slider.value);
        slider.style.setProperty('--p', pct(slider.value));
        setPath(d.p, +slider.value);
      });
      num.addEventListener('focus', () => num.select());
      num.addEventListener('keydown', (e) => { if (e.key === 'Enter') num.blur(); });
      num.addEventListener('change', () => {
        let v = parseFloat(num.value);
        if (isNaN(v)) v = getPath(d.p);
        v = Math.min(d.max, Math.max(d.min, v));
        slider.value = v;
        slider.style.setProperty('--p', pct(v));
        num.value = show(v);
        setPath(d.p, v);
      });
      const ptText = (v) => `${+(v * 0.75).toFixed(1)}pt`;
      const lab = labelEl(d.l, d.pt ? ptText(val) : null);
      if (d.pt) slider.addEventListener('input', () => { lab.querySelector('small').textContent = ptText(slider.value); });
      if (d.pt) num.addEventListener('change', () => { lab.querySelector('small').textContent = ptText(getPath(d.p)); });
      el = h('div', { class: 'row stack' }, h('div', { class: 'row-top' }, lab, num), slider);
      break;
    }

    case 'seg': {
      const seg = segEl(d.o, val, (v) => { setPath(d.p, d.num ? +v : v); if (d.rebuild) buildFields(); }, d.block);
      el = d.block ? h('div', { class: 'row stack' }, labelEl(d.l), seg) : h('div', { class: 'row' }, labelEl(d.l), seg);
      break;
    }

    case 'select': {
      const opts = typeof d.o === 'function' ? d.o() : d.o;
      el = h('div', { class: 'row' }, labelEl(d.l),
        h('select', { class: 'select', value: String(val), 'aria-label': d.l, onchange: (e) => setPath(d.p, d.num ? +e.target.value : e.target.value) },
          opts.map(([v, l]) => h('option', { value: String(v) }, l))));
      break;
    }

    case 'color':
      el = h('div', { class: 'row' }, labelEl(d.l, d.sub), colorButton(() => getPath(d.p), (v) => setPath(d.p, v)));
      break;

    case 'font': {
      const n = fontName(val, getPath(d.c));
      const f = fontInfo(n);
      const btn = h('button', { type: 'button', class: 'font-btn' },
        h('span', { class: 'fb-name' }, f ? f.label : n),
        h('span', { class: 'fb-chev', html: icon('chevron') }));
      btn.firstChild.style.fontFamily = fontStack(val, getPath(d.c));
      btn.addEventListener('click', () => openFontPop(btn, d));
      el = h('div', { class: 'row stack' }, labelEl('서체'), btn);
      break;
    }

    case 'image': {
      const thumb = h('span', { class: 'img-thumb' });
      const refresh = () => { thumb.style.backgroundImage = getPath(d.p) ? `url("${getPath(d.p)}")` : ''; clear.hidden = !getPath(d.p); };
      const input = h('input', { type: 'file', accept: 'image/*', hidden: true });
      input.addEventListener('change', async () => {
        const f = input.files[0];
        input.value = '';
        if (f) await setImagePath(d.p, f).then(refresh);
      });
      const clear = h('button', { type: 'button', class: 'icon-btn sm danger', 'aria-label': '이미지 지우기', html: icon('trash'), onclick: () => { setPath(d.p, ''); refresh(); } });
      el = h('div', { class: 'row' }, labelEl(d.l, d.sub),
        h('div', { class: 'img-field' }, clear, thumb, h('label', { class: 'btn btn-sm' }, '선택', input)));
      refresh();
      break;
    }

    case 'shapes': {
      const tiles = h('div', { class: 'tiles' });
      SHAPES.forEach(([k, l]) => {
        const t = h('button', { type: 'button', class: 'tile' + (k === val ? ' on' : ''), title: l, html: shapeSvg(k) + `<span>${l}</span>` });
        t.addEventListener('click', () => { $$('.tile', tiles).forEach((x) => x.classList.toggle('on', x === t)); setPath(d.p, k); });
        tiles.append(t);
      });
      el = h('div', { class: 'row stack' }, tiles);
      break;
    }

    case 'measure': {
      el = h('div', { class: 'row' }, labelEl('한 줄 글자 수', ''), h('span', { class: 'measure', id: 'measure-val' }));
      el.querySelector('small') || el.firstChild.append(h('small', { id: 'measure-hint' }));
      break;
    }

    case 'autoDialog': {
      const desc = h('small', { id: 'auto-desc' });
      const btn = h('button', { type: 'button', class: 'btn btn-sm', id: 'auto-btn' });
      btn.addEventListener('click', () => {
        const on = !state.parse.auto;
        setPath('parse.auto', on);
        commit();
        toast(on ? '대사를 모두 말풍선으로 바꿨어요' : '말풍선을 글로 되돌렸어요', { label: '되돌리기', fn: undo });
      });
      el = h('div', { class: 'row auto-card' }, h('div', { class: 'row-label' }, h('strong', {}, '대사 → 말풍선'), desc), btn);
      break;
    }

    case 'formats': {
      const row = h('div', { class: 'chip-row fmt-chips' });
      DIALOGUE_FORMATS.forEach((f) => {
        const on = state.parse.formats.includes(f.id);
        const b = h('button', { type: 'button', class: 'fchip' + (on ? ' on' : ''), 'aria-pressed': on ? 'true' : 'false' }, f.label);
        b.addEventListener('click', () => {
          const list = state.parse.formats.slice();
          const k = list.indexOf(f.id);
          if (k >= 0) list.splice(k, 1); else list.push(f.id);
          b.classList.toggle('on', k < 0);
          b.setAttribute('aria-pressed', k < 0 ? 'true' : 'false');
          setPath('parse.formats', list);
        });
        row.append(b);
      });
      // 직접 지정한 형식 (× 로 삭제)
      (state.parse.custom || []).forEach((c, idx) => {
        row.append(h('span', { class: 'fchip on custom', title: c.close ? '직접 지정한 형식' : '이 기호로 시작하는 줄 전체' }, customFmtLabel(c.open, c.close),
          h('button', { type: 'button', 'aria-label': '삭제', html: icon('close'), onclick: () => {
            const arr = state.parse.custom.slice(); arr.splice(idx, 1); setPath('parse.custom', arr); buildFields();
          } })));
      });
      const plus = h('button', { type: 'button', class: 'fchip add', 'aria-label': '지문 형식 직접 지정' }, h('span', { class: 'add-ico', html: icon('plus') }), '직접 지정');
      plus.addEventListener('click', () => openCustomFormatPop(plus));
      row.append(plus);
      el = h('div', { class: 'row stack' }, labelEl('지문 형식', '중복 선택 가능'), row);
      break;
    }

    case 'mode': {
      const isPlain = state.parse.mode === 'plain';
      const hint = h('small', { class: 'mode-hint' });
      const paint = (m) => { hint.textContent = m === 'plain' ? '고른 기호로 감싼 줄은 나레이션이 되고, 기호 없는 줄이 말풍선이 돼요' : '고른 기호로 감싼 줄이 말풍선이 되고, 나머지는 나레이션이에요'; };
      paint(isPlain ? 'plain' : 'marked');
      const seg = segEl([['marked', '대사로'], ['plain', '나레이션으로']], state.parse.mode, (v) => { setPath('parse.mode', v); paint(v); }, true);
      el = h('div', { class: 'row stack mode-row' }, h('div', { class: 'row-label' }, '위에서 고른 형식을', hint), seg);
      break;
    }

    case 'filePreview': {
      el = h('div', { class: 'row file-preview' }, h('span', { class: 'fp-ico', html: icon('image') }), h('code', { id: 'file-preview' }));
      break;
    }

    case 'gradients': {
      const grid = h('div', { class: 'grad-presets' });
      GRADIENTS.forEach(([a, b, ang]) => {
        const btn = h('button', { type: 'button', 'aria-label': `${a} → ${b}` });
        btn.style.background = `linear-gradient(${ang}deg, ${a}, ${b})`;
        btn.addEventListener('click', () => {
          Object.assign(state.canvas, { bg: a, bg2: b, gradAngle: ang, gradType: 'linear' });
          changed(); buildFields();
        });
        grid.append(btn);
      });
      el = h('div', { class: 'row stack' }, labelEl('추천 그라데이션'), grid);
      break;
    }

    case 'patterns': {
      const tiles = h('div', { class: 'tiles pattern' });
      const c = state.canvas;
      PATTERNS.forEach(([k, l]) => {
        const pv = h('span', { class: 'pat-pv' });
        const pc = patternCSS(k, c.patColor, Math.max(0.35, c.patOpacity), k === 'paper' ? 20 : 10);
        pv.style.backgroundColor = c.bg;
        pv.style.backgroundImage = pc.image;
        pv.style.backgroundSize = pc.size;
        const t = h('button', { type: 'button', class: 'tile' + (k === val ? ' on' : '') }, pv, h('span', {}, l));
        t.addEventListener('click', () => { $$('.tile', tiles).forEach((x) => x.classList.toggle('on', x === t)); setPath(d.p, k); });
        tiles.append(t);
      });
      el = h('div', { class: 'row stack' }, tiles);
      break;
    }

    case 'ratio': {
      const tiles = h('div', { class: 'tiles ratio' });
      RATIOS.forEach(([k, l]) => {
        const box = h('span', { class: 'ratio-box' });
        const i = h('i', { class: k === 'auto' ? 'auto' : '' });
        if (k === 'auto') { i.style.width = '18px'; i.style.height = '24px'; }
        else {
          const [a, b] = k.split(':').map(Number);
          const m = 24 / Math.max(a, b);
          i.style.width = `${a * m}px`; i.style.height = `${b * m}px`;
        }
        box.append(i);
        const t = h('button', { type: 'button', class: 'tile' + (k === val ? ' on' : '') }, box, h('span', {}, l));
        t.addEventListener('click', () => { $$('.tile', tiles).forEach((x) => x.classList.toggle('on', x === t)); setPath(d.p, k); });
        tiles.append(t);
      });
      el = h('div', { class: 'row stack' }, tiles);
      break;
    }
  }
  if (el && d.when) conditions.push({ el, when: d.when });
  if (el && d.show) conditions.push({ el, when: d.show, hide: true });
  return el;
}

async function setImagePath(p, file) {
  try {
    setPath(p, await shrinkImage(file, 2000, false));
  } catch (e) { toast('이미지를 읽지 못했어요'); }
}

/* 접이식 섹션: 펼침 상태는 이 브라우저에만 기억 */
const COLLAPSIBLE = { typo: true };
const UI_KEY = 'ninining-ui';
let uiState = (() => { try { return JSON.parse(localStorage.getItem(UI_KEY)) || {}; } catch (e) { return {}; } })();
const saveUi = () => { try { localStorage.setItem(UI_KEY, JSON.stringify(uiState)); } catch (e) { /* 무시 */ } };
function isOpen(pane, sec, idx) {
  const o = (uiState.open || {})[pane];
  return o && sec in o ? o[sec] : idx === 0;
}

/* 지문 형식 직접 지정 (칩 목록 끝의 '+ 직접 지정') */
const customFmtLabel = (o, c) => (c ? `${o} 대사 ${c}` : `${o} 대사…`);
function openCustomFormatPop(anchor) {
  const open = h('input', { type: 'text', class: 'input sym', placeholder: '⧼', maxlength: 6, 'aria-label': '여는 기호' });
  const close = h('input', { type: 'text', class: 'input sym', placeholder: '⟯', maxlength: 6, 'aria-label': '닫는 기호 (생략 가능)' });
  const preview = h('div', { class: 'sym-preview' });
  const addBtn = h('button', { type: 'button', class: 'btn btn-primary btn-sm' }, '추가');
  const paint = () => {
    const o = open.value.trim(), c = close.value.trim();
    preview.innerHTML = '';
    addBtn.disabled = !o;
    if (!o) { preview.append(h('span', { class: 'muted' }, '여는 기호를 넣으면 어떻게 인식되는지 보여 드려요')); return; }
    preview.append(h('span', { class: 'sym-ex' }, h('b', {}, o), ' 오늘은 늦었네.', c ? h('b', {}, ' ' + c) : null),
      h('span', { class: 'muted' }, c ? '→ 기호 사이의 글이 대사' : '→ 이 기호로 시작하는 줄 전체가 대사'));
  };
  const add = () => {
    const o = open.value.trim(), c = close.value.trim();
    if (!o) { open.focus(); return; }
    setPath('parse.custom', [...(state.parse.custom || []), { open: o, close: c }]);
    if (!state.parse.auto) state.parse.auto = true;
    closePop();
    buildFields();
    toast(`‘${customFmtLabel(o, c)}’ 형식을 추가했어요`);
  };
  addBtn.addEventListener('click', add);
  [open, close].forEach((x) => {
    x.addEventListener('input', paint);
    x.addEventListener('keydown', (e) => { if (e.key === 'Enter' && !e.isComposing) add(); });
  });
  paint();
  const cell = (input, cap, opt) => h('label', { class: 'sym-cell' }, input, h('span', { class: 'sym-cap' + (opt ? ' opt' : '') }, cap));
  openPop(h('div', { class: 'fmt-pop' },
    h('div', { class: 'pop-title' }, '지문 형식 직접 지정'),
    h('div', { class: 'sym-row' }, cell(open, '여는 기호'), h('span', { class: 'sym-mid' }, '대사'), cell(close, '닫는 기호 · 생략 가능', true), addBtn),
    preview), anchor);
  setTimeout(() => open.focus(), 30);
}

function buildFields() {
  conditions = [];
  for (const [key, secs] of Object.entries(SCHEMA)) {
    const box = $(`[data-fields="${key}"]`);
    box.innerHTML = '';
    secs.forEach((s, idx) => {
      const body = [h('div', { class: 'section' }, s.rows.map(fieldEl)), s.note ? h('p', { class: 'footnote' }, s.note) : null];
      if (!COLLAPSIBLE[key]) {
        box.append(h('div', { class: 'section-title' }, s.sec), ...body.filter(Boolean));
        return;
      }
      const open = isOpen(key, s.sec, idx);
      const wrap = h('div', { class: 'sec-body' + (open ? ' open' : '') }, ...body.filter(Boolean));
      const btn = h('button', { type: 'button', class: 'sec-toggle' + (open ? ' open' : ''), 'aria-expanded': open ? 'true' : 'false' },
        h('span', {}, s.sec), h('span', { class: 'sec-chev', html: icon('chevdown') }));
      btn.addEventListener('click', () => {
        const now = !wrap.classList.contains('open');
        wrap.classList.toggle('open', now);
        btn.classList.toggle('open', now);
        btn.setAttribute('aria-expanded', now ? 'true' : 'false');
        uiState.open = uiState.open || {};
        uiState.open[key] = { ...(uiState.open[key] || {}), [s.sec]: now };
        saveUi();
      });
      box.append(btn, wrap);
    });
    if (COLLAPSIBLE[key]) {
      box.prepend(h('div', { class: 'sec-tools' },
        h('button', { type: 'button', class: 'link-btn', onclick: () => setAllSections(key, true) }, '모두 펼치기'),
        h('button', { type: 'button', class: 'link-btn muted', onclick: () => setAllSections(key, false) }, '모두 접기')));
    }
  }
  refreshConditions();
}
function setAllSections(key, open) {
  uiState.open = uiState.open || {};
  uiState.open[key] = Object.fromEntries(SCHEMA[key].map((s) => [s.sec, open]));
  saveUi();
  buildFields();
}

/* =========================================================
   팝오버
   ========================================================= */
const pop = $('#pop');
let popAnchor = null;
let popOnClose = null;

function openPop(content, anchor, onClose) {
  closePop();
  pop.innerHTML = '';
  pop.append(content);
  pop.hidden = false;
  popAnchor = anchor && anchor.nodeType ? anchor : null;
  popOnClose = onClose || null;
  const sheet = isMobile();
  pop.classList.toggle('sheet', sheet);
  pop.style.left = pop.style.top = '';
  if (sheet) return;
  const pr = pop.getBoundingClientRect();
  let x, y;
  if (popAnchor) {
    const r = popAnchor.getBoundingClientRect();
    x = r.right - pr.width;
    if (x < 12) x = r.left;
    y = r.bottom + 8;
    if (y + pr.height > innerHeight - 12) y = Math.max(12, r.top - pr.height - 8);
  } else {
    x = anchor.x; y = anchor.y;
  }
  pop.style.left = Math.max(12, Math.min(x, innerWidth - pr.width - 12)) + 'px';
  pop.style.top = Math.max(12, Math.min(y, innerHeight - pr.height - 12)) + 'px';
}
function closePop() {
  if (pop.hidden) return;
  pop.hidden = true;
  const cb = popOnClose;
  popOnClose = null;
  popAnchor = null;
  if (cb) cb();
}
document.addEventListener('pointerdown', (e) => {
  if (!pop.hidden && !pop.contains(e.target) && !(popAnchor && popAnchor.contains(e.target))) closePop();
  const menu = $('#menu');
  if (!menu.hidden && !menu.contains(e.target) && !$('#btn-more').contains(e.target)) menu.hidden = true;
}, true);

function openColorPop(anchor, value, onPick) {
  let cur = value;
  const hex = h('input', { type: 'text', class: 'input', value: value.toUpperCase(), maxlength: 9, 'aria-label': '색상 코드' });
  const native = h('input', { type: 'color', value: /^#[0-9a-f]{6}$/i.test(value) ? value : '#000000', 'aria-label': '직접 고르기' });
  const grid = h('div', { class: 'palette' });
  const mark = () => $$('button', grid).forEach((b) => b.classList.toggle('on', b.dataset.c.toLowerCase() === cur.toLowerCase()));
  const pick = (v, fromHex) => {
    cur = v;
    if (!fromHex) hex.value = v.toUpperCase();
    if (/^#[0-9a-f]{6}$/i.test(v)) native.value = v;
    mark();
    onPick(v);
  };
  SWATCHES.forEach((c) => {
    const b = h('button', { type: 'button', 'data-c': c, 'aria-label': c });
    b.style.background = c;
    b.addEventListener('click', () => pick(c));
    grid.append(b);
  });
  mark();
  native.addEventListener('input', () => pick(native.value));
  hex.addEventListener('input', () => {
    let v = hex.value.trim();
    if (v && v[0] !== '#') v = '#' + v;
    if (/^#([0-9a-f]{3}|[0-9a-f]{6}|[0-9a-f]{8})$/i.test(v)) pick(v, true);
  });
  hex.addEventListener('keydown', (e) => { if (e.key === 'Enter') closePop(); });
  openPop(h('div', {}, grid,
    h('div', { class: 'color-custom' }, hex, h('label', { class: 'native-color', title: '직접 고르기' }, native))), anchor);
}

function openFontPop(anchor, d) {
  const cur = getPath(d.p);
  const custom = getPath(d.c);
  const list = h('div', { class: 'font-list' });
  let group = null;
  for (const f of FONTS) {
    if (f.g !== group) { group = f.g; list.append(h('div', { class: 'font-group' }, FONT_GROUPS[f.g])); }
    const on = !custom.trim() && f.n === cur;
    const name = h('span', {}, f.label);
    name.style.fontFamily = previewFamily(f);
    const item = h('button', { type: 'button', class: 'font-item' + (on ? ' on' : '') }, name, h('span', { class: 'ck', html: icon('check') }));
    item.addEventListener('click', () => {
      state[d.c.split('.')[0]][d.c.split('.')[1]] = '';
      setPath(d.p, f.n);
      closePop();
      buildFields();
    });
    list.append(item);
    loadPreviewFont(f, name);
  }
  const customIn = h('input', { type: 'text', class: 'input', value: custom, placeholder: '설치된 서체 또는 스킨의 @font-face 이름' });
  customIn.addEventListener('change', () => { setPath(d.c, customIn.value); buildFields(); });
  customIn.addEventListener('keydown', (e) => { if (e.key === 'Enter') { customIn.blur(); closePop(); } });
  openPop(h('div', {}, list, h('div', { class: 'pop-label' }, '직접 입력'), customIn), anchor);
  const onEl = $('.font-item.on', pop);
  if (onEl) pop.scrollTop = Math.max(0, onEl.offsetTop - pop.clientHeight / 2);
}

/* 말풍선 개별 편집 */
function openBubbleEditor(key, anchor) {
  closePop();
  editingKey = key;
  $$('#stage .msg').forEach((m) => m.classList.toggle('editing', m.dataset.key === key));
  const label = key.split('|')[1] || '';

  const build = () => {
    const o = state.overrides[key] || {};
    const update = (k, v) => {
      const next = { ...(state.overrides[key] || {}) };
      if (v) next[k] = v; else delete next[k];
      if (Object.keys(next).length) state.overrides[key] = next; else delete state.overrides[key];
      changed();
      wrap.replaceWith(build());
    };

    const chips = h('div', { class: 'speaker-chips' });
    const chip = (v, text, ch) => {
      const b = h('button', { type: 'button', class: ((o.speaker || '') === v ? 'on' : '') + (ch ? ' has-av' : '') });
      if (ch) {
        const av = h('span', { class: 'qi-av' });
        if (ch.avatar) av.style.backgroundImage = `url("${ch.avatar}")`;
        else { av.textContent = [...(ch.name || '?')][0]; av.style.background = avatarColor(ch, ch.name); }
        b.append(av);
      }
      b.append(text);
      b.addEventListener('click', () => update('speaker', v));
      chips.append(b);
    };
    chip('', '자동');
    chip('__none', '없음');
    state.chars.forEach((c) => chip(c.id, c.name || '(이름 없음)', c));

    const tiles = h('div', { class: 'tiles' });
    [['', '자동'], ...SHAPES].forEach(([k, l]) => {
      const t = h('button', { type: 'button', class: 'tile' + ((o.shape || '') === k ? ' on' : ''), html: shapeSvg(k || 'auto') + `<span>${l}</span>` });
      t.addEventListener('click', () => update('shape', k));
      tiles.append(t);
    });

    const wrap = h('div', {},
      h('div', { class: 'pop-title' }, `“${label}”`),
      h('div', { class: 'pop-label' }, '화자'), chips,
      h('div', { class: 'pop-label' }, '위치'), segEl([['', '자동'], ...SIDES], o.side || '', (v) => update('side', v), true),
      h('div', { class: 'pop-label' }, '모양'), tiles,
      h('div', { class: 'pop-foot' },
        h('div', {},
          h('button', { type: 'button', class: 'link-btn', onclick: () => { delete state.overrides[key]; changed(); wrap.replaceWith(build()); } }, '초기화'),
          h('button', { type: 'button', class: 'link-btn danger', onclick: () => { state.overrides[key] = { asText: true }; changed(); closePop(); toast('말풍선을 글로 되돌렸어요', { label: '되돌리기', fn: undo }); } }, '말풍선 해제')),
        h('button', { type: 'button', class: 'btn btn-primary btn-sm', onclick: closePop }, '완료')));
    return wrap;
  };

  openPop(build(), anchor, () => {
    editingKey = null;
    $$('#stage .msg.editing').forEach((m) => m.classList.remove('editing'));
  });
}

$('#stage').addEventListener('click', (e) => {
  const wb = e.target.closest('.narr.was-bubble');
  if (wb) {
    const key = wb.dataset.key;
    openPop(h('div', {},
      h('div', { class: 'pop-title' }, '글로 되돌린 대사예요'),
      h('button', { type: 'button', class: 'btn btn-primary btn-block', onclick: () => {
        const o = { ...(state.overrides[key] || {}) }; delete o.asText;
        if (Object.keys(o).length) state.overrides[key] = o; else delete state.overrides[key];
        changed(); closePop();
      } }, '다시 말풍선으로')), wb);
    return;
  }
  const msg = e.target.closest('.msg');
  if (!msg) return;
  openBubbleEditor(msg.dataset.key, msg.querySelector('.bubble') || { x: e.clientX + 12, y: e.clientY + 12 });
});

/* =========================================================
   패널: 탭 · 텍스트 · 템플릿 · 캐릭터 · 스킨
   ========================================================= */
let activePane = 'text';

function buildRail() {
  const rail = $('#rail');
  rail.innerHTML = '';
  PANES.forEach((p) => {
    rail.append(h('button', { type: 'button', class: 'rail-item', 'data-pane': p.id, html: icon(p.icon) + `<span>${p.label}</span>`, onclick: () => setPane(p.id, true) }));
    const pane = $(`[data-pane="${p.id}"].pane`);
    pane.prepend(h('header', { class: 'pane-head' }, h('h2', {}, p.label), p.desc ? h('p', {}, p.desc) : null));
  });
}

function setPane(id, fromUser) {
  const same = id === activePane;
  activePane = id;
  $$('.rail-item').forEach((b) => b.classList.toggle('on', b.dataset.pane === id));
  $$('.pane').forEach((p) => p.classList.toggle('on', p.dataset.pane === id));
  if (!same) $('#panel-scroll').scrollTop = 0;
  if (fromUser && isMobile()) setSheet(!(same && sheetOpen()));
}

const sheetOpen = () => $('#app').classList.contains('sheet-open');
function setSheet(open) { $('#app').classList.toggle('sheet-open', open); }

/* 편집 패널 너비: 오른쪽 가장자리를 끌어서 조절 (데스크톱), 더블클릭하면 원래대로 */
(function panelResizer() {
  const ws = $('.workspace');
  const grip = $('#panel-resizer');
  const MIN = 320, MAX = 760, DEF = 392;
  const apply = (w) => ws.style.setProperty('--panel-w', `${Math.round(Math.min(MAX, Math.max(MIN, w)))}px`);
  if (uiState.panelW) apply(uiState.panelW);
  let x0 = null, w0 = 0;
  grip.addEventListener('pointerdown', (e) => {
    if (isMobile()) return;
    x0 = e.clientX; w0 = $('#panel').offsetWidth;
    grip.setPointerCapture(e.pointerId);
    document.body.classList.add('resizing');
  });
  grip.addEventListener('pointermove', (e) => { if (x0 != null) apply(w0 + e.clientX - x0); });
  const end = () => {
    if (x0 == null) return;
    x0 = null;
    document.body.classList.remove('resizing');
    uiState.panelW = $('#panel').offsetWidth; saveUi();
  };
  grip.addEventListener('pointerup', end);
  grip.addEventListener('pointercancel', end);
  grip.addEventListener('dblclick', () => { apply(DEF); uiState.panelW = DEF; saveUi(); });
  grip.addEventListener('keydown', (e) => {
    if (e.key !== 'ArrowLeft' && e.key !== 'ArrowRight') return;
    e.preventDefault();
    apply($('#panel').offsetWidth + (e.key === 'ArrowRight' ? 24 : -24));
    uiState.panelW = $('#panel').offsetWidth; saveUi();
  });
})();

(function sheetGestures() {
  const handle = $('#sheet-handle');
  const panel = $('#panel');
  let y0 = null, dy = 0;
  handle.addEventListener('pointerdown', (e) => {
    y0 = e.clientY; dy = 0;
    handle.setPointerCapture(e.pointerId);
    panel.style.transition = 'none';
  });
  handle.addEventListener('pointermove', (e) => {
    if (y0 == null) return;
    dy = Math.max(0, e.clientY - y0);
    panel.style.transform = `translateY(${dy}px)`;
  });
  const end = () => {
    if (y0 == null) return;
    panel.style.transition = '';
    panel.style.transform = '';
    if (dy > 70 || dy < 4) setSheet(false);
    y0 = null;
  };
  handle.addEventListener('pointerup', end);
  handle.addEventListener('pointercancel', end);
})();

/* 텍스트 편집 */
const src = $('#src');
let srcTimer;
src.addEventListener('input', () => {
  state.text = src.value;
  updateStats();
  clearTimeout(srcTimer);
  srcTimer = setTimeout(changed, 120);
});
dropTarget($('.editor-card'), isTextFile, async (f) => insertSnippet(await f.text(), '', false));

/* 입력창 글자 바꾸기 (가능하면 브라우저 기본 실행 취소 기록에 남김) */
function replaceRange(s, e, text) {
  src.focus();
  src.setSelectionRange(s, e);
  let ok = false;
  try { ok = text ? document.execCommand('insertText', false, text) : document.execCommand('delete'); } catch (err) { ok = false; }
  if (!ok) { src.setRangeText(text, s, e, 'end'); src.dispatchEvent(new Event('input')); }
}

function insertSnippet(before, after = '', block = true) {
  const s = src.selectionStart, e = src.selectionEnd, v = src.value;
  const sel = v.slice(s, e);
  let pre = before;
  if (block && s > 0 && v[s - 1] !== '\n') pre = '\n' + pre;
  replaceRange(s, e, pre + sel + after);
  const caret = sel ? s + pre.length + sel.length + after.length : s + pre.length;
  src.setSelectionRange(caret, caret);
}

/* 서식 켜고 끄기: 선택한 글자를 기호로 감싸거나 이미 감싸져 있으면 풀기 */
const MARKS = ['**', '__', '~~', '==', '*'];
function markTokens(run, base) {
  const out = [];
  let i = 0;
  while (i < run.length) {
    const m = MARKS.find((k) => run.startsWith(k, i));
    if (!m) break;
    out.push([base + i, m]);
    i += m.length;
  }
  return out;
}
function toggleWrap(mk) {
  const s = src.selectionStart, e = src.selectionEnd, v = src.value;
  const sel = v.slice(s, e);
  const L = mk.length;
  // 이미 같은 서식으로 감싸져 있으면(다른 서식 기호가 사이에 있어도) 해당 기호만 제거
  const lm = v.slice(0, s).match(/(?:\*\*|__|~~|==|\*)+$/);
  const rm = v.slice(e).match(/^(?:\*\*|__|~~|==|\*)+/);
  if (sel && lm && rm) {
    const left = markTokens(lm[0], s - lm[0].length).filter((t) => t[1] === mk).pop();
    const right = markTokens(rm[0], e).find((t) => t[1] === mk);
    if (left && right) {
      replaceRange(right[0], right[0] + L, '');
      replaceRange(left[0], left[0] + L, '');
      src.setSelectionRange(s - L, e - L);
      return;
    }
  }
  if (sel.length > 2 * L && sel.startsWith(mk) && sel.endsWith(mk)) {
    const inner = sel.slice(L, -L);
    replaceRange(s, e, inner);
    src.setSelectionRange(s, s + inner.length);
    return;
  }
  if (!sel) {
    replaceRange(s, e, mk + mk);
    src.setSelectionRange(s + L, s + L);
    return;
  }
  if (!sel.includes('\n')) {
    replaceRange(s, e, mk + sel + mk);
    src.setSelectionRange(s + L, s + L + sel.length); // 안쪽 글자를 선택해 두어 서식을 겹쳐 적용하기 쉽게
    return;
  }
  // 여러 줄이면 줄마다 따로 감쌈 (서식은 줄 단위로 적용됨)
  const out = sel.split('\n').map((line) => {
    const m = line.match(/^(\s*)(.*?)(\s*)$/);
    return m[2] ? m[1] + mk + m[2] + mk + m[3] : line;
  }).join('\n');
  replaceRange(s, e, out);
  src.setSelectionRange(s, s + out.length);
}

const FORMAT_TOOLS = [
  { mk: '**', label: 'B', title: '굵게', key: 'b', cls: 'ft-b' },
  { mk: '*', label: 'I', title: '기울임', key: 'i', cls: 'ft-i' },
  { mk: '__', label: 'U', title: '밑줄', key: 'u', cls: 'ft-u' },
  { mk: '~~', label: 'S', title: '취소선', key: 'x', shift: true, cls: 'ft-s' },
];
const HL_COLORS = ['#ffe58a', '#ffd8a8', '#ffc9c9', '#fcc2d7', '#d0bfff', '#a5d8ff', '#b2f2bb', '#e9ecef'];
const isMac = /Mac|iPhone|iPad/.test(navigator.platform || navigator.userAgent);
const modName = isMac ? '⌘' : 'Ctrl';

function buildFmtBar() {
  const bar = $('#fmt-bar');
  bar.innerHTML = '';
  const keep = (e) => e.preventDefault(); // 선택 영역 유지
  FORMAT_TOOLS.forEach((t) => {
    bar.append(h('button', {
      type: 'button', class: `ft ${t.cls}`, title: `${t.title} (${modName}${t.shift ? '+Shift' : ''}+${t.key.toUpperCase()})`, 'aria-label': t.title,
      onmousedown: keep, onclick: () => toggleWrap(t.mk),
    }, t.label));
  });
  bar.append(h('span', { class: 'ft-sep' }));
  // 형광펜: 누르면 칠하기, 옆 화살표로 색 · 모양 바꾸기
  const sw = h('span', { class: 'hl-sw' });
  sw.style.background = state.typo.hl;
  const hlMain = h('button', { type: 'button', class: 'ft ft-hl', title: `형광펜 (${modName}+Shift+H)`, 'aria-label': '형광펜', onmousedown: keep, onclick: () => toggleWrap('==') },
    h('span', { class: 'hl-ico', html: icon('marker') }), sw);
  const hlMore = h('button', { type: 'button', class: 'ft ft-more', title: '형광펜 색 · 모양', 'aria-label': '형광펜 색 바꾸기', onmousedown: keep, html: icon('chevdown') });
  hlMore.addEventListener('click', () => openHighlightPop(hlMore));
  bar.append(h('span', { class: 'ft-group' }, hlMain, hlMore));
  bar.append(h('span', { class: 'ft-sep' }));
  bar.append(h('button', { type: 'button', class: 'ft ft-text', title: '이름 없는 대사', onmousedown: keep, onclick: () => insertSnippet('"', '"') }, '“대사”'));
  bar.append(h('button', { type: 'button', class: 'ft ft-text', title: '구분선 넣기', onmousedown: keep, onclick: () => insertSnippet('---\n', '', true) }, '구분선'));
}

function openHighlightPop(anchor) {
  const grid = h('div', { class: 'palette hl' });
  const mark = () => $$('button', grid).forEach((b) => b.classList.toggle('on', b.dataset.c === state.typo.hl));
  const pick = (c) => {
    state.typo.hl = c;
    changed();
    mark();
    $('#fmt-bar .hl-sw').style.background = c;
  };
  HL_COLORS.forEach((c) => {
    const b = h('button', { type: 'button', 'data-c': c, 'aria-label': c });
    b.style.background = c;
    b.addEventListener('click', () => pick(c));
    grid.append(b);
  });
  mark();
  const native = h('input', { type: 'color', value: /^#[0-9a-f]{6}$/i.test(state.typo.hl) ? state.typo.hl : '#ffe58a', 'aria-label': '직접 고르기' });
  native.addEventListener('input', () => pick(native.value));
  const sample = h('p', { class: 'hl-sample' }, '이렇게 ', h('mark', {}, '칠해져요'));
  const paintSample = () => {
    const stop = { full: '0%', under: '55%', thin: '78%' }[state.typo.hlStyle] || '55%';
    sample.querySelector('mark').style.background = `linear-gradient(transparent ${stop}, ${state.typo.hl} ${stop})`;
  };
  paintSample();
  const origPick = pick;
  openPop(h('div', {},
    h('div', { class: 'pop-title' }, '형광펜'),
    sample,
    h('div', { class: 'pop-label' }, '색'),
    h('div', { class: 'hl-row' }, grid, h('label', { class: 'native-color sm', title: '직접 고르기' }, native)),
    h('div', { class: 'pop-label' }, '모양'),
    segEl([['under', '밑줄형'], ['thin', '얇게'], ['full', '전체']], state.typo.hlStyle, (v) => { state.typo.hlStyle = v; changed(); paintSample(); }, true),
    h('p', { class: 'pop-note' }, '선택한 글자를 칠하려면 형광펜 버튼을 누르세요. 색은 모든 형광펜에 함께 적용돼요.')), anchor, () => buildFields());
  grid.addEventListener('click', paintSample);
  native.addEventListener('input', paintSample);
  void origPick;
}

src.addEventListener('keydown', (e) => {
  if (!(e.metaKey || e.ctrlKey) || e.altKey) return;
  const k = e.key.toLowerCase();
  const t = FORMAT_TOOLS.find((x) => x.key === k && !!x.shift === e.shiftKey);
  if (t) { e.preventDefault(); toggleWrap(t.mk); return; }
  if (k === 'h' && e.shiftKey) { e.preventDefault(); toggleWrap('=='); }
});

function buildQuickInsert() {
  const box = $('#quick-insert');
  box.innerHTML = '';
  state.chars.forEach((c) => {
    if (!c.name) return;
    const av = h('span', { class: 'qi-av' });
    if (c.avatar) av.style.backgroundImage = `url("${c.avatar}")`;
    else { av.textContent = [...c.name][0]; av.style.background = avatarColor(c, c.name); }
    box.append(h('button', { type: 'button', class: 'qi', title: `${c.name}의 대사 넣기`, onmousedown: (e) => e.preventDefault(), onclick: () => insertSnippet(`${c.name}: "`, '"') }, av, c.name));
  });
  box.hidden = !box.childElementCount;
}

/* 내 양식: 디자인 · 대사 인식 설정을 저장/불러오기 (글은 제외) */
const STYLE_KEYS = ['typo', 'head', 'bubble', 'canvas', 'parse', 'skin', 'bgHtml'];
let myStyles = [];

function styleSnapshot(name, withChars) {
  const data = {};
  for (const k of STYLE_KEYS) data[k] = copyState(state[k]);
  if (withChars) data.chars = copyState(state.chars);
  return { type: 'ninining-style', version: 1, name, createdAt: Date.now(), data };
}
function applyStyle(st) {
  const data = st.data || st; // 전체 설정 파일도 받기
  for (const k of STYLE_KEYS) {
    if (!(k in data)) continue;
    state[k] = k === 'skin' || k === 'bgHtml' ? data[k] || '' : deepMerge(copyState(DEFAULTS[k]), data[k]);
  }
  if (Array.isArray(data.chars)) state.chars = copyState(data.chars);
  commit(); rebuildAll(); save();
  toast(`‘${st.name || '프리셋'}’을(를) 적용했어요`, { label: '되돌리기', fn: undo });
}
async function persistStyles() {
  try { await idb.set('styles', myStyles); } catch (e) { toast('브라우저에 저장하지 못했어요 · 파일로 보관해 주세요'); }
}
async function downloadStyle(st) {
  const json = JSON.stringify(st, null, 2);
  const name = `${(st.name || '프리셋').replace(/[\\/:*?"<>|]+/g, '_')}.ninining.json`;
  if (typeof window.showSaveFilePicker === 'function' && !isMobile()) {
    try {
      const fh = await window.showSaveFilePicker({ suggestedName: name, startIn: dirHandle || 'documents', types: [{ description: '니니닝 프리셋', accept: { 'application/json': ['.json'] } }] });
      const w = await fh.createWritable(); await w.write(json); await w.close();
      toast('프리셋 파일을 저장했어요');
      return;
    } catch (e) { if (e && e.name === 'AbortError') return; }
  }
  const url = URL.createObjectURL(new Blob([json], { type: 'application/json' }));
  download(url, name);
  setTimeout(() => URL.revokeObjectURL(url), 2000);
}
function styleSwatch(st) {
  const c = (st.data && st.data.canvas) || {};
  const t = (st.data && st.data.typo) || {};
  const sw = h('span', { class: 'style-sw' }, '가');
  sw.style.background = c.bgType === 'gradient' ? `linear-gradient(${c.gradAngle || 160}deg, ${c.bg}, ${c.bg2})` : (c.bg || '#fff');
  sw.style.color = t.color || '#222';
  sw.style.fontFamily = fontStack(t.font || 'serif', t.fontCustom);
  return sw;
}
function buildMyStyles() {
  const list = $('#style-list');
  list.innerHTML = '';
  if (!myStyles.length) {
    list.append(h('div', { class: 'row empty' }, h('div', { class: 'row-label' }, '저장한 프리셋이 없어요', h('small', {}, '지금 화면의 서체 · 말풍선 · 배경 · 지문 형식을 이름 붙여 보관해 보세요'))));
    return;
  }
  myStyles.forEach((st, i) => {
    const d = new Date(st.createdAt || Date.now());
    const sub = `${d.getFullYear()}.${d.getMonth() + 1}.${d.getDate()}${st.data && st.data.chars ? ` · 캐릭터 ${st.data.chars.length}명` : ''}`;
    list.append(h('div', { class: 'row style-row' },
      h('button', { type: 'button', class: 'style-main', onclick: () => applyStyle(st), title: '이 프리셋 적용' },
        styleSwatch(st), h('span', { class: 'row-label' }, st.name, h('small', {}, sub))),
      h('div', { class: 'style-tools' },
        h('button', { type: 'button', class: 'icon-btn sm', title: '파일로 내려받기', 'aria-label': '파일로 내려받기', html: icon('download'), onclick: () => downloadStyle(st) }),
        h('button', { type: 'button', class: 'icon-btn sm', title: '현재 설정으로 덮어쓰기', 'aria-label': '덮어쓰기', html: icon('refresh'), onclick: () => {
          if (!confirm(`‘${st.name}’을(를) 지금 설정으로 덮어쓸까요?`)) return;
          myStyles[i] = styleSnapshot(st.name, true); persistStyles(); buildMyStyles(); toast('프리셋을 업데이트했어요');
        } }),
        h('button', { type: 'button', class: 'icon-btn sm danger', title: '삭제', 'aria-label': '삭제', html: icon('trash'), onclick: () => {
          const removed = myStyles.splice(i, 1)[0]; persistStyles(); buildMyStyles();
          toast(`‘${removed.name}’을(를) 지웠어요`, { label: '되돌리기', fn: () => { myStyles.splice(i, 0, removed); persistStyles(); buildMyStyles(); } });
        } }))));
  });
}
function currentStyleName() {
  const v = $('#style-name').value.trim();
  return v || `내 프리셋 ${myStyles.length + 1}`;
}
$('#btn-style-save').addEventListener('click', () => {
  const st = styleSnapshot(currentStyleName(), true);
  myStyles.unshift(st);
  persistStyles(); buildMyStyles();
  $('#style-name').value = '';
  toast(`‘${st.name}’ 프리셋을 저장했어요`);
});
$('#style-name').addEventListener('keydown', (e) => { if (e.key === 'Enter') $('#btn-style-save').click(); });
$('#btn-style-file').addEventListener('click', () => downloadStyle(styleSnapshot(currentStyleName(), true)));
$('#file-style').addEventListener('change', async (e) => {
  const f = e.target.files[0];
  e.target.value = '';
  if (!f) return;
  try {
    const obj = JSON.parse(await f.text());
    const st = obj.type === 'ninining-style' ? obj : { type: 'ninining-style', version: 1, name: f.name.replace(/(\.ninining)?\.json$/i, ''), createdAt: Date.now(), data: obj };
    if (!st.data || typeof st.data !== 'object') throw new Error('bad');
    myStyles.unshift(st);
    persistStyles(); buildMyStyles();
    applyStyle(st);
  } catch (err) { toast('프리셋 파일을 읽지 못했어요'); }
});

/* 템플릿 */
function buildTemplates() {
  const grid = $('#template-grid');
  grid.innerHTML = '';
  TEMPLATES.forEach((t) => {
    const pv = h('div', { class: 'tpl-pv' });
    const p = t.pv;
    pv.style.background = p.bg;
    if (p.lines) pv.style.backgroundImage = 'repeating-linear-gradient(transparent 0 13px, rgba(120,150,190,.25) 13px 14px)';
    if (p.frame) pv.style.boxShadow = 'inset 0 0 0 6px ' + p.bg + ', inset 0 0 0 7px rgba(80,55,30,.35)';
    const line = (w, center) => { const l = h('i', { class: 'l' }); l.style.cssText = `display:block;width:${w}%;background:${p.fg};${center ? 'align-self:center' : ''}`; return l; };
    if (p.q) { const q = h('div', { class: 'q' }, '“'); q.style.color = p.q; q.style.alignSelf = 'center'; pv.append(q); }
    if (p.book) {
      const tl = line(40, true); tl.style.opacity = '.8'; pv.style.justifyContent = 'flex-start'; pv.style.paddingTop = '22px';
      pv.append(tl, h('i', { style: 'display:block;height:6px' }));
      for (let k = 0; k < 7; k++) { const l = line(k % 3 === 2 ? 62 : 100); l.style.height = '4px'; if (k % 3 === 0) l.style.marginLeft = '8%'; l.style.width = k % 3 === 0 ? '92%' : l.style.width; pv.append(l); }
    } else if (p.film || p.center) {
      pv.append(line(78, true), line(64, true), line(70, true));
      if (p.subtitle) { const sub = line(56, true); sub.style.background = p.subtitle; sub.style.opacity = '.95'; pv.append(sub); }
    } else {
      pv.append(line(80), line(56));
      const b1 = h('i', { class: 'b' }); b1.style.cssText = `display:block;background:${p.b1};${p.outline ? `border:1px solid ${p.outline}` : ''}`;
      const b2 = h('i', { class: 'b r' }); b2.style.cssText = `display:block;background:${p.b2};${p.outline ? `border:1px solid ${p.outline}` : ''}`;
      pv.append(b1, b2, line(68));
    }
    grid.append(h('button', { type: 'button', class: 'tpl', onclick: () => applyTemplate(t) }, pv,
      h('div', { class: 'tpl-name' }, t.name, h('small', {}, t.sub))));
  });
}

/* 템플릿은 색 · 배경 · 말풍선 모양 · 스킨만 바꾸고, 화면 비율 · 크기와 서체 · 글자 간격은 지금 설정을 유지 */
const TEMPLATE_KEEP = {
  typo: ['font', 'fontCustom', 'size', 'lh', 'ls', 'weight', 'align', 'paraMode', 'gap', 'indent', 'hlStyle'],
  head: ['font', 'fontCustom', 'size', 'weight', 'align', 'creditFont', 'creditFontCustom', 'creditSize', 'creditWeight', 'creatorFont', 'creatorFontCustom', 'creatorSize', 'creatorWeight', 'creditAlign', 'creditLayout'],
  bubble: ['font', 'fontCustom', 'size', 'lh', 'ls', 'weight', 'avatar', 'avatarSize', 'avatarShape', 'showName', 'nameSize', 'maxw'],
  canvas: ['ratio', 'width', 'pad', 'fit', 'valign', 'paginate', 'pageNum', 'scale', 'bgImage', 'overlay', 'overlayColor'],
};
function applyTemplate(t) {
  const prev = copyState({ typo: state.typo, head: state.head, bubble: state.bubble, canvas: state.canvas });
  state.parse.strip = t.parse && 'strip' in t.parse ? t.parse.strip : true;
  for (const k of ['typo', 'head', 'bubble', 'canvas']) {
    const base = copyState(BASE_DESIGN[k]);
    state[k] = deepMerge(base, (t.set && t.set[k]) || {});
    for (const f of TEMPLATE_KEEP[k]) if (f in prev[k]) state[k][f] = prev[k][f];
  }
  const th = (t.set && t.set.head) || {};
  if (th.creditColor && !th.creatorColor) state.head.creatorColor = th.creditColor;
  state.skin = t.skin || '';
  state.chars.forEach((c, i) => {
    // 위치: 사용자가 정한 좌/우(homeSide)를 지킴. 가운데 정렬 같은 레이아웃 템플릿만 잠시 바꾸고, 다른 템플릿에서 원래대로
    if (!c.homeSide) c.homeSide = c.side || 'left';
    c.side = t.charSide || c.homeSide;
    // 색: 위치에 맞춰 (왼쪽 → 첫 번째 색, 오른쪽 → 두 번째 색). 레이아웃 템플릿은 캐릭터 구분용으로 순서대로
    if (t.chars) {
      const pick = t.charSide ? i % t.chars.length : (c.side === 'right' && t.chars.length > 1 ? 1 : 0);
      const [bg, color, border] = t.chars[pick];
      Object.assign(c, { custom: true, bg, color, border });
    } else c.custom = false;
    c.shape = '';
  });
  state.overrides = Object.fromEntries(Object.entries(state.overrides).map(([k, v]) => {
    const { shape, ...rest } = v;
    return [k, rest];
  }).filter(([, v]) => Object.keys(v).length));
  commit();
  rebuildAll();
  save();
  toast(`‘${t.name}’ 템플릿을 적용했어요`, { label: '되돌리기', fn: undo });
}

/* 캐릭터 */
const namelessOptions = () => [['none', '지정 안 함'], ['alt', '번갈아 가며'], ...state.chars.map((c) => [c.id, c.name || '(이름 없음)'])];
// 텍스트 탭과 캐릭터 탭의 '이름 없는 대사의 화자'를 같은 값으로 맞춤
function syncNameless() {
  $$('select[data-nameless], [data-fields="text"] select[aria-label="이름 없는 대사의 화자"]').forEach((sel) => {
    if (sel.value !== state.parse.nameless) sel.value = state.parse.nameless;
  });
}

function buildChars() {
  const list = $('#chars-list');
  list.innerHTML = '';
  const nlSel = h('select', { class: 'select', 'data-nameless': '', value: state.parse.nameless, 'aria-label': '이름 없는 대사의 화자',
    onchange: (e) => { setPath('parse.nameless', e.target.value); syncNameless(); } },
    namelessOptions().map(([v, l]) => h('option', { value: v }, l)));
  list.append(h('div', { class: 'section nameless-card' },
    h('div', { class: 'row' }, labelEl('이름 없는 대사의 화자', '이름 없이 따옴표만 있는 대사를 누구의 말풍선으로 할지 정해요'), nlSel)));
  if (!state.chars.length) list.append(h('p', { class: 'footnote' }, '아직 캐릭터가 없어요. 아래 버튼으로 추가해 보세요.'));
  state.chars.forEach((ch, i) => {
    const av = h('button', { type: 'button', class: 'char-av', title: '얼굴 사진 바꾸기', 'aria-label': `${ch.name || '캐릭터'} 얼굴 사진 바꾸기` });
    if (ch.avatar) av.style.backgroundImage = `url("${ch.avatar}")`;
    else { av.textContent = [...(ch.name || '?')][0]; av.style.background = avatarColor(ch, ch.name); }
    const file = h('input', { type: 'file', accept: 'image/*', hidden: true });
    const setAvatar = async (f) => {
      try {
        ch.avatar = await shrinkImage(f, 256, true);
        changed(); buildChars(); buildQuickInsert();
      } catch (e) { toast('이미지를 읽지 못했어요'); }
    };
    // 이미지 링크: 가능하면 받아서 사진으로 저장(이미지 저장에도 나오게), 막혀 있으면 링크 그대로
    const setAvatarUrl = async (url) => {
      url = url.trim();
      if (!/^(https?:|data:image\/)/i.test(url)) { toast('https:// 로 시작하는 이미지 링크를 넣어 주세요'); return; }
      try {
        const r = await fetch(url);
        if (!r.ok) throw new Error(r.status);
        const blob = await r.blob();
        if (!/^image\//.test(blob.type)) throw new Error('type');
        ch.avatar = await shrinkImage(blob, 256, true);
        toast('링크의 사진을 넣었어요');
      } catch (e) {
        const ok = await new Promise((res) => { const im = new Image(); im.onload = () => res(true); im.onerror = () => res(false); im.src = url; });
        if (!ok) { toast('이 링크에서 이미지를 불러오지 못했어요'); return; }
        ch.avatar = url;
        toast('사진을 넣었어요 · 이 사이트는 외부 사용을 막아 두어 저장 이미지에는 안 나올 수 있어요', null, 4200);
      }
      changed(); buildChars(); buildQuickInsert();
    };
    av.append(h('span', { class: 'cam', html: icon('camera') }));
    av.addEventListener('click', () => openPhotoPop(av, ch, setAvatar, setAvatarUrl));

    const nameIn = h('input', { type: 'text', class: 'char-name', value: ch.name, placeholder: '이름', 'aria-label': '캐릭터 이름' });
    nameIn.addEventListener('input', () => {
      ch.name = nameIn.value;
      if (!ch.avatar) { av.firstChild.nodeType === 3 && (av.firstChild.textContent = [...(ch.name || '?')][0]); }
      changed();
    });
    nameIn.addEventListener('change', () => { buildFields(); buildQuickInsert(); });

    const move = (dir) => {
      const j = i + dir;
      if (j < 0 || j >= state.chars.length) return;
      [state.chars[i], state.chars[j]] = [state.chars[j], state.chars[i]];
      changed(); buildChars(); buildFields(); buildQuickInsert();
    };
    const remove = () => {
      state.chars.splice(i, 1);
      if (state.parse.nameless === ch.id) state.parse.nameless = 'none';
      changed(); buildChars(); buildFields(); buildQuickInsert();
      toast(`‘${ch.name || '이름 없음'}’을(를) 삭제했어요`, { label: '되돌리기', fn: undo });
    };

    const paint = () => {};

    const colorRow = h('div', { class: 'row' + (ch.custom ? '' : ' disabled') },
      h('div', { class: 'char-colors' },
        ...[['bg', '배경'], ['color', '글자'], ['border', '테두리']].map(([k, l]) =>
          colorButton(() => ch[k], (v) => { ch[k] = v; paint(); changed(); }, l))),
    );

    const customSw = h('input', { type: 'checkbox', class: 'switch', role: 'switch', checked: ch.custom });
    customSw.addEventListener('change', () => { ch.custom = customSw.checked; colorRow.classList.toggle('disabled', !ch.custom); paint(); changed(); });

    const shapeSel = h('select', { class: 'select', value: ch.shape || '', 'aria-label': '말풍선 모양', onchange: (e) => { ch.shape = e.target.value; changed(); } },
      [h('option', { value: '' }, '기본값'), ...SHAPES.map(([v, l]) => h('option', { value: v }, l))]);

    const card = h('div', { class: 'char-card' },
      h('div', { class: 'char-head' }, av, nameIn,
        h('div', { class: 'char-tools' },
          h('button', { type: 'button', class: 'icon-btn sm', title: '위로', 'aria-label': '위로', html: icon('up'), onclick: () => move(-1), disabled: i === 0 }),
          h('button', { type: 'button', class: 'icon-btn sm', title: '아래로', 'aria-label': '아래로', html: icon('down'), onclick: () => move(1), disabled: i === state.chars.length - 1 }),
          h('button', { type: 'button', class: 'icon-btn sm danger', title: '삭제', 'aria-label': '삭제', html: icon('trash'), onclick: remove }))),
      h('div', { class: 'char-body' },
        h('div', { class: 'row' }, labelEl('위치'), segEl(SIDES, ch.side, (v) => { ch.side = v; ch.homeSide = v; changed(); })),
        h('div', { class: 'row' }, labelEl('말풍선 모양'), shapeSel),
        h('label', { class: 'row' }, labelEl('개별 색상'), customSw),
        colorRow));
    dropTarget(card, isImageFile, setAvatar);
    list.append(card);
  });
}

/* 아, 캐릭터 너무 많아!: 쉼표로 구분한 이름을 기본 모양으로 한 번에 추가 */
function parseBulkNames(text) {
  const existing = new Set(state.chars.map((c) => (c.name || '').trim()));
  const seen = new Set();
  const add = [], skip = [];
  for (const raw of text.split(/[,，、\n]/)) {
    const n = raw.trim().slice(0, 24);
    if (!n || seen.has(n)) continue;
    seen.add(n);
    (existing.has(n) ? skip : add).push(n);
  }
  return { add, skip };
}
function updateBulkPreview() {
  const box = $('#bulk-preview');
  const { add, skip } = parseBulkNames($('#bulk-names').value);
  box.innerHTML = '';
  box.hidden = !add.length && !skip.length;
  add.forEach((n) => box.append(h('span', { class: 'bulk-chip' }, n)));
  skip.forEach((n) => box.append(h('span', { class: 'bulk-chip skip', title: '이미 있는 캐릭터' }, `${n} · 이미 있음`)));
  $('#btn-bulk-add').textContent = add.length > 1 ? `${add.length}명 추가` : '추가';
}
function bulkAddChars() {
  const input = $('#bulk-names');
  const { add, skip } = parseBulkNames(input.value);
  if (!add.length) {
    toast(skip.length ? '모두 이미 있는 캐릭터예요' : '이름을 쉼표로 구분해 넣어 주세요');
    input.focus();
    return;
  }
  const base = Date.now().toString(36);
  add.forEach((name, i) => state.chars.push({
    id: `c${base}${i}`, name, avatar: '', side: 'left', shape: '',
    custom: true, bg: '#ffffff', color: '#222222', border: '#ffffff',
  }));
  input.value = '';
  updateBulkPreview();
  changed(); commit();
  buildChars(); buildFields(); buildQuickInsert();
  toast(`${add.length}명을 추가했어요${skip.length ? ` · 이미 있는 ${skip.length}명은 건너뛰었어요` : ''}`, { label: '되돌리기', fn: undo });
}
$('#bulk-names').addEventListener('input', updateBulkPreview);
$('#bulk-names').addEventListener('keydown', (e) => { if (e.key === 'Enter' && !e.isComposing) { e.preventDefault(); bulkAddChars(); } });
$('#btn-bulk-add').addEventListener('click', bulkAddChars);

/* 프로필 원을 누르면: 파일에서 고르기 · 이미지 링크 · 지우기 */
function openPhotoPop(anchor, ch, setAvatar, setAvatarUrl) {
  const file = h('input', { type: 'file', accept: 'image/*', hidden: true });
  file.addEventListener('change', () => { if (file.files[0]) { closePop(); setAvatar(file.files[0]); } });
  const urlIn = h('input', { type: 'url', class: 'input', placeholder: 'https://… 이미지 주소', 'aria-label': '이미지 링크' });
  const apply = () => { if (urlIn.value.trim()) { closePop(); setAvatarUrl(urlIn.value); } else urlIn.focus(); };
  urlIn.addEventListener('keydown', (e) => { if (e.key === 'Enter' && !e.isComposing) apply(); });
  openPop(h('div', { class: 'photo-pop' },
    h('div', { class: 'pop-title' }, `${ch.name || '캐릭터'} 얼굴 사진`),
    h('label', { class: 'photo-opt' }, h('span', { class: 'po-ico', html: icon('image') }),
      h('span', {}, h('b', {}, '파일에서 고르기'), h('small', {}, '사진을 끌어다 카드에 놓아도 돼요')), file),
    h('div', { class: 'pop-label' }, '이미지 링크'),
    h('div', { class: 'photo-url' }, urlIn, h('button', { type: 'button', class: 'btn btn-primary btn-sm', onclick: apply }, '넣기')),
    ch.avatar ? h('button', { type: 'button', class: 'link-btn danger photo-del', onclick: () => {
      closePop(); ch.avatar = ''; changed(); buildChars(); buildQuickInsert();
      toast('사진을 지웠어요', { label: '되돌리기', fn: undo });
    } }, '사진 지우기') : null), anchor);
}

$('#btn-add-char').addEventListener('click', () => {
  const n = state.chars.length;
  state.chars.push({
    id: 'c' + Date.now().toString(36), name: `캐릭터${n + 1}`, avatar: '',
    side: n % 2 ? 'right' : 'left', shape: '', custom: false, bg: '#ffffff', color: '#222222', border: '#888888',
  });
  changed(); buildChars(); buildFields(); buildQuickInsert();
  const names = $$('.char-name');
  const last = names[names.length - 1];
  if (last) { last.focus(); last.select(); }
});

/* 스킨 */
function buildSkin() {
  const row = $('#skin-presets');
  row.innerHTML = '';
  const chip = (label, css) => row.append(h('button', {
    type: 'button', class: 'chip',
    onclick: () => {
      state.skin = css;
      $('#skin-css').value = css;
      applySkin();
      changed();
      toast(css ? `‘${label}’ 스킨을 적용했어요` : '스킨을 비웠어요', { label: '되돌리기', fn: undo });
    },
  }, label));
  chip('없음', '');
  for (const s of Object.values(SKINS)) chip(s.name, s.css);
  const hrow = $('#html-presets');
  hrow.innerHTML = '';
  HTML_BG_PRESETS.forEach((bp) => hrow.append(h('button', {
    type: 'button', class: 'chip',
    onclick: async () => {
      try {
        const html = await (await fetch(bp.file)).text();
        commit();
        state.bgHtml = html;
        $('#html-bg').value = html;
        // 이 배경의 기본 캐릭터 등록 (기본 모양: 하얀 배경 · 검은 글씨 · 하얀 테두리 · 왼쪽, 이미 있는 이름은 건너뜀)
        // 프로필 사진이 있으면 받아서 넣음 (이미 있는 캐릭터도 사진이 비어 있으면 채움)
        const list = (bp.chars || []).map((c) => (typeof c === 'string' ? { name: c } : c));
        const photos = {};
        await Promise.all(list.filter((c) => c.avatar).map(async (c) => {
          try { photos[c.name] = await readFileAsDataURL(await (await fetch(c.avatar)).blob()); } catch (err) { /* 사진 없이 */ }
        }));
        const added = [];
        const base = Date.now().toString(36);
        list.forEach(({ name }, i) => {
          const ex = findChar(name);
          if (ex) { if (!ex.avatar && photos[name]) ex.avatar = photos[name]; return; }
          state.chars.push({ id: `p${base}${i}`, name, avatar: photos[name] || '', side: 'left', homeSide: 'left', shape: '', custom: true, bg: '#ffffff', color: '#222222', border: '#ffffff' });
          added.push(name);
        });
        if (bp.avatars) state.bubble.avatar = true;
        if (bp.clearCredit) { state.credit = ''; state.creator = ''; }
        if (bp.parse) Object.assign(state.parse, copyState(bp.parse), { auto: true });
        changed(); commit();
        buildChars(); buildFields(); buildQuickInsert();
        toast(`‘${bp.name}’ 배경을 적용했어요${added.length ? ` · 캐릭터 ${added.length}명 등록` : ''}`, { label: '되돌리기', fn: undo }, 3600);
      } catch (e) { toast('배경을 불러오지 못했어요'); }
    },
  }, bp.name)));
  $('#skin-css').value = state.skin;
  $('#html-bg').value = state.bgHtml || '';
  setHtmlStatus(htmlBg.status);
}
let skinTimer;
$('#skin-css').addEventListener('input', (e) => {
  state.skin = e.target.value;
  clearTimeout(skinTimer);
  skinTimer = setTimeout(() => {
    // 배경 코드(body 규칙 · 장식 HTML)는 HTML 배경으로 옮겨서 그림
    if (looksLikeHtmlBg(state.skin)) {
      state.bgHtml = state.skin;
      state.skin = '';
      $('#skin-css').value = '';
      $('#html-bg').value = state.bgHtml;
      toast('배경용 HTML 코드라서 ‘HTML 배경’ 칸으로 옮겨 적용했어요', { label: '되돌리기', fn: undo }, 3600);
    }
    applySkin(); changed();
  }, 250);
});
let htmlTimer;
$('#html-bg').addEventListener('input', (e) => {
  state.bgHtml = e.target.value;
  clearTimeout(htmlTimer);
  htmlTimer = setTimeout(changed, 300);
});
$('#btn-html-example').addEventListener('click', () => {
  if (state.bgHtml.trim() && !confirm('지금 HTML 배경을 예시로 바꿀까요?')) return;
  state.bgHtml = `<style>
  body { background: linear-gradient(160deg, #fdf6ec, #f3e7d9); }
  .frame { position: absolute; inset: 14px; border: 1.5px solid rgba(120, 90, 60, .35); border-radius: 18px; }
  .star { position: absolute; font-size: 22px; color: #e7b84a; }
</style>
<div class="frame"></div>
<div class="star" style="top: 22px; right: 28px;" data-layer="top">★</div>`;
  $('#html-bg').value = state.bgHtml;
  changed();
});
$('#btn-html-clear').addEventListener('click', () => {
  if (!state.bgHtml.trim()) return;
  state.bgHtml = '';
  $('#html-bg').value = '';
  changed();
  toast('HTML 배경을 비웠어요', { label: '되돌리기', fn: undo });
});
$('#skin-css').addEventListener('keydown', (e) => {
  if (e.key === 'Tab' && !e.shiftKey) {
    e.preventDefault();
    e.target.setRangeText('  ', e.target.selectionStart, e.target.selectionEnd, 'end');
    e.target.dispatchEvent(new Event('input'));
  }
});

/* =========================================================
   이미지 저장 (사용한 글자의 웹폰트만 골라 넣어 빠르게)
   ========================================================= */
const fontDataCache = new Map();
function fetchAsDataURL(url) {
  if (!fontDataCache.has(url)) {
    fontDataCache.set(url, fetch(url).then((r) => {
      if (!r.ok) throw new Error(r.status);
      return r.blob();
    }).then(readFileAsDataURL).catch(() => null));
  }
  return fontDataCache.get(url);
}

function collectFontRules(sheet, base, out) {
  let rules;
  try { rules = sheet.cssRules; } catch (e) { return; }
  if (!rules) return;
  for (const r of rules) {
    if (r.type === CSSRule.FONT_FACE_RULE) out.push({ rule: r, base });
    else if (r.type === CSSRule.IMPORT_RULE && r.styleSheet) collectFontRules(r.styleSheet, r.styleSheet.href || base, out);
    else if (r.cssRules) collectFontRules(r, base, out);
  }
}

function parseRanges(str) {
  return str.split(',').map((s) => {
    s = s.trim().replace(/^u\+/i, '');
    if (s.includes('?')) return [parseInt(s.replace(/\?/g, '0'), 16), parseInt(s.replace(/\?/g, 'F'), 16)];
    const [a, b] = s.split('-');
    return [parseInt(a, 16), parseInt(b || a, 16)];
  });
}

const unquote = (s) => s.trim().replace(/^["']|["']$/g, '').toLowerCase();

async function buildFontEmbedCSS(cards) {
  const families = new Set();
  const weights = new Set();
  const codes = new Set([32]);
  for (const card of cards) {
    for (const el of [card, ...card.querySelectorAll('*')]) {
      const cs = getComputedStyle(el);
      cs.fontFamily.split(',').forEach((f) => families.add(unquote(f)));
      weights.add(Math.round(parseInt(cs.fontWeight, 10) / 100) * 100 || 400);
    }
    for (const ch of card.textContent) codes.add(ch.codePointAt(0));
  }
  const codeList = [...codes];

  const all = [];
  for (const sheet of document.styleSheets) collectFontRules(sheet, sheet.href || location.href, all);

  const byFamily = new Map();
  for (const item of all) {
    const st = item.rule.style;
    const fam = unquote(st.getPropertyValue('font-family'));
    if (!families.has(fam)) continue;
    const ur = st.getPropertyValue('unicode-range');
    if (ur) {
      const ranges = parseRanges(ur);
      if (!codeList.some((c) => ranges.some(([a, b]) => c >= a && c <= b))) continue;
    }
    if (!byFamily.has(fam)) byFamily.set(fam, []);
    byFamily.get(fam).push(item);
  }

  const chosen = [];
  for (const items of byFamily.values()) {
    const matchW = items.filter(({ rule }) => {
      const w = rule.style.getPropertyValue('font-weight').trim() || '400';
      const [lo, hi] = w.split(/\s+/).map((x) => (x === 'normal' ? 400 : x === 'bold' ? 700 : +x));
      return [...weights].some((u) => (hi ? u >= lo && u <= hi : u === lo));
    });
    chosen.push(...(matchW.length ? matchW : items));
  }

  const parts = await Promise.all(chosen.map(async ({ rule, base }) => {
    const st = rule.style;
    const m = st.getPropertyValue('src').match(/url\(\s*["']?([^"')]+)["']?\s*\)/);
    if (!m) return '';
    const url = new URL(m[1], base).href;
    const data = url.startsWith('data:') ? url : await fetchAsDataURL(url);
    if (!data) return '';
    const fmtName = /\.woff2(\?|$)/.test(url) ? 'woff2' : /\.woff(\?|$)/.test(url) ? 'woff' : /\.otf(\?|$)/.test(url) ? 'opentype' : 'truetype';
    const props = ['font-family', 'font-weight', 'font-style', 'font-stretch', 'unicode-range', 'font-display']
      .map((p) => [p, st.getPropertyValue(p)]).filter(([, v]) => v).map(([p, v]) => `${p}:${v};`).join('');
    return `@font-face{${props}src:url(${data}) format("${fmtName}");}`;
  }));
  return parts.join('\n') || '/* no web fonts */';
}

/* 미리보기의 줄바꿈 위치를 그대로 고정 (이미지 변환기는 글자 폭을 미세하게 다르게 계산하므로) */
function freezeLines(E, scale) {
  const cs = getComputedStyle(E);
  const lh = (parseFloat(cs.lineHeight) || parseFloat(cs.fontSize) * 1.4) * scale;
  const walker = document.createTreeWalker(E, NodeFilter.SHOW_TEXT);
  const r = document.createRange();
  const breaks = [];
  let prevTop = null, node;
  while ((node = walker.nextNode())) {
    const t = node.data;
    for (let i = 0; i < t.length; i++) {
      if (t[i] === ' ' || t[i] === '\n' || t[i] === '\t') continue;
      r.setStart(node, i); r.setEnd(node, i + 1);
      const rc = r.getClientRects()[0];
      if (!rc) continue;
      if (prevTop !== null && rc.top - prevTop > lh * 0.5) breaks.push([node, i]);
      prevTop = rc.top;
    }
  }
  if (!breaks.length) return;
  const frags = [];
  for (let k = breaks.length - 1; k >= 0; k--) {
    r.setStart(breaks[k][0], breaks[k][1]);
    r.setEnd(E, E.childNodes.length);
    frags.unshift(r.extractContents());
  }
  const first = document.createDocumentFragment();
  while (E.firstChild) first.appendChild(E.firstChild);
  frags.unshift(first);
  const justify = cs.textAlign === 'justify';
  frags.forEach((frag, i) => {
    const ln = document.createElement('span');
    ln.appendChild(frag);
    ln.style.cssText = `display:block;white-space:pre;text-indent:${i === 0 ? cs.textIndent : '0'};text-align-last:${justify && i < frags.length - 1 ? 'justify' : 'auto'}`;
    const texts = [];
    const w = document.createTreeWalker(ln, NodeFilter.SHOW_TEXT);
    while (w.nextNode()) texts.push(w.currentNode);
    if (texts.length) {
      const last = texts[texts.length - 1];
      last.data = last.data.replace(/[ \t\n]+$/, '');
      if (i > 0) texts[0].data = texts[0].data.replace(/^[ \t\n]+/, '');
    }
    E.appendChild(ln);
  });
}

/* HTML 배경 그림을 저장 배율 그대로 PNG로 바꿔 둠 (SVG 그림이 한 번 더 확대되며 흐려지는 것 방지) */
async function rasterizeHtmlLayers(card) {
  const sc = state.canvas.scale;
  for (const img of card.querySelectorAll('.card-htmlbg, .card-htmltop')) {
    if (!img.getAttribute('src') || img.hidden) continue;
    try {
      if (!img.complete) await new Promise((r) => { img.onload = r; img.onerror = r; });
      const w = card.offsetWidth, hgt = card.offsetHeight;
      const cv = document.createElement('canvas');
      cv.width = Math.round(w * sc); cv.height = Math.round(hgt * sc);
      cv.getContext('2d').drawImage(img, 0, 0, cv.width, cv.height);
      img.src = cv.toDataURL('image/png');
      await img.decode().catch(() => {});
    } catch (e) { /* 브라우저가 막으면 원래 그림 그대로 */ }
  }
}

function cardToPng(card, fontCSS) {
  return htmlToImage.toPng(card, {
    width: card.offsetWidth,
    height: card.offsetHeight,
    pixelRatio: state.canvas.scale,
    style: { transform: 'none', position: 'static', left: '0', top: '0', boxShadow: 'none' },
    fontEmbedCSS: fontCSS,
    cacheBust: false,
    // 아직 그려지지 않은 그림(빈 src)은 건너뜀
    filter: (n) => !(n.tagName === 'IMG' && !n.getAttribute('src')),
    // 불러오지 못한 외부 그림은 투명하게 두고 저장은 계속
    imagePlaceholder: 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
  });
}

function download(url, name) {
  const a = h('a', { href: url, download: name });
  document.body.append(a);
  a.click();
  a.remove();
}

// 파일 이름: [발췌닝]날짜_페어명_로그제목_번호.png (화면 탭 '파일 이름'에서 설정)
// 아무것도 안 정하면 [발췌닝]날짜_카드 제목 (제목이 없으면 [발췌닝]날짜)
const cleanFilePart = (t) => (t || '').replace(/[\\/:*?"<>|\n\r\t]+/g, ' ').replace(/\s+/g, ' ').trim().slice(0, 40).trim();
const titlePart = () => cleanFilePart(state.title);
let fileStamp = '';
const stampNow = () => {
  const d = new Date(), p = (n) => String(n).padStart(2, '0');
  fileStamp = `${d.getFullYear()}${p(d.getMonth() + 1)}${p(d.getDate())}`;
};
stampNow();
function fileParts(i, n) {
  const f = state.file || {};
  const parts = [];
  if (f.date !== false) parts.push(fileStamp);
  const pair = cleanFilePart(f.pair);
  if (pair) parts.push(pair);
  const title = cleanFilePart(f.title) || titlePart();
  if (title) parts.push(title);
  if (i != null && (f.number || n > 1)) parts.push(String(i + 1).padStart(2, '0'));
  const base = '[발췌닝]' + parts.join('_');
  return base || '발췌닝';
}
const fileBase = () => fileParts(null, 1);
const fileName = (i, n = lastImages.length) => `${fileParts(i, n)}.png`;

let busy = false;
/** 카드들을 PNG로 변환 (indices 없으면 전부). 끝나면 미리보기를 원래대로 */
async function makeImages(indices, onProgress) {
  closePop();
  editingKey = null;
  $$('#stage .msg.editing').forEach((m) => m.classList.remove('editing'));
  await document.fonts.ready;
  await htmlBgReady;
  const all = $$('#stage .card');
  const cards = indices ? indices.map((i) => all[i]).filter(Boolean) : all;
  const fontCSS = await buildFontEmbedCSS(cards);
  for (const card of cards) await rasterizeHtmlLayers(card);
  for (const card of cards) {
    card.querySelectorAll('.narr, .bubble, .card-title, .credit').forEach((el) => {
      try { freezeLines(el, currentScale); } catch (e) { /* 원래 상태로 둠 */ }
    });
  }
  try {
    const out = [];
    for (let i = 0; i < cards.length; i++) {
      if (onProgress) onProgress(i, cards.length);
      out.push(await cardToPng(cards[i], fontCSS));
    }
    return out;
  } finally {
    render(); // 줄 고정을 풀고 원래 미리보기로
  }
}

/* ---------- 저장 폴더 (Chrome · Edge 데스크톱) ---------- */
const idb = (() => {
  let dbp;
  const open = () => dbp || (dbp = new Promise((res, rej) => {
    const r = indexedDB.open('ninining', 1);
    r.onupgradeneeded = () => r.result.createObjectStore('kv');
    r.onsuccess = () => res(r.result);
    r.onerror = () => rej(r.error);
  }));
  const tx = async (mode, fn) => {
    const db = await open();
    return new Promise((res, rej) => {
      const t = db.transaction('kv', mode);
      const q = fn(t.objectStore('kv'));
      t.oncomplete = () => res(q && q.result);
      t.onerror = () => rej(t.error);
    });
  };
  return {
    get: (k) => tx('readonly', (st) => st.get(k)).catch(() => undefined),
    set: (k, v) => tx('readwrite', (st) => st.put(v, k)),
    del: (k) => tx('readwrite', (st) => st.delete(k)),
  };
})();

const canPickFolder = typeof window.showDirectoryPicker === 'function' && !isMobile();
let dirHandle = null;

async function folderPermission(handle, ask) {
  const opts = { mode: 'readwrite' };
  try {
    if ((await handle.queryPermission(opts)) === 'granted') return true;
    if (!ask) return false;
    return (await handle.requestPermission(opts)) === 'granted';
  } catch (e) { return false; }
}
async function pickFolder() {
  try {
    const hnd = await window.showDirectoryPicker({ id: 'ninining', mode: 'readwrite', startIn: dirHandle || 'pictures' });
    dirHandle = hnd;
    await idb.set('dir', hnd).catch(() => {});
    updateFolderUI();
    toast(`이제 ‘${hnd.name}’ 폴더에 저장돼요`);
    return true;
  } catch (e) {
    if (e && e.name !== 'AbortError') toast('폴더를 열지 못했어요');
    return false;
  }
}
async function clearFolder() {
  dirHandle = null;
  await idb.del('dir').catch(() => {});
  updateFolderUI();
  toast('저장 폴더 지정을 해제했어요 · 다운로드 폴더로 저장돼요');
}
async function uniqueName(dir, name) {
  const dot = name.lastIndexOf('.');
  const base = name.slice(0, dot), ext = name.slice(dot);
  for (let n = 1; n < 1000; n++) {
    const candidate = n === 1 ? name : `${base} (${n})${ext}`;
    try { await dir.getFileHandle(candidate); } catch (e) { return candidate; }
  }
  return `${base}-${Date.now()}${ext}`;
}
async function saveToFolder(urls) {
  for (let i = 0; i < urls.length; i++) {
    const blob = await (await fetch(urls[i])).blob();
    const fh = await dirHandle.getFileHandle(await uniqueName(dirHandle, fileName(i)), { create: true });
    const w = await fh.createWritable();
    await w.write(blob);
    await w.close();
  }
  return urls.length;
}
function updateFolderUI() {
  const line = $('#folder-line');
  const menuItem = $('[data-act="folder"]');
  if (menuItem) {
    menuItem.hidden = !canPickFolder;
    menuItem.textContent = dirHandle ? `저장 폴더: ${dirHandle.name}` : '저장 폴더 지정…';
  }
  if (!line) return;
  line.hidden = !canPickFolder;
  line.innerHTML = '';
  if (!canPickFolder) return;
  if (dirHandle) {
    line.append(h('span', { class: 'folder-ico', html: icon('folder') }), h('span', {}, '저장 폴더 '), h('b', {}, dirHandle.name),
      h('button', { type: 'button', class: 'link-btn', onclick: pickFolder }, '변경'),
      h('button', { type: 'button', class: 'link-btn muted', onclick: clearFolder }, '해제'));
  } else {
    line.append(h('span', { class: 'folder-ico', html: icon('folder') }), h('span', {}, '다운로드 폴더에 저장돼요'),
      h('button', { type: 'button', class: 'link-btn', onclick: pickFolder }, '원하는 폴더 지정'));
  }
  $('#btn-folder-save').hidden = !canPickFolder;
}

let lastImages = [];
async function exportImages() {
  if (busy) return;
  if (typeof htmlToImage === 'undefined') { toast('이미지 변환 도구를 불러오지 못했어요'); return; }
  const btn = $('#btn-save');
  const label = $('.btn-label', btn);
  const orig = label.textContent;
  busy = true;
  btn.disabled = true;
  // 권한 요청은 클릭 직후에 해야 함
  const toFolder = dirHandle ? await folderPermission(dirHandle, true) : false;
  try {
    label.textContent = '만드는 중…';
    stampNow();
    lastImages = await makeImages(null, (i, n) => { if (n > 1) label.textContent = `${i + 1} / ${n}`; });
    if (toFolder) {
      const n = await saveToFolder(lastImages);
      toast(`‘${dirHandle.name}’ 폴더에 ${n}장 저장했어요`, { label: '미리보기', fn: showResult });
    } else showResult();
  } catch (err) {
    console.error(err);
    toast('이미지를 만들지 못했어요. 다시 시도해 주세요.', null, 3600);
  } finally {
    busy = false;
    btn.disabled = false;
    label.textContent = orig;
  }
}
$('#btn-save').addEventListener('click', exportImages);

/* ---------- 복사 ---------- */
const canCopyImage = !!(navigator.clipboard && window.ClipboardItem);
function copyPage(i) {
  if (!canCopyImage) { toast('이 브라우저는 이미지 복사를 지원하지 않아요'); return; }
  if (busy) return;
  busy = true;
  const total = $$('#stage .card').length;
  const blob = makeImages([i]).then(([u]) => fetch(u)).then((r) => r.blob());
  navigator.clipboard.write([new ClipboardItem({ 'image/png': blob })])
    .then(() => toast(total > 1 ? `${i + 1}번째 장을 복사했어요` : '이미지를 복사했어요 · 붙여넣기 하세요'))
    .catch((e) => { console.error(e); toast('복사하지 못했어요'); })
    .finally(() => { busy = false; });
}
$('#btn-copy').addEventListener('click', () => {
  const n = $$('#stage .card').length;
  if (n <= 1) { copyPage(0); return; }
  openPop(h('div', {},
    h('div', { class: 'pop-title' }, '복사할 장을 고르세요'),
    h('div', { class: 'page-pick' }, Array.from({ length: n }, (_, i) =>
      h('button', { type: 'button', class: 'btn', onclick: () => { closePop(); copyPage(i); } }, `${i + 1}장`)))), $('#btn-copy'));
});

async function imageFiles(urls) {
  return Promise.all(urls.map(async (u, i) => new File([await (await fetch(u)).blob()], fileName(i), { type: 'image/png' })));
}
async function shareImages(urls) {
  try {
    const files = await imageFiles(urls);
    await navigator.share({ files });
  } catch (e) {
    if (e && e.name !== 'AbortError') toast('공유하지 못했어요');
  }
}
const canShareFiles = (() => {
  try { return !!(navigator.canShare && navigator.canShare({ files: [new File([''], 'a.png', { type: 'image/png' })] })); } catch (e) { return false; }
})();

function showResult() {
  const list = $('#result-list');
  list.innerHTML = '';
  const canCopy = !!(navigator.clipboard && window.ClipboardItem);
  lastImages.forEach((url, i) => {
    list.append(h('div', { class: 'result-item' },
      h('img', { src: url, alt: `${i + 1}번째 이미지` }),
      h('div', { class: 'row-btns' },
        h('a', { class: 'btn btn-sm', href: url, download: fileName(i) }, '다운로드'),
        canCopy ? h('button', {
          type: 'button', class: 'btn btn-sm',
          onclick: async () => {
            try {
              const blob = await (await fetch(url)).blob();
              await navigator.clipboard.write([new ClipboardItem({ 'image/png': blob })]);
              toast('클립보드에 복사했어요');
            } catch (err) { toast('복사하지 못했어요'); }
          },
        }, '복사') : null,
        canShareFiles ? h('button', { type: 'button', class: 'btn btn-sm', onclick: () => shareImages([url]) }, '공유') : null)));
  });
  const n = lastImages.length;
  $('#result-title').textContent = n > 1 ? `이미지 ${n}장이 준비됐어요` : '이미지가 준비됐어요';
  $('#result-sub').textContent = `${state.canvas.width * state.canvas.scale}px 너비 PNG · 모바일에서는 이미지를 길게 눌러 저장할 수도 있어요`;
  $('#result-filename').textContent = fileName(0, n);
  $('#btn-dl-all').lastChild.textContent = n > 1 ? '전부 다운로드' : '다운로드';
  updateFolderUI();
  $('#btn-share-all').hidden = !canShareFiles;
  list.classList.toggle('single', n === 1);
  $('#result .modal-box').classList.toggle('narrow', n === 1);
  openModal('#result');
}
$('#btn-dl-all').addEventListener('click', async () => {
  for (let i = 0; i < lastImages.length; i++) {
    download(lastImages[i], fileName(i));
    await new Promise((r) => setTimeout(r, 350));
  }
});
$('#btn-share-all').addEventListener('click', () => shareImages(lastImages));
$('#btn-filename-edit').addEventListener('click', () => {
  closeModals();
  setPane('canvas', true);
  uiState.open = uiState.open || {};
  setTimeout(() => {
    const t = [...$$('[data-fields="canvas"] .section-title')].find((x) => x.textContent === '파일 이름');
    if (t) t.scrollIntoView({ block: 'start', behavior: 'smooth' });
  }, 60);
});
$('#btn-folder-save').addEventListener('click', async () => {
  if (!dirHandle) { if (!(await pickFolder())) return; }
  else if (!(await folderPermission(dirHandle, true))) { toast('폴더 접근이 허용되지 않았어요'); return; }
  try {
    const n = await saveToFolder(lastImages);
    toast(`‘${dirHandle.name}’ 폴더에 ${n}장 저장했어요`);
    closeModals();
  } catch (e) { console.error(e); toast('폴더에 저장하지 못했어요'); }
});

/* 모달 */
function openModal(sel) { $(sel).hidden = false; }
function closeModals() { $$('.modal').forEach((m) => (m.hidden = true)); }
$$('.modal').forEach((m) => {
  m.addEventListener('click', (e) => { if (e.target === m || e.target.closest('[data-close]')) m.hidden = true; });
});

/* =========================================================
   메뉴 · 설정 파일
   ========================================================= */
$('#btn-more').addEventListener('click', () => { $('#menu').hidden = !$('#menu').hidden; });
document.addEventListener('click', (e) => {
  const act = e.target.closest('[data-act]');
  if (!act) return;
  $('#menu').hidden = true;
  const a = act.dataset.act;
  if (a === 'help') openModal('#help');
  else if (a === 'folder') pickFolder();
  else if (a === 'export-json') {
    const blob = new Blob([JSON.stringify(state, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    stampNow();
    download(url, `${fileBase()}_작업.json`);
    setTimeout(() => URL.revokeObjectURL(url), 2000);
  } else if (a === 'reset') {
    buildResetList();
    openModal('#reset');
  }
});

/* 초기화: 필요한 범위만 골라서 (모두 되돌리기 가능) */
const RESETS = [
  { id: 'skin', icon: 'code', title: '스킨만 초기화', desc: 'CSS 스킨과 HTML 배경을 비워요', done: '스킨을 초기화했어요',
    run() { state.skin = ''; state.bgHtml = ''; } },
  { id: 'design', icon: 'type', title: '디자인 초기화', desc: '서체 · 말풍선 · 화면 · 스킨을 기본(미니멀 화이트)으로. 글과 캐릭터는 그대로예요', done: '디자인을 기본으로 되돌렸어요',
    run() {
      for (const k of DESIGN_KEYS) state[k] = copyState(DEFAULTS[k]);
      state.skin = ''; state.bgHtml = '';
      state.overrides = Object.fromEntries(Object.entries(state.overrides).map(([k, v]) => {
        const { shape, side, ...rest } = v;
        return [k, rest];
      }).filter(([, v]) => Object.keys(v).length));
      state.chars.forEach((c) => { c.shape = ''; c.custom = false; c.side = c.homeSide || c.side; });
    } },
  { id: 'chars', icon: 'person', title: '캐릭터 모두 지우기', desc: '등록한 캐릭터와 말풍선마다 바꾼 화자 · 위치 · 모양을 지워요. 글은 그대로예요', done: '캐릭터를 모두 지웠어요',
    run() {
      // 글에 남아 있는 이름이 곧바로 다시 자동 등록되지 않게
      parseText().forEach((b) => { if (b.type === 'bubble' && b.name) autoTried.add(b.name); });
      state.chars = [];
      state.overrides = {};
      state.parse.nameless = 'none';
    } },
  { id: 'text', icon: 'text', title: '글 지우기', desc: '입력한 글과 제목 · 출처 · 제작자를 비워요', done: '글을 비웠어요',
    run() { state.text = ''; state.title = ''; state.credit = ''; state.creator = ''; state.overrides = {}; } },
  { id: 'all', icon: 'refresh', title: '전부 처음부터', desc: '글 · 캐릭터 · 디자인 · 대사 인식 설정까지 모두 처음 상태로', done: '처음 상태로 되돌렸어요', danger: true,
    run() { state = copyState(DEFAULTS); autoTried.clear(); } },
];
function runReset(id) {
  const r = RESETS.find((x) => x.id === id);
  if (!r) return;
  commit();
  r.run();
  commit(); rebuildAll(); save();
  closeModals();
  toast(r.done, { label: '되돌리기', fn: undo }, 3600);
}
function buildResetList() {
  const list = $('#reset-list');
  list.innerHTML = '';
  RESETS.forEach((r) => list.append(h('button', { type: 'button', class: 'reset-item' + (r.danger ? ' danger' : ''), onclick: () => runReset(r.id) },
    h('span', { class: 'ri-ico', html: icon(r.icon) }),
    h('span', { class: 'ri-text' }, h('b', {}, r.title), h('small', {}, r.desc)),
    h('span', { class: 'ri-chev', html: icon('chevron') }))));
}
document.addEventListener('click', (e) => {
  const b = e.target.closest('[data-reset]');
  if (b) runReset(b.dataset.reset);
});
$('#file-import-json').addEventListener('change', async (e) => {
  const f = e.target.files[0];
  e.target.value = '';
  $('#menu').hidden = true;
  if (!f) return;
  try {
    state = deepMerge(copyState(DEFAULTS), JSON.parse(await f.text()));
    commit(); rebuildAll(); save();
    toast('설정을 불러왔어요', { label: '되돌리기', fn: undo });
  } catch (err) { toast('설정 파일을 읽지 못했어요'); }
});

/* =========================================================
   단축키 · 드래그 앤 드롭 · 시작
   ========================================================= */
document.addEventListener('keydown', (e) => {
  const mod = e.metaKey || e.ctrlKey;
  const typing = /^(INPUT|TEXTAREA|SELECT)$/.test(e.target.tagName);
  if (e.key === 'Escape') { closePop(); closeModals(); $('#menu').hidden = true; return; }
  if (!mod) return;
  const k = e.key.toLowerCase();
  if (k === 's') { e.preventDefault(); exportImages(); }
  else if (k === 'z' && !typing) { e.preventDefault(); e.shiftKey ? redo() : undo(); }
  else if (k === 'y' && !typing) { e.preventDefault(); redo(); }
  else if (k === '=' || k === '+') { e.preventDefault(); stepZoom(1); }
  else if (k === '-') { e.preventDefault(); stepZoom(-1); }
  else if (k === '0') { e.preventDefault(); zoom = 'fit'; rescale(); }
});

dropTarget($('#canvas-area'), isImageFile, async (f) => {
  state.canvas.bgType = 'image';
  await setImagePath('canvas.bgImage', f);
  buildFields();
  toast('배경 이미지로 넣었어요', { label: '되돌리기', fn: undo });
});
document.addEventListener('dragover', (e) => e.preventDefault());
document.addEventListener('drop', (e) => e.preventDefault());

$('#btn-undo').innerHTML = icon('undo');
$('#btn-redo').innerHTML = icon('redo');
$('#btn-more').innerHTML = icon('more');
$('.brand-mark').innerHTML = BRAND;
$$('[data-icon]').forEach((el) => (el.innerHTML = icon(el.dataset.icon)));
$$('[data-close]').forEach((el) => (el.innerHTML = icon('close')));
$('#zoom-in').innerHTML = icon('plus');
$('#zoom-out').innerHTML = icon('minus');
$('#zoom-fit').innerHTML = icon('fit');
$('#btn-undo').addEventListener('click', undo);
$('#btn-redo').addEventListener('click', redo);
$('#zoom-in').addEventListener('click', () => stepZoom(1));
$('#zoom-out').addEventListener('click', () => stepZoom(-1));
$('#zoom-label').addEventListener('click', () => { zoom = 'fit'; rescale(); });
$('#zoom-fit').addEventListener('click', () => { zoom = 'fit'; rescale(); });

function rebuildAll() {
  const scroll = $('#panel-scroll').scrollTop;
  buildFmtBar();
  if (src.value !== state.text) src.value = state.text;
  buildFields();
  buildChars();
  buildQuickInsert();
  buildSkin();
  applySkin();
  render();
  $('#panel-scroll').scrollTop = scroll;
}

if (typeof ResizeObserver !== 'undefined') new ResizeObserver(() => requestAnimationFrame(rescale)).observe($('#stage'));
else window.addEventListener('resize', () => requestAnimationFrame(rescale));
if (document.fonts) {
  document.fonts.addEventListener('loadingdone', (e) => {
    if (e.fontfaces && e.fontfaces.length && e.fontfaces.every((f) => f.family.replace(/"/g, '').startsWith('pv-'))) return;
    scheduleRender();
  });
  document.fonts.ready.then(scheduleRender);
}

buildRail();
buildTemplates();
idb.get('styles').then((v) => { myStyles = Array.isArray(v) ? v : []; buildMyStyles(); });
if (canPickFolder) idb.get('dir').then((hnd) => { if (hnd) dirHandle = hnd; updateFolderUI(); }); else updateFolderUI();
setPane('text', false);
if (isMobile()) setSheet(true);
rebuildAll();
resetHistory();
