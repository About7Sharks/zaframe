<template>
<div id="websitePortal">
  <a-scene fog="type: linear; color: #222222; far: 20;">
    <!-- <a-scene stats></a-scene> -->

    <a-sky color="#222222"></a-sky>
    <img id="floor" src="../assets/tiles.svg">
    <a-plane material="src:#floor; repeat: 700 700; transparent: true;" height="500" width="500" rotation="-90 0 0">
    </a-plane>

    <a-entity id="mouseCursor" cursor="rayOrigin: mouse" raycaster="objects: .screen"></a-entity>
    <a-entity laser-controls raycaster="objects: .screen;"></a-entity>
    <a-assets>
      <img id="texture" width="480px" height="480px" src="../assets/yazBeer.jpg" alt="image">
    </a-assets>
    <a-entity id="#slide3" position="0 2.5 -2" htmlembed>
      <h1>Hi, i'm Zac </h1>
      <p>Explore around and have a beer! :)</p>
    </a-entity>
    <img id="accubrew" src="../assets/AccubrewIMG.png">
    <a-entity class="screen" position="-1 2.1 -2" htmlembed="ppu:256">
      <a href="https://accubrew.io" class="button">Accubrew</a>
    </a-entity>
    <a-circle src='#accubrew' position="-1 1 -2" radius="1"></a-circle>

    <img id="about7sharks" src="../assets/about7sharks.png">
    <a-entity class="screen" position="-3 2.1 -2" htmlembed="ppu:256">
      <a href="https://about7sharks.com" class="button">About 7 Sharks</a>
    </a-entity>
    <a-circle src='#about7sharks' position="-3 1 -2" radius="1"></a-circle>
    <a-entity class="screen euro" onclick="console.log('do something')" position="1 2 -2" htmlembed="ppu:256">
      <h1>My Trip to Europe</h1>
      <ul>
        <li><a href="/denmark" class="button">Denmark</a></li>
        <li><a href="/england" class="button">England</a></li>
        <li><a href="/netherlands" class="button">Netherlands</a></li>
      </ul>
    </a-entity>
    <a-box depth=1 animation="property: rotation; to: 0 360 0; loop: true; dur: 10000" position="1 1 -2" src="#texture">
    </a-box>


  </a-scene>
</div>
</template>
<script>
  export default {
    mounted() {

    },
  }
</script>

<style lang="scss" scoped>
#websitePortal{
  color: white;
}
  .euro {
    ul {
      list-style-type: none;

    }
  }
</style>