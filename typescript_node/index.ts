import * as express from 'express';
import * as mongoose from 'mongoose';
import 'dotenv/config'
import * as bodyParser from 'body-parser';
import routes from './src/routes/crmRoutes';
import Messenger from './src/controllers/createMessage';
import { Settings } from './settings'

const app = express();
const database: string = process.env.MONGO_URI

const testConnection = (user: string, pass: string): string => {
    return ` ${user} has this pass ${pass} `
}

let test = testConnection(Settings.testUser, Settings.testPassword)
console.log(test)

// instance of class
let messages = new Messenger(Settings.PORT)

// mongoose connection
mongoose.connect(database);

// bodyparser setup
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

routes(app);

// serving static files
app.use(express.static('public'));

app.get('/', (req, res) =>
    res.send(messages.messagePrint())
);

app.listen(Settings.PORT, () =>
    console.log(messages.messagePrint())
);