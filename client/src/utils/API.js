import axios from "axios";

// The images method retrieves images from the server
// It accepts a "query" or term to search the image api for

export default {
  getImages: function(query) {
    return axios.get("api/images", { params: { fields: 'id,thumb', exclude_nudity:true, page_size:12, phrase: query } });
	}
	// getImages: function(query) {
  //   return axios.get({
	// 		baseURL: "https://api.gettyimages.com/v3/search/images",
	// 		params: { fields: 'id,thumb', exclude_nudity:true, page_size:12, phrase: query },
	// 		headers: {'Accept': 'application/json','Api-Key': '2f89sngq42hskjhrk4xr8ra5'}
	// 	});
  // }
};

// router.get("/images", (req, res) => {
//   axios
//     .get("https://api.gettyimages.com/v3/search/images", {params: req.query},{header: {Accept: 'application/json','Api-Key': '2f89sngq42hskjhrk4xr8ra5'}})
//     .then(({ data: { results } }) => res.json(results))
//     .catch(err => res.status(422).json(err));
// });