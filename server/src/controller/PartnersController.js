const partners = require('../models/PartnerModel');
class PartnersController {

    index(req, res) {
        partners.find({}).then(data => {
            console.log('vao phuong thuc get partners')
            console.log("data truoc khi tra ve: ",data)
            res.status(200).json(data);
        })
        .catch(error => {
            console.log('error: ',error)
            res.status(500).json('error: ',error)
        })
       
    }


}

module.exports = new PartnersController;