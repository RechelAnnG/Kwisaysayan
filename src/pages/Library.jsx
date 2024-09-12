import { useState } from 'react'
import { useNavigate } from 'react-router-dom';

import addButtonBrown from '../assets/images/addButtonBrown-icon.png'
import addButtonWhite from '../assets/images/addButtonWhite.png'
import CreateModal from '../components/create/CreateModal'

function Library() {

  const navigate = useNavigate(); // Initialize navigate function

  const [isHovered, setIsHovered] = useState(false)
  // State to track which tab is selected
  const [selectedTab, setSelectedTab] = useState('Published');
  const [createquizmodal, createquizsetModal] = useState(false);

  const createquiztoggleModal = () => {
    createquizsetModal(!createquizmodal);
  };

   // Handle save button click
   const handleViewPageClick = () => {
    navigate('/View-Page'); // Navigate to PublishPage
  };

  return (
    <div className="flex-1  bg-custom-brownbg pb-10">
      {/* Section with Library Title */}
      <section className="flex pt-10 px-10 text-center text-3xl font-bold text-custom-brownnav">
        <h1>LIBRARY</h1>
      </section>

      {/* Container for Published, Draft, Search, and Dropdown */}
      <div className="flex items-center justify-between px-10 pt-10">
        {/* Published and Draft Words */}
        <div className="flex gap-8">
          {/* Published Tab */}
          <div
            className={`text-xl font-semibold cursor-pointer ${
              selectedTab === 'Published'
                ? 'text-custom-yellow border-b-4 border-custom-yellow'
                : 'text-custom-brownnav'
            }`}
            onClick={() => setSelectedTab('Published')}
          >
            Published
          </div>

          {/* Draft Tab */}
          <div
            className={`text-xl font-semibold cursor-pointer ${
              selectedTab === 'Draft'
                ? 'text-custom-yellow border-b-4 border-custom-yellow'
                : 'text-custom-brownnav'
            }`}
            onClick={() => setSelectedTab('Draft')}
          >
            Draft
          </div>
        </div>

        {/* Search Box and Dropdown */}
        <div className="flex gap-4 items-center">
          {/* Search Textbox */}
          <input
            type="text"
            placeholder="Search..."
            className="border border-gray-300 rounded-md px-4 py-2 text-gray-700"
          />

          {/* Dropdown Box */}
          <select className="border border-gray-300 rounded-md px-4 py-2 text-gray-700">
            <option value="" disabled selected>
              Most Recent
            </option>
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </select>
        </div>
      </div>

      {/* Create Quiz Button with Image */}
      <div className="flex justify-end px-10 pt-10">
        <button
          className="flex items-center bg-custom-brownnav text-white font-bold py-2 px-2 rounded-md hover:bg-white hover:text-custom-brownnav hover:border-custom-brownnav border-2 border-transparent transition-all duration-300"
          onClick={createquiztoggleModal}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Image changes on hover */}
          <img
            src={isHovered ? addButtonBrown : addButtonWhite}
            alt="Add Button"
            className="w-6 h-6 mr-2"
          />
          Create Quiz
        </button>
      </div>

      {/* White Container with Square */}
      {[...Array(4)].map((_, index) => (
        <div key={index} className="px-10 pt-10">
          <div className="flex bg-white shadow-[0_0_15px_#AEA9A9] p-6 items-center rounded-lg">
            {/* Square inside the container */}
            <div className="w-28 h-28 bg-gray-300 mr-4 rounded-lg"></div>
            {/* Text Container */}
            <div className="flex flex-col gap-2 flex-grow mr-4">
              <div
                className="text-lg font-semibold text-gray-800 truncate"
                style={{ maxWidth: '200px' }} // Adjust width as needed
              >
                Kabihasnang Asya
              </div>
              <div className="text-sm text-gray-600">5 questions</div>
              <div className="text-sm text-gray-500">4 hours ago</div>
            </div>
            {/* Button */}
            <button
              className="bg-custom-brownnav text-white font-bold py-2 px-6 rounded-md hover:bg-custom-brownnav transition-all duration-300"
              onClick={handleViewPageClick} // Attach the handlegotolibraryclick function to the button
            >
              View
            </button>
          </div>
        </div>
      ))}
      <CreateModal
        createquizmodal={createquizmodal}
        createquizsetModal={createquizsetModal}
        createquiztoggleModal={createquiztoggleModal}
      />
    </div>
  )
}

export default Library
