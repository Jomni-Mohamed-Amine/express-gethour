const express=require('express')
const app=express()

app.use((req,res,next)=>{
    const now=new Date()
    const dayOfWeek=now.getDay();
    const gethour=now.getHours()
    if (dayOfWeek >= 4 && dayOfWeek <= 5 && gethour >= 9 && gethour < 17) {
        next(); 
    } else {
        res.send('The web application is only available during working hours (Monday to Friday, 9 AM to 5 PM).');
    }
});

app.get('/',(req,res)=>{
    res.render('home.ejs')
})
app.get('/contact',(req,res)=>{
    res.render('contact.ejs')
})
app.listen(3000,()=>{
console.log('app running')
})