import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import addButtonBrown from '../../assets/images/addButtonBrown-icon.png';
import addButtonWhite from '../../assets/images/addButtonWhite.png';
import listbutton from '../../assets/images/listButtonDark-icon.png';
import viewarrow from '../../assets/images/viewArrowButtonBeige-icon.png';
import arrowpage from '../../assets/images/arrowPageButtonDark-icon.png';

import CreateModal from '../../components/create/CreateModal';

function QuestionBankViewPage() {
  const navigate = useNavigate(); // Initialize navigate function

  const [isHovered, setIsHovered] = useState(false);
  const [createquizmodal, createquizsetModal] = useState(false);

  const createquiztoggleModal = () => {
    createquizsetModal(!createquizmodal);
  };

  // Handle view button click
  const handleViewPageClick = () => {
    navigate('/Library/QuestionBankTopicView'); // Navigate to QuestionBankTopicView
  };

  // Sample data (replace this with data from your database)
  const sampleData = [
    { id: 1, type: 'Multiple Choice' },
    { id: 2, type: 'True/False' },
    // Add more sample data as needed
  ];

  return (
    <div className="flex-1 bg-custom-brownbg pb-10">
      {/* Section with Library and Question Bank Titles */}
      <section className="flex pt-10 px-10 items-center text-center text-3xl font-bold text-custom-brownnav">
        <span>LIBRARY</span>
        <img
          src={arrowpage}
          alt="Arrow Page"
          className="w-5 h-7 mx-5"
        />
        <span>QUESTION BANK</span>
        <img
          src={arrowpage}
          alt="Arrow Page"
          className="w-5 h-7 mx-5"
        />
        <span>KABIHASNANG ASYA</span>
      </section>

      {/* Container for Search and Create button */}
      <div className="flex items-center justify-between px-10 pt-10">
        {/* Search Box */}
        <div className="flex gap-4 items-center max-w-xs">
          <input
            type="text"
            placeholder="Search..."
            className="border border-gray-300 rounded-md px-4 py-2 text-gray-700 w-full"
          />
        </div>

        {/* Create question bank button */}
        <div>
          <button
            className="flex items-center bg-custom-brownnav text-white font-bold py-2 px-4 rounded-md hover:bg-white hover:text-custom-brownnav hover:border-custom-brownnav border-2 border-transparent transition-all duration-300"
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
            Create question bank
          </button>
        </div>
      </div>

      {/* Container for displaying data */}
      <div className="px-10 pt-10">
        <div className="grid grid-cols-1 gap-4">
          {sampleData.map((item) => (
            <div key={item.id} className="bg-white shadow-[0_0_15px_#AEA9A9] rounded-lg">
              <div className="flex flex-col bg-white shadow-[0_0_15px_#AEA9A9] items-center rounded-lg">
                {/* Header inside the container */}
                <div className="w-full bg-custom-brownnav text-white font-bold text-lg p-3 mb-5 rounded-t-lg flex items-center justify-between">
                  <span>{item.type}</span>
                  <button
                    onClick={handleViewPageClick}
                  >
                    <img
                      src={viewarrow}
                      alt="View Arrow"
                      className="w-5 h-5 transition-transform duration-300 transform hover:rotate-90"
                    />
                  </button>
                </div>
                {/* Content area (if needed, add your content here) */}
              </div>
            </div>
          ))}
        </div>
      </div>

      <CreateModal
        createquizmodal={createquizmodal}
        createquizsetModal={createquizsetModal}
        createquiztoggleModal={createquiztoggleModal}
      />
    </div>
  );
}

export default QuestionBankViewPage;
