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
  image: '<rect x="4" y="5" width="16" height="14" rx="2.5"/><circle cx="9" cy="10" r="1.6"/><path d="m5 17 4.5-4.5 3 3L15 13l4 4"/>',
};
const icon = (n) => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ICONS[n] || ''}</svg>`;
const BRAND = '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M5.5 5h13A2.5 2.5 0 0 1 21 7.5v7a2.5 2.5 0 0 1-2.5 2.5H12l-4.5 3.5V17h-2A2.5 2.5 0 0 1 3 14.5v-7A2.5 2.5 0 0 1 5.5 5z"/></svg>';

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
];
const TRI_TAIL = ['round', 'pill', 'square', 'outline', 'dashed'];
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

const SAMPLE = `비가 그친 오후였다. 창밖의 물방울이 하나둘 미끄러져 내렸다.

서윤: "오늘은 안 올 줄 알았어."

문이 열리고, 그는 젖은 우산을 접으며 웃었다.

도현: "약속했잖아. 비가 와도 온다고."

(거짓말. 사실은 한참을 망설였으면서.)

서윤은 대답 대신 찻잔을 하나 더 꺼냈다. ==따뜻한 김==이 천천히 피어올랐다.`;

const DEFAULTS = {
  text: SAMPLE,
  title: '비 갠 오후',
  credit: '— 「작은 찻집」 중에서',
  parse: { quotes: true, parens: true, inline: false, strip: true, nameless: 'none' },
  typo: { font: 'Noto Serif KR', fontCustom: '', size: 16, lh: 1.9, ls: -0.01, weight: 400, color: '#2b2a27', align: 'left', gap: 12, indent: 0, hl: '#ffe58a' },
  head: { font: 'Noto Serif KR', fontCustom: '', size: 24, weight: 700, color: '#1d1c1a', align: 'left', creditSize: 13, creditColor: '#8a857c', creditAlign: 'right', quoteMark: false, accent: '#c8a46a' },
  bubble: {
    speech: 'round', thought: 'thought', tail: true, side: 'left',
    font: 'Pretendard', fontCustom: '', size: 15, lh: 1.6, ls: -0.01, weight: 400,
    bg: '#ffffff', color: '#222222', border: '#2b2a27', bw: 0, radius: 18, px: 16, py: 10, maxw: 78, shadow: true, gap: 16,
    avatar: true, avatarSize: 44, avatarShape: 'circle', showName: true, nameSize: 12, nameColor: '#6b665e',
  },
  canvas: { ratio: '4:5', width: 540, pad: 44, bg: '#f7f3ea', bgImage: '', overlay: 0, overlayColor: '#000000', valign: 'center', fit: false, paginate: true, pageNum: false, scale: 2 },
  chars: [
    { id: 'c1', name: '서윤', avatar: '', side: 'left', shape: '', custom: true, bg: '#ffffff', color: '#222222', border: '#e3a6a6' },
    { id: 'c2', name: '도현', avatar: '', side: 'right', shape: '', custom: true, bg: '#33415c', color: '#ffffff', border: '#33415c' },
  ],
  overrides: {},
  skin: '',
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
.bubble { box-shadow: 0 4px 14px rgba(120, 100, 180, .15); }`,
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
  polaroid: {
    name: '폴라로이드',
    css: `.card { box-shadow: inset 0 0 0 18px #ffffff, inset 0 0 0 19px rgba(0,0,0,.06); }
.card-footer { margin-top: 28px; }`,
  },
  glass: {
    name: '반투명 말풍선',
    css: `/* 배경 이미지와 함께 쓰면 좋아요 */
.bubble {
  background: rgba(255, 255, 255, .72);
  border: 1px solid rgba(255, 255, 255, .6);
  box-shadow: 0 8px 24px rgba(0, 0, 0, .12);
}
.msg-right .bubble { background: rgba(25, 31, 40, .72); color: #fff; }`,
  },
};

const TEMPLATES = [
  { id: 'paper', name: '따뜻한 종이', sub: '본명조 · 기본', pv: { bg: '#f7f3ea', fg: '#2b2a27', b1: '#ffffff', b2: '#33415c' }, set: {}, chars: [['#ffffff', '#222222', '#e3a6a6'], ['#33415c', '#ffffff', '#33415c']] },
  {
    id: 'clean', name: '미니멀 화이트', sub: '프리텐다드 · 메신저', pv: { bg: '#ffffff', fg: '#191f28', b1: '#f2f4f6', b2: '#3182f6' },
    set: { typo: { font: 'Pretendard', color: '#191f28', lh: 1.8, ls: -0.02 }, head: { font: 'Pretendard', color: '#191f28', creditColor: '#8b95a1' }, bubble: { speech: 'messenger', bg: '#f2f4f6', color: '#191f28', shadow: false, nameColor: '#8b95a1' }, canvas: { bg: '#ffffff' } },
    chars: [['#f2f4f6', '#191f28', '#f2f4f6'], ['#3182f6', '#ffffff', '#3182f6']],
  },
  {
    id: 'night', name: '다크 노블', sub: '본명조 · 어두운 배경', pv: { bg: '#17171c', fg: '#e8e4dc', b1: '#2c2c36', b2: '#e8e4dc' },
    set: { typo: { color: '#e8e4dc' }, head: { color: '#ffffff', creditColor: '#8b8b99' }, bubble: { bg: '#26262f', color: '#f2f2f2', border: '#3a3a46', shadow: false, nameColor: '#a3a3b5' }, canvas: { bg: '#17171c' } },
    chars: [['#2c2c36', '#f2f2f2', '#5c5c70'], ['#e8e4dc', '#17171c', '#e8e4dc']],
  },
  {
    id: 'messenger', name: '메신저', sub: '채팅 화면 스타일', pv: { bg: '#b9cde0', fg: '#4a5a6a', b1: '#ffffff', b2: '#ffe94a' },
    set: { typo: { font: 'Pretendard', size: 13, color: '#4a5a6a', align: 'center', lh: 1.6 }, head: { font: 'Pretendard', size: 20, color: '#2c3a48', creditColor: '#5a6b7c' }, bubble: { speech: 'messenger', radius: 14, shadow: false, nameColor: '#4a5a6a', gap: 12 }, canvas: { bg: '#b9cde0' } },
    chars: [['#ffffff', '#222222', '#ffffff'], ['#ffe94a', '#222222', '#ffe94a']],
  },
  {
    id: 'quote', name: '인용 카드', sub: '송명 · 1:1 · 큰 따옴표', pv: { bg: '#f4efe6', fg: '#3a3229', q: '#b08d57', center: true },
    set: { typo: { font: 'Song Myung', size: 21, lh: 1.85, align: 'center', color: '#3a3229' }, head: { font: 'Song Myung', size: 20, align: 'center', color: '#3a3229', creditColor: '#9a8b76', creditAlign: 'center', quoteMark: true, accent: '#b08d57' }, bubble: { speech: 'plain', thought: 'plain', font: 'Song Myung', size: 19, avatar: false, showName: false, side: 'center' }, canvas: { bg: '#f4efe6', ratio: '1:1', pad: 64, fit: true } },
    chars: null, charSide: 'center',
  },
  {
    id: 'note', name: '손글씨 노트', sub: '나눔손글씨 펜 · 줄 노트', pv: { bg: '#fffdf6', fg: '#2f3b52', b1: '#ffffff', b2: '#fff3bf', lines: true, outline: '#9fb0c6' },
    set: { typo: { font: 'Nanum Pen Script', size: 24, lh: 1.25, color: '#2f3b52', gap: 0, ls: 0 }, head: { font: 'Nanum Pen Script', size: 34, color: '#2f3b52', creditColor: '#7b8799', creditSize: 18 }, bubble: { speech: 'outline', font: 'Gaegu', size: 16, border: '#9fb0c6', bw: 1.5, shadow: false, nameColor: '#7b8799' }, canvas: { bg: '#fffdf6' } },
    skin: SKINS.note.css, chars: [['#ffffff', '#2f3b52', '#9fb0c6'], ['#fff3bf', '#2f3b52', '#e6c84f']],
  },
  {
    id: 'film', name: '영화 자막', sub: '16:9 · 검은 화면', pv: { bg: '#000000', fg: '#9a9a9a', film: true },
    set: { typo: { font: 'Noto Sans KR', color: '#d8d8d8', size: 15 }, head: { font: 'Noto Sans KR', color: '#ffffff', creditColor: '#777777', align: 'center', creditAlign: 'center' }, bubble: { font: 'Noto Sans KR', size: 18, color: '#ffffff', nameColor: '#ffd43b', gap: 14 }, canvas: { bg: '#000000', ratio: '16:9', pad: 40 } },
    skin: SKINS.film.css, chars: [['#000000', '#ffffff', '#000000'], ['#000000', '#ffffff', '#000000']],
  },
  {
    id: 'pastel', name: '파스텔', sub: '고운돋움 · 그라데이션', pv: { bg: 'linear-gradient(160deg,#ffe3ec,#ece6ff 50%,#dff3ff)', fg: '#4a4560', b1: 'rgba(255,255,255,.9)', b2: '#b197fc' },
    set: { typo: { font: 'Gowun Dodum', color: '#4a4560' }, head: { font: 'Gowun Dodum', color: '#3b3552', creditColor: '#8a82a8' }, bubble: { speech: 'pill', font: 'Gowun Dodum', nameColor: '#8a7fb0' }, canvas: { bg: '#f3eaff' } },
    skin: SKINS.pastel.css, chars: [['#ffffff', '#4a4560', '#ffffff'], ['#b197fc', '#ffffff', '#b197fc']],
  },
  {
    id: 'vintage', name: '빈티지', sub: '나눔명조 · 액자', pv: { bg: '#efe4cc', fg: '#3b2f22', b1: '#f8f0de', b2: '#8a7356', frame: true },
    set: { typo: { font: 'Nanum Myeongjo', color: '#3b2f22' }, head: { font: 'Nanum Myeongjo', color: '#2a2017', creditColor: '#7a6650' }, bubble: { speech: 'square', font: 'Nanum Myeongjo', bg: '#f8f0de', color: '#3b2f22', border: '#8a7356', bw: 1, shadow: false, nameColor: '#7a6650' }, canvas: { bg: '#efe4cc', pad: 56 } },
    skin: SKINS.vintage.css, chars: [['#f8f0de', '#3b2f22', '#8a7356'], ['#8a7356', '#f8f0de', '#8a7356']],
  },
  {
    id: 'terminal', name: '레트로 터미널', sub: '고정폭 · 초록 글씨', pv: { bg: '#0b110b', fg: '#4dff88', b1: '#0b110b', b2: '#0b110b', outline: '#4dff88' },
    set: { typo: { font: 'monospace', color: '#4dff88', size: 15 }, head: { font: 'monospace', color: '#8dffb0', creditColor: '#2e9e57' }, bubble: { speech: 'square', font: 'monospace', bg: '#0b110b', color: '#4dff88', border: '#4dff88', bw: 1, shadow: false, nameColor: '#2e9e57', avatar: false }, canvas: { bg: '#0b110b' } },
    skin: SKINS.terminal.css, chars: [['#0b110b', '#4dff88', '#4dff88'], ['#0b110b', '#8dffb0', '#8dffb0']],
  },
];

const PANES = [
  { id: 'text', label: '텍스트', icon: 'text', desc: '발췌할 글을 붙여넣으세요. 따옴표와 괄호로 감싼 줄은 자동으로 말풍선이 돼요.' },
  { id: 'template', label: '템플릿', icon: 'grid', desc: '어울리는 디자인을 한 번에 입혀요. 글과 캐릭터 이름 · 사진은 그대로예요.' },
  { id: 'bubble', label: '말풍선', icon: 'bubble', desc: '말풍선 모양과 색, 프로필 표시 방식을 정해요.' },
  { id: 'chars', label: '캐릭터', icon: 'person', desc: '본문에 이름: "대사" 형식으로 쓰면 여기 등록한 캐릭터와 연결돼요.' },
  { id: 'typo', label: '서체', icon: 'type', desc: '본문, 말풍선, 제목의 글꼴과 간격을 다듬어요.' },
  { id: 'canvas', label: '화면', icon: 'frame', desc: '비율과 크기, 배경을 정해요.' },
  { id: 'skin', label: '스킨', icon: 'code', desc: 'CSS로 디자인을 자유롭게 덮어써요.' },
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
    .replace(/==(.+?)==/g, '<mark>$1</mark>')
    .replace(/(^|[^*])\*([^*\s][^*]*?)\*(?!\*)/g, '$1<i>$2</i>');
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

function loadState() {
  try {
    const raw = localStorage.getItem(STORE_KEY);
    if (raw) return deepMerge(copyState(DEFAULTS), JSON.parse(raw));
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
const PAIRS_SPEECH = [['"', '"'], ['“', '”'], ['「', '」'], ['『', '』'], ['‘', '’'], ["'", "'"], ['＂', '＂']];
const PAIRS_THOUGHT = [['(', ')'], ['（', '）']];
const INLINE_RE = /(“[^”]+”|"[^"]+"|「[^」]+」|『[^』]+』)/;

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
  m = line.match(/^([^\s:："“「『(（'‘\[][^:："“「『]{0,23}?)\s*[:：]\s*(.+)$/);
  if (m) return { name: m[1].trim(), rest: m[2].trim(), strong: false };
  m = line.match(/^(\S{1,12})\s+(["“「『(（].*)$/);
  if (m && findChar(m[1])) return { name: m[1].trim(), rest: m[2].trim(), strong: false };
  return null;
}

function parseText() {
  const P = state.parse;
  const lines = state.text.replace(/\r/g, '').split('\n');
  const out = [];
  const occ = {};
  const bubble = (kind, inner, full, name) => {
    const base = `${kind}|${inner}`;
    occ[base] = (occ[base] || 0) + 1;
    out.push({ type: 'bubble', kind, inner, full, name: name || null, key: `${base}|${occ[base]}` });
  };

  for (const raw of lines) {
    const line = raw.trim();
    if (!line) {
      if (out.length && out[out.length - 1].type !== 'gap') out.push({ type: 'gap' });
      continue;
    }
    if (/^(-{3,}|\*{3,}|_{3,}|—{2,})$/.test(line)) { out.push({ type: 'hr' }); continue; }

    const sp = splitSpeaker(line);
    if (sp) {
      const ws = wrapped(sp.rest, PAIRS_SPEECH);
      const wt = wrapped(sp.rest, PAIRS_THOUGHT);
      if (sp.strong || findChar(sp.name) || ws || wt) {
        const kind = wt && !ws ? 'thought' : 'speech';
        const w = ws || wt;
        bubble(kind, w ? w.inner : sp.rest, sp.rest, sp.name);
        continue;
      }
    }
    if (P.quotes) {
      const w = wrapped(line, PAIRS_SPEECH);
      if (w) { bubble('speech', w.inner, line); continue; }
    }
    if (P.parens) {
      const w = wrapped(line, PAIRS_THOUGHT);
      if (w) { bubble('thought', w.inner, line); continue; }
    }
    if (P.inline && P.quotes && INLINE_RE.test(line)) {
      for (const part of line.split(INLINE_RE)) {
        const t = part.trim();
        if (!t) continue;
        const w = wrapped(t, PAIRS_SPEECH);
        if (w) bubble('speech', w.inner, t);
        else out.push({ type: 'narr', text: t });
      }
      continue;
    }
    out.push({ type: 'narr', text: line });
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
    b.shape = o.shape || (b.kind === 'thought' ? state.bubble.thought : (ch && ch.shape) || state.bubble.speech);
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
  return ch && ch.custom && ch.border !== ch.bg ? ch.border : colorFor(name || '?');
}

function genCSS() {
  const { typo: t, bubble: b, head: hd, canvas: c } = state;
  const ar = { circle: '50%', rounded: '28%', square: '4px' }[b.avatarShape] || '50%';
  const fit = (v) => `calc(${v}px * var(--fit, 1))`;
  let css = `.card {
  --card-bg: ${c.bg};
  --overlay: ${c.overlay};
  --overlay-color: ${c.overlayColor};
  --pad: ${c.pad}px;
  --valign: ${c.valign};
  --accent: ${hd.accent};
  --hl: ${t.hl};
  --text-font: ${fontStack(t.font, t.fontCustom)};
  --text-size: ${fit(t.size)};
  --text-lh: ${t.lh};
  --text-ls: ${t.ls}em;
  --text-weight: ${t.weight};
  --text-color: ${t.color};
  --text-align: ${t.align};
  --para-gap: ${fit(t.gap)};
  --indent: ${t.indent}em;
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
  --b-shadow: ${b.shadow ? '0 2px 10px rgba(0,0,0,.08)' : 'none'};
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
  --credit-size: ${hd.creditSize}px;
  --credit-color: ${hd.creditColor};
  --credit-align: ${hd.creditAlign};
}`;
  if (c.bgImage) css += `\n.card { background-image: url("${c.bgImage}"); }`;
  return css;
}

function applySkin() {
  const src = state.skin || '';
  const styles = [...src.matchAll(/<style[^>]*>([\s\S]*?)<\/style>/gi)].map((m) => m[1]);
  $('#skin-style').textContent = styles.length ? styles.join('\n') : src.replace(/<\/?[a-z][^>]*>/gi, '');
}

let editingKey = null;

function renderBlock(b) {
  if (b.type === 'narr') return h('p', { class: 'narr', html: fmt(b.text) });
  if (b.type === 'gap') return h('div', { class: 'gap' });
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
  body.append(h('div', { class: 'bubble', html: fmt(state.parse.strip ? b.inner : b.full) }));
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
  const card = h('div', { class: 'card' + (H ? '' : ' auto-h') });
  card.style.width = W + 'px';
  if (H) card.style.height = H + 'px';
  card.append(h('div', { class: 'card-overlay' }));
  if (idx === 0 && state.head.quoteMark) card.append(h('div', { class: 'quote-mark', 'aria-hidden': 'true' }, '“'));
  if (idx === 0 && state.title.trim()) card.append(h('h2', { class: 'card-title', html: fmt(state.title) }));
  const content = h('div', { class: 'card-content' });
  const flow = h('div', { class: 'flow' });
  content.append(flow);
  card.append(content);
  if (state.credit.trim() || state.canvas.pageNum) {
    const foot = h('div', { class: 'card-footer' });
    foot.append(h('div', { class: 'credit', html: fmt(state.credit) }));
    if (state.canvas.pageNum) foot.append(h('span', { class: 'page-num' }, '0 / 0'));
    card.append(foot);
  }
  const label = h('div', { class: 'page-label' });
  const wrap = h('div', { class: 'page-wrap' }, label, card);
  return { wrap, card, content, flow, label };
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

  for (const b of blocks) {
    if (b.type === 'gap' && !page.flow.childElementCount) continue;
    const el = renderBlock(b);
    page.flow.append(el);
    if (split && page.flow.childElementCount > 1 && overflows(page)) {
      el.remove();
      trimGaps(page.flow);
      page = newPage(pages.length, W, H);
      stage.append(page.wrap);
      pages.push(page);
      if (b.type === 'gap') continue;
      page.flow.append(el);
    }
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

  lastStats = { bubbles: blocks.filter((b) => b.type === 'bubble').length, pages: pages.length };
  updateStats();
  const sc = c.scale;
  $('#page-info').textContent = `${pages.length}장 · ${W * sc}×${H ? H * sc : '자동'}`;

  if (cardObserver) {
    cardObserver.disconnect();
    pages.forEach((p) => cardObserver.observe(p.card));
  }
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

function updateStats() {
  const n = state.text.replace(/\s/g, '').length;
  $('#text-stats').textContent = `${n.toLocaleString()}자 · 말풍선 ${lastStats.bubbles}개 · ${lastStats.pages}장`;
}

/* =========================================================
   설정 컨트롤
   ========================================================= */
let conditions = [];
function refreshConditions() {
  for (const { el, when } of conditions) el.classList.toggle('disabled', !when());
}

const fixedRatio = () => state.canvas.ratio !== 'auto';

const SCHEMA = {
  text: [
    { sec: '제목 · 출처', rows: [
      { t: 'text', p: 'title', l: '제목', ph: '비워두면 표시하지 않아요' },
      { t: 'text', p: 'credit', l: '출처 · 서명', ph: '예) — 「책 제목」 중에서 / @내계정' },
    ] },
    { sec: '대사 인식', rows: [
      { t: 'switch', p: 'parse.quotes', l: '따옴표 줄을 말풍선으로', sub: '" "  “ ”  「 」  『 』' },
      { t: 'switch', p: 'parse.parens', l: '괄호 줄을 생각 말풍선으로', sub: '( )' },
      { t: 'switch', p: 'parse.inline', l: '문장 속 따옴표도 분리', sub: '서술 중간에 있는 대사도 말풍선으로 꺼내요' },
      { t: 'switch', p: 'parse.strip', l: '따옴표 · 괄호 기호 숨기기' },
      { t: 'select', p: 'parse.nameless', l: '이름 없는 대사의 화자', o: () => [['none', '지정 안 함'], ['alt', '번갈아 가며'], ...state.chars.map((c) => [c.id, c.name || '(이름 없음)'])] },
    ] },
  ],
  bubble: [
    { sec: '대사 말풍선', rows: [{ t: 'shapes', p: 'bubble.speech' }] },
    { sec: '생각 말풍선', rows: [{ t: 'shapes', p: 'bubble.thought' }] },
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
      { t: 'slider', p: 'bubble.nameSize', l: '이름 크기', min: 8, max: 24, step: 0.5, u: 'px', when: () => state.bubble.showName },
      { t: 'color', p: 'bubble.nameColor', l: '이름 색', when: () => state.bubble.showName },
    ] },
  ],
  typo: [
    { sec: '본문', rows: [
      { t: 'font', p: 'typo.font', c: 'typo.fontCustom' },
      { t: 'slider', p: 'typo.size', l: '크기', min: 10, max: 40, step: 0.5, u: 'px' },
      { t: 'slider', p: 'typo.lh', l: '행간', min: 1, max: 3, step: 0.05, u: '' },
      { t: 'slider', p: 'typo.ls', l: '자간', min: -0.1, max: 0.3, step: 0.005, u: 'em' },
      { t: 'select', p: 'typo.weight', l: '굵기', o: WEIGHTS, num: true },
      { t: 'color', p: 'typo.color', l: '글자 색' },
      { t: 'seg', p: 'typo.align', l: '정렬', o: ALIGN4, block: true },
      { t: 'slider', p: 'typo.gap', l: '문단 간격', min: 0, max: 40, step: 1, u: 'px' },
      { t: 'slider', p: 'typo.indent', l: '첫 줄 들여쓰기', min: 0, max: 4, step: 0.5, u: 'em' },
      { t: 'color', p: 'typo.hl', l: '형광펜 색', sub: '==이렇게== 감싼 글자' },
    ] },
    { sec: '말풍선 글자', rows: [
      { t: 'font', p: 'bubble.font', c: 'bubble.fontCustom' },
      { t: 'slider', p: 'bubble.size', l: '크기', min: 10, max: 36, step: 0.5, u: 'px' },
      { t: 'slider', p: 'bubble.lh', l: '행간', min: 1, max: 2.6, step: 0.05, u: '' },
      { t: 'slider', p: 'bubble.ls', l: '자간', min: -0.1, max: 0.3, step: 0.005, u: 'em' },
      { t: 'select', p: 'bubble.weight', l: '굵기', o: WEIGHTS, num: true },
    ] },
    { sec: '제목', rows: [
      { t: 'font', p: 'head.font', c: 'head.fontCustom' },
      { t: 'slider', p: 'head.size', l: '크기', min: 12, max: 64, step: 1, u: 'px' },
      { t: 'select', p: 'head.weight', l: '굵기', o: WEIGHTS, num: true },
      { t: 'color', p: 'head.color', l: '색' },
      { t: 'seg', p: 'head.align', l: '정렬', o: ALIGN3 },
      { t: 'switch', p: 'head.quoteMark', l: '장식 따옴표', sub: '첫 장 위에 큰 따옴표를 넣어요' },
      { t: 'color', p: 'head.accent', l: '장식 색', when: () => state.head.quoteMark },
    ] },
    { sec: '출처', rows: [
      { t: 'slider', p: 'head.creditSize', l: '크기', min: 8, max: 28, step: 0.5, u: 'px' },
      { t: 'color', p: 'head.creditColor', l: '색' },
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
      { t: 'slider', p: 'canvas.pad', l: '바깥 여백', min: 0, max: 120, step: 1, u: 'px' },
    ] },
    { sec: '배경', rows: [
      { t: 'color', p: 'canvas.bg', l: '배경 색' },
      { t: 'image', p: 'canvas.bgImage', l: '배경 이미지', sub: '미리보기에 이미지를 끌어다 놓아도 돼요' },
      { t: 'slider', p: 'canvas.overlay', l: '덮개 진하기', min: 0, max: 0.9, step: 0.05, u: '', when: () => !!state.canvas.bgImage },
      { t: 'color', p: 'canvas.overlayColor', l: '덮개 색', when: () => !!state.canvas.bgImage },
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
  const val = getPath(d.p);
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
      el = h('div', { class: 'row stack' }, h('div', { class: 'row-top' }, labelEl(d.l), num), slider);
      break;
    }

    case 'seg': {
      const seg = segEl(d.o, val, (v) => setPath(d.p, d.num ? +v : v), d.block);
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
  return el;
}

async function setImagePath(p, file) {
  try {
    setPath(p, await shrinkImage(file, 2000, false));
  } catch (e) { toast('이미지를 읽지 못했어요'); }
}

function buildFields() {
  conditions = [];
  for (const [key, secs] of Object.entries(SCHEMA)) {
    const box = $(`[data-fields="${key}"]`);
    box.innerHTML = '';
    for (const s of secs) {
      box.append(h('div', { class: 'section-title' }, s.sec));
      box.append(h('div', { class: 'section' }, s.rows.map(fieldEl)));
      if (s.note) box.append(h('p', { class: 'footnote' }, s.note));
    }
  }
  refreshConditions();
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
        h('button', { type: 'button', class: 'link-btn', onclick: () => { delete state.overrides[key]; changed(); wrap.replaceWith(build()); } }, '자동으로 되돌리기'),
        h('button', { type: 'button', class: 'btn btn-primary btn-sm', onclick: closePop }, '완료')));
    return wrap;
  };

  openPop(build(), anchor, () => {
    editingKey = null;
    $$('#stage .msg.editing').forEach((m) => m.classList.remove('editing'));
  });
}

$('#stage').addEventListener('click', (e) => {
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
    pane.prepend(h('header', { class: 'pane-head' }, h('h2', {}, p.label), h('p', {}, p.desc)));
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

function insertSnippet(before, after = '', block = true) {
  const s = src.selectionStart, e = src.selectionEnd, v = src.value;
  const sel = v.slice(s, e);
  let pre = before;
  if (block && s > 0 && v[s - 1] !== '\n') pre = '\n' + pre;
  src.setRangeText(pre + sel + after, s, e, 'end');
  const caret = sel ? s + pre.length + sel.length + after.length : s + pre.length;
  src.focus();
  src.setSelectionRange(caret, caret);
  src.dispatchEvent(new Event('input'));
}

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
  const plain = (label, title, fn) => box.append(h('button', { type: 'button', class: 'qi plain', title, onmousedown: (e) => e.preventDefault(), onclick: fn }, label));
  plain('“대사”', '이름 없는 대사', () => insertSnippet('"', '"'));
  plain('(생각)', '생각 말풍선', () => insertSnippet('(', ')'));
  plain('==강조==', '선택한 글자에 형광펜', () => insertSnippet('==', '==', false));
  plain('구분선', '구분선 넣기', () => insertSnippet('---\n', '', true));
}

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
    if (p.film || p.center) {
      pv.append(line(78, true), line(64, true), line(70, true));
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

function applyTemplate(t) {
  const c0 = state.canvas;
  const keep = { width: c0.width, scale: c0.scale, paginate: c0.paginate, pageNum: c0.pageNum, ratio: c0.ratio, fit: c0.fit, bgImage: c0.bgImage, overlay: c0.overlay, overlayColor: c0.overlayColor };
  for (const k of ['typo', 'head', 'bubble', 'canvas']) {
    const base = copyState(DEFAULTS[k]);
    state[k] = deepMerge(base, (t.set && t.set[k]) || {});
  }
  Object.assign(state.canvas, keep);
  for (const k of ['ratio', 'fit']) if (t.set.canvas && k in t.set.canvas) state.canvas[k] = t.set.canvas[k];
  state.skin = t.skin || '';
  state.chars.forEach((c, i) => {
    if (t.chars) {
      const [bg, color, border] = t.chars[i % t.chars.length];
      Object.assign(c, { custom: true, bg, color, border });
    } else c.custom = false;
    c.side = t.charSide || (i % 2 ? 'right' : 'left');
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
function buildChars() {
  const list = $('#chars-list');
  list.innerHTML = '';
  if (!state.chars.length) list.append(h('p', { class: 'footnote' }, '아직 캐릭터가 없어요. 아래 버튼으로 추가해 보세요.'));
  state.chars.forEach((ch, i) => {
    const av = h('label', { class: 'char-av', title: '얼굴 사진 올리기' });
    if (ch.avatar) av.style.backgroundImage = `url("${ch.avatar}")`;
    else { av.textContent = [...(ch.name || '?')][0]; av.style.background = avatarColor(ch, ch.name); }
    const file = h('input', { type: 'file', accept: 'image/*', hidden: true });
    const setAvatar = async (f) => {
      try {
        ch.avatar = await shrinkImage(f, 256, true);
        changed(); buildChars(); buildQuickInsert();
      } catch (e) { toast('이미지를 읽지 못했어요'); }
    };
    file.addEventListener('change', () => file.files[0] && setAvatar(file.files[0]));
    av.append(file, h('span', { class: 'cam', html: icon('camera') }));

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
        h('div', { class: 'row' }, labelEl('위치'), segEl(SIDES, ch.side, (v) => { ch.side = v; changed(); })),
        h('div', { class: 'row' }, labelEl('말풍선 모양'), shapeSel),
        h('label', { class: 'row' }, labelEl('개별 색상'), customSw),
        colorRow,
        ch.avatar ? h('div', { class: 'row' }, labelEl('얼굴 사진'), h('button', { type: 'button', class: 'btn btn-sm', onclick: () => { ch.avatar = ''; changed(); buildChars(); buildQuickInsert(); } }, '사진 지우기')) : null));
    dropTarget(card, isImageFile, setAvatar);
    list.append(card);
  });
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
  $('#skin-css').value = state.skin;
}
let skinTimer;
$('#skin-css').addEventListener('input', (e) => {
  state.skin = e.target.value;
  clearTimeout(skinTimer);
  skinTimer = setTimeout(() => { applySkin(); changed(); }, 250);
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

function cardToPng(card, fontCSS) {
  return htmlToImage.toPng(card, {
    width: card.offsetWidth,
    height: card.offsetHeight,
    pixelRatio: state.canvas.scale,
    style: { transform: 'none', position: 'static', left: '0', top: '0', boxShadow: 'none' },
    fontEmbedCSS: fontCSS,
    cacheBust: false,
  });
}

function download(url, name) {
  const a = h('a', { href: url, download: name });
  document.body.append(a);
  a.click();
  a.remove();
}

const fileBase = () => (state.title || 'excerpt').replace(/[\\/:*?"<>|\s]+/g, '_').slice(0, 40) || 'excerpt';
const fileName = (i) => `${fileBase()}_${String(i + 1).padStart(2, '0')}.png`;

let lastImages = [];
let exporting = false;
async function exportImages() {
  if (exporting) return;
  if (typeof htmlToImage === 'undefined') { toast('이미지 변환 도구를 불러오지 못했어요'); return; }
  const btn = $('#btn-save');
  const label = $('.btn-label', btn);
  const orig = label.textContent;
  exporting = true;
  btn.disabled = true;
  closePop();
  editingKey = null;
  $$('#stage .msg.editing').forEach((m) => m.classList.remove('editing'));
  try {
    label.textContent = '만드는 중…';
    await document.fonts.ready;
    const cards = $$('#stage .card');
    const fontCSS = await buildFontEmbedCSS(cards);
    lastImages = [];
    for (let i = 0; i < cards.length; i++) {
      if (cards.length > 1) label.textContent = `${i + 1} / ${cards.length}`;
      lastImages.push(await cardToPng(cards[i], fontCSS));
    }
    showResult();
  } catch (err) {
    console.error(err);
    toast('이미지를 만들지 못했어요. 다시 시도해 주세요.', null, 3600);
  } finally {
    exporting = false;
    btn.disabled = false;
    label.textContent = orig;
  }
}
$('#btn-save').addEventListener('click', exportImages);

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
        h('a', { class: 'btn btn-sm', href: url, download: fileName(i) }, '저장'),
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
  $('#btn-dl-all').lastChild.textContent = n > 1 ? '전부 저장' : '저장';
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
  else if (a === 'export-json') {
    const blob = new Blob([JSON.stringify(state, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    download(url, `${fileBase()}_설정.json`);
    setTimeout(() => URL.revokeObjectURL(url), 2000);
  } else if (a === 'reset') {
    if (!confirm('모든 글과 설정을 처음 상태로 되돌릴까요?')) return;
    state = copyState(DEFAULTS);
    commit(); rebuildAll(); save();
    toast('처음 상태로 되돌렸어요', { label: '되돌리기', fn: undo });
  }
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
setPane('text', false);
if (isMobile()) setSheet(true);
rebuildAll();
resetHistory();
