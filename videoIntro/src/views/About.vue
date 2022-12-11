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
      
      <ion-grid>
        <ion-row>
          <ion-col size="12" size-sm>
            <br>
            <br>
            <h2>Tools for creating music</h2>
            <br>
            <br>
            <!-- <br>
            <ion-label><p>Download Unlimit Scales</p></ion-label>
            <ion-button fill="clear" color="dark" target="_blank" rel="noopener noreferrer" href="">
            <ion-icon :icon="download" size="large" label="Download Test Flight App"></ion-icon>
            </ion-button> -->
            <br>
            <ion-label><p>Download Unlimit Chords iOS BETA</p></ion-label>
            <br>
            <div>
              <a target="_blank" rel="noopener noreferrer" href="https://testflight.apple.com/join/uIanyIEK">
                <img src="../assets/testflight.png" id="appstorebutton">
              </a>
            </div>
          </ion-col>
          <ion-col size="12" size-sm>
            <div>
              <img src="../assets/iosmockup.png">
            </div>
          </ion-col>
        </ion-row>
      </ion-grid>

      </div>

    </ion-content>

  </ion-page>
</template>

<script lang="ts">
import { IonContent, IonHeader, IonPage, IonToolbar, IonButton, IonLabel } from '@ionic/vue';
import { defineComponent } from 'vue';
import { download } from 'ionicons/icons';

export default defineComponent({
  name: 'Home',
  components: {
    IonContent,
    IonHeader,
    IonPage,
    IonToolbar,
    IonButton,
    IonLabel
  },
  setup () {
    return {
      download
    }
  }
});
</script>

<style>
ion-content {
  font-family: Office Code Pro !important;
  font-size: 1.2em;
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
  left: 75px;
  right: 75px;
  top: 50%;
  transform: translateY(-50%);
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
/*  min-width: 4vw;*/
/*  width:50%;*/
  padding-top: 10px;
  height:100px;
}

#appstorebutton {
  padding-top:0px;
  max-width:100%;
  max-height:100%;
}

</style>
