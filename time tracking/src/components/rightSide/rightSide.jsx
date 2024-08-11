import './rightSide.css'
import Items from "../Items/items";
// import { useEffect, useState } from "react";

function RightSide() {
    // const [arraOfObject, setArraOfObject] = useState([]);
    // useEffect(() => {
    //     function ApiCall() {
    //         fetch("http://localhost:3000/Items").then((items) => {
    //             return items.json();
    //         }).then((finalResult) => {
    //             setArraOfObject(finalResult)
    //         });
    //     }
    //     ApiCall();
    // }, [])

    const items =[
        {
            Deuration: "Work",
            Time: "32hrs",
            Date: "Last Week - 3hrs",
            id: 1,
            Color:"hsl(15, 100%, 70%)",
            Img:"/image/icon-work.svg"
        },
        {
            Deuration: "Play",
            Time: "10hrs",
            Date: "Last Week - 3hrs",
            id: 2,
            Color:"hsl(195, 74%, 62%)",
            Img:"/image/icon-play.svg"
        },
        {
            Deuration: "Study",
            Time: "4hrs",
            Date: "Last Week - 7hrs",
            id: 3,
            Color:"hsl(348, 100%, 68%)",
            Img:"/image/icon-study.svg"

        },{
            Deuration: "Exercise",
            Time: "4hrs",
            Date: "Last Week - 5hrs",
            id:4,
            Color:"hsl(145, 58%, 55%)",
            Img:"/image/icon-exercise.svg"
        },
        {
            Deuration: "Social",
            Time: "5hrs",
            Date: "Last Week - 10hrs",
            id: 5,
            Color:"hsl(264, 64%, 52%)",
            Img:"/image/icon-social.svg"
        },
        {
            Deuration: "Self Care",
            Time: "2hrs",
            Date: "Last Week - 2hrs",
            id: 6,
            Color:"hsl(43, 84%, 65%)",
            Img:"/image/icon-self-care.svg"
        }
    ]
    return (
        <div id='rightSide'>
            {items.map((item) => {
                return (
                    <Items
                        key={item.id}
                        Deuration={item.Deuration}
                        Time={item.Time}
                        Date={item.Date}
                        Color={item.Color}
                        Img ={item.Img}
                    ></Items>
                );
            })}
        </div>
    );
}

export default RightSide;
