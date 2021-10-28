const mongoose = require('mongoose')

const url = 'mongodb://localhost:27017/MongoCRUD'

mongoose.connect(url)
.then( ()=> console.log('Conectado a Mongo'))
.catch( (e)=> console.log('Error de conexion:' +e))

const personSchema = mongoose.Schema({
    nombre:String,
    edad:Number,
    pais:String
})

const PersonModel = mongoose.model('persons', personSchema)

//Read
const allperson = async () => {
    const persons = await PersonModel.find()
    console.log('Personas: '+ persons)
    console.log('______________________________')
}

//Create User - C
const create = async () => {
    const person = new PersonModel({
        nombre: "Gloria",
        edad: 22,
        pais: "Venezuela"
    })
    const resultado = await person.save()
    console.log("create: "+person)
    console.log('______________________________')
}

//Delete one
const deleteOne = async (id) => {
    const person = await PersonModel.deleteOne({_id: id})
    console.log("delete: "+person);
    console.log('______________________________')
}

//Update one

const updateOne = async (id) => {
    const person = await PersonModel.updateMany({_id: id},
        {
             $set:{
                 nombre: "Tania",
                 edad: 20,
                 pais: "España"
             }
        })
    console.log("update: "+person)
    console.log('______________________________')
}
//deleteOne()
//create()
//updateOne("6179d505e41823a2d4d287bd")
allperson()