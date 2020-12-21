<template>
    <div>
        <ul class="nav nav-pills">
            <router-link exact-active-class="active" to="/" tag="li"><a>Home</a></router-link>

            <router-link active-class="active" to="/user" tag="li"><a>User</a></router-link>

            <!--
            <li><a href="/">Home</a></li>
            <li><a href="/user">User</a></li>
            -->
        </ul>
    </div>
</template>