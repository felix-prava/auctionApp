const dotenv = require("dotenv");

dotenv.config();

const MONGO_HOSTNAME = process.env.MONGO_HOSTNAME || 'localhost';
const MONGO_PORT = process.env.MONGO_PORT || 27017;
const MONGO_USER = process.env.MONGO_USER || null;
const MONGO_PASSWORD = process.env.MONGO_PASSWORD || null;
const MONGO_URL = process.env.MOGNO_URL ||  'mongodb://' + MONGO_HOSTNAME +':'+MONGO_PORT+"/AuctionSite";
const SERVER_PORT = process.env.SERVER_PORT || 31337;
const SERVER_AUTH_KEY = process.env.SERVER_AUTH_KEY || "shhh!_it's_a_secret";


const MONGO_OPTIONS = {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    socketTimeoutMS: 30000,
    keepAlive: true,
    poolSize: 50,
    autoIndex: false,
    retryWrites: false
};

const MONGO_CONNECTION_DETAILS = {
    hostname : MONGO_HOSTNAME,
    port : MONGO_PORT,
    username : MONGO_USER,
    password : MONGO_PASSWORD,
    url : MONGO_URL
};

const SERVER_OPTIONS = {
    address : 'localhost',
    port : SERVER_PORT,
    auth_key : SERVER_AUTH_KEY
}

const config = {
    mongo_options : MONGO_OPTIONS,
    mongo_connection_details : MONGO_CONNECTION_DETAILS,
    server_options : SERVER_OPTIONS
};


module.exports = {config};








