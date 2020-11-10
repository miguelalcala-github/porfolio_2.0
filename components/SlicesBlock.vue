<template>
  <section>
    <!-- Slice section template -->
    <section v-for="(slice, index) in slices" :key="'slice-' + index">
      <!-- Text slice template -->
      <template v-if="slice.type === 'paragraph'">
        <ListItem v-if="slice.text[0] === '-'" :slice="slice"></ListItem>
        <!-- Here :slice="slice" passes the data to the component -->
        <TextSlice v-else :slice="slice"></TextSlice>
      </template>
      <!-- Image with caption slice template -->
      <template v-else-if="slice.type === 'image'">
        <ImageSlice :slice="slice"></ImageSlice>
      </template>
    </section>
  </section>
</template>

<script>
export default {
  props: ["slices"]
};
</script>
