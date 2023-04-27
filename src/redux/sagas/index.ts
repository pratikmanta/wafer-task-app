import { all } from 'redux-saga/effects';
import Axios from "axios";
import imageSagas from './imageListSaga';

export let callAPI = async ({ url, method, data }: any) => {
  return await Axios({
    url,
    method,
    data
  });
};

export default function* rootSaga() {
  yield all([imageSagas()])
}