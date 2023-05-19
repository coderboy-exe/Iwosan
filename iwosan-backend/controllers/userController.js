const asyncHandler = require('express-async-handler');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const User = require('../models/userModel');

//@desc Get all customers
//@route GET /api/v1/users
//@access public

const getUsers = asyncHandler (async (req, res) => {
    const users = await User.find();
    res.status(200).json(users)
})

//@desc Create user
//@route POST /api/v1/users/register
//@access public

const createUser = asyncHandler(async (req, res) => {
    console.log(req.body)
    const { username, email, password } = req.body;
    if (!username || !email || !password) {
        res.status(400);
        throw Error("All fields are required!");
    }
    const existingUser = await User.findOne({ email });
    if (existingUser) {
        res.status(400);
        throw new Error("User already exists!");
    }

    // Hash password
    const hashedPwd = await bcrypt.hash(password, 10);
    console.log(hashedPwd)
    const user = await User.create({
        username,
        email,
        password: hashedPwd
    });
    console.log(`User created ${user}`)
    if (user) {
        res.status(201).json({
            _id: user.id,
            email: user.email
        })
    } else {
        res.status(400)
        throw Error("Invalid User credentials");
    }
    res.status(201).json(user)
})

//@desc Login user
//@route POST /api/v1/users/login
//@access public

const loginUser = asyncHandler(async (req, res) => {
    console.log(req.body)
    const { email, password } = req.body;
    if (!email || !password) {
        res.status(400);
        throw Error("All fields are required!");
    }
    const user = await User.findOne({ email });

    //compare password with hashed
    if (user && (await bcrypt.compare(password, user.password))) {
        const accessToken = jwt.sign({
            user: {
                username: user.username,
                email: user.email,
                id: user.id,
            },
        },
        process.env.ACCESS_TOKEN ,
        { expiresIn: '10m' }
        );
        res.status(200).json({ accessToken })

    } else {
        res.status(401)
        throw Error("Invalid Email or Password")
    }
})

//@desc Current user info
//@route GET /api/v1/users/dashboard
//@access private

const currentUser = asyncHandler(async (req, res) => {
    res.status(200).json(req.user)
})

//@desc Get user by id
//@route GET /api/v1/users/:id
//@access public
const getUser = asyncHandler(async (req, res) => {
    const user = await User.findById(req.params.id)
    if (!user) {
        res.status(404);
        throw new Error("User not found");
    }
    console.log(req.body)
    res.status(200).json(user)
})

//@desc Update user by id
//@route PUT /api/v1/users/:id
//@access public

const updateUser = asyncHandler(async (req, res) => {
    const user = await User.findById(req.params.id)
    if (!user) {
        res.status(404);
        throw new Error("User not found");
    }
    const updatedUser = await User.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
    );
    console.log(req.body)
    res.status(200).json(updatedUser)
})

//@desc Delete user
//@route DELETE /api/v1/users/:id
//@access public

const deleteUser = asyncHandler(async (req, res) => {
    const user = await User.findById(req.params.id)
    if (!user) {
        res.status(404);
        throw new Error("User not found");
    }
    await user.deleteOne();
    res.status(200).json(user)
})


module.exports = {
    getUsers,
    createUser,
    loginUser,
    currentUser,
    getUser,
    updateUser,
    deleteUser
}