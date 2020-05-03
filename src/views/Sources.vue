<template>
  <div class="cards-container">
    <div class="searchbar">
      <input type="text" placeholder="Search by News Source" />
    </div>
    <template v-for="sources in sources">
      <div class="sources-container" :key="sources.name" v-on:click="setSourceArticle(sources)">
        <div class="source-name">
          <h2>{{sources.name}}</h2>
        </div>
        <div class="description">{{sources.description}}</div>
      </div>
    </template>
  </div>
</template>

<script>
import SourceStore from "../Store/SourceStore";

// @ is an alias to /src

export default {
  name: "Sources",
  data() {
    return {
      sources: [],
      search: ""
    };
  },
  methods: {
    getSources() {
      return fetch(
        "https://newsapi.org/v2/sources?language=en&country=us&?totalresults=10&apiKey=d85ab0be70bc4985bd99d65b6be31ae4"
      )
        .then(response => response.json())
        .then(json => {
          this.sources = json.sources;
        });
    },
    setSourceArticle(sources) {
      SourceStore.methods.setSourcesToArticles(sources);
    }
  },
  created() {
    this.getSources();
  }
};
</script>
<style scoped>
.cards-container {
  padding: 5px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 10px;
  grid-row-gap: 10px;
}
.searchbar {
  grid-row: 1;
  grid-column: 1/4;
}
input {
  width: 100%;
  max-width: 300px;
  padding: 8px 15px;
  background: rgba(50, 50, 50, 0.2);
  border: 0px solid #dbdbdb;
}
.sources-container {
  display: grid;
  grid-template-areas: "";
  grid-template-columns: 48px 1fr auto;
  grid-column-gap: 15px;
  padding: 10px 15px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.3);
  transition: 0.3s;
  background-color: white;
  border-radius: 5px;
}
.source-name {
  text-align: left;
  align-self: center;
}
.description {
  text-align: right;
  align-self: center;
}
</style>
