var team
const codeQuestion = document.querySelector('#codeQuestion'), book_feild = document.querySelector('#book_feild')
var Question = document.querySelector('#Question')
var answeredCode = [];

do{team = prompt('Quel est votre EQUIPE ?')}while(!team)
// get_all_scores(team.trim().toUpperCase())

const app = new Vue({
    el: '#app',
    data() {
      return {
        code:'',
        book:'',
        chapiter:'',
        verse:'',
        name:team.trim().toUpperCase()
      }
    },
      methods: {
        validate: function (){
          this.book = !this.book ? "AUCUNE": this.book
          this.chapiter = !this.chapiter ? 0 : this.chapiter
          this.verse = !this.verse ? 0 : this.verse
          addAnswer(this.code.trim().toUpperCase(), this.name, this.book, this.chapiter, this.verse)
          answeredCode.push(this.code)
          document.querySelector("#codeQuestion").removeAttribute('disabled')
          questions_codeA = filterQuestion(questions_codeA,answeredCode)
          questions_codeB = filterQuestion(questions_codeB,answeredCode)
          questions_codeC = filterQuestion(questions_codeC,answeredCode)
          clearQuestion(`REPONSE (${this.code}) ENVOYEE !<br/>${this.book} ${this.chapiter}:${this.verse}<br/>La bonne réponse était :<br/>${true_answered}`)
          this.code=''
          this.book=''
          this.chapiter=''
          this.verse=''
          document.getElementById('validationBTN').setAttribute('hidden','')
          document.getElementById('btn-msg').removeAttribute('hidden','')
        }
    }
  })
