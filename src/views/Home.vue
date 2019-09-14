<template>
  <div class="home">
    <!-- <HelloWorld/> -->
    <control-panel/>
    <!-- <portfolioCard/> -->
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import controlPanel from '@/components/controlPanel.vue'
import castle from '@/components/castle.vue'
import portfolioCard from '@/components/portfolioCard.vue'

export default {
  name: 'home',
  components: {
    HelloWorld,
    portfolioCard,
    castle,
    controlPanel
  }
}
</script>
