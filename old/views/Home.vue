<template>
    <div class="home-view">
        <periodic-table />
        <element-dialog />
    </div>
</template>

<script lang="ts">

    import { Vue, Component } from 'vue-property-decorator';

    import PeriodicTable from '../components/PeriodicTable.vue';
    import ElementDialog from '../components/ElementDialog.vue';

    @Component({
        components: { PeriodicTable, ElementDialog }
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

        padding: 2rem 0.75rem;
    }
    
</style>