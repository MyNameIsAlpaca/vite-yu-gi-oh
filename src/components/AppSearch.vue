<script>
import { store } from '../store';
export default {
  name: "AppSearch",
    data() { 
        return {
          store,
        }
    },
}
</script>

<template>
    <div>
      <div class="searchContainer">
        <input type="text" placeholder="Cerca una carta.." v-model="this.store.searchData" @keyup.enter="$emit('newLinkGen')">
        <button @click="$emit('newLinkGen')">Cerca</button>
      </div>
    </div>
</template>

<style scoped lang="scss">
.searchContainer {
  input{
    padding: 5px;
    font-size: 15px;
  }
  button{
    background-color: rgba(214, 147, 2, 0.952);
    font-size: 15px;
    padding: 5px;
  }
}
</style>