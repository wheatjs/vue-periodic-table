<template>
    <component :is="tag" :to="to" @click="onClick" class="item" :class="{ hasSecondary: $slots.secondary, hasIcon: $slots.hasIcon}">
        <div v-if="$slots.icon" class="item__icon">
            <slot name="icon"></slot>
        </div>
        <div class="item__body">
            <div class="item__primary"><slot></slot></div>
            <div v-if="$slots.secondary" class="item__secondary"><slot name="secondary"></slot></div>
        </div>
    </component>
</template>

<script lang="ts">

    import { Vue, Component, Prop } from 'vue-property-decorator';

    @Component
    export default class Item extends Vue {
        
        @Prop()
        public to: string;

        private get tag(): string {
            return this.to ? 'router-link' : 'div';
        }

        private onClick(e) {
            this.$emit('click', e);
        }

    }

</script>

<style lang="scss">
    
    .item {
        display: flex;
        flex-direction: row;
        align-items: center;

        min-height: 4em;
        padding: 1em;
        white-space: nowrap;

        &.interactive {            
            cursor: pointer;

            &:hover {
                background: var(--background-highlight);
            }
        }

        &.medium {
            min-height: unset;
            padding: 0.25em 1em;

            .item__icon {
                --avatar-size: 2.25rem;
            }
        }

        &.small {
            min-height: unset;
            padding: 0.5em 1em;
            font-size: 0.75em;
        }
    }

        .item.medium-icon .item__icon {
            width: 3.5em;
            height: 3.5em;

            --avatar-size: 3.5rem;
        }

        .item__icon {
            width: 3em;
            height: 3em;
            --avatar-size: 3rem;

            flex-shrink: 0;
            
            margin-right: 1em;

            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
        }

        .item__body {
            display: flex;
            flex-direction: column;
            flex: 1;

            justify-content: center;
            height: 100%;
        }

            .item__primary {
                font-size: 1em;
                color: var(--foreground);
                line-height: 1.25em;

                a {
                    color: var(--foreground);
                }
            }

            .item__secondary {
                font-size: 0.75em;
                color: var(--foreground-secondary);
            }

</style>
