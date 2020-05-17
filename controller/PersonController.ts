interface Person {
    id: String,
    fullname: String,
    email: String
}

let DataPerson: Array<Person> = [
    {
        id: 'p1',
        fullname: 'Diamsyah',
        email: 'didadiamsyah02@gmail.com'
    },
    {
        id: 'p2',
        fullname: 'Diamsyah M Dida',
        email: 'diamsyahmd@gmail.com'
    }
]

const getPerson = async ({response} : {response: any}) => {
    response.status = 200
    response.body = DataPerson
}

const detailPerson = async ({params, response} : {params: any; response: any}) => {
    const persons: Person | undefined = DataPerson.filter((data) => data.id = params.id)[0]
    if(persons){
        response.status = 200
        response.body = persons
    }else{
        response.status = 404
        response.body = { message: 'Person not found !' }
    }
}

const addPerson = async ({request, response} : {request: any; response: any}) => {
    try{
        const body = await request.body()
        const persons: Person = JSON.parse(body.value)
        DataPerson.push(persons)

        response.status = 200
        response.body = { message: 'Person has been added !' }
    }catch (error) {
        response.status = 400
        response.body = { message: error }
    }
}

const updatePerson = async ({params, request, response} : {params: any; request: any; response: any}) => {
    let persons: Person = DataPerson.filter((data) => data.id == params.id)[0]
    if(persons){
        const body = await request.body()
        let parsed = JSON.parse(body.value)
        const updatePerson: { fullname?: string; email?: string } = parsed
        persons = { ...persons, ...updatePerson }
        DataPerson = [...DataPerson.filter((data) => data.id != params.id), persons]

        response.status = 200
        response.body = { message: 'Person has been updated !', data: parsed }
    }else{
        response.status = 404
        response.body = { message: `Person not found` }
    }
}

const deletePerson = async ({params, response} : {params: any; response: any}) => {
    DataPerson = DataPerson.filter((data) => data.id != params.id)
    response.status = 200
    response.body = { message: 'Person has been deleted !' }
}

export {
    getPerson,
    detailPerson,
    addPerson,
    updatePerson,
    deletePerson
}

/** 
 * Diamsyah M Dida
 * latihan membuat restful api
 * dengan deno
*/