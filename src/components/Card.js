import React, { useEffect, useRef, useState } from "react";
import { useCart, useCartDispatch } from "./ContextReducer";

export default function Card(props) {
    const dispatch = useCartDispatch();
    const data = useCart();
    const options = props.options;
    const priceOptions = Object.keys(options);
    const [qty, setQty] = useState(1);
    const [size, setSize] = useState("");
    const priceRef = useRef();

    useEffect(() => {
        setSize(priceRef.current.value);
    }, []);

    let finalPrice = qty * parseInt(options[size]);

    const handleAddtoCart = async () => {
        let food = data.find(item => item.id === props.foodItem._id && item.size === size);

        if (food) {
            await dispatch({ type: "UPDATE", id: props.foodItem._id, price: finalPrice, qty: qty, size: size });
        } else {
            await dispatch({
                type: "ADD",
                id: props.foodItem._id,
                name: props.foodItem.name,
                price: finalPrice,
                qty: qty,
                size: size,
                img: props.imgSrc
            });
        }
    };

    return (
        <div>
            <div className="card mt-3 h-100" style={{ maxHeight: "360px" }}>
                <img src={props.imgSrc} className="card-img-top" alt={props.foodname} style={{ height: "120px", objectFit: "fill" }} />
                <div className="card-body">
                    <h5 className="card-title">{props.foodname}</h5>
                    <div className="container w-100"></div>
                    <select className="m-2 h-100 bg-success rounded" value={qty} onChange={(e) => setQty(Number(e.target.value))}>
                        {Array.from(Array(6), (e, i) => (
                            <option key={i + 1} value={i + 1}>
                                {i + 1}
                            </option>
                        ))}
                    </select>
                    <select className="m-2 h-100 bg-success rounded" ref={priceRef} value={size} onChange={(e) => setSize(e.target.value)}>
                        {priceOptions.map((data) => (
                            <option key={data} value={data}>
                                {data}
                            </option>
                        ))}
                    </select>
                    <div className="d-inline h-100 fs-5">₹{finalPrice}</div>
                    <hr />
                    <button className="btn btn-success justify-center ms-2 w-100" onClick={handleAddtoCart}>
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    );
}