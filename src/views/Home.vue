<template>
    <ion-page>
        <ion-header :translucent="true">
            <ion-toolbar>
                <ion-buttons slot="start">
                    <ion-menu-button color="primary"></ion-menu-button>
                </ion-buttons>
                <ion-title>{{ $route.meta.title }}</ion-title>
            </ion-toolbar>
        </ion-header>

        <ion-content :fullscreen="true">
            <ion-modal
                :is-open="true"
                :initial-breakpoint="0.05"
                :breakpoints="[0.05, 0.9]"
                :swipe-to-close="false"
            >
                <ion-content class="ion-padding">
                    <ion-list>
                        <ion-item lines="none">
                            <ion-label position="stacked">Ordem</ion-label>
                            <custom-select v-model="orderBy">
                                <ion-select-option value="price_asc">Preço menor para maior</ion-select-option>
                                <ion-select-option value="price_desc">Preço maior para menor</ion-select-option>
                            </custom-select>
                        </ion-item>

                        <ion-button expand="full">Filtrar</ion-button>

                        <ion-item-group>
                            <ion-item-divider>
                                <ion-label>Resultados</ion-label>
                            </ion-item-divider>
                        </ion-item-group>
                    </ion-list>
                </ion-content>
            </ion-modal>
        </ion-content>
    </ion-page>
</template>

<script>
    import {
        // optionsOutline,
    } from "ionicons/icons";
    import { addIcons } from "ionicons";
    addIcons({
        // "options-outline": optionsOutline,
    });

    //Componentes Ionic
    import {
        IonButtons,
        IonSelectOption,
        IonItem,
        IonLabel,
        IonList,
        IonContent,
        IonHeader,
        IonMenuButton,
        IonPage,
        IonTitle,
        IonToolbar,
        IonModal,
        IonButton,
        IonItemDivider,
        IonItemGroup
    } from "@ionic/vue";

    //Componentes personalizados
    import CustomSelect from "../components/CustomSelect";

    //Mixins
    import TitleMixin from "../mixins/TitleMixin";

    export default {
        name: 'Home',

        data() {
            return {
                orderBy: 'price_asc',
            }
        },

        mixins: [
            TitleMixin
        ],

        components: {
            IonPage,
            IonHeader,
            IonToolbar,
            IonButtons,
            IonMenuButton,
            IonTitle,
            IonContent,
            CustomSelect,
            IonLabel,
            IonSelectOption,
            IonItem,
            IonList,
            IonModal,
            IonButton,
            IonItemDivider,
            IonItemGroup,
        }
    }
</script>
