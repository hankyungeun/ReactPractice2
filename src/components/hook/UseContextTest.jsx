import { createContext, useState } from "react";
import ResultArea from "../ResultArea";

export const ResultContext = createContext();

export default function UseContextTest(){
    const [hobby, setHobby] = useState("");
    const [result, setResult] = useState("");

    

    return(
        <>
        {/* Provider : 하위 컴포넌트에게 context를 전달 */}
        <ResultContext.Provider value={result}>
            <input type="text" value={hobby}
                    onChange={(e)=>setHobby(e.target.value)}/>
            <button onClick={()=>setResult(`취미는 ${hobby}입니다.`)}>결과 보기</button>
            <hr />
            {/* <ResultArea hobby={result}/> */}
            <ResultArea />
        </ResultContext.Provider>
        </>
    )
}