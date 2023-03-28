<script>
import { store } from '../store';
export default {
  name: "AppHeader",
    data() { 
        return {
          store,
        }
    },
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
  .cart{
    position: absolute;
    right: 20px;
    bottom: 20px;
  }

}
</style>