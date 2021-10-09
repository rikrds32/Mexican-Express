const { Package } = require('../models');


module.exports = {
    
    async getSinglePackage({ package = null, params }, res) {
      const foundPackage = await Package.findOne({
        $or: [{ _id: Package ? Package._id : params.id }, { packagename: params.packagename }],
      });
  
      if (!foundpackage) {
        return res.status(400).json({ message: 'Cannot find a Package with this id!' });
      }
  
      res.json(foundPackage);
    },

    async createPackage({ body }, res) {
        const package = await User.create(body);
    
        if (!package) {
          return res.status(400).json({ message: 'Something is wrong!' });
        }
        const token = signToken(package);
        res.json({ token, package });
      }}