import React from "react"

export const SalePage = (props) => {
    const {name, image, originPrice, price} = props.data
    return <div className="sale">
        <div className="saleDescription">
            <img  src={image} />
            <p>
                <b>{name}</b>
            </p>
            <p className="originalPrice">
                £{originPrice}
            </p>
            <p className="discountedPrice">
                <b>£{price}</b>
            </p>
        </div>
    </div>
}

export default SalePage;