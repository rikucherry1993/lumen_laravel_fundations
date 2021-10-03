<template>
  <div>
    <div v-if="isLoading">Data is loading...</div>
    <div v-else>
      <div class="row mb-4" v-for="row in rows" :key="'row' + row">
        <div
          class="col d-flex align-items-stretch"
          v-for="(item, index) in bookablesInRow(row)"
          :key="'row' + row + index"
        >
          <bookableListItem
            :title="item.title"
            :description="item.description"
            :price="item.price"
          ></bookableListItem>
        </div>
        <div
          class="col"
          v-for="p in placeholdersInRow(row)"
          :key="'placeholder' + row + p"
        ></div>
      </div>
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
  methods: {
    bookablesInRow(row) {
      return this.bookables.slice((row - 1) * this.columns, row * this.columns);
    },

    placeholdersInRow(row) {
      return this.columns - this.bookablesInRow(row).length;
    },
  },

  created() {
    this.isLoading = true;

    const p = new Promise((resolve, reject) => {
      console.log(resolve);
      console.log(reject);
      setTimeout(() => resolve("Hello"), 3000);
    })
      .then((result) => console.log(`Sucess: ${result}`))
      .catch((result) => console.log(`Error: ${result}`));
    console.log(p);

    const request = axios.get("/api/bookables").then((response) => {
      this.bookables = response.data;
      this.isLoading = false;
    });

    // setTimeout(() => {
    //   this.bookables = [
    //     { title: "Bookable1", content: "Bookable1", price: 3000 },
    //     { title: "Bookable2", content: "Bookable2", price: 3000 },
    //     { title: "Bookable3", content: "Bookable2", price: 3000 },
    //     { title: "Bookable4", content: "Bookable2", price: 3000 },
    //     { title: "Bookable5", content: "Bookable2", price: 3000 },
    //     { title: "Bookable6", content: "Bookable2", price: 3000 },
    //     { title: "Bookable7", content: "Bookable2", price: 3000 },
    //   ];
    //   this.isLoading = false;
    // }, 5000);
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
