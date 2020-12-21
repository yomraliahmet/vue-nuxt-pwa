<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6 col-md-offset-3">
        <h3>Vue-Resource</h3>
        <div class="form-group">
          <input type="text" class="form-control" v-model="userName">
        </div>
        <button class="btn btn-primary" @click="saveUser">Kaydet</button>
        <button class="btn btn-success" @click="getUsers">Verileri Getir</button>
        <hr>

        <ul class="list-group">
          <li class="list-group-item" v-for="user in userList" :key="user.data.userName">
            <span>{{ user.data.userName }}</span>
            <button @click="deleteUser(user.key)" class="btn btn-danger btn-sm" style="position:absolute;right:0;margin-top:-5px;margin-right:3px;">X</button>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      userName : null,
      userList : [],
      resource : {}
    }
  },
  methods : {
    saveUser(){
      /*
      this.$http.post("users.json", { userName : this.userName})
      .then((response) => {
        console.log(response);
      })
      */

     // this.$resource("users.json").save({},{ userName : this.userName })

     this.resource.kaydet({},{ userName : this.userName });

    },
    getUsers(){
      //this.$http.get("users.json")
      this.$resource("users.json").get()
      .then((response) => {
       // console.log(response.body);
        //console.log(response.body);
        /*
        let data = response.data;
        for(let key in data){
          this.userList.push(data[key]);
        }
        */
       return response.json();

      }).then(data => {
        this.userList = [];
        for(let key in data.userList){
          this.userList.push({
            key : key,
            data : data.userList[key]
          });
        }
      })
    },
    deleteUser(userKey){
      /*
      this.$http.delete("users/"+ userKey +".json")
      then(response => {
        console.log(response);
      })
      */
      this.$resource.delete("users/"+ userKey + ".json");
    }
  },
  created(){
    const customActions = {
      kaydet : { method : 'POST', url : 'users.json' }
    };

    this.resource = this.$resource("users.json", {}, customActions);
  }
}
</script>

<style>
</style>
