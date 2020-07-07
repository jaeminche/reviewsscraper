import React, { Component } from "react";
import Request from "react-http-request";
import ReactHtmlParser /*, { processNodes, convertNodeToElement, htmlparser2}*/ from "react-html-parser";

export default class App extends Component {
  render() {
    const companyname = "비바리퍼블리카";
    return (
      <Request
        url={`https://www.jobplanet.co.kr/search?query=${companyname}`}
        method="get"
        // accept="application/json"
        verbose={true}
      >
        {({ error, result, loading }) => {
          if (loading) {
            return <div>loading...</div>;
          } else {
            console.log(result.text, ReactHtmlParser(result.text));
            return (
              <div>
                {/* {JSON.stringify(result)} */}
                {ReactHtmlParser(result.text)}
              </div>
            );
          }
        }}
      </Request>
    );
  }
}
