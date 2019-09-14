<template>
    <a-scene>
        <a-assets>
            <!-- <img id="floor" src="https://res.cloudinary.com/dybluctxg/image/upload/v1495307503/field_kcw4so.jpg"> -->
            <img id="github" src="https://res.cloudinary.com/dybluctxg/image/upload/v1495310880/github_ipn5do.png" alt="">
            <img id="me" src="../assets/miamiHomeGirl.jpg">
            <img id="accubrew" src="../assets/AccubrewIMG.png">
            <img id="about7sharks" src="../assets/about7sharks.png">
           
        </a-assets>
        <a-sky src='#floor'></a-sky>
        <a-plane  color="#80c1ff" height="3.4" width="3">
                <a-circle @click="hey()" src='#me' position="0 .5 0.01" radius=".6"></a-circle>
                <a-circle @mousedown="goGit()" src='#github' position="-1 -1.35 0.01" radius=".25"></a-circle>
                <a-circle @mousedown="goAccubrew()" src='#accubrew' position="0 -1.35 0.01" radius=".25"></a-circle>
                <a-circle @mousedown="goAbout7Sharks()" src='#about7sharks' position="1 -1.35 0.01" radius=".25"></a-circle>

        <a-text font="aileronsemibold" color=black width=5 align='center' value="ZACHARY CARLIN"
        position="0 1.4 0"></a-text>
        <a-box color=#004280 position='0 -.27 .01' width=3 height=.071 depth=.001></a-box>
        <a-box color=#004280 position='-1.5 0 .01' rotation='0 0 90' width=3.3 height=.1 depth=.001></a-box>
        <a-box color=#004280 position='1.5 0 .01' rotation='0 0 90' width=3.3 height=.1 depth=.001></a-box>
        <a-box color=#004280 position='0 1.7 .01' width=3.1 height=.1 depth=.001></a-box>
        <a-box color=#004280 position='0 -1.7 .01' width=3.1 height=.1 depth=.001></a-box>

         <a-text font="aileronsemibold" color=black width=2.8 align='center' value="Hi, there i'm a Software Engineer based in Tampa, FL. For the last year i've been working at Gulf Fiberoptics on Accubrew.io a craft beer fermentation monitoring system and in my free time I enjoy tinkering with webxr technology and Machine Learning"
        position="0 -.7 0"></a-text>
        </a-plane>
            <a-camera position="0 .4 2.2">
<a-entity cursor="fuse: true; fuseTimeout: 500"
        position="0 0 -1"
        geometry="primitive: ring; radiusInner: 0.02; radiusOuter: 0.03"
        material="color: black; shader: flat">
  </a-entity>
        </a-camera>
    </a-scene>
</template>
<script>
export default {
    methods:{
        hey(){
            console.log('hey')
        },
        goGit(){
           window.location.href='https://github.com/About7Sharks'
        },
        goAccubrew(){
           window.location.href='https://accubrew.io'
        },
        goAbout7Sharks(){
           window.location.href='https://about7sharks.com'
        }
    },
    mounted(){
    }
}
</script>
<style lang="scss" scoped>

</style>
