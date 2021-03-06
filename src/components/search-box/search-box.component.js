import { useState, useEffect  } from 'react';
import axios from 'axios';
import CardList from "./card-list.component";
import Row from 'react-bootstrap/Row';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
 import * as ReactBootstrap from 'react-bootstrap';
function SearchBox() {
 
	const [users, setUsers]=useState([]);
	const [filterUsers, setFilterUsers]=useState(users);
	const [userSearchInput, setUserSearchInput]=useState('');
	const [stringField, setStringField]=useState('');
	const [loading, setLoading] = useState(false);

{/*useEffect( () => {
	fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
  .then(response => response.json())
  .then(json => setusers(json))
}, [resourceType]);*/}
	
const getAllUsers = async () => {
	try{
const result = await axios.get(
"https://jsonplaceholder.typicode.com/users"
);
setUsers(result.data);
setLoading(true);	
	} catch(e){
	console.log(e)	
	}
}	
	
console.log('component rendering');

	
useEffect( () => {
getAllUsers();
}, []);	
	
	
	
useEffect( () => {	
const newFilterUsers = users.filter( (item) => {
	return item.name.toLocaleLowerCase().includes(userSearchInput);	
});
setFilterUsers(newFilterUsers);
}, [users, userSearchInput]);


	
const onSearchChange =(event) => {
const val = event.target.value.toLocaleLowerCase();
setUserSearchInput(val);
}

const onStringChange =(event) => {
setStringField(event.target.value);

}



const selectRow = {
  mode: 'radio',
  clickToSelect: true
};

return(
<>
<Container>
<Row>


    <InputGroup className="mb-3">
	<InputGroup.Text>Search in the list here</InputGroup.Text>
      <Form.Control 
       className='search-data'
      onChange= {onSearchChange}
       placeholder="Search a name in the list"
	   type="search"
	  />
      <Form.Control 
       onChange= {onStringChange}

	  />
    </InputGroup>



 {loading ? (
<CardList listData={filterUsers} />
) : (
<ReactBootstrap.Spinner animation="border" />
)}


</Row>
</Container>
</>

)	
	
}

export default SearchBox;