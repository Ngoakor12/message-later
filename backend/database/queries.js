module.exports = {
  userQuery: {
    create: `INSERT INTO "users"
    ("email","firstName","lastName","createdAt","updatedAt","hashedPassword")
    VALUES($1,$2,$3,$4,$5,$6) RETURNING *;`,
    view: `SELECT * FROM "users" WHERE "userId" = $1;`,
    deleteTable: `DROP TABLE IF EXISTS "users";`,
    createTable: `CREATE TABLE IF NOT EXISTS "users"
    ("userId" serial primary key,
        "email" varchar,
        "firstName" varchar,
        "lastName" varchar,
        "createdAt" varchar,
        "updatedAt" varchar,
        "hashedPassword" varchar
    );`,
  },
  messageQuery: {
    createTable: `CREATE TABLE IF NOT EXISTS "messages"
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
    create: `INSERT INTO "messages"
    ("authorId","to","email","title","body","from","createdAt","updatedAt","sentAt")
    VALUES($1,$2,$3,$4,$5,$6,$7,$8,$9) RETURNING *;`,
    update: `UPDATE messages
    SET "to" = $3,
      "email" = $4,
      "title" = $5,
      "body" = $6,
      "from" = $7,
      "updatedAt" = $8,
      "sentAt" = $9
    WHERE "authorId" = $1 AND "messageId" = $2
    RETURNING *;`,
    delete: `DELETE FROM "messages" WHERE "messageId" = $1;`,
    deleteAll: `DELETE FROM "messages" WHERE "authorId" = $1;`,
    view: `SELECT * FROM "messages" WHERE "authorId" = $1 AND "messageId" = $2;`,
    viewAll: `SELECT * FROM "messages";`,
    deleteTable: `DROP TABLE IF EXISTS "messages";`,
  },
};
