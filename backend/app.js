const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

const app = express()


app.use(
    bodyParser.urlencoded({
        extended: true
    })
)
app.use(bodyParser.json());


const dbURL = "mongodb://localhost:27017/HealthCare";


// connect to mongoDB
mongoose.connect(
    process.env.MONGODB_URI || dbURL,
    { useUnifiedTopology: true, useNewUrlParser: true }
)
    .then(() => { console.log("MongoDB connected Succesfully.") })
    .catch(err => { console.log(err) })


app.use('/api/user', require('./routes/user'))
app.use('/api/doctor', require('./routes/doctor'))
app.use('/api/appointment', require('./routes/appointment'))



app.listen(9000, () => {
    console.log(`Server listening at port ${9000}`);
})

