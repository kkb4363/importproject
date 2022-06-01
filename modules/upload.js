const multer = require('multer'); 
const multerS3 = require('multer-s3'); 
const aws = require('aws-sdk'); 
aws.config.loadFromPath('/Users/jinmin/Desktop/MyData/Import/SecruityFile/awsconfig.json'); 
const s3 = new aws.S3();

const upload = multer({
    storage: multerS3({
        s3: s3,
        bucket: 'import-bucket-s3',
        acl: 'public-read',
        key: function(req, file, cb) {
            cb(null, 'image/' + Math.floor(Math.random() * 1000).toString() + Date.now() + '.' + file.originalname.split('.').pop());
        }
    }),
    limits: {
        fileSize: 1000 * 1000 * 10
    }
});

module.exports = upload;