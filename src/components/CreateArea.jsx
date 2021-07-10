import React, {useState} from "react";

function CreateArea(props){
    const [textInput, setTextInput] = useState({
        key: "",
        input: "",
        textTxArea: "",
    });

    function handleChange(event){  
        const {name, value} = event.target;
        setTextInput(prevValues =>{
            return {
                ...prevValues,
                [name]: value,
            }
        });
    }
    function handleClick(event){
        props.onAdd(textInput);
        event.preventDefault();
    }
    return (
        <div>
            <form>
                <input onChange={handleChange} name="input" value={textInput.input} placeholder="Title"></input>
                <textarea onChange={handleChange} name="textTxArea" value={textInput.textTxArea} placeholder="Write your idea" rows="3"></textarea>
                <button onClick={handleClick}>Add</button>
            </form>
        </div>
    )
}

export default CreateArea;