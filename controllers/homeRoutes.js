const router = require("express").Router();
const { User } = require("../models");

router.get("/", async (req, res) => {
  try {
    const UserInfo = await User.findByPk(1);

    // TO convert my Sequelize object into a useable object
    const serializedUserData = UserInfo.get({ plain: true });
    console.log(serializedUserData);
    res.render("home", serializedUserData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
