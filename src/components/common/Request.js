import React, { Component, useState, useEffect } from "react";
import Request from "react-http-request";
import { changeField, companiesSelector } from "../../slices/jobplanet";
import ReactHtmlParser /*, { processNodes, convertNodeToElement, htmlparser2}*/ from "react-html-parser";
import { useDispatch, useSelector } from "react-redux";

const RequestContainer = () => {
  const [searchword, setSearchword] = useState("");
  const { loading, hasErrors, form, companies } = useSelector(
    companiesSelector
  );
  const { search } = form;
  // console.log("search", form);

  const dispatch = useDispatch();
  const onChange = e => {
    e.preventDefault();
    const { name, value } = e.target;
    dispatch(changeField({ form: "form", key: name, value: value }));
  };

  return (
    <Request
      // todo: replace the url with the service the user selects
      url={`https://www.jobplanet.co.kr/search?query=${searchword}`}
      method="get"
      // accept="application/json"
      verbose={true}
    >
      {({ error, result, loading }) => {
        if (loading) {
          return <div>loading...</div>;
        } else if (result !== null) {
          console.log("==12", result);

          const retrieved = result.text;
          const startIndex = retrieved.indexOf('rate_ty02">');
          const sliced = retrieved.slice(startIndex + 11, startIndex + 20);
          const endIndex = sliced.indexOf("</span");
          console.log("==11", sliced, endIndex, sliced.slice(0, endIndex));
          const rating = sliced.slice(0, endIndex);
          dispatch(changeField({ form: "form", key: "rating", value: rating }));
          return (
            <form onSubmit={e => setSearchword(search)}>
              <input
                name="search"
                value={form.search}
                onChange={e => onChange(e)}
              ></input>
              <button type="submit">검색</button>
              <div>
                {searchword}의 평점은 {rating}입니다
              </div>
            </form>
          );
        } else {
          return (
            <div>
              <input value={searchword} onChange={e => onChange(e)}></input>
            </div>
          );
        }
      }}
    </Request>
  );
};
export default RequestContainer;
