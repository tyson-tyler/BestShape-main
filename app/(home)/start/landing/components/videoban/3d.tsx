import React from "react";

const SketchfabEmbed = () => {
  return (
    <div className="bg-white min-h-screen flex flex-col lg:flex-row items-center gap-11 justify-around px-4 sm:px-8 lg:px-16 py-12">
      {/* First Sketchfab Model - Hidden on md and below */}
      <div className="hidden md:block sketchfab-embed-wrapper">
        <iframe
          title="Stylized Female Fighting Character - Rin"
          frameBorder="0"
          allowFullScreen
          allow="autoplay; fullscreen; xr-spatial-tracking"
          width="840"
          height="880"
          src="https://sketchfab.com/models/a91bd0264644443f9da9d70a2ff1bbb0/embed?ui_theme=dark&autostart=1&preload=1"
          className="w-full h-[400px] lg:h-[800px] rounded-md"
        ></iframe>
      </div>

      {/* Text Section */}
      <div className="flex justify-center items-center text-center max-w-3xl">
        <div>
          <p className="text-gray-500 uppercase tracking-widest text-sm font-semibold">
            Unprecedented Customization
          </p>
          <h1 className="text-3xl sm:text-5xl font-bold mt-4 text-black leading-tight">
            Fitness for every body.
            <br /> Anytime. Anywhere.
          </h1>
          <p className="text-gray-600 mt-6 text-sm sm:text-lg">
            With Zing Coach, there is literally zero excuse to skip a workout.
            Tired? Zing Coach will tighten your timing. Traveling? Zing Coach
            will give you an awesome bodyweight blast. Done with Leg Day? Zing
            Coach will boost your biceps instead. You&apos;ll even get workouts
            automatically adjusted to the time of day—and that time of the
            month.
          </p>
          <button className="mt-6 bg-black text-white text-lg font-semibold py-4 px-6 rounded-full">
            Get your workout plan now
          </button>
        </div>
      </div>

      {/* Second Sketchfab Model - Hidden on md and below */}
      <div className="hidden md:block sketchfab-embed-wrapper">
        <iframe
          title="Stylized Female Fighting Character - Viktoria"
          frameBorder="0"
          allowFullScreen
          allow="autoplay; fullscreen; xr-spatial-tracking"
          width="640"
          height="480"
          src="https://sketchfab.com/models/06b937aca61b4e2f97fcd8c18f86f1c4/embed?autostart=1&preload=1"
          className="w-full h-[400px] lg:h-[800px] rounded-md"
        ></iframe>
      </div>
    </div>
  );
};

export default SketchfabEmbed;
