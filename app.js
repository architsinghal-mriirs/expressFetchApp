const express = require('express')
const PORT = process.env.PORT || 8000
const app = express()

// app.get("/", async (req, res) => {

//     const response = await axios(config)
//     const html =  setData(response)

//             res.setHeader('Content-Type', 'text/html');
//             res.status(200).send(html);
// });

app.get("/", (req,res) => {
    res.status(200).json({
        message: 'Welcome',
        status: 200
    })
})


app.listen(PORT, () => {
    console.log("App Running on Port", PORT)
})