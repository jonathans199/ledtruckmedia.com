<template>
<div>
  <section class="home__top">
    <div class="video__overlay"></div>
    <div class="video__container">
      <video-bg :sources="['/video.mp4']" class="d-none d-md-block d-xs-none"></video-bg>
    </div>
    <b-container class="header col-12">
      <b-row>
          <b-col class="header__menu-left text-center">
            <a href="mailto:info@ledtruckmedia.com">info@ledtruckmedia.com</a>
          </b-col>
          <b-col class="header__logo-box text-center">
            <a href="/home">
              <img class="header__logo " src="../assets/img/ltm_dark.png" alt="">
            </a>
          </b-col>
          <b-col class="header__menu-right text-center">
            <a href="tel:917-224-3336">917-224-3336</a>&nbsp;
            <a class="fab fa-facebook-square" href="http://www.facebook.com" target="_blank"></a>&nbsp;
            <a class="fab fa-instagram" href="http://www.twitter.com" target="_blank"></a>&nbsp;
            <a class="fab fa-twitter-square" href="http://www.instragram.com" target="_blank"></a>
          </b-col>
      </b-row>
    </b-container>

    <b-container class="boxes-3 col-12">
      <b-row>
        <b-col class="3-boxes__left text-center">
          <img class="boxes-3__truck-side" src="../assets/img/side-truck-add.png" alt="">
          <h3>SIDE PANEL</h3>
          <strong> 120" Diagonal HD </strong>
          <p>30 sec spot / 15 sec spot</p>
          <p>Animation, Video or Still Image </p>
          <b-button variant="outline-success" href="#"> Buy Ad now</b-button>
        </b-col>
        <b-col class="3-boxes__middle text-center">
          <img class="boxes-3__truck-back" src="../assets/img/back-truck-add.png" alt="">
          <h3>BACK PANEL</h3>
          <strong>720" Square HD </strong>
          <p>30 sec spot / 15 sec spot </p>
          <p>Animation or Still Image </p>
          <b-button variant="outline-success" href="#"> Contact us</b-button>
        </b-col>
        <b-col class="3-boxes__right text-center">
          <img class="boxes-3__truck-full" src="../assets/img/frontside-truck-add.png" alt="">
          <h3>FULL TRUCK</h3>
          <strong>6 hour shift custom route </strong>
          <p>Video, Live Stream, </p>
          <p>Private Events </p>
          <b-button variant="outline-success" href="#"> Start Today</b-button>
        </b-col>
      </b-row>
    </b-container>

  </section>

  <section class="statistics">
    <b-container col-12>
      <b-row>
        <b-col>
          <h3 class="my-4git  statistics__title">THE STATISTICS SPEAK FOR THEMSELVES</h3>
        </b-col>
      </b-row>
      <b-row class="text-center">
        <b-col>
          <img src="../assets/img/statistics_1 copy.png" alt="" style="width:100%;height:auto;">
        </b-col>
        <b-col>
          <img src="../assets/img/statistics_2 copy.png" alt="" style="width:100%;height:auto;">
        </b-col>
      </b-row>
    </b-container>
  </section>

  <section class="divider-1">
  </section>

  <section class="contact">
    <b-container col-12 class="text-center">
      <b-row>
        <b-col>
          <img class="footer__logo" src="../assets/img/ltm_dark.png" alt="">
        <h3 class="my-5 contact__title">GET IN TOUCH</h3>
        </b-col>
      </b-row>

      <div class="contact__form">
        <b-form @submit="onSubmit" @reset="onReset" v-if="show">
          <b-form-group id="exampleInputGroup1"
                        description="We'll never share your email with anyone else.">
            <b-form-input id="exampleInput1"
                          type="email"
                          v-model="form.email"
                          required
                          placeholder="EMAIL">
            </b-form-input>
          </b-form-group>
          <b-form-group id="exampleInputGroup2"
            <b-form-input id="exampleInput2"
                          type="text"
                          v-model="form.name"
                          required
                          placeholder="NAME">
            </b-form-input>
          </b-form-group>
          <b-form-group id="exampleInputGroup3"
                        label="Message"
                        label-for="exampleInput3"
                        placeholder="MESSAGE">
            <b-form-textarea id="exampleInput3"
                          required
                          v-model="form.message">
            </b-form-textarea>
          </b-form-group>
          <b-form-group id="exampleGroup4">
            <b-form-checkbox-group v-model="form.checked" id="exampleChecks">
              <b-form-checkbox value="me">Contact me via Email</b-form-checkbox>
              <b-form-checkbox value="that">Contact me via Phone</b-form-checkbox>
            </b-form-checkbox-group>
          </b-form-group>
          <b-button type="submit" variant="outline-success">Submit</b-button>
          <b-button type="reset" variant="outline-success">Reset</b-button>
        </b-form>
      </div>
    </b-container>
  </section>

  <section class="footer">
    <b-container>
      <b-row class="text-center">
        <b-col class="md-6 my-5">
          <strong>Start a Project</strong></br>
          <a href="mailto:info@ledtruckmedia.com">info@ledtruckmedia.com</a>
        </b-col>
        <b-col class="md-6 my-5">
          <strong>Say hello</strong>
          <p>400 NW 26 ST, Miami, Fl 33127</p>
        </b-col>
        <b-col class="md-6 my-5">
          <strong>Get in touch</strong>
            <p>917.224.3336</p> 
        </b-col>
      </b-row>
    </b-container>

  </section>

  <section class="footer__last">
    <b-container col-12 class="text-center">
      <b-row>
        <b-col>
          <img src="../assets/img/asoftio_logo_final_dark.png" alt="">
        </b-col>
      </b-row>
    </b-container>

  </section>

</div>
</template>

<script>
import VideoBg from 'vue-videobg'
import axios from 'axios'
import Toasted from 'vue-toasted'
import Vue from 'vue';
Vue.use(Toasted)

export default {
  name: "home",
  components: {  
    "video-bg": VideoBg
  },

  data () {
    return {
      form: {
        email: '',
        name: '',
        message: null,
        checked: []
      },
      show: true,
      api: 'https://api.ledtruckmedia.com/'
    }
  },

  methods: {
    onSubmit (evt) {
      evt.preventDefault();
      axios.post(this.api, this.form)
      .then(response => {
        this.$toasted.show(response.data.m, { 
          position:'top-right', 
          duration: 5000,
          type: 'success'
        })
        this.onReset(evt)
      })
      .catch(function (error) {
        console.log(error);
      })
    },

    onReset (evt) {
      evt.preventDefault();
      /* Reset our form values */
      this.form.email = '';
      this.form.name = '';
      this.form.message = null;
      this.form.checked = [];
      /* Trick to reset/clear native browser form validation state */
      this.show = false;
      this.$nextTick(() => { this.show = true });
    }
  } 
}

</script>

<style scoped>

.video__container {
  
}

.home__top {
  height: 100vh;
}


.VideoBg {
  position: relative !important;
  top: 0 ;
  right: 0;
  bottom: 0;
  left: 0;
  object-fit: cover !important; 
  height: 100vh !important;
  width: 100%;
  z-index: -1; 
  
}

.video__overlay {
  opacity: 1;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,.7);
  z-index: 2;
}

.header {
  position: absolute;
  top: 1rem;
  z-index: 3;
  /* text-align: center; */
}

.header__logo-box {
  display: flex;
  justify-content: center;
  margin: auto 0;
}

.header__logo {
  height: 6rem;
}

.header__menu-left {
  
}

.header__menu-right {

}

.boxes-3 {
  z-index: 4;
  position: absolute;
  bottom: 3rem;
  color: #eee;
}

.btn {
  border-color: white;
  border-radius: 1px;
}

.boxes-3__truck-side {

}

.boxes-3__truck-back {

}

.boxes-3__truck-full {
  
}

/* Statistics section  */



.statistics {
  height: responsive;
  background-color: #232323;
  color: #eee;
}

.divider-1 {
  padding-bottom: 20px;
  height: 35rem;
  background-image: url("https://i.ytimg.com/vi/EDlBV8gZS4U/maxresdefault.jpg");
  color: #eee;
}

.contact {
  height: 42rem;
  background-color: #232323;
  color: #eee;
}

.contact__form {
  width: 30%;
  margin: 0 auto;
}

.form-control {
  border-radius: 1px;
}

.footer {
  height: 15rem;
  background-color: #5C5C5C;
  color: #eee;
}

.footer__logo {
  height: 6rem;
  margin-top: 4rem;
}

.footer__last {
  background-color: #232323;
}

h1, h2, h3 {
  text-align: center;
}

h3 {
  margin: 0 0 0;
}

h2 {

}

ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #eee;
}

</style>