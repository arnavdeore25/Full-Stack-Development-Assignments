import studyImage from "../assets/study.png";

function Hero() {
  return (
    <section className="max-w-6xl mx-auto px-5 py-16">

      <div className="grid md:grid-cols-2 gap-10 items-center">

        <div>

          <h1 className="text-5xl font-bold mb-6">
            Learn Smarter,
            <br />
            Study Better.
          </h1>

          <p className="text-lg text-gray-500 mb-8">
            Organize your study schedule,
            stay motivated with daily quotes,
            and manage your learning efficiently.
          </p>

        </div>

        <div className="flex justify-center">

          <img
            src={studyImage}
            alt="Study"
            className="w-96 rounded-xl shadow-lg"
          />

        </div>

      </div>

    </section>
  );
}

export default Hero;