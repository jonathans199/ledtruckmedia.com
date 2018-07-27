<template>
<div>
  <section class="home__top">
    <div class="video__overlay"></div>
    <div class="video__container">
      <video-bg :sources="['/video.mp4']" class="d-none d-md-block d-xs-none"></video-bg>
      <video-bg :sources="['/responsive.mp4']" class="d-block d-sm-none" ></video-bg>
    </div>
    <div class="header">
      <div class="header__menu-left"> 
        <a href="mailto:sales@ledtruckmedia.com">sales@ledtruckmedia.com</a>
      </div>
      <div class="header__logo-box">
        <a href="/home">
          <img class="header__logo " src="../assets/img/LEDTRCUKMEDIA-LOGO.png" alt="">
        </a>
      </div>
      <div class="header__menu-right text-center">
        <a href="tel:917-224-3633">917-224-3633</a>&nbsp;
        <a class="fab fa-facebook-square" href="https://www.facebook.com/LED-Truck-Media-1575325705912466/" target="_blank"></a>&nbsp;
        <a class="fab fa-instagram" href="https://www.instagram.com/ledtruckmedia/" target="_blank"></a>&nbsp;
        <a class="fab fa-youtube" href="https://www.youtube.com/channel/UCqviwhdR9IIxiOHTpalhhLw" target="_blank"></a>
      </div>
    </div>


    <div class="header-mobile">
      <div class="row text-center">
        <div class="col-12">
          <a href="/home">
            <img class="header__logo " src="../assets/img/LEDTRCUKMEDIA-LOGO.png" alt="">
          </a>
        </div>
        <div class="col-12">
          <a href="tel:917-224-3633">917-224-3633</a>&nbsp;
          <a class="fab fa-facebook-square" href="https://www.facebook.com/LED-Truck-Media-1575325705912466/" target="_blank"></a>&nbsp;
          <a class="fab fa-instagram" href="https://www.instagram.com/ledtruckmedia/" target="_blank"></a>&nbsp;
          <a class="fab fa-youtube" href="https://www.youtube.com/channel/UCqviwhdR9IIxiOHTpalhhLw" target="_blank"></a>
        </div>
      </div>
    </div>

    <b-container class="boxes-3 col-12 col-sm-12">
      <b-row>

        <b-col class="text-center">
          <h1 class="main-header">YOUR ADS ON OUR TRUCKS</h1>
          <button class="home__button" v-on:click="goToScroll(10)" >Request a Quote!</button>
        </b-col>
       
      </b-row>
      <b-row>
        <b-col class="text-center">
        <div class="subtext">
          New York City - Buffalo - D.C. -  Richmond - Boston - Chicago - Philadelphia - Cleveland - Los Angeles - San Diego - Phoenix - Houston - Dallas - Denver - Orlando - Tampa - Jacksonville - Miami - Atlanta - Raleigh - Las Vegas, Seatle, Ohio, &amp; more...
        </div>
      </b-col>

      </b-row>
    </b-container>

  </section>

  <section class="trucks__section">
    <div class="container-fluid">
      <div class="trucks___section--fulltruck text-center">
        <h2 class="fulltruck">FULL TRUCK EXCLUSIVE</h2>
        <div class="col-12 d-flex justify-content-center">
          <p style="width:600px">Our full truck exclusive gives you the advantage to design your full campaign. Choose the ads you want to be placed on the sides and back of our LED billboard, and customize your route to reach your desired target demographics.</p>
        </div>
        <img class="boxes-3__truck-full" src="../assets/img/frontside-truck-add.png" alt="">
        <p><strong>6 Hour shift custom route</strong>
        Video, Live Stream, <br> Private Events</p>
      </div>
      <div class="trucks__section--otheroptions text-center">
        <h2 class="fulltruck ">SHARED CAMPAIGN</h2>
        <div class="col-12 d-flex justify-content-center">
          <p style="width:600px">Our shared campaigns give you the flexibility to share our Miami route with another 5-15 rotating ads, over the course of 6 hours.</p>
        </div>
        <b-row class="text-center" style="margin-top:80px">
          <div class="col-12 col-sm-5 col-md-5 col-lg-5">
            <div class="sidepanel">
              <img class="boxes-3__truck-side" src="../assets/img/side-truck-add.png" alt="">
              <h3>SIDE PANEL</h3>
                <strong> 120" Diagonal HD </strong>
                <p>30 sec spot / 15 sec spot<br>Animation, Video or Still Image </p>
            </div>
          </div>
          <div class="col-12 col-sm-2 col-md-2 col-lg-2 d-flex align-items-center justify-content-center">
            <h1>OR</h1>
          </div>
          <div class="col-12 col-sm-5 col-md-5 col-lg-5">
            <div class="sidepanel">
              <img class="boxes-3__truck-back" src="../assets/img/back-truck-add.png" alt="">
              <h3>BACK PANEL</h3>
                <strong> 720" Square HD </strong>
                <p>30 sec spot / 15 sec spot<br>Animation, Video or Still Image </p>
            </div>
          </div>
        </b-row>
      </div>
    </div>
    
  </section>

  <section class="statistics">
    <b-container col-12 class="text-center">
      <b-row>
        <b-col>
          <h3 class="my-4git  statistics__title">THE STATISTICS SPEAK FOR THEMSELVES</h3>
        </b-col>
      </b-row>
      <b-row class="text-center statistics__images">
        <div class="col-12 col-sm-6">
          <img src="../assets/img/statistics_1 copy.png" alt="" style="width:100%;height:auto;">
        </div>
        <div class="col-12 col-sm-6">
          <img src="../assets/img/statistics_2 copy.png" alt="" style="width:100%;height:auto;">
        </div>
      </b-row>
      <b-row class="text-center statistics__contact">
        <button v-on:click="goToScroll(10)" >CONTACT US TODAY</button>
      </b-row>
    </b-container>
  </section>

  <section class="divider-1">
    <div class="divider-1__overlay">
      <div class="divider-1__container">
        <b-row>
          <div class="col-12">
            <a class="divider-1__phone" href="mailto:sales@ledtruckmedia.com"><h3>sales@ledtruckmedia.com</h3></a>
            <div class="divider-1__content col-12  text-center">
              <h1 class="num">917-224-3633</h1>
            </div>
            <h4 class="divider-1__address">400 NW 26 ST, Miami, Fl 33127</h4>
          </div>
          
        </b-row>
      </div>
    </div>
  </section>

  <section class="contact" id="10">
    <b-container col-12 class="text-center">
      <b-row>
        <b-col>
          <img class="footer__logo" src="../assets/img/LEDTRCUKMEDIA-LOGO.png" alt="">
        <h3 class="my-5 contact__title">GET IN TOUCH</h3>
        </b-col>
      </b-row>
      <b-row>
        <div class="contact__form col-12 col-sm-12 col-md-5 col-md-5">
          <b-form @submit="onSubmit" @reset="onReset" v-if="show">
            <b-form-group id="exampleInputGroup2">
              <b-form-input id="exampleInput2"
                            type="text"
                            v-model="form.name"
                            required
                            placeholder="NAME">
              </b-form-input>
            </b-form-group>

            <b-form-group id="exampleInputGroup1">
              <b-form-input id="exampleInput1"
                            type="email"
                            v-model="form.email"
                            required
                            placeholder="EMAIL">
              </b-form-input>
            </b-form-group>
            <b-form-group id="exampleInputGroup1">
              <b-form-input id="exampleInput1"
                            type="phone"
                            v-model="form.phone"
                            required
                            placeholder="PHONE">
              </b-form-input>
            </b-form-group>
            <b-form-group id="exampleInputGroup3"
                          label-for="exampleInput3"
                          >
              <b-form-textarea id="exampleInput3"
                            required
                            rows="9"
                            placeholder="MESSAGE"
                            v-model="form.message">
              </b-form-textarea>
            </b-form-group>
            <b-form-group class="float-right col-12">
              <b-row>
                <span class="float-left col-4">

              </span>
              <div class="col-4">
                <b-button 
                  type="submit" 
                  variant="outline-success"
                  class="contact__submit float-right"
                  >Submit
                </b-button>
              </div>
              </b-row>
              
              
            </b-form-group>
          </b-form>
        </div>
      </b-row>
    </b-container>
  </section>

  <!-- <section class="footer">
    <b-container>
      <b-row class="text-center">
        <b-col class="md-6 my-5">

          <strong>Start a Project</strong></br>

          <a href="mailto:info@ledtruckmedia.com">info@ledtruckmedia.com</a>
          </p>
        </b-col>
        <b-col class="md-6 my-5">
          <strong>Say hello</strong>
          <p>400 NW 26 ST, Miami, Fl 33127</p>
        </b-col>
        <b-col class="md-6 my-5">
          <strong>Get in touch</strong>
            <p>917.224.3633</p> 
        </b-col>
      </b-row>
    </b-container>

  </section> -->

  <section class="footer__last">
    <b-container col-12 class="text-center">
      <b-row class="text-center">
        <div class="col-12 footer__last-text">
          web by
        </div>
        <div class="col-12 footer__last-image">
          <a href="http://www.asoftio.com" target="blanck">
          <img src="../assets/img/asoftio_logo_final_dark.png" alt="asoftio logo">
          </a>
        </div>
      </b-row>
    </b-container>

  </section>

</div>
</template>

<script>
import jQuery from "jquery";
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
      api: '/api/contact'

    }
  },

  methods: {

    goToScroll(id) {
      jQuery("html,body").animate(
        { scrollTop: jQuery("#" + id).offset().top },
        "slow"
      );
    },

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

      })
    },

    onReset (evt) {
      evt.preventDefault();
      /* Reset our form values */
      this.form.email = '';
      this.form.name = '';
      this.form.phone = '';
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

p {
  align-content: center;
}

a:hover {
  color: #b7b7b7 !important;
  text-decoration: none;
}

.trucks__section--otheroptions {
  margin-top: 80px
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
  opacity: 0;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,.7);
  z-index: 2;
}

.header {
  width: 100%;
  position: absolute;
  top: 1rem;
  z-index: 3;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-content: center;
  /* text-align: center; */
}

.main-header {
  font-weight: 100;
  letter-spacing: .8rem;
}

.main-button {

}

.header-mobile{
  display: none; 
}

.header__logo {
  height: 10rem;
}

.subtext {
  margin: 0 auto;
  font-size: .8rem;
  position: absolute;
  text-align: center;
  color: #9b9b9b;
  font-weight: 100;
  width: 90%;
  bottom: -9rem;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.trucks__section {
  padding: 25px;
  padding-top: 50px;
  padding-bottom: 50px;
  display: flex;
  flex-direction: column;
  height: 100%;
  background-image: url("../assets/img/stats_bg.png");
  color: #eee;
  background-size: cover;
}

.boxes-3 {
  z-index: 4;
  position: absolute;
  bottom: 10rem;
  color: #eee;
}

.home__button  {
  margin-top: 20px;
  color: white;
  border-radius: 5px;
  background-color: transparent;
  padding: 10px;
  padding-right: 100px;
  padding-left: 100px;
  cursor: pointer;
  font-weight: 100;
  text-transform: uppercase;
  letter-spacing: .2rem;
}
.btn {
  border-color: white;
  border-radius: 1px;
}

.boxes-3__truck-full {
  margin-top: 50px;
}

/* Statistics section  */

.statistics {
  /* height: 50rem; */
  padding: 25px;
  padding-top: 50px;
  background-color: #232323;
  color: #eee;
}

.statistics__images {
  padding-top: 50px
}

.statistics__contact {
  padding-top: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.statistics__contact > button {
  color: white;
  border-radius: 5px;
  background-color: transparent;
  padding: 10px;
  padding-right: 100px;
  padding-left: 100px;
  cursor: pointer;
  margin-bottom: 30px;
}

.divider-1__overlay {
  opacity: 1;
  /* position: ab; */
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,.7);
  z-index: 0;
}

.divider-1__phone h3 {
  font-weight: 100;
  letter-spacing: 7px;
  padding: 1rem;
  opacity: 1.4;
  align-content: center;
}

.divider-1__address {
  font-weight: 100;
  letter-spacing: 7px;
  padding: 1rem;
  opacity: 1.4;
  /* padding-bottom: 10px; */
  align-content: center
}
.divider-1__container {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  color: white;

}

.divider-1__content {
  padding: 10px;
  background-color: #2929298c;
  color: white;
  width: 100%;
  padding-left: 40px;
  padding-right: 40px;
  
}

.divider-1 {
  background-image: url("/ledtruckimage.png");
  width: 100%;
  height: 600px;
  background-size: cover;
  background-position: center;
}

.contact {
  /* height: 42rem; */
  background-color: #232323;
  color: #eee;
}

.contact__form {
  width: 30%;
  margin: 0 auto;
}

.contact__submit {
  border: #eee 1px solid;
  border-radius: 5px;
  color: white !important;
  padding-left: 25px;
  padding-right: 25px;
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
  height: 10rem;
  margin-top: 4rem;
}

.footer__last {
  align-items: right;
  /* padding: 20px; */
  background-color: #232323db;
}



.num {
    margin-bottom: 0px !important;
}

.mailto {
  font-size: 30px;
}

.footer__last-text {
  text-align: center;
  color: white;
  margin-top: 20px;
  padding: 0 0 -10px 0;
  font-family: sans-serif;
  font-weight: 100;
  font-size: .7rem;
}

@media (max-width: 576px){
  .header {
    display: none
  }

  .boxes-3 {
    bottom: 20rem;
  }
  .header-mobile {
    position: absolute;
    top: 1rem;
    z-index: 3;
    display: flex;
    /* flex-direction: row; */
    justify-content: center;
    align-content: center;
  }
  .subtext {
    bottom: -17rem ;
    font-size: .7rem ;
  }
}
</style>