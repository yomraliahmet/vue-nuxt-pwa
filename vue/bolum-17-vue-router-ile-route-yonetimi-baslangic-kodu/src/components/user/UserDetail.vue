<template>
  <div class="container">
    <h3>User Detail Component</h3>
    <hr>
    <p> Kullanıcının ID Bilgisi : {{ $route.params.id }}</p>
    <router-link
    tag="button"
    class="btn btn-primary"
    :to="'/user/'+ $route.params.id + '/edit'"
    >
    Kullanıcıyı Düzenle
    </router-link>

    <router-link
    tag="button"
    class="btn btn-primary"
    :to="{ name : 'userEdit', params : { id : $route.params.id } }"
    >
    Kullanıcıyı Düzenle 2
    </router-link>

    <router-link
    tag="button"
    class="btn btn-primary"
    :to="navigationLink"
    >
    Kullanıcıyı Düzenle 3
    </router-link>
  </div>
</template>
<script>
  export default {
    data(){
      return {
        navigationLink : { 
          name : 'userEdit', 
          params : { id : this.$route.params.id }, 
          query : { name : 'ahmet', surname : 'YILDIRIM' },
          hash : '#data'
        }
      }
    },
    beforeRouteEnter (to, from, next) {
      console.log("Komponent seviyesinde kontrol....");
      next();
    }
  }
</script>
