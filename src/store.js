import { configureStore } from "@reduxjs/toolkit";
import ProjectSlice from "./App/Portfolio/Projects/ProjectTile/ProjectSlice";
import createSagaMiddleware from "redux-saga";
import { watchFetchProjects } from "./App/Portfolio/Projects/ProjectTile/ProjectSaga";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: {
        projects : ProjectSlice,
    },
    middleware: [ sagaMiddleware],
});

sagaMiddleware.run(watchFetchProjects);

export default store;