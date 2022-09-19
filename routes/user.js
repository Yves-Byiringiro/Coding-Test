const router = require('express').Router();
const user = require('../controllers/user');

router.get('/users', user.getUsers);

module.exports = router;