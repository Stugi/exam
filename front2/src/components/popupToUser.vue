<template>
<div v-if="loading">
  <div class="popup">
    <div class="selectusers">
      <div v-for="u in users" :key="u.cn" @click="selectedUser(u)" :class="{ selected: u.selected}">
        {{u.displayname}}
      </div>
    </div>

    <div class="butonbar">
      <button type="button" name="button" @click="goToUser">Назначить</button>
    </div>
    <div class="butonbar close-icon">
      <button type="button" name="" @click="closePopup">x</button>
    </div>
  </div>
</div>
</template>

<script>

export default {
  name: "PopupToUser",
  data() {
    return {
      users: [],
      loading: false
    }
  },
  computed: {
    selectedusers(){
      return this.users.filter(u=>u.selected);
    }
  },
  methods: {
    selectedUser(u){
      u.selected = !u.selected;
    },
    goToUser(){
      let users = this.selectedusers;
      if(users.length>0){        
          this.$parent.createTrn(users);
          this.closePopup();
          this.users.forEach(e=>{e.selected=false});
      }
    },
    closePopup(){
      this.$parent.closePopup();
    }
  },

  created: function() {
    fetch('/api/users').then((response) => {
      return response.json();
    }).then(data => {
      this.users = data;
      this.loading = true;
    }).catch(err => {
      console.log(err);
    })
  }
}
</script>

<style lang="css" scoped>
.popup{
    /* margin-left: auto;
    margin-right: auto; */
    width: 100%;
    padding: 2rem;
    height: 30vh;
    overflow-y: auto;
    position: relative;
}

.selectusers{
  padding-bottom: 0.5rem;
}

button{
  width: 100%;
}
button:hover{
  background-color: lightgrey!important;
}
.selected{
  background-color: orange;
}
.close-icon{
  position:absolute;
  top: 0.1rem;
  right: 0.1rem;
}
</style>
