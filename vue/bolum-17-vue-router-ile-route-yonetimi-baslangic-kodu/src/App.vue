<template>
<div>

    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <!-- <app-header></app-header> -->
                <br>
                <router-view name="header-top"></router-view>
                <transition name="slide" mode="out-in">
                    <router-view></router-view>
                </transition>
                
                <router-view name="header-bottom"></router-view>
            </div>
        </div>
    </div>

</div>
</template>

<script>
import Header from "./components/Header"

export default {
    components : {
        appHeader : Header
    }
}
</script>

<style>
.slide-enter{
   opacity: 0;
}
.slide-enter-active{
 animation: slide-in .4s ease-out forwards;
 transition: opacity .2s;
}
.slide-leave{
  
}
.slide-leave-active{
 animation: slide-out .4s ease-out forwards;
 transition: opacity .4s;
 opacity: 0;
 position: absolute;
 width: 95%;
}

@keyframes slide-in {
  from{
    transform: translateY(20px);
    opacity: 0;
  }
  to{
    transform: translateY(0px);
    opacity: 1;
  }
}

@keyframes slide-out {
  from{
    transform: translateY(0px);
    opacity: 1;
  }
  to{
    transform: translateY(20px);
    opacity: 0;
  }
}
</style>
