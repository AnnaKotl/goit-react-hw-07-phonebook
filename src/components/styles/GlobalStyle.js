import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';

export const GlobalStyle = createGlobalStyle`
  html, body {
    height: 100%;
    width: 100%;
    margin: 0;
    font-family: 'PT Serif', serif;
    font-size: 24px;
    font-style: normal;
    line-height: 1.5;
    color: #210a01;
    background-image: linear-gradient(180deg, #ffff7c 0, #ffff6f 12.5%, #fff565 25%, #ffda5c 37.5%, #f2bd53 50%, #dda14c 62.5%, #c98a46 75%, #b77642 87.5%, #a8663f 100%);
}

    code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
        monospace;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    p {
    margin: 0;
    }
    ul,
    li {
    margin: 0;
    padding: 0;
    list-style: none;
    }
    img {
    display: block;
    max-width: 100%;
    height: auto;
    }

`;
