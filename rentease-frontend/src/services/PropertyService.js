import axios from "axios";

const BASE_URL = "http://localhost:8080/api/properties";

class PropertyService {
  getAllProperties() {
    return axios.get(BASE_URL);
  }

  addProperty(property) {
    return axios.post(BASE_URL, property);
  }
}

export default new PropertyService();
