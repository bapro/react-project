/*import React, {useEffect, useState} from "react";

import HOC from "./HOC";

const GetUserByHoc = ({data}) => {
	
	let renderUsers = data.map((user)=> {
		return(
		<div key={user.id}>
		<p>
		<strong>{user.name}</strong>
		</p>
		</div>
		);
	});
	
	return(
	<div>
	<div>{renderUsers}</div>
	</div>
	
	);
};



const searchUser = HOC(GetUserByHoc, "users");

export default searchUser;*/