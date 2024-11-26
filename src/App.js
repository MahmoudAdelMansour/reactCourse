
// mutation
function Cup({guest}) {
    return <h2>Tea Cup for guest #{guest}</h2>
}
export default function TeaGathering() {
    let cups = [];
    for (let i = 1; i <= 10; i++) {
        cups.push(<Cup guest={i} />);
    }
    return cups;
}

/*
*
https://react.dev/learn/keeping-components-pure
*
https://react.dev/learn/rendering-lists
* */

/*

https://preview.colorlib.com/theme/snipp/
* */