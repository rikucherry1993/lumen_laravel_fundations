<template>
  <div>
    <div v-if="isLoading">Data is loading...</div>
    <div v-else>
      <bookableListItem
        v-for="(item, index) in bookables"
        :key="index"
        :title="item.title"
        :content="item.content"
        :price="item.price"
      ></bookableListItem>
    </div>
  </div>
</template>

<script>
import BookableListItem from "./bookableListItem";

export default {
  components: {
    bookableListItem: BookableListItem,
  },

  data() {
    return {
      bookables: null,
      isLoading: false,
      columns: 3,
    };
  },

  computed: {
    rows() {
      return this.bookables === null
        ? 0
        : Math.ceil(this.bookables.length / this.columns);
    },
  },
  // beforeCreate() {
  //   console.log("before create");
  // },

  created() {
    this.isLoading = true;
    setTimeout(() => {
      this.bookables = [
        { title: "Bookable1", content: "Bookable1", price: 3000 },
        { title: "Bookable2", content: "Bookable2", price: 3000 },
        { title: "Bookable3", content: "Bookable2", price: 3000 },
        { title: "Bookable4", content: "Bookable2", price: 3000 },
        { title: "Bookable5", content: "Bookable2", price: 3000 },
        { title: "Bookable6", content: "Bookable2", price: 3000 },
        { title: "Bookable7", content: "Bookable2", price: 3000 },
      ];
      this.isLoading = false;
    }, 5000);
  },

  // beforeMount() {
  //   console.log("before mount");
  // },

  // mounted() {
  //   console.log("mounted");
  // },

  // beforeDestroy() {
  //   console.log("before destroy");
  // },

  // destroyed() {
  //   console.log("destroyed");
  // },
};
</script>
