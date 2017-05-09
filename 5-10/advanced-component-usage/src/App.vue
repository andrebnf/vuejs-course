<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12">
        <button @click="selectedComponent = 'app-quote'">Quote</button>
        <button @click="selectedComponent = 'app-author'">Author</button>
        <button @click="selectedComponent = 'app-new'">New</button>
        <hr>
        <p>{{ selectedComponent }}</p>
        <keep-alive>
          <component :is="selectedComponent">Default Content</component>
        </keep-alive>
        <!-- <app-quote>
          <h3 slot="title">{{ quoteTitle }}</h3>
          <p>A wonderful Quote!</p>
        </app-quote> -->
      </div>
    </div>
  </div>
</template>

<script>
import Quote from './components/Quote.vue'
import Author from './components/Author.vue'
import New from './components/New.vue'

export default {
  data: function() {
    return {
      quoteTitle: 'The Quote',
      selectedComponent: 'app-quote' // component selector
    }
  },
  components: {
    appQuote: Quote,
    appAuthor: Author,
    appNew: New
  }
}
</script>

<style>
</style>
