<template>
  <div class='wrap'>
    <ContactProfile :contact="contact" @save='saveContact'/>
  </div>
</template>

<script>
import ContactProfile from "@/components/ContactProfile.vue";

export default {
  data(){
    return{
      id: this.$route.params.id.replace(':', '')
    }
  },
  components: {
    ContactProfile
  },
  computed: {
    contact() { 
      return this.$store.getters.getContact(this.id) 
    }
  },
  methods: {
    saveContact(){
      this.$store.commit('updateContact', this.contact)
    }
  }
}
</script>

<style>
  .wrap {
    margin-top: 100px;
  }
</style>