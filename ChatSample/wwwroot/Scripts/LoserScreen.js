var renderLoserScreen = () => {
    var coverImage = document.createElement('img');
    coverImage.setAttribute("class", "coverImage");

    var logoRoot = document.createElement('div');
    logoRoot.setAttribute("class", "logoRoot");
    var logoImage = document.createElement('img');
    logoImage.setAttribute("class", "logoImage");
    logoImage.setAttribute("src", "ERNILogo.png");
    logoRoot.appendChild(logoImage);

    let loser = document.createElement('div');
    loser.setAttribute("class", "loserText");
    loser.innerHTML = "Sorry, you LOST :-(";
    loser.setAttribute("id", "loser");

    var inputNameRoot = document.getElementById('pageRoot');
    inputNameRoot.innerHTML = '';
    inputNameRoot.appendChild(coverImage);
    inputNameRoot.appendChild(logoRoot);
    inputNameRoot.appendChild(loser);
}