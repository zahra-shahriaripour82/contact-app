import { useState } from "react"

import {v4} from "uuid";
import ContactList from "./ContactList"

import { inputs as inputsData }  from "../constant/input";
import styles from "./Contact.module.css"
import Search from "./Search";
function Contacts() {
    
    const[search,setSearch]=useState([]);


    
    const [contacts,setContacts]=useState([])
    console.log(contacts);
    
    const[inputs,setInput]=useState(contacts)
console.log(inputs);


    const [alert,setAlert]=useState("");
    const [contact,setContact]=useState({
        id:"",
        name:"",
        lastName:"",
        email:"",
        phone:"",
    })
// const [edit,setEdit]=useState({
//     id:contact.id,
//         name:"",
//         lastName:"",
//         email:"",
//         phone:"",
// })

    const changeHandler=()=>{
        const name=event.target.name;
        const value=event.target.value;
setContact((contact)=>({...contact,[name]:value}))


    }
const addHandler=()=>{
    if(!contact.name || !contact.lastName||
         !contact.email|| !contact.phone){
            setAlert("Please enter valid data !")
            return;
         }

setAlert("");
    const newContact={...contact,id:v4()}
   setContacts((contacts)=>[...contacts,newContact]);
   setContact(
    {
        name:"",
        lastName:"",
        email:"",
        phone:"",
    }
   )
//    updateContact(contact)
}
console.log(contacts);
//  setInput(contacts);
const deletHandler=(id)=>{
    const newContacts=contacts.filter((contact)=>contact.id!==id);
    setContacts(newContacts)
}
const editHandler=(contact)=>{
// const editConact=contacts.filter((contact)=>contact.id===id
setContact({
    name:contact.name,
    lastName:contact.lastName,
    email:contact.email,
    phone:contact.phone,
})
}
















const seerchHandler=() => {
    if(search) {

        const newSearch=contacts.filter((contact)=>
    contact.name.toLowerCase().includes(search)
    );
    setInput(newSearch);
     setContacts(newSearch)
    console.log(newSearch);
    
    }
 else {
    setInput(contacts);
    setContacts(...contacts,contacts)
    console.log(contacts);
    
}
}

return (
    <>
    <Search search={search} setSearch={setSearch} seerchHandler={seerchHandler}/>
    {/* searchHandler={search} */}
 
    <div className={styles.container}>
        <div className={styles.form}>
{inputsData.map((input,index)=>( 
    <input
    key={index}
    type={input.value}
    placeholder={input.placeholder}
    name={input.name}
    value={contact[input.name]}
    onChange={changeHandler}
    
    
    
    
    />
    
))}
            <button onClick={addHandler}>Add Contact</button>







{/* 
            <input type="text" placeholder="Name"   name="name" value={contact.name} onChange={changeHandler}/>
            <input type="text" placeholder="Last Name"  name="lastName" value={contact.lastName} onChange={changeHandler}/>
            <input type="email" placeholder="Email"  name="email" value={contact.email} onChange={changeHandler} />
            <input type="number" placeholder="Phone" name="phone" value={contact.phone} onChange={changeHandler} /> */}
        </div>
        <div className={styles.alert}>{alert && <p>{alert}</p>}</div>
        <ContactList contacts={contacts} deletHandler={deletHandler} editHandler={editHandler}/>
    </div>
    </>
  )
}

export default Contacts