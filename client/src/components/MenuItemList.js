const MenuItemList = ({ currentItems, category }) => {

    const menuListItems = currentItems.map((item, index) => {
        return <li className="menu-list-item" key={index}>
            <div>
                <h3>{item.name}</h3>
                <p><em>{item.description}</em></p>
                <h3>£{item.price}</h3>
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