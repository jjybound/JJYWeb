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
  background-size:100% 100%;
  background-repeat: no-repeat;
  object-fit: contain;
  animation: fadeIn 2s forwards;
}
  @keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
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
    .Pagesbottons{
  position: absolute;
  width:3vw;
  height:5vh;
  background-color: rgba(0,0,0,0.6);
  bottom:0;
  left:0;
  z-index: 9999;
  text-align: center;
    line-height: 5vh;
    font-size: 2rem;
    color:white;
}
.PagesAll .Pagesbottons{
  display:block;
}
.PagesAll:hover .Pagesbottons{
  display:none;
}  
  .PagesAll:hover .Pages{
  display:flex;
  justify-content:center;
  align-items:center;
}  
.Pages{
display:none;
 position: absolute;
  background-color: rgba(0,0,0,0.6);
  bottom:0;
  left:0;
  z-index: 9999;
  
  animation: PagesIn 1.2s forwards;
}
  @keyframes PagesIn {
  from {
      width:3vw;
  height:5vh;
  }
  to {
  width:14vw;
     height: 7vh;
     border-radius:0 20px 0 0;
  }
}
  .ant-pagination-simple-pager{
  width:40px;
  margin-top:3%;
  white-space: nowrap;
  margin-inline-end:90px !important;
  font-size: 24px;
  line-height:20px;
  color:#ffffff;
  input{
  

   font-size: 24px;
   background-color: pink !important;
   color:#000000 !important;
   }
  }
.ant-pagination-next{
background-color: pink;
height: 36px !important;
    line-height: 36px !important;
}
.ant-pagination-prev{
background-color: pink;
height: 36px !important;
margin-inline-end: 30px !important;
    line-height: 36px !important;
    vertical-align: top;
    width: 36px;
}
.ant-pagination-item-link{
box-shadow:none;
height:36px !important;
}

.mp4{
    position: absolute;
    top:2%;
    width:12vw;
    height:8vh;
    background-color: rgba(0,0,0,0.6);
    border-radius:12px 12px 0 0;
    right:2%;
    z-index:99;
   
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
    cursor: pointer;
    }
.hoverDiv .default {
    display: block;
    width:100%;
    height:100%;
    text-align:center;
    p{
    margin:5% 0;
    font-size:1rem;
    }
}
 .hoverDiv .SongLists{
    display:none;
    }
.hoverDiv .hover {
    display: none;
}

.hoverDiv:hover .default {
    display: none;
}
.SongLists .Songitems{
  height:50px;
  line-height:50px;
  padding:0 10px;
  width:100%;
  font-size:1rem;
  display:flex;
  justify-content:space-between;
  text-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  white-space: nowrap;
  
}
.hoverDiv:hover .SongLists{
    display:block;
    width:12vw;
    height:200px;
    overflow:auto;
    background-color: rgba(0,0,0,0.6);
    cursor: pointer;
    border-radius:0 0 12px 12px;
     animation: SongIn 1s forwards;
}
 @keyframes SongIn {
  from {
  height:2vw;
  opacity: 0.5;
  }
  to {
     height: 200px;
      opacity: 1;
  }
}
.SongLists::-webkit-scrollbar {
    width: 5px;
    overflow: hidden;
}
.SongLists::-webkit-scrollbar-thumb {
    background-color: rgba(200, 200, 200, 0.6);
    border-radius: 10px;
}
    .chosen{
    color:pink;
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