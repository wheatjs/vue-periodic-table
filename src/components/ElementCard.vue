<template>
    <div :category="element.category" class="element-card">
        <div class="element-card__atomic-symbol">{{element.symbol}}</div>
        <div class="element-card__atomic-name">{{element.name}}</div>

        <div class="element-card__atomic-number">{{element.number}}</div>
        <div class="element-card__atomic-mass">{{element.atomic_mass}}</div>
    </div>
</template>

<script lang="ts">

    import { Vue, Component, Prop } from 'vue-property-decorator';

    @Component
    export default class ElementCard extends Vue {
        
        @Prop()
        public element;

    }

</script>

<style lang="scss">
    
    .element-card {
        display: grid;
        grid-template-columns: 3em auto 3em;
        grid-template-rows: 1fr 1fr 1fr 3em;
        grid-template-areas: 
            ". . ."
            ". symbol ."
            ". name ."
            "number mass mass";

        background: var(--gradient-from);
        text-align: center;
        color: #222;

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

    .element-card__atomic-number {
        grid-area: number;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        font-weight: 700;
        background: var(--gradient-to);
    }

    .element-card__atomic-symbol {
        grid-area: symbol;
        font-size: 3em;
    }

    .element-card__atomic-name {
        grid-area: name;
    }

    .element-card__atomic-mass {
        grid-area: mass;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: flex-end;
        padding-right: 0.75em;
    }

</style>