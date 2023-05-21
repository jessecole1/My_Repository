import React, {useState} from 'react';

const Form = (props) => {

    const {boxList, setBoxList} = props;

    const [color, setColor] = useState("");
    const [size, setSize] = useState(50);

    const submitHandler = (e) => {
        e.preventDefault();
        setBoxList([...boxList, {
            color: color, 
            size: size + "px"
        }]);

        setColor("");
        setSize(50);
    }

    return (
        <div>
            <form onSubmit={submitHandler}>
                <label>Color</label>
                <input value={color} type="text" name="color" onChange={(e) => setColor(e.target.value)}/>
                <label>Size</label>
                <input value={size} type="number" name="size" onChange={(e) => setSize(e.target.value)}/>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default Form;