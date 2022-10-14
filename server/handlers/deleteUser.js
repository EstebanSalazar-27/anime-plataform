import fs from 'fs'
const users = fs.readFileSync("server/json/users.json", 'utf-8', (err) => {
    if (err) { console.log(err) }
})
let usersParsed = JSON.parse(users)
console.log(usersParsed, 'from deletes')

function deleteUserFromJson(jsonPath, newUser) {
    fs.writeFileSync(jsonPath, newUser, (err) => {
        if (err) return console.log(err)
        else return console.log('user was removed with success')
    })
}
export default function deleteUserCallback(_req, res) {
    const id = _req.params.id
    // if the id matching with an specific user then perfom a filter to the user json and return the users with an id different than the id passed by params
    const isUserExist = usersParsed.users.find(user => user.id === id)
    // perfoming filter
    const filteredOutUser = usersParsed.users.filter(user => user.id !== id)
    // now we have the filtered out  users 
    console.log(filteredOutUser, 'here')
    usersParsed.users = [...filteredOutUser]
    
    if (typeof isUserExist === 'undefined') {
        console.log('the user is not exist')
        return res.status(204).json({
            message: 'the user is not exists'
        })
    }
    deleteUserFromJson('server/json/users.json', JSON.stringify(usersParsed, null, 2))
    console.log('user was removed')
    res.send(filteredOutUser)


}