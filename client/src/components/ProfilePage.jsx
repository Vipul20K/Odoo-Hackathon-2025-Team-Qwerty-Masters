import { useState } from 'react';
import { Link } from 'react-router-dom';

const ProfilePage = () => {
  const [userData, setUserData] = useState({
    name: 'John Doe',
    email: 'john.doe@example.com',
    password: '********',
    gender: 'Male',
    profilePic: 'https://via.placeholder.com/150',
    totalQuestions: 3, // New field for total questions asked
    answersPosted: 7, // New field for total answers posted
    isGenderOpen: false // Toggle for dropdown
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Profile updated:', userData);
    // Add your update logic here (e.g., API call)
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-900 via-purple-900 to-black">
      <div className="bg-white/30 backdrop-blur-md p-6 rounded-2xl shadow-2xl w-full max-w-4xl border border-white/20 transform transition-all duration-500 hover:scale-105">
        <h2 className="text-3xl font-bold text-white text-center mb-6">User Profile</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Profile Picture Column */}
          <div className="flex justify-center">
            <div className="w-48 h-48 bg-gray-800 rounded-full overflow-hidden border-4 border-white/20">
              <img
                src={userData.profilePic}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          {/* Form Column */}
          <div className="space-y-4">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-200 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={userData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-white/10 border border-gray-300/20 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-300 placeholder-gray-400 text-white"
                  placeholder="Enter your name"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-200 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={userData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-white/10 border border-gray-300/20 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-300 placeholder-gray-400 text-white"
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div>
                <label htmlFor="password" className="block text-sm font-semibold text-gray-200 mb-2">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={userData.password}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-white/10 border border-gray-300/20 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-300 placeholder-gray-400 text-white"
                  placeholder="Enter your password"
                  required
                />
              </div>
<div>
  <label htmlFor="gender" className="block text-sm font-semibold text-gray-200 mb-2">
    Gender
  </label>
  <div className="relative">
    <button
      type="button"
      className="w-full px-4 py-2 bg-white/10 border border-gray-300/20 rounded-xl text-white text-left focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-300"
      onClick={() => setUserData({ ...userData, isGenderOpen: !userData.isGenderOpen })}
    >
      {userData.gender}
    </button>
    {userData.isGenderOpen && (
      <div className="absolute w-full mt-1 bg-gray-800 border border-gray-600 rounded-xl shadow-lg z-10">
        <div
          className="px-4 py-2 text-white cursor-pointer"
          onClick={() => {
            setUserData({ ...userData, gender: 'Male', isGenderOpen: false });
          }}
        >
          Male
        </div>
        <div
          className="px-4 py-2 text-white cursor-pointer hover:bg-purple-500/30"
          onClick={() => {
            setUserData({ ...userData, gender: 'Female', isGenderOpen: false });
          }}
        >
          Female
        </div>
        <div
          className="px-4 py-2 text-white cursor-pointer hover:bg-purple-500/30"
          onClick={() => {
            setUserData({ ...userData, gender: 'Other', isGenderOpen: false });
          }}
        >
          Other
        </div>
      </div>
    )}
  </div>
</div>
              <div>
                <label htmlFor="totalQuestions" className="block text-sm font-semibold text-gray-200 mb-2">
                  Total Questions Asked
                </label>
                <input
                  type="number"
                  id="totalQuestions"
                  name="totalQuestions"
                  value={userData.totalQuestions}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-white/10 border border-gray-300/20 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-300 placeholder-gray-400 text-white"
                  placeholder="Enter total questions"
                  required
                />
              </div>
              <div>
                <label htmlFor="answersPosted" className="block text-sm font-semibold text-gray-200 mb-2">
                  Total Answers Posted
                </label>
                <input
                  type="number"
                  id="answersPosted"
                  name="answersPosted"
                  value={userData.answersPosted}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-white/10 border border-gray-300/20 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-300 placeholder-gray-400 text-white"
                  placeholder="Enter total answers"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-3 rounded-xl hover:from-purple-700 hover:to-indigo-700 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl"
              >
                Save Changes
              </button>
            </form>
            <p className="text-center text-sm text-gray-300 mt-4">
              <Link to="/login" className="text-purple-300 hover:text-purple-400 underline transition-colors duration-300">
                Back to Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;