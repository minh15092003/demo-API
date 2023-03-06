
const e = require('cors');
var mysql = require('mysql');
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Abc@123",
    database: "sskpi"
})
module.exports = {
    update: (req, res) => {
        var username = req.body.username;
        var password = req.body.password;
        var newpassword = req.body.newpassword;
        var enterpassword = req.body.enterpassword;
        var sql = " SELECT * FROM user Where username = '" + username + "'";

        con.query(sql, function (err, results) {
            if (err) throw err;
            var user = results[0];
            console.log(user);
            console.log(username, password, newpassword, enterpassword);
            if (user  == undefined) {
                return res.status(401).json({ data: false, message: "Tài khoản không tồn tại" })
            }
            else if (user.Password != password){
                return res.status(401).json({ data: false, message: "mật khẩu không đúng" })
            }
            else if (newpassword != enterpassword){
                return res.status(401).json({ data: false, message: "Mật khẩu nhập không khớp" })
            }
            else
                return res.json({ data: true, message: " Đổi mật khẩu thành công" })
        })
    }
}