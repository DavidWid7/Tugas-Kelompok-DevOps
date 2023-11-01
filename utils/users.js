const users = [];

// Join user to chat
function userJoin(id, username, admin) {
    const user = { id, username, admin };
    users.push(user);
    return user;
}

// Get current user
function getCurrentUser(id) {
    return users.find(user => user.id === id);
}

// User leaves chat
function userLeave(id) {
    const index = users.findIndex(user => user.id === id);
    if (index !== -1) {
        return users.splice(index, 1)[0];
    }
}

// Get room users
function getRoomUsers(admin) {
    return users.filter(user => user.admin === admin);
}

export {
    userJoin,
    getCurrentUser,
    userLeave,
    getRoomUsers
}
