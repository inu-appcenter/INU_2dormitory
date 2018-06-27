import React from "react";

const Input = () => {
    return (
        <div>
            <form>
                <table border="1">
                    <tr>
                        <th colSpan="2"></th>
                        <th>월요일</th>
                        <th>화요일</th>
                        <th>수요일</th>
                        <th>목요일</th>
                        <th>금요일</th>
                        <th>토요일</th>
                        <th>일요일</th>
                    </tr>
                    <tr>
                        <td rowspan="2">조식</td>
                        <td>A</td>
                        <td>
                            <textarea ></textarea>
                        </td>
                        <td>
                            <textarea ></textarea>
                        </td>
                        <td><textarea></textarea></td>
                        <td><textarea></textarea></td>
                        <td><textarea></textarea></td>
                        <td><textarea></textarea></td>
                        <td><textarea></textarea></td>
                    </tr>
                    <tr>
                        <td>B</td>
                        <td><textarea></textarea></td>
                        <td><textarea></textarea></td>
                        <td><textarea></textarea></td>
                        <td><textarea></textarea></td>
                        <td><textarea></textarea></td>
                        <td><textarea></textarea></td>
                        <td><textarea></textarea></td>
                    </tr>
                    <tr>
                        <td rowSpan="2">중식</td>
                        <td>A</td>
                        <td><textarea></textarea></td>
                        <td><textarea></textarea></td>
                        <td><textarea></textarea></td>
                        <td><textarea></textarea></td>
                        <td><textarea></textarea></td>
                        <td><textarea></textarea></td>
                        <td><textarea></textarea></td>
                    </tr>
                    <tr>
                        <td>B</td>
                        <td><textarea></textarea></td>
                        <td><textarea></textarea></td>
                        <td><textarea></textarea></td>
                        <td><textarea></textarea></td>
                        <td><textarea></textarea></td>
                        <td><textarea></textarea></td>
                        <td><textarea></textarea></td>
                    </tr>
                    <tr>
                        <td rowSpan="2">석식</td>
                        <td>A</td>
                        <td><textarea></textarea></td>
                        <td><textarea></textarea></td>
                        <td><textarea></textarea></td>
                        <td><textarea></textarea></td>
                        <td><textarea></textarea></td>
                        <td><textarea></textarea></td>
                        <td><textarea></textarea></td>
                    </tr>
                    <tr>
                        <td>B</td>
                        <td><textarea></textarea></td>
                        <td><textarea></textarea></td>
                        <td><textarea></textarea></td>
                        <td><textarea></textarea></td>
                        <td><textarea></textarea></td>
                        <td><textarea></textarea></td>
                        <td><textarea></textarea></td>
                    </tr>
                </table>
                <br/>
                <input type="submit"></input>
            </form>
        </div>
    )
};

export default Input;
//카운터 뷰만 보여주는 컴포너트
/*
import React from "react";

const Counter = ({ number, onIncrement, onDecrement }) => {
  return (
    <div>
      <h1>{number} </h1>
      <button onClick={onIncrement}> 증가 (+)</button>
      <button onClick={onDecrement}> 감소 (-)</button>
    </div>
  );
};

Counter.defaultProps = {
  number: 0
};

export default Counter;
*/