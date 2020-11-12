<template>
  <div>
        <div class="search">
            <input 
                v-model="request" 
                @input="input"
                class="search__searchbar" 
                type="search" 
                placeholder="search">
        </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    data(){
        return {
            request: '',
        }
    },
    computed: {
        ...mapGetters(['allContacts'])
    },
    methods: {
        input() {           //filters the array on input
            if(this.request === '') this.$store.commit('unfilterContacts')
            this.searchResult = this.allContacts.filter(contact => contact.name.toLowerCase().includes(this.request.toLowerCase())).sort((a,b) => {
                return a.name.toLowerCase().indexOf(this.request) > b.name.toLowerCase().indexOf(this.request) ? 1 : -1;
            })
            this.$store.commit('filterContacts', this.searchResult)
        },
    },
    beforeDestroy() {
        this.$store.commit('unfilterContacts')      //reset filter
    }
}
</script>

<style>
    .search {
        border-bottom: 1px solid #ccc;
        padding: 20px;
        position: relative;
    }
    .search__searchbar {
        border: 0.5px solid #ccc;
        border-radius: 50px;
        padding: 10px;
        width: 200px;
        height: 35px;
        color: #ccc;
    }
    .search__searchbar:focus {
        border: 1px solid rgb(85, 159, 255);
        border-radius: 50px;
    }
</style>