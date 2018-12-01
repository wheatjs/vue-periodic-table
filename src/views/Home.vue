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
        display: flex;
        flex-direction: row;
        align-items: safe center;
        justify-content: safe center;

        height: 100%;
    }
    
</style>