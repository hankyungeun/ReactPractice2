
import { useRef } from "react";
import { Button, Form, Table } from 'react-bootstrap';
import AddressList from "./AddressList";

export default function AddressBook(){

    const addrList = [
        {no: 1, name: "홍길동", phone: "010-1111-1111"},
        {no: 2, name: "아무개", phone: "010-2222-2222"}
    ]

    const optRef = useRef();
    const inputRef = useRef();
    function checkOption(){
        // console.log(document.querySelector("select").value);
        console.log(optRef.current.value);
        const option = optRef.current.value
        const input = inputRef.current.value;
        // 결과가 있으면 해당 내용을 출력

        /*
            addrList.forEach(function(address){
                if(option in address && address[option] == keyword){
                    console.log(`${address.name}의 연락처는 ${address.phone}`);
                    return;
                }
            })
            //address[option]       //option에 저장된 값에 따라 객체의 속성에 접근
                =>address["name"]
                =>address["phone"]
        */
        if(option === 'name'){
            for(let addr of addrList){
                if(input === addr.name){
                    console.log(`${input}의 연락처는 ${addr.phone}입니다.`);
                }
            }
        }
    }
    return(
        <div>
            <div>
                <Form.Select ref={optRef}>
                    <option value={"name"}>이름</option>
                    <option value={"PhoneNumber"}>연락처</option>
                </Form.Select>
                &nbsp;
                <input ref={inputRef} type="text" placeholder="검색어를 입력하세요"/>
                &nbsp;
                <Button variant="dark" onClick={checkOption}>검색</Button>
            </div>
            <br></br>
            <div>
                <Table bordered hover striped variant="dark">
                    <colgroup>
                        <col />
                        <col width={"40%"}/>
                        <col width={"50%"}/>
                    </colgroup>
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>이름</th>
                            <th>연락처</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            addrList.map(function(address){
                                return(
                                    <AddressList key={address.no}
                                                no={address.no}
                                                name={address.name}
                                                phone={address.phone} />
                                )
                            })
                        }
                    </tbody>
                </Table>
            </div>
            <br></br>
            <input type="text" placeholder="이름"/>
            <input type="text" placeholder="연락처"/>
            <Button>추가</Button>
        </div>
    )
}