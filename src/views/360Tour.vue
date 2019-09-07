<template>
    <div id="360tour">
        <a-scene>
            <a-assets>
                <img id="background" width="1000px" height="1000px" src="../assets/room.jpg">
                <img id="livingRoom" src="../assets/room.jpg" alt="">
            </a-assets>

             <a-entity camera look-controls wasd-controls>
                  <a-entity position="0 0 -3"
                geometry="primitive: ring; radiusInner: 0.2; radiusOuter: 0.3;"
                material="color: cyan; shader: flat"
                cursor="maxDistance: 30; fuse: true">
        <a-animation begin="click" easing="ease-in" attribute="scale"
             fill="forwards" from="0.2 0.2 0.2" to="1 1 1" dur="150"></a-animation>
        <a-animation begin="fusing" easing="ease-in" attribute="scale"
             fill="backwards" from="1 1 1" to="0.2 0.2 0.2" dur="1500"></a-animation>
      </a-entity>
             </a-entity>


            <a-text font="kelsonsans" value="Socks Room, Florida" width="6" position="-2.5 0.25 -1.5" rotation="0 15 0">
            </a-text>

    <a-circle src='#livingRoom' href="https://about7sharks.com" image="#livingRoom" position="-1.5 0.25 -1.5" rotation="0 120 0"
                ></a-circle>


            <a-sky src="#background" rotation="0 -130 0"></a-sky>

        </a-scene>

    </div>
</template>
<script>
    export default {
        mounted() {
       
        }
    }
</script>