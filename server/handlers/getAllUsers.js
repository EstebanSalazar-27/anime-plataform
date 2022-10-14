import fs from 'fs'
const users = fs.readFileSync("server/json/users.json", 'utf-8', (err) => {
    if (err) { console.log(err) }
})
let usersParsed = JSON.parse(users)

export default function getAllUsersCallback(_req, res) {
    res.send(JSON.stringify(usersParsed.users))
}