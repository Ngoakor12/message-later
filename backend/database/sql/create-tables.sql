CREATE TABLE IF NOT EXISTS "users"
    ("userId" serial primary key,
        "email" varchar,
        "firstName" varchar,
        "lastName" varchar,
        "createdAt" varchar,
        "updatedAt" varchar,
        "hashedPassword" varchar
    );

CREATE TABLE IF NOT EXISTS "messages"
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
    "isDraft" boolean,
    FOREIGN KEY ("authorId") REFERENCES "users"("userId")
    );