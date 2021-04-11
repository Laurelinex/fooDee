const MenuItemList = ({ currentItems, category, handleSelectedItemAdd, handleSelectedItemRemove, basket, basketValue }) => {

    const copiedCurrentItems = [...currentItems]

    // for (const item of copiedCurrentItems) {
    //     for (let count = 0; count < basket.length; count++) {
    //         if (item.name === basket[count].name) {
    //             item.quantity = basket[count].quantity
    //         }
    //     }
    //     if (!item.quantity) {
    //         item.quantity = 0;
    //     }
    // }

    for (let currentItemCount = 0; currentItemCount < copiedCurrentItems.length; currentItemCount++) {

        for (let count = 0; count < basket.length; count++) {
            if (copiedCurrentItems[currentItemCount].name === basket[count].name) {
                copiedCurrentItems[currentItemCount] = basket[count]
            }
        }
        // if (!item.quantity) {
        //     item.quantity = 0;
        // }
    }

    const menuListItems = copiedCurrentItems.map((item, index) => {
        return <li className="menu-list-item" key={index}>

            <div>
                <h3>{item.name}</h3>
                <p><em>{item.description}</em></p>
                <h3>£{item.price}</h3>
                <button
                    onClick={() => { handleSelectedItemRemove(item) }}
                    className="btn minus-button">-
                </button>

                <div className="item-quantity">Qty: <span className="item-quantity-value">{item.quantity}</span></div>
                <button
                    onClick={() => { handleSelectedItemAdd(item) }}
                    className="btn plus-button">+
                    </button>

            </div>
            <div className="item-info-container">
                <img src={item.image} alt="" width="200px" height="200px" />
            </div>
        </li>
    })

    return (
        <div>
            <ul className="menu-list-item-container">{menuListItems}</ul>
        </div>
    )
}

export default MenuItemList;