import axios from "axios";

// The images method retrieves images from the server
// It accepts a "query" or term to search the image api for
export default {
  getImages: function(query) {
    return axios.get("search/images", { params: { fields: 'id,thumb', exclude_nudity:true, page_size:12, phrase: query } });
  }
};
