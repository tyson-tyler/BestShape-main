import Image from "next/image";

export default function FitnessApp() {
  return (
    <div className="bg-white min-h-screen flex flex-col lg:flex-row items-center justify-around px-8 lg:px-16 py-12">
      <div className="max-w-5xl">
        <p className="text-gray-500 uppercase tracking-widest text-sm font-semibold">
          Unprecedented Customization
        </p>
        <h1 className="lg:text-7xl md:text-5xl text-3xl font-bold mt-4 text-black leading-tigh">
          Fitness for every body.
          <br /> Anytime. Anywhere.
        </h1>
        <p className="text-gray-600 mt-6 text-lg">
          With Zing Coach, there is literally zero excuse to skip a workout.
          Tired? Zing Coach will tighten your timing. Traveling? Zing Coach will
          give you an awesome bodyweight blast. Done with Leg Day? Zing Coach
          will boost your biceps instead. You&apos;ll even get workouts
          automatically adjusted to the time of day—and that time of the month.
        </p>
        <button className="mt-6 bg-black  text-white text-lg font-semibold py-6 px-6 rounded-full">
          Get your workout plan now
        </button>
      </div>

      <div className="relative mt-10 lg:mt-0 flex items-center justify-center">
        <div className="relative lg:w-[600px] md:w-[500px] md:h-[600px] w-[600px] h-[800px] lg:h-[800px] bg-black rounded-3xl shadow-xl flex items-center justify-center overflow-hidden">
          <div className="bg-gray-100 rounded-3xl shadow-lg text-black p-6 w-[90%] h-[90%] flex flex-col items-center">
            <p className="text-xl font-semibold text-black mb-4">
              Custom Workout
            </p>
            <div className="grid grid-cols-3 gap-4">
              {[
                { name: "Shoulders", level: 100, image: "/1.jpg" },
                { name: "Biceps", level: 100, image: "/2.png" },
                { name: "Legs", level: 100, image: "/2.jpg" },
                { name: "Back", level: 90, image: "/5.png" },
                { name: "Chest", level: 100, image: "/4.png" },
                { name: "Abs", level: 90, image: "/3.png" },
                { name: "Abs", level: 90, image: "/3.png" },
                { name: "Abs", level: 90, image: "/3.png" },
                { name: "Abs", level: 90, image: "/3.png" },
              ].map((workout, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center bg-white p-3 rounded-lg shadow"
                >
                  <div className="w-32 h-32 bg-gray-200 rounded-full flex items-center justify-center">
                    <span className="text-blue-500 text-2xl font-bold">
                      <Image
                        src={workout.image}
                        alt={workout.name}
                        width={150}
                        height={150}
                        className="mb-2 rounded-full w-[130px] h-[130px]"
                      />
                    </span>
                  </div>
                  <p className="mt-2 text-sm font-medium">{workout.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="absolute -top-6 left-6 bg-white text-black px-4 py-2 border border-gray-600 shadow-lg rounded-full flex items-center gap-2 text-sm">
          <span className="w-3 h-3 bg-green-500 rounded-full"></span>
          Location was updated
        </div>
        <div className="absolute -bottom-6 left-6 bg-white px-4 py-2 border border-gray-600 text-black shadow-lg rounded-full flex items-center gap-2 text-sm">
          <span className="w-3 h-3 bg-green-500 rounded-full"></span>
          Your gym equipment was altered
        </div>
      </div>
    </div>
  );
}
