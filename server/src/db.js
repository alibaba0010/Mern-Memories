import pkg from 'mongoose';
const { connect, connection, set } = pkg;

const connectDB = (url) => {
  connection.once("open", () => console.log("MongoDB connected"));
  set('strictQuery', false)
  return connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};

export default connectDB;
