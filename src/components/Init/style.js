import { createGlobalStyle } from "styled-components";
export const InitStyle = createGlobalStyle`
.Home {

  position: relative;
  width: 640px;
  height: 150px;
  color: #fff;
  font-size: 124px;
  text-align: center;
  margin: 50vh auto;
  border-bottom: 10px solid #fff;
  transform: skewY(5deg);
  background: #000;
      filter: blur(1px) contrast(10);
  &::before,
  &::after {
    position: absolute;
    content: "";
    bottom: -20px;
    left: 0;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: #fff;
    transform: translate(0, 0);
    animation: moves 7.5s ease-in-out infinite;
  }

  &::after {
    animation: moves 7.5s ease-in-out 1s infinite;
  }
}

@keyframes moves {
  80% {
    bottom: -30px;
    transform: translate(623px, 0);
  }

  93% {
    transform: translate(623px, 3px);
    opacity: 1;
  }

  100% {
    transform: translate(623px, 150px);
    opacity: 0;
  }
}
`