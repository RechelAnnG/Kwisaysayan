import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import addButtonBrown from '../../assets/images/addButtonBrown-icon.png';
import addButtonWhite from '../../assets/images/addButtonWhite.png';
import listbutton from '../../assets/images/listButtonDark-icon.png';
import viewarrow from '../../assets/images/viewArrowButtonBeige-icon.png';
import arrowpage from '../../assets/images/arrowPageButtonDark-icon.png';

function CreateQuestionBankPage() {
  const navigate = useNavigate(); // Initialize navigate function

  const [isHovered, setIsHovered] = useState(false);

  // Handle view button click
  const handleViewPageClick = () => {
    navigate('/Library/QuestionBankTopicView'); // Navigate to QuestionBankTopicView
  };

  return (
    <div className="flex-1 bg-custom-brownbg pb-10 min-h-screen">
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
        <span>CREATE</span>
      </section>

      {/* Container for Search and Question bank name */}
      <div className="flex flex-col items-start px-10 pt-10">
        {/* Question bank name input */}
        <div className="flex flex-col gap-4 max-w-xl mb-4">
          <label htmlFor="questionBankName" className="font-semibold text-custom-brownnav whitespace-nowrap">
            Question bank name:
          </label>
          <input
            type="text"
            id="questionBankName"
            placeholder="Enter name..."
            className="border border-gray-300 rounded-md px-4 py-2 text-gray-700 w-[500px]"
          />
        </div>

        {/* Dropdown below the input */}
        <div className="flex flex-col gap-4 max-w-xl mb-4">
          <label htmlFor="dropdown" className="font-semibold text-custom-brownnav whitespace-nowrap">
            Select an option:
          </label>
          <select
            id="dropdown"
            className="border border-gray-300 rounded-md px-4 py-2 text-gray-700 w-[500px]"
          >
            <option value="" disabled>Select an option</option>
            <option value="option1">Multiple Choice</option>
            <option value="option2">True or False</option>
            <option value="option3">Yes or No</option>
            <option value="option4">Identification</option>
          </select>
        </div>

        {/* White container below the dropdown */}
        <div className="bg-white border border-gray-300 rounded-md p-4 w-auto">
          <p className="text-gray-700 mb-4">Question</p>
          <textarea
            placeholder="Enter your question..."
            className="border border-gray-300 rounded-md px-4 py-2 text-gray-700 w-[600px] h-32 overflow-auto"
            rows="4"
          />

          {/* Flex container for textboxes */}
          
        </div>
      </div>
    </div>
  );
}

export default CreateQuestionBankPage;
