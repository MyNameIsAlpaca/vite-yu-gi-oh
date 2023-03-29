<script>
import AppMain from './components/AppMain.vue';
import '@fortawesome/fontawesome-free/css/all.css';
import AppHeader from './components/AppHeader.vue';
export default {
    data() {
        return {};
    },
    components: {
    AppMain,
    AppHeader
}
}
</script>

<template>
  <AppHeader class="header"></AppHeader>
  <AppMain class="mainSection"></AppMain>
</template>

<style scoped>
.mainSection {
  min-height: 602px;
}
</style>