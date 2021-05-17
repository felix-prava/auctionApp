const dotenv = require("dotenv");

dotenv.config();

const DATABASE_SERVER_PROTOCOL = process.env.DATABASE_SERVER_PROTOCOL || "http://"
const DATABASE_SERVER_URL = process.env.DATABASE_SERVER_URL || 'localhost';
const DATABASE_SERVER_PORT = process.env.DATABASE_SERVER_PORT || 31337;
const DATABASE_SERVER_USER_INSERT = process.env.DATABASE_SERVER_USER_INSERT || '/api/posts/insert';
const DATABASE_SERVER_USER_DELETE = process.env.DATABASE_SERVER_USER_DELETE || '/api/posts/delete';
const DATABASE_SERVER_USER_READ = process.env.DATABASE_SERVER_USER_READ || '/api/posts/read';
const DATABASE_SERVER_POST_UPDATE = process.env.DATABASE_SERVER_POST_UPDATE || "/api/posts/update";
const DATABASE_SERVER_USER_READALL = process.env.DATABASE_SERVER_USER_READALL || '/api/posts/readAll';
const SERVER_PORT = process.env.SERVER_PORT || 31339;


const database_config = {
    protocol : DATABASE_SERVER_PROTOCOL,
    url : DATABASE_SERVER_URL,
    port : DATABASE_SERVER_PORT,
    insert_api : DATABASE_SERVER_USER_INSERT,
    delete_api : DATABASE_SERVER_USER_DELETE,
    read_api : DATABASE_SERVER_USER_READ,
    readall_api : DATABASE_SERVER_USER_READALL,
    update : DATABASE_SERVER_POST_UPDATE
};

const server_options = {
    address : 'localhost',
    port : SERVER_PORT,
    private_key:"well_this_is_a_guarded_secret"
   
}



module.exports = {database_config,server_options};