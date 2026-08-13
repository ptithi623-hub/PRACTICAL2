import React from "react";
import Student from "./components/Student";

function App() {
return (
<div>
<h1>Student Details</h1>

<Student
name="Rahul Kumar"
rollNo="101"
course="BCA"
marks="85%"
/>

<Student
name="tirthi"
rollNo="102"
course="BCA"
marks="92%"
/>

<Student
name="Amit Sharma"
rollNo="103"
course="BCA"

marks="78%"
/>
</div>
);
}

export default App;