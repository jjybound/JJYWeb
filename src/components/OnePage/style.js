import { createGlobalStyle } from "styled-components";

export const InitStyle = createGlobalStyle`
.contain {
    position: absolute;
    height: 75vh;
    width: 90vw;
   background-color: #F5DEB3;
    bottom: 2vh;
    left: 5vw;
    animation:fadeOut 2s ease-in-out;
}
@keyframes fadeOut {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}

    .all{
    height: 100%;
    width: 100%;
    position: relative;
    display: flex;
    align-items: center;
}
    .next{
    position: absolute;
    right: 0;
}
    .back{
     position: absolute;
    left:0;
    }
ul {
    list-style: none;
    margin:auto;
    width: 777px;
    height: 620px;
    transform-style: preserve-3d; /* 开启3d效果 */
    perspective: 4000px; /* 设置视距，看起来会有近大远小的感觉 */
    transition: 2s;
}

img {
    width: 777px;
    height: 620px;
    box-shadow: 1px 4px 4px rgba(0, 0, 0, 0.2);
}

li {
    position: absolute;
    transform-origin: left; /* 旋转点 */
}

li:nth-child(1) {
    transform: rotateY(-25deg);
    transition: 2s;
}

li:nth-child(2) {
    transform: rotateY(-23deg);
    transition: 2s;
}

li:nth-child(3) {
    transform: rotateY(-21deg);
    transition: 2s;
}
    li:nth-child(4) {
    transform: rotateY(-19deg);
    transition: 2s;
}
    li:nth-child(5) {
    transform: rotateY(-17deg);
    transition: 2s;
}
    li:nth-child(6) {
    transform: rotateY(-15deg);
    transition: 2s;
}
    li:nth-child(7) {
    transform: rotateY(-13deg);
    transition: 2s;
}
`;
