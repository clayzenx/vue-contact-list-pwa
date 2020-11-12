<template>
    <div class='profile'>
        <div class="profile__header">
            <button class='profile__btn'><router-link class=profile__link to='/'>&#8592;</router-link></button>
            <button class='profile__btn' @click.prevent = "inEdit = !inEdit">&#9998;</button>
        </div>
        <img class="profile__avatar" :src="contact.avatar" alt="">
        <div class="profile__info">
            <div class="profile__labels">
                <p>name</p>
                <p>username</p>
                <p>phone</p>
                <p>e-mail</p>
                <p>website</p>
            </div>
            <div class="profile__inputs">
                <div v-if="inEdit">
                    <input class='profile__input' v-model='contact.name'>
                    <input class='profile__input' v-model='contact.username'>
                    <input class='profile__input' v-model='contact.phone'>
                    <input class='profile__input' v-model='contact.email'>
                    <input class='profile__input' v-model='contact.website'>
                </div>
                <div v-else>
                    <p>{{ contact.name }}</p>
                    <p>{{ contact.username }}</p>
                    <p>{{ contact.phone}}</p>
                    <p>{{ contact.email}}</p>
                    <p>{{ contact.website }}</p>
                </div>
            </div>  
        </div>
        <button v-if='inEdit' class='profile__btn' @click="save">save</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            inEdit: false,
        }
    },
    props:{
        contact: Object
    },
    methods: {
        save() {
            this.$emit('save')
            this.inEdit = false
        }
    }
}
</script>

<style>
    .profile__input {
        border: none;
        border-bottom: 0.5px solid #ccc;
        margin: 6px;
        width: 150px;
        font-weight: bold;
        font-size: 14px;
        font-family: Avenir, Helvetica, Arial, sans-serif;
        color: #2c3e50;
    }
    .profile__labels, .profile__inputs{
        text-align: left;
        font-size: 14px;
    }
    .profile__inputs {
        font-weight: bold;
        font-size: 14px;
        width: 50%;
    }
    .profile__btn {
        display: block;
        align-self: end;
        border: 0;
        background-color: #fff;
        font-size: 24px;
        color: #ccc;
    }
    .profile__btn:hover, .profile__link:hover {
        color: rgb(85, 159, 255)
    }
    .profile {
        border: 1px solid #ccc;
        border-radius: 5px;
        max-width: 325px;
        margin: 0 auto;
        padding: 15px;
        overflow:hidden
    }
    .profile__header {
        display: flex;
        justify-content: space-between;
    }
    .profile__avatar {
        border-radius: 50%;
        width: 100px;
        height: 100px;
        border: 0.5px solid #ccc;
    }
    .profile__info{
        display: flex;
        justify-content: space-around;
        align-items: center;
        margin-top: 5px;
    }
    .profile__link {
        color: #ccc;
        text-decoration: none;
    }
</style>