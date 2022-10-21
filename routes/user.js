const router = require('express').Router();
const user = require('../controllers/user');

router.get('/users/', user.getUsers);
router.post('/add-users/', user.addUsers);

module.exports = router;