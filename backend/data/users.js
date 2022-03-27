import bcrypt from 'bcryptjs'
const users=[
    {
        name:"Admin User",
        email:"admin@example.com",
        password:bcrypt.hashSync("123456",10),
        isAdmin: true
    },
    {
        name:"Nairubi",
        email:"nairubi@example.com",
        password:bcrypt.hashSync("123456",10),
    },
    {
        name:"Embii",
        email:"embii@example.com",
        password:bcrypt.hashSync("123456",10),
    }
]


export default users;