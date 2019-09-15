<template>
  <div class="home">
    <!-- <HelloWorld/> -->
    <control-panel/>
    <!-- <portfolioCard/> -->
  </div>
</template>

<script>
// @ is an alias to /src
import controlPanel from '@/components/controlPanel.vue'
import portfolioCard from '@/components/portfolioCard.vue'

export default {
  name: 'home',
  components: {
    portfolioCard,
    controlPanel
  }
}
</script>
