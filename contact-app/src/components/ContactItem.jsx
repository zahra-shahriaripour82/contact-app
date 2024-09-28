import { useContext } from "react";
import styles from "./ContactItem.module.css"

import { UserContext } from "./Contacts";



function ContactItem() {
  //{data,deletHandler,editHandler}
   //   const{id,lastName,name,email,phone}=data;
  const { contacts,contacts:id,lastName,name,email,phone,deletHandler,editHandler}=  useContext(UserContext);
  console.log(contacts);
  
    
  return (
<li className={styles.item}>
            <p>
    {/* <input type="checkbox" name="" id="" checked={false} className="checkBox" />  */}
                
                {name} 
                -
                {lastName}
            </p>
            <p>
                {email}<span>📧</span>
            </p>
            <p>
               {phone} <span>📱</span> 
            </p>
            <button onClick={()=> deletHandler(id)}>🗑️</button>
            <button onClick={()=> editHandler(contacts)}>🖊</button>
            </li>);
 
}

export default ContactItem