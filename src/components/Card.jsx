import React from "react";

const Card = (props) => {

    const { suit, rank } = props
    console.log("suit", props)
    return (
        <div className={(suit == "♥️" || suit == "♦️") ? "card borderRed" : "card borderBlack"}>
            <div className={(suit == "♥️" || suit == "♦️") ? "cardIcon textRed" : "cardIcon textBlack"}>
                {suit}
            </div>
            <div className={(suit == "♥️" || suit == "♦️") ? "cardTitle textRed" : "cardTitle textBlack"}>
                {rank}
            </div>
        </div>
    )

}

export default Card;