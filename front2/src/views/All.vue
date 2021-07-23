<template>
<div class="main">
  <h3 class="header">Все тесты</h3>
  <div class="butonbar legend">
    <button @click.prevent="addQuestion" v-if="this.state.value===0">Новый тест</button>
    <!-- <button @click.prevent="createUsers" v-if="this.state.value===0">Новый user</button> -->
  </div>
  <div id="main" class=".container flex-row">

    <div class="sidebar col-2">

      <div v-for="trn in alltrn" :key="trn._id" name="item" @click="setCurrentRow(trn._id)"
      :class="{ selected: trn._id===currentIdTrn}">
        <p>{{trn.name?trn.name:'~без названия~'}}</p>
        <!-- <p>{{trn.descr}}</p> -->
      </div>
    </div>
    <div class="content"  v-if="loading">
      <cart-trn :inittrn="currentTrn" :initstate="state"></cart-trn>
    </div>
  </div>

</div>
</template>

<script>
import cartTrn from '../components/cartTrn.vue'
import {
  simpleDateFormat
} from '../../public/js/dateFormat.js'
export default {
  components: {
    'cart-trn': cartTrn
  },
  data() {
    return {
      alltrn: [{
          id: 1,
          name: "test1",
          descr: "Description",
          questions: []
        },
        {
          id: 2,
          name: "test2",
          descr: "Description",
          questions: []
        },
        {
          id: 3,
          name: "test3",
          descr: "Description",
          questions: []
        },
        {
          id: 10,
          name: "test4",
          descr: "Description",
          questions: []
        },
        {
          id: 20,
          name: "test5",
          descr: "Description",
          questions: []
        },
        {
          id: 30,
          name: "test3",
          descr: "Description",
          questions: []
        },
        {
          id: 40,
          name: "test1",
          descr: "Description",
          questions: []
        },
        {
          id: 21,
          name: "test2",
          descr: "Description",
          questions: []
        },
        {
          id: 31,
          name: "test3",
          descr: "Description",
          questions: []
        },
        {
          id: 11,
          name: "test1",
          descr: "Description",
          questions: []
        },
        {
          id: 22,
          name: "test2",
          descr: "Description",
          questions: []
        },
        {
          id: 32,
          name: "test100",
          descr: "Description",
          questions: [],
          datemod: new Date().getTime()
        }
      ],
      currentIdTrn: 1,
      state: {
        value: 0
      },
      blockCreate: true,
      loading: false
    }
  },
  computed: {
    currentTrn() {
      return this.alltrn.find(e => e._id === this.currentIdTrn);
    },


  },
  methods: {
    setCurrentRow(id) {
      if (this.state.value === 1) {
        return;
      }
      this.currentIdTrn = id;
    },
    addQuestion() {
      if (this.state.value === 1) {
        return;
      }
      this.blockCreate = true;
      fetch('/api/createtrn', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            dataclient: {datemod:simpleDateFormat(new Date())}
          })
        }).then((response) => {
          return response.json()
        })
        .then(data => {
          this.alltrn.unshift(data);
          this.setCurrentRow(data._id);
          this.state.value = 1;
        }).catch((err) => {
          console.error(err);
          this.blockCreate = false;
        });

    },
    updateTrn(){
      this.currentTrn.datemod = simpleDateFormat(new Date());
      fetch('/api/updatetrn', {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            dataclient: this.currentTrn
          })
        }).then((response) => {
          return response.json();
        })
        .then(data => {
          // this.setCurrentRow(data._id);
          console.log(data);
          this.state.value = 0;
        }).catch((err) => {
          console.error(err);
        });
    },
    addTrnUser(trnsuser){
      fetch('/api/trnuser', {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            trns: trnsuser
          })
        }).then((response) => {
          return response.json();
        })
        .then(data => {
          // this.setCurrentRow(data._id);
          console.log(data);
        }).catch((err) => {
          console.error(err);
        });
    },


  },
  created: function() {
    fetch('/api/trns').then((response) => {
      return response.json();
    }).then(data => {
      this.alltrn = data;
      this.currentIdTrn = data[0]._id;
      this.loading = true;
    }).catch(err => {
      console.log(err);
    })
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;700&display=swap');

div[name="item"].selected {
  border-left: 4px solid #20123a;
  font-weight: bolder;
}

div[name="item"] {
  border-left: 4px solid transparent;
  padding-left: 2px;
}

.main {
  display: flex;
  flex-direction: column;
  width: 100%;

  font-family: 'Roboto', sans-serif;

  position: relative;
}

#main {}

.sidebar {
  max-height: calc(100vh - 3rem);
  overflow-y: auto;
  max-width: 200px;
}

.content {
  width: 100%;
}

.header {
  height: 3rem;
  margin: 0;
  padding: 0.5rem;
}

div[name="item"]:hover {
  background-color: #c1c8c7;
}

div[name="item"] p {
  margin: 0;
}

.butonbar button {
  float: left;
  outline: none;
  border-top: none;
  border-bottom: none;
  border-right: none;
  border-left: solid 1px #c1c8c7;
  padding: 0.5em 1em;
}

.butonbar button:first-child {
  border-top-left-radius: 0.8em;
  border-bottom-left-radius: 0.8em;
  border-left: none !important;
}

.butonbar button:last-child {
  border-top-right-radius: 1em;
  border-bottom-right-radius: 1em;
}

.butonbar button:focus,
.butonbar button:active {
  outline: none !important;
}

.butonbar button:hover {
  background-color: #fff;
}

.butonbar button:active {
  background-color: lightblue;
}

.legend {
  position: absolute;
  top: 0.5rem;
  left: 8rem;
}
</style>
