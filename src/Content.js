import React from "react";
import { lookup } from "./constants.js";
const Content = (title) => {
  const contentDetails = lookup[title["title"]];
  const contentType = contentDetails["type"],
    contentSrc = contentDetails["src"];
  if (contentType === "iframe") {
    return <iframe title={"video"} src={contentSrc}></iframe>;
  }
  if (contentType === "img") {
    return <img src={require(`./assets/${contentSrc}`)} alt="dead pic lmao" />;
  }
  if (contentType === "textarea") {
    return <textarea></textarea>;
  }
};

export default Content;
