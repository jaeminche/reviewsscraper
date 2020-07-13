import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  loading: false,
  hasErrors: false,
  form: { search: "" },
  companies: []
};

const companiesSlice = createSlice({
  name: "companies",
  initialState,
  reducers: {
    changeField: (state, { payload: { form, key, value } }) => {
      state[form][key] = value;
    },
    getCompanies: state => {
      state.loading = true;
    },
    getCompaniesSuccess: (state, { payload }) => {
      state.comments = payload;
      state.loading = false;
      state.hasErrors = false;
    },
    getCompaniesFailure: state => {
      state.loading = false;
      state.hasErrors = true;
    }
  }
});

export const {
  changeField,
  getCompanies,
  getCompaniesSuccess,
  getCompaniesFailure
} = companiesSlice.actions;
export const companiesSelector = state => state.companies;
export default companiesSlice.reducer;

export function fetchCompanies(companyname) {
  return async dispatch => {
    dispatch(getCompanies());

    try {
      const response = await fetch(
        `https://www.jobplanet.co.kr/search?query=${companyname}`
      );
      console.log(response);
      const data = await response.json();

      dispatch(getCompaniesSuccess(data));
    } catch (error) {
      dispatch(getCompaniesFailure());
    }
  };
}
