<template>
    <div class="element-view">
        <div class="about-element" v-if="element">
            <element-card :element="element" />
            <div>
                <h1>{{element.name}}</h1>
                {{element.summary}}

                <div>
                    <element-visual :element="element" />
                </div>
                
            </div>
        </div>
        <div v-else>
            Oh no, that element doesn't exist!
        </div>
    </div>
</template>

<script lang="ts">

    import { Vue, Component } from 'vue-property-decorator';
    import { Elements, IElement } from '../table';

    import ElementCard from '../components/ElementCard.vue';
    import ElementVisual from '../components/ElementVisual.vue';

    @Component({
        components: { ElementCard, ElementVisual }
    })
    export default class Element extends Vue {

        private element: IElement | undefined | null = null;

        mounted() {
            this.element = Elements.find(value => value.symbol === this.$route.params.element);
        }

    }

</script>

<style lang="scss">
    
    .element-view {
        max-width: var(--container-width);
        margin: 0 auto;
        padding: 0.75rem 0;

        h1 {
            margin: 0;
            line-height: 1em;
            font-size: 3em;
        }
    }

        .about-element {
            display: grid;
            grid-gap: 1.25em;
            grid-template-columns: 300px auto;
            grid-template-rows: 300px auto;

            grid-template-areas: 
                "element content"
                ;

            .element-card {
                grid-area: element;
            }
        }
        

</style>