<script>
import { store } from '../store';
export default {
    data() { 
        return {
            store,
        }
    },
    props : {
        card: Object,
    }
}
</script>

<template>
    <div class="card">
      <div class="image-card">
            <img :src="card.card_images[0].image_url" alt="card image">
            <span>{{ card.name }}</span>
      </div>
    </div>

</template>

<style scoped lang="scss">
.card {
  display: flex;
  width: 150px;
  background-color: darkblue;
  color: white;
  text-align: center;
  img {
    max-width: 100%;
  }
}
</style>