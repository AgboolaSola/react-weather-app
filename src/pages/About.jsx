const About = () => {
  return (
    <div className="min-h-screen bg-slate-900 text-white p-8">
      <div className="container mx-auto max-w-3xl">
        <h1 className="text-3xl font-bold mb-4">About</h1>

        <div className="bg-slate-800 border border-slate-700 rounded-xl p-6 mb-6">
          <h2 className="text-xl font-medium mb-2">Agboola Sola</h2>
          <p className="text-gray-400 leading-relaxed">
            Frontend developer in training based in Lagos, Nigeria. Currently
            learning React and building real projects to break into the tech
            industry.
          </p>
        </div>

        <div className="bg-slate-800 border border-slate-700 rounded-xl p-6 mb-6">
          <h2 className="text-xl font-medium mb-2">About this app</h2>
          <p className="text-gray-400 leading-relaxed">
            Built with React, Tailwind CSS and the OpenWeatherMap API. Shows
            real-time weather and a 5-day forecast for any city.
          </p>
        </div>

        <div className="flex gap-4">
          <a
            href="https://github.com/agboolasola"
            target="_blank"
            className="bg-indigo-500 hover:bg-indigo-600 transition px-4 py-2 rounded-lg"
          >
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
