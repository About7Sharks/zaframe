<template>
  <div class="home">
    <!-- <HelloWorld/> -->
    <control-panel/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import controlPanel from '@/components/contolPanel.vue'
export default {
  name: 'home',
  components: {
    HelloWorld,
    controlPanel
  }
}
</script>
