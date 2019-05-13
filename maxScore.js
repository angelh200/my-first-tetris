function updateMaxScore(score) {
    let maxScore = Number(getCookie("maxScore"));
    if(!maxScore || maxScore < score) {
        maxScore = score;
    }
    setCookie("maxScore", String(maxScore));
    document.getElementById('max-score').innerText = maxScore;
}