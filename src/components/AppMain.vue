<script>
import {store} from "../store.js";

import axios from "axios";

import AppCard from './AppCard.vue';
import AppSearch from "./AppSearch.vue";

export default {
  name: "AppMain",
  data() {
    return {
      store,
    }
  },
  components:  {
    AppCard,
    AppSearch
},
methods: {
      newLinkGen(){
        this.store.cardsLink = this.store.cardsLink + "&fname=" + this.store.searchData
        console.log(this.store.cardsLink)
        axios.get(this.store.cardsLink).then((res)=>{
        this.store.cards = res.data.data
        this.store.searchData = ""
    });
      },
    },
  created() {
    axios.get(this.store.cardsLink).then((res)=>{
      this.store.cards = res.data.data
    });
  },  
}
</script>
  
<template>
  <div class="card-container">
    <AppSearch class="search" @newLinkGen="newLinkGen()"></AppSearch>
    <div class="title">
      <h1>Benvenuto nello shop di Yu-Gi-Oh</h1>
      <h3>Aggiungi al carrello tutte le carte che desideri acquistare</h3>
    </div>
    <div v-if="this.store.cards.length != 0" class="card-container-inner">
      <AppCard v-for="card in store.cards" :card="card"></AppCard>
    </div>
    <div class="loading" v-else>
      Caricamento In corso
    </div>
  </div>
</template>

<style lang="scss" scoped>
.card-container {
.search{
  position: relative;
  z-index: 2;
}
  .title{
    position: relative;
    color: white;
    z-index: 2;
    text-align: center;
    font-size: 1.5em;
    text-transform: uppercase;
    h3 {
      text-transform: none;
      color: gra;
    }
  }
  background-position: center;
  position: relative;
  &::before {
    background-image: url(/background.jpg);
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 0;
    filter: blur(2px);
    -webkit-filter: blur(2px);
    left: 0;
    top: 0;
  }
  &::after {
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    background-color: rgba(41, 30, 30, 0.397);
}
.card-container-inner {
  display: flex;
  flex-flow: row wrap;
  gap: 30px;
  justify-content: space-between;
  padding: 40px;
}
}
</style>
