//두가지 화면을 화면에 레이아웃 해주는역활
import React from 'react';

const AppTemplate = ({input}) => {
  return (
    <div className="app-template">
      <div className="input">{input}</div>
    </div>
  );
};

export default AppTemplate;