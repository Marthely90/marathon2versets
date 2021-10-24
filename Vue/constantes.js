//URL of the steelsheet connection API
const sheetdb_url = "https://sheetdb.io/api/v1/10qfg4we1q767"

//URL of the steelsheet connection API
const score_url = "https://sheetdb.io/api/v1/chhmk4zehhlwq"

//GET BIBLE VERSES (ex: https://getbible.net/json?passage=Jn3:16&version=ls1910)
// const verseApi_url = "https://getbible.net/json?version=ls1910&passage=ls1910"


// EXCEL FORMULE for all oparions to make the add Data interactif with updating of scores
const formule = {
    // Book_pts:       '=SI(INDIRECT("$A"&LIGNE())<>"";SI(RECHERCHEV(INDIRECT("$A"&LIGNE());answersPlage;2;FAUX)=INDIRECT("$C"&LIGNE());1;0);"")',
    // Chapiter_pts:   '=SI(INDIRECT("$A"&LIGNE())<>"";SI(ET(RECHERCHEV(INDIRECT("$A"&LIGNE());answersPlage;3;FAUX)=INDIRECT("$D"&LIGNE());INDIRECT("$F"&LIGNE())=1);1;0);"")',
    // Verse_pts:      '=SI(INDIRECT("$A"&LIGNE())<>"";SI(ET(RECHERCHEV(INDIRECT("$A"&LIGNE());answersPlage;4;FAUX)=INDIRECT("$E"&LIGNE());INDIRECT("$G"&LIGNE())=1);1;0);"")',
    // Bonus_chapiter: '0', //=SI(INDIRECT("$A"&LIGNE())<>"";SI(ET(INDIRECT("$F"&LIGNE())=1;INDIRECT("$G"&LIGNE())=1);1;0);"")',
    // Bonus_verse:    '0', //=SI(INDIRECT("$A"&LIGNE())<>"";SI(ET(INDIRECT("$I"&LIGNE());INDIRECT("$H"&LIGNE()));2;0);"")',
    // TOTAL_POINTS:   '=SI(INDIRECT("$A"&LIGNE())<>"";SI(LEFTB(INDIRECT("$A"&LIGNE());1)="C";SOMME(INDIRECT("$F"&LIGNE()):INDIRECT("$J"&LIGNE()))*3;SI(LEFTB(INDIRECT("$A"&LIGNE());1)="B";SOMME(INDIRECT("$F"&LIGNE()):INDIRECT("$J"&LIGNE()))*2;SOMME(INDIRECT("$F"&LIGNE()):INDIRECT("$J"&LIGNE()))));"")',
    EQUIPE:         '=SI(INDIRECT("$B"&LIGNE())<>"";INDIRECT("$B"&LIGNE());"")'
}

//The list of all Provided QUESTIONS
var questions_codeA = [
    'A01','A02','A03','A04','A05','A06','A07','A08','A09','A10'//,'A11','A12','A13','A14','A15','A16','A17','A18','A19','A20','A21','A22','A23','A24','A25','A26','A27','A28','A29','A30'
]
var questions_codeB = [
    'B01','B02','B03','B04','B05','B06','B07','B08','B09','B10'//,'B11','B12','B13','B14','B15','B16','B17','B18','B19','B20','B21','B22','B23','B24','B25','B26','B27','B28','B29','B30'
]
var questions_codeC = [
    'C01','C02','C03','C04','C05','C06','C07','C08','C09','C10'//,'C11','C12','C13','C14','C15','C16','C17','C18','C19','C20','C21','C22','C23','C24','C25','C26','C27','C28','C29','C30'
]

    //The list of all the bible books
const bible_books_AT = [
    'GENESE',
    'EXODE',
    'LEVITIQUE',
    'NOMBRES',
    'DEUTERONOME',
    'JOSUE',
    'JUGES',
    'RUTH',
    '1 SAMUEL',
    '2 SAMUEL',
    '1 ROIS',
    '2 ROIS',
    '1 CHRONIQUES',
    '2 CHRONIQUES',
    'ESDRAS',
    'NEHEMIE',
    'ESTHER',
    'JOB',
    'PSAUMES',
    'PROVERBES',
    'ECCLESIASTE',
    'CANTIQUE DES CANTIQUES',
    'ESAÏE',
    'JEREMIE',
    'LAMENTATIONS',
    'EZECHIEL',
    'DANIEL',
    'OSEE',
    'JOËL',
    'AMOS',
    'ABDIAS',
    'JONAS',
    'MICHEE',
    'NAHOUM',
    'HABACUC',
    'SOPHONIE',
    'AGGEE',
    'ZACHARIE',
    'MALACHIE'
]
const bible_books_NT = [
    'MATTHIEU',
    'MARC',
    'LUC',
    'JEAN',
    'ACTES',
    'ROMAINS',
    '1 CORINTHIENS',
    '2 CORINTHIENS',
    'GALATES',
    'EPHESIENS',
    'PHILIPPIENS',
    'COLOSSIENS',
    '1 THESSALONICIENS',
    '2 THESSALONICIENS',
    '1 TIMOTHEE',
    '2 TIMOTHEE',
    'TITE',
    'PHILEMON',
    'HEBREUX',
    'JACQUES',
    '1 PIERRE',
    '2 PIERRE',
    '1 JEAN',
    '2 JEAN',
    '3 JEAN',
    'JUDE',
    'APOCALYPSE'
]

var true_answered //,answeredCode = []

var filterQuestion = (list,toRemove = answeredCode) => {
    const filteredArray = list.filter(function(x) { 
        return toRemove.indexOf(x) < 0;
      });
    return filteredArray
}

//FUNCTION TOO ADD SOMETHING ON THE QUESTION AREA "--Vesrion--"
function clearQuestion(msg=''){
    document.getElementById('Question').innerHTML  = msg
  }

  var tableau_code = [
    {code:'A01',book : 'GENESE', chapiter : '1', verse : '1'},
    {code:'A02',book : 'GENESE', chapiter : '1', verse : '2'},
    {code:'A03',book : 'GENESE', chapiter : '1', verse : '3'},
    {code:'A04',book : 'HEBREUX', chapiter : '11', verse : '1'},
    {code:'A05',book : 'JEAN', chapiter : '3', verse : '16'},
    {code:'A06',book : 'JOSUE', chapiter : '1', verse : '8'},
    {code:'A07',book : 'MATTHIEU', chapiter : '28', verse : '19'},
    {code:'A08',book : 'PSAUMES', chapiter : '23', verse : '1'},
    {code:'A09',book : 'PSAUMES', chapiter : '37', verse : '4'},
    {code:'A10',book : 'PSAUMES', chapiter : '1', verse : '1'},

    {code:'B01',book : '2 CORINTHIENS', chapiter : '5', verse : '17'},
    {code:'B02',book : 'GALATES', chapiter : '5', verse : '22'},
    {code:'B03',book : '1 CORINTHIENS', chapiter : '13', verse : '13'},
    {code:'B04',book : '1 TIMOTHEE', chapiter : '1', verse : '7'},
    {code:'B05',book : '1 TIMOTHEE', chapiter : '4', verse : '12'},
    {code:'B06',book : 'ACTES', chapiter : '1', verse : '8'},
    {code:'B07',book : 'EXODE', chapiter : '20', verse : '12'},
    {code:'B08',book : 'JEAN', chapiter : '14', verse : '6'},
    {code:'B09',book : 'JEREMIE', chapiter : '29', verse : '11'},
    {code:'B10',book : 'JEREMIE', chapiter : '33', verse : '3'},

    {code:'C01',book : 'ESAÏE', chapiter : '53', verse : '5'},
    {code:'C02',book : 'GENESE', chapiter : '2', verse : '18'},
    {code:'C03',book : 'PROVERBES', chapiter : '18', verse : '22'},
    {code:'C04',book : 'PSAUMES', chapiter : '119', verse : '105'},
    {code:'C05',book : '2 CHRONIQUES', chapiter : '7', verse : '14'},
    {code:'C06',book : 'GENESE', chapiter : '50', verse : '20'},
    {code:'C07',book : 'JOËL', chapiter : '2', verse : '28'},
    {code:'C08',book : 'MATTHIEU', chapiter : '5', verse : '13'},
    {code:'C09',book : 'MATTHIEU', chapiter : '5', verse : '14'},
    {code:'C10',book : 'ROMAINS', chapiter : '10', verse : '17'},
  ],
allBooks = bible_books_AT.concat(bible_books_NT),
bookCode = (book) => { return allBooks.indexOf(book) }

function fill_select_question(list){
let questListSelect = document.getElementById('codeQuestion');
let selectText_A = '<optgroup label="GROUPE A.##">';
let selectText_B = '<optgroup label="GROUPE B.##">';
let selectText_C = '<optgroup label="GROUPE C.##">';
let selectText = '<option value="">-- CODE QUESTIONS --</option>';
    list.forEach(element => {
        if(element.charAt(0) ==='A'){
            selectText_A += `<option :value="${element}" >${element}</option>`;
        }else if(element.charAt(0) ==='B'){
            selectText_B += `<option :value="${element}" >${element}</option>`;
        }else if(element.charAt(0) ==='C'){
            selectText_C += `<option :value="${element}" >${element}</option>`;
        }
    });
    selectText_A +="</optgroup>";
    selectText_B +="</optgroup>";
    selectText_C +="</optgroup>";
    selectText += selectText_A + selectText_B + selectText_C;
    questListSelect.innerHTML = selectText;
    // console.log(selectText);
    // return selectText;
}

function fill_select_book(){
    let bookSelect = document.getElementById('book_feild');
    let selectAT = '<optgroup label="Ancien Testament">';
    let selectNT= '<optgroup label="Nouveau Testament">';
    let selectbook = '<option value="">-- LIVRE --</option>';
    bible_books_AT.forEach(element => {
        selectAT += `<option :value="${element}" >${element}</option>`;
        });
        selectAT +="</optgroup>";
    bible_books_NT.forEach(element => {
        selectNT += `<option :value="${element}" >${element}</option>`;
        });
        selectNT +="</optgroup>";
        selectbook += selectAT + selectNT;
        bookSelect.innerHTML = selectbook;
}

var template_tableScore = (list) =>{
    let tableScore = '<table style="width:100%">'
    list.forEach(element => {
        tableScore += `
        <tr>
            <td>${element.name}</td>
            <td>${element.score}Pts</td>
        </tr>
        `;
    });
    return tableScore += '</table>';
}