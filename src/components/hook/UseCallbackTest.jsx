import { useCallback, useEffect, useState } from "react";

/**
 * useCallback : Memoization 기법 중 하나로 최적화를 해주는 기법
 *  - 인자로 전달된 콜백함수 그 자체를 기억해주는 기법
 * 
 * const 변수 = useCallback(() => {
 *  return 결과
 * }, [콜백함수 내에서 사용할 상태(변수)])
 *      첫 번째 인자 : 콜백함수
 *      두 번째 인자 : 콜백함수 내에서 사용될 상태/변수/값
 */
export default function UseCallbackTest(){
    const[num, setNum] = useState(0);

    // const checkNumber = () => {
    //     console.log(`숫자 : ${num}`);
    //     return;
    // }

    const checkNumber = useCallback(()=>{
        console.log(`숫자 : ${num}`);
        return;
    })

    useEffect(()=>{
        console.log('checkNumber 함수 변경');
        
    },[checkNumber])
    return(
        <>
            <input type="number" value={num}
                onChange={(e)=>setNum(e.target.value)} />
            &nbsp;
            <button onClick={checkNumber}>숫자확인</button>
        </>
    )
}