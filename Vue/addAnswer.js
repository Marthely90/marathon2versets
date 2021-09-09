// const axios = require('axios').default

function addAnswer(code, user, book, chapiter, verse){
    //LODER GIF
    clearQuestion('<img src="./vendor/animate/Ellipsis.gif" height="150em"/>')
    let pts = calcul_des_points(code,{book:book, chapiter:chapiter, verse:verse})
    // return console.log(code, user, book, chapiter, verse, pts, 'added')

    axios.post(sheetdb_url,{
        "data": {
            "code": code,
            "user": user,
            "TOTAL_POINTS": pts.total,
            "EQUIPE": formule.EQUIPE
        }
    }).then( response => {
        console.log(response.data);
    });
}