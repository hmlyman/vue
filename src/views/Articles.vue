<template></template>
<script>
import SourceStore from "../Store/SourceStore";
export default {
  name: "articles",
  data() {
    return {
      sources: ""
    };
  },
  created() {
    this.sources = SourceStore.data.sourceArticle;
  }
};
</script>
<style scoped>
.grid-container {
  padding: 10px;
  display: grid;
  grid-template-columns: 100px auto 100px;
  grid-template-rows: 1fr 1fr 1fr;
  grid-row-gap: 10px;
  grid-column-gap: 10px;
  grid-template-areas: "back-btn card .";
}
.card {
  grid-column: 2;
  grid-row: 2;
  align-self: center;
  justify-self: center;
  padding: 10px;
  display: grid;
  background-color: white;
  grid-template-areas: "pic data";
  grid-template-columns: 128px auto;
  grid-row-gap: 10px;
  grid-column-gap: 10px;
  border-radius: 5px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.3);
}
.back-btn {
  align-self: start;
  grid-column: 1;
  grid-row: 1;
  max-width: 100px;
  margin: 10px;
  background-color: #008cba;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  border-radius: 5px;
  margin: 0px;
}
