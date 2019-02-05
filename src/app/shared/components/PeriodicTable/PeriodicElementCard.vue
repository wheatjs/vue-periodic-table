<template>
    <div :class="[$style.perioidcElementCard, $style[element.categoryName]]">
        <div :class="$style.details">
            <span :class="$style.symbol">{{element.symbol}}</span>
            <span :class="$style.name">{{element.name}}</span>
        </div>
        <div :class="$style.subdetails">
            <span :class="$style.atomicNumber">{{element.atomicNumber}}</span>
            <span :class="$style.atomicMass">{{element.atomicMass}}</span>
        </div>
    </div>
</template>

<script lang="ts">
    import { Vue, Component, Prop } from 'vue-property-decorator';

    @Component
    export default class PeriodicElementCard extends Vue {
        
        @Prop()
        public element: any;

    }
</script>

<style module lang="scss">
    
    .perioidcElementCard {
        display: grid;
        grid-template-rows: auto 20%;
        grid-template-areas: 
            "symbol",
            "details";
        background: var(--element-color);
        color: #111;
    }

    .details {
        display: grid;
        justify-content: center;
        text-align: center;
        
    }

    .subdetails {
        display: grid;
        grid-template-columns: 20% auto min-content;
        grid-template-areas: "atomicNumber _ atomicMass"
    }

    .symbol {
        font-size: calc(var(--font-scale) * 2);
        align-self: end;
    }

    .name {
        font-size: calc(var(--font-scale) / 1.5);
        align-self: start;
    }

    .atomicNumber {
        background: rgba(0, 0, 0, .12);
        font-size: calc(var(--font-scale) / 2);
        display: grid;
        place-items: center;
        font-weight: 600;
        grid-area: atomicNumber;
    }

    .atomicMass {
        font-size: calc(var(--font-scale) / 2);
        font-weight: 600;
        display: grid;
        place-items: center;
        grid-area: atomicMass;
        padding: 0 0.75em;
    }

    .alkalaiMetals { --element-color: var(--alkalai-metals); }
    .alkalineEarthMetals { --element-color: var(--alkaline-earth-metals); }
    .lanthanides { --element-color: var(--lanthanides); }
    .actinides { --element-color: var(--actinides); }
    .transitionMetals { --element-color: var(--transition-metals); }
    .unknownProperties { --element-color: var(--unknown-properties); }
    .postTransitionMetals { --element-color: var(--post-transition-metals); }
    .metalloids { --element-color: var(--metalloids); }
    .otherNonmetals { --element-color: var(--other-nonmetals); }
    .halogens { --element-color: var(--halogens); }
    .nobleGases { --element-color: var(--noble-gases); }

</style>
