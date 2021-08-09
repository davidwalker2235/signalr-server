var updateName = (connection) => {
    let name = document.getElementById('userName').value;
    if (name || !name.length === 0) {
        connection.invoke('addUserToList', name);
        connection.invoke('sendUserNames');
        userName = name;

        renderRunScreen(connection);
    }
}

var sendSingleUserValue = (event, connection, userName) => {
    // Call the Send method on the hub.
    connection.invoke('sendSingleUserValue', userName);

    event.preventDefault();
}