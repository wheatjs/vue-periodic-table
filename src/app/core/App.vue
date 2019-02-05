<template>
    <div>
        <main>
            <router-view></router-view>
        </main>
    </div>
</template>

<script lang="ts">
    import { Vue, Component } from 'vue-property-decorator';

    @Component
    export default class App extends Vue {
        
    }
</script>

<style module lang="scss">
    
    * { box-sizing: border-box; }

    :root {
        --background: hsl(205, 27%, 17%);

        --foreground: hsla(0, 0%, 100%, 0.72);
        --foreground-secondary: hsla(0, 0%, 100%, 0.56);

        --container-size: 1400px;

        // Element Category Styles
        --alkalai-metals: #E53935;
        --alkaline-earth-metals: #B388FF;
        --lanthanides: #FF3D00;
        --actinides: #00E676;
        --transition-metals: #00E5FF;
        --unknown-properties: #E0E0E0;
        --post-transition-metals: #FFEB3B;
        --metalloids: #F50057;
        --other-nonmetals: #2979FF;
        --halogens: #00B0FF;
        --noble-gases: #00BFA5;
    }

    :global {
        .container {
            max-width: var(--container-size);
            width: 100%;
        }
    }

    html,
    body {
        margin: 0;
    }

    main {
        display: grid;
        width: 100%;
        place-items: center;
    }

    body {
        background: var(--background);
        color: var(--foreground);

        font-family: 'Work Sans', sans-serif;
        width: 100vw;
    }

</style>
