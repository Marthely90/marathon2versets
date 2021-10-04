var team
const codeQuestion = document.querySelector('#codeQuestion'), book_feild = document.querySelector('#book_feild')
var Question = document.querySelector('#Question')
var answeredCode = [], pointsCumul = 0;

do{team = prompt('Quel est votre EQUIPE ?')}while(!team)
document.querySelector('#playerName').innerHTML = team.trim().toUpperCase();
var InputName = document.querySelector("input[name='Pname']");
InputName.value = team.trim().toUpperCase();
fill_select_book();


var question_all_code = questions_codeA.concat(questions_codeB.concat(questions_codeC));
get_all_scores(team.trim().toUpperCase());
// console.log(fill_select_question(question_all_code));



function validate(){
    var selectValue = {
        book : document.getElementById('book_feild').value,
        chapiter : document.getElementById('chapiter_feild').value,
        verse : document.getElementById('verse_feild').value,
        name : document.getElementById('Pname').value,
        code : document.getElementById('codeQuestion').value,
    }
    // console.log(selectValue); return
    selectValue.book = !selectValue.book ? "AUCUNE": selectValue.book;
    selectValue.chapiter = !selectValue.chapiter ? 0 : selectValue.chapiter;
    selectValue.verse = !selectValue.verse ? 0 : selectValue.verse;
    addAnswer(selectValue.code.trim().toUpperCase(), selectValue.name, selectValue.book, selectValue.chapiter, selectValue.verse);
    answeredCode.push(selectValue.code);
    document.querySelector("#codeQuestion").removeAttribute('disabled');
    question_all_code = filterQuestion(question_all_code,answeredCode);
    clearQuestion(`REPONSE (${selectValue.code}) ENVOYEE !<br/>${selectValue.book} ${selectValue.chapiter}:${selectValue.verse}<br/>La bonne réponse était :<br/>${true_answered}`);
    fill_select_question(question_all_code);
    fill_select_book();

    document.getElementById('chapiter_feild').placeholder='chapitre';
    document.getElementById('verse_feild').placeholder='verset';
    
    document.getElementById('validationBTN').setAttribute('hidden','');
    document.getElementById('btn-msg').removeAttribute('hidden','');
}


// const app = new Vue({
//     el: '#app',
//     data() {
//       return {
//         code:'',
//         book:'',
//         chapiter:'',
//         verse:'',
//         name:team.trim().toUpperCase()
//       }
//     },
//       methods: {
//         validate: function (){
//           this.book = !this.book ? "AUCUNE": this.book
//           this.chapiter = !this.chapiter ? 0 : this.chapiter
//           this.verse = !this.verse ? 0 : this.verse
//           addAnswer(this.code.trim().toUpperCase(), this.name, this.book, this.chapiter, this.verse)
//           answeredCode.push(this.code)
//           document.querySelector("#codeQuestion").removeAttribute('disabled')
//           // questions_codeA = filterQuestion(questions_codeA,answeredCode)
//           // questions_codeB = filterQuestion(questions_codeB,answeredCode)
//           // questions_codeC = filterQuestion(questions_codeC,answeredCode)
//           clearQuestion(`REPONSE (${this.code}) ENVOYEE !<br/>${this.book} ${this.chapiter}:${this.verse}<br/>La bonne réponse était :<br/>${true_answered}`)
//           this.code=''
//           this.book=''
//           this.chapiter=''
//           this.verse=''
//           document.getElementById('validationBTN').setAttribute('hidden','')
//           document.getElementById('btn-msg').removeAttribute('hidden','')
//         }
//     }
//   })
