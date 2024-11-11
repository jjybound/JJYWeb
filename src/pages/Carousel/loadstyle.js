import { createGlobalStyle } from "styled-components";
export const LoadStyle = createGlobalStyle`
.Loading{
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.loader {
  width: 100px;
  height:100px;
  aspect-ratio: 1;
  background: linear-gradient(#dc1818 0 0) bottom/100% 0% no-repeat #ccc;
  -webkit-mask: 
    radial-gradient(circle at 60% 65%, #000 62%, #0000 65%) top left, 
    radial-gradient(circle at 40% 65%, #000 62%, #0000 65%) top right, 
    linear-gradient(to bottom left, #000 42%,#0000 43%) bottom left , 
    linear-gradient(to bottom right,#000 42%,#0000 43%) bottom right;
  -webkit-mask-size: 50% 50%;
  -webkit-mask-repeat: no-repeat;
  animation: l19 2.2s infinite linear;
}
@keyframes l19 {
    90%,100% {background-size:100% 100%}
}

`