import { useState } from "react";

function CountingLetters() {
    const [letters, setLetters] = useState("");
    return (
        <div className="center">
            <textarea className="textarea-letters" 
                      onChange={(e)=>setLetters(e.target.value)}
                      value={letters}>
            </textarea>
            <hr />
            <p>
               공백 포함 <span className="f-orange f-bold">{letters.length}</span> 자
            </p>
            <p>
                공백 제외 <span className="f-orange f-bold">{letters.replace(/ /g,'').length}</span> 자
            </p>
            <hr />
            <div>
                <button className="btn-s1" onClick={()=>alert('언젠가...')}>전체 복사</button>&nbsp;
                <button className="btn-s1" onClick={()=>setLetters("")}>초기화</button>
            </div>
        </div>
    );
}

export default CountingLetters;