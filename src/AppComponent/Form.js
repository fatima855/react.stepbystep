import React,{ useState } from 'react';
export default function Form(props) {
    const [Text, setText] = useState();
    
    const handleUpClick=()=>{
        let NewText = Text.toUpperCase();
        setText(NewText);
        props.showAlert('convert to upper case','success');
    }
    const handleOnChange=(event)=>{
        setText(event.target.value);
    }

  return (
    
    <div classNmae ="container my-3">
        <h3  style={{color:props.mode==='dark'?'white':'black'}}>AboutUs </h3>
    <div class="mb-3">
  <textarea  class="form-control" value={Text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'grey':'white', color:props.mode==='dark'?'white':'black'}} id="my box" rows="3"></textarea>
</div>
<button className="btn btn-primary mx-1" onClick={handleUpClick}> Convert to Uper Case</button>
        {/* <button className="btn btn-primary mx-1" onClick={handleLowerClick}>Enter to LowerCase</button>
        <button className="btn btn-primary mx-1" onClick={capitalizeFirstLowercaseRest}>Cappitalize First word</button>
        <button className="btn btn-primary mx-1" onClick={HandleClearText}>Clear Text</button> */}

</div>
  );
}
