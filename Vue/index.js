var team
const codeQuestion = document.querySelector('#codeQuestion'), book_feild = document.querySelector('#book_feild')
var Question = document.querySelector('#Question')
var answeredCode = [], pointsCumul = 0, bestPlayer = {score:0, name:''};

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
    // clearQuestion(`REPONSE (${selectValue.code}) ENVOYEE !<br/>${selectValue.book} ${selectValue.chapiter}:${selectValue.verse}<br/>La bonne réponse était :<br/>${true_answered}`);
    clearQuestion(`La bonne réponse était :<br/>${true_answered}`);
    fill_select_question(question_all_code);
    fill_select_book();

    document.getElementById('chapiter_feild_content').innerHTML = '<input id="chapiter_feild" class="input100" type="number" name="chapiter" placeholder="chapitre"/>';
    document.getElementById('verse_feild_content').innerHTML='<input id="verse_feild" class="input100" type="number" v-model="verse" name="verse" min=1 max=999 placeholder="verset">';
    
    document.getElementById('validationBTN').setAttribute('hidden','');
    document.getElementById('btn-msg').removeAttribute('hidden','');
}