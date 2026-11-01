# 발췌 스튜디오

텍스트를 붙여넣으면 대사는 말풍선으로, 서술은 원하는 서체와 비율로 정리해 PNG 이미지로 저장하는 발췌기입니다.
빌드 과정이 없는 정적 사이트라서 GitHub Pages에 바로 올릴 수 있습니다.

## 기능

- **텍스트 → 말풍선 자동 변환**
  - 줄 전체가 `"…"` `“…”` `「…」` `『…』` 이면 대사 말풍선, `(…)` 이면 생각 말풍선
  - `이름: "대사"`, `[이름] 대사`, `이름 "대사"` 로 화자 지정
  - 빈 줄은 여백, `---` 는 구분선, `**굵게**` `*기울임*` 지원
  - 문장 속 따옴표 분리, 기호 숨기기, 이름 없는 대사를 캐릭터끼리 번갈아 배정하는 옵션
- **말풍선 모양 10가지**: 둥근, 알약, 각진, 메신저, 생각 구름, 외침(뾰족), 외곽선, 점선, 세로 라인, 텍스트만
  - 꼬리, 너비, 모서리, 여백, 색, 테두리, 그림자 조절
  - 미리보기에서 말풍선을 누르면 그 말풍선만 화자 · 위치 · 모양을 바꿀 수 있음
- **캐릭터**: 이름, 얼굴 사진, 좌/우/가운데 위치, 개별 색상, 개별 말풍선 모양
- **타이포그래피**: 본문 · 말풍선 · 제목 · 출처를 각각 서체 / 크기 / 행간 / 자간 / 굵기 / 색 / 정렬 설정
  (한글 웹폰트 20여 종 + 직접 입력)
- **화면**: 1:1, 4:5, 3:4, 2:3, 9:16, 16:9, 4:3, 자유 비율 · 넘치면 자동으로 다음 장 · 페이지 번호 · 배경색/배경 이미지/덮개
- **스킨**: CSS 또는 `<style>` 태그가 든 HTML을 붙여넣어 전체 디자인을 덮어쓰기 (프리셋 7종 포함)
- **저장**: 1~3배 고화질 PNG, 여러 장 한 번에 다운로드, 클립보드 복사
- 작업 내용은 브라우저에 자동 저장되고, 설정을 JSON 파일로 내보내고 불러올 수 있음

## GitHub Pages로 배포하기

1. GitHub에서 새 저장소를 만듭니다 (예: `excerpt-studio`).
2. 이 폴더의 파일을 저장소에 올립니다.

   ```bash
   git remote add origin https://github.com/<내 아이디>/excerpt-studio.git
   ```

   ```bash
   git push -u origin main
   ```

   또는 GitHub 웹 화면에서 **Add file → Upload files** 로 `index.html`, `style.css`, `app.js`, `lib/` 폴더를 끌어다 놓아도 됩니다.
3. 저장소의 **Settings → Pages** 에서 **Source: Deploy from a branch**, **Branch: `main` / `(root)`** 를 선택하고 저장합니다.
4. 1~2분 뒤 `https://<내 아이디>.github.io/excerpt-studio/` 에서 열립니다.

로컬에서 확인하려면 폴더에서 `python3 -m http.server` 를 실행하고 `http://localhost:8000` 을 여세요.
(`index.html` 파일을 더블클릭해서 열면 이미지 저장 시 폰트가 빠질 수 있습니다.)

## 스킨 작성법

스킨 탭에 CSS를 쓰면 기본 디자인 위에 덮어씌워집니다.

```css
/* 변수로 색만 바꾸기 */
.card {
  --card-bg: #101418;
  --text-color: #e6e6e6;
  --b-bg: #1f2933;
  --b-color: #fff;
  --name-color: #8fa3b8;
}

/* 특정 캐릭터만 */
.msg[data-speaker="도현"] .bubble { background: #ffe14d; color: #222; }

/* 눈누 등 외부 웹폰트 */
@font-face {
  font-family: 'MyFont';
  src: url('https://example.com/MyFont.woff2') format('woff2');
}
.card .narr { font-family: 'MyFont'; }
```

| 선택자 | 설명 |
| --- | --- |
| `.card` | 이미지 한 장 |
| `.card-title` / `.card-footer` / `.credit` / `.page-num` | 제목 · 하단 · 출처 · 페이지 번호 |
| `.card-content` / `.flow` | 본문 영역 |
| `.narr` / `.gap` / `.divider` | 서술 문단 · 빈 줄 · 구분선 |
| `.msg` | 말풍선 한 줄 (`.msg-left` `.msg-right` `.msg-center`, `.kind-speech` `.kind-thought`, `.shape-*`) |
| `.avatar` / `.name` / `.bubble` | 사진 · 이름 · 말풍선 |

주요 변수: `--card-bg --text-color --text-font --text-size --b-bg --b-color --b-border --b-radius --b-font --name-color --title-color --credit-color`

> 외부 폰트를 이미지에 넣으려면 해당 폰트 서버가 CORS를 허용해야 합니다 (Google Fonts, jsDelivr, 눈누 CDN 대부분은 허용).

## 파일 구성

```
index.html             화면 구조
style.css              앱 UI + 이미지 카드 기본 스타일
app.js                 파싱 · 렌더링 · 설정 · 저장
lib/html-to-image.js   HTML → PNG 변환 라이브러리 (MIT, v1.11.11)
```
