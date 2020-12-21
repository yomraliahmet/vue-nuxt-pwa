<template>
    <div>
        <div class="card" :class="cssClass">
            <img :src="card.image" alt="">
        </div>
    </div>
</template>

<script>
export default {
    props : ["card","cssClass"]
}
</script>

<style>
.card{
    width: 200px;
    height: 232px;
    border-radius: 5px;
    border: 4px solid #666;
    transition: box-shadow .5s;
    margin:10px;
}

.card:hover{
    box-shadow: 0px 5px 48px #666;
    transition: box-shadow .5s;
}

.card img{
    width: 100%;
    height: 100%;
    border-radius: 1px;
}

.shadow{
    box-shadow: 0px 5px 48px #30969f !important;
    transition: box-shadow .5s;
}
</style>