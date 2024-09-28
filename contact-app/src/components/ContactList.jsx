import {  useContext } from "react";
import ContactItem from "./ContactItem"
import styles from "./Contactslist.module.css";
import { UserContext } from "./Contacts";


//{contacts,deletHandler,editHandler}
function ContactList() {
 const {contacts}=useContext(UserContext);   
    console.log(contacts);
    
  return (
    <div className={styles.container}>
        <h3>Contact List</h3>
        {contacts.length ? (
            <ul className={styles.contacts}>
                {contacts.map((contact)=>(
<ContactItem
 key={contact.id} 
//  data={contact}
// deletHandler={deletHandler}
// editHandler={editHandler}
 />
                ))}
            </ul>
):(
    <p className={styles.meesage}>No contact yet !</p>




        )}
    </div>
  )
}

export default ContactList