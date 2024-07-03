const express = require("express")
const app = express()


const main = async () => {
    try {
        await app.listen(4000)
        console.log("server works on port 4000")
    } catch (error) {
        console.log(error)
    }
}

main();

app.get('/', (req,res) => {
    try {
        res.json("wroks")
    } catch (error) {
        res.json(error)
    }
})