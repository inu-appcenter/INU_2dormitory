//두가지 화면을 화면에 레이아웃 해주는역활
import React from "react";

const AppTemplate = ({ domitory }) => {
  return (
    <div className="app-template">
      <div className="domitory">{domitory}</div>
    </div>
  );
};

export default AppTemplate;
