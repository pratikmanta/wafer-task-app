import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import imageListReducer from './reducers/imageListSlice';
import searchImageReducer from './reducers/searchImageSlice';
import rootSaga from './sagas';

// initialize saga middleware
const sagaMiddleware = createSagaMiddleware()

// store configs 
const store = configureStore({
    reducer: {
        imagesListData: imageListReducer,
        searchImageList: searchImageReducer
    },
    middleware: [sagaMiddleware]
})

sagaMiddleware.run(rootSaga)

export default store