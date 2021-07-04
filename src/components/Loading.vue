<template>
  <div class="multi-spinner-container">
    <div class="multi-spinner">
      <div class="multi-spinner">
        <div class="multi-spinner">
          <div class="multi-spinner">
            <div class="multi-spinner">
              <div class="multi-spinner"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Loading'  
}
</script>

<style scoped>
.multi-spinner-container {
  width: 150px;
  height: 150px;
  position: relative;
  margin: 30px auto;
  overflow: hidden;
}

.multi-spinner {
  position: absolute;
  width: calc(100% - 9.9px);
  height: calc(100% - 9.9px);
  border: 5px solid transparent;
  border-top-color: #ff5722;
  border-radius: 50%;
  -webkit-animation: spin 5s cubic-bezier(0.17, 0.49, 0.96, 0.76) infinite;
  animation: spin 5s cubic-bezier(0.17, 0.49, 0.96, 0.76) infinite;
}
</style>