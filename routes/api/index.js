const router = require("express").Router();
const adminRoutes = require("./admin");
const submissionRoutes = require("./submit");

// admin routes
router.use("/admin", adminRoutes);

// contact routes
router.use("/contact", submissionRoutes);

module.exports = router;