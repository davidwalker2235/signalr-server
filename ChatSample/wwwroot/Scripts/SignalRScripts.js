var updateName = (connection) => {
    let name = document.getElementById('userName').value;
    let userNameElement = document.getElementById('userNameDiv');
    userNameElement.innerHTML = name;
    if (name || !name.length === 0) {
        let timeLeft = ' ';
        connection.invoke('addUserToList', name);
        connection.invoke('sendUserNames');

        renderCounterScreen(timeLeft)
        startCountdown(connection, timeLeft);
    }
}

var sendSingleUserValue = (event, connection, userName = "") => {
    // Call the Send method on the hub.
    connection.invoke('sendSingleUserValue', userName);

    event.preventDefault();
}

var startCountdown = (connection, timeLeft) => {

    var interval = setInterval(() => {
        // IMPORTANTE::: 
        // este timeLeft tenemos que actualizarlo cada vez que la funcion [updateCountdown] del index.html se ejecuta!!
        // Preguntar a David!! 
        // IMPORTANTE:::
        if (timeLeft === 0) {
            clearInterval(interval);
            renderRunScreen(connection);
        }
        if (timeLeft == ' ') timeLeft = -1;
        //timeLeft = timeLeft - 1;
        connection.invoke('updateCounter', timeLeft);

    }, 1000)
}