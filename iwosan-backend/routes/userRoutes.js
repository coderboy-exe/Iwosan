const express = require('express');
const router = express.Router();

const {
    getUsers,
    createUser,
    loginUser,
    currentUser,
    getUser,
    updateUser,
    deleteUser
} = require('../controllers/userController');
const validateToken = require('../middleware/tokenHandler');


router.route('/register').post(createUser);
router.route('/login').post(loginUser);
router.route('/dashboard').get(validateToken, currentUser);

// router.route('/login').get(getUsers).post(createUser);

router.route('/').get(getUsers);

router.route('/:id').get(getUser).put(updateUser).delete(deleteUser);



module.exports = router;