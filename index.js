import express from 'express'
import { PORT } from './config/config'
import GraphqlHTTP from 'express-graphql'
import schema from './graphql'
import {mongoose} from './database/mongoose'
const app = express();

app.use('/graphql',GraphqlHTTP({
    graphiql:true,
    schema
}))




app.listen(PORT, () => {
    console.log("Server is start on port:" + PORT)
})