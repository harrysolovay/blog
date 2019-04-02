import {css} from '@emotion/core'

export default css`
  * {
    box-sizing: border-box;
    backface-visibility: none;
    appearance: none;
    text-size-adjust: 100%;
    -webkit-tap-highlight-color: transparent;
  }

  &:not(i) {
    font-family: 'futura-pt', sans-serif;
    text-transform: uppercase;
    font-weight: 200;
    font-size: 16px;
    line-height: 24px;
    color: #000;
  }

  &:focus {
    outline: 0;
  }

  &::webkit-scrollbar {
    display: none;
  }

  hr {
    display: block;
    width: 100%;
    height: 1px;
    margin: 0px;
    padding: 0px;
    border-width: 0px;
    background-color: #e9e9e9;
  }
`
