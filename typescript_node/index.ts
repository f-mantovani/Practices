import * as express from 'express';
import * as mongoose from 'mongoose';
import 'dotenv/config'
import * as bodyParser from 'body-parser';
import routes from './src/routes/crmRoutes';


const app = express();
// number type
const PORT: number = 3000;

// string
const database: string = process.env.MONGO_URI


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