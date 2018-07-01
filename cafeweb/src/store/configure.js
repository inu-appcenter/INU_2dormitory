//리덕스 스토어를 생성하는 함수를 모듈화하여 내보내는 js
import { createStore } from "redux";
import modules from "./modules";

const configure = () => {
  const devTools =
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__();
  const store = createStore(modules);
  return store;
};

export default configure;
