// "use strict";

// var express = require('express');

// var jwt = require('jsonwebtoken');

// var User = require('../models/User');

// var router = express.Router();

// var _require = require('express-validator'),
//     body = _require.body,
//     validationResult = _require.validationResult;

// var bcrypt = require('bcrypt');

// var fetchuser = require('../components/fetchuser');

// var JWT_SECRET = "KANISHK IS GOOD BOY";
// router.post('/createuser', [body('email', 'enter a valid email').isEmail(), body('password', 'enter a valid password').isLength({
//   min: 5
// }), body('name', 'enter a valid name').isLength({
//   min: 5
// })], function _callee(req, res) {
//   var errors, user, salt, secpas, data, authtoken;
//   return regeneratorRuntime.async(function _callee$(_context) {
//     while (1) {
//       switch (_context.prev = _context.next) {
//         case 0:
//           errors = validationResult(req);

//           if (errors.isEmpty()) {
//             _context.next = 3;
//             break;
//           }

//           return _context.abrupt("return", res.status(400).json({
//             errors: errors.array()
//           }));

//         case 3:
//           _context.prev = 3;
//           _context.next = 6;
//           return regeneratorRuntime.awrap(User.findOne({
//             email: req.body.email
//           }));

//         case 6:
//           user = _context.sent;

//           if (!user) {
//             _context.next = 9;
//             break;
//           }

//           return _context.abrupt("return", res.status(400).json({
//             error: "sorry with the a email already exist"
//           }));

//         case 9:
//           _context.next = 11;
//           return regeneratorRuntime.awrap(bcrypt.genSalt(10));

//         case 11:
//           salt = _context.sent;
//           _context.next = 14;
//           return regeneratorRuntime.awrap(bcrypt.hash(req.body.password, salt));

//         case 14:
//           secpas = _context.sent;
//           _context.next = 17;
//           return regeneratorRuntime.awrap(User.create({
//             name: req.body.name,
//             email: req.body.email,
//             password: secpas
//           }));

//         case 17:
//           user = _context.sent;
//           data = {
//             user: {
//               id: user.id
//             }
//           };
//           authtoken = jwt.sign(data, JWT_SECRET);
//           console.log(authtoken);
//           res.json({
//             authtoken: authtoken
//           });
//           _context.next = 28;
//           break;

//         case 24:
//           _context.prev = 24;
//           _context.t0 = _context["catch"](3);
//           console.error(_context.t0.message);
//           res.status(500).send("some error been occured");

//         case 28:
//         case "end":
//           return _context.stop();
//       }
//     }
//   }, null, null, [[3, 24]]);
// });
// router.post('/login', [body('email', 'enter a valid email').isEmail(), body('password', 'Password cannot be blank').exists()], function _callee2(req, res) {
//   var errors, _req$body, email, password, user, comparepassword, data, authtoken;

//   return regeneratorRuntime.async(function _callee2$(_context2) {
//     while (1) {
//       switch (_context2.prev = _context2.next) {
//         case 0:
//           errors = validationResult(req);

//           if (errors.isEmpty()) {
//             _context2.next = 3;
//             break;
//           }

//           return _context2.abrupt("return", res.status(400).json({
//             errors: errors.array()
//           }));

//         case 3:
//           _req$body = req.body, email = _req$body.email, password = _req$body.password;
//           _context2.prev = 4;
//           _context2.next = 7;
//           return regeneratorRuntime.awrap(User.findOne({
//             email: email
//           }));

//         case 7:
//           user = _context2.sent;

//           if (user) {
//             _context2.next = 10;
//             break;
//           }

//           return _context2.abrupt("return", res.status(400).json({
//             error: "please login with correct credentials"
//           }));

//         case 10:
//           _context2.next = 12;
//           return regeneratorRuntime.awrap(bcrypt.compare(password, user.password));

//         case 12:
//           comparepassword = _context2.sent;

//           if (comparepassword) {
//             _context2.next = 16;
//             break;
//           }

//           success = false;
//           return _context2.abrupt("return", res.status(400).json({
//             success: success,
//             error: "please login with correct credentials"
//           }));

//         case 16:
//           data = {
//             user: {
//               id: user.id
//             }
//           };
//           authtoken = jwt.sign(data, JWT_SECRET);
//           success = true;
//           res.json({
//             success: success,
//             authtoken: authtoken
//           });
//           _context2.next = 26;
//           break;

//         case 22:
//           _context2.prev = 22;
//           _context2.t0 = _context2["catch"](4);
//           console.error(_context2.t0.message);
//           res.status(500).send("internal error error been occured");

//         case 26:
//         case "end":
//           return _context2.stop();
//       }
//     }
//   }, null, null, [[4, 22]]);
// });
// router.post('/getuser', fetchuser, function _callee3(req, res) {
//   var user;
//   return regeneratorRuntime.async(function _callee3$(_context3) {
//     while (1) {
//       switch (_context3.prev = _context3.next) {
//         case 0:
//           _context3.prev = 0;
//           userId = req.user.id;
//           _context3.next = 4;
//           return regeneratorRuntime.awrap(User.findById(userId).select("--password"));

//         case 4:
//           user = _context3.sent;
//           res.send(user);
//           _context3.next = 12;
//           break;

//         case 8:
//           _context3.prev = 8;
//           _context3.t0 = _context3["catch"](0);
//           console.error(_context3.t0.message);
//           res.status(500).send("internal server issue");

//         case 12:
//         case "end":
//           return _context3.stop();
//       }
//     }
//   }, null, null, [[0, 8]]);
// });
// module.exports = router;