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
  pen: '<path d="M4 20h4L19 9l-4-4L4 16v4Z"/><path d="m13.5 6.5 4 4"/>',
  search: '<circle cx="11" cy="11" r="6.5"/><path d="m20 20-4.3-4.3"/>',
  rotate: '<path d="M20 11a8 8 0 1 0-2.3 5.7"/><path d="M20 4v7h-7"/>',
  shadow: '<rect x="3.5" y="3.5" width="12" height="12" rx="2"/><path d="M19.5 8v9.5a2 2 0 0 1-2 2H8" stroke-opacity=".45"/>',
  border: '<rect x="3.5" y="3.5" width="17" height="17" rx="2.5"/><rect x="8" y="8" width="8" height="8" rx="1" stroke-opacity=".45"/>',
  crop: '<path d="M6.5 2.5v13a2 2 0 0 0 2 2h13"/><path d="M17.5 21.5v-13a2 2 0 0 0-2-2h-13"/>',
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
const WRAP_ICONS = {
  block: '<rect x="4" y="3" width="40" height="3" rx="1.5" opacity=".45"/><rect x="14" y="9" width="20" height="14" rx="2"/><rect x="4" y="26" width="40" height="3" rx="1.5" opacity=".45"/>',
  float: '<rect x="4" y="4" width="17" height="14" rx="2"/><rect x="25" y="4" width="19" height="3" rx="1.5" opacity=".45"/><rect x="25" y="9.5" width="19" height="3" rx="1.5" opacity=".45"/><rect x="25" y="15" width="19" height="3" rx="1.5" opacity=".45"/><rect x="4" y="21" width="40" height="3" rx="1.5" opacity=".45"/><rect x="4" y="26.5" width="30" height="3" rx="1.5" opacity=".45"/>',
  free: '<rect x="4" y="4" width="40" height="3" rx="1.5" opacity=".3"/><rect x="4" y="10" width="40" height="3" rx="1.5" opacity=".3"/><rect x="4" y="16" width="40" height="3" rx="1.5" opacity=".3"/><rect x="4" y="22" width="30" height="3" rx="1.5" opacity=".3"/><rect x="24" y="8" width="18" height="16" rx="2" transform="rotate(8 33 16)"/><path d="M40 22l4 4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>',
};
const wrapSvg = (k) => `<svg viewBox="0 0 48 32" fill="currentColor" aria-hidden="true">${WRAP_ICONS[k]}</svg>`;
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
  typo: { font: 'Noto Serif KR', fontCustom: '', size: 15, lh: 1.75, ls: -0.01, weight: 400, color: '#2a2826', align: 'left', gap: 10, indentOn: false, indent: 1, indentWhere: 'all', hl: '#ffe58a', hlStyle: 'under',
    wordBreak: 'auto', noOrphan: true, ws: 0, palt: false, kern: true, alignLast: 'auto', measure: 0, dropcap: false, dropLines: 2, annoColor: '#e8506a',
    // 옆 메모: 문장 · 말풍선 · 이미지 · 상자 바로 옆(또는 아래)에 다는 작은 멘트
    note: { pos: 'side', w: 30, scale: 82, color: '#e8506a', mark: 'dot' },
    // 괄호 안 글자: ( ) 안을 본문과 다르게 (크기는 둘레 글자에 대한 비율)
    paren: { on: false, fontOn: false, font: 'Gowun Batang', fontCustom: '', scale: 90, weight: 0, colorOn: false, color: '#8b95a1', italic: false } },
  head: { font: 'Noto Serif KR', fontCustom: '', size: 19, weight: 700, color: '#1d1c1a', align: 'left', creditFont: 'Noto Serif KR', creditFontCustom: '', creditSize: 11.5, creditWeight: 400, creditColor: '#8a857c', creatorFont: 'Noto Serif KR', creatorFontCustom: '', creatorSize: 11.5, creatorWeight: 700, creatorColor: '#6b665e', creditAlign: 'right', creditLayout: 'inline', quoteMark: false, accent: '#c8a46a' },
  bubble: {
    speech: 'round', tail: true, side: 'left',
    font: 'Pretendard', fontCustom: '', size: 14, lh: 1.55, ls: 0, weight: 400,
    bg: '#ffffff', color: '#222222', border: '#2b2a27', bw: 0, radius: 14, px: 12, py: 8, maxw: 78, shadow: true, gap: 12,
    avatar: true, avatarSize: 34, avatarShape: 'circle', showName: true, namePos: 'top', nameW: 0, nameSize: 10.5, nameColor: '#6b665e',
  },
  canvas: { ratio: 'auto', width: 600, pad: 40, bgType: 'solid', bg: '#f7f3ea', bg2: '#e6dcc8', gradType: 'linear', gradAngle: 160, pattern: 'dots', patColor: '#8a7f6a', patOpacity: 0.22, patSize: 18, bgImage: '', overlay: 0, overlayColor: '#000000', valign: 'flex-start', fit: false, paginate: true, pageNum: false, scale: 2 },
  chars: [
    { id: 'c1', name: '닝', avatar: '', side: 'left', shape: '', custom: true, bg: '#f2f4f6', color: '#191f28', border: '#f2f4f6' },
  ],
  overrides: {},
  skin: '',
  bgHtml: '',
  bgRef: '', // 등록된 배경 파일 (코드는 저장하지 않음)
  scene: { show: true, place: '', alive: '', total: '' },
  // 미니홈피 배경: 프레임 · 바탕 색, 방문자 수, 마이룸 사진 · 말풍선, TALK! TALK! 한마디
  hompy: { frame: '#8fd0e6', bg: '#eceff3', today: '', total: '', room: '', say: '', talk: [] },
  // 다이어리 배경: 표지 색, 날짜(비우면 오늘), 날씨, 메모지 제목 · 내용, 키링 글자
  diary: { color: '#ff8a80', date: '', weather: 'sun', memoTitle: 'to do ♡', todo: '✓ 장보기\n✓ 발췌하기\n☐ 헬스장 등록', beads: 'LOVE', keyring: true },
  boxes: {},    // 글 사이에 넣은 HTML 상자: id → { preset, code, head, text, w(%), align }
  images: {},   // 글자처럼 넣은 이미지: id → { src, w(%), align }
  stickers: [], // 자유 배치 이미지: { id, src, x, y, w(px), rot, layer: 'front'|'back', page, op }
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
  mafia: {
    name: '마피아 누아르',
    css: `/* 금빛 이중 테두리 · 담배 연기 같은 비네팅 · 필름 그레인 */
.card-title { letter-spacing: .18em; text-transform: uppercase; }
.card-title::after { content: ""; display: block; width: 48px; height: 1px; margin-top: .55em; background: #c9a35e; }
.name { letter-spacing: .14em; text-transform: uppercase; }
.bubble { border-left-width: 2px; }
.card::before {
  content: ""; position: absolute; inset: 14px; pointer-events: none; z-index: 2;
  border: 1px solid rgba(201, 163, 94, .55);
  outline: 1px solid rgba(201, 163, 94, .25); outline-offset: 5px;
}
.card::after {
  content: ""; position: absolute; inset: 0; pointer-events: none;
  background-image:
    radial-gradient(ellipse at 30% 20%, rgba(255, 240, 210, .06), transparent 45%),
    radial-gradient(ellipse at 50% 50%, transparent 40%, rgba(0, 0, 0, .6) 100%),
    url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.85' numOctaves='2' stitchTiles='stitch'/%3E%3CfeColorMatrix values='0 0 0 0 1 0 0 0 0 .9 0 0 0 0 .8 0 0 0 .1 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
}`,
  },
  pager: {
    name: '삐삐',
    css: `/* 옛날 휴대폰 · 삐삐: 두꺼운 플라스틱 테두리, 회녹색 베젤, 옅은 초록 LCD 화면, 픽셀 그리드 */
.card { border-radius: 30px; }
.card-overlay {
  opacity: 1 !important; background: transparent !important; border-radius: 30px;
  box-shadow: inset 0 0 0 16px #34383d, inset 0 0 0 26px #8e9a93, inset 0 0 0 27px rgba(0, 0, 0, .3), inset 0 6px 22px 27px rgba(30, 50, 25, .2);
}
.card::before {
  content: ""; position: absolute; inset: 27px; pointer-events: none; border-radius: 6px;
  background:
    repeating-linear-gradient(0deg, rgba(40, 60, 35, .05) 0 1px, transparent 1px 3px),
    repeating-linear-gradient(90deg, rgba(40, 60, 35, .04) 0 1px, transparent 1px 3px),
    radial-gradient(ellipse at 30% 20%, rgba(255, 255, 255, .25), transparent 55%);
}
.card::after {
  content: "■■■■□  12:00"; position: absolute; top: 36px; right: 42px;
  font: 700 10px/1 ui-monospace, Menlo, monospace; letter-spacing: .12em; color: rgba(38, 56, 34, .7);
}
.card-title { letter-spacing: .08em; }
.name { letter-spacing: .06em; }
.bubble { letter-spacing: .02em; }`,
  },
  igdm: {
    name: '인스타 DM',
    css: `/* 보낸 메시지는 보라 → 파랑 그라데이션 알약 말풍선 */
.msg-right .bubble { background: linear-gradient(135deg, #8a3ffc 0%, #5b5cf6 45%, #3797f0 100%); border-color: transparent; color: #fff; }
.name { font-weight: 600; letter-spacing: .01em; }`,
  },
  wedding: {
    name: '웨딩',
    css: `/* 청첩장: 금빛 이중 선 테두리, 가운데 정렬 제목과 장식 */
.card::before {
  content: ""; position: absolute; inset: 18px; pointer-events: none; z-index: 2;
  border: 1px solid rgba(176, 141, 87, .55);
  outline: 1px solid rgba(176, 141, 87, .3); outline-offset: 5px;
}
.card-title { letter-spacing: .28em; font-weight: 500; text-align: center; padding-left: .28em; }
.card-footer .credit { text-align: center; }
.card-title::before, .card-title::after {
  content: ""; display: block; width: 44px; height: 1px; margin: 0 auto; background: #b08d57;
}
.card-title::before { margin-bottom: .75em; }
.card-title::after { margin-top: .7em; }
.name { letter-spacing: .16em; font-weight: 500; }
.bubble { letter-spacing: .01em; }
.credit { letter-spacing: .12em; }`,
  },
  agent: {
    name: '블랙 에이전트',
    css: `/* 흑백 정장 무드: 위아래 가는 흰 선, 빛이 번쩍이는 하이라이트 */
.card-title { letter-spacing: .32em; text-transform: uppercase; font-weight: 800; }
.name { letter-spacing: .22em; text-transform: uppercase; font-size: calc(var(--name-size) * .92); }
.card::after {
  content: ""; position: absolute; inset: 0; pointer-events: none;
  background:
    linear-gradient(rgba(255,255,255,.85), rgba(255,255,255,.85)) top 10px left 22px / calc(100% - 44px) 1px no-repeat,
    linear-gradient(rgba(255,255,255,.85), rgba(255,255,255,.85)) bottom 10px left 22px / calc(100% - 44px) 1px no-repeat,
    radial-gradient(circle at 88% 8%, rgba(255,255,255,.22), transparent 28%),
    linear-gradient(115deg, transparent 45%, rgba(255,255,255,.035) 50%, transparent 55%);
}
.bubble { letter-spacing: .01em; }`,
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
    id: 'clean', hidden: true, name: '미니멀 화이트', sub: '흰 배경 · 회색/파랑 말풍선', pv: { bg: '#ffffff', fg: '#191f28', b1: '#f2f4f6', b2: '#3182f6' },
    set: { typo: { font: 'Pretendard', color: '#191f28', lh: 1.8, ls: -0.02 }, head: { font: 'Pretendard', color: '#191f28', creditColor: '#8b95a1' }, bubble: { speech: 'messenger', bg: '#f2f4f6', color: '#191f28', shadow: false, nameColor: '#8b95a1' }, canvas: { bg: '#ffffff' } },
    chars: [['#f2f4f6', '#191f28', '#f2f4f6'], ['#3182f6', '#ffffff', '#3182f6']],
  },
  {
    id: 'night', name: '다크 노블', sub: '어두운 배경', pv: { bg: '#17171c', fg: '#e8e4dc', b1: '#2c2c36', b2: '#e8e4dc' },
    set: { typo: { color: '#e8e4dc' }, head: { color: '#ffffff', creditColor: '#8b8b99' }, bubble: { bg: '#26262f', color: '#f2f2f2', border: '#3a3a46', shadow: false, nameColor: '#a3a3b5' }, canvas: { bg: '#17171c' } },
    chars: [['#2c2c36', '#f2f2f2', '#5c5c70'], ['#e8e4dc', '#17171c', '#e8e4dc']],
  },
  {
    id: 'messenger', name: '카카오톡', sub: '하늘색 배경 · 노란 말풍선', pv: { bg: '#bacee0', fg: '#4a5a6a', b1: '#ffffff', b2: '#fee500' },
    set: { typo: { font: 'Pretendard', size: 12, color: '#4a5a6a', align: 'center', lh: 1.6 }, head: { font: 'Pretendard', size: 20, color: '#2c3a48', creditColor: '#5a6b7c' }, bubble: { speech: 'messenger', radius: 14, shadow: false, nameColor: '#4a5a6a', gap: 12 }, canvas: { bg: '#bacee0' } },
    chars: [['#ffffff', '#222222', '#ffffff'], ['#fee500', '#222222', '#fee500']],
  },
  {
    id: 'book', name: '단정한 페이지', sub: '미색 종이 · 글처럼 이어지는 대사', pv: { bg: '#fbfaf6', fg: '#2a2826', book: true },
    set: { typo: { font: 'Gowun Batang', size: 13.5, lh: 1.8, ls: -0.01, align: 'justify', indentOn: true, indent: 1, gap: 0, color: '#262422' }, head: { font: 'Gowun Batang', size: 16, align: 'center', color: '#262422', creditColor: '#8f8a80', creditAlign: 'center', creditSize: 11.5 }, bubble: { speech: 'plain', font: 'Gowun Batang', size: 13.5, lh: 1.8, avatar: false, showName: false, gap: 0 }, canvas: { bg: '#fbfaf6', ratio: '2:3', pad: 52, valign: 'flex-start', pageNum: true } },
    parse: { strip: false }, chars: null, charSide: 'left',
  },
  {
    id: 'quote', name: '인용 카드', sub: '베이지 · 큰 따옴표 장식', pv: { bg: '#f4efe6', fg: '#3a3229', q: '#b08d57', center: true },
    set: { typo: { font: 'Song Myung', size: 21, lh: 1.85, align: 'center', color: '#3a3229' }, head: { font: 'Song Myung', size: 20, align: 'center', color: '#3a3229', creditColor: '#9a8b76', creditAlign: 'center', quoteMark: true, accent: '#b08d57' }, bubble: { speech: 'plain', font: 'Song Myung', size: 19, avatar: false, showName: false, side: 'center' }, canvas: { bg: '#f4efe6', ratio: '1:1', pad: 64, fit: true, valign: 'center' } },
    chars: null, charSide: 'center',
  },
  {
    id: 'line', name: '라인', sub: '하늘색 · 초록 말풍선 · 프로필', pv: { bg: '#8fabd4', fg: '#3a4a5e', b1: '#ffffff', b2: '#a6e877', center: false },
    set: { typo: { font: 'Pretendard', size: 12, color: '#33475e', align: 'center', lh: 1.6 }, head: { font: 'Pretendard', size: 17, color: '#1f2d3d', creditColor: '#3f5571', creditAlign: 'center' }, bubble: { speech: 'round', font: 'Pretendard', size: 13.5, radius: 18, px: 13, py: 8, shadow: false, tail: true, gap: 10, avatar: true, avatarSize: 36, nameSize: 11, nameColor: '#33475e' }, canvas: { bg: '#8fabd4' } },
    chars: [['#ffffff', '#1d1d1d', '#ffffff'], ['#a6e877', '#1d2a10', '#a6e877']],
  },
  {
    id: 'chungking', name: '중경삼림 무드', sub: '네온 · 필름 그레인 · 노란 자막', pv: { bg: 'linear-gradient(160deg,#103129,#1b1f1a 55%,#3d1a17)', fg: '#e9dcc0', film: true, subtitle: '#ffd84a' },
    set: { typo: { font: 'Noto Serif KR', size: 13.5, color: '#e6dcc4', lh: 1.8, ls: 0.01 }, head: { font: 'Noto Serif KR', size: 19, weight: 700, color: '#ff5a4e', creditColor: '#7fd1b9', creatorColor: '#7fd1b9', align: 'left' }, bubble: { speech: 'plain', font: 'Noto Sans KR', size: 14, weight: 500, color: '#ffd84a', side: 'center', avatar: false, nameColor: '#ff8a7a', nameSize: 10.5, gap: 14 }, canvas: { bgType: 'gradient', bg: '#103129', bg2: '#3d1a17', gradAngle: 160, pad: 52 } },
    skin: SKINS.chungking.css, chars: [['#1b1f1a', '#ffd84a', '#1b1f1a'], ['#1b1f1a', '#9ff0d6', '#1b1f1a']], charSide: 'center',
  },
  {
    id: 'mafia', name: '마피아 누아르', sub: '검정 · 금빛 테두리 · 와인색 말풍선', pv: { bg: 'radial-gradient(ellipse at 30% 20%,#2a2420,#0d0b0a 70%)', fg: '#d9cdb6', b1: '#1f1b18', b2: '#5a1a1f', outline: '#c9a35e' },
    set: { typo: { color: '#d9cdb6' }, head: { color: '#e8d5a8', creditColor: '#8f7a55', creatorColor: '#c9a35e', accent: '#c9a35e' }, bubble: { speech: 'square', bg: '#1f1b18', color: '#efe6d4', border: '#c9a35e', bw: 1, radius: 2, shadow: false, nameColor: '#c9a35e' }, canvas: { bgType: 'gradient', gradType: 'radial', bg: '#2a2420', bg2: '#0b0a09' } },
    skin: SKINS.mafia.css, chars: [['#1f1b18', '#efe6d4', '#c9a35e'], ['#5a1a1f', '#f5e6dc', '#8a2a30']],
  },
  {
    id: 'agent', name: '블랙 에이전트', sub: '흑백 정장 · 가는 흰 선 · 플래시', pv: { bg: 'linear-gradient(115deg,#050505,#1a1a1a 55%,#050505)', fg: '#e8e8e8', b1: '#ffffff', b2: '#000000', outline: '#ffffff' },
    set: { typo: { color: '#d7d7d7' }, head: { color: '#ffffff', creditColor: '#8a8a8a', creatorColor: '#ffffff', accent: '#ffffff' }, bubble: { speech: 'square', bg: '#ffffff', color: '#0a0a0a', border: '#ffffff', bw: 1, radius: 0, shadow: false, nameColor: '#bdbdbd' }, canvas: { bgType: 'gradient', gradType: 'linear', gradAngle: 160, bg: '#141414', bg2: '#020202' } },
    skin: SKINS.agent.css, chars: [['#ffffff', '#0a0a0a', '#ffffff'], ['#000000', '#ffffff', '#ffffff']],
  },
  {
    id: 'imessage', name: '아이메시지', sub: '흰 배경 · 회색 / 파랑 말풍선', pv: { bg: '#ffffff', fg: '#1c1c1e', b1: '#e9e9eb', b2: '#0a84ff' },
    set: { typo: { color: '#1c1c1e' }, head: { color: '#1c1c1e', creditColor: '#8e8e93', creatorColor: '#1c1c1e' }, bubble: { speech: 'round', radius: 18, bg: '#e9e9eb', color: '#000000', border: '#e9e9eb', bw: 0, shadow: false, tail: true, nameColor: '#8e8e93' }, canvas: { bg: '#ffffff' } },
    chars: [['#e9e9eb', '#000000', '#e9e9eb'], ['#0a84ff', '#ffffff', '#0a84ff']],
  },
  {
    id: 'igdm', name: '인스타 DM', sub: '흰 배경 · 그라데이션 말풍선', pv: { bg: '#ffffff', fg: '#262626', b1: '#efefef', b2: 'linear-gradient(135deg,#8a3ffc,#3797f0)' },
    set: { typo: { color: '#262626' }, head: { color: '#262626', creditColor: '#8e8e8e', creatorColor: '#262626' }, bubble: { speech: 'pill', bg: '#efefef', color: '#262626', border: '#efefef', bw: 0, shadow: false, tail: false, nameColor: '#8e8e8e' }, canvas: { bg: '#ffffff' } },
    skin: SKINS.igdm.css, chars: [['#efefef', '#262626', '#efefef'], ['#5b5cf6', '#ffffff', '#5b5cf6']],
  },
  {
    id: 'wedding', name: '웨딩', sub: '아이보리 · 금빛 선 · 청첩장', pv: { bg: '#fbf8f2', fg: '#6b5a44', b1: '#ffffff', b2: '#f4ece0', outline: '#cdb68f', frame: true },
    set: { typo: { color: '#5e5040' }, head: { color: '#6b5232', creditColor: '#a8957a', creatorColor: '#8a6d45', align: 'center', creditAlign: 'center', accent: '#b08d57' }, bubble: { speech: 'square', radius: 2, bg: '#ffffff', color: '#4f4436', border: '#d9c7a6', bw: 1, shadow: false, nameColor: '#a0875f' }, canvas: { bg: '#fbf8f2' } },
    skin: SKINS.wedding.css, chars: [['#ffffff', '#4f4436', '#d9c7a6'], ['#f4ece0', '#4f4436', '#d9c7a6']],
  },
  {
    id: 'pager', name: '삐삐', sub: '옛날 휴대폰 프레임 · 옅은 초록 화면', pv: { bg: '#c9d8b3', fg: '#2f3f2a', b1: '#dfe9cc', b2: '#b3c69a', outline: '#4a5a40', frame: true },
    set: { typo: { color: '#2b3a27' }, head: { color: '#22301f', creditColor: '#4f6147', creatorColor: '#2b3a27' }, bubble: { speech: 'square', radius: 3, bg: '#dbe6c7', color: '#22301f', border: '#53664a', bw: 1.5, shadow: false, nameColor: '#3e5137' }, canvas: { bg: '#c9d8b3', pad: 64 } },
    skin: SKINS.pager.css, chars: [['#dbe6c7', '#22301f', '#53664a'], ['#b5c99a', '#22301f', '#53664a']],
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
// 글자색: [[#e8506a|글자]] (안쪽 서식은 그대로)
const TC_RE = /\[\[(#[0-9a-fA-F]{3,8})\|([\s\S]+?)\]\]/g;
// 교정 메모: [[@메모|글자]] (안쪽 글자에 글자색이 있어도 됨)
const ANNO_RE = /\[\[@([^|\]\n]+)\|((?:\[\[#[0-9a-fA-F]{3,8}\|[\s\S]+?\]\]|[\s\S])+?)\]\]/g;
function fmt(s) {
  return esc(s)
    .replace(ANNO_RE, '<span class="anno">$2<span class="anno-n" aria-hidden="true">$1</span></span>')
    .replace(TC_RE, '<span class="tc" style="color:$1">$2</span>')
    .replace(/\*\*(.+?)\*\*/g, '<b>$1</b>')
    .replace(/__(.+?)__/g, '<u>$1</u>')
    .replace(/~~(.+?)~~/g, '<s>$1</s>')
    .replace(/==(.+?)==/g, '<mark>$1</mark>')
    .replace(/!\[[^\]]*\]\(img:([\w-]+)\)/g, (m, id) => (state.images[id] ? `<img class="tok-img" src="${state.images[id].src}" alt="">` : ''))
    .replace(/(^|[^*])\*([^*\s][^*]*?)\*(?!\*)/g, '$1<i>$2</i>');
}

/* 마지막 두 어절을 한 덩어리로 묶어 마지막 줄에 단어(또는 음절) 하나만 남는 것을 막음 */
function fmtNoOrphan(text, justify) {
  // 양쪽 정렬(음절 단위 줄바꿈)에서는 마지막 어절만, 그 외에는 마지막 두 어절을 묶음
  const m = justify ? text.match(/^([\s\S]*?\s)(\S{1,8})\s*$/) : text.match(/^([\s\S]*?)(\S+\s+\S{1,8})\s*$/);
  if (!m || m[1].length < 12) return fmt(text);
  const odd = (str, mk) => (str.split(mk).length - 1) % 2 === 1;
  if (['**', '__', '~~', '==', '*'].some((mk) => m[2].includes(mk) || odd(m[1], mk)) || /\[\[|\]\]/.test(m[2]) || (m[1].split('[[').length !== m[1].split(']]').length)) return fmt(text.replace(/\s+(\S{1,8})\s*$/, '\u00a0$1'));
  return fmt(m[1]) + '<span class="nobr">' + fmt(m[2]) + '</span>';
}

/* 괄호 안 글자를 <span class="paren">으로 감쌈.
   서식 태그(굵게 · 줄바꿈 방지 묶음 등)를 넘나드는 괄호도 되도록, 태그 사이 글자 조각마다 따로 감쌈 */
function wrapParens(html) {
  const P = state.typo.paren;
  if (!P || !P.on || !/[(（]/.test(html)) return html;
  const parts = html.split(/(<[^>]+>)/);
  // 1) 태그를 뺀 글자만 이어 붙인 위치로 괄호 구간 찾기 (짝이 맞는 가장 바깥 괄호)
  const ranges = [];
  let pos = 0, open = -1, depth = 0;
  parts.forEach((part, i) => {
    if (i % 2) return;
    for (let j = 0; j < part.length; j++, pos++) {
      const c = part[j];
      if (c === '(' || c === '（') { if (!depth) open = pos; depth++; }
      else if ((c === ')' || c === '）') && depth) { depth--; if (!depth) ranges.push([open, pos + 1]); }
    }
  });
  if (!ranges.length) return html;
  // 2) 글자 조각마다 구간에 걸친 부분만 감쌈
  pos = 0;
  return parts.map((part, i) => {
    if (i % 2) return part;
    const a = pos, b = pos + part.length;
    pos = b;
    let out = '', at = 0;
    for (const [s0, e0] of ranges) {
      const s1 = Math.max(s0, a), e1 = Math.min(e0, b);
      if (s1 >= e1) continue;
      out += part.slice(at, s1 - a) + '<span class="paren">' + part.slice(s1 - a, e1 - a) + '</span>';
      at = e1 - a;
    }
    return out + part.slice(at);
  }).join('');
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
  // 이전 버전: 등록된 배경 코드가 그대로 저장돼 있으면 이름(파일)으로 바꿈
  if (st.bgHtml && !st.bgRef) {
    const sig = [['bg/witch.html', '언덕 위의 마녀'], ['bg/demon.html', '언덕 위의 마왕'], ['bg/survival.html', 'BROADCAST']];
    for (const [file, mark] of sig) {
      if (st.bgHtml.includes(mark) && /ninining-safe/.test(st.bgHtml)) { st.bgRef = file; st.bgHtml = ''; break; }
    }
  }
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
  if (st.canvas.pattern === 'flower') st.canvas.pattern = 'dots';
  // 이전 버전의 빈 줄 처리 → 엔터 친 만큼 여백
  // 빈 줄 기본값을 '한 줄은 문단 나눔만'으로 (한 번만 옮김, 이후 사용자가 고른 값은 유지)
  if (raw && raw.parse && !raw.parse.blankV3) { st.parse.blank = 'para1'; st.parse.blankV3 = true; }
  if (!st.file) st.file = copyState(DEFAULTS.file);
  // 이전 버전: 문단 구분 택1(간격/들여쓰기) → 들여쓰기 켜기 + 문단 간격 따로
  if (st.typo && 'paraMode' in st.typo) {
    if (st.typo.paraMode === 'indent') { st.typo.indentOn = true; st.typo.indentWhere = 'cont'; st.typo.gap = 0; }
    delete st.typo.paraMode;
  }
  // 코르크보드 배경은 없어짐
  if (st.bgRef === 'bg/cork.html') st.bgRef = '';
  delete st.cork;
  // 미니홈피 예전 예시 한마디 → 새 예시로
  if (st.hompy && (st.hompy.talk || []).map((t) => t.text).join('|').startsWith('일촌 신청 받아 주세요 ♡|다이어리 잘 보고 가요~|오늘도 들렀다 갑니다 ^^*')) {
    st.hompy.talk = [{ name: '닐', text: '뭐하냐' }, { name: '린', text: '로그 좀 올려' }, { name: '익명', text: '잘 구경했다...ㅋㅋ' }];
  }
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

/* ── 자동 저장: 글 · 설정은 localStorage, 사진은 IndexedDB에 따로 (localStorage 5MB 한도를 사진이 채우지 않게)
   - 설정 안의 사진 자리에는 'nnimg:<키>'만 남기고, 불러올 때 다시 사진으로 바꿔 넣음 ── */
const IMG_REF = 'nnimg:';
const imgKeyOf = new Map();      // 사진 dataURL → 저장 키 (한 번 계산한 키는 다시 계산하지 않음)
const imgStored = new Set();     // IndexedDB에 이미 들어 있는 키
let imagesRestored = false;      // 시작할 때 사진을 다 불러오기 전에는 지우기(정리)를 하지 않음
const isBigImage = (v) => typeof v === 'string' && v.length > 2048 && v.startsWith('data:image/');
function imgKey(v) {
  let k = imgKeyOf.get(v);
  if (k) return k;
  let h1 = 0x811c9dc5, h2 = 0x1b873593;
  // 긴 문자열은 앞 · 뒤 · 띄엄띄엄 뽑은 글자로 지문을 만듦 (길이도 함께 넣어 충돌 방지)
  const step = Math.max(1, Math.floor(v.length / 60000));
  for (let i = 0; i < v.length; i += (i < 4096 || i > v.length - 4096) ? 1 : step) {
    const c = v.charCodeAt(i);
    h1 = Math.imul(h1 ^ c, 16777619);
    h2 = Math.imul(h2 ^ c, 2246822507) ^ (h2 >>> 13);
  }
  k = `${(h1 >>> 0).toString(36)}${(h2 >>> 0).toString(36)}${v.length.toString(36)}`;
  imgKeyOf.set(v, k);
  return k;
}
let saveTimer;
let warnedQuota = false;
let saving = Promise.resolve();
function save() {
  clearTimeout(saveTimer);
  saveTimer = setTimeout(() => { saving = saving.then(saveNow, saveNow); }, 300);
}
async function saveNow() {
  const fresh = new Map(), used = new Set();
  let json = JSON.stringify(state, (k, v) => {
    if (isBigImage(v)) { const key = imgKey(v); used.add(key); if (!imgStored.has(key)) fresh.set(key, v); return IMG_REF + key; }
    if (typeof v === 'string' && v.startsWith(IMG_REF)) used.add(v.slice(IMG_REF.length));
    return v;
  });
  try {
    for (const [key, v] of fresh) { await idb.set('img:' + key, v); imgStored.add(key); }
  } catch (e) {
    json = JSON.stringify(state); // 사진 저장소를 못 쓰는 브라우저(사생활 보호 모드 등)는 예전처럼 한 곳에
  }
  try {
    localStorage.setItem(STORE_KEY, json);
    warnedQuota = false;
  } catch (e) {
    if (!warnedQuota) {
      warnedQuota = true;
      toast('저장 공간이 꽉 차서 자동 저장이 안 됐어요. 메뉴에서 설정 파일로 내보내 두세요.', null, 4600);
    }
    return;
  }
  // 이제 어디에도 쓰이지 않는 사진은 정리
  if (imagesRestored) {
    for (const key of [...imgStored]) if (!used.has(key)) { imgStored.delete(key); idb.del('img:' + key).catch(() => {}); }
  }
}
/** 시작할 때: 설정 안의 'nnimg:' 자리를 사진으로 되돌림. 바꾼 개수를 돌려줌 */
async function restoreImages() {
  let n = 0;
  try {
    for (const k of await idb.keys()) if (String(k).startsWith('img:')) imgStored.add(String(k).slice(4));
    const refs = new Set();
    const walk = (o) => {
      if (!o || typeof o !== 'object') return;
      for (const k of Object.keys(o)) {
        const v = o[k];
        if (typeof v === 'string' && v.startsWith(IMG_REF)) refs.add(v.slice(IMG_REF.length));
        else if (v && typeof v === 'object') walk(v);
      }
    };
    walk(state);
    if (refs.size) {
      const data = new Map();
      await Promise.all([...refs].map(async (key) => { const v = await idb.get('img:' + key); if (v) { data.set(key, v); imgKeyOf.set(v, key); } }));
      const fill = (o) => {
        if (!o || typeof o !== 'object') return;
        for (const k of Object.keys(o)) {
          const v = o[k];
          if (typeof v === 'string' && v.startsWith(IMG_REF)) { o[k] = data.get(v.slice(IMG_REF.length)) || ''; n++; }
          else if (v && typeof v === 'object') fill(v);
        }
      };
      fill(state);
    }
  } catch (e) { /* 사진 저장소를 못 쓰면 그대로 */ }
  imagesRestored = true;
  return n;
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
  const P = state.typo.paren;
  if (P && P.on && P.fontOn) ensureFont(fontName(P.font, P.fontCustom));
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
  // 줄 전체가 글자색 표시 [[#색|…]] 인 경우는 [ ] 대사 형식으로 보지 않음
  if (/^\[\[#[0-9a-fA-F]{3,8}\|[\s\S]*\]\]$/.test(s)) {
    const inner = s.replace(/^\[\[#[0-9a-fA-F]{3,8}\|([\s\S]*)\]\]$/, '$1');
    const wi = wrapped(inner, rules.pairs);
    return wi ? { inner: s.replace(inner, wi.inner) } : null;
  }
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

function splitSpeaker(line0) {
  // 글자색 표시 [[#색|…]] 안의 | 는 '이름 | 대사' 구분 기호로 보지 않음
  const line = line0.replace(/\[\[(?:#[0-9a-fA-F]{3,8}|@[^|\]\n]+)\|/g, (x) => x.replace('|', '\u0001'));
  const r = splitSpeakerRaw(line);
  if (!r) return null;
  const back = (t) => t.replace(/\u0001/g, '|');
  return { ...r, name: back(r.name), rest: back(r.rest) };
}
function splitSpeakerRaw(line) {
  let m = line.startsWith('[[') ? null : line.match(/^\[([^\]]{1,24})\]\s*(.+)$/);
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
    if (/^>>/.test(line)) {
      const nt = line.replace(/^>>\s?/, '');
      for (let k = out.length - 1; k >= 0; k--) {
        if (out[k].type === 'gap') continue;
        if (nt) out[k].note = out[k].note ? `${out[k].note}\n${nt}` : nt;
        break;
      }
      continue;
    }
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
    const bxm = line.match(/^!\[[^\]]*\]\(box:([\w-]+)\)$/);
    if (bxm) { if (state.boxes && state.boxes[bxm[1]]) out.push({ type: 'box', id: bxm[1] }); continue; }
    const im = line.match(/^!\[([^\]]*)\]\(img:([\w-]+)\)$/);
    if (im) { if (state.images[im[2]]) out.push({ type: 'img', id: im[2], alt: im[1] }); continue; }

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
  --anno: ${t.annoColor || '#e8506a'};
  --note-w: ${(t.note && t.note.w) || 30}%;
  --note-scale: ${((t.note && t.note.scale) || 80) / 100};
  --note-color: ${(t.note && t.note.color) || '#8b95a1'};
  --hl-stop: ${{ full: '0%', under: '55%', thin: '78%' }[t.hlStyle] || '55%'};
  --text-font: ${fontStack(t.font, t.fontCustom)};
  --text-size: ${fit(t.size)};
  --text-lh: ${t.lh};
  --text-ls: ${t.ls}em;
  --text-weight: ${t.weight};
  --text-color: ${t.color};
  --text-align: ${t.align};
  --text-break: ${t.wordBreak === 'char' ? 'break-all' : t.wordBreak === 'word' ? 'keep-all' : t.align === 'justify' ? 'normal' : 'keep-all'};
  --b-break: ${t.wordBreak === 'char' ? 'break-all' : 'keep-all'};
  --text-ws: ${t.ws || 0}em;
  --text-feat: ${t.palt ? '"palt" 1' : 'normal'};
  --text-kern: ${t.kern === false ? 'none' : 'normal'};
  --text-align-last: ${t.align === 'justify' ? (t.alignLast || 'auto') : 'auto'};
  --text-measure: ${t.measure > 0 ? `calc(${t.measure} * var(--text-size))` : 'none'};
  --text-measure-mx: ${t.measure > 0 && t.align === 'center' ? 'auto' : '0'};
  --drop-lines: ${t.dropLines || 2};
  --para-gap: ${fit(t.gap)};
  --indent: ${t.indentOn ? t.indent : 0}em;
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
  --name-w: ${b.nameW > 0 ? `${fit(b.nameW)}` : 'auto'};
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
  // 서체 · 조판 탭에서 고른 값이 스킨 · 템플릿 CSS보다 우선하도록 (스킨 칸의 .narr · .bubble 규칙보다 구체적인 선택자)
  css += `
html body .card .narr:not(.placeholder) { font-family: var(--text-font); font-size: var(--text-size); line-height: var(--text-lh); letter-spacing: var(--text-ls); font-weight: var(--text-weight); text-align: var(--text-align); word-break: var(--text-break, keep-all); word-spacing: var(--text-ws, 0); }
html body .card .bubble { font-family: var(--b-font); font-size: var(--b-size); line-height: var(--b-lh); letter-spacing: var(--b-ls); font-weight: var(--b-weight); }
html body .card .name { font-size: var(--name-size); }`;
  const P = t.paren;
  if (P && P.on) {
    css += `\nhtml body .card .narr .paren, html body .card .bubble .paren { font-size: ${(P.scale || 100) / 100}em;`
      + (P.fontOn ? ` font-family: ${fontStack(P.font, P.fontCustom)};` : '')
      + (+P.weight ? ` font-weight: ${+P.weight};` : '')
      + (P.colorOn ? ` color: ${P.color};` : '')
      + (P.italic ? ' font-style: italic;' : '') + ' }'
      // '번역만' 보기에서는 번역이 본문이라 크기는 줄이지 않음
      + '\nhtml body .card .bubble .paren.paren-main { font-size: 1em; }';
  }
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
// 배경에 쓰는 외부 파일(웹폰트 · 그림 · CSS)은 한 번 받은 것을 다시 받지 않음
const inlineCache = new Map();
const textCache = new Map();
function fetchText(url) {
  if (!textCache.has(url)) textCache.set(url, fetch(url).then((r) => (r.ok ? r.text() : '')).catch(() => ''));
  return textCache.get(url);
}
async function inlineUrl(u, base) {
  if (!u || /^(data:|#)/i.test(u)) return u;
  let abs;
  try { abs = new URL(u, base || location.href).href; } catch (e) { return u; }
  if (!inlineCache.has(abs)) {
    inlineCache.set(abs, fetch(abs).then((r) => (r.ok ? r.blob().then(blobToDataURL) : null)).catch(() => null));
  }
  return (await inlineCache.get(abs)) || u;
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
      inner = await fetchText(new URL(m[1], location.href).href);
      if (inner) {
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

/* 배경 문서 준비(웹폰트 · 그림을 안에 넣는 무거운 일)는 코드 · 글자가 같으면 한 번만.
   카드 크기 · 층(아래/위)만 다를 때는 준비된 문서에 크기만 끼워 넣어 바로 그림 */
const htmlPrep = new Map();
function prepareHtmlBg(html) {
  if (!htmlPrep.has(html)) {
    if (htmlPrep.size > 12) htmlPrep.clear();
    htmlPrep.set(html, buildHtmlBgDoc(html).catch((e) => { htmlPrep.delete(html); throw e; }));
  }
  return htmlPrep.get(html);
}
async function buildHtmlBgDoc(html) {
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
  baseStyle.textContent = 'NNBASEMARK';
  doc.head.insertBefore(baseStyle, doc.head.firstChild);
  const layerStyle = doc.createElement('style');
  layerStyle.textContent = 'NNLAYERMARK';
  doc.head.appendChild(layerStyle);
  return encodeURIComponent(new XMLSerializer().serializeToString(doc.documentElement));
}
/* raster: 저장용으로 '그림 크기 = 저장 픽셀 크기'인 SVG를 만듦.
   (사파리는 SVG 그림을 캔버스에 키워 그리지 않아서, 처음부터 그 크기로 그린 그림을 그대로 옮겨야 함) */
async function buildHtmlBgURL(html, w, h, layer, raster) {
  const enc = await prepareHtmlBg(html);
  const zoomCss = raster ? `html{transform:scale(${raster});transform-origin:0 0;}` : '';
  const baseCss = `html,body{margin:0;padding:0;width:${w}px;height:${h}px;overflow:hidden;}body{position:relative;font-family:"Pretendard",sans-serif;}*{box-sizing:border-box;}${zoomCss}`;
  const layerCss = layer === 'top'
    // 위층: data-layer="top" 요소만 보이게. 숨긴 요소의 SVG 필터(질감 등)가 새어 나오지 않도록 필터 · 혼합도 끔
    ? 'html,body{background:transparent !important;}body *{visibility:hidden !important;}'
      + 'body *:not([data-layer="top"], [data-layer="top"] *){filter:none !important;mix-blend-mode:normal !important;}'
      + 'body svg:not([data-layer="top"] svg) rect[filter]{display:none !important;}'
      + '[data-layer="top"],[data-layer="top"] *{visibility:visible !important;}'
    : '[data-layer="top"]{visibility:hidden !important;}';
  // 그림 자체 해상도를 저장 배율만큼 키워서 흐릿해지지 않게 (내용 배치는 카드 크기 그대로)
  const k = Math.max(2, Math.min(4, Math.ceil(Math.max(state.canvas.scale, window.devicePixelRatio || 1))));
  const head = raster
    ? `<svg xmlns="http://www.w3.org/2000/svg" width="${Math.round(w * raster)}" height="${Math.round(h * raster)}"><foreignObject x="0" y="0" width="${Math.round(w * raster)}" height="${Math.round(h * raster)}">`
    : `<svg xmlns="http://www.w3.org/2000/svg" width="${w * k}" height="${h * k}" viewBox="0 0 ${w} ${h}"><foreignObject x="0" y="0" width="${w}" height="${h}">`;
  const url = 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(head)
    + enc.replace('NNBASEMARK', encodeURIComponent(baseCss)).replace('NNLAYERMARK', encodeURIComponent(layerCss))
    + encodeURIComponent('</foreignObject></svg>');
  await new Promise((res, rej) => { const im = new Image(); im.onload = res; im.onerror = () => rej(new Error('draw')); im.src = url; });
  return url;
}
/* HTML 배경 안의 {{제목}} · {{출처}} · {{제작자}} (또는 '제목을 입력하세요')를 발췌기 입력과 연동 */
const TITLE_TOKEN = /\{\{\s*(제목|title)\s*\}\}|제목을 입력하세요/gi;
/* 등록된 배경(프리셋)은 코드 대신 이름만 저장 · 표시하고, 코드는 필요할 때 불러와 메모리에만 둠 */
const bgCodeCache = {};
function bgCode() {
  if (state.bgRef) return bgCodeCache[state.bgRef] || '';
  return state.bgHtml || '';
}
async function loadBgRef(file) {
  if (!bgCodeCache[file]) bgCodeCache[file] = await (await fetch(file)).text();
  return bgCodeCache[file];
}
const bgHasTitle = () => { TITLE_TOKEN.lastIndex = 0; return TITLE_TOKEN.test(bgCode()); };
const bgUsesScene = () => /\{\{\s*(장소|생존|전체|place|alive|total)\s*\}\}/i.test(bgCode());
const bgUsesHompy = () => /\{\{\s*(마이룸|톡톡|프레임색)\s*\}\}/.test(bgCode());
const bgUsesDiary = () => /\{\{\s*(다이어리색|날짜|날씨)\s*\}\}/.test(bgCode());
// 직접 붙여넣은 HTML도 {{메모제목}} · {{할일}} · {{키링}}만 쓰면 그 칸만 텍스트 탭에 보여 줌
const bgUsesMemo = () => /\{\{\s*(메모제목|할일)\s*\}\}/.test(bgCode());
const bgUsesBeads = () => /\{\{\s*키링\s*\}\}/.test(bgCode());
const WEATHERS = [['sun', '맑음', '☀\uFE0E'], ['cloud', '흐림', '☁\uFE0E'], ['rain', '비', '☂\uFE0E'], ['snow', '눈', '❄\uFE0E']];
function todayLabel() {
  const d = new Date();
  const p2 = (n) => String(n).padStart(2, '0');
  return `${d.getFullYear()}. ${p2(d.getMonth() + 1)}. ${p2(d.getDate())}. ${'일월화수목금토'[d.getDay()]}`;
}
const safeColor = (v, d) => (/^#[0-9a-f]{3,8}$/i.test(v || '') ? v : d);
function fillBgTokens(html) {
  const e = (t) => esc((t || '').trim());
  const sc = state.scene || {};
  const hp = state.hompy || {};
  const dy = state.diary || {};
  // 상황판 끄기: data-scene 이 붙은 요소를 숨김
  if (sc.show === false) html = (html || '') + '<style>[data-scene]{display:none !important}</style>';
  return (html || '')
    .replace(TITLE_TOKEN, () => e(state.title))
    .replace(/\{\{\s*(출처|credit)\s*\}\}/gi, () => e(state.credit))
    .replace(/\{\{\s*(제작자|creator)\s*\}\}/gi, () => e(state.creator))
    .replace(/\{\{\s*(생존비율|alivePct)\s*\}\}/gi, () => {
      const a = parseFloat(sc.alive), t = parseFloat(sc.total);
      return `${t > 0 && a >= 0 ? Math.max(0, Math.min(100, (a / t) * 100)).toFixed(2) : 0}%`;
    })
    .replace(/\{\{\s*(장소|place)\s*\}\}/gi, () => e(sc.place))
    .replace(/\{\{\s*프레임색\s*\}\}/g, () => safeColor(hp.frame, '#8fd0e6'))
    .replace(/\{\{\s*배경색\s*\}\}/g, () => safeColor(hp.bg, '#eceff3'))
    .replace(/\{\{\s*투데이\s*\}\}/g, () => e(String(hp.today ?? '')))
    .replace(/\{\{\s*토탈\s*\}\}/g, () => e(String(hp.total ?? '')))
    .replace(/\{\{\s*마이룸\s*\}\}/g, () => (hp.room ? `<img src="${hp.room.replace(/"/g, '&quot;')}" alt="">` : '')
      + ((hp.say || '').trim() ? `<div class="say">${e(hp.say)}</div>` : ''))
    .replace(/\{\{\s*다이어리색\s*\}\}/g, () => safeColor(dy.color, '#ff8a80'))
    .replace(/\{\{\s*날짜\s*\}\}/g, () => e(String(dy.date || '').trim() || todayLabel()))
    .replace(/\{\{\s*날씨\s*\}\}/g, () => WEATHERS.map(([k, , g]) => `<i class="${k === dy.weather ? 'on' : ''}">${g}</i>`).join(''))
    .replace(/\{\{\s*메모제목\s*\}\}/g, () => e(dy.memoTitle || ''))
    .replace(/\{\{\s*할일\s*\}\}/g, () => String(dy.todo || '').split('\n').map((l) => l.trim()).filter(Boolean).slice(0, 5).map((l) => `<p>${e(l)}</p>`).join(''))
    .replace(/\{\{\s*키링\s*\}\}/g, () => [...String(dy.beads || '').replace(/\s/g, '')].slice(0, 6).map((ch) => `<span>${e(ch)}</span>`).join(''))
    .replace(/\{\{\s*키링표시\s*\}\}/g, () => (dy.keyring === false ? 'keyring-off' : ''))
    .replace(/\{\{\s*톡톡\s*\}\}/g, () => (hp.talk || []).filter((t) => (t.text || '').trim())
      .map((t) => `<li><span>${e(t.text)}</span>${(t.name || '').trim() ? `<em>${e(t.name)}</em>` : ''}</li>`).join(''))
    .replace(/\{\{\s*(생존|alive)\s*\}\}/gi, () => e(String(sc.alive ?? '')))
    .replace(/\{\{\s*(전체|total)\s*\}\}/gi, () => e(String(sc.total ?? '')));
}
// 글이 들어갈 자리: <!-- ninining-safe: 위% 오른쪽% 아래% 왼쪽%; min-height: %--> (모두 카드 가로 기준)
function bgSafeArea() {
  const m = bgCode().match(/ninining-safe:\s*([\d.]+)%\s+([\d.]+)%\s+([\d.]+)%\s+([\d.]+)%(?:\s*;\s*min-height:\s*([\d.]+)%)?/);
  return m ? { t: +m[1], r: +m[2], b: +m[3], l: +m[4], minH: m[5] ? +m[5] : 0 } : null;
}

function htmlBgKey(w, h, layer) { return `${layer}|${w}x${h}|${state.canvas.scale}|${fillBgTokens(bgCode())}`; }
function htmlBgURL(w, h, layer) {
  const key = htmlBgKey(w, h, layer);
  if (!htmlBg.cache.has(key)) {
    if (htmlBg.cache.size > 24) htmlBg.cache.clear();
    htmlBg.cache.set(key, buildHtmlBgURL(fillBgTokens(bgCode()), w, h, layer));
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
  const code = bgCode().trim();
  if (!code) { setHtmlStatus(''); return Promise.resolve(); }
  const hasTop = /data-layer\s*=\s*["']?top/i.test(code);
  const seq = ++htmlBgSeq;
  // 새로 그려야 하는 동안에는 직전 그림을 먼저 보여 줌 (깜빡임 · 끊김 방지)
  pages.forEach((p, i) => {
    if (!p.bgImg || !lastBg[i]) return;
    p.bgImg.src = lastBg[i].base; p.bgImg.hidden = false;
    // 새 배경에 위층이 없으면 이전 배경의 위층(제목 등)을 남기지 않음
    if (hasTop && lastBg[i].top && p.topImg) { p.topImg.src = lastBg[i].top; p.topImg.hidden = false; }
  });
  const uncached = pages.some((p) => !htmlBg.cache.has(htmlBgKey(p.card.offsetWidth, p.card.offsetHeight, 'base')));
  setHtmlStatus('그리는 중…');
  // 글자를 치는 동안 매번 다시 그리지 않도록 잠깐 기다렸다가 그림
  // 문서가 이미 준비돼 있으면(크기만 바뀜) 거의 바로, 처음 그리는 배경이면 입력이 멈출 때까지 잠깐 기다림
  const prepped = htmlPrep.has(fillBgTokens(code));
  const wait = uncached ? new Promise((r) => setTimeout(r, prepped ? 60 : 350)) : Promise.resolve();
  return wait.then(() => seq !== htmlBgSeq ? null : Promise.all(pages.map(async (p, i) => {
    const w = p.card.offsetWidth, hgt = p.card.offsetHeight;
    const [base, top] = await Promise.all([htmlBgURL(w, hgt, 'base'), hasTop ? htmlBgURL(w, hgt, 'top') : null]);
    if (seq !== htmlBgSeq) return;
    if (!p.bgImg || (exporting && p.bgImg.src.startsWith('data:image/png'))) return;
    p.bgImg.src = base; p.bgImg.hidden = false;
    if (p.topImg) {
      if (top) { p.topImg.src = top; p.topImg.hidden = false; } else { p.topImg.hidden = true; p.topImg.removeAttribute('src'); }
    }
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
  { name: '생존 게임 시뮬레이터', file: 'bg/survival.html', credit: '⚠️생존 게임 시뮬레이터', creator: '@wooya', scene: { place: '골목길', alive: '31', total: '31' } },
  // 언덕 시리즈: 출처 · 제작자는 비우고, 지문 형식은 '*텍스트*'를 나레이션으로
  { name: '언덕 위의 마녀', file: 'bg/witch.html', clearCredit: true, parse: { formats: ['star1'], mode: 'plain' }, avatars: true,
    chars: ['마녀', { name: '노엘', avatar: 'bg/witch/noel.webp' }, { name: '륜', avatar: 'bg/witch/ryun.webp' }, { name: '악셀', avatar: 'bg/witch/axel.webp' }, { name: '루카', avatar: 'bg/witch/luka.webp' }] },
  { name: '언덕 위의 마왕', file: 'bg/demon.html', clearCredit: true, parse: { formats: ['star1'], mode: 'plain' }, avatars: true,
    chars: ['마왕', { name: '체페슈', avatar: 'bg/demon/tepes.webp' }, { name: '아자젤', avatar: 'bg/demon/azazel.webp' }, { name: '노먼', avatar: 'bg/demon/norman.webp' }, { name: '빌터', avatar: 'bg/demon/wilter.webp' }, { name: '한', avatar: 'bg/demon/han.webp' }, { name: '라이케', avatar: 'bg/demon/raike.webp' }] },
  // 미니홈피: 비어 있는 칸만 예시로 채움 (이미 쓴 마이룸 · 한마디는 그대로)
  { name: '미니홈피', file: 'bg/hompy.html', hompy: { today: '25', total: '1004', say: '안녕하세요', talk: [
    { name: '닐', text: '뭐하냐' }, { name: '린', text: '로그 좀 올려' }, { name: '익명', text: '잘 구경했다...ㅋㅋ' }] } },
  { name: '다이어리', file: 'bg/diary.html' },
];

function applySkin() {
  const src = state.skin || '';
  const styles = [...src.matchAll(/<style[^>]*>([\s\S]*?)<\/style>/gi)].map((m) => m[1]);
  $('#skin-style').textContent = styles.length ? styles.join('\n') : src.replace(/<\/?[a-z][^>]*>/gi, '');
}

let editingKey = null;

function renderBlock(b) {
  if (b.type === 'narr') {
    let drop = '';
    if (dropcapPending && !b.cont) { drop = ' dropcap'; dropcapPending = false; }
    const p = h('p', { class: 'narr' + drop + (b.ind && !b.cont ? ' ind' : '') + (b.cont ? ' cont' : '') + (b.key ? ' was-bubble' : ''), 'data-key': b.key || false, html: wrapParens(withDropcap(drop, state.typo.noOrphan === false ? fmt(b.text) : fmtNoOrphan(b.text, state.typo.align === 'justify' || state.typo.wordBreak === 'char'))) });
    if (b.floatImg && state.images[b.floatImg.id]) { p._float = inlineFigure(b.floatImg.id, b.floatImg.alt); p.prepend(p._float); }
    return p;
  }
  if (b.type === 'gap') { const g = h('div', { class: 'gap' }); g.style.setProperty('--gap-n', b.n || 1); return g; }
  if (b.type === 'hr') return h('hr', { class: 'divider' });
  if (b.type === 'img') return inlineFigure(b.id, b.alt);
  if (b.type === 'box') return boxFigure(b.id);

  const B = state.bubble;
  const { ch, speaker, side, shape } = b;
  let tail = '';
  if (B.tail && side !== 'center') {
    if (TRI_TAIL.includes(shape)) tail = 'tail-tri';
    else if (shape === 'thought') tail = 'tail-dots';
  }
  const msg = h('div', {
    class: `msg msg-${side} kind-${b.kind} shape-${shape} ${tail}${B.showName && B.namePos === 'side' ? ' name-side' : ''}${b.key === editingKey ? ' editing' : ''}`,
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
  if (B.showName && speaker) {
    const nm = h('div', { class: 'name' }, speaker);
    if (ch && ch.nameColor) nm.style.color = ch.nameColor; // 캐릭터별 이름 색
    body.append(nm);
  }
  const strip = state.parse.strip;
  let inner = fmt(strip ? b.inner : b.full);
  const show = state.parse.tlShow || 'both';
  // 괄호로 쓴 번역 줄은 '기호 숨기기'로 괄호가 빠져도 '괄호 안 글자' 꾸미기를 그대로 받음
  const P = state.typo.paren;
  const tlHtml = (t, main) => {
    const x = fmt(strip ? t.inner : t.full);
    const wasParen = strip && P && P.on && /^\s*[(（][\s\S]*[)）]\s*$/.test(t.full);
    return wasParen ? `<span class="paren${main ? ' paren-main' : ''}">${x}</span>` : x;
  };
  if (b.tl && show === 'tl') {
    // 번역만: 원문(외국어)을 빼고 번역을 본문 크기로
    inner = b.tl.map((t) => tlHtml(t, true)).join('\n');
  } else if (b.tl && show === 'both') {
    // 번역 줄: 줄바꿈 뒤에 작은 글씨로 (말풍선 안 기호는 '기호 숨기기'를 따름)
    for (const t of b.tl) inner += '\n<span class="tl">' + tlHtml(t, false) + '</span>';
  }
  const bub = h('div', { class: 'bubble', html: wrapParens(inner) });
  const ov = state.overrides[b.key] || {};
  if (ov.img) {
    const box = h('span', { class: 'bimg-box', 'data-key': b.key }, h('img', { src: ov.img, alt: '', draggable: 'false' }), h('span', { class: 'stk-ui rs-handle', title: '끌어서 크기 조절' }));
    box.style.width = `${ov.imgW || 180}px`;
    bub.prepend(box);
    if (!(strip ? b.inner : b.full).trim()) bub.classList.add('img-only');
  }
  body.append(bub);
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
  const card = h('div', { class: 'card' + (H ? '' : ' auto-h') + (state.typo.indentOn ? ' para-indent' + (state.typo.indentWhere === 'cont' ? '' : ' indent-all') : '') });
  card.style.width = W + 'px';
  if (H) card.style.height = H + 'px';
  card.append(h('div', { class: 'card-overlay' }));
  // HTML 배경이 있을 때만 그림 자리를 만듦 (빈 <img>는 이미지 저장을 실패시킴)
  const useHtml = !!bgCode().trim();
  const bgImg = useHtml ? h('img', { class: 'card-htmlbg', alt: '', hidden: true, 'aria-hidden': 'true' }) : null;
  const topImg = useHtml ? h('img', { class: 'card-htmltop', alt: '', hidden: true, 'aria-hidden': 'true' }) : null;
  if (bgImg) card.append(bgImg);
  if (idx === 0 && state.head.quoteMark) card.append(h('div', { class: 'quote-mark', 'aria-hidden': 'true' }, '“'));
  if (idx === 0 && state.title.trim() && !(bgCode() && bgHasTitle())) card.append(h('h2', { class: 'card-title', html: fmt(state.title) }));
  const safe = bgCode() ? bgSafeArea() : null;
  if (safe) {
    // 배경이 정한 글 자리 + '바깥 여백'을 기본값(40px)보다 늘리거나 줄인 만큼 더함
    const extra = (state.canvas.pad ?? 40) - 40;
    const px = (v) => `${Math.max(0, Math.round((v * W) / 100 + extra))}px`;
    card.style.padding = `${px(safe.t)} ${px(safe.r)} ${px(safe.b)} ${px(safe.l)}`;
    if (!H && safe.minH) card.style.minHeight = px(safe.minH);
  }
  const content = h('div', { class: 'card-content' });
  const flow = h('div', { class: 'flow' });
  content.append(flow);
  card.append(content);
  // HTML 배경이 출처 · 제작자를 직접 보여 주면 카드 아래쪽 출처 줄은 생략
  const bgCredit = /\{\{\s*(출처|credit|제작자|creator)\s*\}\}/i.test(bgCode());
  const work = bgCredit ? '' : (state.credit || '').trim(), author = bgCredit ? '' : (state.creator || '').trim();
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
  // 글자색 구간이 열린 채 잘리면 앞 조각은 닫고 뒤 조각은 같은 색으로 다시 엶
  const opens = [...a.matchAll(/\[\[(#[0-9a-fA-F]{3,8}|@[^|\]\n]+)\|/g)];
  const closes = (a.match(/\]\]/g) || []).length;
  if (opens.length > closes) { const c = opens[opens.length - 1][1]; a += ']]'; rest = `[[${c}|` + rest; }
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
  const dc = el.classList.contains('dropcap');
  const put = (t) => { el.innerHTML = wrapParens(withDropcap(dc, fmt(t))); if (el._float) el.prepend(el._float); };
  const show = (k) => put(balanceMarks(head(k), tail(k))[0]);
  const fits = (k) => { show(k); return !overflows(page); };
  let lo = 0, hi = tokens.length - 1;
  while (lo < hi) {
    const mid = Math.ceil((lo + hi) / 2);
    if (fits(mid)) lo = mid; else hi = mid - 1;
  }
  if (lo === 0 || !tail(lo)) { put(b.text); return null; }
  show(lo);
  const lh = parseFloat(getComputedStyle(el).lineHeight) || 24;
  const lines = Math.round(el.offsetHeight / lh);
  if (lines < 2 && !alone) { put(b.text); return null; }
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
  put(a);
  return rest;
}

const overflows = (p) => p.flow.offsetHeight > p.content.clientHeight + 0.5;
const trimGaps = (flow) => {
  while (flow.lastElementChild && flow.lastElementChild.classList.contains('gap')) flow.lastElementChild.remove();
};

let renderQueued = false;
let exporting = false;      // 이미지를 만드는 동안에는 미리보기를 다시 그리지 않음 (만들던 카드가 바뀌지 않게)
let renderAfterExport = false;
function scheduleRender() {
  if (exporting) { renderAfterExport = true; return; }
  if (renderQueued) return;
  renderQueued = true;
  requestAnimationFrame(() => { renderQueued = false; if (exporting) { renderAfterExport = true; return; } render(); });
}

let lastStats = { bubbles: 0, pages: 1 };

/* ── 자유 배치 이미지 ── */
let selSticker = null;
function renderStickers(pages) {
  (state.stickers || []).forEach((st) => {
    const page = pages[Math.min(st.page || 0, pages.length - 1)];
    if (!page) return;
    const el = h('div', { class: `sticker layer-${st.layer || 'front'}${st.id === selSticker ? ' sel' : ''}`, 'data-sticker': st.id, title: '끌어서 옮기기 · 눌러서 그림자 · 테두리 · 자르기' },
      h('img', { src: st.src, alt: '', draggable: 'false' }),
      h('span', { class: 'stk-ui stk-handle', title: '끌어서 크기 조절' }),
      h('span', { class: 'stk-ui stk-rot', title: '끌어서 회전 (Shift: 15° 단위)', html: icon('rotate') }));
    placeSticker(el, st);
    if ((st.layer || 'front') === 'back') page.card.insertBefore(el, page.content);
    else page.card.append(el);
  });
}
/* ── 이미지 선택 시 위에 뜨는 작은 도구 막대: 그림자 · 테두리 · 자르기 · 설정 · 삭제 ── */
let selInline = null;
const imgBar = h('div', { class: 'img-bar', hidden: true, role: 'toolbar', 'aria-label': '이미지 도구' });
document.body.append(imgBar);
function selTarget() {
  if (selSticker) {
    const st = (state.stickers || []).find((x) => x.id === selSticker);
    const el = $(`#stage .sticker[data-sticker="${CSS.escape(selSticker)}"]`);
    if (st && el) return { kind: 'sticker', obj: st, el, box: el };
  }
  if (selInline) {
    const info = state.images[selInline];
    const el = $(`#stage .inline-img[data-img="${CSS.escape(selInline)}"]`);
    if (info && el) return { kind: 'inline', obj: info, el, box: el.querySelector('.img-box') || el };
  }
  return null;
}
function updSel(patch) {
  const t = selTarget();
  if (!t) return;
  if (t.kind === 'sticker') { Object.assign(t.obj, patch); placeSticker(t.el, t.obj); }
  else {
    state.images = { ...state.images, [selInline]: { ...state.images[selInline], ...patch } };
    const info = state.images[selInline];
    const im = t.el.querySelector('img');
    if (im) { im.style.filter = shadowFilter(info.sh); applyImgBorder(im, info); }
  }
  save(); commitSoon(); drawImgBar();
}
function selectImage(kind, id) {
  closePop();
  if (kind === 'inline') {
    selSticker = null; $$('#stage .sticker.sel').forEach((x) => x.classList.remove('sel'));
    selInline = id;
    $$('#stage .inline-img').forEach((x) => x.classList.toggle('sel', x.dataset.img === id));
  }
  showImgBar();
}
function deselectImage() {
  if (!selSticker && !selInline) return;
  selSticker = null; selInline = null;
  $$('#stage .sticker.sel, #stage .inline-img.sel').forEach((x) => x.classList.remove('sel'));
  imgBar.hidden = true;
}
function drawImgBar() {
  const t = selTarget();
  if (!t) { imgBar.hidden = true; return; }
  const o = t.obj;
  const btn = (ic, label, on, fn, cls = '') => h('button', { type: 'button', class: `ib-btn${on ? ' on' : ''}${cls}`, title: label, 'aria-pressed': on == null ? false : String(!!on), onclick: fn },
    h('span', { html: icon(ic) }), h('span', { class: 'ib-l' }, label));
  const panel = (title, ctl) => (ctl.classList.add('bare'), openPop(h('div', { 'aria-label': title }, ctl,
    h('div', { class: 'pop-foot' }, h('span'), h('button', { type: 'button', class: 'btn btn-primary btn-sm', onclick: closePop }, '완료'))), t.box, null, { beside: t.box }));
  imgBar.innerHTML = '';
  imgBar.append(
    btn('shadow', '그림자', o.sh && o.sh.on, () => {
      if (!(o.sh && o.sh.on)) updSel({ sh: { ...SHADOW_DEF, ...(o.sh || {}), on: true } });
      const tt = selTarget(); if (!tt) return;
      panel('그림자', shadowControls(() => selTarget() && selTarget().obj.sh, (v) => updSel({ sh: v })));
    }),
    btn('border', '테두리', o.bd && o.bd.on, () => {
      if (!(o.bd && o.bd.on)) updSel({ bd: { ...BORDER_DEF, ...(o.bd || {}), on: true } });
      panel('테두리', borderControls(() => selTarget() && selTarget().obj.bd, (v) => updSel({ bd: v })));
    }),
    btn('crop', '자르기', null, async () => {
      const src0 = o.src;
      const out = await cropImage(src0);
      if (out && out !== src0) { updSel({ src: out, round: lastCropShape === 'circle' }); changed(); commit(); }
    }),
    h('i', { class: 'ib-sep' }),
    btn('more', '설정', null, () => (t.kind === 'sticker' ? openStickerPop(t.el, o.id) : openInlineImagePop(t.el, selInline)), ' mo'),
    btn('trash', '삭제', null, () => {
      if (t.kind === 'sticker') state.stickers = state.stickers.filter((x) => x.id !== o.id);
      else removeImageToken(selInline);
      deselectImage(); closePop(); changed();
      toast('이미지를 지웠어요', { label: '되돌리기', fn: undo });
    }, ' danger mo'));
  placeImgBar();
}
function placeImgBar() {
  const t = selTarget();
  if (!t) { imgBar.hidden = true; return; }
  const r = t.el.getBoundingClientRect();
  const sr = $('#stage').getBoundingClientRect();
  if (r.bottom < sr.top || r.top > sr.bottom) { imgBar.hidden = true; return; }
  imgBar.hidden = false;
  const bw = imgBar.offsetWidth, bh = imgBar.offsetHeight;
  // 회전 손잡이와 겹치지 않게 자유 배치 이미지는 조금 더 위에
  const gap = t.kind === 'sticker' ? 50 : 10;
  let y = r.top - bh - gap;
  if (y < Math.max(8, sr.top)) y = r.bottom + 12;
  const x = Math.max(8, Math.min(r.left + r.width / 2 - bw / 2, innerWidth - bw - 8));
  imgBar.style.left = `${x}px`; imgBar.style.top = `${y}px`;
}
function showImgBar() { drawImgBar(); }
$('#stage').addEventListener('scroll', () => { if (!imgBar.hidden) placeImgBar(); }, { passive: true });
addEventListener('resize', () => { if (!imgBar.hidden) placeImgBar(); });
// 미리보기 밖(패널 등)을 누르면 선택 해제 (도구 막대 · 설정 창 · 자르기 창은 제외)
document.addEventListener('pointerdown', (e) => {
  if (e.target.closest('#stage, .img-bar, .pop, .modal')) return;
  deselectImage();
});

function placeSticker(el, st) {
  Object.assign(el.style, { left: `${st.x}px`, top: `${st.y}px`, width: `${st.w}px`, transform: `rotate(${st.rot || 0}deg)`, opacity: st.op ?? 1 });
  const im = el.querySelector('img');
  if (im) { im.style.filter = shadowFilter(st.sh, st.rot || 0); applyImgBorder(im, st); }
}

/* 이미지 그림자: { on, color, angle(0°=오른쪽 · 90°=아래), op(0~1), dist(px) } */
const SHADOW_DEF = { on: false, color: '#000000', angle: 90, op: 0.3, dist: 8 };
function shadowFilter(sh, rot = 0) {
  if (!sh || !sh.on) return '';
  const x = { ...SHADOW_DEF, ...sh };
  const m = /^#?([0-9a-f]{6})$/i.exec(x.color || '') || [0, '000000'];
  const [r, g, b] = [0, 2, 4].map((i) => parseInt(m[1].slice(i, i + 2), 16));
  // 회전한 이미지도 그림자 방향은 화면 기준으로 유지
  const a = ((x.angle - rot) * Math.PI) / 180;
  const dx = +(Math.cos(a) * x.dist).toFixed(2), dy = +(Math.sin(a) * x.dist).toFixed(2);
  return `drop-shadow(${dx}px ${dy}px ${(x.dist * 1.2 + 3).toFixed(1)}px rgba(${r},${g},${b},${x.op}))`;
}
const SHADOW_COLORS = ['#000000', '#5b4636', '#2b3a55', '#7a2e3a', '#8a7f6a', '#ffffff'];
/** 그림자 켜기/끄기 · 색 · 각도 · 불투명도 · 거리 (켜면 아래 조절이 나타남) */
function shadowControls(getSh, setSh) {
  const wrap = h('div', { class: 'shadow-ctl' });
  const draw = () => {
    const sh = { ...SHADOW_DEF, ...(getSh() || {}) };
    wrap.innerHTML = '';
    const sw = h('input', { type: 'checkbox', class: 'switch', role: 'switch', checked: sh.on, 'aria-label': '그림자' });
    sw.addEventListener('change', () => { setSh({ ...sh, on: sw.checked }); draw(); });
    wrap.append(h('label', { class: 'pop-label row-top shadow-head' }, '그림자', sw));
    if (!sh.on) return;
    const colors = h('div', { class: 'shadow-colors' });
    SHADOW_COLORS.forEach((c) => {
      const b = h('button', { type: 'button', class: 'sc-dot' + (c.toLowerCase() === sh.color.toLowerCase() ? ' on' : ''), 'aria-label': c, title: c });
      b.style.background = c;
      b.addEventListener('click', () => { setSh({ ...sh, color: c }); draw(); });
      colors.append(b);
    });
    const nat = h('input', { type: 'color', class: 'sc-pick', value: sh.color, 'aria-label': '그림자 색 직접 고르기', title: '직접 고르기' });
    nat.addEventListener('input', () => setSh({ ...(getSh() || sh), on: true, color: nat.value }));
    colors.append(nat);
    wrap.append(h('div', { class: 'pop-label' }, '색'), colors);
    const mk = (label, k, min, max, step, unit, toV, fromV) => {
      const val = fromV(sh[k]);
      const out = h('output', {}, `${val}${unit}`);
      const sl = h('input', { type: 'range', class: 'slider', min, max, step, value: val });
      const pct = (v) => `${((v - min) / (max - min)) * 100}%`;
      sl.style.setProperty('--p', pct(val));
      sl.addEventListener('input', () => { out.textContent = `${sl.value}${unit}`; sl.style.setProperty('--p', pct(sl.value)); setSh({ ...(getSh() || sh), [k]: toV(+sl.value) }); });
      wrap.append(h('div', { class: 'pop-label row-top' }, label, out), sl);
    };
    const id = (v) => v;
    mk('각도', 'angle', 0, 360, 1, '°', id, id);
    mk('불투명도', 'op', 0, 100, 1, '%', (v) => v / 100, (v) => Math.round(v * 100));
    mk('거리', 'dist', 0, 40, 1, 'px', id, id);
  };
  draw();
  return wrap;
}

/* 이미지 테두리: { on, color, w(px) } — 원으로 자른 이미지는 동그랗게 */
const BORDER_DEF = { on: false, color: '#ffffff', w: 4 };
const BORDER_COLORS = ['#ffffff', '#000000', '#8a8f98', '#e9dcc6', '#f4b6c2', '#2b3a55'];
function applyImgBorder(im, info) {
  const bd = info && info.bd;
  if (bd && bd.on) {
    const x = { ...BORDER_DEF, ...bd };
    im.style.border = `${x.w}px solid ${x.color}`;
    im.style.boxSizing = 'border-box';
  } else { im.style.border = ''; }
  im.style.borderRadius = info && info.round ? '50%' : '';
}
function borderControls(getBd, setBd) {
  const wrap = h('div', { class: 'shadow-ctl' });
  const draw = () => {
    const bd = { ...BORDER_DEF, ...(getBd() || {}) };
    wrap.innerHTML = '';
    const sw = h('input', { type: 'checkbox', class: 'switch', role: 'switch', checked: bd.on, 'aria-label': '테두리' });
    sw.addEventListener('change', () => { setBd({ ...bd, on: sw.checked }); draw(); });
    wrap.append(h('label', { class: 'pop-label row-top shadow-head' }, '테두리', sw));
    if (!bd.on) return;
    const colors = h('div', { class: 'shadow-colors' });
    BORDER_COLORS.forEach((c) => {
      const b = h('button', { type: 'button', class: 'sc-dot' + (c.toLowerCase() === bd.color.toLowerCase() ? ' on' : ''), 'aria-label': c, title: c });
      b.style.background = c;
      b.addEventListener('click', () => { setBd({ ...bd, color: c }); draw(); });
      colors.append(b);
    });
    const nat = h('input', { type: 'color', class: 'sc-pick', value: bd.color, 'aria-label': '테두리 색 직접 고르기', title: '직접 고르기' });
    nat.addEventListener('input', () => setBd({ ...(getBd() || bd), on: true, color: nat.value }));
    colors.append(nat);
    const out = h('output', {}, `${bd.w}px`);
    const sl = h('input', { type: 'range', class: 'slider', min: 1, max: 24, step: 1, value: bd.w });
    const pct = (v) => `${((v - 1) / 23) * 100}%`;
    sl.style.setProperty('--p', pct(bd.w));
    sl.addEventListener('input', () => { out.textContent = `${sl.value}px`; sl.style.setProperty('--p', pct(sl.value)); setBd({ ...(getBd() || bd), w: +sl.value }); });
    wrap.append(h('div', { class: 'pop-label' }, '색'), colors, h('div', { class: 'pop-label row-top' }, '두께', out), sl);
  };
  draw();
  return wrap;
}

function inlineFigure(id, alt) {
  const info = state.images[id];
  const fig = h('figure', { class: `inline-img wrap-${info.wrap || 'block'} align-${info.align || 'center'}${id === selInline ? ' sel' : ''}`, 'data-img': id, title: '눌러서 그림자 · 테두리 · 자르기' },
    h('span', { class: 'img-box' }, h('img', { src: info.src, alt: alt || '', draggable: 'false' }), h('span', { class: 'stk-ui rs-handle', title: '끌어서 크기 조절' })));
  fig.style.setProperty('--img-w', `${info.w || 100}%`);
  const f = shadowFilter(info.sh);
  const im = fig.querySelector('img');
  if (f) im.style.filter = f;
  applyImgBorder(im, info);
  return fig;
}

let dropcapPending = false;
/* 드롭캡: 첫 글자(앞의 따옴표 등 문장부호 포함)를 실제 요소로 감쌈 — 이미지 저장에도 그대로 나오게 */
function withDropcap(on, html) {
  if (!on) return html;
  const m = html.match(/^((?:<[^>]+>)*)((?:&[a-z]+;|[^\s<&\p{L}\p{N}])*)([\p{L}\p{N}])/u);
  if (!m) return html;
  return m[1] + `<span class="dc">${m[2]}${m[3]}</span>` + html.slice(m[0].length);
}
/* 옆 메모 이음선: 메모를 내용의 실제 끝(글줄 끝 · 말풍선 · 이미지) 가까이로 당겨 붙이고, 그 사이를 짧은 선으로 이음.
   메모 높이에 걸치는 글줄은 피해서 겹치지 않게 함 */
function fitNoteLeads(root) {
  const items = [...root.querySelectorAll('.noted.note-side')];
  if (!items.length) return;
  const sc = root.getBoundingClientRect().width / (root.offsetWidth || 1) || 1;
  const reads = items.map((box) => {
    const block = box.firstElementChild, note = box.querySelector('.side-note');
    const br = block.getBoundingClientRect();
    const tgt = block.querySelector('.bubble') || block.querySelector('.img-box') || block.querySelector('.hb-root > *') || null;
    let rects;
    if (tgt) rects = [tgt.getBoundingClientRect()];
    else {
      const rg = document.createRange(); rg.selectNodeContents(block);
      rects = [...rg.getClientRects()].filter((x) => x.width > 0);
      if (!rects.length) rects = [br];
    }
    const top = Math.min(...rects.map((x) => x.top));
    const nr = note.getBoundingClientRect();
    const dy = Math.max(0, top - br.top); // 말풍선은 이름표 아래 높이에 맞춤
    const nTop = br.top + dy, nBot = nTop + nr.height;
    const over = rects.filter((x) => x.bottom > nTop + 1 && x.top < nBot - 1);
    const right = Math.max(...(over.length ? over : [rects[0]]).map((x) => x.right));
    const fs = parseFloat(getComputedStyle(note).fontSize) || 12;
    const want = right + fs * 1.9 * sc; // 내용 끝에서 이만큼만 떨어지게
    const shift = Math.max(0, nr.left - want);
    // 선 끝(원 · 화살표)이 글자에 붙지 않게 내용 끝에서 살짝 띄움
    return { note, dy: dy / sc, shift: shift / sc, lead: Math.max(fs * 0.8, (nr.left - shift - right) / sc - fs * 0.35) };
  });
  reads.forEach(({ note, dy, shift, lead }) => {
    note.style.setProperty('--lead', `${lead.toFixed(1)}px`);
    note.style.marginTop = dy > 1 ? `${dy.toFixed(1)}px` : '';
    note.style.marginLeft = shift > 1 ? `${(-shift).toFixed(1)}px` : '';
  });
}
/* 옆 메모 상자: [덩어리 | 메모] 또는 덩어리 아래에 메모 */
function wrapNote(el, note) {
  const N = state.typo.note || {};
  const mark = ['dot', 'arrow', 'line', 'none'].includes(N.mark) ? N.mark : 'dot';
  const box = h('div', { class: `noted note-${N.pos === 'below' ? 'below' : 'side'} note-mark-${mark}` });
  box.append(el, h('aside', { class: 'side-note', html: fmt(note) }));
  return box;
}
let lastRenderMs = 0;
function render() {
  const t0 = performance.now();
  dropcapPending = !!state.typo.dropcap;
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
  // 다음 덩어리 꺼내기 (어울림 이미지는 바로 다음 나레이션 문단 안에 띄워서 글이 옆으로 흐르게)
  const takeNext = () => {
    const b = queue.shift();
    if (b.type === 'img' && (state.images[b.id] || {}).wrap === 'float' && queue[0] && queue[0].type === 'narr' && !queue[0].floatImg) {
      queue[0] = { ...queue[0], floatImg: b };
      return null;
    }
    return b;
  };
  while (queue.length) {
    const b = takeNext();
    if (!b || (b.type === 'gap' && !page.flow.childElementCount)) continue;
    const el = b.note ? wrapNote(renderBlock(b), b.note) : renderBlock(b);
    page.flow.append(el);
    if (!split || !overflows(page)) continue;
    const alone = page.flow.childElementCount === 1;
    if (b.type === 'narr' && !b.note) {
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
  pages.forEach((p) => fitTails(p.card));
  pages.forEach((p) => fitNoteLeads(p.card));
  renderStickers(pages);
  htmlBgReady = applyHtmlBg(pages);
  rescale();
  if (selSticker || selInline) requestAnimationFrame(drawImgBar);
  lastRenderMs = performance.now() - t0;
  stage.scrollTop = scrollTop;
}

/* 둥근 말풍선: 꼬리가 붙는 자리의 모서리가 휘어 들어간 만큼 꼬리를 안쪽으로 당겨 틈 없이 붙임 */
function fitTails(root) {
  // 먼저 모두 읽고(측정) 나중에 한꺼번에 씀 — 말풍선마다 다시 배치를 계산하지 않도록
  const bubs = [...root.querySelectorAll('.tail-tri .bubble')];
  const inset = (r, dist) => {
    if (r <= 0 || dist >= r) return 0;
    const dy = Math.min(r, r - Math.max(0, dist));
    return r - Math.sqrt(Math.max(0, r * r - dy * dy));
  };
  const res = bubs.map((bub) => {
    const cs = getComputedStyle(bub);
    const pre = getComputedStyle(bub, '::before');
    const bw = parseFloat(cs.borderTopWidth) || 0;
    const left = bub.closest('.msg').classList.contains('msg-left');
    const h = bub.offsetHeight, w = bub.offsetWidth;
    const cap = (v) => Math.min(parseFloat(v) || 0, h / 2, w / 2);
    const rt = cap(left ? cs.borderTopLeftRadius : cs.borderTopRightRadius);
    const rb = cap(left ? cs.borderBottomLeftRadius : cs.borderBottomRightRadius);
    const y1 = (parseFloat(pre.top) || 0) + bw;
    const y2 = y1 + (parseFloat(pre.height) || 0);
    return { nob: !(bw > 0), d: Math.max(inset(rt, y1), inset(rb, h - y2)) };
  });
  bubs.forEach((bub, i) => {
    bub.classList.toggle('tail-nob', res[i].nob);
    if (res[i].d > 0.05) bub.style.setProperty('--tin', `${res[i].d.toFixed(2)}px`);
    else bub.style.removeProperty('--tin');
  });
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
  if (typeof imgBar !== 'undefined' && !imgBar.hidden) placeImgBar();
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

// 미니홈피 프레임 · 바탕 추천 색
const HOMPY_COLORS = [
  ['하늘', '#8fd0e6', '#eceff3'], ['연두', '#a8d86a', '#e7e8e4'], ['딸기', '#f5a3b7', '#fbf0f2'],
  ['라벤더', '#b9a7e8', '#f0eef7'], ['레몬', '#f2d36b', '#f7f4ea'], ['민트', '#8fd8c0', '#ebf3f0'], ['회색', '#b5bcc4', '#f2f3f5'],
];
// 다이어리 표지 추천 색
const DIARY_COLORS = [['코랄', '#ff8a80'], ['체리', '#e8506a'], ['피치', '#ffb38a'], ['버터', '#f2c94c'], ['민트', '#6fcfb0'], ['스카이', '#7cb8f0'], ['라일락', '#b49cf0'], ['코코아', '#a47e6b'], ['차콜', '#5b5f6b']];
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
    { sec: '상황판', note: '생존 게이지는 생존 인원 ÷ 전체 인원으로 채워져요.', show: () => bgUsesScene(), rows: [
      { t: 'switch', p: 'scene.show', l: '상황판 보이기', sub: '끄면 배경에서 상황판을 숨겨요' },
      { t: 'text', p: 'scene.place', l: '현재 장소', ph: '예) 골목길', show: () => state.scene.show !== false },
      { t: 'text', p: 'scene.alive', l: '생존 인원', ph: '예) 31', show: () => state.scene.show !== false },
      { t: 'text', p: 'scene.total', l: '전체 인원', ph: '예) 31', show: () => state.scene.show !== false },
    ] },
    { sec: 'HTML 상자', note: '글 속 ![](box:…) 줄을 옮기면 상자 위치도 바뀌어요. 미리보기에서 상자를 눌러도 고칠 수 있어요.', show: () => Object.keys(state.boxes || {}).length > 0, rows: [{ t: 'boxes' }] },
    { sec: '미니홈피', show: () => bgUsesHompy(), rows: [
      { t: 'color', p: 'hompy.frame', l: '프레임 색' },
      { t: 'color', p: 'hompy.bg', l: '배경 색' },
      { t: 'swatches', keys: ['hompy.frame', 'hompy.bg'], o: HOMPY_COLORS },
      { t: 'text', p: 'hompy.today', l: 'TODAY', ph: '예) 25' },
      { t: 'text', p: 'hompy.total', l: 'TOTAL', ph: '예) 1004' },
    ] },
    { sec: '다이어리', show: () => bgUsesDiary(), rows: [
      { t: 'color', p: 'diary.color', l: '다이어리 색' },
      { t: 'swatches', keys: ['diary.color'], o: DIARY_COLORS },
      { t: 'text', p: 'diary.date', l: '날짜', ph: '비워두면 오늘 날짜' },
      { t: 'seg', p: 'diary.weather', l: '날씨', o: [...WEATHERS.map(([k, l]) => [k, l]), ['none', '없음']], block: true },
    ] },
    { sec: '메모지', show: () => bgUsesMemo(), rows: [
      { t: 'text', p: 'diary.memoTitle', l: '메모 제목', ph: '예) to do ♡' },
      { t: 'area', p: 'diary.todo', l: '메모 내용', sub: '한 줄에 하나씩 · 최대 5줄', ph: '✓ 장보기\n☐ 헬스장 등록' },
    ] },
    { sec: '키링', show: () => bgUsesBeads(), rows: [
      { t: 'switch', p: 'diary.keyring', l: '키링 보이기' },
      { t: 'text', p: 'diary.beads', l: '키링 글자', ph: '예) LOVE · 이니셜 (최대 6자)', show: () => state.diary.keyring !== false },
    ] },
    { sec: '마이룸', note: '사진을 넣지 않으면 기본 방이 보여요.', show: () => bgUsesHompy(), rows: [
      { t: 'roomImg', p: 'hompy.room' },
      { t: 'text', p: 'hompy.say', l: '말풍선', ph: '예) 안녕하세요 · 비워두면 숨겨요' },
    ] },
    { sec: 'TALK! TALK!', note: '한마디를 비워 둔 줄은 보이지 않아요. 3~5줄이 가장 잘 어울려요.', show: () => bgUsesHompy(), rows: [
      { t: 'talk', p: 'hompy.talk' },
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
      { t: 'slider', p: 'bubble.gap', l: '말풍선 사이 간격', sub: '말풍선과 나레이션 사이는 이 값과 문단 간격 중 큰 값', min: 0, max: 48, step: 1, u: 'px' },
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
      { t: 'seg', p: 'bubble.namePos', l: '이름 위치', o: [['top', '말풍선 위'], ['side', '말풍선 옆']], when: () => state.bubble.showName },
      { t: 'slider', p: 'bubble.nameW', l: '이름 칸 너비', sub: '0이면 이름 길이에 맞춰요', min: 0, max: 160, step: 2, u: 'px', show: () => state.bubble.namePos === 'side', when: () => state.bubble.showName },
      { t: 'slider', p: 'bubble.nameSize', l: '이름 크기', min: 8, max: 24, step: 0.5, u: 'px', when: () => state.bubble.showName , pt: true },
      { t: 'color', p: 'bubble.nameColor', l: '이름 색', when: () => state.bubble.showName },
    ] },
  ],
  typo: [
    { sec: '본문 글자', note: '나레이션(말풍선 밖 글)의 글자예요. 긴 글은 한 줄 25~35자, 행간 1.6~1.8일 때 가장 읽기 편해요.', rows: [
      { t: 'font', p: 'typo.font', c: 'typo.fontCustom' },
      { t: 'slider', p: 'typo.size', l: '크기', min: 10, max: 40, step: 0.5, u: 'px', pt: true },
      { t: 'select', p: 'typo.weight', l: '굵기', o: WEIGHTS, num: true },
      { t: 'color', p: 'typo.color', l: '색' },
      { t: 'slider', p: 'typo.lh', l: '행간', min: 1, max: 3, step: 0.05, u: '' },
      { t: 'slider', p: 'typo.ls', l: '자간', min: -0.1, max: 0.3, step: 0.005, u: 'em' },
      { t: 'measure' },
    ] },
    { sec: '문단', note: '‘이어지는 문단만’은 글 첫 문단 · 장면 전환 · 말풍선 바로 다음 문단은 들여쓰지 않아요.', rows: [
      { t: 'seg', p: 'typo.align', l: '정렬', o: ALIGN4, block: true },
      { t: 'seg', p: 'typo.alignLast', l: '양쪽 정렬 마지막 줄', o: [['auto', '왼쪽'], ['center', '가운데'], ['justify', '양쪽']], block: true, show: () => state.typo.align === 'justify' },
      { t: 'slider', p: 'typo.gap', l: '문단 간격', sub: '0이면 문단 사이를 띄우지 않아요', min: 0, max: 40, step: 1, u: 'px' },
      { t: 'switch', p: 'typo.indentOn', l: '첫 줄 들여쓰기' },
      { t: 'slider', p: 'typo.indent', l: '들여쓰기 폭', min: 0.5, max: 4, step: 0.5, u: 'em', show: () => !!state.typo.indentOn },
      { t: 'seg', p: 'typo.indentWhere', l: '들여쓸 문단', o: [['all', '모든 문단'], ['cont', '이어지는 문단만']], block: true, show: () => !!state.typo.indentOn },
      { t: 'slider', p: 'typo.measure', l: '최대 행 길이', sub: '0이면 제한 없음', min: 0, max: 60, step: 1, u: '자' },
      { t: 'switch', p: 'typo.dropcap', l: '드롭캡', sub: '첫 문단의 첫 글자를 여러 줄 높이로 크게' },
      { t: 'slider', p: 'typo.dropLines', l: '드롭캡 높이', min: 2, max: 4, step: 1, u: '줄', show: () => !!state.typo.dropcap },
    ] },
    { sec: '줄바꿈 · 조판', note: '본문과 말풍선 글자에 함께 적용돼요.', rows: [
      { t: 'seg', p: 'typo.wordBreak', l: '줄바꿈 단위', o: [['auto', '자동'], ['word', '어절'], ['char', '글자']], block: true },
      { t: 'switch', p: 'typo.noOrphan', l: '마지막 줄 외톨이 방지', sub: '문단 마지막 줄에 한 단어만 남지 않게 묶어요' },
      { t: 'slider', p: 'typo.ws', l: '단어 간격', min: -0.2, max: 0.6, step: 0.01, u: 'em' },
      { t: 'switch', p: 'typo.kern', l: '커닝', sub: '서체에 들어 있는 글자 쌍 간격 정보를 써요' },
      { t: 'switch', p: 'typo.palt', l: '문장부호 폭 맞춤', sub: '따옴표 · 마침표 같은 전각 문장부호의 빈 여백을 줄여요 (지원 서체만)' },
    ] },
    { sec: '강조 · 괄호', rows: [
      { t: 'color', p: 'typo.hl', l: '형광펜 색', sub: '텍스트 편집창의 형광펜 버튼에서도 바꿀 수 있어요' },
      { t: 'seg', p: 'typo.hlStyle', l: '형광펜 모양', o: [['under', '밑줄형'], ['thin', '얇게'], ['full', '전체']] },
      { t: 'switch', p: 'typo.paren.on', l: '괄호 안 글자 따로 꾸미기', sub: '( ) 안의 글자를 본문 · 말풍선과 다르게', rebuild: true },
      { t: 'slider', p: 'typo.paren.scale', l: '괄호 글자 크기', sub: '둘레 글자에 대한 비율', min: 50, max: 130, step: 1, u: '%', show: () => state.typo.paren.on },
      { t: 'select', p: 'typo.paren.weight', l: '괄호 글자 굵기', o: [[0, '둘레와 같게'], ...WEIGHTS], num: true, show: () => state.typo.paren.on },
      { t: 'switch', p: 'typo.paren.italic', l: '기울임', show: () => state.typo.paren.on },
      { t: 'switch', p: 'typo.paren.colorOn', l: '다른 색', show: () => state.typo.paren.on },
      { t: 'color', p: 'typo.paren.color', l: '괄호 글자 색', show: () => state.typo.paren.on && state.typo.paren.colorOn },
      { t: 'switch', p: 'typo.paren.fontOn', l: '다른 서체', show: () => state.typo.paren.on },
      { t: 'font', p: 'typo.paren.font', c: 'typo.paren.fontCustom', l: '괄호 글자 서체', show: () => state.typo.paren.on && state.typo.paren.fontOn },
    ] },
    { sec: '옆 메모', note: '텍스트 편집창의 ‘메모’나, 문장 바로 아랫줄에 >> 멘트 를 쓰면 달려요.', rows: [
      { t: 'seg', p: 'typo.note.pos', l: '위치', o: [['side', '오른쪽 옆'], ['below', '바로 아래']], block: true },
      { t: 'slider', p: 'typo.note.w', l: '메모 칸 너비', min: 15, max: 50, step: 1, u: '%', show: () => state.typo.note.pos !== 'below' },
      { t: 'slider', p: 'typo.note.scale', l: '글자 크기', sub: '본문 글자에 대한 비율', min: 50, max: 110, step: 1, u: '%' },
      { t: 'color', p: 'typo.note.color', l: '색' },
      { t: 'seg', p: 'typo.note.mark', l: '선 끝 모양', o: [['dot', '원'], ['arrow', '화살표'], ['line', '선만'], ['none', '선 없음']], block: true },
    ] },
    { sec: '말풍선 글자', rows: [
      { t: 'font', p: 'bubble.font', c: 'bubble.fontCustom' },
      { t: 'slider', p: 'bubble.size', l: '크기', min: 10, max: 36, step: 0.5, u: 'px', pt: true },
      { t: 'select', p: 'bubble.weight', l: '굵기', o: WEIGHTS, num: true },
      { t: 'slider', p: 'bubble.lh', l: '행간', min: 1, max: 2.6, step: 0.05, u: '' },
      { t: 'slider', p: 'bubble.ls', l: '자간', min: -0.1, max: 0.3, step: 0.005, u: 'em' },
    ] },
    { sec: '제목', rows: [
      { t: 'font', p: 'head.font', c: 'head.fontCustom' },
      { t: 'slider', p: 'head.size', l: '크기', min: 12, max: 64, step: 1, u: 'px', pt: true },
      { t: 'select', p: 'head.weight', l: '굵기', o: WEIGHTS, num: true },
      { t: 'color', p: 'head.color', l: '색' },
      { t: 'seg', p: 'head.align', l: '정렬', o: ALIGN3 },
      { t: 'switch', p: 'head.quoteMark', l: '장식 따옴표', sub: '첫 장 위에 큰 따옴표를 넣어요' },
      { t: 'color', p: 'head.accent', l: '장식 색', when: () => state.head.quoteMark },
    ] },
    { sec: '출처', note: '작품명과 제작자를 따로 꾸밀 수 있어요.', rows: [
      { t: 'seg', p: 'head.creditLayout', l: '배치', o: [['inline', '한 줄로'], ['stack', '두 줄로']] },
      { t: 'seg', p: 'head.creditAlign', l: '정렬', o: ALIGN3 },
      { t: 'sub', l: '작품명' },
      { t: 'font', p: 'head.creditFont', c: 'head.creditFontCustom' },
      { t: 'slider', p: 'head.creditSize', l: '크기', min: 8, max: 28, step: 0.5, u: 'px', pt: true },
      { t: 'select', p: 'head.creditWeight', l: '굵기', o: WEIGHTS, num: true },
      { t: 'color', p: 'head.creditColor', l: '색' },
      { t: 'sub', l: '제작자' },
      { t: 'font', p: 'head.creatorFont', c: 'head.creatorFontCustom' },
      { t: 'slider', p: 'head.creatorSize', l: '크기', min: 8, max: 28, step: 0.5, u: 'px', pt: true },
      { t: 'select', p: 'head.creatorWeight', l: '굵기', o: WEIGHTS, num: true },
      { t: 'color', p: 'head.creatorColor', l: '색' },
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
    { sec: '저장 폴더', rows: [{ t: 'folder' }] },
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

    case 'sub':
      el = h('div', { class: 'row row-sub' }, d.l);
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
      const ptText = (v) => `인쇄 기준 약 ${+(v * 0.75).toFixed(1)}pt`;
      const lab = labelEl(d.l, d.pt ? ptText(val) : (d.sub || null));
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
      el = h('div', { class: 'row stack' }, labelEl(d.l || '서체'), btn);
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

    case 'swatches': {
      const row = h('div', { class: 'hp-swatches' });
      d.o.forEach(([l, ...vals]) => {
        const b = h('button', { type: 'button', class: 'hp-sw', title: l, 'aria-label': `${l} 색` }, h('i'), h('span', {}, l));
        b.firstChild.style.background = vals[0];
        if (vals[1]) b.firstChild.style.boxShadow = `inset 0 0 0 4px ${vals[1]}`;
        b.addEventListener('click', () => {
          d.keys.forEach((k, i) => { const ks = k.split('.'); const last = ks.pop(); ks.reduce((o, x) => o[x], state)[last] = vals[i]; });
          changed(); commit(); buildFields();
        });
        row.append(b);
      });
      el = h('div', { class: 'row stack' }, labelEl(d.keys.length > 1 ? '추천 색 조합' : '추천 색'), row);
      break;
    }

    case 'area':
      el = h('div', { class: 'row stack' }, labelEl(d.l, d.sub),
        h('textarea', { class: 'input area-input', rows: 5, placeholder: d.ph || '', oninput: (e) => setPath(d.p, e.target.value) }, val || ''));
      break;

    case 'roomImg': {
      const thumb = h('span', { class: 'img-thumb' });
      const clear = h('button', { type: 'button', class: 'icon-btn sm danger', 'aria-label': '사진 지우기', html: icon('trash'), onclick: () => { setPath(d.p, ''); refresh(); } });
      const refresh = () => { thumb.style.backgroundImage = getPath(d.p) ? `url("${getPath(d.p)}")` : ''; clear.hidden = !getPath(d.p); };
      const input = h('input', { type: 'file', accept: 'image/*', hidden: true });
      input.addEventListener('change', async () => {
        const f = input.files[0];
        input.value = '';
        if (f) { try { setPath(d.p, await shrinkImage(f, 900, false)); commit(); } catch (e) { toast('이미지를 읽지 못했어요'); } refresh(); }
      });
      const urlIn = h('input', { type: 'url', class: 'input', placeholder: 'https://… 이미지 주소', 'aria-label': '마이룸 이미지 링크' });
      const go = async () => {
        const url = urlIn.value.trim();
        if (!/^https?:/i.test(url)) { toast('https:// 로 시작하는 이미지 링크를 넣어 주세요'); return; }
        try {
          const r = await fetch(url);
          if (!r.ok) throw new Error(r.status);
          const blob = await r.blob();
          if (!/^image\//.test(blob.type)) throw new Error('type');
          setPath(d.p, await shrinkImage(blob, 900, false));
          toast('링크의 사진을 넣었어요');
        } catch (e) {
          toast('이 링크는 외부에서 가져오는 걸 막아 두었어요 · 사진을 저장한 뒤 파일로 넣어 주세요', null, 4200);
          return;
        }
        commit(); urlIn.value = ''; refresh();
      };
      urlIn.addEventListener('keydown', (e) => { if (e.key === 'Enter' && !e.isComposing) go(); });
      el = h('div', { class: 'row stack' },
        h('div', { class: 'row-top' }, labelEl('마이룸 사진'), h('div', { class: 'img-field' }, clear, thumb, h('label', { class: 'btn btn-sm' }, '파일', input))),
        h('div', { class: 'photo-url' }, urlIn, h('button', { type: 'button', class: 'btn btn-sm', onclick: go }, '링크')));
      refresh();
      break;
    }

    case 'talk': {
      const list = getPath(d.p);
      while (list.length < 5) list.push({ name: '', text: '' });
      const box = h('div', { class: 'talk-rows' });
      list.slice(0, 5).forEach((t, i) => {
        box.append(h('div', { class: 'talk-row' },
          h('input', { type: 'text', class: 'input talk-text', value: t.text, placeholder: `한마디 ${i + 1}`, 'aria-label': `한마디 ${i + 1}`, oninput: (e) => { t.text = e.target.value; changed(); } }),
          h('input', { type: 'text', class: 'input talk-name', value: t.name, placeholder: '이름', 'aria-label': `한마디 ${i + 1} 이름`, oninput: (e) => { t.name = e.target.value; changed(); } })));
      });
      el = h('div', { class: 'row stack' }, box);
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

    case 'folder': {
      el = h('div', { class: 'row stack folder-row', id: 'folder-row' });
      setTimeout(updateFolderUI);
      break;
    }

    case 'boxes': {
      el = h('div', { class: 'row stack box-list' });
      const ids = Object.keys(state.boxes || {}).filter((id) => state.text.includes(`(box:${id})`));
      if (!ids.length) el.append(h('small', { class: 'muted' }, '아직 넣은 상자가 없어요'));
      ids.forEach((id) => {
        const bx = state.boxes[id];
        const pr = BOX_PRESETS[bx.preset] || BOX_PRESETS.custom;
        const btn = h('button', { type: 'button', class: 'box-item', onclick: () => {
          const f = $(`#stage .hbox[data-box="${CSS.escape(id)}"]`);
          if (f) { f.scrollIntoView({ block: 'center', behavior: 'smooth' }); setTimeout(() => openBoxPop(f, id), 250); } else openBoxPop(btn, id);
        } }, h('b', {}, pr.name), h('span', {}, (bx.head || bx.text || '').split('\n')[0].slice(0, 30) || '(내용 없음)'), h('em', {}, '고치기'));
        el.append(btn);
      });
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
        const parts = [h('div', { class: 'section-title' }, s.sec), ...body.filter(Boolean)];
        if (s.show) parts.forEach((el) => conditions.push({ el, when: s.show, hide: true }));
        box.append(...parts);
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

function openPop(content, anchor, onClose, opts = {}) {
  closePop();
  pop.innerHTML = '';
  pop.append(content);
  pop.hidden = false;
  popAnchor = anchor && anchor.nodeType ? anchor : null;
  popOnClose = onClose || null;
  const sheet = isMobile();
  pop.classList.toggle('sheet', sheet);
  pop.classList.toggle('compact', !!opts.beside);
  pop.style.left = pop.style.top = '';
  if (sheet) return;
  const pr = pop.getBoundingClientRect();
  let x, y;
  if (opts.beside) {
    // 이미지 설정: 이미지를 가리지 않도록 오른쪽 → 왼쪽 → 아래 → 위 순서로 빈 곳에
    const r = opts.beside.getBoundingClientRect();
    const g = 14;
    if (r.right + g + pr.width <= innerWidth - 12) { x = r.right + g; y = r.top; }
    else if (r.left - g - pr.width >= 12) { x = r.left - g - pr.width; y = r.top; }
    else if (r.bottom + g + pr.height <= innerHeight - 12) { x = r.left + r.width / 2 - pr.width / 2; y = r.bottom + g; }
    else { x = r.left + r.width / 2 - pr.width / 2; y = r.top - g - pr.height; }
  } else if (popAnchor) {
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
      h('div', { class: 'pop-label' }, '말풍선 안 사진'),
      bubblePhotoRow(key, o, () => wrap.replaceWith(build())),
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
  if (e.target.closest('.sticker') || e.target.closest('.rs-handle')) return;
  const fig = e.target.closest('.inline-img');
  if (fig) { selectImage('inline', fig.dataset.img); return; }
  const hb = e.target.closest('.hbox');
  if (hb) { openBoxPop(hb, hb.dataset.box); return; }
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
  // 긴 글이라 그리는 데 오래 걸리면 입력이 멈출 때까지 조금 더 기다렸다 그림 (글자 입력이 끊기지 않게)
  srcTimer = setTimeout(changed, Math.min(450, 120 + lastRenderMs * 2));
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
  // 글자색: 누르면 고른 부분에 칠하기, 옆 화살표로 색 고르기 · 지우기
  const tcSw = h('span', { class: 'tc-bar' });
  tcSw.style.background = state.typo.tc || '#e8506a';
  const tcMain = h('button', { type: 'button', class: 'ft ft-tc', title: '글자색 (고른 부분)', 'aria-label': '글자색', onmousedown: keep, onclick: () => applyTextColor(state.typo.tc || '#e8506a') },
    h('span', { class: 'tc-a' }, 'A'), tcSw);
  const tcMore = h('button', { type: 'button', class: 'ft ft-more', title: '글자색 고르기', 'aria-label': '글자색 고르기', onmousedown: keep, html: icon('chevdown') });
  tcMore.addEventListener('click', () => openTextColorPop(tcMore));
  bar.append(h('span', { class: 'ft-group' }, tcMain, tcMore));
  const annoBtn = h('button', { type: 'button', class: 'ft ft-img', title: '옆 메모 (커서가 있는 문장 · 말풍선 · 이미지 옆에 멘트)', 'aria-label': '옆 메모', onmousedown: keep, html: icon('pen') + '<span>메모</span>' });
  annoBtn.addEventListener('click', () => openNotePop(annoBtn));
  bar.append(annoBtn);
  bar.append(h('span', { class: 'ft-sep' }));
  bar.append(h('button', { type: 'button', class: 'ft ft-text', title: '이름 없는 대사', onmousedown: keep, onclick: () => insertSnippet('"', '"') }, '“대사”'));
  bar.append(h('button', { type: 'button', class: 'ft ft-text', title: '구분선 넣기', onmousedown: keep, onclick: () => insertSnippet('---\n', '', true) }, '구분선'));
  const imgBtn = h('button', { type: 'button', class: 'ft ft-img', title: '이미지 넣기', 'aria-label': '이미지 넣기', onmousedown: keep, html: icon('image') + '<span>이미지</span>' });
  imgBtn.addEventListener('click', () => openImageInsertPop(imgBtn));
  bar.append(imgBtn);
  const boxBtn = h('button', { type: 'button', class: 'ft ft-img', title: 'HTML 상자 넣기 (코르크판 · 삐삐 · 포스트잇 등)', 'aria-label': 'HTML 상자 넣기', onmousedown: keep, html: icon('frame') + '<span>상자</span>' });
  boxBtn.addEventListener('click', () => openBoxInsertPop(boxBtn));
  bar.append(boxBtn);
  bar.append(h('button', { type: 'button', class: 'ft ft-img', title: `찾아 바꾸기 (${modName}+F)`, 'aria-label': '찾아 바꾸기', onclick: () => openFind(), html: icon('search') + '<span>찾기</span>' }));
}


/* =========================================================
   HTML 상자: 글 사이에 직접 만든 HTML(코르크판 · 삐삐 등)을 넣고, 그 안 글은 따로 씀
   - 상자 CSS는 그 상자 안에서만 쓰이도록 선택자 앞에 상자 이름을 붙임
   - {{머리글}} · {{내용}} 자리에 상자마다 입력한 글이 들어감
   ========================================================= */
const BOX_PRESETS = {
  status: { name: '상태창', head: '클로드', text: '칭호: 캘리포니아 상원의원\n상태: 짜증',
    // 상자 편집 창에 나오는 입력 칸: [키, 이름, 기본값] (한 줄에 둘씩)
    fields: [
      [['lv', '레벨', '39']],
      [['hp', 'HP', '123'], ['hpMax', 'HP 최대', '150']],
      [['mp', 'MP', '55'], ['mpMax', 'MP 최대', '100']],
      [['exp', 'EXP (%)', '93']],
      [['s1', '능력치 1', '매력'], ['v1', '값', '999']],
      [['s2', '능력치 2', '귀여움'], ['v2', '값', '∞']],
      [['s3', '능력치 3', '체력'], ['v3', '값', '12']],
      [['s4', '능력치 4', '행운'], ['v4', '값', '77']],
    ],
    code: `<style>
  .x-st { max-width: 22em; margin: 0 auto; padding: .28em; border-radius: 1.1em;
    background: linear-gradient(135deg, #ffd3e6, #dcd3ff 55%, #cdeeff); box-shadow: 0 .45em 1.1em rgba(150,110,200,.28); }
  .x-in { padding: .9em 1em 1em; border-radius: .9em; background: rgba(255,255,255,.88); color: #4a3a5c; }
  .x-top { display: flex; align-items: center; gap: .65em; margin-bottom: .75em; }
  .x-av { display: grid; place-items: center; flex: none; width: 2.6em; height: 2.6em; border-radius: 50%; color: #ff6f9f;
    background: radial-gradient(circle at 35% 30%, #fff, #ffd0e2); box-shadow: inset 0 0 0 .14em #fff, 0 0 0 .12em #f6a6c4; }
  .x-name { font-weight: 800; font-size: 1.05em; color: #5b3a7a; }
  .x-name:empty::before { content: 'PLAYER'; }
  .x-lv { margin-left: auto; padding: .18em .65em; border-radius: 1em; font-size: .72em; font-weight: 800; color: #fff;
    background: linear-gradient(180deg, #b892ff, #8f68e8); box-shadow: 0 .1em 0 #6d4cc4; }
  .x-bar { display: flex; align-items: center; gap: .5em; margin: .32em 0; font-size: .74em; font-weight: 800; }
  .x-bar b { width: 2.4em; letter-spacing: .04em; }
  .x-bar i { position: relative; flex: 1; height: .75em; border-radius: 1em; background: #eee6f5; box-shadow: inset 0 .08em .12em rgba(0,0,0,.08); overflow: hidden; }
  .x-bar i::after { content: ''; position: absolute; inset: 0 auto 0 0; width: var(--v); border-radius: 1em; background: var(--c); }
  .x-bar span { width: 4.6em; text-align: right; color: #8a7a9c; font-variant-numeric: tabular-nums; }
  .x-hp { --c: linear-gradient(90deg, #ff8fb1, #ff5f8f); }
  .x-mp { --c: linear-gradient(90deg, #8fd0ff, #5b9dff); }
  .x-ex { --c: linear-gradient(90deg, #ffe48a, #ffc23d); }
  .x-stat { display: grid; grid-template-columns: 1fr 1fr; gap: .3em .9em; margin: .75em 0 .2em; padding-top: .65em; border-top: .1em dashed #e3d8ef; font-size: .82em; }
  .x-stat div { display: flex; justify-content: space-between; }
  .x-stat em { font-style: normal; font-weight: 800; color: #ff6f9f; }
  .x-txt { margin-top: .7em; padding: .6em .8em; border-radius: .6em; background: #f7f1ff; white-space: pre-wrap; line-height: 1.6; font-size: .9em; }
</style>
<div class="x-st"><div class="x-in">
  <div class="x-top"><span class="x-av">♥</span><span class="x-name">{{머리글}}</span><span class="x-lv">Lv.{{lv}}</span></div>
  <div class="x-bar x-hp" style="--v: {{%hp/hpMax}}"><b>HP</b><i></i><span>{{hp}}/{{hpMax}}</span></div>
  <div class="x-bar x-mp" style="--v: {{%mp/mpMax}}"><b>MP</b><i></i><span>{{mp}}/{{mpMax}}</span></div>
  <div class="x-bar x-ex" style="--v: {{%exp/100}}"><b>EXP</b><i></i><span>{{exp}}%</span></div>
  <div class="x-stat"><div>{{s1}} <em>{{v1}}</em></div><div>{{s2}} <em>{{v2}}</em></div><div>{{s3}} <em>{{v3}}</em></div><div>{{s4}} <em>{{v4}}</em></div></div>
  <div class="x-txt">{{내용}}</div>
</div></div>` },
  pager: { name: '삐삐', head: '1004', text: '8282 보고 싶어\n486', code: `<style>
  .x-pager { max-width: 22em; margin: 0 auto; padding: 1em 1.1em 1.1em; border-radius: 1.4em;
    background: linear-gradient(160deg, #474d55, #2b2f35); box-shadow: inset 0 .1em 0 rgba(255,255,255,.12), 0 .4em 1em rgba(0,0,0,.25); }
  .x-top { display: flex; justify-content: space-between; margin-bottom: .7em; font: 700 .68em/1 'Courier New', monospace; letter-spacing: .16em; color: #9aa4ad; }
  .x-lcd { padding: .9em 1em; border-radius: .45em; color: #26321d;
    background: repeating-linear-gradient(0deg, rgba(38,50,29,.05) 0 1px, transparent 1px 3px), linear-gradient(180deg, #c3d1ad, #aebd96);
    box-shadow: inset 0 .15em .4em rgba(0,0,0,.35); }
  .x-txt { font-family: 'Courier New', monospace; font-weight: 700; white-space: pre-wrap; line-height: 1.55; letter-spacing: .05em; }
  .x-btns { display: flex; justify-content: center; gap: .8em; margin-top: .9em; }
  .x-btns i { width: 2.2em; height: .65em; border-radius: 1em; background: #555c65; box-shadow: inset 0 .1em 0 rgba(255,255,255,.15); }
</style>
<div class="x-pager"><div class="x-top"><span>{{머리글}}</span><span>▮▮▮ 12:00</span></div><div class="x-lcd"><div class="x-txt">{{내용}}</div></div><div class="x-btns"><i></i><i></i><i></i></div></div>` },
  sticky: { name: '포스트잇', head: '', text: '잊지 말기!\n오늘 저녁 7시', code: `<style>
  .x-post { position: relative; max-width: 18em; margin: .6em auto 0; padding: 1.5em 1.3em 1.3em; color: #4a3d2c;
    background: linear-gradient(170deg, rgba(255,255,255,.3), transparent 45%, rgba(0,0,0,.04)), #fff1a8;
    transform: rotate(1.4deg); box-shadow: 0 .1em .15em rgba(0,0,0,.12), 0 .6em 1em -.4em rgba(0,0,0,.3); }
  .x-tape { position: absolute; top: -.65em; left: 50%; width: 5.5em; height: 1.4em; transform: translateX(-50%) rotate(-3deg);
    background: rgba(255,255,255,.55); box-shadow: 0 0 0 1px rgba(0,0,0,.04); }
  .x-head { font-weight: 700; margin-bottom: .4em; }
  .x-head:empty { display: none; }
  .x-body { white-space: pre-wrap; line-height: 1.7; }
</style>
<div class="x-post"><i class="x-tape"></i><div class="x-head">{{머리글}}</div><div class="x-body">{{내용}}</div></div>` },
  noti: { name: '문자 알림', head: '랑해', text: '지금 어디냐고', code: `<style>
  .x-noti { display: flex; gap: .75em; padding: .85em 1em; border-radius: 1.1em; color: #1c1c1e;
    background: rgba(246,246,248,.96); box-shadow: 0 .1em .2em rgba(0,0,0,.06), 0 .5em 1.2em rgba(0,0,0,.12); }
  .x-ico { position: relative; flex: none; width: 2.2em; height: 2.2em; border-radius: .6em; background: linear-gradient(#6ce27f, #2fbf4f); }
  .x-ico::after { content: ''; position: absolute; left: .45em; top: .55em; width: 1.3em; height: 1em; border-radius: 50%; background: #fff; }
  .x-main { flex: 1; min-width: 0; }
  .x-meta { display: flex; justify-content: space-between; font-size: .75em; color: #8a8f98; margin-bottom: .2em; }
  .x-from { font-weight: 700; font-size: .92em; }
  .x-from:empty { display: none; }
  .x-txt { white-space: pre-wrap; line-height: 1.5; font-size: .95em; }
</style>
<div class="x-noti"><i class="x-ico"></i><div class="x-main"><div class="x-meta"><span>메시지</span><span>지금</span></div><div class="x-from">{{머리글}}</div><div class="x-txt">{{내용}}</div></div></div>` },
  letter: { name: '편지지', head: 'Dear.', text: '잘 지내고 있지?\n오늘은 네 생각이 많이 났어.', code: `<style>
  .x-letter { padding: 1.4em 1.6em 1.5em; color: #4a3f36; border-radius: .3em;
    background: #fbf6ec;
    box-shadow: 0 .1em .2em rgba(0,0,0,.08), 0 .6em 1.2em -.4em rgba(0,0,0,.25); }
  .x-head { font-weight: 700; margin-bottom: .55em; letter-spacing: .02em; }
  .x-head:empty { display: none; }
  /* 줄마다 밑줄: 글 줄 높이와 같은 간격으로 */
  .x-body { white-space: pre-wrap; line-height: 1.75em;
    background: repeating-linear-gradient(180deg, transparent 0 calc(1.75em - 1px), rgba(170,140,110,.35) calc(1.75em - 1px) 1.75em); }
</style>
<div class="x-letter"><div class="x-head">{{머리글}}</div><div class="x-body">{{내용}}</div></div>` },
  quest: { name: '퀘스트 알림', head: '새로운 퀘스트', text: '친구 추가하기\n보상: 경험치 +100', code: `<style>
  .x-quest { max-width: 24em; margin: 0 auto; padding: .9em 1.2em 1em; text-align: center; color: #3b2a10; border-radius: .4em;
    background: linear-gradient(180deg, #fff6d8, #f3dfa6); border: .14em solid #b98a2e;
    box-shadow: inset 0 0 0 .22em #fff3cc, 0 .35em .9em rgba(80,50,0,.25); }
  .x-head { display: inline-block; margin-bottom: .55em; padding: .2em 1em; font-size: .78em; font-weight: 800; letter-spacing: .12em;
    color: #fff; background: #b98a2e; border-radius: 1em; }
  .x-head:empty { display: none; }
  .x-head::before { content: '! '; }
  .x-txt { white-space: pre-wrap; line-height: 1.65; font-weight: 600; }
</style>
<div class="x-quest"><div class="x-head">{{머리글}}</div><div class="x-txt">{{내용}}</div></div>` },
  receipt: { name: '영수증', head: '니니닝 상점', text: '아이스 아메리카노   4,500\n조각 케이크         6,800\n----------------------\n합계               11,300', code: `<style>
  .x-rc { max-width: 18em; margin: 0 auto; padding: 1.2em 1.2em 1.6em; color: #2a2a2a; background: #fdfdf8;
    font-family: 'Courier New', monospace; box-shadow: 0 .3em .8em rgba(0,0,0,.12);
    -webkit-mask: radial-gradient(circle at 50% 100%, transparent .35em, #000 .37em) 0 100% / .9em .7em repeat-x, linear-gradient(#000 0 0) 0 0 / 100% calc(100% - .6em) no-repeat;
    mask: radial-gradient(circle at 50% 100%, transparent .35em, #000 .37em) 0 100% / .9em .7em repeat-x, linear-gradient(#000 0 0) 0 0 / 100% calc(100% - .6em) no-repeat; }
  .x-head { text-align: center; font-weight: 700; letter-spacing: .15em; padding-bottom: .6em; margin-bottom: .6em; border-bottom: .1em dashed #999; }
  .x-head:empty { display: none; }
  .x-txt { white-space: pre-wrap; font-size: .88em; line-height: 1.6; }
  .x-foot { margin-top: .8em; text-align: center; font-size: .72em; letter-spacing: .2em; color: #777; }
</style>
<div class="x-rc"><div class="x-head">{{머리글}}</div><div class="x-txt">{{내용}}</div><div class="x-foot">THANK YOU</div></div>` },
  chalk: { name: '칠판', head: '오늘의 한마디', text: '포기하지 말자!', code: `<style>
  .x-board { padding: 1.3em 1.4em 1.5em; color: #f2f4ef; text-align: center; border-radius: .3em;
    background: radial-gradient(ellipse at 30% 20%, rgba(255,255,255,.07), transparent 60%), #2f4a3a;
    box-shadow: inset 0 0 0 .55em #8a6440, inset 0 0 0 .65em rgba(0,0,0,.2), 0 .4em 1em rgba(0,0,0,.2); }
  .x-head { font-size: .8em; letter-spacing: .1em; opacity: .75; margin-bottom: .5em; }
  .x-head:empty { display: none; }
  .x-txt { white-space: pre-wrap; line-height: 1.6; font-size: 1.15em; text-shadow: 0 0 .06em rgba(255,255,255,.6); }
</style>
<div class="x-board"><div class="x-head">{{머리글}}</div><div class="x-txt">{{내용}}</div></div>` },
  custom: { name: '직접 만들기', head: '머리글', text: '여기에 내용을 써요', code: `<style>
  /* 이 상자 안에서만 쓰이는 CSS예요. {{머리글}} · {{내용}} 자리에 입력한 글이 들어가요 */
  .x-box { padding: 1em 1.2em; border-radius: .7em; background: #ffffff; border: 1px solid #e5e8eb; }
  .x-box b { display: block; margin-bottom: .3em; }
  .x-box p { margin: 0; white-space: pre-wrap; }
</style>
<div class="x-box"><b>{{머리글}}</b><p>{{내용}}</p></div>` },
};
const boxCssCache = new Map();
const boxFontLinks = new Set();
/** 상자 CSS의 선택자 앞에 상자 이름을 붙여 그 상자 안에서만 쓰이게 함 (:root · html · body는 상자 자신) */
function scopeBoxCss(css, scope) {
  const key = scope + '\u0000' + css;
  if (boxCssCache.has(key)) return boxCssCache.get(key);
  // 웹폰트 @import 는 페이지에 한 번만 붙임 (저장할 때 글꼴도 함께 들어가도록 crossorigin)
  css = css.replace(/@import\s+(?:url\()?\s*['"]?([^'")\s;]+)['"]?\s*\)?[^;]*;/g, (m, href) => {
    if (/^https:\/\//.test(href) && !boxFontLinks.has(href)) {
      boxFontLinks.add(href);
      document.head.insertBefore(h('link', { rel: 'stylesheet', href, crossorigin: 'anonymous' }), $('#gen-style'));
    }
    return '';
  });
  const d = document.implementation.createHTMLDocument('');
  const st = d.createElement('style');
  st.textContent = css;
  d.head.append(st);
  const pre = (sel) => sel.split(',').map((x) => {
    x = x.trim();
    if (/^(:root|html|body)$/i.test(x)) return scope;
    return `${scope} ${x.replace(/^(:root|html|body)\b\s*/i, '')}`;
  }).join(', ');
  const walk = (rules) => [...rules].map((r) => {
    if (r.type === CSSRule.STYLE_RULE) return `${pre(r.selectorText)}{${r.style.cssText}}`;
    if (r.type === CSSRule.MEDIA_RULE) return `@media ${r.media.mediaText}{${walk(r.cssRules)}}`;
    if (r.type === CSSRule.SUPPORTS_RULE) return `@supports ${r.conditionText}{${walk(r.cssRules)}}`;
    if (r.type === CSSRule.IMPORT_RULE) return '';
    return r.cssText; // @keyframes · @font-face
  }).join('\n');
  let out = '';
  try { out = walk(st.sheet.cssRules); } catch (e) { out = ''; }
  boxCssCache.set(key, out);
  return out;
}
/** 상자 HTML: 위험한 태그 · 속성은 빼고, {{머리글}} · {{내용}} 자리를 채움 */
function boxHtml(bx) {
  const code = bx.code || '';
  const css = [...code.matchAll(/<style[^>]*>([\s\S]*?)<\/style>/gi)].map((m) => m[1]).join('\n');
  const val = (k) => {
    const f = boxFields(bx).find(([key]) => key === k);
    let v = bx.vals && k in bx.vals ? bx.vals[k] : f ? f[2] : null;
    if (v == null) return null;
    if (k === 'lv') v = String(v).replace(/^\s*lv\.?\s*/i, ''); // 'Lv.39'처럼 써도 Lv가 두 번 나오지 않게
    return String(v);
  };
  const num = (k) => (/^\d+(\.\d+)?$/.test(k) ? +k : parseFloat(val(k)));
  const body = code.replace(/<style[^>]*>[\s\S]*?<\/style>/gi, '')
    .replace(/\{\{\s*(머리글|head)\s*\}\}/gi, () => esc(bx.head || ''))
    .replace(/\{\{\s*(내용|text)\s*\}\}/gi, () => fmt(bx.text || ''))
    .replace(/\{\{\s*%\s*([\w.]+)\s*\/\s*([\w.]+)\s*\}\}/g, (m, a, b) => {
      const x = num(a), y = num(b);
      return `${y > 0 && x >= 0 ? Math.max(0, Math.min(100, (x / y) * 100)).toFixed(1) : 0}%`;
    })
    .replace(/\{\{\s*(\w+)\s*\}\}/g, (m, k) => { const v = val(k); return v == null ? m : esc(v); });
  const doc = new DOMParser().parseFromString(`<body>${body}</body>`, 'text/html');
  doc.querySelectorAll('script, iframe, object, embed, link, meta, base, form').forEach((el) => el.remove());
  doc.querySelectorAll('*').forEach((el) => {
    for (const a of [...el.attributes]) {
      if (/^on/i.test(a.name) || /^\s*javascript:/i.test(a.value)) el.removeAttribute(a.name);
    }
  });
  return { css, html: doc.body.innerHTML };
}
// 상자의 추가 입력 칸 목록 [키, 이름, 기본값] (넣을 때 모양에서 복사해 두므로 코드를 고쳐도 유지)
function boxFields(bx) {
  const rows = bx.fields || (BOX_PRESETS[bx.preset] || {}).fields || [];
  return rows.flat();
}
function boxFigure(id) {
  const bx = state.boxes[id];
  const scope = `.hb-${id.replace(/[^\w-]/g, '')}`;
  const { css, html } = boxHtml(bx);
  const fig = h('div', { class: `hbox align-${bx.align || 'center'}`, 'data-box': id, title: '눌러서 상자 글 · 크기 · 모양 고치기' });
  fig.style.setProperty('--box-w', `${bx.w || 100}%`);
  fig.innerHTML = `<style>${scopeBoxCss(css, scope)}</style><div class="hb-root ${scope.slice(1)}">${html}</div>`;
  return fig;
}
function boxLineIndex(id) {
  const lines = state.text.split('\n');
  return [lines, lines.findIndex((l) => l.trim().includes(`(box:${id})`))];
}
// 상자 줄을 한 문단 위 · 아래로 (빈 줄은 건너뜀)
function moveBox(id, dir) {
  const [lines, i] = boxLineIndex(id);
  if (i < 0) return;
  let j = i + dir;
  while (j >= 0 && j < lines.length && !lines[j].trim()) j += dir;
  if (j < 0 || j >= lines.length) return;
  const [line] = lines.splice(i, 1);
  lines.splice(dir < 0 ? j : j, 0, line);
  commit();
  state.text = lines.join('\n'); src.value = state.text;
  changed(); commit();
}
function removeBox(id) {
  const [lines, i] = boxLineIndex(id);
  if (i >= 0) lines.splice(i, 1);
  state.text = lines.join('\n'); src.value = state.text;
  const { [id]: _, ...rest } = state.boxes;
  state.boxes = rest;
}
function openBoxInsertPop(anchor) {
  const tiles = h('div', { class: 'box-presets' });
  Object.entries(BOX_PRESETS).forEach(([k, pr]) => {
    tiles.append(h('button', { type: 'button', class: 'box-preset', onclick: () => {
      closePop();
      const id = newId();
      state.boxes = { ...(state.boxes || {}), [id]: { preset: k, code: pr.code, head: pr.head, text: pr.text, w: k === 'pager' || k === 'sticky' ? 70 : 100, align: 'center', fields: pr.fields ? copyState(pr.fields) : undefined, vals: pr.fields ? Object.fromEntries(pr.fields.flat().map(([fk, , dv]) => [fk, dv])) : undefined } };
      commit();
      insertSnippet(`![](box:${id})\n`, '', true);
      // 입력 반영을 기다리지 않고 바로 그려서 상자를 열어 줌
      clearTimeout(srcTimer); state.text = src.value; changed(); renderQueued = false; render();
      buildFields();
      const f = $(`#stage .hbox[data-box="${id}"]`);
      if (f) { f.scrollIntoView({ block: 'center' }); requestAnimationFrame(() => openBoxPop(f, id)); }
    } }, h('b', {}, pr.name)));
  });
  openPop(h('div', {}, h('div', { class: 'pop-title' }, 'HTML 상자 넣기'),
    h('p', { class: 'pop-note', style: 'margin:0 2px 10px' }, '커서가 있는 곳에 상자를 넣어요. 상자 안 글은 따로 써요.'), tiles), anchor);
}
function openBoxPop(anchor, id) {
  const bx = state.boxes[id];
  if (!bx) return;
  const upd = (patch, rebuild) => {
    state.boxes = { ...state.boxes, [id]: { ...state.boxes[id], ...patch } };
    changed();
    if (rebuild) setTimeout(() => { const f = $(`#stage .hbox[data-box="${CSS.escape(id)}"]`); if (f) openBoxPop(f, id); }, 60);
  };
  const usesHead = /\{\{\s*(머리글|head)\s*\}\}/i.test(bx.code);
  const headIn = h('input', { type: 'text', class: 'input', value: bx.head || '', placeholder: '머리글 (비우면 숨김)', oninput: (e) => upd({ head: e.target.value }) });
  const textIn = h('textarea', { class: 'input area-input', rows: 4, placeholder: '상자 안에 들어갈 글', oninput: (e) => upd({ text: e.target.value }) }, bx.text || '');
  const out = h('output', {}, `${bx.w || 100}%`);
  const sl = h('input', { type: 'range', class: 'slider', min: 20, max: 100, step: 1, value: bx.w || 100 });
  sl.style.setProperty('--p', `${((bx.w || 100) - 20) / 80 * 100}%`);
  sl.addEventListener('input', () => { out.textContent = `${sl.value}%`; sl.style.setProperty('--p', `${(sl.value - 20) / 80 * 100}%`); upd({ w: +sl.value }); });
  const presetSel = h('select', { class: 'select', 'aria-label': '상자 모양' },
    Object.entries(BOX_PRESETS).map(([k, pr]) => h('option', { value: k }, pr.name)));
  presetSel.value = bx.preset in BOX_PRESETS ? bx.preset : 'custom';
  presetSel.addEventListener('change', () => {
    const k = presetSel.value;
    const edited = BOX_PRESETS[bx.preset] && bx.code !== BOX_PRESETS[bx.preset].code;
    if (edited && !confirm('고친 HTML 코드가 새 모양으로 바뀌어요. 바꿀까요?')) { presetSel.value = bx.preset; return; }
    const np = BOX_PRESETS[k];
    commit(); upd({ preset: k, code: np.code, fields: np.fields ? copyState(np.fields) : undefined, vals: np.fields ? { ...Object.fromEntries(np.fields.flat().map(([fk, , dv]) => [fk, dv])), ...(state.boxes[id].vals || {}) } : state.boxes[id].vals }, true); commit();
  });
  const codeIn = h('textarea', { class: 'input code-input', rows: 8, spellcheck: 'false' }, bx.code);
  let codeT;
  codeIn.addEventListener('input', () => { clearTimeout(codeT); codeT = setTimeout(() => upd({ code: codeIn.value, preset: 'custom' }), 350); });
  const [, li] = boxLineIndex(id);
  const fieldRows = bx.fields || (BOX_PRESETS[bx.preset] || {}).fields || [];
  const fieldsEl = fieldRows.length ? h('div', { class: 'box-fields' }, fieldRows.map((row) => h('div', { class: 'bf-row' }, row.map(([fk, fl, dv]) => {
    const cur = bx.vals && fk in bx.vals ? bx.vals[fk] : dv;
    return h('label', { class: 'bf' }, h('span', {}, fl),
      h('input', { type: 'text', class: 'input', value: cur, placeholder: dv, oninput: (e) => upd({ vals: { ...(state.boxes[id].vals || {}), [fk]: e.target.value } }) }));
  })))) : null;
  openPop(h('div', { class: 'box-pop' },
    h('div', { class: 'pop-title' }, `HTML 상자 · ${(BOX_PRESETS[bx.preset] || BOX_PRESETS.custom).name}`),
    usesHead ? h('div', { class: 'pop-label' }, '머리글') : null, usesHead ? headIn : null,
    h('div', { class: 'pop-label' }, '내용'), textIn,
    fieldsEl ? h('div', { class: 'pop-label' }, '수치') : null, fieldsEl,
    h('div', { class: 'pop-label row-top' }, '폭', out), sl,
    h('div', { class: 'pop-label' }, '정렬'), segEl(ALIGN3, bx.align || 'center', (v) => upd({ align: v }), true),
    h('div', { class: 'pop-label' }, '글 속 위치'),
    h('div', { class: 'box-move' },
      h('button', { type: 'button', class: 'btn btn-sm', disabled: li <= 0, onclick: () => { moveBox(id, -1); closePop(); } }, '한 문단 위로'),
      h('button', { type: 'button', class: 'btn btn-sm', onclick: () => { moveBox(id, 1); closePop(); } }, '한 문단 아래로')),
    h('div', { class: 'pop-label' }, '모양'), presetSel,
    h('details', { class: 'box-code' }, h('summary', {}, 'HTML 코드 고치기'),
      h('p', { class: 'pop-note' }, '{{머리글}} · {{내용}} 자리에 위 글이 들어가요. CSS는 이 상자 안에서만 쓰여요.'), codeIn),
    h('div', { class: 'pop-foot' },
      h('button', { type: 'button', class: 'link-btn danger', onclick: () => { commit(); removeBox(id); changed(); commit(); buildFields(); closePop(); toast('상자를 지웠어요', { label: '되돌리기', fn: undo }); } }, '삭제'),
      h('button', { type: 'button', class: 'btn btn-primary btn-sm', onclick: () => { closePop(); commit(); } }, '완료'))), anchor, () => commit(), { beside: anchor });
}

/* =========================================================
   찾아 바꾸기: 글 속 단어를 찾아 하나씩 · 모두 바꾸거나 지우기
   - 찾은 곳은 입력창 뒤에 깐 같은 모양의 층에 색칠해서 보여 줌 (검색창에 커서를 둔 채로 볼 수 있게)
   ========================================================= */
const find = { q: '', rep: '', cs: false, idx: -1, list: [] };
const findBar = $('#find-bar');
const srcHl = $('#src-hl');
const reEsc = (t) => t.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
function findRegex() { return find.q ? new RegExp(reEsc(find.q), find.cs ? 'g' : 'gi') : null; }
function findScan(keepNear) {
  const re = findRegex();
  const prevPos = find.list[find.idx] ? find.list[find.idx][0] : -1;
  find.list = [];
  if (re) for (const m of src.value.matchAll(re)) find.list.push([m.index, m.index + m[0].length]);
  if (!find.list.length) find.idx = -1;
  else if (keepNear && prevPos >= 0) { const k = find.list.findIndex(([st]) => st >= prevPos); find.idx = k < 0 ? 0 : k; }
  else if (find.idx < 0 || find.idx >= find.list.length) find.idx = 0;
  findPaint();
}
function findPaint(scroll) {
  const open = !findBar.hidden && find.list.length > 0;
  srcHl.hidden = !open;
  const cnt = $('#find-count');
  if (cnt) {
    cnt.textContent = !find.q ? '' : find.list.length ? `${find.idx + 1} / ${find.list.length}` : '없음';
    cnt.classList.toggle('none', !!find.q && !find.list.length);
  }
  $$('#find-bar .fb-need').forEach((b) => (b.disabled = !find.list.length));
  if (!open) return;
  // 입력창과 같은 글자 · 여백 · 줄바꿈으로 맞춘 층에 찾은 곳만 색칠
  const cs = getComputedStyle(src);
  Object.assign(srcHl.style, {
    font: cs.font, letterSpacing: cs.letterSpacing, padding: cs.padding, lineHeight: cs.lineHeight,
    width: `${src.clientWidth}px`, height: `${src.clientHeight}px`,
  });
  const v = src.value;
  let html = '', at = 0;
  find.list.forEach(([st, en], i) => {
    html += esc(v.slice(at, st)) + `<mark class="${i === find.idx ? 'cur' : ''}">${esc(v.slice(st, en))}</mark>`;
    at = en;
  });
  srcHl.innerHTML = html + esc(v.slice(at)) + '\n';
  if (scroll) {
    const cur = srcHl.querySelector('mark.cur');
    if (cur) src.scrollTop = Math.max(0, cur.offsetTop - src.clientHeight / 3);
  }
  srcHl.scrollTop = src.scrollTop;
}
function findGo(step) {
  if (!find.list.length) return;
  find.idx = (find.idx + step + find.list.length) % find.list.length;
  findPaint(true);
}
function setText(v) {
  src.value = v;
  state.text = v;
  updateStats();
  changed();
}
function findReplaceOne() {
  const m = find.list[find.idx];
  if (!m) return;
  const v = src.value;
  commit();
  setText(v.slice(0, m[0]) + find.rep + v.slice(m[1]));
  commit();
  findScan(false);
  // 바꾼 자리 다음 것으로
  const k = find.list.findIndex(([st]) => st >= m[0] + find.rep.length);
  find.idx = find.list.length ? (k < 0 ? 0 : k) : -1;
  findPaint(true);
}
function findReplaceAll(withText) {
  const re = findRegex();
  if (!re || !find.list.length) return;
  const n = find.list.length;
  commit();
  setText(src.value.replace(re, () => withText));
  commit();
  findScan(false);
  toast(withText ? `${n}곳을 ‘${withText}’(으)로 바꿨어요` : `‘${find.q}’ ${n}곳을 지웠어요`, { label: '되돌리기', fn: undo }, 3600);
}
function openFind() {
  if (findBar.hidden) {
    findBar.hidden = false;
    const qIn = h('input', { type: 'text', class: 'input fb-in', id: 'find-q', placeholder: '찾을 말', value: find.q, 'aria-label': '찾을 말', autocomplete: 'off' });
    const rIn = h('input', { type: 'text', class: 'input fb-in', id: 'find-r', placeholder: '바꿀 말', value: find.rep, 'aria-label': '바꿀 말', autocomplete: 'off' });
    const cs = h('input', { type: 'checkbox', checked: find.cs });
    qIn.addEventListener('input', () => { find.q = qIn.value; find.idx = -1; findScan(false); findPaint(true); });
    qIn.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' && !e.isComposing) { e.preventDefault(); findGo(e.shiftKey ? -1 : 1); }
      if (e.key === 'Escape') { e.preventDefault(); closeFind(); }
    });
    rIn.addEventListener('input', () => { find.rep = rIn.value; $('#find-all').textContent = find.rep ? '모두 바꾸기' : '모두 지우기'; });
    rIn.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' && !e.isComposing) { e.preventDefault(); findReplaceOne(); }
      if (e.key === 'Escape') { e.preventDefault(); closeFind(); }
    });
    cs.addEventListener('change', () => { find.cs = cs.checked; findScan(true); findPaint(true); });
    const ib = (ic, label, fn, cls = '') => h('button', { type: 'button', class: `icon-btn sm ${cls}`, title: label, 'aria-label': label, html: icon(ic), onclick: fn });
    findBar.append(
      h('div', { class: 'fb-row' }, h('span', { class: 'fb-ico', html: icon('search') }), qIn,
        h('span', { class: 'fb-count', id: 'find-count' }),
        ib('up', '이전 (Shift+Enter)', () => findGo(-1), 'fb-need'), ib('down', '다음 (Enter)', () => findGo(1), 'fb-need'),
        ib('close', '닫기 (Esc)', closeFind)),
      h('div', { class: 'fb-row' }, h('span', { class: 'fb-ico', html: icon('refresh') }), rIn,
        h('button', { type: 'button', class: 'btn btn-sm fb-need', onclick: findReplaceOne, title: '지금 표시된 한 곳만 (Enter)' }, '바꾸기'),
        h('button', { type: 'button', class: 'btn btn-sm btn-primary fb-need', id: 'find-all', onclick: () => findReplaceAll(find.rep) }, find.rep ? '모두 바꾸기' : '모두 지우기')),
      h('label', { class: 'fb-opt' }, cs, h('span', {}, '영문 대소문자 구분')));
  }
  // 입력창에서 고른 글자가 있으면 그걸로 찾기
  const sel = src.value.slice(src.selectionStart, src.selectionEnd);
  const qIn = $('#find-q');
  if (sel && !sel.includes('\n') && sel.length < 60) { qIn.value = find.q = sel; find.idx = -1; }
  findScan(false);
  findPaint(true);
  qIn.focus(); qIn.select();
}
function closeFind() {
  findBar.hidden = true;
  findBar.innerHTML = '';
  srcHl.hidden = true;
  src.focus();
}
src.addEventListener('input', () => { if (!findBar.hidden) findScan(true); });
// Esc: 찾기 창 안이나, 버튼이 비활성돼 포커스가 빠진 상태에서도 닫힘
document.addEventListener('keydown', (e) => {
  if (e.key !== 'Escape' || findBar.hidden) return;
  const a = document.activeElement;
  if (!a || a === document.body || findBar.contains(a) || a === src) { e.preventDefault(); closeFind(); }
});
src.addEventListener('scroll', () => { if (!srcHl.hidden) srcHl.scrollTop = src.scrollTop; }, { passive: true });
if (typeof ResizeObserver !== 'undefined') new ResizeObserver(() => { if (!srcHl.hidden) findPaint(); }).observe(src);
document.addEventListener('keydown', (e) => {
  if ((e.ctrlKey || e.metaKey) && !e.altKey && /^[fFhH]$/.test(e.key) && (e.target === src || e.target.closest('#find-bar'))) {
    e.preventDefault();
    openFind();
  }
});

const TC_COLORS = ['#e8506a', '#f76707', '#e0a100', '#2f9e44', '#0c8599', '#1c7ed6', '#7048e8', '#c2255c', '#868e96', '#191f28'];
/** 고른 부분을 [[#색|…]]으로 감쌈. 이미 색이 있으면 색만 바꾸고, c가 null이면 색을 지움 */
function applyTextColor(c) {
  const s = src.selectionStart, e = src.selectionEnd, v = src.value;
  const sel = v.slice(s, e);
  // 고른 부분이 색 구간 그대로이거나, 커서가 색 구간 안에 있으면 그 구간을 바꿈
  const re = /\[\[(#[0-9a-fA-F]{3,8})\|([\s\S]+?)\]\]/g;
  let m, hit = null;
  while ((m = re.exec(v))) {
    const a = m.index, b = m.index + m[0].length;
    if (s >= a && e <= b && (sel === m[0] || sel === m[2] || s === e || (s >= a + m[1].length + 3 && e <= b - 2))) { hit = { a, b, col: m[1], inner: m[2] }; break; }
  }
  if (hit) {
    const out = c ? `[[${c}|${hit.inner}]]` : hit.inner;
    replaceRange(hit.a, hit.b, out);
    const st = c ? hit.a + c.length + 3 : hit.a;
    src.setSelectionRange(st, st + hit.inner.length);
    return;
  }
  if (!c) {
    // 고른 부분 안의 색 구간을 모두 지움
    if (sel && re.test(sel)) { const clean = sel.replace(/\[\[#[0-9a-fA-F]{3,8}\|([\s\S]+?)\]\]/g, '$1'); replaceRange(s, e, clean); src.setSelectionRange(s, s + clean.length); }
    return;
  }
  if (!sel) { toast('색을 칠할 글자를 먼저 골라 주세요'); src.focus(); return; }
  if (sel.includes('\n')) { toast('글자색은 한 줄 안에서만 칠할 수 있어요'); return; }
  replaceRange(s, e, `[[${c}|${sel}]]`);
  src.setSelectionRange(s + c.length + 3, s + c.length + 3 + sel.length);
}
/* 교정 메모: 고른 글자를 [[@메모|글자]]로. 커서가 메모 안에 있으면 고치거나 지움 */
function findAnno(s0, e0) {
  const v = src.value;
  const re = new RegExp(ANNO_RE.source, 'g');
  let m;
  while ((m = re.exec(v))) {
    const a = m.index, b = a + m[0].length;
    if (s0 >= a && e0 <= b) return { a, b, note: m[1], inner: m[2] };
  }
  return null;
}
function openAnnoPop(anchor) {
  const s0 = src.selectionStart, e0 = src.selectionEnd;
  const hit = findAnno(s0, e0);
  const sel = src.value.slice(s0, e0);
  if (!hit && !sel) { toast('메모를 달 글자를 먼저 골라 주세요'); src.focus(); return; }
  if (!hit && sel.includes('\n')) { toast('메모는 한 줄 안의 글자에만 달 수 있어요'); return; }
  const inp = h('input', { type: 'text', class: 'input', value: hit ? hit.note : '', placeholder: '예) 띄어쓰기!, 오타, 여기서 울컥', maxlength: 40 });
  const apply = () => {
    const note = inp.value.replace(/[|\]\n]/g, ' ').trim();
    closePop();
    if (hit) {
      replaceRange(hit.a, hit.b, note ? `[[@${note}|${hit.inner}]]` : hit.inner);
    } else if (note) {
      replaceRange(s0, e0, `[[@${note}|${sel}]]`);
    }
  };
  inp.addEventListener('keydown', (e) => { if (e.key === 'Enter' && !e.isComposing) { e.preventDefault(); apply(); } });
  openPop(h('div', {},
    h('div', { class: 'pop-title' }, hit ? '교정 메모 고치기' : `‘${(sel || '').slice(0, 14)}${sel.length > 14 ? '…' : ''}’에 메모 달기`),
    h('p', { class: 'pop-note', style: 'margin:0 2px 10px' }, '고른 글자에 밑줄을 긋고, 그 위에 작은 글씨로 메모를 달아요.'),
    inp,
    h('div', { class: 'pop-foot' },
      hit ? h('button', { type: 'button', class: 'link-btn danger', onclick: () => { inp.value = ''; apply(); } }, '메모 지우기') : h('span'),
      h('button', { type: 'button', class: 'btn btn-primary btn-sm', onclick: apply }, hit ? '바꾸기' : '달기'))), anchor);
  inp.focus(); inp.select();
}

function noteTarget() {
  const v = src.value;
  const lines = v.split('\n');
  // 커서가 있는 줄 (메모 줄 위에 있으면 그 위 덩어리)
  let idx = v.slice(0, src.selectionStart).split('\n').length - 1;
  while (idx > 0 && (/^>>/.test(lines[idx].trim()) || !lines[idx].trim())) idx--;
  // 말풍선 아랫줄 번역 ( ) · 이미 있는 메모 줄 뒤에 붙임
  let end = idx;
  while (end + 1 < lines.length && /^\s*[(（].*[)）]\s*$/.test(lines[end + 1]) && lines[end + 1].trim()) end++;
  const noteIdx = [];
  let k = end + 1;
  while (k < lines.length && /^>>/.test(lines[k].trim())) { noteIdx.push(k); k++; }
  return { lines, idx, end, noteIdx };
}
function openNotePop(anchor) {
  const t = noteTarget();
  if (!t.lines[t.idx] || !t.lines[t.idx].trim()) { toast('메모를 달 문장 · 말풍선 · 이미지 줄에 커서를 두어 주세요'); src.focus(); return; }
  const cur = t.noteIdx.map((i) => t.lines[i].trim().replace(/^>>\s?/, '')).join('\n');
  const inp = h('textarea', { class: 'input area-input', rows: 3, placeholder: '예) 여기서 표정 진짜 웃겼음', value: cur }, cur);
  const target = t.lines[t.idx].trim();
  const apply = () => {
    const txt = inp.value.split('\n').map((l) => l.trim()).filter(Boolean);
    closePop();
    const lines = src.value.split('\n');
    const at = t.noteIdx.length ? t.noteIdx[0] : t.end + 1;
    lines.splice(at, t.noteIdx.length, ...txt.map((l) => `>> ${l}`));
    commit();
    src.value = lines.join('\n'); state.text = src.value;
    changed(); commit();
    toast(txt.length ? '옆 메모를 달았어요' : '옆 메모를 지웠어요', { label: '되돌리기', fn: undo });
  };
  inp.addEventListener('keydown', (e) => { if (e.key === 'Enter' && !e.shiftKey && !e.isComposing) { e.preventDefault(); apply(); } });
  openPop(h('div', {},
    h('div', { class: 'pop-title' }, `‘${target.replace(/^!\[[^\]]*\]\((img|box):[^)]+\)$/, (m, k) => (k === 'img' ? '이미지' : 'HTML 상자')).slice(0, 18)}${target.length > 18 ? '…' : ''}’ 옆 메모`),
    h('p', { class: 'pop-note', style: 'margin:0 2px 10px' }, '문장 · 말풍선 · 이미지 바로 옆에 각주처럼 작은 멘트를 달아요. Shift+Enter로 줄을 나눠요.'),
    inp,
    h('div', { class: 'pop-foot' },
      cur ? h('button', { type: 'button', class: 'link-btn danger', onclick: () => { inp.value = ''; apply(); } }, '메모 지우기') : h('span'),
      h('button', { type: 'button', class: 'btn btn-primary btn-sm', onclick: apply }, cur ? '바꾸기' : '달기'))), anchor);
  inp.focus(); inp.select();
}

function openTextColorPop(anchor) {
  const grid = h('div', { class: 'palette hl' });
  const mark = () => $$('button', grid).forEach((b) => b.classList.toggle('on', b.dataset.c === state.typo.tc));
  const pick = (c, applyNow = true) => {
    state.typo.tc = c; save(); mark();
    const sw = $('#fmt-bar .tc-bar'); if (sw) sw.style.background = c;
    if (applyNow) applyTextColor(c);
  };
  TC_COLORS.forEach((c) => {
    const b = h('button', { type: 'button', 'data-c': c, 'aria-label': c, onmousedown: (e) => e.preventDefault() });
    b.style.background = c;
    b.addEventListener('click', () => pick(c));
    grid.append(b);
  });
  mark();
  const native = h('input', { type: 'color', value: /^#[0-9a-f]{6}$/i.test(state.typo.tc || '') ? state.typo.tc : '#e8506a', 'aria-label': '직접 고르기' });
  native.addEventListener('change', () => pick(native.value));
  openPop(h('div', {},
    h('div', { class: 'pop-title' }, '글자색'),
    h('p', { class: 'pop-note', style: 'margin:0 2px 10px' }, '입력창에서 고른 글자에 색을 칠해요. 서체 탭의 기본 글자 색과 따로 쓸 수 있어요.'),
    h('div', { class: 'hl-row' }, grid, h('label', { class: 'native-color sm', title: '직접 고르기' }, native)),
    h('div', { class: 'pop-foot' },
      h('button', { type: 'button', class: 'link-btn muted', onmousedown: (e) => e.preventDefault(), onclick: () => applyTextColor(null) }, '색 지우기'),
      h('button', { type: 'button', class: 'btn btn-primary btn-sm', onclick: closePop }, '완료'))), anchor);
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
const STYLE_KEYS = ['typo', 'head', 'bubble', 'canvas', 'parse', 'skin', 'bgHtml', 'bgRef', 'scene', 'hompy', 'diary'];
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
    state[k] = k === 'skin' || k === 'bgHtml' || k === 'bgRef' ? data[k] || '' : deepMerge(copyState(DEFAULTS[k] || {}), data[k]);
  }
  if (data.typo && 'paraMode' in data.typo) migrate(state, null); // 예전 양식의 문단 구분 옮기기
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
const TEMPLATE_GROUPS = [
  ['기본', ['paper', 'night', 'book', 'quote', 'pastel', 'vintage']],
  ['메신저', ['imessage', 'messenger', 'line', 'igdm']],
  ['스페셜', ['chungking', 'mafia', 'agent', 'film', 'terminal', 'wedding', 'pager']],
];
function buildTemplates() {
  const root = $('#template-grid');
  root.innerHTML = '';
  root.classList.add('tpl-groups');
  const byId = Object.fromEntries(TEMPLATES.map((t) => [t.id, t]));
  const listed = new Set(TEMPLATE_GROUPS.flatMap(([, ids]) => ids));
  const groups = TEMPLATE_GROUPS.map(([name, ids]) => [name, ids.map((id) => byId[id]).filter(Boolean)]);
  const rest = TEMPLATES.filter((t) => !t.hidden && !listed.has(t.id));
  if (rest.length) groups.push(['기타', rest]);
  let grid;
  const items = [];
  groups.forEach(([name, list]) => {
    root.append(h('div', { class: 'tpl-group-title' }, name, h('small', {}, `${list.length}`)));
    grid = h('div', { class: 'template-grid' });
    root.append(grid);
    list.forEach((t) => items.push([grid, t]));
  });
  items.forEach(([grid, t]) => {
    const pv = h('div', { class: 'tpl-pv' });
    const p = t.pv;
    pv.style.background = p.bg;
    if (/gradient/.test(p.b2 || '')) p.b2bg = p.b2;
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
  typo: ['font', 'fontCustom', 'size', 'lh', 'ls', 'weight', 'align', 'gap', 'indentOn', 'indent', 'indentWhere', 'hlStyle'],
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
        // 보일 부분을 고른 뒤 정사각형으로 저장
        const out = await cropImage(await shrinkImage(f, 1400, false), { avatar: true });
        if (!out) return;
        ch.avatar = out;
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
        const out = await cropImage(await shrinkImage(blob, 1400, false), { avatar: true });
        if (!out) return;
        ch.avatar = out;
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
        colorRow,
        h('div', { class: 'row' }, labelEl('이름 색', ch.nameColor ? '' : '말풍선 설정의 이름 색을 따라요'),
          h('div', { class: 'img-field' },
            ch.nameColor ? h('button', { type: 'button', class: 'link-btn muted', onclick: () => { ch.nameColor = ''; changed(); buildChars(); } }, '기본으로') : null,
            colorButton(() => ch.nameColor || state.bubble.nameColor, (v) => { const first = !ch.nameColor; ch.nameColor = v; changed(); if (first) buildChars(); })))));
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


/* 말풍선 안 사진 넣기 · 크기 · 삭제 */
function bubblePhotoRow(key, o, rebuild) {
  const setImg = (srcv) => {
    const next = { ...(state.overrides[key] || {}), img: srcv };
    if (!next.imgW) next.imgW = 180;
    state.overrides[key] = next; changed(); rebuild();
  };
  const file = h('input', { type: 'file', accept: 'image/*', hidden: true });
  const cropSet = async (srcv) => { const out = await cropImage(srcv); if (out) setImg(out); };
  file.addEventListener('change', async () => { const f = file.files[0]; if (f) { try { await cropSet(await shrinkImage(f, 1600, false)); } catch (e) { toast('이미지를 읽지 못했어요'); } } });
  const urlIn = h('input', { type: 'url', class: 'input', placeholder: 'https://… 이미지 주소' });
  const go = async () => { try { await cropSet(await imageFromUrl(urlIn.value)); } catch (e) { toast('이미지를 불러오지 못했어요'); } };
  urlIn.addEventListener('keydown', (e) => { if (e.key === 'Enter' && !e.isComposing) go(); });
  const row = h('div', { class: 'bphoto' },
    h('div', { class: 'photo-url' }, h('label', { class: 'btn btn-sm' }, '파일', file), urlIn, h('button', { type: 'button', class: 'btn btn-sm', onclick: go }, '링크')));
  if (o.img) {
    const out = h('output', {}, `${o.imgW || 180}px`);
    const sl = h('input', { type: 'range', class: 'slider', min: 40, max: 600, step: 1, value: o.imgW || 180 });
    sl.style.setProperty('--p', `${((o.imgW || 180) - 40) / 560 * 100}%`);
    sl.addEventListener('input', () => {
      out.textContent = `${sl.value}px`; sl.style.setProperty('--p', `${(sl.value - 40) / 560 * 100}%`);
      state.overrides[key] = { ...state.overrides[key], imgW: +sl.value };
      const box = $(`#stage .bimg-box[data-key="${CSS.escape(key)}"]`); if (box) box.style.width = `${sl.value}px`;
      save(); commitSoon();
    });
    row.append(h('div', { class: 'pop-label row-top' }, '사진 크기', out), sl,
      h('button', { type: 'button', class: 'link-btn danger', onclick: () => { const { img, imgW, ...rest } = state.overrides[key]; if (Object.keys(rest).length) state.overrides[key] = rest; else delete state.overrides[key]; changed(); rebuild(); } }, '사진 빼기'));
  }
  return row;
}

/* 아이콘 타일 선택 (배치 방식) */
function iconTiles(opts, val, onPick) {
  const box = h('div', { class: 'tiles wrap-tiles' });
  opts.forEach(([k, l]) => {
    const t = h('button', { type: 'button', class: 'tile' + (k === val ? ' on' : ''), title: l, html: wrapSvg(k) + `<span>${l}</span>` });
    t.addEventListener('click', () => { $$('.tile', box).forEach((x) => x.classList.toggle('on', x === t)); onPick(k); });
    box.append(t);
  });
  return box;
}
/* ── 본문 이미지 넣기 ── */
const newId = () => Math.random().toString(36).slice(2, 9);
async function imageFromUrl(url) {
  url = url.trim();
  if (!/^(https?:|data:image\/)/i.test(url)) throw new Error('url');
  try {
    const r = await fetch(url);
    if (!r.ok) throw new Error(r.status);
    const blob = await r.blob();
    if (!/^image\//.test(blob.type)) throw new Error('type');
    return await shrinkImage(blob, 1600, false);
  } catch (e) {
    const ok = await new Promise((res) => { const im = new Image(); im.onload = () => res(true); im.onerror = () => res(false); im.src = url; });
    if (!ok) throw new Error('load');
    toast('이 사이트는 외부 사용을 막아 두어 저장 이미지에는 안 나올 수 있어요', null, 4000);
    return url;
  }
}
function addImage(src, mode, round) {
  if (mode === 'free') {
    const W = state.canvas.width;
    const w = Math.round(W * 0.34);
    const st = { id: newId(), src, x: Math.round(W - w - state.canvas.pad), y: Math.round(state.canvas.pad), w, rot: 0, layer: 'front', page: 0, op: 1, round: !!round };
    state.stickers = [...(state.stickers || []), st];
    selSticker = st.id; selInline = null;
    changed();
    toast('카드 위에 놓았어요 · 끌어서 옮기고, 위 막대에서 그림자 · 테두리 · 자르기를 바꿔요', { label: '되돌리기', fn: undo }, 3600);
  } else {
    const id = newId();
    const float = mode === 'float';
    state.images = { ...state.images, [id]: { src, w: float ? 40 : 100, align: float ? 'left' : 'center', wrap: float ? 'float' : 'block', round: !!round } };
    insertSnippet(`![](img:${id})\n`, '', true);
    toast('글 사이에 이미지를 넣었어요 · 미리보기에서 이미지를 누르면 크기를 바꿀 수 있어요', { label: '되돌리기', fn: undo }, 3600);
  }
}
function openImageInsertPop(anchor) {
  let mode = 'free';
  const file = h('input', { type: 'file', accept: 'image/*', hidden: true });
  const urlIn = h('input', { type: 'url', class: 'input', placeholder: 'https://… 이미지 주소', 'aria-label': '이미지 링크' });
  const take = async (getSrc) => {
    let src;
    try { src = await getSrc(); } catch (e) { toast('이미지를 불러오지 못했어요'); return; }
    closePop();
    lastCropShape = '';
    const out = await cropImage(src);
    if (out) addImage(out, mode, lastCropShape === 'circle');
  };
  file.addEventListener('change', () => { const f = file.files[0]; if (f) take(() => shrinkImage(f, 1600, false)); });
  const apply = () => { if (urlIn.value.trim()) take(() => imageFromUrl(urlIn.value)); else urlIn.focus(); };
  urlIn.addEventListener('keydown', (e) => { if (e.key === 'Enter' && !e.isComposing) apply(); });
  openPop(h('div', { class: 'photo-pop' },
    h('div', { class: 'pop-title' }, '이미지 넣기'),
    iconTiles([['free', '자유 배치'], ['block', '자리차지'], ['float', '어울림']], 'free', (v) => { mode = v; }),
    h('label', { class: 'photo-opt', style: 'margin-top:10px' }, h('span', { class: 'po-ico', html: icon('image') }),
      h('span', {}, h('b', {}, '파일에서 고르기'), h('small', {}, 'JPG · PNG · GIF · WebP')), file),
    h('div', { class: 'pop-label' }, '이미지 링크'),
    h('div', { class: 'photo-url' }, urlIn, h('button', { type: 'button', class: 'btn btn-primary btn-sm', onclick: apply }, '넣기'))), anchor);
}

/* 글자처럼 넣은 이미지 편집 */
function removeImageToken(id) {
  const re = new RegExp(`^!\\[[^\\]]*\\]\\(img:${id}\\)\\n?`, 'm');
  state.text = state.text.replace(re, '');
  src.value = state.text;
  const { [id]: _, ...rest } = state.images;
  state.images = rest;
}
function openInlineImagePop(fig, id) {
  const info = state.images[id];
  if (!info) return;
  const upd = (k, v) => { state.images = { ...state.images, [id]: { ...state.images[id], [k]: v } }; changed(); };
  const out = h('output', {}, `${info.w || 100}%`);
  const slider = h('input', { type: 'range', class: 'slider', min: 10, max: 100, step: 1, value: info.w || 100 });
  slider.style.setProperty('--p', `${((info.w || 100) - 10) / 90 * 100}%`);
  slider.addEventListener('input', () => { out.textContent = `${slider.value}%`; slider.style.setProperty('--p', `${(slider.value - 10) / 90 * 100}%`); upd('w', +slider.value); });
  openPop(h('div', {},
    h('div', { class: 'pop-title' }, '글자처럼 넣은 이미지'),
    iconTiles([['block', '자리차지'], ['float', '어울림']], info.wrap || 'block', (v) => { upd('wrap', v); if (v === 'float' && (state.images[id].w || 100) > 70) upd('w', 40); }),
    h('div', { class: 'pop-label row-top' }, '폭', out), slider,
    h('div', { class: 'pop-label' }, '위치'), segEl(ALIGN3, info.align || 'center', (v) => upd('align', v), true),
    shadowControls(() => state.images[id] && state.images[id].sh, (v) => {
      state.images = { ...state.images, [id]: { ...state.images[id], sh: v } };
      const im = fig.querySelector('img'); if (im) im.style.filter = shadowFilter(v);
      save(); commitSoon();
    }),
    borderControls(() => state.images[id] && state.images[id].bd, (v) => {
      state.images = { ...state.images, [id]: { ...state.images[id], bd: v } };
      const im = fig.querySelector('img'); if (im) applyImgBorder(im, state.images[id]);
      save(); commitSoon();
    }),
    h('div', { class: 'pop-foot' },
      h('button', { type: 'button', class: 'link-btn', onclick: async () => {
        closePop();
        const out = await cropImage(info.src);
        if (out && out !== info.src) { state.images = { ...state.images, [id]: { ...state.images[id], src: out, round: lastCropShape === 'circle' } }; changed(); commit(); }
      } }, '자르기'),
      h('button', { type: 'button', class: 'link-btn', onclick: () => {
        removeImageToken(id);
        const W = state.canvas.width, w = Math.round(W * 0.34);
        state.stickers = [...(state.stickers || []), { id: newId(), src: info.src, x: Math.round(W - w - state.canvas.pad), y: state.canvas.pad, w, rot: 0, layer: 'front', page: 0, op: 1, sh: info.sh, bd: info.bd, round: info.round }];
        changed(); closePop(); toast('자유 배치로 바꿨어요', { label: '되돌리기', fn: undo });
      } }, '자유 배치로'),
      h('button', { type: 'button', class: 'link-btn danger', onclick: () => { removeImageToken(id); changed(); closePop(); toast('이미지를 지웠어요', { label: '되돌리기', fn: undo }); } }, '삭제'))), fig, null, { beside: fig.querySelector('.img-box') || fig });
}

/* 자유 배치 이미지: 끌어서 이동 · 모서리로 크기 · 눌러서 설정 */
function openStickerPop(el, id) {
  const st = (state.stickers || []).find((x) => x.id === id);
  if (!st) return;
  const upd = (k, v) => { st[k] = v; placeSticker(el, st); save(); commitSoon(); };
  const mk = (label, k, min, max, step, unit, val) => {
    const out = h('output', {}, `${val}${unit}`);
    const sl = h('input', { type: 'range', class: 'slider', min, max, step, value: val });
    const pct = (v) => `${((v - min) / (max - min)) * 100}%`;
    sl.style.setProperty('--p', pct(val));
    sl.addEventListener('input', () => { out.textContent = `${sl.value}${unit}`; sl.style.setProperty('--p', pct(sl.value)); upd(k, k === 'op' ? +sl.value / 100 : +sl.value); });
    return [h('div', { class: 'pop-label row-top' }, label, out), sl];
  };
  const pages = $$('#stage .card').length;
  openPop(h('div', {},
    h('div', { class: 'pop-title' }, '자유 배치 이미지'),
    ...mk('크기', 'w', 30, state.canvas.width * 1.2 | 0, 1, 'px', st.w),
    ...mk('회전', 'rot', -180, 180, 1, '°', Math.round(st.rot || 0)),
    ...mk('투명도', 'op', 10, 100, 1, '%', Math.round((st.op ?? 1) * 100)),
    h('div', { class: 'pop-label' }, '위치'),
    segEl([['front', '글 위'], ['back', '글 뒤']], st.layer || 'front', (v) => { st.layer = v; changed(); }, true),
    shadowControls(() => st.sh, (v) => { st.sh = v; placeSticker(el, st); save(); commitSoon(); }),
    borderControls(() => st.bd, (v) => { st.bd = v; placeSticker(el, st); save(); commitSoon(); }),
    pages > 1 ? h('div', { class: 'pop-label' }, '몇 번째 장') : null,
    pages > 1 ? segEl(Array.from({ length: Math.min(pages, 6) }, (_, i) => [i, `${i + 1}`]), st.page || 0, (v) => { st.page = +v; changed(); }, true) : null,
    h('div', { class: 'pop-foot' },
      h('button', { type: 'button', class: 'link-btn', onclick: async () => {
        closePop();
        const out = await cropImage(st.src);
        if (out && out !== st.src) { st.src = out; st.round = lastCropShape === 'circle'; changed(); commit(); }
      } }, '자르기'),
      h('button', { type: 'button', class: 'link-btn danger', onclick: () => {
        state.stickers = state.stickers.filter((x) => x.id !== id); selSticker = null; changed(); closePop();
        toast('이미지를 지웠어요', { label: '되돌리기', fn: undo });
      } }, '삭제'),
      h('button', { type: 'button', class: 'btn btn-primary btn-sm', onclick: closePop }, '완료'))), el, null, { beside: el });
}

(function imageResizeDrag() {
  const stage = $('#stage');
  let d = null;
  stage.addEventListener('pointerdown', (e) => {
    const hnd = e.target.closest('.rs-handle');
    if (!hnd || hnd.closest('.sticker')) return;
    e.preventDefault(); e.stopPropagation();
    closePop();
    const box = hnd.parentElement;
    const fig = box.closest('.inline-img');
    if (fig) {
      const ref = (fig.classList.contains('wrap-float') ? fig.parentElement : fig).clientWidth;
      d = { kind: 'inline', id: fig.dataset.img, fig, ref, w0: box.offsetWidth, x0: e.clientX, cur: null };
    } else {
      d = { kind: 'bubble', key: box.dataset.key, box, w0: box.offsetWidth, x0: e.clientX, cur: null };
    }
    hnd.setPointerCapture(e.pointerId);
  }, true);
  stage.addEventListener('pointermove', (e) => {
    if (!d) return;
    const w = Math.max(30, d.w0 + (e.clientX - d.x0) / currentScale);
    if (d.kind === 'inline') {
      const pct = Math.max(10, Math.min(100, Math.round((w / d.ref) * 100)));
      d.cur = pct; d.fig.style.setProperty('--img-w', `${pct}%`);
    } else { d.cur = Math.round(w); d.box.style.width = `${d.cur}px`; }
  });
  const end = () => {
    if (!d) return;
    const x = d; d = null;
    if (x.cur == null) return;
    if (x.kind === 'inline') state.images = { ...state.images, [x.id]: { ...state.images[x.id], w: x.cur } };
    else state.overrides[x.key] = { ...(state.overrides[x.key] || {}), imgW: x.cur };
    changed();
  };
  stage.addEventListener('pointerup', end);
  stage.addEventListener('pointercancel', end);
})();

(function stickerDrag() {
  const stage = $('#stage');
  let drag = null;
  stage.addEventListener('pointerdown', (e) => {
    const el = e.target.closest('.sticker');
    if (!el) {
      if (!e.target.closest('.pop') && !e.target.closest('.inline-img')) deselectImage();
      return;
    }
    const st = state.stickers.find((x) => x.id === el.dataset.sticker);
    if (!st) return;
    e.preventDefault();
    closePop();
    selInline = null;
    $$('#stage .inline-img.sel').forEach((x) => x.classList.remove('sel'));
    imgBar.hidden = true;
    selSticker = st.id;
    $$('#stage .sticker').forEach((x) => x.classList.toggle('sel', x === el));
    const r = el.getBoundingClientRect();
    const c = { x: r.left + r.width / 2, y: r.top + r.height / 2 };
    drag = { el, st, resize: e.target.classList.contains('stk-handle'), rotate: !!e.target.closest('.stk-rot'), c,
      a0: Math.atan2(e.clientY - c.y, e.clientX - c.x), x0: e.clientX, y0: e.clientY, o: { x: st.x, y: st.y, w: st.w, rot: st.rot || 0 }, moved: false };
    el.setPointerCapture(e.pointerId);
  });
  stage.addEventListener('pointermove', (e) => {
    if (!drag) return;
    const dx = (e.clientX - drag.x0) / currentScale, dy = (e.clientY - drag.y0) / currentScale;
    if (Math.abs(dx) + Math.abs(dy) > 2) drag.moved = true;
    if (drag.rotate) {
      // 가운데를 기준으로 돌린 각도만큼 회전 · 0 / ±90 / 180° 근처는 붙고, Shift는 15° 단위
      let a = drag.o.rot + (Math.atan2(e.clientY - drag.c.y, e.clientX - drag.c.x) - drag.a0) * 180 / Math.PI;
      a = ((a + 540) % 360) - 180;
      if (e.shiftKey) a = Math.round(a / 15) * 15;
      else { const snap = Math.round(a / 90) * 90; if (Math.abs(a - snap) < 4) a = snap; }
      drag.st.rot = Math.round(a * 10) / 10;
    } else if (drag.resize) drag.st.w = Math.max(30, Math.round(drag.o.w + dx));
    else { drag.st.x = Math.round(drag.o.x + dx); drag.st.y = Math.round(drag.o.y + dy); }
    placeSticker(drag.el, drag.st);
  });
  const end = () => {
    if (!drag) return;
    const d = drag;
    drag = null;
    if (d.moved) { save(); commitSoon(); }
    showImgBar();
  };
  stage.addEventListener('pointerup', end);
  stage.addEventListener('pointercancel', end);
})();

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
        await loadBgRef(bp.file);
        commit();
        if (state.bgRef !== bp.file) dropBgChars();
        state.bgRef = bp.file;
        state.bgHtml = '';
        syncHtmlEditor();
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
        // 다른 등록 배경이 채워 둔 출처(예: 생존 게임)는 그 배경을 벗어나면 비움
        if (!('credit' in bp) && HTML_BG_PRESETS.some((x) => x !== bp && x.credit && x.credit === state.credit)) { state.credit = ''; state.creator = ''; }
        if (bp.clearCredit) { state.credit = ''; state.creator = ''; }
        if ('credit' in bp) { state.credit = bp.credit; state.creator = bp.creator || ''; }
        if (bp.scene) for (const k of Object.keys(bp.scene)) if (!String(state.scene[k] ?? '').trim()) state.scene[k] = bp.scene[k];
        if (bp.parse) Object.assign(state.parse, copyState(bp.parse), { auto: true });
        if (bp.hompy) {
          const hp = state.hompy;
          for (const k of ['today', 'total', 'say']) if (!String(hp[k] ?? '').trim()) hp[k] = bp.hompy[k];
          if (!(hp.talk || []).some((t) => (t.text || '').trim())) hp.talk = copyState(bp.hompy.talk);
        }
        changed(); commit();
        buildChars(); buildFields(); buildQuickInsert();
        toast(`‘${bp.name}’ 배경을 적용했어요${added.length ? ` · 캐릭터 ${added.length}명 등록` : ''}${bp.scene ? ' · 장소 · 생존 인원은 텍스트 탭 ‘상황판’에서' : ''}${bp.hompy ? ' · 색 · 마이룸 · 한마디는 텍스트 탭에서' : ''}${bp.file === 'bg/diary.html' ? ' · 색 · 날짜 · 날씨 · 메모는 텍스트 탭에서' : ''}`, { label: '되돌리기', fn: undo }, 4200);
      } catch (e) { toast('배경을 불러오지 못했어요'); }
    },
  }, bp.name)));
  $('#skin-css').value = state.skin;
  syncHtmlEditor();
  setHtmlStatus(htmlBg.status);
}
/* 등록 배경을 해제하거나 다른 배경으로 바꾸면 그 배경이 넣어 준 등장인물을 지움 (직접 만든 캐릭터는 그대로) */
function dropBgChars() {
  const bp = state.bgRef && HTML_BG_PRESETS.find((x) => x.file === state.bgRef);
  if (!bp || !bp.chars) return 0;
  const names = new Set(bp.chars.map((c) => (typeof c === 'string' ? c : c.name)));
  const before = state.chars.length;
  state.chars = state.chars.filter((c) => !(names.has(c.name) && /^p/.test(c.id || '')));
  return before - state.chars.length;
}
// 등록된 배경을 쓰는 중이면 코드 칸 대신 이름 카드를 보여 줌
function syncHtmlEditor() {
  const ico = $('.html-ref-ico');
  if (ico && !ico.firstElementChild) ico.innerHTML = icon('image');
  const card = $('#html-ref');
  const ta = $('#html-bg');
  const bp = state.bgRef && HTML_BG_PRESETS.find((x) => x.file === state.bgRef);
  ta.closest('.code-card').hidden = !!state.bgRef;
  card.hidden = !state.bgRef;
  if (state.bgRef) $('#html-ref-name').textContent = bp ? bp.name : '등록된 배경';
  else if (ta.value !== (state.bgHtml || '')) ta.value = state.bgHtml || '';
  $$('#html-presets .chip').forEach((c) => c.classList.toggle('on', !!bp && c.textContent === bp.name));
}
let skinTimer;
$('#skin-css').addEventListener('input', (e) => {
  state.skin = e.target.value;
  clearTimeout(skinTimer);
  skinTimer = setTimeout(() => {
    // 배경 코드(body 규칙 · 장식 HTML)는 HTML 배경으로 옮겨서 그림
    if (looksLikeHtmlBg(state.skin)) {
      state.bgHtml = state.skin;
      state.bgRef = '';
      state.skin = '';
      $('#skin-css').value = '';
      syncHtmlEditor();
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
  if ((state.bgRef || state.bgHtml.trim()) && !confirm('지금 HTML 배경을 예시로 바꿀까요?')) return;
  dropBgChars();
  state.bgRef = '';
  state.bgHtml = `<style>
  body { background: linear-gradient(160deg, #fdf6ec, #f3e7d9); }
  .frame { position: absolute; inset: 14px; border: 1.5px solid rgba(120, 90, 60, .35); border-radius: 18px; }
  .star { position: absolute; font-size: 22px; color: #e7b84a; }
</style>
<div class="frame"></div>
<div class="star" style="top: 22px; right: 28px;" data-layer="top">★</div>`;
  syncHtmlEditor();
  changed();
});
$('#btn-html-ref-clear').addEventListener('click', () => $('#btn-html-clear').click());
$('#btn-html-clear').addEventListener('click', () => {
  if (!state.bgRef && !state.bgHtml.trim()) return;
  commit();
  const gone = dropBgChars();
  state.bgHtml = '';
  state.bgRef = '';
  syncHtmlEditor();
  changed(); commit();
  if (gone) { buildChars(); buildFields(); buildQuickInsert(); }
  toast(`HTML 배경을 비웠어요${gone ? ` · 배경 등장인물 ${gone}명도 지웠어요` : ''}`, { label: '되돌리기', fn: undo });
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
  const walker = document.createTreeWalker(E, NodeFilter.SHOW_TEXT, {
    acceptNode: (n) => (n.parentElement && n.parentElement.closest('.anno-n') ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT),
  });
  const r = document.createRange();
  const breaks = [];
  let prevTop = null, node;
  while ((node = walker.nextNode())) {
    const t = node.data;
    for (let i = 0; i < t.length; i++) {
      if (t[i] === ' ' || t[i] === '\n' || t[i] === '\t') continue;
      r.setStart(node, i); r.setEnd(node, i + 1);
      // 줄의 첫 글자는 브라우저에 따라 '윗줄 끝의 폭 0 자리'를 함께 돌려주므로, 폭이 있는 실제 글자 자리를 씀
      const rects = [...r.getClientRects()];
      const rc = rects.filter((x) => x.width > 0.5).pop() || rects[rects.length - 1];
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
/* 저장 직전: 지금 카드 크기에 맞는 HTML 배경을 기다리지 않고 바로 만들어 끼움 (미리보기의 늦은 그리기와 상관없이) */
async function ensureHtmlBg(cards) {
  const code = bgCode().trim();
  if (!code) return;
  const hasTop = /data-layer\s*=\s*["']?top/i.test(code);
  for (const card of cards) {
    const w = card.offsetWidth, hgt = card.offsetHeight;
    const bg = card.querySelector('.card-htmlbg'), top = card.querySelector('.card-htmltop');
    try {
      const [base, upper] = await Promise.all([htmlBgURL(w, hgt, 'base'), hasTop ? htmlBgURL(w, hgt, 'top') : null]);
      if (bg) { bg.src = base; bg.hidden = false; await bg.decode().catch(() => {}); }
      if (top) {
        if (upper) { top.src = upper; top.hidden = false; await top.decode().catch(() => {}); } else { top.hidden = true; top.removeAttribute('src'); }
      }
    } catch (e) { console.warn(e); }
  }
}
const nextFrame = () => new Promise((r) => requestAnimationFrame(() => r()));
/* HTML 배경(SVG 그림)을 보통 그림(PNG)으로 바꿔 둠.
   브라우저가 SVG 안의 글꼴 · 그림을 늦게 칠하면 처음 그린 결과가 비어 있을 수 있어서, 비었으면 잠깐 기다렸다 다시 그림 */
async function rasterizeHtmlLayers(card) {
  const sc = state.canvas.scale;
  const html = fillBgTokens(bgCode());
  let mode = 'zoom'; // zoom: 저장 크기로 그린 SVG를 1:1로 · plain: 카드 크기 SVG를 캔버스에서 키움 (사파리 대비)
  for (const img of card.querySelectorAll('.card-htmlbg, .card-htmltop')) {
    if (!img.getAttribute('src') || img.hidden || img.src.startsWith('data:image/png')) continue;
    try {
      const w = card.offsetWidth, hgt = card.offsetHeight;
      const isBase = img.classList.contains('card-htmlbg');
      const cv = document.createElement('canvas');
      cv.width = Math.round(w * sc); cv.height = Math.round(hgt * sc);
      const g = cv.getContext('2d', { willReadFrequently: true });
      const draw = async (m) => {
        const im = new Image();
        im.src = await buildHtmlBgURL(html, w, hgt, isBase ? 'base' : 'top', m === 'zoom' ? sc : 1);
        await im.decode();
        for (let tryN = 0; tryN < 4; tryN++) {
          g.clearRect(0, 0, cv.width, cv.height);
          if (m === 'zoom') g.drawImage(im, 0, 0); else g.drawImage(im, 0, 0, cv.width, cv.height);
          if (!isBase || !looksBlank(g, cv.width, cv.height)) break;
          await nextFrame(); await new Promise((r) => setTimeout(r, 80 * (tryN + 1)));
        }
      };
      await draw(mode);
      // 배경이 왼쪽 위에만 작게 그려졌으면(크기 맞춤 실패) 다른 방식으로 다시
      if (isBase && mode === 'zoom' && cornerEmpty(g, cv.width, cv.height)) { mode = 'plain'; await draw(mode); }
      img.src = cv.toDataURL('image/png');
      await img.decode().catch(() => {});
    } catch (e) { /* 브라우저가 막으면 원래 그림 그대로 */ }
  }
}
function cornerEmpty(g, w, h) {
  try {
    const a = (x, y) => g.getImageData(Math.floor(w * x), Math.floor(h * y), 1, 1).data[3];
    return a(0.03, 0.03) > 8 && a(0.97, 0.97) < 8 && a(0.97, 0.5) < 8;
  } catch (e) { return false; }
}
// 아래층 배경이 거의 투명하면 아직 칠해지지 않은 것으로 봄
function looksBlank(g, w, h) {
  try {
    const pts = [[0.5, 0.5], [0.1, 0.1], [0.9, 0.1], [0.1, 0.9], [0.9, 0.9], [0.5, 0.05], [0.05, 0.5]];
    return pts.every(([x, y]) => g.getImageData(Math.floor(w * x), Math.floor(h * y), 1, 1).data[3] < 8);
  } catch (e) { return false; }
}

/* 이미지 변환 도구는 첫 화면에 필요 없으니 나중에 불러옴 (화면이 뜬 뒤 한가할 때 미리 받아 둠) */
let exporterP = null;
function loadExporter() {
  if (typeof htmlToImage !== 'undefined') return Promise.resolve(true);
  if (!exporterP) {
    exporterP = new Promise((res) => {
      const sc = document.createElement('script');
      sc.src = 'lib/html-to-image.js';
      sc.onload = () => res(typeof htmlToImage !== 'undefined');
      sc.onerror = () => { exporterP = null; res(false); };
      document.head.append(sc);
    });
  }
  return exporterP;
}
(window.requestIdleCallback || ((f) => setTimeout(f, 1500)))(() => loadExporter(), { timeout: 4000 });

function cardToPng(card, fontCSS) {
  return htmlToImage.toPng(card, {
    width: card.offsetWidth,
    height: card.offsetHeight,
    pixelRatio: state.canvas.scale,
    style: { transform: 'none', position: 'static', left: '0', top: '0', boxShadow: 'none' },
    fontEmbedCSS: fontCSS,
    cacheBust: false,
    // 아직 그려지지 않은 그림(빈 src)은 건너뜀
    filter: (n) => !(n.tagName === 'IMG' && !n.getAttribute('src')) && !(n.classList && n.classList.contains('stk-ui')),
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
  if (!(await loadExporter())) throw new Error('exporter');
  closePop();
  selSticker = null; selInline = null;
  if (typeof imgBar !== 'undefined') imgBar.hidden = true;
  editingKey = null;
  // 아직 반영되지 않은 입력이 있으면 지금 반영하고, 최신 상태로 한 번 그린 뒤 그동안은 다시 그리지 않음
  if (srcTimer) { clearTimeout(srcTimer); srcTimer = null; if (state.text !== src.value) state.text = src.value; save(); }
  renderQueued = false;
  render();
  exporting = true;
  try {
    await document.fonts.ready;
    await htmlBgReady;
    const all = $$('#stage .card');
    const cards = indices ? indices.map((i) => all[i]).filter(Boolean) : all;
    await ensureHtmlBg(cards);
    const fontCSS = await buildFontEmbedCSS(cards);
    for (const card of cards) await rasterizeHtmlLayers(card);
    return await makeImagesOf(cards, fontCSS, onProgress);
  } finally {
    exporting = false;
    renderAfterExport = false;
    render(); // 줄 고정을 풀고 원래 미리보기로
  }
}
async function makeImagesOf(cards, fontCSS, onProgress) {
  for (const card of cards) {
    card.querySelectorAll('.narr, .bubble, .card-title, .credit, .side-note').forEach((el) => {
      if (el.querySelector('.wrap-float, .bimg-box, .tok-img')) return; // 이미지가 들어간 문단은 브라우저 배치 그대로
      try { freezeLines(el, currentScale); } catch (e) { /* 원래 상태로 둠 */ }
    });
  }
  const out = [];
  for (let i = 0; i < cards.length; i++) {
    if (onProgress) onProgress(i, cards.length);
    out.push(await cardToPng(cards[i], fontCSS));
  }
  return out;
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
    keys: () => tx('readonly', (st) => st.getAllKeys()).then((v) => v || []).catch(() => []),
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
  // 화면 탭 '저장 폴더'
  const row = $('#folder-row');
  if (row) {
    row.innerHTML = '';
    if (!canPickFolder) {
      row.append(h('div', { class: 'folder-now' }, h('span', { class: 'folder-ico', html: icon('folder') }),
        h('div', {}, h('b', {}, '다운로드 폴더'), h('small', {}, isMobile()
          ? '휴대폰에서는 저장할 때 뜨는 창에서 ‘이미지 저장’이나 ‘파일에 저장’을 골라요.'
          : '이 브라우저는 폴더 지정을 지원하지 않아요. PC의 크롬 · 엣지 · 웨일에서 원하는 폴더를 지정할 수 있어요.'))));
    } else {
      row.append(h('div', { class: 'folder-now' }, h('span', { class: 'folder-ico', html: icon('folder') }),
        h('div', {}, h('b', {}, dirHandle ? dirHandle.name : '다운로드 폴더'), h('small', {}, dirHandle ? '‘이미지 저장’을 누르면 이 폴더에 바로 저장돼요. 같은 이름이 있으면 (2)를 붙여요.' : '폴더를 지정하면 ‘이미지 저장’이 그 폴더에 바로 쌓여요.'))),
        h('div', { class: 'folder-actions' },
          h('button', { type: 'button', class: 'btn btn-sm', onclick: pickFolder }, dirHandle ? '폴더 바꾸기' : '폴더 지정'),
          dirHandle ? h('button', { type: 'button', class: 'link-btn muted', onclick: clearFolder }, '해제') : null));
    }
  }
}

let lastImages = [];
async function exportImages() {
  if (busy) return;
  if (!(await loadExporter())) { toast('이미지 변환 도구를 불러오지 못했어요. 인터넷 연결을 확인해 주세요.'); return; }
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

/* =========================================================
   사진 자르기: 끌어서 위치 · 확대로 보일 부분 고르기, 모양(정사각형 · 직사각형 · 원) 선택
   ========================================================= */
const CROP_SHAPES = [['free', '원본'], ['1:1', '정사각형'], ['4:3', '가로 4:3'], ['3:4', '세로 3:4'], ['16:9', '와이드'], ['circle', '원']];
let cropJob = null;
let lastCropShape = ''; // 마지막으로 자른 모양 (원이면 테두리도 동그랗게)
function loadImg(src) {
  return new Promise((res, rej) => { const im = new Image(); im.onload = () => res(im); im.onerror = rej; im.src = src; });
}
/** src를 잘라 dataURL로 돌려줌. 취소하면 null, '자르지 않고 넣기'면 원래 src.
 *  opts: { avatar: true } — 원형 미리보기 · 정사각형 256px 고정 */
async function cropImage(src, opts = {}) {
  if (!/^data:/i.test(src)) return src; // 외부에서 막힌 링크는 자를 수 없음
  let im;
  try { im = await loadImg(src); } catch (e) { return src; }
  if (cropJob) cropJob.resolve(null);
  return new Promise((resolve) => {
    const stage = $('#crop-stage'), img = $('#crop-img'), frame = $('#crop-frame'), zoom = $('#crop-zoom');
    const job = cropJob = { resolve: (v) => { if (cropJob === job) cropJob = null; $('#crop').hidden = true; resolve(v); } };
    const iw = im.naturalWidth, ih = im.naturalHeight;
    let shape = opts.avatar ? 'circle' : (opts.shape || '1:1');
    let fr, base, s, tx, ty;
    $('#crop-title').textContent = opts.avatar ? '프로필 사진 위치' : '사진 자르기';
    $('#crop-sub').textContent = opts.avatar ? '끌어서 얼굴이 원 안에 오도록 맞추고, 확대해서 크기를 골라요.' : '모양을 고르고, 끌어서 위치를 옮기고 확대해서 보일 부분을 골라요.';
    $('#crop-skip').hidden = !!opts.avatar;
    img.src = src;
    const box = $('#crop-shapes');
    box.innerHTML = '';
    box.hidden = !!opts.avatar;
    if (!opts.avatar) {
      box.append(segEl(CROP_SHAPES, shape, (v) => { shape = v; layout(true); }, true));
    }
    const aspect = () => {
      if (shape === 'free') return iw / ih;
      if (shape === 'circle') return 1;
      const [a, b] = shape.split(':').map(Number);
      return a / b;
    };
    const clamp = () => {
      s = Math.max(base, s);
      tx = Math.min(fr.x, Math.max(fr.x + fr.w - iw * s, tx));
      ty = Math.min(fr.y, Math.max(fr.y + fr.h - ih * s, ty));
    };
    const paint = () => {
      clamp();
      img.style.width = `${iw * s}px`; img.style.height = `${ih * s}px`;
      img.style.transform = `translate(${tx}px, ${ty}px)`;
      zoom.value = String(s / base);
      zoom.style.setProperty('--p', `${((s / base - 1) / 3) * 100}%`);
    };
    const layout = (reset) => {
      const SW = stage.clientWidth, SH = stage.clientHeight, m = 22;
      const ar = aspect();
      let w = SW - m * 2, hh = w / ar;
      if (hh > SH - m * 2) { hh = SH - m * 2; w = hh * ar; }
      const cx = fr ? fr.x + fr.w / 2 : 0, cy = fr ? fr.y + fr.h / 2 : 0;
      const keep = !reset && fr && s ? { rx: (cx - tx) / s, ry: (cy - ty) / s, z: s / base } : null;
      fr = { x: (SW - w) / 2, y: (SH - hh) / 2, w, h: hh };
      Object.assign(frame.style, { left: `${fr.x}px`, top: `${fr.y}px`, width: `${w}px`, height: `${hh}px` });
      frame.classList.toggle('round', shape === 'circle');
      base = Math.max(w / iw, hh / ih);
      // 모양을 바꿔도 보던 곳의 가운데를 유지
      const prev = keep || (reset && s ? { rx: (cx - tx) / s, ry: (cy - ty) / s, z: 1 } : null);
      s = base * (prev ? prev.z : 1);
      const rx = prev ? prev.rx : iw / 2, ry = prev ? prev.ry : ih / 2;
      tx = fr.x + w / 2 - rx * s; ty = fr.y + hh / 2 - ry * s;
      paint();
    };
    const zoomAt = (ns, px, py) => {
      ns = Math.min(base * 4, Math.max(base, ns));
      tx = px - ((px - tx) / s) * ns; ty = py - ((py - ty) / s) * ns; s = ns; paint();
    };
    // 끌기 · 두 손가락 확대
    const pts = new Map();
    let last = null;
    stage.onpointerdown = (e) => { e.preventDefault(); stage.setPointerCapture(e.pointerId); pts.set(e.pointerId, { x: e.clientX, y: e.clientY }); last = null; };
    stage.onpointermove = (e) => {
      if (!pts.has(e.pointerId)) return;
      const prev = pts.get(e.pointerId);
      pts.set(e.pointerId, { x: e.clientX, y: e.clientY });
      if (pts.size === 1) { tx += e.clientX - prev.x; ty += e.clientY - prev.y; paint(); return; }
      const [a, b] = [...pts.values()];
      const dist = Math.hypot(a.x - b.x, a.y - b.y);
      const r = stage.getBoundingClientRect();
      if (last) zoomAt(s * (dist / last), (a.x + b.x) / 2 - r.left, (a.y + b.y) / 2 - r.top);
      last = dist;
    };
    stage.onpointerup = stage.onpointercancel = (e) => { pts.delete(e.pointerId); last = null; };
    stage.onwheel = (e) => {
      e.preventDefault();
      const r = stage.getBoundingClientRect();
      zoomAt(s * Math.exp(-e.deltaY * 0.0015), e.clientX - r.left, e.clientY - r.top);
    };
    zoom.oninput = () => zoomAt(base * +zoom.value, fr.x + fr.w / 2, fr.y + fr.h / 2);
    $('#crop-skip').onclick = () => { lastCropShape = ''; job.resolve(src); };
    $('#crop-ok').onclick = () => {
      const sx = (fr.x - tx) / s, sy = (fr.y - ty) / s, sw = fr.w / s, sh = fr.h / s;
      const max = opts.avatar ? 256 : 1600;
      const k = Math.min(1, max / Math.max(sw, sh));
      const cw = Math.max(1, Math.round(sw * k)), ch = Math.max(1, Math.round(sh * k));
      const cv = document.createElement('canvas');
      cv.width = cw; cv.height = ch;
      const g = cv.getContext('2d');
      if (shape === 'circle' && !opts.avatar) { g.beginPath(); g.arc(cw / 2, ch / 2, Math.min(cw, ch) / 2, 0, Math.PI * 2); g.clip(); }
      g.imageSmoothingQuality = 'high';
      g.drawImage(im, sx, sy, sw, sh, 0, 0, cw, ch);
      let out;
      try {
        if (shape === 'circle' && !opts.avatar) out = cv.toDataURL('image/png');
        else { out = cv.toDataURL('image/webp', 0.9); if (!out.startsWith('data:image/webp')) out = cv.toDataURL('image/jpeg', 0.92); }
      } catch (err) { out = src; }
      lastCropShape = shape;
      job.resolve(out);
    };
    $('#crop').hidden = false;
    requestAnimationFrame(() => layout(true));
  });
}
// 닫기 버튼 · 바깥 누르기로 닫으면 취소
new MutationObserver(() => { if ($('#crop').hidden && cropJob) cropJob.resolve(null); }).observe($('#crop'), { attributes: true, attributeFilter: ['hidden'] });

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
  else if (a === 'tour') showTour(0);
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
    run() { dropBgChars(); state.skin = ''; state.bgHtml = ''; state.bgRef = ''; } },
  { id: 'design', icon: 'type', title: '디자인 초기화', desc: '서체 · 말풍선 · 화면 · 스킨을 기본 디자인으로. 글과 캐릭터는 그대로예요', done: '디자인을 기본으로 되돌렸어요',
    run() {
      for (const k of DESIGN_KEYS) state[k] = copyState(DEFAULTS[k]);
      dropBgChars();
      state.skin = ''; state.bgHtml = ''; state.bgRef = '';
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
    run() { state.text = ''; state.title = ''; state.credit = ''; state.creator = ''; state.overrides = {}; state.images = {}; state.stickers = []; } },
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
    const raw = JSON.parse(await f.text());
    state = migrate(deepMerge(copyState(DEFAULTS), raw), raw);
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
// 따로 보관한 사진을 불러와 다시 그림 (예전 설정은 다음 자동 저장 때 사진만 옮겨 짐)
restoreImages().then((n) => { if (n) { rebuildAll(); resetHistory(); } save(); });
if (state.bgRef) loadBgRef(state.bgRef).then(() => { htmlBg.cache.clear(); render(); }).catch(() => toast('배경을 불러오지 못했어요'));

/* ── 첫 방문 튜토리얼: 메뉴를 하나씩 강조하며 설명 ── */
const TOUR = [
  { pane: 'text', title: '텍스트', body: '발췌할 글을 붙여넣고 편집해요. 제목 · 출처(작품명 · 제작자)도 여기서 입력해요.' },
  { pane: 'bubble', title: '말풍선', body: '말풍선 모양 · 크기 · 색을 바꾸고, 말풍선 옆 사진과 이름 표시를 정해요.' },
  { pane: 'chars', title: '캐릭터', body: '말풍선 캐릭터를 설정해요. 따로 입력하지 않아도 로그에서 인식된 캐릭터는 자동으로 추가돼요.' },
  { pane: 'typo', title: '서체', body: '글꼴 · 크기 · 행간 · 자간부터 줄바꿈 · 드롭캡 같은 세세한 조판까지 다듬어요.' },
  { pane: 'canvas', title: '화면', body: '배경색과 화면 비율을 정해요. ‘자유’(기본)는 길이 상관없이 한 장으로, 비율을 고르면 넘치는 글은 다음 장으로 넘어가요. 저장할 이미지의 파일 이름도 여기서 정해요.' },
  { pane: 'skin', title: '스킨', body: 'HTML · CSS를 넣어 자유롭게 꾸밀 수 있어요.' },
  { pane: 'template', title: '프리셋', body: '지금 쓰는 설정을 저장해 두고 불러와요. 바로 입혀 볼 수 있는 기본 템플릿 테마도 있어요.' },
  { target: '#btn-save', title: '저장 · 복사', body: '다 꾸몄다면 이미지로 저장하거나 복사해서 바로 붙여넣으세요.' },
];
let tourIdx = -1;
const tourEls = {};
function tourEnsure() {
  if (tourEls.spot) return;
  tourEls.spot = h('div', { class: 'tour-spot' });
  tourEls.card = h('div', { class: 'tour-card', role: 'dialog', 'aria-live': 'polite' });
  tourEls.block = h('div', { class: 'tour-block', onclick: (e) => e.stopPropagation() });
  document.body.append(tourEls.block, tourEls.spot, tourEls.card);
  window.addEventListener('resize', () => { if (tourIdx >= 0) placeTour(); });
}
function tourTarget(step) {
  return step.target ? $(step.target) : $(`.rail-item[data-pane="${step.pane}"]`);
}
function placeTour() {
  const step = TOUR[tourIdx];
  const t = tourTarget(step);
  if (!t) return;
  const r = t.getBoundingClientRect();
  const pad = 6;
  Object.assign(tourEls.spot.style, { left: `${r.left - pad}px`, top: `${r.top - pad}px`, width: `${r.width + pad * 2}px`, height: `${r.height + pad * 2}px` });
  const c = tourEls.card;
  const cw = c.offsetWidth, chh = c.offsetHeight;
  let x, y;
  if (isMobile() && !step.target) { x = (innerWidth - cw) / 2; y = r.top - chh - 18; }
  else if (step.target) { x = r.right - cw; y = r.bottom + 16; }
  else { x = r.right + 18; y = r.top + r.height / 2 - chh / 2; }
  c.style.left = `${Math.max(12, Math.min(x, innerWidth - cw - 12))}px`;
  c.style.top = `${Math.max(12, Math.min(y, innerHeight - chh - 12))}px`;
}
function showTour(i) {
  tourEnsure();
  tourIdx = i;
  const step = TOUR[i];
  if (step.pane) {
    setPane(step.pane, false);
    if (isMobile()) setSheet(false);
  }
  const last = i === TOUR.length - 1;
  tourEls.card.innerHTML = '';
  tourEls.card.append(
    h('div', { class: 'tour-step' }, `${i + 1} / ${TOUR.length}`),
    h('h4', {}, step.title),
    h('p', {}, step.body),
    h('div', { class: 'tour-dots' }, TOUR.map((_, k) => h('i', { class: k === i ? 'on' : '' }))),
    h('div', { class: 'tour-actions' },
      h('button', { type: 'button', class: 'link-btn muted', onclick: endTour }, '건너뛰기'),
      h('span', { class: 'spacer' }),
      i > 0 ? h('button', { type: 'button', class: 'btn btn-sm', onclick: () => showTour(i - 1) }, '이전') : null,
      h('button', { type: 'button', class: 'btn btn-primary btn-sm', onclick: () => (last ? endTour() : showTour(i + 1)) }, last ? '시작하기' : '다음')));
  [tourEls.spot, tourEls.card, tourEls.block].forEach((el) => (el.hidden = false));
  requestAnimationFrame(placeTour);
}
function endTour() {
  tourIdx = -1;
  ['spot', 'card', 'block'].forEach((k) => tourEls[k] && (tourEls[k].hidden = true));
  setPane('text', false);
  if (isMobile()) setSheet(true);
  uiState.tourSeen = true; saveUi();
}
document.addEventListener('keydown', (e) => {
  if (tourIdx < 0) return;
  if (e.key === 'Escape') endTour();
  else if (e.key === 'ArrowRight') showTour(Math.min(TOUR.length - 1, tourIdx + 1));
  else if (e.key === 'ArrowLeft') showTour(Math.max(0, tourIdx - 1));
});
function askTour() {
  const m = h('div', { class: 'modal', id: 'tour-ask' },
    h('div', { class: 'modal-box narrow tour-ask' },
      h('div', { class: 'tour-bunny', html: BRAND }),
      h('h3', {}, '튜토리얼 볼까요?'),
      h('div', { class: 'tour-ask-actions' },
        h('button', { type: 'button', class: 'btn', onclick: () => { m.remove(); uiState.tourSeen = true; saveUi(); } }, 'ㄴㄴㄴ'),
        h('button', { type: 'button', class: 'btn btn-primary', onclick: () => { m.remove(); showTour(0); } }, '니니닝!'))));
  document.body.append(m);
}
if (!uiState.tourSeen) setTimeout(askTour, 400);
