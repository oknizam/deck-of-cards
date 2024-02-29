import React, { useEffect, useState } from "react";
import Card from "./Card";

const ListCard = () => {

    const suits = ["♠️", "♣️", "♦️", "♥️"];
    const ranks = ["A", "1", "2", "3", "4", "5", "6", "7", "8", "9", "J", "Q", "K"];

    const [deck, setDeck] = useState(null);
    const [drawCards, setDrawCards] = useState([]);


    useEffect(() => {
        generateCard();
    }, []);

    const generateCard = () => {
        let temp = [];
        for (let suit of suits) {
            for (let rank of ranks) {
                temp.push({ suit, rank })
            }
        }
        setDeck(temp);

        console.log("temp", temp)
    }

    const drawCard = () => {
        const _deck = [...deck];
        const _drawCards = [];

        if (_deck.length < 5) {
            alert("Don't have enough cards");
            return false
        }

        for (let i = 0; i < 5; i++) {
            let random = Math.floor(Math.random() * _deck.length);
            let card = _deck.splice(random, 1);
            _drawCards.push(card[0]);
        }
        setDrawCards([..._drawCards, ...drawCards]);
        setDeck(_deck);
    };

    return (
        <div className="container">
            <div className={"card borderBlack"} onClick={() => drawCard()}>
                <div className={"cardIcon textBlack"}>
                </div>
                <div className={"cardTitle textBlack"}>
                    {"Draw card"}
                </div>
            </div>

            <div className="containerCard">
                {drawCards?.map((card, index) => <Card key={index} {...card} />)}
            </div>
        </div>

    )
};

export default ListCard;