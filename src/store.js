import { configureStore } from "@reduxjs/toolkit";
import ProjectSlice from "./App/Portfolio/Projects/ProjectTile/ProjectSlice";
import createSagaMiddleware from "redux-saga";
import { watchFetchProjects } from "./App/Portfolio/Projects/ProjectTile/ProjectSaga";
import themeSlice from "./App/About/ThemeButton/themeSlice";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: {
        theme: themeSlice,
        projects : ProjectSlice,
    },
    middleware: [ sagaMiddleware],
});

sagaMiddleware.run(watchFetchProjects);

export default store;