import * as express from 'express';
import * as mongoose from 'mongoose';
import 'dotenv/config'
import * as bodyParser from 'body-parser';
import routes from './src/routes/crmRoutes';


const app = express();
const PORT: number = 3000;
const database: string = process.env.MONGO_URI

const testUser: string = "User Test 010203"
const testPassword: string = "Password123"

const testConnection = (user: string, pass: string): string => {
    return ` ${user} has this pass ${pass} `
}

let test = testConnection(testUser, testPassword)
console.log(test)

// mongoose connection
mongoose.connect(database);

// bodyparser setup
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

routes(app);

// serving static files
app.use(express.static('public'));

app.get('/', (req, res) =>
    res.send(`Node and express server is running on port ${PORT}`)
);

app.listen(PORT, () =>
    console.log(`your server is running on port ${PORT}`)
);