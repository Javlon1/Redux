const initialState = [
    {
        id:1,
        firstName: '',
        lastName: '',
        tel: '',
        email: '',
        address: '',
        userName: '',
        password: ''
    }
]

const Users = (state=initialState, action) => {
    const item = action.payload

    switch(action.type){
        case 'NAME':
            state[0].firstName = item.firstName
            state[0].lastName = item.lastName
            return state
        case 'CONTACT':
            state[0].tel = item.tel
            state[0].email = item.email
            state[0].address = item.address
            return state
        case 'PASSWORD':
            state[0].userName = item.userName
            state[0].password = item.password
            return state
        default:
            return state
    }
}

export default Users