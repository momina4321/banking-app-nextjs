export function getUser() {

    const activeUser = localStorage.getItem('user');

    if (activeUser) { //if there is a user in the storage
        const parsedUser = JSON.parse(activeUser);
        return parsedUser
    }
    else {
        return null
    }
}

type userdata = {
    fname: string,
    lname: string,
    email: string,
    password: string,
    SSN: string,
    dob: string,
    address: string,
    state: string,
    postalcode: string
}

export function addUser(data: userdata) {
    localStorage.setItem('user', JSON.stringify(data))
}
