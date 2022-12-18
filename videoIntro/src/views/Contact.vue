<template>
  <ion-page>

    <ion-header>
      <ion-toolbar style="--background: transparent">

<!--         This button has to be on all views, can it be in a component? -->
        <ion-button fill="clear" background="transparent" slot='start'>
          <ion-menu-button color="dark"></ion-menu-button>
        </ion-button>

        <div>
          <img src="../assets/unlimitlogotransparent.png" id="toolbarlogo">
        </div>
        
      </ion-toolbar>
    </ion-header>
    
    <ion-content :fullscreen="true">

      <video id="videobg2" autoplay loop muted webkit-playsinline>
          <source src="../assets/bg.mp4" types='video/mp4; codecs="h.264"'>
          <!-- <source src="../assets/bg.webm" types="video/webm"> -->
      </video>
    
      <div id="formcontainer">
        <h2>Get in touch!</h2>
        <p>If you have any questions regarding Unlimit, you can send us an email at <a href="mailto:greg@unlimit.com">greg@unlimit.co.uk</a>.</p> 
        <br>
        <!-- <br>
        <p>If you prefer, you can also send a DM to <a href="https://twitter.com/unlimitltd" target="_blank">@unlimitltd</a>.</p>
        <br> -->
        <br>
        <form action="https://formsubmit.co/feb45c732c4a51d92e1d721ecaf0c184" method="POST">
            <ion-item color="light" style="opacity:50%;">
              <ion-label>Name: </ion-label> 
              <ion-input name="name" type="text" color="dark" placeholder="Enter your name..." v-model="state.name"></ion-input>
            </ion-item>
            
            <ion-item color="light" style="opacity:50%;">
              <ion-label>Email: </ion-label>
              <ion-input name="email" color="dark" placeholder="Enter your email..." v-model="state.email"></ion-input>
              <span v-if="v$.email.$error">{{ v$.email.$errors[0].$message }}</span>    
            </ion-item>

            <ion-item color="light" style="opacity:50%;">
              <ion-textarea name="message" color="dark" placeholder="Write your message here..." v-model="state.message"></ion-textarea>
            </ion-item>
        
        <ion-button @click="submitForm" type="submit" expand="block" size="large" color="light" style="opacity:50%;">Submit</ion-button>
        <input type="hidden" name="_subject" value="Unlimit website user feedback">
        <input type="hidden" name="_next" value="https://unlimit.co.uk">
        <input type="hidden" name="_captcha" value="false">
        </form>
      </div>

    </ion-content>

  </ion-page>
</template>

<script lang="ts">
import { IonContent, IonHeader, IonPage, IonToolbar, IonLabel, IonInput, IonTextarea, IonItem } from '@ionic/vue';
import { defineComponent, reactive, computed } from 'vue';
import useValidate from '@vuelidate/core';
import { required, email, minLength } from '@vuelidate/validators';

export default defineComponent({
  name: 'Contact',
  components: {
    IonContent,
    IonHeader,
    IonPage,
    IonToolbar,
    IonLabel,
    IonInput,
    IonTextarea,
    IonItem
  },
  setup() {
    const state = reactive({
      name: '',
      email: '',
      message: '',
    })
    const rules = computed(() => {
      return {
        name: { required, minLength: minLength(2) },
        email: { required, email },
      }
    })

    const v$ = useValidate(rules, state)

    // const result = ref(null)

    // axios.get('../views/Contact.vue')
    //   .then(data => result.value = data);

    return {
      state,
      v$,
      // result
    }
  },
  methods: {
    submitForm() {
      console.log('Form Values', this.state)

      this.v$.$validate()
      if (!this.v$.$error) {
        alert('Form sucessfully submitted. I will get back to you shortly.')
      }
      else {
        alert('Error! Please fill in all the required fields and click submit again.')
      }    
    }
  }
  
});
</script>

<style>
ion-content {
  font-family: Office Code Pro !important;
  font-size: 1.2em;
}

#videobg2 {
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

#formcontainer {
  text-align: center;
  position: absolute;
  left: 75px;
  right: 75px;
  top: 50%;
  transform: translateY(-50%);
}

#formcontainer strong {
  font-size: 20px;
  line-height: 26px;
}

#formcontainer p {
  font-size: 16px !important;
  line-height: 22px;
  color: #fff !important;
  margin: 0;
}

#formcontainer a {
  text-decoration: underline !important;
  color: white;
}

#formcontainer h2 {
  font-style: bold;
  font-size: 40px;
}

#toolbarlogo {
  position: static;
/*  min-width: 4vw;*/
/*  width:50%;*/
  padding-top: 10px;
  height:100px;
  
}
</style>