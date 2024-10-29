import fs  from 'node:fs/promises'
import express from 'express';

const app = express();
app.use((req,res,next)=>{
    res.setHeader('Access-Control-Allow-Origin','*')
    res.setHeader('Access-Control-Allow-Methods','GET')
    res.setHeader('Access-Control-Allow-Headers','Content-Type')
    next()
})
app.get('/expenses',async (req,res)=>{
    const fileContent = await fs.readFile('./data/expenses.json')
    const expensesData =JSON.parse(fileContent)
    res.status(200).json({expenses:expensesData})
})

app.listen(3002, ()=>{
    console.log('Connected on port 3002')
})