<template>
  <q-page class="">
    <!--
    <template v-for="s in scriptList" v-bind:key="s">
      <TalkLeft :script="s"></TalkLeft>
    </template>
-->
    <DLCardSmall :cardInfo="cardInfo"></DLCardSmall>
    <!--test one-->

  </q-page>
</template>

<script setup>
//
import { ref } from "vue";
import TalkLeft from "src/components/TalkLeft.vue"
import DLCardSmall from "src/components/DLCardSmall.vue";

const seri = "https://momoco.iranika.info/img/charactor/seri-205.jpg";
const siro = "https://momoco.iranika.info/img/charactor/suzusiro-241.jpg";
const uri = "https://momoco.iranika.info/img/charactor/inoko-251.jpg";

let cardInfo = {
  "url": "https://www.dlsite.com/home/work/=/product_id/RJ151299.html",
  "img": "https://img.dlsite.jp/resize/images2/work/doujin/RJ152000/RJ151299_img_main_240x240.jpg",
  "circleName": "桃色CODE",
  "値段": "880円",
  "title": "【192khzハイレゾ】道草屋 たびらこ【古宿耳かき】"
}

let scriptList = [
  {
    "type": "talk",
    "icon": siro,
    "text": "こんなに沢山食べます？"
  },
  {
    "type": "talk",
    "icon": seri,
    "text": "だって渋柿だし。完成したら配ればいいの"
  },
  {
    "type": "talk",
    "icon": siro,
    "text": "頂き物を。"
  },
  {
    "type": "talk",
    "icon": seri,
    "text": "だってねぇ"
  },
  {
    "type": "talk",
    "icon": uri,
    "text": "おん？"
  },
  {
    "type": "talk",
    "icon": uri,
    "text": "干し柿ですかぁ時期ですなぁ"
  },
  {
    "type": "talk",
    "icon": seri,
    "text": "沢山頂いたのよぉ。手伝ってく？"
  },
  {
    "type": "talk",
    "icon": uri,
    "text": "給料でます？"
  },
  {
    "type": "talk",
    "icon": seri,
    "text": "出ん。現物支給。"
  },
  {
    "type": "talk",
    "icon": uri,
    "text": "しゃーなしですなぁ"
  }
]
</script>
