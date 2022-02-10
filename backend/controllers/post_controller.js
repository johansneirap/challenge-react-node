const { Pool } = require('pg');
const pool = new Pool({
    host: 'localhost',
    user: 'postgres',
    password: 'postgres',
    database: 'posts',
    port: '5432'
})

const createPost = async(req, res) => {
    try {
        const { name, description } = req.body;
        await pool.query('INSERT INTO POST (name, description) VALUES($1, $2)', [name, description])
        const postCreated = await pool.query('SELECT * FROM post ORDER BY id DESC LIMIT 1')
        return res.send({
            message: 'Post created succesfully',
            post: postCreated.rows[0]
        })
    } catch (error) {
        console.log(error);
        res.status(500).send(error)
    }
}

const deletePost = async(req, res) => {
    try {
        const id = req.params.id
        const postDeleted = await pool.query('SELECT * FROM POST WHERE id = $1', [id]);
        const result = await pool.query('DELETE FROM POST WHERE id = $1', [id])
        console.log(result)
        if (result.rowCount === 0) {
            return res.status(404).json({
                message: "Post not found"
            })
        }
        return res.send({
            message: 'Post deleted succesfully',
            body: { post: postDeleted.rows[0] }
        })
    } catch (error) {
        console.log(error);
        res.status(500).send(error)
    }
}

const getPosts = async(req, res) => {
    try {
        const result = await pool.query('SELECT * FROM post');
        console.log(result)
        return res.status(200).send(result.rows)

    } catch (error) {
        console.log(error)
        return res.status(500).send(error)
    }
}

module.exports = {
    getPosts,
    createPost,
    deletePost,
}