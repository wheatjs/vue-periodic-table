<template>
    <div @click="selectElement" class="element" :category="element.category" :style="{ gridColumn: element.xpos + 1, gridRow: element.ypos + 1 }">
        <div class="element__background"></div>
        <div class="element__box">
            <span class="element-symbol">{{element.symbol}}</span>
            <span class="element-name">{{element.name}}</span>
        </div>
    </div>
</template>

<style lang="scss">
    
    .element {
        position: relative;
        cursor: pointer;

        will-change: transform;
        transition: transform 0.15s cubic-bezier(0.4, 0.0, 0.2, 1);

        &:hover {
            transform: scale(1.05);

            .element__background { opacity: 1; }
            .element__box { color: black; }
        }

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

        .element__background {
            background: var(--element-background);
            position: absolute;
            top: 0; left: 0; right: 0; bottom: 0;
            opacity: 0;
            will-change: opacity;
        }

        .element__box {
            width: 100%;
            height: 100%;

            display: grid;
            grid-template-rows: auto min-content;
            position: relative;
            padding: 0.25rem;

            border: 3px solid var(--element-background);
            color: var(--element-background);
        }

            .element-symbol { font-size: 1.75rem; align-self: end; }
            .element-name { font-size: 0.5rem; }
</style>

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