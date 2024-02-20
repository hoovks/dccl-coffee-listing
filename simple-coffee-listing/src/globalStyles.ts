import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'DM Sans';
    font-style: italic;
    font-weight: 100 1000;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/dmsans/v14/rP2Fp2ywxg089UriCZa4ET-DNl0.woff2) format('woff2');
    unicode-range: U+0100-02AF, U+0304, U+0308, U+0329, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20C0, U+2113, U+2C60-2C7F, U+A720-A7FF;
  }
  @font-face {
    font-family: 'DM Sans';
    font-style: italic;
    font-weight: 100 1000;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/dmsans/v14/rP2Fp2ywxg089UriCZa4Hz-D.woff2) format('woff2');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
  }
  @font-face {
    font-family: 'DM Sans';
    font-style: normal;
    font-weight: 100 1000;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/dmsans/v14/rP2Hp2ywxg089UriCZ2IHSeH.woff2) format('woff2');
    unicode-range: U+0100-02AF, U+0304, U+0308, U+0329, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20C0, U+2113, U+2C60-2C7F, U+A720-A7FF;
  }
  @font-face {
    font-family: 'DM Sans';
    font-style: normal;
    font-weight: 100 1000;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/dmsans/v14/rP2Hp2ywxg089UriCZOIHQ.woff2) format('woff2');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
  }

  body {
    margin: 0;
    font-family: "DM Sans", sans-serif;
  }

`;

export default GlobalStyle;
