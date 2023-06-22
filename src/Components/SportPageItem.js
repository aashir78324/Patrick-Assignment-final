import React from "react"

export const SportPageItem = (props) => {
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

export default SportPageItem;