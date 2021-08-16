var renderCounterScreen = (connection, countdown) => {
    let timeLeft = countdown;
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

    var inputNameRoot = document.getElementById('inputNameRoot');
    inputNameRoot.innerHTML = '';
    inputNameRoot.appendChild(coverImage);
    inputNameRoot.appendChild(logoRoot);
    inputNameRoot.appendChild(counter);

    var interval = setInterval(() => {
        var countdown = document.getElementById('countdown');
        if (timeLeft === 0) {
            clearInterval(interval);
            renderRunScreen(connection);
        }
        timeLeft = timeLeft - 1;
        countdown.innerHTML = timeLeft;
    }, 1000)
}