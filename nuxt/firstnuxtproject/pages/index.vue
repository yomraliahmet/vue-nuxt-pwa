<template>
  <section class="container">
    <h1>Anasayfa</h1>
    <br>
    <p class="subtitle">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio esse repellat labore sapiente quia perspiciatis laboriosam, repellendus in nostrum itaque, ea praesentium. Laboriosam praesentium obcaecati, quod voluptatum minima itaque molestias. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem eum quam ea, molestiae dolorem perferendis quibusdam voluptas ipsa aliquam omnis, nesciunt delectus asperiores dolorum eaque doloremque, nemo maiores? Dolore, omnis!
    </p>

    <Logo/>
    <Hello/>

    <div class="button--container">
      <a href="/products" class="button--green">Ürünler</a> <!-- (Server Side Rendering) -->
      <nuxt-link to="products" tag="a" class="button--green">Ürünler</nuxt-link>
      <a href="#" class="button--green">Yorum</a>
    </div>
  </section>
</template>

<script>
export default {

}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  text-align: center;
  margin-top: 50px;

}

.button--container{
  margin-top:50px;
  border: 1px solid #392;
  background-color: #dedede;
  padding: 10px;
  box-shadow: 2px 3px 8px rgba(0,0,0,.1);
  display: flex;
  justify-content: center;
}

.button--green{
  margin-left: 5px;
}

.title {
  font-family:
    'Quicksand',
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 22px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.form-input{
  font-size: 14px;
  padding:8px;
}

</style>
