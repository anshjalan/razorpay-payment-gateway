import { connect } from "mongoose";
import 'dotenv/config';

const connectToMongo = async () => {
    try {
        await connect(process.env.MONGO_URL, {
            dbName: "paymentGateway",
        });
        console.log("---***Database Connected Successfully***---")
    } catch (error) {
        console.log(error);
    }
}

export default connectToMongo;