import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    border: 0;
    -webkit-tap-highlight-color: transparent;
  }

  html,
  body,
  #root {
    width: 100%;
    height: 100%;
  }
  
  ul, ol, li {
    list-style: none;
  }

  input {
    border: none;
    outline: none;
  }

  textarea {
    resize: none;
    border: none;
    outline: none;
  }

  button {
    cursor: pointer;
    background-color: transparent;
    border: none;
  }

  a {
    color: inherit;
    text-decoration: none;
  }



/* 본고딕 */
  @font-face {
    font-family: 'Noto Sans';
    src: url('assets/fonts/NotoSansKR-Black.ttf') format('ttf');
    font-weight: 900;
    font-style: normal;
  }

  @font-face {
    font-family: 'Noto Sans';
    src: url('assets/fonts/NotoSansKR-Bold.ttf') format('ttf');
    font-weight: 700;
    font-style: normal;
  }

  @font-face {
    font-family: 'Noto Sans';
    src: url('assets/fonts/NotoSansKR-ExtraBold.ttf') format('ttf');
    font-weight: 800;
    font-style: normal;
  }

  @font-face {
    font-family: 'Noto Sans';
    src: url('assets/fonts/NotoSansKR-ExtraLight.ttf') format('ttf');
    font-weight: 200;
    font-style: normal;
  }

  @font-face {
    font-family: 'Noto Sans';
    src: url('assets/fonts/NotoSansKR-Light.ttf') format('ttf');
    font-weight: 300;
    font-style: normal;
  }

  @font-face {
    font-family: 'Noto Sans';
    src: url('assets/fonts/NotoSansKR-Medium.ttf') format('ttf');
    font-weight: 500;
    font-style: normal;
  }

  @font-face {
    font-family: 'Noto Sans';
    src: url('assets/fonts/NotoSansKR-Regular.ttf') format('ttf');
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: 'Noto Sans';
    src: url('assets/fonts/NotoSansKR-SemiBold.ttf') format('ttf');
    font-weight: 600;
    font-style: normal;
  }

  @font-face {
    font-family: 'Noto Sans';
    src: url('assets/fonts/NotoSansKR-Thin.ttf') format('ttf');
    font-weight: 100;
    font-style: normal;
  }

/* 나눔명조 */
@font-face {
  font-family: 'Nanum Myeongjo';
  src: url('assets/fonts/NanumMyeongjo.ttf') format('ttf');
  font-weight: 400;
}

@font-face {
  font-family: 'Nanum Myeongjo';
  src: url('assets/fonts/NanumMyeongjoBold.ttf') format('ttf');
  font-weight: 700;
}
@font-face {
  font-family: 'Nanum Myeongjo';
  src: url('assets/fonts/NanumMyeongjoExtraBold.ttf') format('ttf');
  font-weight: 800;
}

/* 나눔고딕 */
@font-face {
  font-family: 'Nanum Gothic';
  src: url('assets/fonts/NanumGothic.ttf') format('ttf');
  font-weight: 400;
}

@font-face {
  font-family: 'Nanum Gothic';
  src: url('assets/fonts/NanumGothicBold.ttf') format('ttf');
  font-weight: 700;
}

@font-face {
  font-family: 'Nanum Gothic';
  src: url('assets/fonts/NanumGothicExtraBold.ttf') format('ttf');
  font-weight: 800;
}

@font-face {
  font-family: 'Nanum Gothic';
  src: url('assets/fonts/NanumGothicLight.ttf') format('ttf');
  font-weight: 300;
}

/* 나눔바른고딕 */
@font-face {
  font-family: 'Nanum Barun Gothic';
  src: url('assets/fonts/NanumBarunGothic.ttf') format('ttf');
  font-weight: 400;
}

@font-face {
  font-family: 'Nanum Barun Gothic';
  src: url('assets/fonts/NanumBarunGothicBold.ttf') format('ttf');
  font-weight: 700;
}

@font-face {
  font-family: 'Nanum Barun Gothic';
  src: url('assets/fonts/NanumBarunGothicLight.ttf') format('ttf');
  font-weight: 300;
}

@font-face {
  font-family: 'Nanum Barun Gothic';
  src: url('assets/fonts/NanumBarunGothicUltraLight.ttf') format('ttf');
  font-weight: 200;
}

/* Helvetica */
@font-face {
  font-family: 'Helvetica';
  src: url('assets/fonts/Helvetica.ttf') format('ttf');
  font-weight: 400;
}

@font-face {
  font-family: 'Helvetica';
  src: url('assets/fonts/HelveticaBold.ttf') format('ttf');
  font-weight: 700;
}

@font-face {
  font-family: 'Helvetica';
  src: url('assets/fonts/HelveticaLight.ttf') format('ttf');
  font-weight: 300;
}

/* Georgia */
@font-face {
  font-family: 'Georgia';
  src: url('assets/fonts/Georgia.ttf') format('ttf');
  font-weight: 400;
}

@font-face {
  font-family: 'Georgia';
  src: url('assets/fonts/GeorgiaBold.ttf') format('ttf');
  font-weight: 700;
}
`;
