import {useState} from 'react'

function TextInput({someText, updateCallback}) {

    const [text, setText] = useState('');
    const updateText = (event) => {
        setText(event.target.value);
        updateCallback(event.target.value)
    }

    return (
        <div>            
            <input className="form-control" value={text} onChange={updateText}/>
        </div>
    )
}

export default TextInput;