import axios from "axios";

interface NetworkProps {
  method?: any;
  data?: object | string | number;
  dispatch?: () => void;
  route?: string;
  headers?: any;
  loader?: boolean;
  params?: string;
}

const execute = ({
  method = "get",
  route,
  data,
  params,
  headers
}: NetworkProps) => {

  return new Promise<any>((resolve, reject) => {

    const requestObject = {
      method,
      data,
      params,
      url: route,
      headers: {
        ...headers,
      }
    }

    axios.request(requestObject)
    .then((response) => {
      resolve(response.data)
    })
    .catch(err => {
      reject(err.response);      
    })

  });

};

export default execute;
