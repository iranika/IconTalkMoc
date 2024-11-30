<template>
  <div class="chat-box">
    <img width="60" height="60" :src="props.script.icon" />
    <span>{{ props.script.text }}</span>
  </div>
</template>

<style scoped>
.chat-box {
  margin-left: 10px;
  color: red;
  display: block;
}
</style>

<script setup>
const props = defineProps({
  script: {
    icon: string,
    text: string,
    type: string
  },
})
</script>
