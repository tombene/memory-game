const axios = require("axios");
const router = require("express").Router();

router.get("/images", (req, res) => {
  axios
    .get("https://api.gettyimages.com/v3/search/images", {params: req.query},{header: {Accept: 'application/json','Api-Key': '2f89sngq42hskjhrk4xr8ra5'}})
    .then(({ data: { results } }) => res.json(results))
    .catch(err => res.status(422).json(err));
});

module.exports = router;
