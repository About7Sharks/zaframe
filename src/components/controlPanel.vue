<template>
    <a-scene>
        <a-assets>
            <img id="field" src="https://res.cloudinary.com/dybluctxg/image/upload/v1495307503/field_kcw4so.jpg">
            <img id="github" src="https://res.cloudinary.com/dybluctxg/image/upload/v1495310880/github_ipn5do.png" alt="">
            <img id="me" src="../assets/miamiHomeGirl.jpg">
            <img id="linkedin" src="../assets/linkdin.png">
            <img id="about7sharks" src="../assets/about7sharks.png">
            <img id="pic1" src="../assets/about7sharks.png" alt="">
            <img id="pic2" src="../assets/AccubrewIMG.png" alt="">
            <img id="pic4" src="../assets/pixt.png" alt="">
            <img id="pic5" src="../assets/zacarlinSite.png" alt="">
            <img id="pic6" src="../assets/carlinAthletics.png" alt="">
            
        </a-assets>
        <a-sky src='#field'></a-sky>

        <!-- center panel -->
        <a-plane  color="#80c1ff" opacity=.95 height="3.4" width="3">
                <a-circle @click="hey()" src='#me' position="0 .55 0.01" radius=".6"></a-circle>
                <a-circle @mousedown="goGit()" src='#github' position="-1 -1.35 0.01" radius=".2"></a-circle>
                <a-circle @mousedown="goLinkedin()" src='#linkedin' position="0 -1.35 0.01" radius=".2"></a-circle>
                <a-circle @mousedown="goAbout7Sharks()" src='#about7sharks' position="1 -1.35 0.01" radius=".2"></a-circle>

                <a-text  color=black width=5 align='center' value="ZACHARY CARLIN"
                position="0 1.4 0"></a-text>
                <a-box color=#004280 position='0 -.27 .01' width=3 height=.071 depth=.001></a-box>
                <a-box color=#004280 position='-1.5 0 .01' rotation='0 0 90' width=3.3 height=.1 depth=.001></a-box>
                <a-box color=#004280 position='1.5 0 .01' rotation='0 0 90' width=3.3 height=.1 depth=.001></a-box>
                <a-box color=#004280 position='0 1.7 .01' width=3.1 height=.1 depth=.001></a-box>
                <a-box color=#004280 position='0 -1.7 .01' width=3.1 height=.1 depth=.001></a-box>

                <a-text  color=black width=2.8 align='center' value="Hi, there i'm a Software Engineer based in Tampa, FL. For the last year i've been working at Gulf Fiberoptics on Accubrew.io a craft beer fermentation monitoring system and in my free time I enjoy tinkering with webxr technology and Machine Learning"
                position="0 -.7 0"></a-text>
        </a-plane>

        <!-- right panel -->
        <a-plane rotation='0 -30 0' opacity=.95 color="#80c1ff" position='2.4 0 .5' height=3.4 width=2>
            <a-box color=#004280 position='0 -1.7 .01' width=2 height=.1 depth=.001></a-box>
            <a-box color=#004280 position='.95 0 .01' rotation='0 0 90' width=3.3 height=.1 depth=.001></a-box>
            <a-box color=#004280 position='0 1.7 .01' width=2 height=.1 depth=.001></a-box>
            
            <a-box color=#004280 position='-.05 .45 .01' width=2 height=.071 depth=.001></a-box>
             <a-text  color=black width=1.8  align='center' value="Most of my day to day work and personal coding time is spent within the javascript ecosystem. I have multiple years of experiencs using Vue.js and have dabbled in React.js on the front-end side of things. Even though I took python in college I really started to enjoy back-end development when I found Node.js which allows me to write javascript on the server side as well. Since then i've started to become more instrested in mixing VR/AR with javascript" position="-.04 1.15 0"></a-text>
            <a-text  color=black width=3 align='center' value="Skills" position="0 .3 0">
            <a-text  color=black width=1.8 align='center' value="Javascript" position="-.3 -.2 0"></a-text>  <a-text  color=black width=1.8 align='center' value="HTML" position=".3 -.2 0"></a-text>
            <a-text  color=black width=1.8 align='center' value="CSS" position="-.3 -.4 0"></a-text>  <a-text  color=black width=1.8 align='center' value="SCSS" position=".3 -.4 0"></a-text>
            <a-text  color=black width=1.8 align='center' value="Git" position="-.3 -.6 0"></a-text>  <a-text  color=black width=1.8 align='center' value="Vue.JS" position=".3 -.6 0"></a-text>
            <a-text  color=black width=1.8 align='center' value="Node.JS" position="-.3 -.8 0"></a-text>  <a-text  color=black width=1.8 align='center' value="Linux" position=".3 -.8 0"></a-text>
            <a-text  color=black width=1.8 align='center' value="NoSQL" position="-.3 -1 0"></a-text>  <a-text  color=black width=1.8 align='center' value="WebXR" position=".3 -1 0"></a-text>
             <a-text  color=black width=1.8 align='center' value="Google Cloud" position="-.3 -1.2 0"></a-text>
                 <a-text  color=black width=1.8 align='center' value="Firebase" position=".3 -1.2 0"></a-text>  <a-text  color=black width=1.8 align='center' value="Machine Learning" position=".3 -1.4 0"></a-text>
            
            


            </a-text>
        </a-plane>

        <!-- left panel -->
        <a-plane rotation='0 30 0' opacity=.95 color="#80c1ff" position='-2.4 0 .5' height=3.4 width=2>
            <a-box color=#004280 position='0 -1.7 .01' width=2 height=.1 depth=.001></a-box>
            <a-box color=#004280 position='-.95 0 .01' rotation='0 0 90' width=3.3 height=.1 depth=.001></a-box>
            <a-box color=#004280 position='0 1.7 .01' width=2 height=.1 depth=.001></a-box>
           <a-box id="websiteGal" position='.031 .145 0' @mousedown="goLeftPanel()" src='#pic1' href="https://about7sharks.com" height=2.2 width=1.9 depth=.001 image="#pic1"
                ></a-box>
            <a-box color=#004280 position='0 -1 .01' width=2 height=.1 depth=.001></a-box>
    <a-text id="websiteGalText"  color=black width=1.8  align='center' value="Personal website made with Nuxt.js to host my projects" position="0 -1.25 0"></a-text>
    <a-text id="websiteGalTitle"  color=black width=1.8  align='center' value="About7Sharks" position="0 1.45 0"></a-text>



        </a-plane>

            <!-- camera -->
            <a-camera position="0 .4 3">
                <a-entity cursor="fuse: true; fuseTimeout: 500"
                        position="0 0 -1"
                        geometry="primitive: ring; radiusInner: 0.02; radiusOuter: 0.03"
                        material="color: black; shader: flat">
                </a-entity>
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
    methods:{
        hey(){
            console.log('hey')
        },
        goGit(){
           window.location.href='https://github.com/About7Sharks'
        },
        goLinkedin(){
           window.location.href='https://www.linkedin.com/in/zachary-carlin-85402a123/'
        },
        goAbout7Sharks(){
           window.location.href='https://about7sharks.com'
        },
        goLeftPanel(){
            window.location.href=(document.getElementById("websiteGal").getAttribute("href"))
        },
        updateLeftPanel(){
            let i =0
            setInterval(function(){
              let picsArray= ['#pic1','#pic2','http://4.bp.blogspot.com/-kzBX2GaSXl8/UPM_RFEM2vI/AAAAAAAAAH8/e-2WeqdQCMA/s1600/Arnold-Schwarzenegger-Wallpaper.1.jpg','#pic4','#pic5']
              let urlArray=['https://about7sharks.com','https://accubrew.io','https://tensorposebot.netlify.com','https://pixt.netlify.com','https://zacarlin.com','https://carlinfitness.netlify.com']
              let titleArray=['About7Sharks','Accubrew','Pose Coach','Pixt','Zacarlin','Carlin Athlitcs']
              let captionArray=['Personal website made with Nuxt.js to host my projects','Beer fermentation monitoring system I was contracted to build for Gulf Fiberoptics. Made with Vue.js front-end and Node.js back-end','PoseNet AI implemented in the browser and modified as a posing coach for bodybuilders to get feed back on their poses. Made with Vue.js','Text recognition in the browser','zacarlin','Carlin Athletics suit of tools for strength athletes']
              let entityEl = document.getElementById('websiteGal')
              let entityCaption=document.getElementById('websiteGalText')
              let enityTitle=document.getElementById('websiteGalTitle')
              entityEl.setAttribute('src', picsArray[i]);
              entityEl.setAttribute('href', urlArray[i]);
              enityTitle.setAttribute('value',titleArray[i])
              entityCaption.setAttribute('value',captionArray[i]);
              i++
              if(i==picsArray.length){
                  i=0
              }
           },7000)
        }
    },
    mounted(){
       this.updateLeftPanel()
    }
}
</script>
<style lang="scss" scoped>
.color{
    background-color: '#80c1ff'
}
</style>
