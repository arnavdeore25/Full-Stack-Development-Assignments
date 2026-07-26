function StudyList({ studyPlans }) {

  return (
    <div className="bg-white shadow-md rounded-xl p-6 text-black">

      <h2 className="text-2xl font-bold mb-5">
        My Study Plans
      </h2>

      {studyPlans.length === 0 ? (
        <p className="text-gray-500">
          No study plans added yet.
        </p>
      ) : (
        <div className="grid md:grid-cols-2 gap-5">

          {studyPlans.map((plan, index) => (

            <div
              key={index}
              className="border rounded-lg p-4 shadow-sm hover:shadow-md transition"
            >

              <h3 className="text-xl font-bold">
                {plan.subject}
              </h3>

              <p className="mt-2">
                ⏰ Hours : {plan.hours}
              </p>

              <p>
                📘 Level : {plan.level}
              </p>

            </div>

          ))}

        </div>
      )}

    </div>
  );
}

export default StudyList;