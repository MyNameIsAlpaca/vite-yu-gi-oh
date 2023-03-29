import {reactive} from 'vue';


export const store = reactive({
  
  cards: [],

  cardsLink: 'https://db.ygoprodeck.com/api/v7/cardinfo.php?num=50&offset=0',

  counterClick: 0,

  searchData: "",


});