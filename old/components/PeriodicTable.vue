<template>
    <div class="periodic-table">
        <div class="rows">
            <span>1</span>
            <span>2</span>
            <span>3</span>
            <span>4</span>
            <span>5</span>
            <span>6</span>
            <span>7</span>
        </div>
        <div class="columns">
            <span>1</span>
            <span>2</span>
            <span>3</span>
            <span>4</span>
            <span>5</span>
            <span>6</span>
            <span>7</span>
            <span>8</span>
            <span>9</span>
            <span>10</span>
            <span>11</span>
            <span>12</span>
            <span>13</span>
            <span>14</span>
            <span>15</span>
            <span>16</span>
            <span>17</span>
            <span>18</span>
        </div>

        <periodic-element @select="onSelectElement" v-for="element in elements" :element="element" :key="element.name" />
        <element-details :element="element" />
    </div>
</template>

<script lang="ts">

    import { Vue, Component } from 'vue-property-decorator';
    import { Elements, IElement } from '../table';

    import PeriodicElement from './PeriodicElement.vue';
    import ElementDetails from './ElementDetails.vue';    

    @Component({
        components: { PeriodicElement, ElementDetails }
    })
    export default class PeriodicTable extends Vue {
        
        private elements: IElement[] = Elements;
        private element: IElement = this.elements[0];

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

        grid-template-columns: calc(var(--grid-column-size) / 2) repeat(18, var(--grid-column-size));
        grid-template-rows: calc(var(--grid-row-size) / 2) repeat(10, var(--grid-row-size));


        grid-gap: 0.5em;

        .element-details {
            grid-row-start: 2;
            grid-row-end: 5;
            grid-column-start: 4;
            grid-column-end: 14;
        }

        .columns {
            grid-row: 1;
            grid-column-start: 2;
            grid-column-end: 20;
            grid-gap: 0.5em;

            display: grid;
            grid-template-columns: repeat(18, var(--grid-column-size));
        }

        .rows {
            grid-column: 1;
            grid-row-start: 2;
            grid-row-end: 9;

            display: grid;
            grid-gap: 0.5em;
            align-items: center;
            justify-items: center;
        }

        .rows,
        .columns {
            span {
                display: grid;
                align-items: center;
                justify-items: center;

                font-weight: 700;

                font-size: 1em;
                color: rgba(255, 255, 255, .72);
            }
        }
    }

</style>