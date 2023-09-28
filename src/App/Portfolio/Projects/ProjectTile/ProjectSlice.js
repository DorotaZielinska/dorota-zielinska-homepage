import { createSlice } from "@reduxjs/toolkit";

const projectsSlice = createSlice({
  name: "projects",
  initialState: {
    status: "initial",
    projects: null,
  },
  reducers: {
    fetchProjects: () => ({
      status: "loading",
      projects: null,
    }),
    fetchProjectsSuccess: (_, { payload: projects }) => ({
      status: "success",
      projects,
    }),
    fetchProjectsError: () => ({
      status: "error",
      projects: null,
    }),
  },
});

export const { fetchProjects, fetchProjectsError, fetchProjectsSuccess } =
  projectsSlice.actions;

const selectProjectsState = (state) => state.projects;
export const selectProjects = (state) => selectProjectsState(state).projects;
export const selectStatus = (state) => selectProjectsState(state).status;

export default projectsSlice.reducer;
