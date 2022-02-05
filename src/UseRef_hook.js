import { useState } from "react";
import { useRef } from "react";

function UseRef_hook() {
    const name = useRef(null);
    const [text,setText] = useState('');
    const submit = () => {
        console.log(name.current.value)
        setText(name.current.value)
    }
    return (
        <>
            <div className="container bg-light p-5 mt-5 ">
                <h1 className="text-center text-success">UseRef Hook in React</h1>
                <div className="row mt-5 ">
                    <div className="col-md-6 m-auto ">
                        <form className="shadow p-3 mb-5 bg-white rounded">
                            <div className="form-group">
                                <label>Enter your Name</label>
                                <input type="text" className="form-control" ref={name} />
                                <button className="btn btn-primary my-3" onClick={submit}>Click</button>
                                <p>{text}</p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default UseRef_hook;
