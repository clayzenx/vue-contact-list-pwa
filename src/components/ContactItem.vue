<template>
  <div>
    <router-link :to="contactLink" class='contact-item'>
      <img class="contact-item__avatar" :src="contact.avatar" alt="">
      <div class="contact-item__info">
        <p class="contact-item__name">{{ contact.name }}</p>
        <p class="contact-item__username">@{{ contact.username }}</p>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
    data(){
        return {
            contactLink: `contact/:${this.contact.id}`
        }
    },
    props: {
        contact: Object,
    },
}
</script>

<style>
    .contact-item {
        border: 0.5px solid #ccc;
        border-radius: 5px;
        margin: 5px auto;
        padding: 10px;
        max-width: 325px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        cursor: pointer;
        text-decoration: none;
        color: #000
    }
    .contact-item__avatar {
        border-radius: 50%;
        width: 75px;
        height: 75px;
        border: 0.5px solid #ccc;
    }
    .contact-item__info {
        text-align: left;
        min-width: 200px;
    }
    .contact-item__name {
        font-weight: 800;
    }
    .contact-item__username {
        color: #ccc
    }

    .contact-item:hover {
        border: 0.5px solid rgb(85, 159, 255);
    }
</style>