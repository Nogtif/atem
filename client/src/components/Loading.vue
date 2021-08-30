<template>
  <div class="loader">
    <div class="book">
      <div class="book__page"></div>
      <div class="book__page"></div>
      <div class="book__page"></div>
    </div>
    <p ref="name">Loading...</p>
  </div>
</template>

<script>
export default {
  name: "WelcomeAnimation",
  methods: {
    fadeOut() {
      this.$el.style.opacity = 0;
      this.$emit("endAnim")
    },
  },
};
</script>

<style lang="scss">
@import '../style/variables.scss';
$clouds:#ecf0f1;

.loader {
  position: relative;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.book{
  position: relative;
  border:5px solid $clouds;
  width:100px;
  height:60px;
}
.book__page{
  position:absolute;
  left:50%;
  top:-5px;
  margin:0 auto;
  border-top:5px solid $clouds;
  border-bottom:5px solid $clouds;
  border-right:5px solid $clouds;
  background:$color-primary;
  width:50px;
  height:60px;
  transform-origin:0% 50%;
  animation:flip 1.2s infinite linear;
  animation-fill-mode:forwards;
  
  @for $i from 1 through 3 {
    &:nth-child(#{$i}) { 
      z-index:-$i;
      animation-delay:1.4s*$i;
    }
  }
}

@keyframes flip {
  0%{
      transform: perspective( 600px )
      rotateY( -0deg );
  }
  
  20%{
    background:darken($color-primary,10%);
  }
  
  29.9%{
      background:darken($color-primary,10%);
  }
  30%{
      transform: perspective( 200px )
      rotateY( -90deg );
      background:$color-primary;
  }
  
  54.999%{
    opacity:1;
  }
  55%{
    opacity:0;
  }
  
  60%{
    transform: perspective( 200px )
    rotateY( -180deg );
    background:$color-primary;
  }
  
  100%{
    transform: perspective( 200px )
    rotateY( -180deg );
    background:$color-primary;
  }
}
</style>
