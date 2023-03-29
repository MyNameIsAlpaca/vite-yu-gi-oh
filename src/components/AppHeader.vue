<script>
import { store } from '../store';
import AppSearch from './AppSearch.vue';
export default {
    name: "AppHeader",
    data() {
        return {
            store,
        };
    },

    components: { AppSearch }
}
</script>

<template>
    <div class="main">
      <div class="cart">
        <i class="fa-solid fa-cart-shopping"></i>
        {{ this.store.counterClick }}
      </div>
    </div>
</template>

<style scoped lang="scss">
.main{
  position: relative;
  height: 250px;
  background-image: url(/header.jpg);
  background-position: center;
  color: white;
  .search{
    position: absolute;
    bottom: 0;

  }
  .cart{
    position: absolute;
    right: 20px;
    bottom: 20px;
  }

}
</style>