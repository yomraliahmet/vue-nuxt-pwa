<template>
    <div class="container">
        <ul>
            <li v-for="course in courses" :key="course.id">{{ course.title }}</li>
        </ul>
    </div>
</template>

<script>
export default {
    computed : {
        courses(){
            return this.$store.getters.getCourses;
        }
    }
}
</script>

<style>

</style>