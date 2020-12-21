<template>
<div>
      <div class="input-container">
      <input type="text" class="form-input" v-model="productID">
      <button class="button--green" @click="showProduct">Sayfayı Göster</button>
    </div>
    <nuxt-child />
</div>

</template>
<script>
export default {
  layout : "product",
  data(){
    return {
      productID : null
    }
  },
  methods : {
    showProduct(){
      this.$router.push("/products/" + this.productID);
    }
  }
}
</script>
<style scoped>

</style>
