
function setQuestion(code){
    let verseOfCode = tableau_code.find(element => element.code === code)
    verseOfCode.index = bookCode(verseOfCode.book)
    verseOfCode.chapiter = parseInt(verseOfCode.chapiter)
    verseOfCode.verse = parseInt(verseOfCode.verse)
    // console.log(verseOfCode);
    clearQuestion('<img src="./vendor/animate/Ellipsis.gif" height="150em"/>')
    let verse_txt = fr_apee[verseOfCode.index].chapters[(verseOfCode.chapiter-1)][(verseOfCode.verse-1)]
    // console.log(verse_txt); return
    clearQuestion(verse_txt)
    true_answered = verseOfCode.book + '' +verseOfCode.chapiter +':'+verseOfCode.verse
    pauseTimer();
    document.getElementById('codeQuestion').setAttribute('disabled','')
    document.getElementById('validationBTN').removeAttribute('hidden','')
    document.getElementById('btn-msg').setAttribute('hidden','')
    // console.log(true_answered)
}