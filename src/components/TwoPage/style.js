import { createGlobalStyle } from "styled-components";

export const TwoStyle = createGlobalStyle`
.contain {
    position: absolute;
    height: 75vh;
    width: 90vw;
   background-color:#e7ffe3;
    bottom: 2vh;
    left: 5vw;
    animation:fadeOut 2s ease-in-out;
    display:flex;
    overflow:auto;
}
@keyframes fadeOut {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}
.left{
flex:1;
display:flex;
align-items:center;
flex-direction:column;
}
.leftone{
flex:1;
    font-size: 36px;
    color: #000000;
    font-weight: 600;
    padding: 40px;
    font-family: 'Noto Sans JP', sans-serif;
}
    .text{
    color: #000000;
    writing-mode: vertical-lr;
    margin:40px 0;
    }
.right{
flex:9;
display:flex;
flex-direction:column;
} 
.Rtop{
width: 95%;
flex:2;
font-size: 48px;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
}   
.Rcenter{
width: 95%;
flex:8;
text-indent: 2em;
font-size: 24px;
color: #000000;
}
.Rfooter{
width: 95%;
flex:1;
display:flex;
justify-content:center;
}
.ant-pagination{
font-size:32px;
}
.ant-pagination-item{
min-width: 42px !important;
    height: 42px !important;
    line-height: 36px !important;
}
    .ant-pagination-next{
   min-width: 42px !important;
    height: 42px !important;
    line-height: 36px !important;
    background-color: #ffffff;
    }
    .ant-pagination-prev{
    min-width: 42px !important;
    height: 42px !important;
    line-height: 36px !important;
    background-color: #ffffff;
    }
`;
