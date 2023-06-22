import React from "react"

export const ManPageItem = (props) => {
    const {name, image, price} = props.data
    return <div className="Man">
        <div className="manDescription">
            <img  src={image} />
            <p>
                <b>{name}</b>
            </p>
            <p>
                <b>£{price}</b>
            </p>
        </div>
    </div>
}

export default ManPageItem;