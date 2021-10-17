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

    let winnerText = document.createElement('div');
    winnerText.setAttribute("class", "winnerText");
    winnerText.innerHTML = "To claim your prize send an email to the following email address:";
    winnerText.setAttribute("id", "winnerText");

    let email = document.createElement('a');
    email.setAttribute("class", "email");
    email.innerHTML = "cada@erni-espana.es";
    email.setAttribute("id", "email");
    email.setAttribute("href", "mailto:cada@erni-espana.es");


    var inputNameRoot = document.getElementById('pageRoot');
    inputNameRoot.innerHTML = '';
    inputNameRoot.appendChild(coverImage);
    inputNameRoot.appendChild(logoRoot);
    inputNameRoot.appendChild(winnerName);
    inputNameRoot.appendChild(winnerText);
    inputNameRoot.appendChild(email);
}