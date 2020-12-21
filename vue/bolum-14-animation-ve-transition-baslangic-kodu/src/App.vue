<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6 col-md-offset-3">
        <h3>Animation ve Transition</h3>
        <hr>

        <select class="form-control" v-model="activeEffect">
          <option value="fade">Fade</option>
          <option value="slide">Slide</option>
        </select>

        <button class="bt btn-primary" @click="show = !show ">Kutuyu Göster/Gizle</button>
        <br><br>
        <!--
        <transition :name="activeEffect">
            <div class="alert alert-success" v-show="show">Bu bir alert kutusudur. 1</div>
        </transition>
        <hr>
        <transition name="slide" type="animation">
            <div class="alert alert-warning" v-show="show">Bu bir alert kutusudur.</div>
        </transition>
        <hr>
        <transition name="slide" type="animation" appear>
            <div class="alert alert-warning" v-show="!show">Bu bir alert kutusudur.</div>
        </transition>

        <hr>
        <transition
        enter-class=""
        enter-active-class="animate__animated animate__shakeX"
        leave-class=""
        leave-active-class="animate__animated" 
        appear>
            <div class="alert alert-success" v-show="!show">Bu bir alert kutusudur.</div>
        </transition>
        <hr>
-->
        <transition name="fade" mode="out-in">
            <div class="alert alert-success" key="success" v-if="show">Bu bir alert kutusudur. </div>
            <div class="alert alert-danger" key="danger" v-else>Bu bir alert kutusudur. </div>
        </transition>
        <hr>
        <button class="bt btn-primary" @click="showJS = !showJS ">Kutuyu Göster/Gizle</button>
        <br><br>

        <transition 
          :css="false"
          @before-enter="beforeEnter"
          @enter="enter"
          @after-enter="afterEnter"
          @after-enter-cancelled="afterEnterCanceled"

          @before-leave="beforeLeave"
          @leave="leave"
          @after-leave="afterLeave"
          @after-leave-cancelled="afterLeaveCanceled"
        >
            <div style="width:100px;height:100px;background-color:#fbbd08;border:1px solid #666;" v-if="showJS">Bu bir alert kutusudur...</div>
        </transition>

        <hr>

        <h3>Dinamik komponenler arasında geçiş.</h3>

        <button class="btn btn-danger" @click="activeComponent = 'appHome'">Home</button>
        <button class="btn btn-primary" @click="activeComponent = 'appPost'">Post</button>
        <br><br>

        <transition name="slide" mode="out-in">
          <component :is="activeComponent"></component>
        </transition>
        <hr>
        <button class="btn btn-danger" @click="addNewItem">Yeni Eleman Ekle</button>
        <br><br>

        <ul class="list-group">
          <transition-group name="slide">
           <li v-for="(number, index) in numberList" :key="number" class="list-group-item"> Number : {{ number }} 
            <button style="float:right;margin-top:-5px;" @click="removeItem(index)" class="btn btn-danger btn-sm">X</button>
          </li>
          </transition-group>
        </ul>

      </div>
    </div>
  </div>
</template>

<script>

import Post from "./components/Post";
import Home from "./components/Home";


export default {
  components : {
    appHome : Home,
    appPost : Post
  },
  data(){
    return {
      show : false,
      activeEffect : 'fade',
      showJS : false,
      elementWidth : 100,
      activeComponent : "appPost",
      numberList : [1,2,3,4,5]
    }
  },
  methods : {
    addNewItem(){
      this.numberList.push(this.numberList.length + 1)
    },
    removeItem(index){
      this.numberList.splice(index,1);
    },
    beforeEnter(el){
      this.elementWidth = 100;
      el.style.width = this.elementWidth + "px";
    },
    enter(el, done){
      let round = 1;
      const interval = setInterval(() => {
        el.style.width = (this.elementWidth + round * 10) + "px";
        round++;
        if(round > 20){
          clearInterval(interval);
          done();
        }
      },10);
    },
    afterEnter(el){},
    afterEnterCanceled(el){},
    beforeLeave(el){
      this.elementWidth = 300;
      el.style.width = this.elementWidth + "px";
    },
    leave(el, done){
      let round = 1;
      const interval = setInterval(() => {
        el.style.width = (this.elementWidth - round * 10) + "px";
        round++;
        if(round > 20){
          clearInterval(interval);
          done();
        }
      },10);
    },
    afterLeave(el){},
    afterLeaveCanceled(el){}
  }
}
</script>

<style>
.fade-enter{
  opacity: 0;
}
.fade-enter-active{
  transition: opacity 1s;
}
.fade-leave{

}
.fade-leave-active{
  transition: opacity 1s;
  opacity: 0;
}



.slide-enter{
   opacity: 0;
}
.slide-enter-active{
 animation: slide-in 1s ease-out forwards;
 transition: opacity 0.5s;
}
.slide-leave{
  
}
.slide-leave-active{
 animation: slide-out 1s ease-out forwards;
 transition: opacity 1s;
 opacity: 0;
 position: absolute;
 width: 95%;
}

.slide-move{
  transition: transform 1s;
}


@keyframes slide-in {
  from{
    transform: translateY(20px);
  }
  to{
    transform: translateY(0px);
  }
}

@keyframes slide-out {
  from{
    transform: translateY(0px);
  }
  to{
    transform: translateY(20px);
  }
}

</style>
