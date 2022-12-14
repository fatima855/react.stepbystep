import React from 'react'

export default function Alert1(props) {
    const capitalize=(word)=>{
        let text =word.toLowerCase();
        return text =text.charAt(0).toUpperCase()+text.slice(1).toLowerCase();
    }
  return (
 props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
    <strong>{capitalize(props.alert.type)}:</strong> {props.alert.message}
    
  </div>
   
  );
}
