var renderCounterScreen = (countdown) => {
    var coverImage = document.createElement('img');
    coverImage.setAttribute("class", "coverImage");

    var logoRoot = document.createElement('div');
    logoRoot.setAttribute("class", "logoRoot");
    var logoImage = document.createElement('img');
    logoImage.setAttribute("class", "logoImage");
    logoImage.setAttribute("src", "ERNILogo.png");
    logoRoot.appendChild(logoImage);

    let counter = document.createElement('div');
    counter.setAttribute("class", "countdown");
    counter.innerHTML = countdown;
    counter.setAttribute("id", "countdown");

    var inputNameRoot = document.getElementById('pageRoot');
    inputNameRoot.innerHTML = '';
    inputNameRoot.appendChild(coverImage);
    inputNameRoot.appendChild(logoRoot);
    inputNameRoot.appendChild(counter);
}