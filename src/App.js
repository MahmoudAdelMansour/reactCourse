
const today = new Date('2024-05-11');

function formatDate(date) {
    return new Intl.DateTimeFormat(
        'en-US',
        { weekday: 'long' }
    ).format(date);
}

const person = {
    name: 'Grace Hopper',
    theme: {
        backgroundColor: 'lightblue',
        padding: '20px',
        fontSize: '24px',
    }
};



export default function App() {

    return (
        <div

            style={person.theme}
        >
            <h1>{person.name}</h1>
            <h2> Today Is {formatDate(today)}</h2>
        </div>
    );
}

/*


Challenge 1 of 3: Fix the mistake
This code crashes with an error saying Objects are not valid
 as a React child:

https://codesandbox.io/s/4skw7f?file=%2Fsrc%2FApp.js&utm_medium=sandpack
--------------------------------
--------------------------------
Challenge 2 of 3: Extract information into an object
Extract the image URL into the person object.

https://codesandbox.io/s/vppdcf?file=%2Fsrc%2FApp.js&utm_medium=sandpack

--------------------------------
--------------------------------

Challenge 3 of 3: Write an expression inside JSX curly braces
In the object below,
the full image URL is split into four parts:
base URL, imageId, imageSize, and file extension.

We want the image URL to combine
these attributes together: base URL
(always 'https://i.imgur.com/'),
imageId ('7vQD0fP'),
 imageSize ('s'),
  and file extension (always '.jpg').
  However, something is wrong with how the <img> tag specifies its src.

Can you fix it?
https://codesandbox.io/p/sandbox/53y3sy




* */