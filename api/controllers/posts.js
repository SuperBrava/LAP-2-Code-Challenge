const Post = require('../models/Post');

async function index (req, res) {
    try {
        const posts = await Post.all;
        res.status(200).json(posts)
    } catch (err) {
        res.status(500).json({err})
    }
}

async function show (req, res) {
    try {
        const post = await Post.findById(req.params.id);
        res.status(200).json(post)
    } catch (err) {
        res.status(404).json({err})
    }
}

async function create (req, res) {
    try {
        const post = await Post.create(req.body);
        res.status(201).json(post)
    } catch (err) {
        res.status(422).json({err})
    }
}

// 
// async function destroy (req, res) {
//     try {
//         // Added await operator to conts "post" and "resp";
//         const post = await Post.findById(req.params.id);
//         const resp = await post.destroy();
//         // Changed success status code from 200 to 204 (element deletion succesful)
//         res.status(204).end();
//     } catch (err) {
//         res.status(404).json({err});
//     };
// }

module.exports = { index, show, create}

// , destroy 
