export const SaveUser = (req, res) => {

    req.checkBody('name')
        .notEmpty()
        .withMessage('الاسم مطلوب');

    req.checkBody('email')
        .notEmpty()
        .withMessage(" البريد الالكتروني مطلوب");

    req.checkBody("email")
        .isEmail()
        .withMessage(" صيغة البريد الالكتروني غير صحيحة");


    req.checkBody("password")
        .notEmpty()
        .withMessage("  كلمة المرور مطلوبة");


    req.checkBody("userType")
        .notEmpty()
        .withMessage("نوع المستخدم مطلوب");
};