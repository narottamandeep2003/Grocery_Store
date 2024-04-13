const mongoose = require("mongoose")
let dbConfig = async () => {
    const instance = await mongoose.connect(
        `${process.env.MONGODB_URL}${process.env.DB_NAME}?retryWrites=true&w=majority`
    );
    return instance;
}
module.exports = {dbConfig};