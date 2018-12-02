<template>
  <div id="app">
    <router-view/>
    <a href="https://github.com/jacobclevenger/vue-periodic-table"><img style="position: absolute; top: 0; right: 0; border: 0;" src="https://s3.amazonaws.com/github/ribbons/forkme_right_white_ffffff.png" alt="Fork me on GitHub"></a>
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
        --container-width: 1200px;
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

        color: rgba(255, 255, 255, .72);
    }

    #app {
        // min-height: 100vh;
        // height: 100%;
    }

</style>
