<script>
import {store} from "../store.js";

import axios from "axios";

import AppCard from './AppCard.vue';

export default {
  name: "AppMain",
  data() {
    return {
      store,
    }
  },
  components:  {
    AppCard,
  },
  created() {
    axios.get('https://db.ygoprodeck.com/api/v7/cardinfo.php?num=50&offset=0').then((res)=>{
      this.store.cards = res.data.data
      console.log(this.store.cards)
    });
  },  
}
</script>
  
<template>
  <div>
    <div class="card-container">
      <AppCard v-for="card in store.cards" :card="card"></AppCard>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.card-container {
  display: flex;
  flex-flow: row wrap;
  gap: 30px;
  justify-content: space-between;
  padding: 40px;
}
</style>
