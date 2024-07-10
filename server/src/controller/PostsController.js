const posts = require('../models/PostModel');
class PostsController {

    index(req, res) {
        posts.find({}).then(data => {
            console.log('vao phuong thuc get posts')
            console.log("data truoc khi tra ve: ",data)
            res.status(200).json(data);
        })
        .catch(error => {
            console.log('error: ',error)
            res.status(500).json('error: ',error)
        })
       
    }


}

module.exports = new PostsController;