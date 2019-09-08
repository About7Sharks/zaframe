<template>
  <div>
    <a-scene>
      <a-assets>
        <!-- <img id="background" width="1000px" height="1000px" src='../assets/backgroundsky.jpg'> -->
        <img id="floor" src="../assets/tiles.svg">
        <a-asset-item id="shark-obj" src="src/assets/Shark002OBJ/Correctshark002.obj"></a-asset-item>
        <a-asset-item id="shark-mtl" src="src/assets/Shark002OBJ/Correctshark002.mtl"></a-asset-item>
      </a-assets>
      <a-entity position="0 2 4" obj-model="obj: #shark-obj; mtl: #shark-mtl"></a-entity>


      <a-sky color="#000000"></a-sky>
      <a-plane material="src:#floor; repeat: 700 700; transparent: true;" height="500" width="500" rotation="-90 0 0">
      </a-plane>

      
        <a-camera position="0 2 4">
          <a-cursor color="#4CC3D9"></a-cursor>
        </a-camera>
      <a-text font="aileronsemibold" color=white width=50 align='center' value="Welcome to My Reality"
        position="0 7 -10">
      </a-text>

      <a-torus color="red" metalness=.9 arc="360" radius="12" position="0 8 -10" radius-tubular=".45"
        animation="property: rotation; to: 0 20 0; loop: true;dur: 5000"></a-torus>
      <a-torus color="blue" metalness=.9 arc="360" radius="12" position="0 8 -10" radius-tubular=".45"
        animation="property: rotation; to: 16 300 0; loop: true;dur: 5000"></a-torus>
      <a-torus color="green" metalness=.9 arc="360" radius="12" position="0 8 -10" radius-tubular=".45"
        animation="property: rotation; to: 0 360 0; loop: true;dur: 5000"></a-torus>

      <!-- <a-entity position="0 2.25 -15" particle-system="preset: dust"></a-entity> -->



    </a-scene>
  </div>
</template>
<script>
  export default {

  }
</script>
<style lang="scss" scoped>

</style>