import styles from "./ContactItem.module.css"



function ContactItem({data,deletHandler,editHandler}) {
    const{id,lastName,name,email,phone}=data;
    
    
  return (
<li className={styles.item}>
            <p>
    <input type="checkbox" name="" id="" checked={false} className="checkBox" /> 
                
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
            <button onClick={()=> editHandler(data)}>🖊</button>
            </li>);
 
}

export default ContactItem