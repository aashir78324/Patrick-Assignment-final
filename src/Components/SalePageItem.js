import React from "react"

export const SalePage = (props) => {
    const {name, image, price} = props.data
    return <div className="sale">
        <div className="saleDescription">
            <img src={image} />
            <p>
                <b>{name}</b>
            </p>
            <p>
                £{price}
            </p>
        </div>
    </div>
}