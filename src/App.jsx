import Stdform from "./Components/Task-one/Stdform";
import Counter from "./Components/Task-two/counter"
let data = [
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
    id: 3,
    name: "Ammad Bhai",
    rollno: 324234,
    Batch: "2024",
    FavoriteLanguage: "HTML"
  }, {
    id: 4,
    name: "Hussain",
    rollno: 390102,
    Batch: "2024",
    FavoriteLanguage: "Javascript"
  },
  {
    id: 5,
    name: "Amman",
    rollno: 127027,
    Batch: "2024",
    FavoriteLanguage: "Nodejs"
  }, {
    id: 6,
    name: "Sufaiyan",
    rollno: 324234,
    Batch: "2024",
    FavoriteLanguage: "HTML"
  }
]

function App() {
  return (
    <>
      {data.map((keys, value) => (
        <Stdform key={value} {...keys} />
      ))}
      <Counter />

    </>
  );
}

export default App;