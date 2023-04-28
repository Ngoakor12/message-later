INSERT INTO "users"
    ("email","firstName","lastName","createdAt","updatedAt","googleId")
    VALUES('johndoe@example.com','john','doe','2022-11-22T05:34:39.128Z','2022-11-22T05:34:39.128Z','1111111')
    ,('janedoe@example.com','jane','doe','2022-11-22T05:34:39.128Z','2022-11-22T05:34:39.128Z','2222222')
    ,('jackdoe@example.com','jack','doe','2022-11-22T05:34:39.128Z','2022-11-22T05:34:39.128Z','3333333');

INSERT INTO "messages"
    ("authorId","to","email","title","body","from","createdAt","updatedAt","sentAt","isDraft")
    VALUES(1,'god','god@heaven.com','God when?','I see what you do for other people, I hope you didnt forget me','someone','2022-11-22T05:34:39.128Z','2022-11-22T05:34:39.128Z','2022-11-22T05:34:39.128Z',false)
    ,(1,'god','god@heaven.com','God when?','I see what you do for other people, I hope you didnt forget me','someone','2022-11-22T05:34:39.128Z','2022-11-22T05:34:39.128Z','2022-11-22T05:34:39.128Z',false)
    ,(1,'god','god@heaven.com','God when?','I see what you do for other people, I hope you didnt forget me','someone','2022-11-22T05:34:39.128Z','2022-11-22T05:34:39.128Z','2022-11-22T05:34:39.128Z',true);