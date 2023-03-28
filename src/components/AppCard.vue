<script>
import { store } from '../store';
export default {
    data() { 
        return {
            store,
            add: true,
          }
        },
    props : {
      card: Object,
    },
    methods: {
      addClick(){
        this.store.counterClick++
      }
    },
  }
</script>

<template>
    <div class="card">
      <div class="image-card">
            <img :src="card.card_images[0].image_url" alt="card image">
            <strong>{{ card.name }}</strong>
            <span v-if="card.card_prices[0].amazon_price == 0.00">Non Disponibile</span>
            <div v-else>
              <span>{{ card.card_prices[0].amazon_price }}$</span>
              <div v-if="add" class="addCart" @click="add = !add, addClick()">
                <i class="fa-solid fa-cart-plus"></i>
                <span> Aggiungi al carrello</span>
              </div>
              <div class="added" v-else>
                Aggiunto!
              </div>
            </div>
      </div>
    </div>

</template>

<style scoped lang="scss">
.card {
  display: flex;
  width: 150px;
  color: white;
  text-align: center;
  z-index: 1;
  background-color: rgba(141, 109, 61, 0.603);
  img {
    max-width: 100%;
  }
  .image-card {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    div {
      .addCart {
        background-color: rgba(0, 0, 255, 0.329);
        cursor: pointer;
      }
      .added {
        background-color: rgba(0, 0, 255, 0.329);
        height: 45px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: rgb(255, 208, 0);
      }
    }
  }
}
</style>