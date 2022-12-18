<template>

        <ion-card color="black">
          <ion-card-header>
            <ion-card-title>Your Lofi Hip Hop Artist Name</ion-card-title>
          </ion-card-header>
          <ion-card-content>
            {{ artistName }}
          </ion-card-content>
        </ion-card>

        <ion-button color="light" @click="generateName()">Generate Name</ion-button>
        <br>
        <br>
        <p>It is important to note that we cannot guarantee that these names are unique. It is always a good idea to do your own research and make sure that the name you choose is not already in use by someone else.</p>

</template>

<script>
import { IonContent, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonButton } from "@ionic/vue";

export default {
  components: {
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
    IonButton
  },
  data() {
    return {
      artistName: "",
      names: [
        "Lo-Fi Lou",
        "Hazy Hip Hop",
        "Chill Beats",
        "Laid Back Rhymes",
        "Slow Jamz",
        "Smooth Sounds",
        "Lofi Love",
        "Nostalgia Nights",
        "Melodic Moods",
        "Vintage Vibes",
        "Midnight Melodies",
        "Nostalgic Notes",
        "Hazy Horizons",
        "Laidback Lullabies",
        "Vintage Visions",
        "Chilled-Out Chronicles",
        "Lofi Landscapes",
        "Dreamy Downtempo",
        "Moody Melodies",
        "Nostalgic Nights",
        "Midnight Melodies",
        "Retro Rhythms",
        "Jazzy Jams",
        "Soothing Soul",
        "Dreamy Days",
        "Laid-Back Lullabies",
        "Vintage Visions"
      ]
    };
  },
  methods: {
    generateName() {
      this.artistName = this.names[Math.floor(Math.random() * this.names.length)];
    }
  }
};
</script>

<style scoped>
ion-content {
  font-family: Office Code Pro !important;
  font-size: 1.2em;
}

ion-card {
  font-family: Office Code Pro !important;
  text-align: center;
  margin: 20px;
}

ion-card-title {
  font-size: 24px;
  font-weight: bold;
}

ion-button {
  margin: 20px;
}

p {
  padding-left: 300px;
  padding-right: 300px;
}

@media (max-width: 1350px) {
  p {
    padding-left: 150px;
    padding-right: 150px;
  }
}

@media (max-width: 960px) {
  p {
    padding-left: 50px;
    padding-right: 50px;
  }
}
</style>

