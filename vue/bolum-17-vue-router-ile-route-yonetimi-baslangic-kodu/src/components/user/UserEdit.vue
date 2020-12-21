<template>
  <div class="container">
    <h3>User Edit Component</h3>
    <hr>
    <p> Ad : {{ $route.query.name }}</p>
    <p> Soyad : {{ $route.query.surname }}</p>

    <button class="btn btn-primary" @click="saved = true">Onayla</button>

    <div style="height: 800px;"></div>
    <div id="data"> 
      <p>Burada bir yazı bulunuyor...</p> 
      <p>Burada bir yazı bulunuyor...</p> 
      <p>Burada bir yazı bulunuyor...</p> 
      <p>Burada bir yazı bulunuyor...</p> 
    </div>
  </div>
</template>
<script>
  export default {
    data(){
      return {
        saved : false
      }
    },
    beforeRouteLeave (to, from, next) {
      
      if(this.saved){
        next();
      }else{
        if(confirm("Tüm bilgileriniz kaybolacak. Emin misiniz?")){
          next();
        }else{
          console.log("Yetkiniz yok...");
          next(false);
        }
      }
    } 
  }
</script>
