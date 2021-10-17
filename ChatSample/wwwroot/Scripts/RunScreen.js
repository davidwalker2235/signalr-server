var renderRunScreen = (connection) => {
    let userName = document.getElementById('userNameDiv').innerHTML;

    var coverImage = document.createElement('img');
    coverImage.setAttribute("class", "coverImage");

    var logoRoot = document.createElement('div');
    logoRoot.setAttribute("class", "logoRoot");
    var logoImage = document.createElement('img');
    logoImage.setAttribute("class", "logoImage");
    logoImage.setAttribute("src", "ERNILogo.png");
    logoRoot.appendChild(logoImage);

    let btn = document.createElement("button");
    btn.className = "runButton";
    btn.innerHTML = "RUN!";
    btn.type = "submit";
    btn.name = "formBtn";
    btn.id = "runButton";

    var inputNameRoot = document.getElementById('pageRoot');
    inputNameRoot.innerHTML = '';
    inputNameRoot.appendChild(coverImage);
    inputNameRoot.appendChild(logoRoot);
    inputNameRoot.appendChild(btn);

    document.getElementById('runButton').addEventListener('click', () => {
        sendSingleUserValue(event, connection, userName)
    });
}