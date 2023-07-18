import axios from "axios";

const mountAzpiUrl = () => {
  return `https://api.z-api.io/instances/${process.env.ZAPI_INSTANCE}/token/${process.env.ZAPI_TOKEN}/`
}

export const api = axios.create({
  baseURL: mountAzpiUrl(),
});
