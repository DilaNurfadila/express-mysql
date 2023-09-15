require("dotenv").config();
const PORT = process.env.PORT || 5000;
const express = require("express");

const usersRoutes = require("./routes/users.js");

const middlewareLogRequst = require("./middlewares/logs");
const upload = require("./middlewares/multer.js");

const app = express();

app.use(middlewareLogRequst);
app.use(express.json());
app.use("/assests", express.static("public"));

app.use("/users", usersRoutes);
app.post("/upload", upload.single("photo"), (req, res) => {
  res.json({
    message: "Upload berhasil",
  });
});

app.use((err, req, res, next) => {
  res.json({
    message: err.message,
  });
});

app.listen(PORT, () => {
  console.log(`Server berhasil di running di port ${PORT}`);
});
