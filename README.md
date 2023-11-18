# express-utils
simple, basic utilities for express servers

- send
- sendStatus
- echoRequest
- basicAuth
- whitelist
- routeLogger
- forceHttps


## send
```javascript
const {send} = require("@ryanforever/express-utils")

app.get("/hello", send("world", 200))
````

## sendStatus
```javascript
const {sendStatus} = require("@ryanforever/express-utils")

app.get("/ping", sendStatus(200))
````

## routeLogger
```javascript
const {routeLogger} = require("@ryanforever/express-utils")
const express = require("express")()

app.use(routeLogger({
	ignore: ["/health"] // choose paths to ignore
}))
````

## echoRequest
```javascript
const {echoRequest} = require("@ryanforever/express-utils")

app.get("/users", echoRequest)
// will send back {baseUrl, url, path, method, body, parms, query, headers}
/*
{
	"baseUrl": "",
	"url": "/echo?hello=world",
	"path": "/echo",
	"method": "GET",
	"body": {
		"name": "ryan forever"
	},
	"query": {
		"hello": "world"
	},
	"params": {},
	"headers": {
		"host": "localhost",
		"content-type": "application/json",
		"user-agent": "insomnia/8.4.1",
		"x-test-header": "abcd1234",
		"content-length": "27"
	}
}
*/
````

## basicAuth
forked from [express-basic-auth](https://www.npmjs.com/package/express-basic-auth)
```javascript
const {basicAuth} = require("@ryanforever/express-utils")
const app = require("express")()

app.use(basicAuth({
	users: {"ryanforever": "abcd1234"},
	challenge: true // use for popup password input
}))
````