const router = require('express').Router();
const packageRoutes = require('./package-routes');

router.use('/package', packageRoutes);

module.exports = router;
