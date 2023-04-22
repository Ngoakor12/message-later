const {
  viewMessage,
  viewMessages,
  deleteMessage,
  updateMessage,
  createMessage,
  deleteMessages,
  viewGoogleUser,
  createUser,
  viewUser,
} = require("../../database/functions");
const { validateIds } = require("../utils");

async function getGoogleUserFromServer(req, res) {
  const { googleId } = req.params;

  try {
    // validateIds(googleId);
    const result = await viewGoogleUser(googleId);
    res
      .status(200)
      .json({ success: true, responseData: { data: result.rows[0] } });
  } catch (error) {
    console.error(error);
    res.json({ success: false, error: error.stack });
  }
}

async function postGoogleUserToServer(req, res) {
  const { googleId } = req.body;

  try {
    validateIds(authorId);
    const result = await createMessage(
      authorId,
      to,
      email,
      title,
      body,
      from,
      day,
      time,
      isDraft
    );
    res
      .status(200)
      .json({ success: true, responseData: { data: result.rows[0] } });
  } catch (error) {
    console.error(error);
    res.json({ success: false, error: error.stack });
  }
}

async function postUserToServer(req, res) {
  const { email, firstName, lastName, hashedPassword, googleId } = req.body;

  try {
    const result = await createUser(
      email,
      firstName,
      lastName,
      hashedPassword,
      googleId
    );
    res
      .status(200)
      .json({ success: true, responseData: { data: result.rows[0] } });
  } catch (error) {
    console.error(error);
    res.json({ success: false, error: error.stack });
  }
}

async function getUserFromServer(req, res) {
  const { userId } = req.params;
  try {
    const result = await viewUser(userId);
    res
      .status(200)
      .json({ success: true, responseData: { data: result.rows } });
  } catch (error) {
    console.error(error);
    res.json({ success: false, error: error.stack });
  }
}

//   async function postMessageToServer(req, res) {
//     const { authorId, to, email, title, body, from, day, time, isDraft } =
//       req.body;

//     try {
//       validateIds(authorId);
//       const result = await createMessage(
//         authorId,
//         to,
//         email,
//         title,
//         body,
//         from,
//         day,
//         time,
//         isDraft
//       );
//       res
//         .status(200)
//         .json({ success: true, responseData: { data: result.rows[0] } });
//     } catch (error) {
//       console.error(error);
//       res.json({ success: false, error: error.stack });
//     }
//   }

//   async function updateMessageOnServer(req, res) {
//     const { messageId } = req.params;
//     const { to, email, title, body, from, day, time, isDraft } = req.body;

//     try {
//       validateIds(messageId);
//       const result = await updateMessage(
//         messageId,
//         to,
//         email,
//         title,
//         body,
//         from,
//         day,
//         time,
//         isDraft
//       );
//       res
//         .status(200)
//         .json({ success: true, responseData: { data: result.rows[0] } });
//     } catch (error) {
//       console.error(error);
//       res.json({ success: false, error: error.stack });
//     }
//   }

//   async function deleteMessageFromServer(req, res) {
//     const { messageId } = req.params;

//     try {
//       validateIds(messageId);
//       const result = await deleteMessage(messageId);
//       res
//         .status(200)
//         .json({ success: true, messageId: result.rows[0].messageId });
//     } catch (error) {
//       console.error(error);
//       res.json({ success: false, error: error.stack });
//     }
//   }

//   async function deleteMessagesFromServer(req, res) {
//     const { authorId } = req.body;

//     try {
//       validateIds(authorId);
//       await deleteMessages(authorId);
//       res.status(200).json({ success: true });
//     } catch (error) {
//       console.error(error);
//       res.json({ success: false, error: error.stack });
//     }
//   }

module.exports = {
  getGoogleUserFromServer,
  // postGoogleUserToServer,
  postUserToServer,
  getUserFromServer,
  // getMessagesFromServer,
  // postMessageToServer,
  // updateMessageOnServer,
  // deleteMessageFromServer,
  // deleteMessagesFromServer,
};
