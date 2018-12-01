<template>
    <svg class="icon" viewBox="0 0 24 24">
        <path :d="iconDefinition" />
    </svg>
</template>

<script lang="ts">

   import { Vue, Component, Prop } from 'vue-property-decorator';
   import { Icons } from '../assets/icons';

   @Component
   export default class Icon extends Vue {
       
       @Prop({ required: true })
       public icon;

       public get iconDefinition(): string {
           return Icons[this.icon];
       }

   }

</script>

<style lang="scss">
   
    .icon {
        width: 1.5em;
        height: 1.5em;

        flex-shrink: 0;
        flex-grow: 0;

        fill: currentColor;
        pointer-events: none;
    }

</style>