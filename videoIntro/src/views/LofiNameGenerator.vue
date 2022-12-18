<template>
  <ion-page>

    <ion-header>
      <ion-toolbar style="--background: transparent">

<!--   This button has to be on all views, can it be in a component? -->
        <ion-button fill="clear" slot='start' style="--background-hover-opacity: 0%">
          <ion-menu-button color="dark" style="--background-hover-opacity: 0%"></ion-menu-button>
        </ion-button>
        <div>
          <img src="../assets/unlimitlogotransparent.png" id="toolbarlogo">
        </div>
      </ion-toolbar>
    </ion-header>
    
    <ion-content :fullscreen="true">

      <video id="videobg" autoplay loop muted webkit-playsinline>
          <source src="../assets/bg.mp4" types='video/mp4; codecs="h.264"'>
          <!-- <source src="../assets/bg.webm" types="video/webm"> -->
      </video>

        <div class="container" id="container">
          <LofiNameGeneratorComponent />
        </div>

        

    </ion-content>

  </ion-page>
</template>

<script lang="ts">

import { IonContent, IonHeader, IonPage, IonToolbar, IonButton } from '@ionic/vue';
import { defineComponent } from 'vue';
import LofiNameGeneratorComponent from "../components/LofiNameGeneratorComponent.vue";

export default defineComponent({
  name: 'LofiNameGenerator',
  components: {
    IonContent,
    IonHeader,
    IonPage,
    IonToolbar,
    IonButton,
    LofiNameGeneratorComponent
  }
});
</script>

<style>
ion-content {
  font-family: Office Code Pro !important;
  font-size: 1.2em;
}

#iosmockup {
  min-width: 400px;
  width: 800px;
}

#videobg {
      position: fixed;
/*      filter: blur(2px);*/
      filter: brightness(50%);
      padding-top: 100px;
      top: 50%;
      left: 50%;
/*      min-width: 150vw;*/
      width:115%;
      height:100%;
      z-index: -100;
        -webkit-transform: translateX(-50%) translateY(-50%);
        -moz-transform: translateX(-50%) translateY(-50%);
        -ms-transform: translateX(-50%) translateY(-50%);
        -o-transform: translateX(-50%) translateY(-50%);
        transform: translateX(-50%) translateY(-50%);
      background: url('../assets/bg.mp4') no-repeat;
      -webkit-background-size: cover;
      -moz-background-size: cover;
      -o-background-size: cover;
      background-size: cover;
      object-fit: fill;
}

#container {
  text-align: center;
  
  position: absolute;
  left: 50px;
  right: 50px;
  top: 55%;
  transform: translateY(-50%);

}

#textcontainer {
  padding-top: 55px;
  margin:auto;
}

#imagecontainer {
  padding-left: 100px;
  padding-right: 100px;
  padding-top: 105px;
}

@media (min-width: 750px) {
  #container {
    text-align: center;
  
  position: absolute;
  left: 150px;
  right: 150px;
  top: 55%;
  transform: translateY(-50%);
  }
}

@media (max-width: 1150px) {
  #textcontainer {
    padding-top: 105px;
  }
}

@media (max-width: 1350px) {
  #imagecontainer {
  display: none;
  padding-left: 100px;
  padding-right: 100px;
  padding-top: 105px;
  }
}

#container strong {
  font-size: 20px;
  line-height: 26px;
}

#container p {
  font-size: 16px;
  line-height: 22px;
  color: #fff;
  
  margin: 0;
}

#container a {
  text-decoration: none;
}

#container h2 {
  font-style: bold;
  font-size: 30px;
}

#toolbarlogo {
  position: static;
  padding-top: 10px;
  padding-bottom: 10px;
}

#appstorebutton {
  padding-top:0px;
  max-width:100%;
  max-height:100%;
}

</style>
