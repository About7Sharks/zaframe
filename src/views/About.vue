<template>
<div id="websitePortal">
  <a-scene >
     <a-assets>
      <img id="background" width="1000px" height="1000px" src=../assets/backgroundsky.jpg>
      <img id="texture" width="480px" height="480px" src="../assets/yazBeer.jpg" alt="image">
    </a-assets>
    <!-- <a-scene stats></a-scene> -->

      <a-sky  src="#background"></a-sky>
  

    <a-entity id="mouseCursor" cursor="rayOrigin: mouse" raycaster="objects: .screen"></a-entity>
    <a-entity laser-controls raycaster="objects: .screen;"></a-entity>
   
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


  <img id="360Tour" src="../assets/AccubrewIMG.png">
    <a-entity class="screen" position="-5 2.1 -2" htmlembed="ppu:256">
      <a href="/360Tour" class="button">360 Tour</a>
    </a-entity>
    <a-circle src='#accubrew' position="-5 1 -2" radius="1"></a-circle>




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