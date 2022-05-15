import axios from "axios";
import { toast } from "react-toastify";
import { GET_ALL_QUESTION,DEMO_CALL_API, GET_DETAIL_QUESTION, CREATE_QUESTION } from "../common/path_api";

export const demoCallApi = async () => {
  try {
    const response = await axios.get(DEMO_CALL_API);
    if (response.status === 200) {
      return response.data;
    } else {
      return response;
    }
  } catch (err) {
    console.error(err);
    toast.error(err);
    return err;
  }
};

export const getAllQuestion = async () => {
  try {
    const response = await axios.get(GET_ALL_QUESTION);
    if (response.status === 200) {
      return response.data;
    } else {
      return response;
    }
  } catch (err) {
    console.error(err);
    toast.error(err);
    return err;
  }
};

export const createQuestion = async (data) => {
  try {
    const response = await axios.post(CREATE_QUESTION, data);
    if (response.status === 200) {
      return response.data;
    } else {
      return response;
    }
  } catch (err) {
    console.error(err);
    toast.error(err);
    return err;
  }
};

export const getDetailQuestion = async (id) => {
  try {
    const response = await axios.get(GET_DETAIL_QUESTION+ id + '/');
    if (response.status === 200) {
      return response.data;
    } else {
      return response;
    }
  } catch (err) {
    console.error(err);
    toast.error(err);
    return err;
  }
};