let currentUser: string = 'Guest';

function setCurrentUser(newCurrentUser: string) {
    currentUser = newCurrentUser;
}

export { currentUser, setCurrentUser };