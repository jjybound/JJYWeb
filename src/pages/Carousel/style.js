import { createGlobalStyle } from "styled-components";
export const CarouselStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "PingFang SC", "Microsoft Yahei",
    sans-serif;
}
p{
color:#ffffff;
text-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
}
.image-slider {
  width: 100vw;
  height: 100vh;
  background-image: url("https://jjy-yygh.oss-cn-hangzhou.aliyuncs.com/%E6%9C%8D%E5%8A%A1%E5%99%A8/v2-7549490fc918c1be985242650e2e74fd_r.jpg");
  background-size: cover;
}

.image-slider .slide {
  width: 100%;
  height: 100%;
  position: absolute;
  transition: all linear 0.8s;
  overflow: hidden;
}

.image-slider .image {
  width: 100%;
  height: 100%;

  object-fit: contain;
  position: absolute;
  z-index: 50;
}

.image-slider .slide .content {
  position: absolute;
  z-index: 100;
  color: white;
  background-color: rgba(0, 0, 0, 0.6);
  padding: 48px;
  left:25%;
  bottom: 0;
  width: 50%;
}

.image-slider .slide .content h1 {
  margin-bottom: 24px;
  text-align: center;
}

#prev,
#next {
  position: absolute;
  z-index: 150;
  width: 80px;
  height: 80px;
  font-size: 48px;
  color: white;

  text-align: center;
  line-height: 80px;

  background-color: rgba(0, 0, 0, 0.6);
  border-radius: 50%;

  top: calc(50% - 24px);
  left: 50px;
  transition: all 0.2s;
  cursor: pointer;
}

#next {
  left: unset;
  right: 50px;
}

.image-slider .slide {
  opacity: 0;
}

.image-slider .slide.current {
  opacity: 1;
}

.image-slider .slide .content {
  opacity: 0;
  transform: translateY(500px);
}

.image-slider .slide.current .content {
  opacity: 1;
  transform: translateY(0);
  transition: all 1s ease-in-out 0.4s;
}

#prev:hover,
#next:hover {
  background-color: rgba(255, 255, 255, 0.6);
  color: black;
}

@media screen and (max-width: 960px) {
  .image-slider .slide .content {
    width: 100%;
  }

  #prev,
  #next {
    font-size: 24px;
    left: 24px;
    width: 48px;
    height: 48px;
    line-height: 48px;
    top: 40%;
  }

  #next {
    left: unset;
    right: 24px;
  }
}
.bottons{
  position: absolute;
  width:3vw;
  height:5vh;
  background-color: rgba(0,0,0,0.6);
  cursor: pointer;
  top:0;
  left:0;
  z-index: 9999;
  text-align: center;
    line-height: 5vh;
    font-size: 2rem;
    color:white;
}
    .mp4{
    position: absolute;
    top:2%;
    width:12vw;
    height:8vh;
    background-color: rgba(0,0,0,0.6);
    right:2%;
    z-index:9999;
   
    }
    .play{
    width:2vw;
    height:2vw;
    border-radius:50%;
    background-color:white;
    text-align:center;
    line-height:2vw;
    font-size:2.5rem;
    color:pink;
    }
    .hoverDiv .default {
    display: block;
    width:100%;
    height:100%;
}

.hoverDiv .hover {
    display: none;
}

.hoverDiv:hover .default {
    display: none;
}

.hoverDiv:hover .hover {
    display: block;
    width:100%;
    height:100%;
     display:flex;
    justify-content:space-around;
    align-items:center;
}

`