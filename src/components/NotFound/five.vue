<template>
  <div>
    <div class="scene">
      <div class="box">
        <div class="box__face front">4</div>
        <div class="box__face back">0</div>
        <div class="box__face right">5</div>
        <div class="box__face left">0</div>
        <div class="box__face top">0</div>
        <div class="box__face bottom">0</div>
      </div>
      <div class="shadow"></div>
    </div>
    <div class="desc">
      <h2>Ooops page not found!</h2>
      <button>BACK TO HOME PAGE</button>
    </div>
  </div>
</template>

<script>
    export default {
        name: "five"
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  html,
  body {
    width: 100%;
    height: 100%;
    font-family: "Days One", sans-serif;
  }

  body {
    overflow: hidden;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    position: relative;
    /*background-color: #6e1ec2;*/
    /*background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='199' viewBox='0 0 100 199'%3E%3Cg fill='%237825ce' fill-opacity='1'%3E%3Cpath d='M0 199V0h1v1.99L100 199h-1.12L1 4.22V199H0zM100 2h-.12l-1-2H100v2z'%3E%3C/path%3E%3C/g%3E%3C/svg%3E");*/
  }

  .scene {
    perspective: 400px;
  }

  .box {
    position: relative;
    width: 200px;
    height: 200px;
    transform-style: preserve-3d;
    transform: translateZ(-100px);
    transition: 0.3s;
    animation-name: rotateAnimation;
    animation-duration: 4s;
    animation-iteration-count: infinite;

  &__face {
     position: absolute;
     width: 200px;
     height: 200px;
     font-size: 120px;
     line-height: 200px;
     text-align: center;
     color: #fff;
     border: 1px solid #000;

  &.front {
     transform: rotateY(0deg) translateZ(100px);
     background: #20162b;
   }

  &.back {
     transform: rotateY(90deg) translateZ(100px);
     background: darken(#20162b, 5%);
   }

  &.right {
     transform: rotateY(180deg) translateZ(100px);
     background: darken(#20162b, 10%);
   }

  &.left {
     transform: rotateY(-90deg) translateZ(100px);
     background: darken(#20162b, 15%);
   }

  &.top {
     transform: rotateX(90deg) translateZ(100px);
     background: darken(#20162b, 5%);
   }

  &.bottom {
     transform: rotateX(-90deg) translateZ(100px);
     background: darken(#20162b, 20%);
   }
  }
  }

  @keyframes rotateAnimation {
    25% {
      transform: translateZ(-100px) rotateY(-90deg);
    }
    50% {
      transform: translateZ(-100px) rotateY(-180deg);
    }
    75% {
      transform: translateZ(-100px) rotateX(-90deg);
    }
    85% {
      transform: translateZ(-100px) rotateX(-90deg);
    }
  }

  .shadow {
    position: absolute;
    z-index: -1;
    left: -50px;
    top: calc(100% - 20px);
    width: calc(100% + 100px);
    height: 30px;
    border-radius: 50%;
    background: #000;
    filter: blur(20px);
  }

  .desc {
    margin-top: 60px;
    text-align: center;
  h2 {
    margin: 0;
    font-size: 26px;
  }

  button {
    border: 2px solid #130d1a;
    background: transparent;
    margin-top: 20px;
    padding: 10px 20px;
    font-size: 13px;
    font-family: "Days One", sans-serif;
    box-shadow: 4px 4px 0 0px rgba(#130d1a, 0.5);
    position: relative;
    transition: 0.3s;
    outline: none;
    cursor: pointer;
    border-radius: 0 20px;
    overflow: hidden;

  &:after {
     width: 100%;
     position: absolute;
     top: 0;
     left: 0;
     height: 0;
     content: "";
     background: #130d1a;
     transition: 0.3s;
     z-index: -1;
   }

  &:hover {
     color: #fff;
     letter-spacing: 2px;
  &:after {
     height: 100%;
   }
  }

  &:active {
     box-shadow: 0 0 0 0px rgba(#000, 0.5);
   }
  }
  }

</style>
