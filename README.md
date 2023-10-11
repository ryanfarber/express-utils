# express-utils
utils for express servers



## route-logger
```javascript
const {routeLogger} = require("@ryanforever/express-utils")
const express = require("express")
const app = express()

app.use(routeLogger({
	ignore: ["/health"] // choose paths to ignore
}))
````
