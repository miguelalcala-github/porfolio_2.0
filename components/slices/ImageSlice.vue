<template>
  <div class="mt-2 w-full h-auto">
    <img class="mx-auto" :src="img.url" :alt="img.alt" />
  </div>
</template>

<script>
export default {
  props: ["slice"],

  data: function() {
    return {
      img: "",
      caption: "",
      size: ""
    };
  },
  created() {
    this.img = this.slice;
  }
};
</script>
