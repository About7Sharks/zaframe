<template>
    <a-scene>
        <a-camera position="0 2 4">
            <a-cursor color="#4CC3D9"></a-cursor>
        </a-camera>
       <a-cone position='7 6 0' color="tomato" radius-bottom="1" height=5 radius-top=".03"></a-cone>
       <a-cylinder position='7 1 0' color="cyan" height="5" radius="1"></a-cylinder>
       <a-cone position='-3 6 0' color="tomato" radius-bottom="1" height=5 radius-top=".03"></a-cone>
       <a-cylinder position='-3 1 0' color="cyan" height="5" radius="1"></a-cylinder>

        <a-cone position='7 6 -10' color="tomato" radius-bottom="1" height=5 radius-top=".03"></a-cone>
       <a-cylinder position='7 1 -10' color="cyan" height="5" radius="1"></a-cylinder>
       <a-cone position='-3 6 -10' color="tomato" radius-bottom="1" height=5 radius-top=".03"></a-cone>
       <a-cylinder position='-3 1 -10' color="cyan" height="5" radius="1"></a-cylinder>

        <a-box position='2 0 -10' color='brown' depth=.5 height=3 width=9></a-box>
        <a-box position='2 0 0' color='brown' depth=.5 height=3 width=9></a-box>
        <a-box rotation='0 90 0' position='7 0 -5' color='brown' depth=.5 height=3 width=9></a-box>
        <a-box rotation='0 90 0' position='-3 0 -5' color='brown' depth=.5 height=3 width=9></a-box>
    
    
    <a-text font="aileronsemibold" color=black width=50 align='center' value="MI CASTLE!"
        position="0 10 -10">
      </a-text>
    </a-scene>
</template>
<script>
    export default {

    }
</script>
<style lang="scss" scoped>

</style>