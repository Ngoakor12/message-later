module.exports = {
  createMessageTableQuery: `CREATE TABLE IF NOT EXISTS "messages"
    ("messageId" int NOT NULL,
        "authorId" int,
        "to" varchar,
        "email" varchar,
        "title" varchar,
        "body" varchar,
        "from" varchar,
        "createdAt" timestamp,
        "updatedAt" timestamp,
        "sentAt" timestamp,
        PRIMARY KEY ("messageId"),
        FOREIGN KEY ("authorId") REFERENCES "users"("userId")
    );`,
  createMessageQuery: `INSERT INTO "messages"
    ("authorId","to","email","title","body","from","createdAt","updatedAt","sentAt")
    VALUES($1,$2,$3,$4,$5,$6,$7) RETURNING *;`,
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
    ("userId" int NOT NULL,
        "email" varchar,
        "firstName" varchar,
        "lastName" varchar,
        "createdAt" timestamp,
        "updatedAt" timestamp,
        "hashedPassword" varchar,
        PRIMARY KEY ("userId")
    );`,
};
