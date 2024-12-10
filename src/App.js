export default function Button() {
    return (
        <button
            onClick={() => {alert('Hello, World!')}}
            onMouseEnter={ () => {alert('Mouse is over the button')}}
        >
           Thing
        </button>
    );
}

// Declare a function called handleClick inside your Button component. [Done]
// Implement the logic inside that function (use alert to show the message). [Done]
// Add onClick={handleClick} to the <button> JSX.

//

// https://react.dev/learn/understanding-your-ui-as-a-tree
// https://www.youtube.com/