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
  const { email, firstName, lastName, googleId } = req.body;

  try {
    const result = await createUser(email, firstName, lastName, googleId);
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

async function authWithGoogle(req, res) {
  const { email, firstName, lastName, googleId } = req.body;

  try {
    const result = await createUser(email, firstName, lastName, googleId);
    res
      .status(200)
      .json({ success: true, responseData: { data: result.rows[0] } });
  } catch (error) {
    console.error(error);
    res.json({ success: false, error: error.stack });
  }
}

async function authCheck(req, res) {
  if (!req.user) {
    res.status(400).json({ success: false, message: "Not authorized" });
  }
}

async function logout(req, res) {
  res.json({ success: true });
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
  authWithGoogle,
  logout,
  authCheck,
  // getMessagesFromServer,
  // postMessageToServer,
  // updateMessageOnServer,
  // deleteMessageFromServer,
  // deleteMessagesFromServer,
};
