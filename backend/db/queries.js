module.exports = {
  createMessageTableQuery: `CREATE TABLE IF NOT EXISTS messages
    (id serial primary key,
        name varchar,
        method varchar,
        contact varchar,
        title varchar,
        body varchar,
        "from" varchar,
        day varchar,
        time varchar
    );`,
  createMessageQuery: `INSERT INTO messages
    (name,method,contact,title,body,"from",day,time)
    VALUES($1,$2,$3,$4,$5,$6,$7,$8);`,
  updateMessageQuery: `UPDATE messages
    SET name = $2,
      method = $3,
      contact = $4,
      title = $5,
      body = $6,
      "from" = $7,
      day = $8,
      time = $9
    WHERE id = $1;`,
  deleteMessageQuery: `DELETE FROM messages WHERE id=$1;`,
  deleteMessagesQuery: `DELETE FROM messages;`,
  viewMessageQuery: `SELECT * FROM messages WHERE id=$1;`,
  deleteMessagesTableQuery: `DROP TABLE messages;`,
};
