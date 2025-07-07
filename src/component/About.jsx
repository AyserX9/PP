import React from 'react';

const About = () => {
  return (
    <div className="font-sans bg-gradient-to-br from-green-50 to-white min-h-screen py-16 px-10">
      
      {/* Header */}
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold text-green-700 mb-4">About Us</h1>
        <p className="text-gray-700 text-lg">
          Welcome to Skill Up – your destination for high-quality education and skill development. We are committed to empowering students with practical knowledge to excel in their careers and life.
        </p>
      </div>

      {/* Vision & Mission */}
      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-10 mb-16">
        <div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Our Vision</h2>
          <p className="text-gray-600">
            To become the leading online platform bridging the gap between education and employability by equipping learners with industry-demanded skills, confidence, and guidance for their success.
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Our Mission</h2>
          <ul className="list-disc ml-5 text-gray-600 space-y-2">
            <li>Provide accessible and quality resources for all learners.</li>
            <li>Offer practical courses aligned with industry standards.</li>
            <li>Foster a community of continuous learners and innovators.</li>
          </ul>
        </div>
      </div>

      {/* What We Offer */}
      <div className="max-w-4xl mx-auto mb-16">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">What We Offer</h2>
        <div className="grid md:grid-cols-4 gap-8 text-center">
          {[
            { title: "Comprehensive Courses", icon: "📚" },
            { title: "Skill Training", icon: "💻" },
            { title: "Career Guidance", icon: "🎯" },
            { title: "Interactive Community", icon: "🤝" },
          ].map((item, i) => (
            <div key={i} className="bg-white rounded shadow p-6">
              <div className="text-green-600 text-4xl mb-4">{item.icon}</div>
              <h4 className="font-semibold text-gray-800">{item.title}</h4>
              <p className="text-gray-500 mt-2 text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        <img src="https://fastercapital.com/i/Career-advancement-10-Proven-Strategies-for-Career-Advancement--Seeking-Mentorship-and-Guidance.webp" alt="About Us" className="rounded shadow" />
        <div>
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Why Choose Skill Up?</h2>
          <ul className="list-disc ml-5 text-gray-600 space-y-2">
            <li>Authentic guidance by experienced mentors.</li>
            <li>Structured learning paths aligned with careers.</li>
            <li>Hands-on projects and assessments for mastery.</li>
            <li>Supportive community for doubt clearance and collaboration.</li>
          </ul>
          <button className="bg-green-600 text-white px-6 py-3 rounded mt-6 hover:bg-green-700">
            Join Our Community
          </button>
        </div>
      </div>

    </div>
  );
};

export default About;
