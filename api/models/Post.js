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

  // destroy() {
  //   return new Promise(async (resolve, reject) => {
  //     try {
  //       const result = await db.query("DELETE FROM posts WHERE id = $1 RETURNING author_id", [
  //         this.id,
  //       ]);
  //       const author = await Author.findById(result.rows[0].author_id);
  //       const posts = await author.posts;
  //       if (!posts.length) {
  //         await author.destroy();
  //       }
  //       resolve("Post was deleted");
  //     } catch (err) {
  //       reject("Post could not be deleted");
  //     }
  //   });
  // }
}

module.exports = Post;
