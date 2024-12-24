import { sculptureList } from './data2.js';
import {use, useState} from "react";

function Gallery() {
    // let index = 0 ;
    const [num , setNum] = useState(0);
    const [showMore , setShowMore] = useState(false);

    function handleClick()
    {
        setNum(num +1);
    }
    function handleMoreClick() {
        setShowMore(!showMore);
    }
    let sculpture = sculptureList[num];
    return (
        <>
            <button onClick={handleClick}>
                Next
            </button>
            <h2>
                <i>{sculpture.name} </i>
                by {sculpture.artist}
            </h2>
            <h3>
                ({num + 1} of {sculptureList.length})
            </h3>
            <hr/>
            <button onClick={handleMoreClick}>
                {showMore ? 'Hide' : 'Show'} Details
            </button>
            {showMore && <p> {sculpture.description} </p>}
            <hr/>
            <img
                src={sculpture.url}
                alt={sculpture.alt}
            />
        </>
    );
}
export default function App()
{
    return (
        <div>
            <h1> Sculpture Gallery </h1>
            <Gallery/>
            <Gallery/>
        </div>
    );
}
/*

How does React know which state to return?

https://react.dev/learn/state-a-components-memory


Challenges =>

https://react.dev/learn/state-a-components-memory

Here
https://documenter.getpostman.com/view/4858910/S1LpZrgg#700eaa92-b575-4674-8640-2f6959e9a287
Or
https://jsonplaceholder.typicode.com/

( Name , Description )

1- create panel to contain ( 1 or more input )
2- separate the data panels ( next , next , previous )
3- progress bar ,
4- next or finish button

https://www.w3schools.com/howto/howto_js_form_steps.asp?

*
*  */



