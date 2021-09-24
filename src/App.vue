<template>
    <IonApp>
        <IonSplitPane content-id="main-content">
            <ion-menu content-id="main-content" type="overlay" side="start" menu-id="left">
                <ion-content>
                    <ion-list>
                        <ion-list-header>Inbox</ion-list-header>
                        <ion-note>hi@ionicframework.com</ion-note>

                        <ion-menu-toggle auto-hide="false">
                            <ion-item lines="none" detail="false" class="hydrated" :class="{ selected: false }">
                                <ion-icon slot="start" name="bookmark-outline"></ion-icon>
                                <ion-label>Teste</ion-label>
                            </ion-item>
                        </ion-menu-toggle>
                    </ion-list>

                    <ion-list>
                        <ion-list-header>Labels</ion-list-header>

                        <ion-item lines="none">
                            <ion-icon slot="start" name="bookmark-outline"></ion-icon>
                            <ion-label>Teste</ion-label>
                        </ion-item>
                    </ion-list>
                </ion-content>
            </ion-menu>

            <ion-router-outlet id="main-content"></ion-router-outlet>
        </IonSplitPane>
    </IonApp>
</template>

<script>
    //Ícones
    import {
        bookmarkOutline
    } from "ionicons/icons";
    import { addIcons } from "ionicons";
    addIcons({
        "bookmark-outline": bookmarkOutline,
    });

    //Componentes Ionic
    import {
        IonApp,
        IonContent,
        IonList,
        IonListHeader,
        IonMenu,
        IonRouterOutlet,
        IonSplitPane,
        IonLabel,
        IonNote,
        IonMenuToggle,
        IonItem,
        IonIcon,
    } from "@ionic/vue";

    export default {
        name: 'App',

        components: {
            IonApp,
            IonSplitPane,
            IonMenu,
            IonContent,
            IonList,
            IonListHeader,
            IonNote,
            IonRouterOutlet,
            IonMenuToggle,
            IonItem,
            IonLabel,
            IonIcon
        }
    }
</script>

<style>
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
    }

    #nav {
        padding: 30px;
    }

    #nav a {
        font-weight: bold;
        color: #2c3e50;
    }

    #nav a.router-link-exact-active {
        color: #42b983;
    }
</style>
