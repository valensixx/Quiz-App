const username = document.getElementById('username');
const saveScoreBtn = document.getElementById('saveScoreBtn');
const finalScore = document.getElementById('finalScore');
const mostRecentScore = localStorage.getItem('mostRecentScore');
finalScore.innerHTML = mostRecentScore;

username.addEventListener('keyup', () =>{
    //console.log(username.value);
    saveScoreBtn.disabled = !username.value; //if there is no unput in the input field the button will be disabled.
});

saveHighScore = (e) => {
    console.log("clicked the save button!");
    e.preventDefault();
};