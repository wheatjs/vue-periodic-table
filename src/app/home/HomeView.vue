<template>
    <div :class="$style.homeView">
        <periodic-table :selected="routeSymbol" :elements="elements"></periodic-table>
    </div>
</template>

<script lang="ts">
    import { Vue, Component } from 'vue-property-decorator';
    import { PeriodicTable } from '@components/PeriodicTable';
    import Elements from '@shared/data/element-data.json';

    @Component({
        components: { PeriodicTable }
    })
    export default class HomeView extends Vue {
    
        private elements = Elements;

        public get routeSymbol() {
            return this.$route.params.symbol || 'H';
        }

    }
</script>

<style module lang="scss">
    
    .homeView {
        composes: container from global;

        display: grid;
        place-items: center;

        height: 100vh;
    }

</style>
