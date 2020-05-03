const SourceStore = {
  data: {
    sourceArticle: "",
  },
  methods: {
    setSourceToArticles(sources) {
      SourceStore.data.sourceArticle = sources;
    },
  },
};
export default SourceStore;
