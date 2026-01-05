import { useState } from "react"

function App() {

    let data = [
        {
            id: 1,
            name: "Zaheer Ali",
            RoollNo: 390102,
            Batch: "2024",
            FavoriteLanguage: "Javascript"
        },
        {
            id: 2,
            name: "Mubeen",
            RoollNo: 127027,
            Batch: "2024",
            FavoriteLanguage: "Nodejs"
        }, {
            id: 3,
            name: "Ammad Bhai",
            RoollNo: 324234,
            Batch: "2024",
            FavoriteLanguage: "HTML"
        }, {
            id: 4,
            name: "Hussain",
            RoollNo: 390102,
            Batch: "2024",
            FavoriteLanguage: "Javascript"
        },
        {
            id: 5,
            name: "Amman",
            RoollNo: 127027,
            Batch: "2024",
            FavoriteLanguage: "Nodejs"
        }, {
            id: 6,
            name: "Sufaiyan",
            RoollNo: 324234,
            Batch: "2024",
            FavoriteLanguage: "HTML"
        }
    ]
    return (
        <>
            <div className="w-full w-[100vh] flex justify-center items-center gap-20">
                <form action="" className="w-[300px] border-1 h-[300px] rounded-xl py-10 flex flex-col gap-8 text-center">
                    <h1>SMIT STUDENT</h1>
                    <p>Saylani Mass IT Training Program</p>
                    <h4>Student Name : Zaheer Ali</h4>
                    <h4>Student RollNo : 390102</h4>
                    <h4>Batch : 16</h4>
                </form>
                <form action="" className="w-[300px] border-1 h-[300px] rounded-xl py-10 flex flex-col gap-8 text-center">
                    <h1>SMIT STUDENT</h1>
                    <p>Saylani Mass IT Training Program</p>
                    <h4>Student Name : Zaheer Ali</h4>
                    <h4>Student RollNo : 390102</h4>
                    <h4>Batch : 16</h4>
                </form><form action="" className="w-[300px] border-1 h-[300px] rounded-xl py-10 flex flex-col gap-8 text-center">
                    <h1>SMIT STUDENT</h1>
                    <p>Saylani Mass IT Training Program</p>
                    <h4>Student Name : Zaheer Ali</h4>
                    <h4>Student RollNo : 390102</h4>
                    <h4>Batch : 16</h4>
                </form>

            </div>
        </>
    )
}

export default App
