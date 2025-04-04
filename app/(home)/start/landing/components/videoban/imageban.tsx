import Image from "next/image";

export default function Workoutsection() {
  return (
    <div className="bg-white min-h-screen mt-16 mb-16  flex gap-6   flex-col xl:flex-row-reverse items-center justify-around px-8 lg:px-16 py-12">
      <div className="max-w-5xl text-center">
        <p className="text-gray-500 uppercase tracking-widest text-sm font-semibold">
          Unprecedented Customization
        </p>
        <h1 className="lg:text-7xl md:text-5xl text-3xl font-bold mt-4 text-black leading-tight">
          Fitness for every body.
          <br /> Anytime. Anywhere.
        </h1>
        <p className="text-gray-600 mt-6 text-sm lg:text-lg">
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

      <div className="relative mt-10 lg:mt-0 flex items-center justify-center ">
        <div className="relative lg:w-[600px] md:w-[500px] md:h-[600px] w-[600px] h-[800px] lg:h-[800px] bg-black rounded-3xl shadow-xl flex items-center justify-center overflow-hidden">
          <div className="bg-gray-100 rounded-3xl shadow-lg text-black p-6 w-[90%] h-[90%] flex flex-col items-center">
            <p className="text-xl font-semibold text-black mb-4">
              Custom Workout
            </p>
            <div className="grid grid-cols-3 grid-rows-4   gap-4">
              {[
                {
                  name: "Shoulders",
                  level: 100,
                  image:
                    "https://i.pinimg.com/736x/b8/e4/df/b8e4dfd6d0193169798f4fe25b35b255.jpg",
                },
                {
                  name: "Biceps",
                  level: 100,
                  image:
                    "https://i.pinimg.com/736x/a0/18/2a/a0182afb95584d5071c87a14be6694b7.jpg",
                },
                {
                  name: "Triceps",
                  level: 100,
                  image:
                    "https://i.pinimg.com/736x/63/8d/24/638d245888142f2b3e57b58a4a954719.jpg",
                },
                {
                  name: "Back",
                  level: 90,
                  image:
                    "https://i.pinimg.com/736x/f1/83/c9/f183c944f1a1afc2a26f6daf64511072.jpg",
                },
                {
                  name: "Chest",
                  level: 100,
                  image:
                    "https://i.pinimg.com/736x/81/7f/5c/817f5c1dcd38bfd476b1c555c565eb52.jpg",
                },
                {
                  name: "Abs",
                  level: 90,
                  image:
                    "https://i.pinimg.com/736x/43/69/bd/4369bda70b3f4b056d378136c8560540.jpg",
                },
              ].map((workout, index) => (
                <div
                  key={index}
                  className="flex flex-col   items-center bg-white  rounded-lg shadow"
                >
                  <Image
                    src={workout.image}
                    alt={workout.name}
                    width={250}
                    height={240}
                    className=" rounded-md lg:h-[300px] md:h-[200px] h-[300px] object-cover hover:scale-105 transition"
                  />
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
