<template>
<div class="cartTrn">
  <div class="">
    <div class="stikly">
      <h3>Тест {{trn.name}}</h3>
      <div name="facet" class="butonbar menu-1 ">
        <button v-if="state.value===0" @click.prevent="edit">Редактировать</button>
        <button v-if="state.value===1" @click="save">Сохранить</button>
        <button v-if="state.value===0" @click="toUser">Назначить</button>
      </div>
    </div>
    <div id="error-message" class="hide">
      <div class="" v-for="e in errors" :key="e">
        <p>{{e.error}}</p>
      </div>
    </div>
    <div id="to-user" class="hide">
      <popup-to-user></popup-to-user>
    </div>
    <div class="data">
      <form action="">
        <label for="name">Название</label>
        <textarea ref="name" name="name" rows="3" cols="3" v-model.trim="trn.name" placeholder="Название теста" :disabled="isEdit"></textarea>
        <label for="descr">Описание</label>
        <textarea ref="descr" name="descr" rows="3" cols="80" v-model.trim="trn.descr" placeholder="Описание теста" :disabled="isEdit"></textarea>

        <div class="row">
          <div class="">
            <label for="usercr" class="">Создал</label>
            <input type="text" name="usercr" disabled v-model="trn.user">
          </div>
          <div class="">
            <label for="datemod" class="">Изменено</label>
            <input type="text" name="datemod" disabled v-model="trn.datemod">
          </div>
        </div>
        <div class="spacer"> </div>
        <div class="row">
          <div class="">
            <label for="procent" class="">Процент</label>
            <input ref="procent" type="number" name="procent" v-model.number="trn.procent" size="2" :disabled="isEdit">
          </div>
          <div class="">
            <label for="needQ" class="">Количество вопросов</label>
            <input ref="needQ" type="number" name="needQ" v-model.number="trn.needQ" size="2" :disabled="isEdit">
            <label for="countQ" class="">из</label>
            <input type="text" name="countQ" :value="trn.questions.length" disabled size="3">
          </div>
        </div>
      </form>
    </div>
    <div class="stikly-2">
      <h4 ref="questions">Вопросы</h4>
      <div name="facet" class="butonbar menu-1">
        <button @click.prevent="addQuestion" v-if="!isEdit">Добавить вопрос</button>
      </div>
    </div>
    <div class="data">
      <form name="questions" action="">
        <div v-for="(q, indexq) in trn.questions" :key="q.nomerQ" class="relative">
          <label for="">Вопрос {{q.nomerQ}}</label>
          <div name="facet" class="butonbar menu-2 butonbar-gray">
            <button @click.prevent="addAnswer(q)" v-if="!isEdit">Добавить вариант ответа</button>
            <button @click.prevent="removeQuestion(indexq)" v-if="!isEdit" class="bolder">X</button>
          </div>
          <div class="spacer"></div>
          <textarea :ref="'question'+indexq" name="question" rows="3" placeholder="Текст вопроса" v-model.trim="q.question" :disabled="isEdit"></textarea>
          <div class="data">
            <div v-for="(a, indexa) in q.answers" :key="a.nomer" class="relative">
              <div class="">
                <label for="">Ответ {{a.nomer}}</label>
                <select class="" name="" v-model="a.right" :disabled="isEdit">
                  <option value="1">Верный</option>
                  <option value="0">Неверный</option>
                </select>
                <span class="butonbar butonbar-gray butonbar-padding close" v-if="!isEdit && q.answers.length>2">
                  <button @click="removeAnswer(indexq,indexa)" type="button" name="button" class="bolder">x</button>
                </span>
              </div>
              <textarea :ref="'answer'+indexq+'_'+indexa" name="answer" rows="3" placeholder="Текст ответа" v-model.trim="a.answer" :disabled="isEdit"></textarea>
            </div>
          </div>
          <div class="spacer"></div>
          <div class="separator"></div>
          <div class="spacer"></div>
        </div>
      </form>
    </div>
  </div>
</div>
</template>

<script>
import PopupToUser from './popupToUser.vue';
const {
  createTrn
} = require('../framework/buildtrn.js');
export default {
  name: "cartTrn",
  props: {
    inittrn: Object,
    initstate: Object
  },
  components: {
    "popup-to-user": PopupToUser
  },
  data() {
    return {
      trn: this.inittrn,
      state: this.initstate,
      errors: null
    }
  },
  watch: {
    inittrn(newTrn) {
      this.trn = newTrn;
    },
    initstate(newState) {
      this.state = newState;
    }
  },
  methods: {
    addQuestion() {
      let numberQ = this.trn.questions.length + 1;

      this.trn.questions.push({
        nomerQ: numberQ,
        question: "",
        answers: [{
            answer: "",
            right: 0,
            nomer: 1
          },
          {
            answer: "",
            right: 1,
            nomer: 2
          }
        ]
      })
    },
    addAnswer(q) {
      let nomer = q.answers.length + 1;
      q.answers.push({
        answer: "",
        right: 0,
        nomer: nomer
      });
    },
    edit() {
      this.state.value = 1;
    },
    save() {
      if (this.validateData()) {
        this.$parent.updateTrn();
      } else {
        let el = this.$refs[this.errors[0].ref];
        el.focus();
        let err = document.getElementById("error-message");
        err.classList.remove("hide");
        setTimeout(function() {
          err.classList.add("hide");
        }, 2000);
      }
    },
    toUser() {
      this.openPopup();
    },
    validateData() {
      this.errors = [];
      if (!this.trn.name) {
        this.errors.push({
          ref: "name",
          error: "Заполните название теста"
        });
      }
      if (!this.trn.descr) {
        this.errors.push({
          ref: "descr",
          error: "Заполните описантие теста"
        });
      }
      let p = Number(this.trn.procent);

      if (p <= 0 || p > 100 || !Number.isInteger(p)) {
        this.errors.push({
          ref: "procent",
          error: "Процент прохождения должен быть целым числом в промежутке от 0 до 100"
        });
      }

      let needQ = Number(this.trn.needQ);
      if (this.trn.questions.length < needQ) {
        this.errors.push({
          ref: "needQ",
          error: "Количество выбираемых вопросов не должно превышать общее количество вопросов"
        });
      }
      if (!Number.isInteger(needQ)) {
        this.errors.push({
          ref: "needQ",
          error: "Введите количество выбираемых вопросов"
        });
      }
      if (needQ <= 0) {
        this.errors.push({
          ref: "needQ",
          error: "Количество выбираемых вопросов не должно быть меньше или равным 0"
        });
      }
      if (!this.trn.questions || !this.trn.questions.length) {
        this.errors.push({
          ref: "questions",
          error: "В тесте должен быть хотя бы 1 вопрос"
        });
      } else {
        for (let i = 0, array = this.trn.questions; i < array.length; i++) {
          if (!array[i].question || array[i].question === "") {
            this.errors.push({
              ref: "question" + i,
              error: "Введите текст вопроса"
            });
          }
          //
          if (!array[i].answers) {
            this.errors.push({
              ref: "question" + i,
              error: "Нужен хотя бы один вариант ответа"
            });
          } else {
            for (let j = 0, answers = array[i].answers; j < answers.length; j++) {

              if (!answers[j].answer || !answers[j].answer === "") {
                this.errors.push({
                  ref: "answer" + i + "_" + j,
                  error: "Введите текст ответа"
                });
              }
            }
          }
        }
      }
      return !this.errors.length;
    },
    removeAnswer(q, a) {
      this.trn.questions[q].answers.splice(a, 1);
    },
    removeQuestion(i) {
      this.trn.questions.splice(i, 1);
    },
    closePopup() {
      let popup = document.getElementById("to-user");
      popup.classList.add("hide");
    },
    openPopup() {
      let popup = document.getElementById("to-user");
      popup.classList.remove("hide");
    },
    createTrn(users) {
      let trns = users.map(e => createTrn(this.trn, e));
      this.$parent.addTrnUser(trns);
    }
  },
  computed: {
    isEdit() {
      return this.state.value != 1;
    }
  }

}
</script>

<style scoped>
.cartTrn {
  position: relative;
}

div[name="facet"] {
  position: absolute;
}

.menu-1 {
  top: 0.3em;
  right: 0.5em;
}

.menu-2 {
  top: 0;
  right: 0;
}

.butonbar-gray button:hover {
  background-color: #d7d7db;
}

.butonbar-padding button {
  padding: 1px;
}

.stikly {
  position: sticky;
  background-color: #20123a;
  line-height: 2.4em;
  color: #ffffff;
  top: 0;
  z-index: 1000;
}

.stikly-2 {
  position: sticky;
  background-color: rgba(10, 132, 255, .3);
  line-height: 2.4em;
  color: #ffffff;
  top: 2.4em;
  z-index: 999;
}

select {
  background-color: #d7d7db;
  border: 0;
  border-radius: 4px;
  line-height: 1.2;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 90px;
}

* {
  box-sizing: border-box;
}

textarea {
  width: 100%;
}

h3 {
  margin: 0;
}

h4 {
  margin: 0;
}

.data {
  padding: 0.5em;
}

label~* {
  margin-left: 5px;
}

label {
  color: ;
  font-weight: bold;
  font-size: 14px;
}

.row {
  display: flex;
}

.row>* {
  flex: 1;
}

div.spacer {
  width: 10px;
  height: 10px;
}

/*
form{
    display: flex;
    flex-direction: column;
}

.panel {
    display: flex;
    flex-direction: row;
    margin-bottom: 10px;
    align-items: center;
}*/


/*textarea {
  font-weight: normal;
  font-size: medium;
  border-color: #DEE4E7;
  border-style: solid;
  border-width: 1px;
  background-color: #FAFDFF;
  color: #333333;
  border: 1px solid #DEE4E7;
  padding: 1px 2px 1px 3px;
  margin: 1px;
  border-radius: 3px;

}*/
input:focus,
textarea:focus {
  outline: none !important;
  border: 1px solid #0a84ff;
  box-shadow: 0 0 3px #b5daff
}

input:disabled,
textarea:disabled {
  background-color: transparent;
  border-color: transparent;
}


input,
textarea {
  border: 1px solid #c1c8c7;
  box-shadow: 0 0 3px transparent;
  border-radius: 4px;
  resize: none
}

input[type="number"] {
  width: 4rem;
}

/*
form span {
    display: block;
    color: transparent;
    font-size: small;
}
*/
.separator {
  width: 100%;
  height: 1px;
  background-color: #c1c8c7;
}

.relative {
  position: relative;

}

.bolder {
  font-weight: bolder;
}

.close {
  position: absolute;
  top: 1px;
  right: 1px;
}

#error-message {
  position: fixed;
  top: 20%;
  left: 10%;
  width: 80%;
  background-color: rgba(255, 0, 0, 0.5);
  z-index: 2000;
  /* opacity: 0; */
}

#to-user {
  position: fixed;
  top: 20%;
  left: 20%;
  width: 60%;
  background-color: white;
  box-shadow: 12px 12px 12px 12px rgba(12, 12, 200, .2);
  border-radius: 0.5rem;
  z-index: 2000;
  /* opacity: 0; */
}

#error-message.hide,
#to-user.hide {
  transform: scale(0);
}
</style>
