import axios from "axios";
const BACKEND_URL = "http://localhost:8080/api";

 const getCards = async () => {
  try {
    const { data } = await axios.get(`${BACKEND_URL}/cards`);
    return data;
  } catch (error) {
    console.log(error);
  }
};

 const getColumns = async () => {
  try {
    const { data } = await axios.get(`${BACKEND_URL}/columns`);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export {
  getCards,
  getColumns
}
