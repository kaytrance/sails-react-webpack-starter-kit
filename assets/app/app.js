import React from 'react';
import ReactROM from 'react-dom';



class Layout extends React.Component {
    
    render() {
        return(
            <h4>Hello from react component</h4>
        );
    }
    
}



const app = document.getElementById("app");
ReactROM.render(<Layout />, app);