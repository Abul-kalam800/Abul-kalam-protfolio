import React from "react";

const Education = () => {
  return (
    <section className="bg-base-50 py-12 px-6 lg:px-20" id="education">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold text-secondary mb-10 text-center">
          Education
        </h2>

        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2">
          {/* HSC Card */}
          <div className=" p-6 rounded-xl shadow hover:shadow-lg transition-shadow duration-300 hover:border-1 border-primary">
            <span className="text-blue-600 font-semibold text-lg">2015</span>
            <h3 className="text-2xl font-bold mb-4 mt-2">
              Higher Secondary Certificate (HSC)
            </h3>
            <p className=" italic my-4">
              Jadur chor Degree College, Rowmari, Kurigram
            </p>
            <p className=" mt-2">
              Completed HSC with a focus on Humanitis, enhancing analytical and
              problem-solving skills.
            </p>
          </div>

          {/* SSC Card */}
          <div className=" p-6 rounded-xl shadow hover:shadow-lg transition-shadow duration-300 hover:border-1 border-primary">
            <span className="text-blue-600 font-semibold text-lg">2013</span>
            <h3 className="text-2xl font-bold  mt-2">
              Secondary School Certificate (SSC)
            </h3>
            <p className="italic my-4">
              Islam pur Dakhil Madrasah Rowmari, Kurigram
            </p>
            <p className=" mt-2">
              Completed SSC with a strong academic foundation and active
              participation in extracurricular activities.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
