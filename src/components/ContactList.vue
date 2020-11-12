<template>
    <div>
       <div v-for='letter in letters' :key='letter' :letter=letter>
           <div class='delimiter' v-if='contactList.filter(item => item.name.charAt(0) === letter).length > 0'>
               <p class="delimiter__letter">
                   {{ letter }}
               </p>
               <hr>
           </div>
           <div v-for='contact in contactList' :key='contact.id' :contact='contact'>
                <ContactItem v-if='contact.name.charAt(0) === letter' :contact='contact'/>
           </div>
       </div>
    </div>
</template>

<script>
import ContactItem from '@/components/ContactItem'

export default {
    computed :{
        letters: function(){
            let letters = []
            for(let i = "A".charCodeAt(0); i <= "Z".charCodeAt(0); i++) {letters.push(String.fromCharCode([i]))}
            return letters
        }
    },
    components: {
        ContactItem
    },
    props: {
        contactList: Array
    }
}
</script>

<style>
    .delimiter {
        display: flex;
        max-width: 350px;
        margin: 10px auto;
        justify-content: space-between;
        align-items: flex-end;
    } 
    hr {
        width: 100%;
        height: 0;
        border: 0;
        border-bottom: 0.5px solid #ccc;
    }   
    .delimiter__letter {
        color: #ccc;
        font-weight: bold;
        margin: 0;
        padding: 5px;
    }
</style>