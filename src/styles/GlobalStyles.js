import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`

@font-face {
    font-family: 'PyeongChangPeace-Bold';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2206-02@1.0/PyeongChangPeace-Bold.woff2') format('woff2');
    font-weight: 700;
    font-style: normal;
}

@font-face {
    font-family: 'PyeongChangPeace';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2206-02@1.0/PyeongChangPeace-Light.woff2') format('woff2');
    font-weight: 300;
    font-style: normal;
}

@font-face {
    font-family: 'PyeongChang';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2206-02@1.0/PyeongChang-Regular.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
}

:root {

    /* 배경 색상 */
    --bg-primary-color: #FFFFFF;

    /* 버튼 색상 */
    --primary-color: #F26E22;
    --secondary-color: #FFFFFF;
    --disabled-color: #FFC7A7;

    /* 폰트 색상 */
    --font-primary-color: #767676;
    --font-secondary-color: #FFFFFF;
    --font-dark-color: #000000;
    --font-orange-color: #F26E22


}
${reset};

#root {    
    display: flex;
    justify-content: center;
    font-family: "PyeongChang";
    
}
`;
export default GlobalStyles;
