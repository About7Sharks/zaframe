<template>
    <a-scene>
        <a-assets>
            <img src="../assets/snowy360.jpeg" alt="" id="background">
             <a-asset-item id="optimerBoldFont" src="https://rawgit.com/mrdoob/three.js/dev/examples/fonts/optimer_bold.typeface.json"></a-asset-item>
        <a-mixin id="boldFont" text="font: #optimerBoldFont"></a-mixin>
        </a-assets>
  <a-entity id="sky"  environment="preset: forest; groundColor: #445; grid: cross"></a-entity>
    <a-entity static-body mixin="boldFont" position='0 2 -2' text-geometry="value: Software Engineer"></a-entity>
      <a-entity  material="color: red; src: #texture" dynamic-body="shape: cylinder; mass: 2" position='0 10 -2'  text-geometry="value: Zachary Carlin; font: #optimerBoldFont"></a-entity>
          <a-plane static-body rotation="-90 0 0" position='0 -.01 0' color="#CCC" height="20" width="20"></a-plane>
        <a-camera position="1.4 2 1.3">
            <a-cursor color="#4CC3D9"></a-cursor>
        </a-camera>
    </a-scene>
</template>
<script>
import { setTimeout } from 'timers';

    export default {
        data(){
            return{
            }
        },
        mounted() {
            setTimeout(function(){
                let sceneEl = document.querySelector('a-scene');
                // sceneEl.removeChild(document.getElementById('sky'))  
                AFRAME.registerComponent('do-something-once-loaded', {
                init: function () {
                    // This will be called after the entity has properly attached and loaded.
                    console.log('I am ready!');
                }
                });

                var entityEl = document.createElement('a-entity');
                entityEl.setAttribute('do-something-once-loaded', '');
                sceneEl.appendChild(entityEl);              
            },3000)
        }
    }
</script>
<style lang="scss" scoped>

</style>