module.exports = {
  userQuery: {
    create: `INSERT INTO "users"
    ("email","firstName","lastName","createdAt","updatedAt","hashedPassword")
    VALUES($1,$2,$3,$4,$5,$6) RETURNING *;`,
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
    delete: `DELETE FROM "messages" WHERE id=$1;`,
    deleteAll: `DELETE FROM "messages";`,
    view: `SELECT * FROM "messages" WHERE id=$1;`,
    viewAll: `SELECT * FROM "messages";`,
    deleteTable: `DROP TABLE IF EXISTS "messages";`,
  },
};
