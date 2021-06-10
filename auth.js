const router=require('express').Router();
const file=require('../controller/file');
router.post('/jollk',file.create);

router.post('/klmn/:id',file.del);
router.post('/sai/:id',file.up);
module.exports=router;