import express from "express"
import { join } from "path"
const app = express()
const port = process.env.PORT || '3000'
import admin from './routes/admin.js'

app.set("view engine", "ejs")

app.use(express.urlencoded({ extended: true }));

app.use('/static', express.static(join(process.cwd(), 'public')))

app.use('/', admin)


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})