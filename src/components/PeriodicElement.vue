<template>
    <div @click="selectElement" :category="element.category" :style="{ gridColumn: element.xpos, gridRow: element.ypos }" class="periodic-element">
        <div class="periodic-element__inner">
            <span class="element-symbol">{{element.symbol}}</span>
            <span class="element-name">{{element.name}}</span>
        </div>
    </div>
</template>

<script lang="ts">

    import { Vue, Component, Prop } from 'vue-property-decorator';

    @Component
    export default class PeriodicElement extends Vue {
        
        @Prop()
        public element;

        private selectElement() {
            this.$emit('select', this.element);
        }

    }

</script>

<style lang="scss">
    
    .periodic-element {
        --gradient-from: red;
        --gradient-to: green;

        cursor: pointer;

        padding: 0.214285714em;
        background: linear-gradient(to bottom right, var(--gradient-from) 0%, var(--gradient-to) 100%);
        position: relative;
        will-change: transform;

        transition: transform 0.2s linear;
        backface-visibility: hidden;

        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;

        &:hover {
            transform: scale(1.1) translateZ(0);
            box-shadow: 0 0 5em var(--gradient-to);
            z-index: 2;

            .periodic-element__inner {
                background: transparent;
                color: black;
            }
        }

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
    }
        .periodic-element__inner {
            display: flex;
            flex-direction: column;
            position: relative;

            height: 100%;
            width: 100%;

            background: var(--background);
            color: var(--gradient-from);

            
            display: flex;
            flex-direction: column;
            justify-content: flex-end;
            padding: 0.25em;

            @media (max-width: 900px) {
                text-align: center;
                justify-content: center;

                .element-name {
                    display: none;
                }
            }
        }

            .periodic-element__inner .element-symbol {
                font-size: 2em;
            }

            .periodic-element__inner .element-name {
                font-size: 0.5em;
            }

</style>