const express = require('express')
const { PrismaClient } = require('./generated/prisma');
const prisma = new PrismaClient();
const cors = require('cors');

const app = express()
const port = process.env.PORT || 3000

app.use(cors())
app.use(express.json())

app.post('/addElementTodos', async (req, res) =>{
   const {text} = req.body
   const newTodo = await prisma.todoList.create({
    data: {text}
   })
   res.status(201).json(newTodo)
})

app.get('/findElementTodos', async (req,res) =>{
    const elementTodo = await prisma.todoList.findMany()
    res.status(200).json(elementTodo)
})

app.delete('/deleteTodos/:id', async (req,res) =>{
    const id =  parseInt(req.params.id)
    const elementDelete = await  prisma.todoList.delete({
        where: {id}
    })
    res.status(204).send()
})

app.listen(port, () => 
  console.log("Serveur Todo App lancé sur http://localhost:%d", port)
)
