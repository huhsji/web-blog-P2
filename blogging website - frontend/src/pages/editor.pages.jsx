import { useState } from "react";
import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "../App";
import BlogEditor from "../components/blog-editor.component";
import PublihForm from "../components/publish-form.component";

const Editor = () => {

    const [ editorState , setEditorState ] = useState("editor");
    
    let { userAuth: { access_token } } = useContext(UserContext)

    return (

        access_token === null ? <Navigate to="/signin" />
        : editorState == "editor" ? <BlogEditor /> : <PublihForm />
       
    )
}

export default Editor;