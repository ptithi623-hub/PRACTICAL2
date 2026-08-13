function Student({ name, age, course, grade }) {
  return (
    <div className="rounded-xl bg-white p-6 shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 text-2xl font-bold text-blue-600">
        {name.charAt(0)}
      </div>

      <h2 className="mb-3 text-2xl font-bold text-gray-800">
        {name}
      </h2>

      <div className="space-y-2 text-gray-600">
        <p>
          <span className="font-semibold text-gray-800">Age:</span>{" "}
          {age}
        </p>

        <p>
          <span className="font-semibold text-gray-800">Course:</span>{" "}
          {course}
        </p>

        <p>
          <span className="font-semibold text-gray-800">Grade:</span>{" "}
          <span className="font-bold text-green-600">{grade}</span>
        </p>
      </div>

      <button className="mt-5 w-full rounded-lg bg-blue-600 px-4 py-2 font-semibold text-white transition hover:bg-blue-700">
        View Student
      </button>
    </div>
  );
}

export default Student;