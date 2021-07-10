import React from "react";
import Header from "./components/Header";
import Note from "./components/Note";
import Footer from "./components/Footer";
import notes from "./notes";
import CreateArea from "./components/CreateArea";




function App(){
    return (
        <div>
            <Header />
            <CreateArea />
            {notes.map(notes=>(
                <Note 
                key={notes.key}
                title={notes.title}
                content={notes.content}
                />
                )
            )}
            <Footer />
        </div>
    )
}

export default App;