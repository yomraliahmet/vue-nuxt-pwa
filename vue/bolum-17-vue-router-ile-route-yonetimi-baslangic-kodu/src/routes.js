import Home from "./components/Home.vue"
import Header from "./components/Header.vue"

// Lazy Load olarak yükleme, büyük projelerde performans sağlar, bir zorunluluktur diyebiliriz.
// Son kısma eklenen "User" parametresi ile gruplama yapılırsa, o grup tek seferde yüklenir.
const User = resolve => {
    require.ensure(["./components/user/User.vue"], () => {
        resolve(require("./components/user/User.vue"));
    }, "User");
}

const UserStart = resolve => {
    require.ensure(["./components/user/UserStart.vue"], () => {
        resolve(require("./components/user/UserStart.vue"));
    }, "User");
}

const UserDetail = resolve => {
    require.ensure(["./components/user/UserDetail.vue"], () => {
        resolve(require("./components/user/UserDetail.vue"));
    }, "User");
}

const UserEdit = resolve => {
    require.ensure(["./components/user/UserEdit.vue"], () => {
        resolve(require("./components/user/UserEdit.vue"));
    }, "User");
}


// Büyük Projelerde performans kaybı yaşatır.
/*
import User from "./components/user/User.vue"
import UserStart from "./components/user/UserStart.vue"
import UserDetail from "./components/user/UserDetail.vue"
import UserEdit from "./components/user/UserEdit.vue"
*/

export const routes = [
    { path : '' , name : 'home', components : {
        default : Home,
        'header-top' : Header,

    } },
    //{ path : '/user/:id', component : User, name : 'user' }
    //{ path : '/user', component : User, name : 'user', children : [
    { path : '/user', name : 'user', components : {
        default : User,
        'header-top' : Header,

    } ,children : [
        { path : '', component : UserStart }, // '/user'
        { path : ':id', component : UserDetail, beforeEnter: (to, from, next) => {
            console.log("Route seviyesinde kontrol..");
            next();
        } }, // '/user//5'
        { path : ':id/edit', component : UserEdit, name : 'userEdit' }, // '/user/5/edit'
    ] },
    //{ path : "/redirect", redirect : "/user" }
    //{ path : "/redirect", redirect : { name : 'home' } }
    { path : "*", redirect : '/' }

];