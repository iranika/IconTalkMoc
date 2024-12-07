<template>
  <div class="chat-box">
    <img width="60" height="60" :src="props.script.icon" />
    <span>{{ props.script.text }}</span>
  </div>
</template>

<style scoped>
.chat-box {
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  margin: 2rem 0 2rem 1rem;
  color: #232323;
  line-height: 1.75;
}

.chat-box img {
  display: block;
  box-sizing: content-box;
  border-radius: 100%;
  border: solid 2px #C47E2F;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
}

.chat-box span {
  display: block;
  max-width: 300px;
  /*max-width=仮*/
  padding: 0.75rem 1rem;
  margin-left: 0.75rem;
  border: solid 2px #aaaaaa;
  border-radius: 12px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
}
</style>

<script setup>
const props = defineProps({
  script: {
    type: Object,
  },
})
</script>
