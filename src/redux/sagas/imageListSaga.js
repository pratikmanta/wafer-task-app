import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import { GET_IMAGE_LIST, GET_SEARCHED_IMAGE_LIST } from "../actions/actions";
import { getImageListSuccess } from "../reducers/imageListSlice";
import { callAPI } from ".";
import { getSearchedImageSuccess } from "../reducers/searchImageSlice";

let envKey = process.env.REACT_APP_API_KEY
let BASE_URL = process.env.REACT_APP_BASE_URL

// fetch list of images saga
export function* fetchImageSaga() {
    try {
        let listImagesURL = BASE_URL + `/photos?client_id=${envKey}&per_page=30`
        let result = yield call(() => callAPI({ url: listImagesURL, method:'GET'}));
        const { data } = result
        yield put(getImageListSuccess(data));
      } 
      catch (e) {
        console.log(e)
    }
}

// fetch searched image saga
export function* fetchSearchedImage(action) {
    try {
        let searchURL = BASE_URL + `/search/photos?client_id=${envKey}&page=1&query=${action.payload}&per_page=30`
        let result = yield call(() =>
          callAPI({ 
            url: searchURL, 
            method:'GET', 
        }));
        const { results } = result.data
        yield put(getSearchedImageSuccess(results));
      } 
      catch (e) {
        console.log(e)
    }
}

function* imageSagas(){
  yield takeEvery(GET_IMAGE_LIST, fetchImageSaga)
  yield takeLatest(GET_SEARCHED_IMAGE_LIST, fetchSearchedImage)
}


export default imageSagas


