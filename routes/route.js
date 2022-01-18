 const express = require('express');
 const router = express.Router();
 const{allUsers, userForm, saveUser, editUser, updateUser, deleteUser} = require('../controllers/user_ctrl');
 const{allDepartements,  departementForm, saveDepartement} = require('../controllers/departement_ctrl');

 ///ROUTER USER///

 router.get('/', allUsers);
 router.get('/views/create', userForm);
 router.get('/edit/:id', editUser);
 router.post('/update', updateUser);
 router.get('/delete/:id', deleteUser);
router.post('/saveUser', saveUser);
// router.get('/user/:id', viewUser);

///ROUTER DEPARTEMENT///
router.get('/', allDepartements);
router.get('/views/add', departementForm);
router.post('/saveDepartement', saveDepartement);
router.get('/showDepartement', );


 module.exports = router;