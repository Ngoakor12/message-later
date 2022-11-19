module.exports = {
  createMessageTableQuery: `CREATE TABLE IF NOT EXISTS messages
    (id serial primary key,
        name varchar,
        email varchar,
        title varchar,
        body varchar,
        "from" varchar,
        day varchar,
        time varchar
    );`,
  createMessageQuery: `INSERT INTO messages
    (name,email,title,body,"from",day,time)
    VALUES($1,$2,$3,$4,$5,$6,$7) RETURNING *;`,
  updateMessageQuery: `UPDATE messages
    SET name = $2,
      email = $3,
      title = $4,
      body = $5,
      "from" = $6,
      day = $7,
      time = $8
    WHERE id = $1
    RETURNING *;`,
  deleteMessageQuery: `DELETE FROM messages WHERE id=$1;`,
  deleteMessagesQuery: `DELETE FROM messages;`,
  viewMessageQuery: `SELECT * FROM messages WHERE id=$1;`,
  viewMessagesQuery: `SELECT * FROM messages;`,
  deleteMessagesTableQuery: `DROP TABLE messages;`,
};
