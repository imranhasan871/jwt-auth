const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

/** This function returns all users from database. */
exports.getAllUsers = async (req, res) => {
    try {
        let user = await User.find();
        res.json(user);
    } catch (error) {
        console.log(error);
    }
};


/** This function create user from User Model. */

exports.signupPostController = async (req, res) => {

    let { firstname, lastname, email, password } = req.body;
    try {
        let user = await User.findOne({ email });
        if (!user) {
            let hashedPassword = await bcrypt.hash(password, 10);
            let user = new User({
                firstname,
                lastname,
                email,
                password: hashedPassword,
            });
            await user.save();
            res.json({
                message: 'User Created Successfully',
            });
        }
        return res.json({
            message: 'User Already Exits',
        });
    } catch (error) {
        console.log(error);
    }
};

/** This function can login */

exports.loginPostController = async (req, res) => {
    try {
        let { email, password } = req.body;
        let user = await User.findOne({ email });
        if (user) {
            let match = await bcrypt.compare(password, user.password);
            if (match) {
                const token = jwt.sign({ email: user.email, _id: user._id },'SECRET',{expiresIn: '2h',
                    }
                );
                res.json({
                    message: 'Login Successful',
                    token
                });
            } else {
                res.json({
                    message: "Login Failed. Password Dosen\'t Match",
                });
            }
        }
        return res.json({
            message: 'User Not Found',
        });
    } catch (error) {
        console.log(error);
    }
};
