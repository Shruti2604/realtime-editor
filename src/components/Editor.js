import React from 'react';
import Codemirror from 'codemirror';
import 'codemirror/mode/javascript/javascript';
 

const Editor = () => {
    useEffect(() => {
        async function init(){
            Codemirror.fromTextArea(document.getElementById('realtimeEditor'), {
               mode : {name: 'javascript' , json:true },
            });
        }
        init();
    },[]);
    return <textarea id='realtimeEditor'></textarea>
};

export default Editor


