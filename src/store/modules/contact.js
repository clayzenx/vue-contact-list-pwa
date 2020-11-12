export default {
  state() {
    return {
      contacts: [],       //main array uses for manipulating with initial data
      allContacts: [],    //contain initial data from server
    }
  },
  getters: {
    allContacts(state){
      return state.contacts
    },
    getContact: state => id =>{
      return state.contacts.find(contact => contact.id === parseInt(id))
    },
  },
  mutations: {
    updateContacts(state, contacts){
      state.allContacts = contacts
      state.contacts = contacts
    },
    updateContact(state, cntct){
      state.contacts[state.contacts.indexOf(state.contacts.find(contact => contact.id === cntct.id))] = cntct
    },
    filterContacts(state, contacts){
      state.contacts = state.allContacts.filter(contact => contacts.includes(contact))
    },
    unfilterContacts(state) {
      state.contacts = state.allContacts
    }
  },
  actions: {                    
    async fetchContacts(ctx) {
      const res = await fetch('https://cors-anywhere.herokuapp.com/http://demo.sibers.com/users')
      
      const allContacts = await res.json()
      ctx.commit('updateContacts', allContacts)
    },
  },
}