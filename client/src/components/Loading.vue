<template>
  <div class="welcome-animation-container">
    <div class="welcome-animation" ref="name"></div>
    <p class="loading" ref="loading">Loading...</p>
  </div>
</template>

<script>
export default {
  name: "WelcomeAnimation",
  data: function () {
    return {
      text: "OTAKUFR",
      timeouts: [],
    };
  },
  mounted() {
    this.animate();

    //setInterval(this.animate, 5000);
  },

  unmounted() {
    this.timeouts.forEach((timeout) => clearTimeout(timeout));
  },

  methods: {
    animate() {
      [...this.text].forEach((letter, i) =>
        this.insertLetter(letter, i, this.text.length)
      );
    },

    insertLetter(x, i) {
      const nbLetters =  this.text.length
      const scale = 1.15 - 0.15 * (i - nbLetters/2) / nbLetters;
      const angle = 20 - (i/nbLetters)*40;

      const container = document.createElement("div");
      const div = document.createElement("div");
      div.textContent = x;
      div.classList.add("character");
      div.style.transform = `rotateY(${angle.toFixed(3)}deg) scale(${scale.toFixed(3)})`;
      container.appendChild(div);
      this.$refs.name.appendChild(container);
      container.style.animation = `zoom 2s ${
        i / 20
      }s cubic-bezier(.23,1.62,.65,.87) forwards`;
      div.style.animation = `long-shadow 2s ${
        i / 20
      }s cubic-bezier(.23,1.62,.65,.87) forwards`;
    },

    fadeOut() {
      this.$el.style.opacity = 0;
      this.$el.addEventListener("transitionend", () => this.$emit("endAnim"));
    },
  },
};
</script>

<style lang="sass">
@function makelongshadow($count,$angle)
  $val: 10px 10px 100px transparent
  @for $i from 1 through $count
    $val: #{$val}, #{$i}px #{$i*$angle}px rgba(0,0,0,.8)
  @return $val

.welcome-animation-container
  position: fixed
  left: 0
  top: 0
  height: 100vh
  width: 100%
  overflow: hidden
  opacity: 1
  transition: opacity 1000ms linear
  transform-style: preserve-3d

.welcome-animation
  font-family: 'Inter', Arial, sans-serif
  font-size: 3rem;
  font-weight: 700;
  display: flex
  justify-content: center
  align-items: center
  background-color: #151618
  box-shadow: 0 0 30px 10px rgba(0, 0, 0, 0.4) inset
  padding: 0
  margin: 0
  height: 100%
  color: transparent
  perspective: 60px
  letter-spacing: .2em
  animation: grow 1200ms ease forwards

.welcome-animation .loading
  color: gray
  font-family: 'Inter', Arial, sans-serif
  transition: opacity 1s linear
  opacity: 0
  position: absolute
  top: 70vh
  font-size: 4vw
  left: 0
  right: 0
  text-align: center

@keyframes zoom
  0%
    transform: scale(1)
    color: transparent

  10%
    color: white

  50%
    transform: scale(1.1)
    color: white

  100%
    transform: scale(0.9)
    color: white

@keyframes shrink
  0%
    transform: scale(1.3)

  100%
    transform: scale(1)

@keyframes grow
  0%
    transform: scale(1)

  100%
    transform: scale(1.3)

@keyframes long-shadow
  0%
    text-shadow: none

  50%
    text-shadow: makelongshadow(5, 1.5)

  100%
    text-shadow: none

@keyframes blink
  0%
    opacity: 0

  100%
    opacity: 1
</style>
