import { useState, useEffect } from 'react';
import axios from 'axios';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
 import * as ReactBootstrap from 'react-bootstrap';
 import { Link, useHistory } from "react-router-dom";
 import filterFactory, {textFilter} from 'react-bootstrap-table2-filter';
 import 'react-bootstrap-table2-filter/dist/react-bootstrap-table2-filter.min.css';
 
function UseEffectHook() {
 const [items, setItems]=useState([]);
	const [loading, setLoading] = useState(false);

	
{/*useEffect( () => {
	fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
  .then(response => response.json())
  .then(json => setItems(json))
}, [resourceType]);*/}
	
const getAllUsers = async () => {
	try{
const result = await axios.get(
"https://jsonplaceholder.typicode.com/users"
);
setItems(result.data);

setLoading(true);	
	} catch(e){
	console.log(e)	
	}
}	
	
function priceFormatter(cell, row) {
return (
<div>
<Link to={`/edit-user/${row.id}`} id="edit" className="btn btn-success btn-sm"> Edit </Link>
<Link to={`/edit-user/${row.id}`} id="edit" className="btn btn-danger btn-sm"> Delete </Link>
</div>
);



}

	
	const columns = [
	{dataField: "id", text:"id", sort:true},
	{dataField: "name", text:"Name", sort:true, filter:textFilter()},
	{dataField: "username", text:"User name"},
	{dataField: "email", text:"Email"},
	{dataField: "website", text:"Website"},
	 {
        dataField: 'action',
        text: 'Action',
     formatter: priceFormatter
	 
      },
	   
	];


const pagination = paginationFactory({
	
	showTotal:true
})

	
useEffect( () => {
getAllUsers();
}, []);	
	
	


const selectRow = {
  mode: 'radio',
  clickToSelect: true
};

return(
<>
<Container>
<Row>
<Link to={"/search-box"} > A Search Box Example</Link>


{loading ? (

<BootstrapTable
striped
condensed
hover
keyField="id"
data={items}
columns={columns}
pagination={pagination}
filter={filterFactory()}
 />
) : (
<ReactBootstrap.Spinner animation="border" />
)}

</Row>
</Container>
</>

)	
	
}

export default UseEffectHook;