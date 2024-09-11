import { useState } from "react";
import { Link } from "react-router-dom";

const init = {name: "", age: 0};
const Person = () => {
    const [person, setPerson] = useState({...init});
    const [people, setPeople] = useState([]);
    const [search, setSearch] = useState("");
    const [index,setIndex] = useState(people.length);
    const [uindex,setUIndex] = useState(people.length);
    const onChangePerson = (e) => {
        const {name, value} = e.target;
        setPerson({...person, [name]: value});
    }
    const onSubmit = () => {
        setPerson({...init})
        setPeople([...people, {id: index,...person}])
        setIndex(index+1)
    }
    const onDelete = (tId)=>{
        const deletedPeople = people.filter(({id})=> tId!==id);
        setPeople(deletedPeople)
    }
    return <div>
        
        <input 
            name="name" 
            value={person.name} 
            onChange={onChangePerson}/>
        <input name="age" value={person.age} onChange={onChangePerson}/>
        <button onClick={onSubmit}>등록</button>
        <br/>
        <input onChange={(e)=> setSearch(e.target.value)}/>
        <table border={1}>
            <thead>
                <th>name</th>
                <th>age</th>
                <th>수정</th>
                <th>삭제</th>
            </thead>
            {people
                .filter(({name})=> name.includes(search))
                .map(({name, age, id})=> <tr><td>{name}</td><td>{age}</td><td><button>수정</button></td>
                <td><button onClick={()=> onDelete(id)}>삭제</button></td></tr>)}
        </table>
    </div>
}

export default Person;