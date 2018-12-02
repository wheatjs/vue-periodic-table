<template>
    <div class="periodic-table">
        <periodic-element @select="onSelectElement" v-for="element in elements" :element="element" :key="element.name" />
        <element-details :element="element" />
    </div>
</template>

<script lang="ts">

    import { Vue, Component } from 'vue-property-decorator';
    import PeriodicElement from './PeriodicElement.vue';
    import ElementDetails from './ElementDetails.vue';
    import { Elements } from '../table';

    @Component({
        components: { PeriodicElement, ElementDetails }
    })
    export default class PeriodicTable extends Vue {
        
        private elements = Elements;
        private element = this.elements[0];

        private onSelectElement(element) {
            this.element = element;
        }

    }

</script>

<style lang="scss">
    
    .periodic-table {
        display: grid;
        position: relative;

        font-size: 14px;

        --grid-column-size: 5em;
        --grid-row-size: 5em;

        @media (max-width: 1400px) {
            font-size: 12px;
        }

        @media (max-width: 1200px) {
            font-size: 10px;
        }

        @media (max-width: 1200px) {
            font-size: 8px;
        }

        @media (max-width: 900px) {
            font-size: 6px;
        }

        grid-template-columns: 
            var(--grid-column-size)
            var(--grid-column-size)
            var(--grid-column-size)
            var(--grid-column-size)
            var(--grid-column-size)
            var(--grid-column-size)
            var(--grid-column-size)
            var(--grid-column-size)
            var(--grid-column-size)
            var(--grid-column-size)
            var(--grid-column-size)
            var(--grid-column-size)
            var(--grid-column-size)
            var(--grid-column-size)
            var(--grid-column-size)
            var(--grid-column-size)
            var(--grid-column-size)
            var(--grid-column-size);

        grid-template-rows:
            var(--grid-row-size)
            var(--grid-row-size)
            var(--grid-row-size) 
            var(--grid-row-size)
            var(--grid-row-size)
            var(--grid-row-size)
            var(--grid-row-size)
            var(--grid-row-size)
            var(--grid-row-size)
            var(--grid-row-size);

        grid-gap: 0.5em;

        .element-details {
            grid-row-start: 1;
            grid-row-end: 4;
            grid-column-start: 3;
            grid-column-end: 13;
        }
    }

</style>