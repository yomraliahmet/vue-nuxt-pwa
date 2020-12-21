<template>
  <div class="container">
    <h3 class="text-center mt-3">Vuelidate ile Form Kontrolü</h3>
    <div class="d-flex justify-content-center align-content-center flex-row">
      <div class="card p-4 mt-3 mr-4  shadow">
        <form style="width: 350px" @submit.prevent="onSubmit">
          <div class="form-group">
            <label>E-posta Adresiniz</label>
            <input v-model="email" type="email" class="form-control" placeholder="E-posta adresini giriniz">
            <small class="form-text text-muted">Hata Mesajı</small>
          </div>
          <div class="form-group">
            <label>Şifre</label>
            <input v-model="password" type="password" class="form-control" placeholder="Şifrenizi giriniz">
          </div>
          <div class="form-group">
            <label>Şifre Tekrar</label>
            <input v-model="repassword" type="password" class="form-control" placeholder="Şifrenizi tekrar giriniz">
          </div>
          <div class="form-group">
            <label>Kayıt olmak istediğiniz kategori</label>
            <select v-model="selectedCategory" class="form-control">
              <option v-for="category in categories" :value="category">{{ category }}</option>
            </select>
          </div>

          <a @click="newHobby" class="text-white btn btn-secondary rounded-0 btn-sm">İlgi Alanı Ekle</a>

          <ul class="list-group mt-3 mb-3 border-0">
            <li v-for="(hobby,index) in hobbies" class="list-group-item d-flex pl-2">
              <input type="text" class="form-control mr-2" v-model="hobby.value">
              <button class="btn btn-sm btn-danger rounded-0" @click="hobbies.splice(index, 1)">Sil</button>
            </li>
          </ul>
         
          <button class="btn btn-outline-secondary rounded-0">Kaydet</button>
        </form>
      </div>
      <div class="card p-4 mt-3 shadow" style="width:400px;">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus distinctio ipsum in porro deleniti beatae dolores molestias excepturi. Sint sapiente ullam rem quidem deleniti eum fugit aut error tenetur doloremque.</p>
      </div>
    </div>
  </div>
</template>
<script>
import { required } from "vuelidate/lib/validators"

export default {
    data() {
      return {
        email : null,
        password : null,
        repassword : null,
        selectedCategory : null,
        categories : ["Yazılım", "Donanım", "Cloud", "Sunucular", "Unix", "Linux", "Mac OS", "Windows"],
        hobbies: []
      }
    },
    validations : {
      
    },
    methods: {
      onSubmit(){
        let form = {
          email : this.email,
          password : this.password,
          category : this.category,
          hobbies : this.hobbies,
        }
        console.log(form)
      },
      newHobby(){
        let hobby = {
          id: Math.random() * Math.random() * 1000,
          value: ''
        }
        this.hobbies.push(hobby)
      }
    }
  }
</script>
