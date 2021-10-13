import axios from "axios";
import { store } from "../store/store";
// import { reqAuth401 } from "../actions/AuthActions";

//REACT_APP_API_HOST=http://localhost:3003
let _serverAdress = process.env.REACT_APP_API_HOST;
let _pathPrefix = "api/v1";
let getPath = (name: any) => {
  return `${_pathPrefix}/${name}`;
};

let _pathTable = new Map<string, string>();
let _api = axios.create({
  baseURL: _serverAdress,
  timeout: 30000,
  headers: { "X-Requested-With": "XMLHttpRequest" },
});

_api.interceptors.response.use(
  (response) => response,
  (error) => {
    console.log("interceptors:", error);
    let result = {
      status: 200,
      data: {},
    };
    switch (error.response.status) {
      case 200:
        result = { status: 200, data: error.response.data };
        break;
      case 401:
        result.status = 401;
        break;

      default:
        break;
    }
    // store.dispatch(reqAuth401(result));
    throw error;
  }
);
class WebApi {
  static setPathPrefix(prefix: any) {
    // _pathPrefix = prefix;

    _pathTable.set("userInfo", getPath("userInfo"));
    _pathTable.set("initData", getPath("initData"));
    _pathTable.set("feedData", getPath("feedData"));
    _pathTable.set("workSpace", getPath("workSpace"));
    _pathTable.set("countryInfo", getPath("countryInfo"));
  }

  static getRoute(routeName: string) {
    try {
      return _pathTable.get(routeName);
    } catch (error) {
      return null;
    }
  }

  static makeGetReq(url: string | undefined, params = {}, period?: string) {
    if (url === undefined) {
      throw new Error("url is undefined ");
    }
    return _api
      .get(String(url), { params: params })
      .then((resp) => {
        return resp;
      })
      .catch((error) => {
        console.log("error Makes GET request:", error.response.status);
        if (process.env.NODE_ENV === "development") {
          console.error("development", error);
        }
        throw error;
      });
  }

  static makePostReq(url: string, data: object, params = {}) {
    data = data == null ? {} : data;

    return _api
      .post(url, JSON.stringify(data), { params: params })
      .then((resp) => {
        return resp;
      })
      .catch((error) => {
        if (process.env.NODE_ENV === "development") {
          console.error(error);
        }
        return error;
      });
  }

  static userInfo() {
    return WebApi.makeGetReq(_pathTable.get("userInfo")).then((resp) => {
      return { status: 200, data: resp.data };
    });
  }

  static initData() {
    return WebApi.makeGetReq(_pathTable.get("initData")).then((resp) => {
      return { status: 200, data: resp.data };
    });
  }
  static getFeed() {
    return WebApi.makeGetReq(_pathTable.get("feedData")).then((resp) => {
      return { status: 200, data: resp.data };
    });
  }

  static getWorkSpaces() {
    return WebApi.makeGetReq(_pathTable.get("workSpace")).then((resp) => {
      return { status: 200, data: resp.data };
    });
  }

  static getCountryInfo(eventId: number | string, period: string) {
    return WebApi.makeGetReq(
      _pathTable.get("countryInfo"),
      eventId,
      period
    ).then((resp) => {
      return { status: 200, data: resp };
    });
  }
}

export default WebApi;
