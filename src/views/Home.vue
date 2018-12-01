<template>
    <div class="home-view">
        <periodic-table />
    </div>
</template>

<script lang="ts">

    import { Vue, Component } from 'vue-property-decorator';
    import PeriodicTable from '../components/PeriodicTable.vue';

    @Component({
        components: { PeriodicTable }
    })
    export default class HomeView extends Vue {
        
    }

</script>

<style lang="scss">
    
    .home-view {
        display: grid;
        align-items: center;
        justify-items: center;

        min-height: 100vh;
        min-width: 100vw;

        height: 100%;
        width: 100%;
    }
    
</style>