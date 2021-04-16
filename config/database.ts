import config from "config";
console.log('SUPPRESS_NO_CONFIG_WARNING: ' + config.util.getEnv('SUPPRESS_NO_CONFIG_WARNING'));
console.log(process.env['NODE_CONFIG_DIR']);
import { ConnectionOptions, connect } from "mongoose";

const connectDB = async () => {
  try {
    const mongoURI: string = config.get("mongoURI");
    const options: ConnectionOptions = {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
    };
    await connect(mongoURI, options);
    console.log("MongoDB Connected...");
  } catch (err) {
    console.error(err.message);
    // Exit process with failure
    process.exit(1);
  }
};

export default connectDB;
