
import "dotenv/config";

import models, { sequelize } from "./models";

import app from "./app";

//الاتصال مباشرة عند بدء الخادم
sequelize.sync().then(() => {
    app.listen(process.env.PORT, () => {
        console.log("hellwo express");
    });
});

