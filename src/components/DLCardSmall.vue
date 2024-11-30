<template>
  <div class="card-box">
    <div>{{ props.cardInfo.title }}</div>
    <div>{{ props.cardInfo.url }}</div>
    <!-- FIXME: これやりたい -->
  </div>
</template>

<style scoped>
.card-box {
  margin-left: 10px;
  display: block;
}
</style>

<script setup>
const props = defineProps({
  cardInfo: {
    "url": "",
    "img": "",
    "circleName": "",
    "値段": "",
    "title": ""
  },
})
</script>
