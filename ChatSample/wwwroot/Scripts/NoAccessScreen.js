var renderNoAccessScreen = () => {
    var coverImage = document.createElement('img');
    coverImage.setAttribute("class", "coverImage");

    var logoRoot = document.createElement('div');
    logoRoot.setAttribute("class", "logoRoot");
    var logoImage = document.createElement('img');
    logoImage.setAttribute("class", "logoImage");
    logoImage.setAttribute("src", "ERNILogo.png");
    logoRoot.appendChild(logoImage);

    let timesUpText = document.createElement('div');
    timesUpText.setAttribute("class", "timesUpText");
    timesUpText.innerHTML = "Sorry, time'up";
    timesUpText.setAttribute("id", "timesUpText");

    var noAccessRoot = document.createElement('div');
    noAccessRoot.setAttribute("class", "pageRoot");
    noAccessRoot.setAttribute("id", "pageRoot");
    noAccessRoot.appendChild(logoRoot);
    noAccessRoot.appendChild(timesUpText);
    document.getElementById('container').appendChild(coverImage);
    document.getElementById('container').appendChild(noAccessRoot);
}