import { createGlobalStyle } from "styled-components";
export const HomeStyle = createGlobalStyle`
body {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background: #000;

}



.header{
  display: flex;
    justify-content: center;
    align-items: center; 
    position:fixed;
    z-index: 1000;
    width: 100vw;
    top: 0;
    height: 20vh;
    filter: none !important;
    
    *,
      *::before,
      *::after {
        box-sizing: border-box;
      }
    
      @keyframes rotate {
        100% {
          transform: translate(-50%, -50%) rotate(1turn);
        }
      }
    
      .btn {
        position: relative;
        z-index: 0;
        width: 160px;
        height: 80px;
        line-height: 80px;
        color: #0ebeff;
        font-size: 24px;
        border-radius: 10px;
        text-align: center;
        margin: auto;
        overflow: hidden;
        cursor: pointer;
        transition: .3s;
        -webkit-box-reflect: below 10px linear-gradient(transparent, rgba(0, 0, 0, .4));
    
        &:hover {
          color: #fff;
          box-shadow: 0 0 5px #0ebeff,
            0 0 25px #0ebeff;
    
          &::after,
          &::before {
            transition: .3s;
            background: #0ebeff;
          }
        }
    
        &::before {
          content: '';
          position: absolute;
          z-index: -2;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          width: 150%;
          height: 300%;
          background-color: #000;
          background-repeat: no-repeat;
          background-size: 50% 50%;
          background-position: 0 0;
          background-image: conic-gradient(#0ebeff, #0ebeff);
          animation: rotate 2s linear infinite;
        }
    
        &::after {
          content: '';
          position: absolute;
          z-index: -1;
          left: 2px;
          top: 2px;
          width: calc(100% - 4px);
          height: calc(100% - 4px);
          background: #000;
          border-radius: 10px;
        }
      }
    
      .btn1 {
        filter: hue-rotate(90deg);
      }
    
      .btn2 {
        filter: hue-rotate(135deg);
      }
    
      .btn3 {
        filter: hue-rotate(45deg);
      }

             .btn4 {
               filter: hue-rotate(180deg);
             }
}

`
