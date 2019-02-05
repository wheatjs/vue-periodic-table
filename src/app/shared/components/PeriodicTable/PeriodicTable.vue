<template>
    <div :style="{ '--cell-size': cellSize, '--font-scale': fontScale, '--grid-gap': gridGap, }" :class="$style.periodicTable">
        <!-- Defines the table rows -->
        <span 
            v-for="row in rows"

            :key="`row-${row}`"
            :style="{ '--row': row + 1, '--column': 1 }" 
            :class="$style.periodicTableCellIndex">

            {{row}}
        </span>

        <!-- Defines the table columns -->
        <span 
            v-for="column in columns" 

            :key="`column-${column}`" 
            :style="{ '--row': 1, '--column': column + 1 }" 
            :class="$style.periodicTableCellIndex" >
            
            {{column}}
        </span>

        <!-- Defines all the elements in the table -->
        <periodic-element 
            v-for="element in elements" 
            
            :element="element"

            :selected="selected === element.symbol"
            :key="element.symbol"
            :class="$style.periodicTableElement" 
            :style="{ '--row': element.y + 1, '--column': element.x + 1 }" />

        <div :class="$style.periodicElementDetails">
            <periodic-element-card :element="selectedElement"></periodic-element-card>
            <p>{{selectedElement.description}}</p>
        </div>
    </div>
</template>

<script lang="ts">
    import { Vue, Component, Prop } from 'vue-property-decorator';
    import { PeriodicElement, PeriodicElementCard } from './index';
    import { debounce } from 'helpful-decorators';

    @Component({
        components: { PeriodicElement, PeriodicElementCard }
    })
    export default class PeriodicTable extends Vue {
        
        @Prop({ required: true })
        private elements: Array<any>;

        @Prop()
        private selected: string;

        private rows: number = 10;
        private columns: number = 18;

        private fontScale: string = '1rem';
        private cellSize: string = '0px';
        private gridGap: string = '0px';

        private mounted() {
            this.resizeGrid();
            window.addEventListener('resize', this.onWindowResize);
        }

        private get selectedElement() {
            return this.elements.find(element => element.symbol === this.selected) || this.elements[0];
        }

        private resizeGrid() {
            // The max width will either be the max width of the container or
            // the max width of the window, whichever one is smaller.
            const maxWidth = Math.min(parseInt(window.getComputedStyle(document.documentElement).getPropertyValue('--container-size')), window.innerWidth - 32);

            const maxHeight = window.innerHeight - 32;
            const maxRowSize = maxHeight / (this.rows + .5);
            const maxColumnSize = maxWidth / (this.columns + .5);

            // The max cell size needs to be the smallest one of the two so all
            // the rows and columns can fit on the screen.
            let maxCellSize = Math.min(maxRowSize, maxColumnSize);

            // Now that we have the total maxiumum cell size, compute the grid 
            // gap based on it.
            let gridGap = Math.max(1, Math.floor(maxCellSize / 10));

            // Force this number to be even, otherwise when calculating the
            // border for each element, if it is an odd number, the element
            // will have different sized borders on each side.
            gridGap = Math.min(4, gridGap % 2 === 0 ? gridGap : gridGap + 1);
            maxCellSize = maxCellSize - gridGap;

            // Scale the local font em to fit the container size.
            const fontScale = Math.min(2 * (maxCellSize / 70), 2) ;

            this.cellSize = `${maxCellSize}px`;
            this.fontScale = `${fontScale}rem`;
            this.gridGap = `${gridGap}px`;
        }

        @debounce(200)
        private onWindowResize() {
            this.resizeGrid();
        }

    }
</script>

<style module lang="scss">
    
    .periodicTable {
        --rows: 10;
        --columns: 18;

        display: grid;
        grid-template-columns: calc(var(--cell-size) / 2) repeat(var(--columns), var(--cell-size));
        grid-template-rows: calc(var(--cell-size) / 2) repeat(var(--rows), var(--cell-size));
        grid-gap: var(--grid-gap);

        contain: content;

        @media (orientation: portrait) {
            grid-template-columns: repeat(4, auto);
            grid-template-rows: unset;
            grid-gap: 1rem;
            grid-auto-flow: row;
            width: 100%;
            padding: 1rem;
        }
    }

    .periodicTableCellIndex {
        grid-row: var(--row);
        grid-column: var(--column);

        color: var(--foreground-secondary);
        font-size: calc(0.75em * var(--font-scale));
        font-size: calc(var(--font-scale) / 2);
        font-weight: 600;

        align-self: center;
        justify-self: center;

        @media (orientation: portrait) {
            display: none;
        }
    }

    .periodicTableElement {
        grid-row: var(--row);
        grid-column: var(--column);

        @media (orientation: portrait) {
            grid-row: unset !important;
            grid-column: unset !important;
        }

        font-size: var(--font-scale);
    }

    .periodicElementDetails {
        grid-row-start: 2;
        grid-row-end: 5;
        grid-column-start: 4;
        grid-column-end: 14;

        display: grid;
        grid-template-columns: calc(var(--cell-size) * 3 + var(--grid-gap) * 2) auto;
        grid-gap: var(--grid-gap);
        font-size: calc(var(--font-scale) / 2);

        @media (orientation: portrait) {
            display: none;
        }

        p {
            margin: 0;
            overflow: auto;
            -webkit-overflow-scrolling: touch;
        }
    }

</style>
