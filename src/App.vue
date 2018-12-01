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
        height: 100vh;
        -webkit-font-smoothing: subpixel-antialiased;
        text-rendering: optimizeLegibility;
    }

    #app {
        height: 100vh;
    }

</style>
