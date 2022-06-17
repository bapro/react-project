
import React, { useState, useEffect} from 'react';


const List = ( {getNumbers} ) => {
const [items, setItems] = useState([]);	

useEffect( () => {
		setItems(getNumbers())
		console.log('updating number')
		console.log(getNumbers)
	}, [getNumbers] )
	
	
	return items.map( item => <div key={item} > {item} </div> )
}


export default List;