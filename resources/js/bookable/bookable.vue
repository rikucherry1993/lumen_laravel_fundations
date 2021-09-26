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
};
</script>
