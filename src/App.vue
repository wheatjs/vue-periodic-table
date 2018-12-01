<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script lang="ts">

    import { Component, Vue } from 'vue-property-decorator';

    @Component
    export default class App extends Vue {

    }

</script>


<style lang="scss">

    :root {
        --background: #202e38;
    }

    * {
        box-sizing: border-box;
    }

    html,
    body {
        font-family: "Poppins", sans-serif;
        margin: 0;
        background: var(--background);
        min-height: 100vh;
        height: 100%;
        -webkit-font-smoothing: subpixel-antialiased;
        text-rendering: optimizeLegibility;
    }

    #app {
        // min-height: 100vh;
        // height: 100%;
    }

</style>
