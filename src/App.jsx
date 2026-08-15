import Student from "./components/Student";

function App() {
  const students = [
    {
      id: 1,
      name: "Rahul Sharma",
      age: 20,
      course: "Computer Science",
      grade: "A",
    },
    {
      id: 2,
      name: "Priya Patel",
      age: 21,
      course: "Information Technology",
      grade: "A+",
    },
    {
      id: 3,
      name: "Amit Kumar",
      age: 19,
      course: "Software Engineering",
      grade: "B+",
    },
    {
      id: 4,
      name: "Amit Kumar",
      age: 19,
      course: "Software Engineering",
      grade: "B+",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="mx-auto max-w-5xl">
        <h1 className="mb-2 text-center text-4xl font-bold text-blue-600">
          Student Information
        </h1>

        <p className="mb-8 text-center text-gray-600">
          Student data passed from App component using props
        </p>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {students.map((student) => (
            <Student
              key={student.id}
              name={student.name}
              age={student.age}
              course={student.course}
              grade={student.grade}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;