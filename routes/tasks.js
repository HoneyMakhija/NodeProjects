const express = require('express')
const router = express.Router();
const {getAlltasks,createtask,gettask,updatetask,deletetask} = 
require('../controllers/tasks')


router.route('/').get(getAlltasks).post(createtask)

router.route('/:id').get(gettask).delete(deletetask).patch(updatetask )

module.exports = router

