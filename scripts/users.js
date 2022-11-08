import express from "express";
import { v4 as uuidv4 } from "uuid";

uuidv4();

const router = express.Router();

let users = [];

router.get("/", (req, res) => {
  res.send(users);
});

router.get("/:id", (req, res) => {
  const id = req.params.id;

  const foundUser = users.find((user) => user.id === id);

  res.send(foundUser);
});

router.post("/", (req, res) => {
  const user = req.body;
  const Id = uuidv4();
  const userId = { ...user, id: Id };
  users.push(userId);
  res.send(`POSTING NEW USER ${user.firstName}`);
});

router.delete("/:id", (req, res) => {
  const id = req.params.id;
  users = users.filter((user) => user.id !== id);
  res.send(`user with the id: ${id} was delete it`);
});
router.patch("/:id", (req, res) => {
  const id = req.params.id;
  const { firstName, lastName, city } = req.body;
  const user = users.find((item) => item.id === id);

  if (firstName) user.firstName = firstName;
  if (lastName) user.lastName = lastName;
  if (city) user.city = city;
  res.send(`user with ${id} has beed upoload`);
});

export default router;
// const chunkArray = (arr, len) => {
//   // Init chunked arr
//   const chunkedArr = [];

//   // Loop through arr
//   arr.forEach((val) => {
//     // Get last element
//     const last = chunkedArr[chunkedArr.length - 1];

//     // Check if last and if last length is equal to the chunk len
//     if (!last || last.length === len) {
//       chunkedArr.push([val]);
//     } else {
//       last.push(val);
//     }
//   });

//   return chunkedArr;
// };

// export default chunkArray;
