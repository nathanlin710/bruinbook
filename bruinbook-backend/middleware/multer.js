const multer = require('multer');
const storage = multer.memoryStorage();
const uploads = multer({storage: storage}).single('image');

module.exports = { 
    "uploads": uploads 
};