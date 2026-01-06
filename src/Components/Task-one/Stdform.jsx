import { useState } from "react";

function Stdform() {
    // Dark System
    const [theme, setTheme] = useState("light");

    const toggleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light");
    };

    const data = [
        {
            id: 1,
            name: "Zaheer Ali",
            rollno: 390102,
            Batch: "2024",
            FavoriteLanguage: "Javascript"
        },
        {
            id: 2,
            name: "Mubeen",
            rollno: 127027,
            Batch: "2024",
            FavoriteLanguage: "Nodejs"
        }, {
            id: 2,
            name: "Ammand",
            rollno: 127027,
            Batch: "2024",
            FavoriteLanguage: "HTML"
        }, {
            id: 2,
            name: "Tahha",
            rollno: 127027,
            Batch: "2024",
            FavoriteLanguage: "Nextjs"
        }, {
            id: 2,
            name: "Tahha",
            rollno: 127027,
            Batch: "2024",
            FavoriteLanguage: "Nextjs"
        }, {
            id: 2,
            name: "Tahha",
            rollno: 127027,
            Batch: "2024",
            FavoriteLanguage: "Nextjs"
        }, {
            id: 2,
            name: "Tahha",
            rollno: 127027,
            Batch: "2024",
            FavoriteLanguage: "Nextjs"
        }, {
            id: 2,
            name: "Tahha",
            rollno: 127027,
            Batch: "2024",
            FavoriteLanguage: "Nextjs"
        }, {
            id: 2,
            name: "Tahha",
            rollno: 127027,
            Batch: "2024",
            FavoriteLanguage: "Nextjs"
        }, {
            id: 2,
            name: "Tahha",
            rollno: 127027,
            Batch: "2024",
            FavoriteLanguage: "Nextjs"
        }, {
            id: 2,
            name: "Tahha",
            rollno: 127027,
            Batch: "2024",
            FavoriteLanguage: "Nextjs"
        }
    ];

    return (
        <div className={theme === "light" ? "light" : "dark"}>

            {/* dark themee */}
            <button onClick={toggleTheme} style={{ marginBottom: "20px" }}>
                {theme === "light" ? " Dark Mode" : " Light Mode"}
            </button>
            {/* Std Card List */}
            <div className="flex flex-wrap gap-3">
                {data.map((student) => (
                    <div key={student.id} className="card">
                        <h2>Name : {student.name}</h2>
                        <h2>RollNo : {student.rollno}</h2>
                        <h2>Batch : {student.Batch}</h2>
                        <h2>Language : {student.FavoriteLanguage}</h2>
                    </div>
                ))}
            </div>

        </div>
    );
}

export default Stdform;
