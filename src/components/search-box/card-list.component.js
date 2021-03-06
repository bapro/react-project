import { useState, useEffect } from 'react';
import axios from 'axios';

import Row from 'react-bootstrap/Row';
import ListGroup from 'react-bootstrap/ListGroup';
 import Badge from 'react-bootstrap/Badge';
import Container from 'react-bootstrap/Container';
 import * as ReactBootstrap from 'react-bootstrap';
 import { Link, useHistory } from "react-router-dom";
 
function CardList( {listData} ) {
	const [items, setItems]=useState([]);
	const [loading, setLoading] = useState(false);
	

{/*useEffect( () => {
	fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
  .then(response => response.json())
  .then(json => setItems(json))
}, [resourceType]);*/}
	
	

return(
<>
<Container>
<Row>

<ListGroup horizontal>


{listData.map(item => {
return (
<ListGroup.Item key={item.id}>
<Badge bg="primary xs" pill>
{item.id}
</Badge>
<br/>
{item.name}
</ListGroup.Item>
)
})}
</ListGroup>


</Row>
</Container>
</>

)	
	
}

export default CardList;