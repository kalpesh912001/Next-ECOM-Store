import mongoose from "mongoose";



export default function dbConfig() {
    if (mongoose.connections[0].readyState) {
        console.log('already connected');
        return;
    }
    mongoose.connect(process.env.MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    mongoose.connection.on('connected', () => {
        console.log('connected to mongo');
    })
    mongoose.connection.on('error', (error) => {
        console.log('occuring error in connection', error);
    })
}
