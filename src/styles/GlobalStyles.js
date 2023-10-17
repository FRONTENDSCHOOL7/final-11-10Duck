import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
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
${reset}`;

export default GlobalStyles;
