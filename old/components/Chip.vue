<template>
    <div class="chip">
        <icon :icon="icon" />
        <span>{{value}}</span>
    </div>
</template>

<script lang="ts">

    import { Vue, Component, Prop } from 'vue-property-decorator';
    import Icon from './Icon.vue';

    @Component({
        components: { Icon }
    })
    export default class Chip extends Vue {
        
        @Prop()
        public icon: string;

        @Prop()
        public value: string;

    }

</script>

<style lang="scss">
    
    .chip {
        display: inline-flex;
        flex-direction: row;

        align-items: center;

        border-radius: 3rem;
        font-size: 0.75em;
        padding: 0.5rem 0.75rem;
        color: rgba(255, 255, 255, .72);
        background: rgba(0, 0, 0, .5);
        margin-right: 0.75em;
        margin-top: 0.75em;

        span {
            margin-left: 0.5rem;
            font-weight: 700;
            text-transform: capitalize;
        }
    }

</style>