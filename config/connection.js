import pkg from 'mongoose';
const { connect, connection } = pkg;

connect('mongodb://127.0.0.1:27017/socialNetworkDB');

export default connection;