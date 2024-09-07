 import { FaSearch } from "react-icons/fa";


import styles from "./Search.module.css"
function Search({search,setSearch,seerchHandler}) {
     
  return (
    <div className={styles.container}>
        <input type="text"
         placeholder="search contact name"
          value={search}
         onChange={(e)=> setSearch(e.target.value.toLowerCase())} 
         />
         <button onClick={seerchHandler}><FaSearch/></button> 
    </div>
  )
}

export default Search