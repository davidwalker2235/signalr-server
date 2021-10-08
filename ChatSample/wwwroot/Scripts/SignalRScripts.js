var updateName = (connection) => {
    let name = document.getElementById('userName').value;
    let userNameElement = document.getElementById('userNameDiv');
    userNameElement.innerHTML = name;
    if (name || !name.length === 0) {
        let timeLeft = 5;
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
        if (timeLeft === 0) {
            clearInterval(interval);
            renderRunScreen(connection);
        }
        timeLeft = timeLeft - 1;
        connection.invoke('updateCounter', timeLeft);
    }, 1000)
}