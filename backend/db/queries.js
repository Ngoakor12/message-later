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
  deleteMessagesTableQuery: `DROP TABLE messages;`,
};
