/**
 * 함수형 컴포넌트(Functional Component)
 * - 클래스형 컴포넌트에 비해 비교적간단
 * - React v16.8이후로 훅(hook)기능이추가되어
 *   상태(state), 생명주기(life cycle) 관리가 가능하게 됨
 */
import { useEffect, useState } from "react";
function FunctionalComponent(){
    const [message,setMessage] = useState('hi')
    
    // useEffect:랜더링 시점마다 실행되는 훅(hook)
    // - 처음 한번만 실행하고자 하는 경우 두 번째 인자 값으로[]작성
    useEffect(()=>{
        setMessage("나는 함수형 컴포넌트 입니다!")
    },[])
    function updateMessage(){
        setMessage("I'm functional component");
    }

    
    return(
        <>
            <button onClick={updateMessage}>내용 바꾸기</button>
            <p>
                {message}
            </p>
        </>
    );
}

export default FunctionalComponent;