import express from "express";
// (معلومات الطلب )تستخدم عند التطوير
import morgan from "morgan";

import routes from "./routes";
//عندي الطلب بيانات مخزنه ع الخادم يظهر خطا لكن عند استخدام cors  يستجيب لهذه الطلبات
import cors from "cors"
//للتحقق من البيانات المدخلة
import expressValidator from "express-validator";
//تسهل عمليه ارسال البيانات الى الخادو باستخدام post
//import bodyParser from "body-Parser";

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const app = express();



app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(cors());

app.use(morgan("dev"));

app.use(expressValidator());

app.use('/', routes);

app.use((req, res, next) => {
    const err = new Error("not found");
    err.status = 404;
    next(err)
})

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        message: error.message
    })
})
export default app;