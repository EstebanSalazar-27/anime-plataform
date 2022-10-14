import fs from 'fs'
const users = fs.readFileSync("server/json/users.json", 'utf-8', (err) => {
    if (err) { console.log(err) }
})
let usersParsed = JSON.parse(users)

export default function getUserCallback(_req, res) {
    // here we have to return as response all the users 
    const queryId = _req.params.id
    console.log(queryId)
    const userRequired = JSON.stringify(usersParsed.users.find(user => user.id === queryId))
    if (!userRequired) {
        return res.status(204).end('mira papito aqui no hay usuario que coincida con el id que me pasaste')
    }
    res.send(userRequired)
}