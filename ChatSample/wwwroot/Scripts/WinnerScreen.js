var renderWinnerScreen = (winner) => {
    var coverImage = document.createElement('img');
    coverImage.setAttribute("class", "coverImage");

    var logoRoot = document.createElement('div');
    logoRoot.setAttribute("class", "logoRoot");
    var logoImage = document.createElement('img');
    logoImage.setAttribute("class", "logoImage");
    logoImage.setAttribute("src", "ERNILogo.png");
    logoRoot.appendChild(logoImage);

    let winnerName = document.createElement('div');
    winnerName.setAttribute("class", "winner");
    winnerName.innerHTML = `${winner} YOU WON!!`;
    winnerName.setAttribute("id", "winner");

    let email = document.createElement('div');
    winnerName.setAttribute("class", "email");
    winnerName.innerHTML = "email@email.com";
    winnerName.setAttribute("id", "email");


    var inputNameRoot = document.getElementById('inputNameRoot');
    inputNameRoot.innerHTML = '';
    inputNameRoot.appendChild(coverImage);
    inputNameRoot.appendChild(logoRoot);
    inputNameRoot.appendChild(winnerName);
    inputNameRoot.appendChild(email);
}