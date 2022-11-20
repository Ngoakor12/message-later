module.exports = {
  createMessageTableQuery: `CREATE TABLE IF NOT EXISTS "messages"
    ("messageId" serial primary key,
        "authorId" int,
        "to" varchar,
        "email" varchar,
        "title" varchar,
        "body" varchar,
        "from" varchar,
        "createdAt" varchar,
        "updatedAt" varchar,
        "sentAt" varchar,
        FOREIGN KEY ("authorId") REFERENCES "users"("userId")
    );`,
  createMessageQuery: `INSERT INTO "messages"
    ("authorId","to","email","title","body","from","createdAt","updatedAt","sentAt")
    VALUES($1,$2,$3,$4,$5,$6,$7,$8,$9) RETURNING *;`,
  createUserQuery: `INSERT INTO "users"
    ("email","firstName","lastName","createdAt","updatedAt","hashedPassword")
    VALUES($1,$2,$3,$4,$5,$6) RETURNING *;`,
  updateMessageQuery: `UPDATE messages
    SET "to" = $2,
      "email" = $3,
      "title" = $4,
      "body" = $5,
      "from" = $6,
      "createdAt" = $7,
      "updatedAt" = $8,
      "sentAt" = $9,
    WHERE "messageId" = $1
    RETURNING *;`,
  deleteMessageQuery: `DELETE FROM "messages" WHERE id=$1;`,
  deleteMessagesQuery: `DELETE FROM "messages";`,
  viewMessageQuery: `SELECT * FROM "messages" WHERE id=$1;`,
  viewMessagesQuery: `SELECT * FROM "messages";`,
  deleteMessagesTableQuery: `DROP TABLE IF EXISTS "messages";`,
  deleteUsersTableQuery: `DROP TABLE IF EXISTS "users";`,
  createUsersTableQuery: `CREATE TABLE IF NOT EXISTS "users"
    ("userId" serial primary key,
        "email" varchar,
        "firstName" varchar,
        "lastName" varchar,
        "createdAt" varchar,
        "updatedAt" varchar,
        "hashedPassword" varchar
    );`,
};
