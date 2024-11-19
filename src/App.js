function Item({ name, isPacked }) {
    // if (isPacked) {
    //    return <li className="item">{name} ✅</li>
    // }
    // else
    // {
    //     return <li className="item">{name}</li>;
    // }
    // return (
    //     <li className="item">
    //         {isPacked ?
    //
    //             ( <del> { name + " ✅"}  </del>   )
    //             :
    //             (
    //              <b> {name} </b>
    //             )
    //
    //         }
    //     </li>
    // )
    return (
    <li className="item">
        {name} { isPacked && '✅' }
    </li>
    )
}

export default function App() {
    return (
        <section>
            <h1>
             Manar Ride's Packing List
            </h1>
            <ul>
                <Item name="Pants" isPacked={true} />
                <Item name="Jacket" isPacked={false} />
                <Item name="Shoes" isPacked={true} />
                <Item name="Hat" isPacked={false} />
                <Item name="Sunglasses" isPacked={true} />
            </ul>
        </section>
    )
}