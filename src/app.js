const fs = require('fs')
const path = require('path')
const express = require('express')

const app = express()

const PORT = 3000;

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.use(express.static(path.join(__dirname,'public')))


const accountData = fs.readFileSync('.\\src\\json\\accounts.json',{encoding: 'utf8'})

const accounts = JSON.parse(accountData)


const userData  = fs.readFileSync('.\\src\\json\\users.json',{encoding: 'utf8'})

const user = JSON.parse(userData)


app.get('/savings', (req,res) => res.render('account', {title: 'Account Summary', account: accounts.savings}))
app.get('/checking', (req,res) => res.render('account', {title: 'Account Summary', account: accounts.checking }))
app.get('/credit ', (req,res) => res.render('account', {title: 'Account Summary', account: accounts.credit }))

app.get('/profile', (req,res) => res.render('profile', {title: 'Account Summary', user: user[0]}))

app.get('/', (req,res) => res.render('index', {title: 'Account Summary', accounts: accounts}))

app.listen(PORT, () => console.log('STA A RUNNA SULLA PORTA',PORT))