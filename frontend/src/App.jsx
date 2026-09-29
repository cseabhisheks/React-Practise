
import { useState } from "react";

export default function App() {
  const users = [
    { id: 1, name: "Rahul", gender: "Male", age: 22, city: "Delhi", occupation: "Developer" },
    { id: 2, name: "Priya", gender: "Female", age: 25, city: "Mumbai", occupation: "Designer" },
    { id: 3, name: "Amit", gender: "Male", age: 28, city: "Noida", occupation: "Developer" },
    { id: 4, name: "Sneha", gender: "Female", age: 21, city: "Delhi", occupation: "Student" },
    { id: 5, name: "Vikas", gender: "Male", age: 32, city: "Gurgaon", occupation: "Manager" },
    { id: 6, name: "Anjali", gender: "Female", age: 29, city: "Noida", occupation: "Developer" },
    { id: 7, name: "Rohit", gender: "Male", age: 24, city: "Mumbai", occupation: "Designer" },
    { id: 8, name: "Neha", gender: "Female", age: 26, city: "Delhi", occupation: "Manager" },
    { id: 9, name: "Karan", gender: "Male", age: 35, city: "Noida", occupation: "Manager" },
    { id: 10, name: "Pooja", gender: "Female", age: 23, city: "Gurgaon", occupation: "Student" }
  ];

  const [gender, setGender] = useState("");
  const [city, setCity] = useState("");
  const [occupation, setOccupation] = useState("");

  const filteredUsers = users.filter((user) => (
   
      (gender === "" || user.gender === gender) &&
      (city === "" || user.city === city) &&
      (occupation === "" || user.occupation === occupation)
    )
  );

  return (
    <div>
      <h1>User Filter</h1>

      <select value={gender} onChange={(e) => setGender(e.target.value)}>
        <option value="">All Genders</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
      </select>

      <select value={city} onChange={(e) => setCity(e.target.value)}>
        <option value="">All Cities</option>
        <option value="Delhi">Delhi</option>
        <option value="Mumbai">Mumbai</option>
        <option value="Noida">Noida</option>
        <option value="Gurgaon">Gurgaon</option>
      </select>

      <select
        value={occupation}
        onChange={(e) => setOccupation(e.target.value)}
      >
        <option value="">All Occupations</option>
        <option value="Developer">Developer</option>
        <option value="Designer">Designer</option>
        <option value="Student">Student</option>
        <option value="Manager">Manager</option>
      </select>

      <div>
        {filteredUsers.map((user) => (
          <div key={user.id}>
            <h3>{user.name}</h3>
            <p>Gender: {user.gender}</p>
            <p>Age: {user.age}</p>
            <p>City: {user.city}</p>
            <p>Occupation: {user.occupation}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

