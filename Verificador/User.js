import {createServer} from 'node:http'


let nome = 'Yasmin'
let email = 'Yasmin24@gmail.com'
let senha = 'mylove2442'

const server = createServer((request, response) =>{

    let find_user = users()
     if (
         find_user.nameuser == nome &&
         find_user.email == email &&
         find_user.password == senha
     ) {
        response.write('Conta permitida!')
        
    }else {
        response.write('Conta nao permitida')
    }
    return response.end()
})

function users () {
    let user = {
        nameuser: 'Yasmin',
        email: 'Yasmin24@gmail.com',
        password: 'mylove2442',
        id: '3298472384529'
    }
    return user
}

server.listen(3001, () => {
    console.log('Rodando seu servidor.')
})