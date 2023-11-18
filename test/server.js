// server.js

const path = require("path")
const express = require("express")
const app = express()
const Logger = require("@ryanforever/logger").v2
const logger = new Logger(__filename, {debug: true})
const {routeLogger, simpleAuth, forceHttps, sendStatus, echoRequest, basicAuth, send} = require("../src")

// const basicAuth = require("express-basic-auth")

app.disable("x-powered-by")
app.use(express.json())
app.use(express.urlencoded({extended : true}))
app.use(routeLogger({
    ignore: ["/health"]
}))


app.get("/", sendStatus(200))
app.get("/send", send("hello world", 200))
app.get("/ping", sendStatus(200))
app.route("/echo").get(echoRequest).post(echoRequest).patch(echoRequest).put(echoRequest).delete(echoRequest)
app.get("/auth", basicAuth({users: {"ryanforever": "password"}}), sendStatus(200))


app.all("*", sendStatus(404))


const listener = app.listen(80, () => {
    logger.log(`express server listening on port ${listener.address().port}`)
})
