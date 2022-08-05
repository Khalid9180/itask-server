const router = require("express").Router();
const authRoutes = require("./auth.routes");
const taskRoutes = require("./task.routes");
const listRoutes = require("./list.routes")

/* GET home page */
router.get("/", (req, res, next) => {
  res.json("All good in here");
});
router.use("/auth", authRoutes);
router.use("/task", taskRoutes);
router.use("/list", listRoutes);



module.exports = router;
