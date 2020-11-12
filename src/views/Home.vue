<template>
  <div class="home">
    <SearchBar />
    <ContactList :contactList='allContacts'/>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

import ContactList from '@/components/ContactList'
import SearchBar from '@/components/SearchBar'

export default {
  name: 'Home',
  components: {
    SearchBar,
    ContactList
  },
  computed: {
    ...mapGetters(['allContacts']),   //get all contacts from local storage
  },
}
</script>

