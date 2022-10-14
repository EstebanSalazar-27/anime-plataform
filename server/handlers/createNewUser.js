import fs from 'fs'
import { v4 } from 'uuid'

const users = fs.readFileSync("server/json/users.json", 'utf-8', (err) => {
    if (err) { console.log(err) }
})
let usersParsed = JSON.parse(users)

function addNewUserToJson(jsonPath, newUser) {
    fs.writeFileSync(jsonPath, newUser, (err) => {
        if (err) return console.log(err)
        else console.log(newUser)
    })
}
export default function postUserCallback(_req, res) {
    // here we have to put into the users json a new user
    const newUser = {
        ..._req.body,
        id: v4(),
        registeredAt: new Date()
    }
    usersParsed.users.push(newUser)
    let newUserAdded = JSON.stringify(usersParsed, null, 2)
    addNewUserToJson('server/json/users.json', newUserAdded)
    res.send(newUser)
}