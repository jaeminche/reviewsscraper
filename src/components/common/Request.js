import React, { Component, useState, useEffect } from "react";
import Request from "react-http-request";
import ReactHtmlParser /*, { processNodes, convertNodeToElement, htmlparser2}*/ from "react-html-parser";

const App = () => {
  const [searchword, setSearchword] = useState("");
  const onChange = e => {
    e.preventDefault();
    console.log("==13", e.target.value);
    setSearchword(e.target.value);
  };
  return (
    <Request
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
          console.log("==11", sliced, endIndex);
          return (
            <div>
              <input value={searchword} onChange={e => onChange(e)}></input>
              {searchword}의 평점은 {sliced.slice(0, endIndex)}입니다
            </div>
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
export default App;
