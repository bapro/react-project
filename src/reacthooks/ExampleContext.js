import React, { useState, useContext} from 'react';
import {PracticeContext} from './PracticeContext'

function ExampleContext() {
  const PracticeContextPro = useContext(PracticeContext);
const theme = {
backgroundColor: PracticeContextPro.dark ? '#333': '#CCC',
color: PracticeContextPro.dark ? '#CCC': '#333',
padding:'2rem',
maring:'2rem'
}	
	
return (
<>
<button onClick={PracticeContextPro.toggleTheme}>Toggle</button>
<div style={theme}>Fucntion theme color is {PracticeContextPro.color}</div>
</>
)	
}



export default ExampleContext;