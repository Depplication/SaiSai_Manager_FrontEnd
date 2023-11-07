import axios from "axios";
import { customAxios } from "../../lib/axios/axios";
import { REQUEST_TOKEN_KEY } from "../../constant/token";

const useUser = () => {
  const getRetailerList = async ({ page, size }) => {
    const { data } = await axios.get(
      "http://3.39.212.61:9090" +
        `/admin/retailer/list?page=${page}&size=${size}`,
      {
        headers: {
          [REQUEST_TOKEN_KEY]:
            "Bearer " +
            "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbiIsImlhdCI6MTY5OTM1OTM2MSwiZXhwIjoxNjk5MzYyOTYxfQ.mJD4HM_1ISI6H81gEB28EHu2aSamJN8l4XElT5ccqE4",
        },
      }
    );
    return data;
  };

  const getUserList = async ({ page, size }) => {
    const { data } = await axios.get(
      "http://3.39.212.61:9090" + `/admin/user/list?page=${page}&size=${size}`,
      {
        headers: {
          [REQUEST_TOKEN_KEY]:
            "Bearer " +
            "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbiIsImlhdCI6MTY5OTM1OTM2MSwiZXhwIjoxNjk5MzYyOTYxfQ.mJD4HM_1ISI6H81gEB28EHu2aSamJN8l4XElT5ccqE4",
        },
      }
    );
    console.log(data);
    return data;
  };

  return { getUserList, getRetailerList };
};
export default useUser;
