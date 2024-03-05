/**
 * useMemo : Memorization 기법을 사용한 리액트 hook
 *          연산 결과를 기억해두고, 동일한 입력이 들어오면 기억해둔 데이터를 변환하는 기법
 * [1] import React, {useMemo} from 'react';
 * [2] useMemo(()=>{//...},[])
 *      (1) 메모이제이션 기법을 사용할 콜백 함수
 *      (2) 추적할 요소의 배열
 */

import { useMemo, useState } from "react";

export default function useMemoTest(){
    const [num1, setNum1] = useState(0);
    const [num2, setNum2] = useState(0);

    // function semResult(){
    //     console.log("sumResult실행");
    //     return num1 + num2;
    // }

    const sum = useMemo(()=>{
        console.log("sumResult실행");
        return num1 + num2;
    },[num1,num2])



    return(
        <div className="center">
            <div>
                <button onClick={()=>setNum1(num1+1)}>Num1(1증가)</button> &nbsp;
                <button onClick={()=>setNum2(num2+1)}>Num2(1증가)</button>
            </div>
            <hr />
            num1 : {num1} <br></br>
            num2 : {num2} <br/>
            num1 + num2 = {sum}
        </div>
    )
}