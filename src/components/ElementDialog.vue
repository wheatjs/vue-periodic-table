<template>
    <div :class="{ open: elementSymbol }" class="element-dialog">
        <div @click="exit" class="element-dialog__shim"></div>
        <div class="element-dialog__modal">
            <template v-if="elementSymbol">

                <div>
                    <div class="dialog-modal__box dialog__element-deatils">
                        <element-card :element="element" />
                        <p>{{element.summary}}</p>
                    </div>

                    <div class="dialog-modal__box">
                        <item v-if="element.discovered_by">
                            <span>{{element.discovered_by}}</span>
                            <span slot="secondary">Discovered By</span>
                        </item>
                        <item v-if="element.named_by">
                            <span>{{element.named_by}}</span>
                            <span slot="secondary">Named By</span>
                        </item>
                        <item v-if="element.appearance">
                            <span>{{element.appearance}}</span>
                            <span slot="secondary">Appearance</span>
                        </item>
                    </div>
                </div>

                <div>
                    <div class="dialog-modal__box">
                        <element-visual :element="element" />
                    </div>

                    <div class="dialog-modal__box">
                        <item v-if="element.phase">
                            <span>{{element.phase}}</span>
                            <span slot="secondary">Phase</span>
                        </item>
                        <item v-if="element.melt">
                            <span>{{element.melt}}°C</span>
                            <span slot="secondary">Melting Point</span>
                        </item>
                        <item v-if="element.boil">
                            <span>{{element.boil}}°C</span>
                            <span slot="secondary">Boiling Point</span>
                        </item>
                        <item v-if="element.molar_heat">
                            <span>{{element.molar_heat}}J/(mol·K)</span>
                            <span slot="secondary">Molar Heat</span>
                        </item>
                        <item v-if="element.density">
                            <span>{{element.density}}g/cm3</span>
                            <span slot="secondary">Density</span>
                        </item>
                    </div>

                    <div class="dialog-modal__box">
                        <a target="_blank" :href="element.source" class="external-link">
                            <icon icon="link" />
                            <span>Wikipedia</span>
                        </a>
                        <a target="_blank" v-if="element.spectral_img" :href="element.spectral_img" class="external-link">
                            <icon icon="link" />
                            <span>Spectral Image</span>
                        </a>
                    </div>
                </div>
                
            </template>
        </div>
    </div>
</template>

<style lang="scss">
    
    .element-dialog {
        position: fixed;
        top: 0; left: 0; right: 0; bottom: 0;
        z-index: 5;
        overflow: auto;

        display: grid;
        align-items: center;
        justify-items: center;
        padding: 1rem;

        pointer-events: none;

        &.open {
            pointer-events: all;
        }

        &.open .element-dialog__shim {
            opacity: 1;
        }

        &.open .element-dialog__modal {
            opacity: 1;
            transform: scale(1);
        }
    }

        .element-dialog__shim {
            position: fixed;
            top: 0; left: 0; right: 0; bottom: 0;
            opacity: 0;
            background: rgba(0, 0, 0, .72);
        }

        .element-dialog__modal {
            display: grid;
            grid-template-columns: auto 50%;
            grid-template-rows: auto min-content;
            grid-gap: 1rem;
            max-width: 1000px;
            width: 100%;

            > div {
                display: grid;
                grid-auto-rows: min-content;
                grid-gap: 1rem;
            }

            .dialog-modal__box {
                background: var(--background);
                box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
                border-radius: 0.25rem;
                padding: 1rem;
            }

        }

            .dialog__element-deatils {
                display: grid;
                grid-template-rows: auto auto;
                grid-gap: 0.75rem;

                p {
                    margin: 0;
                }
            }

    .external-link {
        display: flex;
        flex-direction: row;
        align-items: center;
        color: white;
        text-decoration: none;
        padding: 0.5rem 0.75rem;
        border-radius: 1.5rem;

        &:hover {
            background: rgba(255, 255, 255, .12);
        }

        .icon {
            margin-right: 0.75rem;
        }
    }

</style>

<script lang="ts">
    import { Vue, Component } from 'vue-property-decorator';
    import { Elements } from '../table';

    import ElementVisual from './ElementVisual.vue';
    import ElementCard from './ElementCard.vue';
    import Icon from './Icon.vue';
    import Item from './Item.vue';

    @Component({
        components: { ElementVisual, ElementCard, Icon, Item }
    })
    export default class ElementDialog extends Vue {
        
        public mounted() {
            window.addEventListener('keypress', (e) => {
                if ((e.keyCode || e.which) === 27) {
                    this.exit();
                }
            })
        }

        public get element() {
            return Elements.find(value => value.symbol === this.elementSymbol);
        }

        public get elementSymbol() {
            if (this.$route.params.element)
                return this.$route.params.element;
            
            return null;
        }

        public exit() {
            this.$router.push('/');
        }

    }
</script>