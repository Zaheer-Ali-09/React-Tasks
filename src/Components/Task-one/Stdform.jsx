// import { useState } from "react"
import '../../App.css'
function App({ name, rollno, Batch, FavoriteLanguage }) {


    return (
        <>
            {/* <div className="w-full w-[100vh] flex justify-center items-center gap-20">
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
            </div> */}
            <div className='flex w-full'>
                <div className="border-1 w-[300px]">
                    <h2>Name : {name}</h2>
                    <h2>RollNo : {rollno}</h2>
                    <h2>Batch : {Batch}</h2>
                    <h2>Language : {FavoriteLanguage}</h2>
                </div>
            </div>
        </>
    )
}

export default App


