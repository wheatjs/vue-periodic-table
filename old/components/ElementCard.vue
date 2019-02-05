<template>
    <div :category="element.category" class="element-card">
        <div class="element-card__content">
            <div class="element-card__atomic-symbol">{{element.symbol}}</div>
            <div class="element-card__atomic-name">{{element.name}}</div>

            <div class="element-card__atomic-number">{{element.number}}</div>
            <div class="element-card__atomic-mass">{{element.atomic_mass}}</div>
        </div>
        
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
        position: relative;
        padding-bottom: 100%;

        &[category="noble gas"] { --element-background: #1DE9B6; }
        &[category~="nonmetal"] { --element-background: #2196F3; }
        &[category="transition metal"] { --element-background: #00E5FF; }
        &[category="alkali metal"] { --element-background: #E91E63; }
        &[category="alkaline earth metal"] { --element-background: #F4511E; }
        &[category="post-transition metal"] { --element-background: #9C27B0; }
        &[category="metalloid"] { --element-background: #FFEB3B; }
        &[category="lanthanide"] { --element-background: #00E676; }
        &[category="actinide"] { --element-background: #76FF03; }
        &[category~="unknown,"] { --element-background: white; }
    }

    .element-card__content {
        display: grid;
        grid-template-columns: 3em auto 3em;
        grid-template-rows: 1fr 1fr 1fr 3em;
        grid-template-areas: 
            ". . ."
            ". symbol ."
            ". name ."
            "number mass mass";

        position: absolute;
        top: 0; left: 0; right: 0; bottom: 0;
        background: var(--element-background);
        text-align: center;
        color: #222;
    }

    .element-card__atomic-number {
        grid-area: number;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        font-weight: 700;
        background: rgba(0, 0, 0, .12);
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