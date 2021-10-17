var renderInputName = () => {
    let enterYourNameText = document.createElement('div');
    enterYourNameText.setAttribute("class", "enterYourNameText");
    enterYourNameText.innerHTML = 'Enter Your Name';

    var logoRoot = document.createElement('div');
    logoRoot.setAttribute("class", "logoRoot");
    var logoImage = document.createElement('img');
    logoImage.setAttribute("class", "logoImage");
    logoImage.setAttribute("src", "ERNILogo.png");
    logoRoot.appendChild(logoImage);

    let inputName = document.createElement("INPUT");
    inputName.setAttribute("class", "nameInput");
    inputName.setAttribute("type", "text");
    inputName.setAttribute("id", "userName");

    let btn = document.createElement("button");
    btn.className = "playButton";
    btn.innerHTML = "PLAY!";
    btn.type = "submit";
    btn.name = "formBtn";
    btn.id = "sendUserName";

    var coverImage = document.createElement('img');
    coverImage.setAttribute("class", "coverImage");

    var inputNameRoot = document.createElement('div');
    inputNameRoot.setAttribute("class", "pageRoot");
    inputNameRoot.setAttribute("id", "pageRoot");
    inputNameRoot.appendChild(logoRoot);
    inputNameRoot.appendChild(enterYourNameText);
    inputNameRoot.appendChild(inputName);
    inputNameRoot.appendChild(btn);
    document.getElementById('container').appendChild(coverImage);
    document.getElementById('container').appendChild(inputNameRoot);
}