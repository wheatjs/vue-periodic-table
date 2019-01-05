<template>
    <div :category="element.category" class="element-visual">
        <svg :style="{fontSize: `${radius(0) * 5}%` }" viewBox="0 0 100 100">
            <g>
                <circle cx="50%" cy="50%" :r="radius(0)" />
                <text text-anchor="middle" dominant-baseline="central" x="50%" y="50%" stroke-width="0" fill="black">{{element.symbol}}</text>
            </g>
            

            <template v-for="(shell, index) in element.shells">
                <g :key="`shell-${index}-${shell}`">
                    <circle cx="50" cy="50" :r="radius(index + 1)" fill="transparent" :stroke-width="shellStrokeWidth" />

                    <template v-for="(electron, i) in getElectronCoordinates(shell, index)">
                        <circle fill="white" stroke-width="0" :key="`electron-${i}-${shell}-${index}`" :cx="electron.x" :cy="electron.y" :r="shellStrokeWidth * 2" />
                    </template>
                </g>
            </template>
        </svg>
    </div>
</template>

<script lang="ts">

    import { Vue, Component, Prop } from 'vue-property-decorator';
    import { IElement } from '@/table';

    @Component
    export default class ElementVisual extends Vue {
        
        @Prop()
        public element: IElement;

        private get shells() {
            return this.element.shells;
        }

        private get scale() {
            return 1 / (this.shells.length);
        }

        private get shellStrokeWidth() {
            console.log(4 * this.scale);
            return Math.min(1, 4 * this.scale);
        }

        private radius(index: number) {
            let space = 50 / (this.shells.length + 2);
            return space * (index + 1);
        }

        private getElectronCoordinates(electrons: number, shell: number) {
            const xCenter = 50;
            const yCenter = 50;
            const shellSize = this.radius(shell + 1); //(10 + ((50 * this.scale) * (shell + 1))) * this.scale;
            const distance = yCenter - shellSize;

            const groups = [...Array(electrons).keys()]
                    .map((group, index) => {
                        const angle = toRadians((index + 1) * (360 / electrons) + 90);

                        return {
                            x: xCenter + (Math.cos(angle) * shellSize),
                            y: yCenter + (Math.sin(angle) * shellSize),
                        }
                    });

            return groups;
        }

    }

    function toRadians(angle) {
        return angle * -(Math.PI / 180);
    }

</script>

<style lang="scss">
    
    .element-visual { 
        width: 100%;
        line-height: 0;
        

        &[category="noble gas"] {
            --gradient-from: #1DE9B6;
            --gradient-to: #00BFA5;
        }

        &[category~="nonmetal"] {
            --gradient-from: #2196F3;
            --gradient-to: #1976D2;
        }

        &[category="transition metal"] {
            --gradient-from: #00E5FF;
            --gradient-to: #00B8D4;
        }

        &[category="alkali metal"] {
            --gradient-from: #E91E63;
            --gradient-to: #C2185B;
        }

        &[category="alkaline earth metal"] {
            --gradient-from: #F4511E;
            --gradient-to: #D84315;
        }

        &[category="post-transition metal"] {
            --gradient-from: #9C27B0;
            --gradient-to: #7B1FA2;
        }

        &[category="metalloid"] {
            --gradient-from: #FFEB3B;
            --gradient-to: #FBC02D;
        }

        &[category="lanthanide"] {
            --gradient-from: #00E676;
            --gradient-to: #00C853;
        }

        &[category="actinide"] {
            --gradient-from: #76FF03;
            --gradient-to: #64DD17;
        }

        &[category~="unknown,"] {
            --gradient-from: white;
            --gradient-to: #eee;
        }

        svg {
            width: 100%;
            height: 100%;

            stroke: var(--gradient-from);
            fill: var(--gradient-from);

            font-family: inherit;
            font-weight: 700;
            font-size: 100%;

            margin: 0;

            text { fill: #333; }
        }
    }

</style>