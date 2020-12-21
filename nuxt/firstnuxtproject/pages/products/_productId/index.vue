<template>
  <div class="container">
    <h3>Burası Products Sayfası</h3>
    <hr>

    <div class="input-container">
      <nuxt-link to="/products" tag="a" class="button--grey">Geri Dön</nuxt-link>
      <button class="button--green" @click="editProduct">Sayfayı Düzenle</button>
    </div>

  </div>
</template>
<script>
export default {
  validate(arg){
    console.log(arg);
    //return arg.params.productId == 5;
    return /^\d+$/.test(arg.params.productId); // düzenli ifade ile integer olup olmadığını kontrol ediyoruz.
  },
  methods : {
    editProduct(){
      this.$router.push("/products/" + this.$route.params.productId + "/edit");
    }
  }
}
</script>
<style scoped>

</style>
