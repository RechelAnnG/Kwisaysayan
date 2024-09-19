import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import addButtonBrown from '../../assets/images/addButtonBrown-icon.png';
import addButtonWhite from '../../assets/images/addButtonWhite.png';
import listbutton from '../../assets/images/listButtonDark-icon.png';
import viewarrow from '../../assets/images/viewArrowButtonDark-icon.png';
import arrowpage from '../../assets/images/arrowPageButtonDark-icon.png';

function QuestionBankPage() {
  const navigate = useNavigate(); // Initialize navigate function

  const [isHovered, setIsHovered] = useState(false);

  // Handle view button click
  const handleViewPageClick = () => {
    navigate('/Library/QuestionBankView'); // Navigate to QuestionBankView
  };

  // Handle create question bank button click
  const handleCreateQuestionBankClick = () => {
    navigate('/Library/QuestionBank/Create'); // Navigate to QuestionBankCreate
  };

  // Sample data (replace this with data from your database)
  const sampleData = [
    { id: 1, title: 'Kabihasnang Asya', questions: 5 },
    { id: 2, title: 'Another Topic', questions: 3 },
    // Add more sample data as needed
  ];

  return (
    <div className="flex-1 h-screen bg-custom-brownbg pb-10">
      {/* Section with Library and Question Bank Titles */}
      <section className="flex pt-10 px-10 items-center text-center text-3xl font-bold text-custom-brownnav">
        <span>LIBRARY</span>
        <img
          src={arrowpage}
          alt="Arrow Page"
          className="w-5 h-7 mx-5"
        />
        <span>QUESTION BANK</span>
      </section>

      {/* Container for Search and Create button */}
      <div className="flex items-center justify-between px-10 pt-10">
        {/* Search Box */}
        <div className="flex-grow max-w-md">
          <input
            type="text"
            placeholder="Search..."
            className="border border-gray-300 rounded-md px-4 py-2 text-gray-700"
          />
        </div>

        {/* Create question bank button */}
        <div className="ml-4">
          <button
            className="flex items-center bg-custom-brownnav text-white font-bold py-2 px-4 rounded-md hover:bg-white hover:text-custom-brownnav hover:border-custom-brownnav border-2 border-transparent transition-all duration-300"
            onClick={handleCreateQuestionBankClick} // Update the click handler
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
            <div key={item.id} className="flex bg-white shadow-[0_0_15px_#AEA9A9] p-6 items-center rounded-lg">
              {/* Square inside the container */}
              <div className="w-28 h-28 bg-gray-300 mr-4 rounded-lg"></div>
              {/* Text Container */}
              <div className="flex flex-col gap-2 flex-grow mr-4">
                <div
                  className="text-lg font-semibold text-custom-brownnav truncate"
                  style={{ maxWidth: '200px' }} // Adjust width as needed
                >
                  {item.title}
                </div>
                <div className="flex items-center text-sm text-custom-brownnav">
                  <img
                    src={listbutton}
                    alt="List Button"
                    className="w-4 h-4 mr-2"
                  />
                  {item.questions} questions
                </div>
              </div>
              {/* View button with hover transition for arrow rotation */}
              <button
                className="text-white font-bold py-2 px-6 rounded-md transition-all duration-300 flex items-center"
                onClick={handleViewPageClick}
              >
                <img
                  src={viewarrow}
                  alt="View Arrow"
                  className="w-5 h-5 transition-transform duration-300 transform hover:rotate-90" // Rotates 90 degrees on hover
                />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default QuestionBankPage;
