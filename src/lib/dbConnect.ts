import mongoose from 'mongoose';



const MONGODB_URI = 'mongodb+srv://sauravsingh16101999:Gfgbku9tXopfMTeq@cluster0.8ew9r.mongodb.net/chat_db?retryWrites=true&w=majority&appName=Cluster0'; // Put your connection string in .env

if (!MONGODB_URI) {
  throw new Error('Please define the MONGODB_URI environment variable');
}

let cached = (global as any).mongoose || { conn: null, promise: null };

async function dbConnect() {
  if (cached.conn) return cached.conn;

  if (!cached.promise) {
    cached.promise = mongoose.connect(MONGODB_URI).then((mongoose) => mongoose);
  }
  cached.conn = await cached.promise;
  return cached.conn;
}

export default dbConnect;
