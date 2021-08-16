var updateName = (connection) => {
    let name = document.getElementById('userName').value;
    if (name || !name.length === 0) {
        let timeLeft = 5;
        connection.invoke('addUserToList', name);
        connection.invoke('sendUserNames');
        userName = name;

        renderCounterScreen(connection, timeLeft)
    }
}

var sendSingleUserValue = (event, connection, userName) => {
    // Call the Send method on the hub.
    connection.invoke('sendSingleUserValue', userName);

    event.preventDefault();
}

var myfunc = setInterval(function () {
    // code goes here
}, 1000)