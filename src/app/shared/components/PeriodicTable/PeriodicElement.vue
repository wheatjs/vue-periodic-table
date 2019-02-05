<template>
    <router-link 
        :to="`/${element.symbol}`" 
        :class="{[$style['periodicElement']]: true, [$style[element.categoryName]]: true, [$style.selected]: selected}">
        <div :class="$style.periodicElementContent">
            <span :class="$style.symbol">{{element.symbol}}</span>
            <span :class="$style.name">{{element.name}}</span>
        </div>
    </router-link>
</template>

<script lang="ts">
    import { Vue, Component, Prop } from 'vue-property-decorator';

    @Component
    export default class PeriodicElement extends Vue {
        
        @Prop()
        public element: any;

        @Prop()
        public selected: boolean;

    }
</script>

<style module lang="scss">
    
    .periodicElement {
        display: grid;
        background: var(--element-color);
        color: var(--element-color);
        border: none;
        padding: 0;
        border: calc(var(--grid-gap) / 2) solid var(--element-color);
        outline: none;

        position: relative;
        text-decoration: none;

        cursor: pointer;
        contain: strict;

        &.selected,
        &:hover {
            color: black;
        }

        &.selected .periodicElementContent:before { opacity: 0; }
        &:hover .periodicElementContent:before { opacity: 0; }


        @media (orientation: portrait) {
            width: 100%;
            height: 5rem;
            height: 0;
            padding-bottom: 100%;
            border: 0.35em solid var(--element-color);
        }
    }

        .periodicElementContent {
            width: 100%;
            height: 100%;
            top: 0; left: 0;
            position: absolute;
            z-index: 1;

            display: grid;

            contain: content;

            &:before {
                position: absolute;
                content: '';
                top: 0; left: 0;
                right: 0; bottom: 0;
                height: 100%;
                background: var(--background);
                will-change: opacity;
                z-index: -1;
            }

            text-align: center;
        }

    .symbol {
        font-size: 1em;
        align-self: end;
        font-weight: 600;

        @media (max-width: 1200px) {
            align-self: center;
        }

        @media (orientation: portrait) {
            font-size: 3em;
            align-self: end;
        }
    }

    .name {
        font-size: 0.28em;
        align-self: start;
        font-weight: 600;

        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;

        @media (max-width: 1200px) {
            display: none;
        }

        @media (orientation: portrait) {
            font-size: 1em;
            display: block;
        }
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
