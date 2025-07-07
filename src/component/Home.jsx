import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="font-sans bg-gradient-to-br from-green-50 to-white">
      
      {/* Navbar */}
      <nav className="flex justify-between items-center px-10 py-6 bg-white shadow">
        <div className="text-2xl font-bold text-green-700">PDHAKOOS</div>
        <ul className="flex gap-6 text-gray-700">
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/courses">Courses</Link></li>
        </ul>
        <button className="bg-green-600 text-white px-4 py-2 rounded"><Link to="/membership">Get Membership</Link></button>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-between px-10 py-20">
        <div className="md:w-1/2 space-y-6">
          <h1 className="text-4xl font-bold text-gray-800 leading-tight">
            We Skill Up <br /> Here to teach you <br /> the best courses.
          </h1>
          <button className="bg-green-600 text-white px-6 py-3 rounded"><Link to="/courses">Our Courses</Link></button>
        </div>
        <div className="md:w-1/2 mt-10 md:mt-0">
          <img src="data:image/jpeg;base64,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" alt="image" className="rounded shadow" />
        </div>
      </section>

      {/* Stats */}
      <section className="flex flex-col md:flex-row justify-around bg-green-50 py-10 text-center">
        <div>
          <h2 className="text-3xl font-bold">1630</h2>
          <p className="text-gray-600">Students graduated</p>
        </div>
        <div className="my-6 md:my-0">
          <h2 className="text-3xl font-bold">76</h2>
          <p className="text-gray-600">Completed courses</p>
        </div>
        <div>
          <h2 className="text-3xl font-bold">16</h2>
          <p className="text-gray-600">Years of experience</p>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 px-10 text-center">
        <h3 className="text-green-700 font-semibold">We always stand for</h3>
        <h2 className="text-3xl font-bold mt-2 mb-10">Our core values</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {[
            { title: "Complete Guideline" },
            { title: "Forum Facilities" },
            { title: "Goal Selection" },
            { title: "Flexible Schedule" },
          ].map((item, i) => (
            <div key={i} className="bg-white rounded shadow p-6">
              <div className="text-green-600 text-4xl mb-4">📘</div>
              <h4 className="font-semibold">{item.title}</h4>
              <p className="text-gray-500 mt-2 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Skill Up */}
      <section className="flex flex-col md:flex-row items-center px-10 py-20 gap-10">
        <img className="rounded shadow w-96 h-96 py-10" src="https://www.highspot.com/wp-content/uploads/2024/12/importance-training-development.jpg" alt="Students" />
        <div className="md:w-1/2">
          <h3 className="text-green-700 font-semibold">Who we are</h3>
          <h2 className="text-3xl font-bold mt-2 mb-4">Why Skill Up?</h2>
          <ul className="list-disc ml-6 space-y-2 text-gray-600">
            <li>High-quality courses</li>
            <li>Experienced mentors</li>
            <li>Flexible learning schedules</li>
            <li>Career guidance</li>
          </ul>
          <button className="bg-green-600 text-white px-6 py-3 rounded mt-6">More about us</button>
        </div>
      </section>

    </div>
  );
}

export default Home;
