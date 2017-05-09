<template lang="html">
  <div>
    <div class="title">
      <slot name="title"></slot>
      <span style="color: #ccc"><slot name="subtitle">The Subtitle</slot></span>
    </div>
    <hr>
    <div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="css" scoped>
div {
  border: 1px solid #ccc;
  box-shadow: 1px 1px 2px black;
  padding: 2em;
  margin: 30px auto;
  text-align: center;
}

.title {
  color: lightseagreen;
  font-style: italic;
}
</style>
