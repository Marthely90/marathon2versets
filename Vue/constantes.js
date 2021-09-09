//URL of the steelsheet connection API
const sheetdb_url = "https://sheetdb.io/api/v1/0w727pzl4snes"

//URL of the steelsheet connection API
const score_url = "https://sheetdb.io/api/v1/jtrde044df8p9"

//GET BIBLE VERSES (ex: https://getbible.net/json?passage=Jn3:16&version=ls1910)
const verseApi_url = "https://getbible.net/json?version=ls1910&passage=ls1910"


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
    {code:'A01',book : 'GENESE', chapiter : '1', verse : '1', url_ref : 'gen1:1'},
    {code:'A02',book : 'GENESE', chapiter : '1', verse : '2', url_ref : 'gen1:2'},
    {code:'A03',book : 'GENESE', chapiter : '1', verse : '3', url_ref : 'gen1:3'},
    {code:'A04',book : 'HEBREUX', chapiter : '11', verse : '1', url_ref : 'heb11:1'},
    {code:'A05',book : 'JEAN', chapiter : '3', verse : '16', url_ref : 'jn3:16'},
    {code:'A06',book : 'JOSUE', chapiter : '1', verse : '8', url_ref : 'jos1:8'},
    {code:'A07',book : 'MATTHIEU', chapiter : '28', verse : '19', url_ref : 'mat28:19'},
    {code:'A08',book : 'PSAUMES', chapiter : '23', verse : '1', url_ref : 'ps23:1'},
    {code:'A09',book : 'PSAUMES', chapiter : '37', verse : '4', url_ref : 'ps37:4'},
    {code:'A10',book : 'PSAUMES', chapiter : '1', verse : '1', url_ref : 'ps1:1'},

    {code:'B01',book : '2 CORINTHIENS', chapiter : '5', verse : '17', url_ref : '2cor5:17'},
    {code:'B02',book : 'GALATES', chapiter : '5', verse : '22', url_ref : 'gal5:22'},
    {code:'B03',book : '1 CORINTHIENS', chapiter : '13', verse : '13', url_ref : '1cor13:13'},
    {code:'B04',book : '1 TIMOTHEE', chapiter : '1', verse : '7', url_ref : '1tim1:7'},
    {code:'B05',book : '1 TIMOTHEE', chapiter : '4', verse : '12', url_ref : '1tim4:12'},
    {code:'B06',book : 'ACTES', chapiter : '1', verse : '8', url_ref : 'act1:8'},
    {code:'B07',book : 'EXODE', chapiter : '20', verse : '12', url_ref : 'ex20:12'},
    {code:'B08',book : 'JEAN', chapiter : '14', verse : '6', url_ref : 'jn14:6'},
    {code:'B09',book : 'JEREMIE', chapiter : '29', verse : '11', url_ref : 'jer29:11'},
    {code:'B10',book : 'JEREMIE', chapiter : '33', verse : '3', url_ref : 'jer33:3'},

    {code:'C01',book : 'ESAÏE', chapiter : '53', verse : '5', url_ref : 'esa53:5'},
    {code:'C02',book : 'GENESE', chapiter : '2', verse : '18', url_ref : 'gen2:18'},
    {code:'C03',book : 'PROVERBES', chapiter : '18', verse : '22', url_ref : 'pro18:22'},
    {code:'C04',book : 'PSAUMES', chapiter : '119', verse : '105', url_ref : 'ps119:105'},
    {code:'C05',book : '2 CHRONIQUES', chapiter : '7', verse : '14', url_ref : '2chr7:14'},
    {code:'C06',book : 'GENESE', chapiter : '50', verse : '20', url_ref : 'gen50:20'},
    {code:'C07',book : 'JOËL', chapiter : '2', verse : '28', url_ref : 'joe2:28'},
    {code:'C08',book : 'MATTHIEU', chapiter : '5', verse : '13', url_ref : 'mat5:13'},
    {code:'C09',book : 'MATTHIEU', chapiter : '5', verse : '14', url_ref : 'mat5:14'},
    {code:'C10',book : 'ROMAINS', chapiter : '10', verse : '17', url_ref : 'rom10:17'},
  ]