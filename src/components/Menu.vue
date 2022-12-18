<template>

  <ion-menu id="menu" type="overlay" side="start" menu-id="first" content-id="main">

    <span>
        <ion-button fill="clear" slot='start' style="--background-hover-opacity: 0%">
          <ion-menu-button color="dark" style="--background-hover-opacity: 0%;"></ion-menu-button>
        </ion-button>
    </span>

    <ion-content>
      <ion-list inset="true" lines="none" style="--ion-item-background: transparent;">
        <!-- Trying to get the @click to close the menu when a view is selected from the menu -->
        <router-link to="/about" @click="closeMenu()">
          <ion-item>About</ion-item>
        </router-link>
        <!-- <router-link to="/chords" @click="closeMenu()">
          <ion-item>Chords</ion-item>
        </router-link>
        <router-link to="/scales" @click="closeMenu()">
          <ion-item>Scales</ion-item>
        </router-link> -->
        <router-link to="/lofinamegenerator" @click="closeMenu()">
          <ion-item>Lofi Name Generator</ion-item>
        </router-link>
        <router-link to="/contact" @click="closeMenu()">
          <ion-item>Contact</ion-item>
        </router-link>
        
      </ion-list>
    </ion-content>
  </ion-menu>

<ion-router-outlet id="main"></ion-router-outlet>
</template>

<style scoped>
a { 
    text-decoration: none; 
  }

ion-item {
  font-family: Office Code Pro !important;
  font-size: 1.2em;
  padding-bottom: 20px;

}

span {

  padding-top: 30px;
}

#menu {
  --ion-background-color: transparent !important;
}

</style>

<script lang="ts">
import { 
  IonContent, 
  IonItem, 
  IonList, 
  IonMenu,
  IonMenuButton, 
  IonRouterOutlet,
  menuController
} from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  props: {},
  setup() {
    return {
    IonContent, 
    IonItem, 
    IonList, 
    IonMenu,
    IonMenuButton,
    IonRouterOutlet
    }
  },
  methods: {
    openFirst() {
      menuController.enable(true, 'first');
      menuController.open('first');
    },
    openEnd() {
      menuController.open('end');
    },
    openCustom() {
      menuController.enable(true, 'custom');
      menuController.open('custom');
    },
    closeMenu() {
      menuController.close();
    }
  }
});
</script>