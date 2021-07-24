<template>
<div class="" v-if="loading">
  <h3>{{trn.name}}</h3>
  <p>{{trn.descr}}</p>
  <!-- <div>
    <span v-for="dot in trn.questions" :key="dot.nomer" class="dot" :class="current:dot."></span>
  </div> -->
  <div v-if="trn.state.state!=2">
  <div v-for="q in trn.questions.sort((a,b)=>{return  a.nomerQ-b.nomerQ})" :key="q.nomerQ">
    <h4>{{q.nomerQ}}. {{q.question}}</h4>


    <div v-for="a in q.answers" :key="a.nomer" @click="selected(a)" :class="{ selected: a.selected}">
      <p class="var">{{a.answer}}</p>
    </div>
  </div>
  <div class="butonbar">
    <button type="button" name="button" @click="approve">Подтвердить</button>
  </div>
</div>
<div v-if="trn.state.state==2">
  <div v-for="(r,ind) in result" :key="ind">
    <p>{{r.res?'Отвечено верно':'Отвечено неверно'}} {{r.question}}</p>
    <div v-for="(a,a1) in r.answers" :key="a1" >
      <p> {{a.result}} {{a.answer}}</p>
    </div>
  </div>
</div>


</div>
</template>

<script>
export default {
  name: "Passing",
  data() {
    return {
      trn: {},
      loading: false,
      result: []
    }
  },
  methods: {
    selected(a) {
      a.selected = !a.selected;
    },
    approve() {
      if (this.checkAllSelected()) {

        this.trn.questions.forEach((item) => {
          let res = {};
          res.question = item.nomerQ + ". " + item.question;
          res.answers = [];
          let right = true;
          item.answers.forEach((a) => {
            if (a.right == 1 && a.selected) {
              res.answers.push({
                answer: a.answer,
                result: "Верно"
              });
              right = right && true;
            } else if (a.right == 0 && a.selected || a.right == 1 && !a.selected) {
              if(a.right == 0 && a.selected){res.answers.push({
                answer: a.answer,
                result: "Выбран неверный ответ "
              });}
              if(a.right == 1 && !a.selected){res.answers.push({
                answer: a.answer,
                result: "Правильный ответ "+a.answer
              });}
              right = right && false;
            }
          });
          res.res = right;
          this.result.push(res);
        });

        fetch('/api/mytrnres', {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              idtrn: this.trn._id,
              result: this.result

            })
          }).then((response) => {
            return response.json();
          })
          .then(data => {
            this.trn.state.state = 2;
            console.log(data);
          }).catch((err) => {
            console.error(err);
          });
      }
    },
    checkAllSelected() {
      let res = true;
      this.trn.questions.forEach((item) => {
        res = res && item.answers.filter(a => a.selected).length > 0;
      });


      return res;
    }
  },
  created: function() {
    fetch('/api/mytrn', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          idtrn: this.$route.params.id
        })
      }).then((response) => {
        return response.json()
      })
      .then(data => {
        this.trn = data;
        this.loading = true;
      }).catch((err) => {
        console.error(err);
      });
  }

}
</script>

<style lang="css" scoped>
button:hover{
  background-color: orange;
}
button{
  background-color: orange;
}

.dot{
  height: 1.5rem;
  width: 1.5rem;
  background-color: #bbb;
  border-radius: 50%;
  display: inline-block;
}
.selected{
  background-color: orange;
}
.var{
  line-height: 1.5rem;
margin: 1px;
padding: 1px;
}
</style>
