const db = require("../dbconfig");

class Post {
  constructor(data) {
    this.id = data.id;
    this.title = data.title;
    this.author = data.author;
    this.story = data.story;
  }

  static get all() {
    return new Promise(async (resolve, reject) => {
      try {
        let postData = await db.query("SELECT * FROM posts;");
        let posts = postData.rows.map((b) => new Post(b));
        resolve(posts);
      } catch (err) {
        reject("No posts found");
      }
    });
  }

  static findById(id) {
    return new Promise(async (resolve, reject) => {
      try {
        let postData = await db.query(
          `SELECT * FROM posts
            WHERE posts.id = $1;`,
          [id]
        );
        let post = new Post(postData.rows[0]);
        resolve(post);
      } catch (err) {
        reject("Post not found");
      }
    });
  }

  static async create(postData) {
    return new Promise(async (resolve, reject) => {
      try {
        let newPostData = await db.query(
          `INSERT INTO posts (title, author, story) VALUES ($1, $2, $3) RETURNING *;`,
          [postData.title, postData.author, postData.story]
        );

        let newPost = new Post(newPostData.rows[0]);
        resolve(newPost);
      } catch (err) {
        reject("Post could not be created");
      }
    });
  }
}

module.exports = Post;
