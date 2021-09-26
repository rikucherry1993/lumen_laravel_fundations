<template>
  <div>
    <ol>
      <li>
        <anyName title="Hoshino" content="Hoshino" v-bind:price="200"></anyName>
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

  // beforeCreate() {
  //   console.log("before create");
  // },

  // created() {
  //   console.log("created");
  // },

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
