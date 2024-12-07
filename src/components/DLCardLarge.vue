<template>
  <div class="card-box">
    <div class="info-flex">
      <div class="info-img">
        <div><img src="{{ props.cardInfo.img }}"></div>
      </div>
      <div class="info-text">
        <h3><a src="{{ props.cardInfo.url }}" target="_blank">{{ props.cardInfo.title }}</a></h3>
        <div class="inner-flex">
          <span class="circle-name">{{ props.cardInfo.circleName }}</span>
          <span class="price">{{ props.cardInfo.値段 }}</span>
        </div>
      </div>
    </div>
    <a src="{{ props.cardInfo.url }}" target="_blank" class="card-url">作品ページを見る</a>
  </div>
</template>

<style scoped>
.card-box {
  font-size: 10px;
  width: 360px;
  margin: 1.5rem auto;
  padding: 1rem 1rem;
  border-radius: 12px;
  box-shadow: 0px 4px 4px 0 rgba(0, 0, 0, 0.25);

}

.info-flex {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin-bottom: 0.75rem;
}

.info-img {
  width: 100%;
  height: 300px;
  min-width: 100px;
  margin: 1rem auto;
  background-color: #f00;
}

.info-img img {
  display: block;
  width: 100%;
}

.info-text h3 {
  font-size: 16px;
  line-height: 1.2;
  margin: 0 0 0.25rem;
  color: #25a;
}

.info-text h3 a {
  text-decoration: none;
}

.info-text span {
  display: block;
  font-size: 12px;
}

.info-text .price {
  font-size: 18px;
  font-weight: normal;
  color: #A22;
}

.card-url {
  display: block;
  width: 100%;
  height: 2rem;
  margin: 0.25rem auto;
  font-size: 16px;
  line-height: 2;
  text-align: center;
  background-color: #F7AD00;
  color: #fff;
  text-decoration: none;
  border: none;
}

.inner-flex {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
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
