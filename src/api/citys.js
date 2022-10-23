import HTTP from "../utils/fetch";

export default {
  getCity() {
    return HTTP.get("/");
  },
};
