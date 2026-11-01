'use strict';

/* =========================================================
   기본 데이터
   ========================================================= */
const STORE_KEY = 'excerpt-studio-v1';

const FONTS = [
  { n: 'Pretendard', label: '프리텐다드', css: 'https://cdn.jsdelivr.net/npm/pretendard@1.3.9/dist/web/static/pretendard-dynamic-subset.min.css' },
  { n: 'Noto Sans KR', label: '본고딕 (Noto Sans KR)', w: '300;400;500;700;900' },
  { n: 'Noto Serif KR', label: '본명조 (Noto Serif KR)', w: '300;400;500;700;900' },
  { n: 'Nanum Myeongjo', label: '나눔명조', w: '400;700;800' },
  { n: 'Nanum Gothic', label: '나눔고딕', w: '400;700;800' },
  { n: 'Gowun Batang', label: '고운바탕', w: '400;700' },
  { n: 'Gowun Dodum', label: '고운돋움', w: '400' },
  { n: 'Hahmlet', label: '함렛', w: '300;400;500;700' },
  { n: 'IBM Plex Sans KR', label: 'IBM Plex Sans KR', w: '300;400;500;700' },
  { n: 'Gothic A1', label: 'Gothic A1', w: '300;400;500;700;900' },
  { n: 'Song Myung', label: '송명', w: '400' },
  { n: 'Nanum Pen Script', label: '나눔손글씨 펜', w: '400' },
  { n: 'Gaegu', label: '개구', w: '300;400;700' },
  { n: 'Hi Melody', label: '하이멜로디', w: '400' },
  { n: 'Gamja Flower', label: '감자꽃', w: '400' },
  { n: 'Poor Story', label: '푸어스토리', w: '400' },
  { n: 'Yeon Sung', label: '연성', w: '400' },
  { n: 'Jua', label: '주아', w: '400' },
  { n: 'Do Hyeon', label: '도현', w: '400' },
  { n: 'Black Han Sans', label: '검은고딕', w: '400' },
  { n: 'Dongle', label: '동글', w: '300;400;700' },
  { n: 'Orbit', label: '오르빗', w: '400' },
  { n: 'East Sea Dokdo', label: '동해독도', w: '400' },
  { n: 'system-ui', label: '시스템 기본 (고딕)', sys: true },
  { n: 'serif', label: '시스템 기본 (명조)', sys: true },
  { n: 'monospace', label: '고정폭', sys: true },
];

const SHAPES = [
  ['round', '둥근 말풍선'], ['pill', '알약'], ['square', '각진'], ['messenger', '메신저'],
  ['thought', '생각 구름'], ['shout', '외침 (뾰족)'], ['outline', '외곽선'], ['dashed', '점선 (속삭임)'],
  ['minimal', '세로 라인'], ['plain', '텍스트만'],
];
const TRI_TAIL = ['round', 'pill', 'square', 'outline', 'dashed'];
const SIDES = [['left', '왼쪽'], ['right', '오른쪽'], ['center', '가운데']];
const ALIGNS = [['left', '왼쪽'], ['center', '가운데'], ['right', '오른쪽'], ['justify', '양쪽 맞춤']];
const WEIGHTS = [[300, '얇게 300'], [400, '보통 400'], [500, '중간 500'], [700, '굵게 700'], [900, '아주 굵게 900']];
const RATIOS = [
  ['1:1', '1:1 정사각'], ['4:5', '4:5 세로 (인스타)'], ['3:4', '3:4 세로'], ['2:3', '2:3 세로'],
  ['9:16', '9:16 스토리'], ['16:9', '16:9 가로'], ['4:3', '4:3 가로'], ['auto', '자유 (내용 길이에 맞춤)'],
];

const SAMPLE = `비가 그친 오후였다. 창밖의 물방울이 하나둘 미끄러져 내렸다.

서윤: "오늘은 안 올 줄 알았어."

문이 열리고, 그는 젖은 우산을 접으며 웃었다.

도현: "약속했잖아. 비가 와도 온다고."

(거짓말. 사실은 한참을 망설였으면서.)

서윤은 대답 대신 찻잔을 하나 더 꺼냈다. **따뜻한 김**이 천천히 피어올랐다.`;

const DEFAULTS = {
  text: SAMPLE,
  title: '비 갠 오후',
  credit: '— 「작은 찻집」 중에서',
  parse: { quotes: true, parens: true, inline: false, strip: true, nameless: 'none' },
  typo: { font: 'Noto Serif KR', fontCustom: '', size: 16, lh: 1.9, ls: -0.01, weight: 400, color: '#2b2a27', align: 'left', gap: 12, indent: 0 },
  head: { font: 'Noto Serif KR', fontCustom: '', size: 24, weight: 700, color: '#1d1c1a', align: 'left', creditSize: 13, creditColor: '#8a857c', creditAlign: 'right' },
  bubble: {
    speech: 'round', thought: 'thought', tail: true, side: 'left',
    font: 'Pretendard', fontCustom: '', size: 15, lh: 1.6, ls: -0.01, weight: 400,
    bg: '#ffffff', color: '#222222', border: '#2b2a27', bw: 0, radius: 18, px: 16, py: 10, maxw: 78, shadow: true, gap: 16,
    avatar: true, avatarSize: 44, avatarShape: 'circle', showName: true, nameSize: 12, nameColor: '#6b665e',
  },
  canvas: { ratio: '4:5', width: 540, pad: 44, bg: '#f7f3ea', bgImage: '', overlay: 0, overlayColor: '#000000', valign: 'center', paginate: true, pageNum: false, scale: 2 },
  chars: [
    { id: 'c1', name: '서윤', avatar: '', side: 'left', shape: '', custom: true, bg: '#ffffff', color: '#222222', border: '#e3a6a6' },
    { id: 'c2', name: '도현', avatar: '', side: 'right', shape: '', custom: true, bg: '#33415c', color: '#ffffff', border: '#33415c' },
  ],
  overrides: {},
  skin: '',
};

const SKINS = {
  dark: {
    name: '다크 노블',
    css: `.card {
  --card-bg: #17171c;
  --text-color: #e8e4dc;
  --title-color: #ffffff;
  --credit-color: #8b8b99;
  --b-bg: #272730;
  --b-color: #f2f2f2;
  --b-border: #3a3a46;
  --name-color: #a3a3b5;
}`,
  },
  note: {
    name: '줄 노트',
    css: `.card {
  --card-bg: #fffdf6;
  background-image:
    linear-gradient(90deg, transparent 30px, #f0b4b4 30px, #f0b4b4 31px, transparent 31px),
    repeating-linear-gradient(transparent 0 29px, #dbe4ee 29px 30px);
}
.bubble { --b-bw: 1px; --b-border: #c9d3df; }`,
  },
  messenger: {
    name: '메신저',
    css: `.card { --card-bg: #b9cde0; --text-color: #36424f; --credit-color: #556677; }
.msg-left .bubble { --b-bg: #ffffff; --b-color: #222; --b-border: #ffffff; }
.msg-right .bubble { --b-bg: #ffe94a; --b-color: #222; --b-border: #ffe94a; }
.bubble { --b-radius: 14px; box-shadow: none; }
.name { --name-color: #4a5a6a; }
.narr { text-align: center; font-size: 13px; opacity: .85; }`,
  },
  terminal: {
    name: '레트로 터미널',
    css: `.card {
  --card-bg: #0b110b;
  --text-color: #4dff88;
  --title-color: #8dffb0;
  --credit-color: #2e9e57;
  --b-bg: transparent;
  --b-color: #4dff88;
  --b-border: #4dff88;
  --name-color: #2e9e57;
  text-shadow: 0 0 6px rgba(77, 255, 136, .5);
}
.card .narr, .card .bubble, .card .name, .card-title, .card-footer { font-family: "Courier New", monospace; }
.bubble { border-width: 1px; border-radius: 0; box-shadow: none; }
.card::after {
  content: ""; position: absolute; inset: 0; pointer-events: none;
  background: repeating-linear-gradient(rgba(0,0,0,.22) 0 1px, transparent 1px 3px);
}`,
  },
  vintage: {
    name: '빈티지 종이',
    css: `.card {
  --card-bg: #efe4cc;
  --text-color: #3b2f22;
  --title-color: #2a2017;
  --credit-color: #7a6650;
  --b-bg: #f8f0de;
  --b-border: #8a7356;
  --b-color: #3b2f22;
  --b-bw: 1px;
  --name-color: #7a6650;
  background-image: radial-gradient(ellipse at center, transparent 55%, rgba(90, 60, 20, .25) 100%);
}
.card::after {
  content: ""; position: absolute; inset: 14px; pointer-events: none;
  border: 1px solid rgba(80, 55, 30, .35);
  outline: 1px solid rgba(80, 55, 30, .2); outline-offset: 4px;
}
.bubble { box-shadow: none; }`,
  },
  pastel: {
    name: '파스텔 그라데이션',
    css: `.card {
  background-image: linear-gradient(160deg, #ffe3ec 0%, #ece6ff 50%, #dff3ff 100%);
  --text-color: #4a4560;
  --title-color: #3b3552;
  --credit-color: #8a82a8;
  --b-bg: rgba(255, 255, 255, .8);
  --b-border: transparent;
  --name-color: #8a7fb0;
}
.bubble { box-shadow: 0 4px 14px rgba(120, 100, 180, .15); }`,
  },
  script: {
    name: '영화 자막',
    css: `.card {
  --card-bg: #000;
  --text-color: #d8d8d8;
  --title-color: #fff;
  --credit-color: #777;
  --b-color: #fff;
  --name-color: #ffd43b;
}
.msg, .msg-right { flex-direction: column; align-items: center; gap: 4px; }
.msg .msg-body { align-items: center; max-width: 100%; }
.avatar { display: none; }
.bubble { background: none; border: 0; box-shadow: none; padding: 0; text-align: center; clip-path: none; }
.bubble::before, .bubble::after { display: none; }
.narr { text-align: center; font-style: italic; opacity: .75; }`,
  },
};

/* =========================================================
   유틸
   ========================================================= */
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const clone = (o) => JSON.parse(JSON.stringify(o));

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

function deepMerge(base, extra) {
  if (Array.isArray(base)) return Array.isArray(extra) ? extra : base;
  if (typeof base !== 'object' || base === null) return extra === undefined ? base : extra;
  const out = { ...base };
  if (extra && typeof extra === 'object') {
    for (const k of Object.keys(extra)) {
      out[k] = k in base ? deepMerge(base[k], extra[k]) : extra[k];
    }
  }
  return out;
}

const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
function fmt(s) {
  return esc(s)
    .replace(/\*\*(.+?)\*\*/g, '<b>$1</b>')
    .replace(/(^|[^*])\*([^*\s][^*]*?)\*(?!\*)/g, '$1<i>$2</i>');
}

let toastTimer;
function toast(msg, ms = 2400) {
  const t = $('#toast');
  t.textContent = msg;
  t.hidden = false;
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => (t.hidden = true), ms);
}

function readFileAsDataURL(file) {
  return new Promise((res, rej) => {
    const fr = new FileReader();
    fr.onload = () => res(fr.result);
    fr.onerror = rej;
    fr.readAsDataURL(file);
  });
}

/** 이미지를 줄여서 dataURL로 (저장 용량 절약) */
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

/* =========================================================
   상태
   ========================================================= */
let state = loadState();

function loadState() {
  try {
    const raw = localStorage.getItem(STORE_KEY);
    if (raw) return deepMerge(clone(DEFAULTS), JSON.parse(raw));
  } catch (e) { /* 무시 */ }
  return clone(DEFAULTS);
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
        toast('이미지가 커서 브라우저에 자동 저장되지 않았어요. "설정 저장"으로 파일을 보관하세요.', 4000);
      }
    }
  }, 300);
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
}

/* =========================================================
   폰트 로딩
   ========================================================= */
const loadedFonts = new Set();
function fontName(name, custom) { return (custom || '').trim() || name; }
function fontStack(name, custom) {
  const n = fontName(name, custom);
  const f = FONTS.find((x) => x.n === n);
  if (f && f.sys) return n;
  return `"${n.replace(/"/g, '')}", system-ui, sans-serif`;
}
function ensureFont(n) {
  if (loadedFonts.has(n)) return;
  const f = FONTS.find((x) => x.n === n);
  if (!f || f.sys) return;
  loadedFonts.add(n);
  const href = f.css || `https://fonts.googleapis.com/css2?family=${encodeURIComponent(n).replace(/%20/g, '+')}:wght@${f.w}&display=swap`;
  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.crossOrigin = 'anonymous'; // 이미지 저장 시 폰트를 읽기 위해 필요
  link.href = href;
  link.onload = () => {
    document.fonts.load(`16px "${n}"`, '가나다abc').finally(scheduleRender);
  };
  document.head.insertBefore(link, $('#gen-style'));
}
function ensureFonts() {
  ensureFont(fontName(state.typo.font, state.typo.fontCustom));
  ensureFont(fontName(state.bubble.font, state.bubble.fontCustom));
  ensureFont(fontName(state.head.font, state.head.fontCustom));
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

/* 화자 · 위치 · 모양 결정 */
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
const PALETTE = ['#e8590c', '#2f9e44', '#1971c2', '#9c36b5', '#c2255c', '#0c8599', '#5f3dc4', '#e67700'];
function colorFor(name) {
  let x = 0;
  for (const c of name) x = (x * 31 + c.codePointAt(0)) >>> 0;
  return PALETTE[x % PALETTE.length];
}

function genCSS() {
  const { typo: t, bubble: b, head: hd, canvas: c } = state;
  const ar = { circle: '50%', rounded: '28%', square: '4px' }[b.avatarShape] || '50%';
  let css = `.card {
  --card-bg: ${c.bg};
  --overlay: ${c.overlay};
  --overlay-color: ${c.overlayColor};
  --pad: ${c.pad}px;
  --valign: ${c.valign};
  --text-font: ${fontStack(t.font, t.fontCustom)};
  --text-size: ${t.size}px;
  --text-lh: ${t.lh};
  --text-ls: ${t.ls}em;
  --text-weight: ${t.weight};
  --text-color: ${t.color};
  --text-align: ${t.align};
  --para-gap: ${t.gap}px;
  --indent: ${t.indent}em;
  --b-font: ${fontStack(b.font, b.fontCustom)};
  --b-size: ${b.size}px;
  --b-lh: ${b.lh};
  --b-ls: ${b.ls}em;
  --b-weight: ${b.weight};
  --b-bg: ${b.bg};
  --b-color: ${b.color};
  --b-border: ${b.border};
  --b-bw: ${b.bw}px;
  --b-radius: ${b.radius}px;
  --b-px: ${b.px}px;
  --b-py: ${b.py}px;
  --b-maxw: ${b.maxw}%;
  --b-shadow: ${b.shadow ? '0 2px 10px rgba(0,0,0,.08)' : 'none'};
  --msg-gap: ${b.gap}px;
  --avatar-size: ${b.avatarSize}px;
  --avatar-radius: ${ar};
  --name-size: ${b.nameSize}px;
  --name-color: ${b.nameColor};
  --title-font: ${fontStack(hd.font, hd.fontCustom)};
  --title-size: ${hd.size}px;
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
    class: `msg msg-${side} kind-${b.kind} shape-${shape} ${tail}`.trim(),
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
      av.style.background = ch && ch.custom && ch.border !== ch.bg ? ch.border : colorFor(speaker);
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
  const wrap = h('div', { class: 'page-wrap' }, card);
  return { wrap, card, content, flow };
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

function render() {
  ensureFonts();
  $('#gen-style').textContent = genCSS();
  const blocks = parseText();
  resolveBubbles(blocks);

  const stage = $('#stage');
  const scrollTop = stage.scrollTop;
  stage.innerHTML = '';
  const W = state.canvas.width;
  const H = ratioHeight(W);
  const split = H && state.canvas.paginate;

  const pages = [];
  let page = newPage(0, W, H);
  stage.append(page.wrap);
  pages.push(page);

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

  pages.forEach((p, i) => {
    const pn = $('.page-num', p.card);
    if (pn) pn.textContent = `${i + 1} / ${pages.length}`;
    p.wrap.classList.toggle('overflowing', !!H && overflows(p));
  });
  const sc = state.canvas.scale;
  $('#page-info').textContent = `${pages.length}장 · ${W * sc} × ${H ? H * sc + 'px' : '높이 자동'}`;
  if (cardObserver) {
    cardObserver.disconnect();
    pages.forEach((p) => cardObserver.observe(p.card));
  }
  rescale();
  stage.scrollTop = scrollTop;
}

const cardObserver = typeof ResizeObserver !== 'undefined' ? new ResizeObserver(() => requestAnimationFrame(rescale)) : null;

function rescale() {
  const stage = $('#stage');
  const avail = stage.clientWidth - 32;
  $$('.page-wrap', stage).forEach((wrap) => {
    const card = wrap.firstElementChild;
    const W = card.offsetWidth, Hc = card.offsetHeight;
    const s = Math.min(1, avail / W);
    card.style.transform = s < 1 ? `scale(${s})` : '';
    wrap.style.width = W * s + 'px';
    wrap.style.height = Hc * s + 'px';
  });
}

/* =========================================================
   설정 패널 (스키마로 자동 생성)
   ========================================================= */
const fontOptions = () => FONTS.map((f) => [f.n, f.label]);

const SCHEMA = {
  text: [
    { g: '제목 · 출처' },
    { t: 'text', p: 'title', l: '제목 (첫 장 위쪽, 비우면 숨김)' },
    { t: 'text', p: 'credit', l: '출처 · 서명 (아래쪽, 비우면 숨김)' },
    { g: '대사 인식' },
    { t: 'toggle', p: 'parse.quotes', l: '따옴표로 감싼 줄 → 말풍선' },
    { t: 'toggle', p: 'parse.parens', l: '괄호로 감싼 줄 → 생각 말풍선' },
    { t: 'toggle', p: 'parse.inline', l: '문장 중간의 따옴표도 말풍선으로 분리' },
    { t: 'toggle', p: 'parse.strip', l: '말풍선 안에서 따옴표·괄호 기호 숨기기' },
    { t: 'select', p: 'parse.nameless', l: '이름 없는 대사의 화자', o: () => [['none', '지정 안 함'], ['alt', '캐릭터끼리 번갈아'], ...state.chars.map((c) => [c.id, c.name || '(이름 없음)'])] },
  ],
  bubble: [
    { g: '모양' },
    { t: 'select', p: 'bubble.speech', l: '대사 말풍선', o: SHAPES },
    { t: 'select', p: 'bubble.thought', l: '생각(괄호) 말풍선', o: SHAPES },
    { t: 'toggle', p: 'bubble.tail', l: '말풍선 꼬리 표시' },
    { t: 'select', p: 'bubble.side', l: '화자 없는 말풍선 위치', o: SIDES },
    { t: 'range', p: 'bubble.maxw', l: '최대 너비', min: 30, max: 100, step: 1, u: '%' },
    { t: 'range', p: 'bubble.radius', l: '모서리 둥글기', min: 0, max: 40, step: 1, u: 'px' },
    { t: 'range', p: 'bubble.px', l: '안쪽 여백 (좌우)', min: 0, max: 40, step: 1, u: 'px' },
    { t: 'range', p: 'bubble.py', l: '안쪽 여백 (위아래)', min: 0, max: 30, step: 1, u: 'px' },
    { t: 'range', p: 'bubble.gap', l: '말풍선 앞뒤 간격', min: 0, max: 48, step: 1, u: 'px' },
    { g: '색상 (캐릭터 개별 색이 우선)' },
    { t: 'color', p: 'bubble.bg', l: '말풍선 배경' },
    { t: 'color', p: 'bubble.color', l: '말풍선 글자' },
    { t: 'color', p: 'bubble.border', l: '테두리' },
    { t: 'range', p: 'bubble.bw', l: '테두리 두께', min: 0, max: 6, step: 0.5, u: 'px' },
    { t: 'toggle', p: 'bubble.shadow', l: '그림자' },
    { g: '프로필' },
    { t: 'toggle', p: 'bubble.avatar', l: '얼굴 사진 표시' },
    { t: 'range', p: 'bubble.avatarSize', l: '사진 크기', min: 20, max: 100, step: 1, u: 'px' },
    { t: 'select', p: 'bubble.avatarShape', l: '사진 모양', o: [['circle', '원'], ['rounded', '둥근 사각'], ['square', '사각']] },
    { t: 'toggle', p: 'bubble.showName', l: '이름 표시' },
    { t: 'range', p: 'bubble.nameSize', l: '이름 크기', min: 8, max: 24, step: 0.5, u: 'px' },
    { t: 'color', p: 'bubble.nameColor', l: '이름 색' },
  ],
  typo: [
    { g: '본문 (서술)' },
    { t: 'font', p: 'typo.font', c: 'typo.fontCustom', l: '서체' },
    { t: 'range', p: 'typo.size', l: '크기', min: 10, max: 40, step: 0.5, u: 'px' },
    { t: 'range', p: 'typo.lh', l: '행간', min: 1, max: 3, step: 0.05, u: '' },
    { t: 'range', p: 'typo.ls', l: '자간', min: -0.1, max: 0.3, step: 0.005, u: 'em' },
    { t: 'select', p: 'typo.weight', l: '굵기', o: WEIGHTS, num: true },
    { t: 'color', p: 'typo.color', l: '글자 색' },
    { t: 'select', p: 'typo.align', l: '정렬', o: ALIGNS },
    { t: 'range', p: 'typo.gap', l: '문단 간격', min: 0, max: 40, step: 1, u: 'px' },
    { t: 'range', p: 'typo.indent', l: '첫 줄 들여쓰기', min: 0, max: 4, step: 0.5, u: 'em' },
    { g: '말풍선 글자' },
    { t: 'font', p: 'bubble.font', c: 'bubble.fontCustom', l: '서체' },
    { t: 'range', p: 'bubble.size', l: '크기', min: 10, max: 36, step: 0.5, u: 'px' },
    { t: 'range', p: 'bubble.lh', l: '행간', min: 1, max: 2.6, step: 0.05, u: '' },
    { t: 'range', p: 'bubble.ls', l: '자간', min: -0.1, max: 0.3, step: 0.005, u: 'em' },
    { t: 'select', p: 'bubble.weight', l: '굵기', o: WEIGHTS, num: true },
    { g: '제목 · 출처' },
    { t: 'font', p: 'head.font', c: 'head.fontCustom', l: '서체' },
    { t: 'range', p: 'head.size', l: '제목 크기', min: 12, max: 64, step: 1, u: 'px' },
    { t: 'select', p: 'head.weight', l: '제목 굵기', o: WEIGHTS, num: true },
    { t: 'color', p: 'head.color', l: '제목 색' },
    { t: 'select', p: 'head.align', l: '제목 정렬', o: ALIGNS.slice(0, 3) },
    { t: 'range', p: 'head.creditSize', l: '출처 크기', min: 8, max: 28, step: 0.5, u: 'px' },
    { t: 'color', p: 'head.creditColor', l: '출처 색' },
    { t: 'select', p: 'head.creditAlign', l: '출처 정렬', o: ALIGNS.slice(0, 3) },
  ],
  canvas: [
    { g: '크기 · 비율' },
    { t: 'select', p: 'canvas.ratio', l: '화면 비율', o: RATIOS },
    { t: 'range', p: 'canvas.width', l: '가로 크기 (기준)', min: 320, max: 1080, step: 10, u: 'px' },
    { t: 'select', p: 'canvas.scale', l: '저장 배율', o: [[1, '1배'], [2, '2배 (고화질)'], [3, '3배']], num: true },
    { t: 'toggle', p: 'canvas.paginate', l: '넘치면 다음 장으로 나누기' },
    { t: 'toggle', p: 'canvas.pageNum', l: '페이지 번호 표시' },
    { t: 'select', p: 'canvas.valign', l: '세로 정렬', o: [['flex-start', '위'], ['center', '가운데'], ['flex-end', '아래']] },
    { t: 'range', p: 'canvas.pad', l: '바깥 여백', min: 0, max: 120, step: 1, u: 'px' },
    { g: '배경' },
    { t: 'color', p: 'canvas.bg', l: '배경 색' },
    { t: 'image', p: 'canvas.bgImage', l: '배경 이미지' },
    { t: 'range', p: 'canvas.overlay', l: '배경 덮개 진하기', min: 0, max: 0.9, step: 0.05, u: '' },
    { t: 'color', p: 'canvas.overlayColor', l: '덮개 색' },
  ],
};

function fieldEl(d) {
  if (d.g) return h('div', { class: 'group-title' }, d.g);
  const val = getPath(d.p);
  const lab = (extra) => h('span', { class: 'lab' }, h('span', {}, d.l), extra || null);

  switch (d.t) {
    case 'text':
      return h('label', { class: 'field f-text' }, lab(),
        h('input', { type: 'text', value: val, oninput: (e) => setPath(d.p, e.target.value) }));

    case 'toggle':
      return h('label', { class: 'field f-toggle' },
        h('input', { type: 'checkbox', checked: val, onchange: (e) => setPath(d.p, e.target.checked) }),
        h('span', {}, d.l));

    case 'range': {
      const fmtV = (v) => `${+(+v).toFixed(3)}${d.u || ''}`;
      const out = h('output', {}, fmtV(val));
      return h('label', { class: 'field f-range' }, lab(out),
        h('input', {
          type: 'range', min: d.min, max: d.max, step: d.step, value: val,
          oninput: (e) => { out.textContent = fmtV(e.target.value); setPath(d.p, +e.target.value); },
        }));
    }

    case 'color': {
      const txt = h('input', { type: 'text', value: val, maxlength: 9 });
      const pick = h('input', { type: 'color', value: /^#[0-9a-f]{6}$/i.test(val) ? val : '#000000' });
      pick.addEventListener('input', () => { txt.value = pick.value; setPath(d.p, pick.value); });
      txt.addEventListener('change', () => {
        const v = txt.value.trim();
        if (/^#([0-9a-f]{3}|[0-9a-f]{6}|[0-9a-f]{8})$/i.test(v)) {
          if (v.length === 7) pick.value = v;
          setPath(d.p, v);
        } else txt.value = getPath(d.p);
      });
      return h('div', { class: 'field f-color' }, lab(), h('div', { class: 'color-wrap' }, txt, pick));
    }

    case 'select': {
      const opts = typeof d.o === 'function' ? d.o() : d.o;
      return h('label', { class: 'field f-select' }, lab(),
        h('select', {
          value: String(val),
          onchange: (e) => setPath(d.p, d.num ? +e.target.value : e.target.value),
        }, opts.map(([v, l]) => h('option', { value: String(v) }, l))));
    }

    case 'font': {
      const sel = h('select', { value: val, onchange: (e) => setPath(d.p, e.target.value) },
        fontOptions().map(([v, l]) => h('option', { value: v }, l)));
      const custom = h('input', {
        type: 'text', class: 'font-custom', value: getPath(d.c),
        placeholder: '직접 입력: 설치된 서체 또는 스킨의 @font-face 이름',
        oninput: (e) => setPath(d.c, e.target.value),
      });
      return h('div', { class: 'field f-font' }, lab(), sel, custom);
    }

    case 'image': {
      const thumb = h('div', { class: 'img-thumb' });
      const refresh = () => { thumb.style.backgroundImage = getPath(d.p) ? `url("${getPath(d.p)}")` : ''; };
      refresh();
      const input = h('input', { type: 'file', accept: 'image/*', hidden: true });
      input.addEventListener('change', async () => {
        const f = input.files[0];
        if (!f) return;
        try {
          setPath(d.p, await shrinkImage(f, 2000, false));
          refresh();
        } catch (e) { toast('이미지를 읽지 못했어요.'); }
        input.value = '';
      });
      return h('div', { class: 'field f-image' }, lab(),
        h('div', { class: 'img-field' }, thumb,
          h('label', { class: 'btn small' }, '이미지 선택', input),
          h('button', { type: 'button', class: 'btn small ghost', onclick: () => { setPath(d.p, ''); refresh(); } }, '지우기')));
    }
  }
  return null;
}

function buildFields() {
  for (const [key, defs] of Object.entries(SCHEMA)) {
    const box = $(`[data-fields="${key}"]`);
    box.innerHTML = '';
    defs.forEach((d) => box.append(fieldEl(d)));
  }
}

/* =========================================================
   캐릭터 패널
   ========================================================= */
function buildChars() {
  const list = $('#chars-list');
  list.innerHTML = '';
  state.chars.forEach((ch, i) => {
    const av = h('label', { class: 'char-avatar' + (ch.avatar ? ' has-img' : ''), title: '얼굴 사진 올리기' });
    if (ch.avatar) av.style.backgroundImage = `url("${ch.avatar}")`;
    else av.textContent = '사진';
    const file = h('input', { type: 'file', accept: 'image/*', hidden: true });
    file.addEventListener('change', async () => {
      const f = file.files[0];
      if (!f) return;
      try {
        ch.avatar = await shrinkImage(f, 256, true);
        changed();
        buildChars();
      } catch (e) { toast('이미지를 읽지 못했어요.'); }
    });
    av.append(file);

    const nameIn = h('input', { type: 'text', value: ch.name, placeholder: '캐릭터 이름' });
    nameIn.addEventListener('input', () => { ch.name = nameIn.value; changed(); });
    nameIn.addEventListener('change', buildFields);

    const sideSel = h('select', { value: ch.side, onchange: (e) => { ch.side = e.target.value; changed(); } },
      SIDES.map(([v, l]) => h('option', { value: v }, `위치: ${l}`)));
    const shapeSel = h('select', { value: ch.shape || '', onchange: (e) => { ch.shape = e.target.value; changed(); } },
      [h('option', { value: '' }, '모양: 기본값'), ...SHAPES.map(([v, l]) => h('option', { value: v }, `모양: ${l}`))]);

    const colorIn = (key, label) => {
      const inp = h('input', { type: 'color', value: ch[key], disabled: !ch.custom });
      inp.addEventListener('input', () => { ch[key] = inp.value; changed(); });
      return h('label', {}, inp, label);
    };
    const customChk = h('input', { type: 'checkbox', checked: ch.custom });
    customChk.addEventListener('change', () => { ch.custom = customChk.checked; changed(); buildChars(); });

    const move = (dir) => {
      const j = i + dir;
      if (j < 0 || j >= state.chars.length) return;
      [state.chars[i], state.chars[j]] = [state.chars[j], state.chars[i]];
      changed(); buildChars(); buildFields();
    };

    list.append(h('div', { class: 'char-card' },
      h('div', { class: 'char-top' }, av, nameIn),
      h('div', { class: 'char-row' }, sideSel, shapeSel),
      h('div', { class: 'char-colors' },
        h('label', {}, customChk, '개별 색상'),
        colorIn('bg', '배경'), colorIn('color', '글자'), colorIn('border', '테두리')),
      h('div', { class: 'char-actions' },
        ch.avatar ? h('button', { type: 'button', class: 'btn small ghost', onclick: () => { ch.avatar = ''; changed(); buildChars(); } }, '사진 삭제') : null,
        h('button', { type: 'button', class: 'btn small ghost', onclick: () => move(-1), title: '위로' }, '↑'),
        h('button', { type: 'button', class: 'btn small ghost', onclick: () => move(1), title: '아래로' }, '↓'),
        h('button', {
          type: 'button', class: 'btn small ghost danger',
          onclick: () => {
            if (!confirm(`'${ch.name || '이름 없음'}' 캐릭터를 삭제할까요?`)) return;
            state.chars.splice(i, 1);
            if (state.parse.nameless === ch.id) state.parse.nameless = 'none';
            changed(); buildChars(); buildFields();
          },
        }, '삭제'))));
  });
}

$('#btn-add-char').addEventListener('click', () => {
  const n = state.chars.length;
  state.chars.push({
    id: 'c' + Date.now().toString(36), name: `캐릭터${n + 1}`, avatar: '',
    side: n % 2 ? 'right' : 'left', shape: '', custom: false, bg: '#ffffff', color: '#222222', border: '#888888',
  });
  changed(); buildChars(); buildFields();
});

/* =========================================================
   스킨
   ========================================================= */
function buildSkin() {
  const sel = $('#skin-preset');
  sel.innerHTML = '';
  sel.append(h('option', { value: '' }, '선택하세요…'));
  sel.append(h('option', { value: '__none' }, '없음 (스킨 비우기)'));
  for (const [k, s] of Object.entries(SKINS)) sel.append(h('option', { value: k }, s.name));
  sel.value = '';
  $('#skin-css').value = state.skin;
}
$('#skin-preset').addEventListener('change', (e) => {
  const k = e.target.value;
  if (!k) return;
  if (state.skin.trim() && !confirm('지금 스킨 내용을 프리셋으로 바꿀까요?')) { e.target.value = ''; return; }
  state.skin = k === '__none' ? '' : SKINS[k].css;
  $('#skin-css').value = state.skin;
  e.target.value = '';
  applySkin();
  changed();
});
let skinTimer;
$('#skin-css').addEventListener('input', (e) => {
  state.skin = e.target.value;
  clearTimeout(skinTimer);
  skinTimer = setTimeout(() => { applySkin(); changed(); }, 250);
});
$('#skin-css').addEventListener('keydown', (e) => {
  if (e.key === 'Tab') {
    e.preventDefault();
    const t = e.target, s = t.selectionStart;
    t.setRangeText('  ', s, t.selectionEnd, 'end');
    t.dispatchEvent(new Event('input'));
  }
});

/* =========================================================
   말풍선 개별 편집 팝오버
   ========================================================= */
const pop = $('#popover');
function openPopover(key, x, y) {
  const o = state.overrides[key] || {};
  const label = key.split('|')[1] || '';
  const update = (k, v) => {
    const next = { ...(state.overrides[key] || {}) };
    if (v) next[k] = v; else delete next[k];
    if (Object.keys(next).length) state.overrides[key] = next; else delete state.overrides[key];
    changed();
  };
  const sel = (k, l, opts) => h('label', { class: 'field' }, h('span', { class: 'lab' }, l),
    h('select', { value: o[k] || '', onchange: (e) => update(k, e.target.value) }, opts.map(([v, t]) => h('option', { value: v }, t))));

  pop.innerHTML = '';
  pop.append(
    h('div', { class: 'pop-title' }, `“${label}”`),
    sel('speaker', '화자', [['', '자동'], ['__none', '없음'], ...state.chars.map((c) => [c.id, c.name || '(이름 없음)'])]),
    sel('side', '위치', [['', '자동'], ...SIDES]),
    sel('shape', '모양', [['', '자동'], ...SHAPES]),
    h('div', { class: 'pop-actions' },
      h('button', { type: 'button', class: 'btn small ghost', onclick: () => { delete state.overrides[key]; changed(); closePopover(); } }, '되돌리기'),
      h('button', { type: 'button', class: 'btn small', onclick: closePopover }, '닫기')),
  );
  pop.hidden = false;
  const r = pop.getBoundingClientRect();
  pop.style.left = Math.max(8, Math.min(x, innerWidth - r.width - 8)) + 'px';
  pop.style.top = Math.max(8, Math.min(y, innerHeight - r.height - 8)) + 'px';
}
function closePopover() { pop.hidden = true; }

$('#stage').addEventListener('click', (e) => {
  const msg = e.target.closest('.msg');
  if (!msg) return;
  e.stopPropagation();
  openPopover(msg.dataset.key, e.clientX + 8, e.clientY + 8);
});
document.addEventListener('click', (e) => {
  if (!pop.hidden && !pop.contains(e.target)) closePopover();
});
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') { closePopover(); closeModal(); }
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
  const codes = new Set();
  for (const card of cards) {
    for (const el of [card, ...card.querySelectorAll('*')]) {
      const cs = getComputedStyle(el);
      cs.fontFamily.split(',').forEach((f) => families.add(unquote(f)));
      weights.add(Math.round(parseInt(cs.fontWeight, 10) / 100) * 100 || 400);
    }
    for (const ch of card.textContent) codes.add(ch.codePointAt(0));
  }
  codes.add(32);
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

async function cardToPng(card, fontCSS) {
  const W = card.offsetWidth, H = card.offsetHeight;
  return htmlToImage.toPng(card, {
    width: W,
    height: H,
    pixelRatio: state.canvas.scale,
    style: { transform: 'none', position: 'static', left: '0', top: '0' },
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

let lastImages = [];
$('#btn-save').addEventListener('click', async (e) => {
  if (typeof htmlToImage === 'undefined') { toast('이미지 변환 라이브러리를 불러오지 못했어요. 인터넷 연결을 확인하세요.'); return; }
  const btn = e.currentTarget;
  btn.disabled = true;
  const label = btn.textContent;
  btn.textContent = '만드는 중…';
  closePopover();
  try {
    await document.fonts.ready;
    const cards = $$('#stage .card');
    const fontCSS = await buildFontEmbedCSS(cards);
    lastImages = [];
    for (let i = 0; i < cards.length; i++) {
      btn.textContent = `만드는 중… ${i + 1}/${cards.length}`;
      lastImages.push(await cardToPng(cards[i], fontCSS));
    }
    showModal();
  } catch (err) {
    console.error(err);
    toast('이미지를 만들지 못했어요: ' + (err && err.message ? err.message : '알 수 없는 오류'), 4000);
  } finally {
    btn.disabled = false;
    btn.textContent = label;
  }
});

const fileBase = () => {
  const t = (state.title || 'excerpt').replace(/[\\/:*?"<>|\s]+/g, '_').slice(0, 40) || 'excerpt';
  return t;
};

function showModal() {
  const list = $('#modal-list');
  list.innerHTML = '';
  const canCopy = !!(navigator.clipboard && window.ClipboardItem);
  lastImages.forEach((url, i) => {
    const name = `${fileBase()}_${String(i + 1).padStart(2, '0')}.png`;
    list.append(h('div', { class: 'modal-item' },
      h('img', { src: url, alt: `${i + 1}번째 이미지` }),
      h('div', { class: 'row' },
        h('a', { class: 'btn small', href: url, download: name }, '다운로드'),
        canCopy ? h('button', {
          type: 'button', class: 'btn small ghost',
          onclick: async () => {
            try {
              const blob = await (await fetch(url)).blob();
              await navigator.clipboard.write([new ClipboardItem({ 'image/png': blob })]);
              toast('클립보드에 복사했어요.');
            } catch (err) { toast('복사하지 못했어요.'); }
          },
        }, '복사') : null)));
  });
  $('#btn-dl-all').hidden = lastImages.length < 2;
  $('#modal').hidden = false;
}
function closeModal() { $('#modal').hidden = true; }
$('#btn-modal-close').addEventListener('click', closeModal);
$('#modal').addEventListener('click', (e) => { if (e.target.id === 'modal') closeModal(); });
$('#btn-dl-all').addEventListener('click', async () => {
  for (let i = 0; i < lastImages.length; i++) {
    download(lastImages[i], `${fileBase()}_${String(i + 1).padStart(2, '0')}.png`);
    await new Promise((r) => setTimeout(r, 350));
  }
});

/* =========================================================
   설정 파일 · 초기화
   ========================================================= */
$('#btn-export-json').addEventListener('click', () => {
  const blob = new Blob([JSON.stringify(state, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  download(url, `${fileBase()}_설정.json`);
  setTimeout(() => URL.revokeObjectURL(url), 2000);
});
$('#file-import-json').addEventListener('change', async (e) => {
  const f = e.target.files[0];
  if (!f) return;
  try {
    state = deepMerge(clone(DEFAULTS), JSON.parse(await f.text()));
    rebuildAll();
    save();
    toast('설정을 불러왔어요.');
  } catch (err) { toast('설정 파일을 읽지 못했어요.'); }
  e.target.value = '';
});
$('#btn-reset').addEventListener('click', () => {
  if (!confirm('모든 텍스트와 설정을 처음 상태로 되돌릴까요?')) return;
  state = clone(DEFAULTS);
  rebuildAll();
  save();
});

/* =========================================================
   시작
   ========================================================= */
$$('.tab').forEach((t) => t.addEventListener('click', () => {
  $$('.tab').forEach((x) => x.classList.toggle('active', x === t));
  $$('.pane').forEach((p) => p.classList.toggle('active', p.dataset.pane === t.dataset.tab));
}));

let srcTimer;
$('#src').addEventListener('input', (e) => {
  state.text = e.target.value;
  clearTimeout(srcTimer);
  srcTimer = setTimeout(changed, 120);
});

function rebuildAll() {
  $('#src').value = state.text;
  buildFields();
  buildChars();
  buildSkin();
  applySkin();
  render();
}

window.addEventListener('resize', () => requestAnimationFrame(rescale));
if (document.fonts) {
  document.fonts.addEventListener('loadingdone', scheduleRender);
  document.fonts.ready.then(scheduleRender);
}
rebuildAll();
