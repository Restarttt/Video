<template>
  <div class="overall">
    <top-seach></top-seach>
    <main-nav></main-nav>
    <key-words></key-words>
  </div>
</template>

<script>
import TopSeach from "../../components/search-module/top-search";
import MainNav from "../../components/search-module/main-nav";
import KeyWords from "../../components/search-module/key-words";

export default {
  components: {
    TopSeach,
    MainNav,
    KeyWords
  },
  data() {},
  method: {}
};
</script>

<style>
</style>
