function Img()
{
    return(
        <img
            src="https://i.imgur.com/MK3eW3As.jpg"
            alt="Katherine Johnson"
        />
    );
}

export default function Article() {
    return (
        <article>
            <Img />
            <h2>Hidden Figures</h2>
            <p>
                Hidden Figures is a
                2016 American biographical drama film directed by Theodore Melfi
                and written by Melfi and Allison Schroeder. It is loosely based on the 2016 non-fiction book of the same name by Margot Lee Shetter
            </p>
        </article>
    );

}
/*
*  https://codesandbox.io/p/sandbox/3kp7gh
* Challenge 1 of 4: Export the component
This sandbox doesn’t work because the root component is not exported:
*
* */

/*
*
* Challenge 2 of 4: Fix the return statement
Something isn’t right about this return statement. Can you fix it?
 https://codesandbox.io/s/5kvyr2?file=%2Fsrc%2FApp.js&utm_medium=sandpack


*
* */


/*
Challenge 3 of 4: Spot the mistake
Something’s wrong with how the Profile component is
 declared and used. Can you spot the mistake?
 (Try to remember how React distinguishes components from the regular HTML tags!)
*
*
https://codesandbox.io/s/pgtl25?file=%2Fsrc%2FApp.js&utm_medium=sandpack
* */

/*
Challenge 4 of 4: Your own component
Write a component from scratch. You can give it any valid name and return any markup.
If you’re out of ideas, you can write a Congratulations component that shows <h1>Good job!</h1>.
Don’t forget to export it!
*
* */

