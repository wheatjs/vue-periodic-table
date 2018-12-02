<template>
    <div class="element-details">
        <element-card style="--aspect-ratio: 1/1;" :element="element" />

        <div class="element-details__content">
            <div class="details">
                <span class="deatils-header">About {{element.name}}</span>
                <p class="details-content">{{element.summary}}</p>
            </div>

            <chip v-if="element.discovered_by" icon="user" :value="element.discovered_by" />
            <chip v-if="element.category" icon="category" :value="element.category" />
            <chip v-if="element.boil" icon="boil" :value="`${element.boil}°C`" />
            
            <!-- <div class="details-footer">
                <span class="flex"></span>
                <router-link class="learn-more" :to="`/element/${element.symbol}`">Learn More</router-link>
            </div> -->
            
        </div>
        
    </div>
</template>

<script lang="ts">

    import { Vue, Component, Prop } from 'vue-property-decorator';
    import ElementCard from './ElementCard.vue';
    import Chip from './Chip.vue';

    @Component({
        components: { ElementCard, Chip }
    })
    export default class ElementDetilas extends Vue {
        
        @Prop()
        public element: any;

    }

</script>

<style lang="scss">
    
    .element-details {
        // overflow: auto;

        display: grid;
        grid-gap: 0.5em;
        grid-template-columns: var(--grid-column-size) var(--grid-column-size) var(--grid-column-size) 1fr;
        grid-template-rows: var(--grid-column-size) var(--grid-column-size) var(--grid-column-size) 1fr;

        grid-template-areas: 
            "card card card text"
            "card card card text"
            "card card card text";

        padding-bottom: 0.5em;
        position: relative;

        .element-symbol {
            font-size: 3em;
            color: white;
        }

        .element-card {
            grid-area: card;
        }

        .element-details__content {
            grid-area: text;
            overflow: auto;
        }

        .deatils-header {
            color: white !important;
            font-weight: 700;
        }

        .details {
            margin-top: 0.75em;

            &:first-child {
                margin-top: 0;
            }

            span {
                color: rgba(255, 255, 255, .72);
            }
        }

        .details-footer {
            display: flex;
            flex-direction: row;
            padding: 0.75em 0;
        }

        .flex {
            flex: 1;
        }

        .learn-more {
            text-decoration: none;
            text-transform: uppercase;
            color: #333;
            display: block;
            padding: 1em 0.75em;
            text-align: center;
            background: white;
            font-family: inherit;
            font-weight: 500;
            
            border-radius: 3px;
            line-height: 1em;
            width: 100%;
        }

        p {
        
            color: rgba(255, 255, 255, .72);
            grid-area: text;
            margin: 0;
        }
    }

</style>