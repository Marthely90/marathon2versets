
function setQuestion(code){
    let verseOfCode = tableau_code.find(element => element.code === code)
    // console.log(verseOfCode)
    clearQuestion('<img src="./vendor/animate/Ellipsis.gif" height="150em"/>')
    jQuery.ajax({
        url:'http://getbible.net/json',
        dataType: 'jsonp',
        data: `version=ls1910&text=${verseOfCode.url_ref}`,
        jsonp: 'getbible',
        success:function(json){
            let verse_txt = json.book[0].chapter[`${verseOfCode.verse}`].verse
            clearQuestion(verse_txt)
            true_answered = verseOfCode.book + '' +verseOfCode.chapiter +':'+verseOfCode.verse
            pauseTimer();
            document.getElementById('codeQuestion').setAttribute('disabled','')
            document.getElementById('validationBTN').removeAttribute('hidden','')
            document.getElementById('btn-msg').setAttribute('hidden','')
            console.log(true_answered)
        }
    });
}