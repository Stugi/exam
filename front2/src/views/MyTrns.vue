<template>
<div class="main">
  <h3 class="header">Назначенные тесты</h3>

  <div v-for="trn in mytrn" :key="trn._id" name="" class="flex">
    <div class="">
      <p>{{trn.name}}</p>
    </div>
    <div class="butonbar">
      <router-link :to="{name:'PassingTrn', params:{id:trn._id}}">
        <button>{{trn.state.state==0?'Пройти тест':(trn.state.state==1?'Продолжить':'Результаты')}}</button></router-link>
    </div>
  </div>

</div>
</template>

<script>
export default {
  data() {
    return {
      mytrn: []
    }
  },
  // methods:{
  //   passingTrn(trn){
  //     this.$route.push({ name: 'PassingTrn', params: { id: trn._id } });
  //   }
  // },
  created: function() {
    fetch('/api/mytrns').then((response) => {
      return response.json();
    }).then(data => {
      this.mytrn = data;
    }).catch(err => {
      console.log(err);
    })
  }
}
</script>

<style scoped>
.flex {
  display: flex;
}

.flex>div {
  flex: 1;
}

.main {}

.header {
  height: 3rem;
  margin: 0;
  padding: 0.5rem;
}

button:hover{
  background-color: orange;
}
</style>
