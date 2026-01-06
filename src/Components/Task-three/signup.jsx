import { useState } from "react";

function SignupForm() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [userData, setUserData] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();

        setUserData({
            name,
            email,
            password
        });

        // local data shoe karen ga 
        setName("");
        setEmail("");
        setPassword("");
    };

    return (
        <div className="w-full p-5 border ">
            <h2 className="text-xl font-bold mb-4">Signup Form</h2>

            <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                <input
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="border p-2 rounded"
                />

                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="border p-2 rounded"
                />

                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="border p-2 rounded"
                />

                <button
                    type="submit"
                    disabled={!name || !email || !password}
                    className="bg-blue-500 text-white py-2 rounded disabled:bg-gray-400"
                >
                    Submit
                </button>
            </form>

            {/* Display data Sow*/}
            {userData && (
                <div className="mt-4 border-t pt-3">
                    <h3 className="font-semibold">Submitted Data:</h3>
                    <p>Name: {userData.name}</p>
                    <p>Email: {userData.email}</p>
                    <p>Password: {userData.password}</p>
                </div>
            )}
        </div>
    );
}

export default SignupForm;
