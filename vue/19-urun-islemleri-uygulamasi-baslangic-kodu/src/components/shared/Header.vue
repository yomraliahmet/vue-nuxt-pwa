<template>
<div>
        <nav class="navbar navbar-expand-lg navbar-dark" style="background-color: #563F7A">
        <router-link
            to="/"
            tag="a"
            class="navbar-brand">
            Ürün Listesi
        </router-link>

        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
                <router-link
                    active-class="active"
                    to="/urun-islemleri"
                    tag="li"
                    class="nav-item">
                    <a class="nav-link">Ürün İşlemleri</a>
                </router-link>

                <router-link
                    active-class="active"
                    to="/urun-cikisi"
                    tag="li"
                    class="nav-item">
                    <a class="nav-link">Ürün Çıkışı</a>
                </router-link>
            </ul>
        </div>
    </nav>
    <br><br>
</div>

</template>