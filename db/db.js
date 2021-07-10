const mongoose = require('mongoose');

const connectDB = (app) => {
    mongoose
        .connect(process.env.DB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        .then(() => {
            const PORT = process.env.PORT || 4000;
            app.listen(PORT, () => {
                console.log('DATABASE CONNECTED');
                console.log(`SERVER IS RUNNING ON PORT ${PORT}`);
            });
        })
        .catch((err) => {
            console.log(err);
        });
};

module.exports = connectDB;
