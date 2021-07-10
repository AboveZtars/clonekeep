import React,{useState} from "react";
import Header from "./components/Header";
import Note from "./components/Note";
import Footer from "./components/Footer";
import CreateArea from "./components/CreateArea";



function App(){

    const [ideas, setIdeas] = useState([]);
    function onAdd(data){
        setIdeas(prevValues =>{
            return [
                ...prevValues,
                data,
            ]
        })
    }

    function erase(id){
        setIdeas(prevValues =>{
            return prevValues.filter((prevValue,index) =>{
                return index !== id;
            })
        })
    }
    return (
        <div>
            <Header />
            <CreateArea 
                onAdd={onAdd}
            />
            {ideas.map((idea,index)=>(
                <Note 
                key={index}
                id={index}
                title={idea.input}
                content={idea.textTxArea}
                erase={erase}
                />
                )
            )}
            <Footer />
        </div>
    )
}

export default App;