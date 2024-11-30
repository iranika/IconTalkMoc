<template>
  <div class="chat-box">
    <img width="60" height="60" :src="props.script.icon" />
    <span>{{ props.script.text }}</span>
  </div>
</template>

<style scoped>

.chat-box {
  color: red;
  display: block;
}

</style>

<script setup>
const props = defineProps({
  script: {
    type: Object,
  },
})
</script>
