const express = require("express");
const router = express.Router();
const BonPlan = require("../models/BonPlan");

//Get all the bonPlans
router.get("/", async (req, res) => {
  try {
    const bonPlans = await BonPlan.find();
    res.json(bonPlans);
  } catch (err) {
    res.json({ message: err });
  }
});

//Submit a bonPlan
router.post("/", async (req, res) => {
  const bonPlan = new BonPlan({
    title: req.body.title,
    desc: req.body.desc,
    categorie: req.body.categorie,
    d_depot: req.body.d_depot,
    d_debut: req.body.d_debut,
    d_fin: req.body.d_fin,
    url_img: req.body.url_img,
    a_la_une: req.body.a_la_une,
    enseigne: req.body.enseigne
  });

  try {
    const savedBonPlan = await bonPlan.save();
    res.json(savedBonPlan);
  } catch (err) {
    res.json({ message: err });
  }
});

//Get a specific bonPlan
router.get("/:bonPlanId", async (req, res) => {
  try {
    const bonPlan = await BonPlan.findById(req.params.bonPlanId);
    res.json(bonPlan);
  } catch (err) {
    res.json({ message: err });
  }
});

//Delete a specific bonPlan
router.delete("/:bonPlanId", async (req, res) => {
  try {
    const removedBonPlan = await BonPlan.remove({ _id: req.params.bonPlanId });
    res.json(removedBonPlan);
  } catch (err) {
    res.json({ message: err });
  }
});

//Update a specific bonPlan
router.patch("/:bonPlanId", async (req, res) => {
  try {
    const updatedBonPlan = await BonPlan.updateOne(
      { _id: req.params.bonPlanId },
      {
        $set: {
          title: req.body.title,
          desc: req.body.desc,
          categorie: req.body.categorie,
          d_depot: req.body.d_depot,
          d_debut: req.body.d_debut,
          d_fin: req.body.d_fin,
          url_img: req.body.url_img,
          a_la_une: req.body.a_la_une,
          enseigne: req.body.enseigne
        }
      }
    );
    res.json(updatedBonPlan);
  } catch (err) {
    res.json({ message: err });
  }
});

//Get aLaUne plans
router.get("/aLaUne/:aLaUne", async (req, res) => {
  try {
    const bonPlan = await BonPlan.find({ a_la_une: req.params.aLaUne });
    res.json(bonPlan);
  } catch (err) {
    res.json({ message: err });
  }
});

//Get plans by category
router.get("/categorie/:cat", async (req, res) => {
  try {
    const bonPlan = await BonPlan.find({ categorie: req.params.cat });
    res.json(bonPlan);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
