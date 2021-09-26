<template>
  <div>
    <ol>
      <li>
        <anyName
          v-if="bookable1"
          :title="bookable1.title"
          :content="bookable1.content"
          :price="bookable1.price"
        ></anyName>
      </li>
      <li>
        <anyName
          :title="bookable2.title"
          :content="bookable2.content"
          :price="bookable2.price"
        ></anyName>
      </li>
    </ol>
  </div>
</template>

<script>
import BookableListItem from "./bookableListItem";

export default {
  components: {
    anyName: BookableListItem,
  },

  data() {
    return {
      bookable1: null,

      bookable2: {
        title: "222",
        content: "222",
        price: 4000,
      },
    };
  },

  // beforeCreate() {
  //   console.log("before create");
  // },

  created() {
    console.log(this.bookable1.title);
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
