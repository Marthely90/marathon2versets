// const axios = require('axios').default

function calcul_des_points(code, reponse){
    let verseOfCode = tableau_code.find(element => element.code === code),
    point_book = verseOfCode.book === reponse.book ? 1 : 0,
    point_chapiter = (point_book !== 0) ? (verseOfCode.chapiter === parseInt(reponse.chapiter)) ? 1 : 0 : 0,
    point_verse = (point_chapiter !== 0) ? (verseOfCode.verse === parseInt(reponse.verse)) ? 1 : 0 : 0,
    point_bonus = (code.charAt(0) === 'C') ? 3 : (code.charAt(0) === 'B') ? 2 : 1,
    point_total = (point_book + point_chapiter + point_verse) * point_bonus;
    // console.log(verseOfCode, reponse);
    // console.log(point_bonus, point_book, point_chapiter, point_verse, point_total);
    return {book:point_book, chapiter: point_chapiter, verse: point_verse, bonus: point_bonus, total: point_total}
}

function get_all_scores(connected_user){
    clearQuestion('<img src="./vendor/animate/Ellipsis.gif" height="150em"/>')
    let userPoints = {pts:0, code:[]}
    axios.get(`${score_url}?sort_by=user&sort_order=asc`)
    .then( response => {
        response.data.forEach(element => {
            if(element.user === connected_user){
                userPoints.pts += parseInt(element.TOTAL_POINTS),
                userPoints.code.push(element.code);
            }
        });
        if(userPoints.pts !==0){
            clearQuestion(`Votre dernier Score était : ${userPoints.pts} vous avez répondu à ${userPoints.code.length} question(s). Elles ne figureront plus sur la liste`)
            userPoints.code.forEach(element => {
                answeredCode.push(element);
                question_all_code = filterQuestion(question_all_code,answeredCode);
            });
        }else{
            clearQuestion(`BIENVENUE : ${team}`)
            answeredCode = [];
        }
        fill_select_question(question_all_code)
    });
}