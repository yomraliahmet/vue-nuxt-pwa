<template>
  <div>
    <button class="btn btn-success" @click="increaseCounter(1)">+ Arttır</button>
    <button class="btn btn-danger" @click="decreaseCounter">- Azalt</button>
    <hr>
    <button class="btn btn-success" @click="increment">+ Arttır</button>
    <button class="btn btn-danger" @click="decrement">- Azalt</button>
    <hr>
    <button class="btn btn-success" @click="incrAsync({ time : 1000 })">+ Async Arttır</button>
  </div>
</template>

<script>

import { mapMutations, mapActions } from "vuex"

export default {
  methods : {
    ...mapMutations([
      "increaseCounter",
      "decreaseCounter"
    ]),
    ...mapActions([
      "increment",
      "decrement",
      "incrAsync"
    ])
    /*
    increment(){
      this.$store.dispatch("increment");
    },
    decrement(){
      this.$store.dispatch("decrement");
    },
    incrementAsync(){
      this.$store.dispatch("incrAsync");
    },
    */
    /*
    incrementCounter(){
      //this.$emit("counterEvent", 1);
      //this.$store.state.counter++;
      this.$store.commit("increaseCounter");
    },
    decrementCounter(){
      //this.$emit("counterEvent", -1);
      //this.$store.state.counter--;
      this.$store.commit("decreaseCounter");
    }
    */
  }
}
</script>

<style>
</style>
