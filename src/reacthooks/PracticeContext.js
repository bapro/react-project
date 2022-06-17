import { createContext, useContext, useState} from 'react';

 export const PracticeContext = createContext({
	 dark: true,
	 color:"",
	  toggleTheme: ()=> {}
 });



export const ThemeContextProvider = ( {children} ) => {	
const [darkT, setDark] = useState(true)
const [colorT, setColor] = useState("#333")

const toggleThemeHandler = () => {
setDark(prevDark => !prevDark)

setColor(darkT  ? '#CCC': '#333')		
}


 const context = {
    dark: darkT,
	color:colorT,
    toggleTheme: toggleThemeHandler
  }


  return (
    <PracticeContext.Provider value={context}>
      {children}
    </PracticeContext.Provider>
  )
  
  
}	



