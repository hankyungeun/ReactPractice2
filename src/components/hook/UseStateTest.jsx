/**
 * -훅(hook)
 *  : 함수형 컴포넌트에서 사용
 *  상태(state)와 생명주기(life cycle) 기능을 사용할 수 있도록 해주는 함수
 * 
 * - useState : 상태를 관리할 수 있도록 해주는 함수(생성, 변경)
 * 
 *  [1] import React, {useState} from 'react';
 *  [2] 생성
 *              const [변수명, 함수명] = useState([초기값]);
 *              - 변수명 : 현재 상태의 데이터를 저장하는 공간
 *              - 함수명 : 해당 상태의 데이터를 변경하는 함수(이름)
 *  [3] 사용
 *              - 현재 상태의 데이터를 사용하고자 하면? `변수명`
 *                  * HTML 내에서 사용 시 `{변수명}`
 *                  * 스크립트 내에서 사용 시 `변수명`
 *              - 해당 상태의 데이터를 변경하고자 하면? 함수명(변경할 값)
*/

import { useState } from "react";

export default function UseStateTest(){
    const [num, setNum] = useState(1);
    const [inputNum, setInputNum] = useState(1);
    const [count, setCount] = useState(0);

    function changeNum(event){
        setInputNum(parseInt(event.target.value));
    }

    function addNum(){
        setNum(num+inputNum);
        setCount(count+1);
    }
    function minusNum(){
        setNum(num-inputNum);
        setCount(count+1);
    }


    return(
        <div className="center">
            <div>
                <button className="w-85" onClick={()=>addNum()}>+</button>
                <button className="w-85" onClick={minusNum}>-</button>
            </div>
            <input type="text" value={num}/>
            <input type="text" placeholder="증감시킬 값을 입력" onChange={changeNum}/>
            <p>누른 횟수 : {count}</p>
        </div>
    );
}

// import React, { useState } from 'react';

// export default function UseStateTest() {
//     const [number, setNumber] = useState(1);
//     const [num2, setNum2] = useState(0);

//     function addNumber() {
//         setNumber(number+num2);
//     }

//     function minusNumber() {
//         setNumber(number-num2);
//     }

//     return(
//         <div class="center">
//             <div>
//                 <button className="w-85 m-1 btn-s1" onClick={()=>addNumber()}>+</button>
//                 <button className="w-85 m-1 btn-s1" onClick={minusNumber}>-</button>
//             </div>
//             <input type="text" value={number} /><br/>
//             <input type="text" defaultValue={num2} 
//                    onChange={(ev)=>{ setNum2(Number(ev.target.value));}} 
//                    placeholder='증감시킬 값을 입력' />
//         </div>
//     );
// }