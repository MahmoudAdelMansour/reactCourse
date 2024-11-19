/*

Challenge 1 of 3: Extract a component
This Gallery component contains some very similar markup for two profiles.
Extract a Profile component out of it to reduce the duplication. You’ll need to choose what props to pass to it.
https://codesandbox.io/p/sandbox/jf2skg
____
Challenge 2 of 3: Adjust the image size based on a prop
In this example, Avatar receives a numeric size prop which determines the <img> width and height. The size prop is set to 40 in this example. However, if you open the image in a new tab, you’ll notice that the image itself is larger (160 pixels). The real image size is determined by which thumbnail size you’re requesting.

Change the Avatar component to request the closest image size based on the size prop.
 Specifically, if the size is less than 90, pass 's' (“small”) rather than 'b' (“big”) to the getImageUrl function. Verify that your changes work by rendering avatars with different values of the size prop and opening images in a new tab.
https://codesandbox.io/s/mmmx8x?file=%2Fsrc%2FApp.js&utm_medium=sandpack
==========
Challenge 3 of 4: Passing JSX in a children prop
Extract a Card component from the markup below, and use the children prop to pass different JSX to it
https://codesandbox.io/p/sandbox/wrdcl3
=======
using props and conditional rendering
Challenge 4 of 4: Custom Button component
Create a custom Button component that accepts a color prop and renders a button with the specified color.
primary , secondary, danger




* */