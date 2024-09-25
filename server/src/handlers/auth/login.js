fastify.post("/login", async (req, res) => {
    const { username, password } = req.body;

    const result = await fastify.pg.query(
        "SELECT * FROM users WHERE username=$1",
        [username]
    );
    if (result.rowCount === 0)
        return res.code(400).send("User Does Not Exist!");

    const hashedPassword = result.rows[0].password;

    if (!(await fastify.bcrypt.compare(password, hashedPassword)))
        return res.code(400).send("Wrong Password!");

    const jwt = fastify.jwt.sign(
        { id: result.rows[0].id, username, password },
        { expiresIn: "1h" }
    );
    return res.send({ jwt });
});