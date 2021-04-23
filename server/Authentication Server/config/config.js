const dotenv = require("dotenv");

dotenv.config();

const DATABASE_SERVER_PROTOCOL = process.env.DATABASE_SERVER_PROTOCOL || "http://"
const DATABASE_SERVER_URL = process.env.DATABASE_SERVER_URL || 'localhost';
const DATABASE_SERVER_PORT = process.env.DATABASE_SERVER_PORT || 31337;
const DATABASE_SERVER_USER_INSERT = process.env.DATABASE_SERVER_USER_INSERT || '/api/users/insert';
const DATABASE_SERVER_USER_DELETE = process.env.DATABASE_SERVER_USER_INSERT || '/api/users/delete';
const DATABASE_SERVER_USER_READ = process.env.DATABASE_SERVER_USER_INSERT || '/api/users/read';
const DATABASE_SERVER_USER_UPDATE = process.env.DATABASE_SERVER_USER_INSERT || '/api/users/update';
const SERVER_PORT = process.env.SERVER_PORT || 31338;


const database_config = {
    protocol : DATABASE_SERVER_PROTOCOL,
    url : DATABASE_SERVER_URL,
    port : DATABASE_SERVER_PORT,
    insert_api : DATABASE_SERVER_USER_INSERT,
    delete_api : DATABASE_SERVER_USER_DELETE,
    read_api : DATABASE_SERVER_USER_READ,
    update_api : DATABASE_SERVER_USER_UPDATE
};

const server_options = {
    address : 'localhost',
    port : SERVER_PORT,
    private_key:"well_this_is_a_guarded_secret"
   
}



module.exports = {database_config,server_options};