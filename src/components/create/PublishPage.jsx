import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import backbutton from '../../assets/images/backButtonBeige-icon.png';
import editbutton from '../../assets/images/editButton-icon.png';
import settingsBeigeicon from '../../assets/images/settingsBeige-icon.png';
import previewbutton from '../../assets/images/previewButton-icon.png';
import duplicatebutton from '../../assets/images/duplicateButton-icon.png';
import deletebutton from '../../assets/images/deleteButton-icon.png';
import addButton from '../../assets/images/addButtonWhite.png';
import editpenbutton from '../../assets/images/editpenButton-icon.png';
import correctbutton from '../../assets/images/correctButton-icon.png';
import wrongbutton from '../../assets/images/wrongButton-icon.png';

function PublishPage() {
  const [count, setCount] = useState(0);

  const navigate = useNavigate(); // Initialize navigate function

  const correctAnswer = 'Sphere'; // Define the correct answer

  // Function to determine which button to display based on the answer
  const getAnswerButton = (answer) => {
    return answer === correctAnswer
      ? correctbutton
      : wrongbutton;
  };

  // Handle save button click
  const handlePublishClick = () => {
    navigate('/View-Page'); // Navigate to PublishPage
  };

  return (
    <div className="flex-1 bg-custom-brownbg h-screen">
      {/* Main Container */}
      <div className="flex flex-col pt-10 px-10">
        {/* Containermain */}
        <div className="flex justify-between items-center mb-10 bg-custom-brownnav py-2 pr-5">
          {/* First Container */}
          <div className="flex items-center gap-4">
            {/* Back Button */}
            <img
              src={backbutton}
              alt="Back"
              className="w-7 h-7 ml-4"
            />
            {/* Title */}
            <h1 className="text-3xl font-bold text-custom-brownbg">Kabihasnang Asya</h1>
            {/* Edit Button */}
            <img
              src={editbutton}
              alt="Edit"
              className="w-6 h-6"
            />
          </div>

          {/* Second Container */}
          <div className="flex items-center gap-4">
            {/* Settings Icon */}
            <img
              src={settingsBeigeicon}
              alt="Settings"
              className="w-6 h-6"
            />
            {/* Preview Button */}
            <img
              src={previewbutton}
              alt="Preview"
              className="w-6 h-6"
            />
            {/* Published Button */}
            <button
              className="bg-custom-yellow text-white font-bold py-1 px-2 rounded-md hover:bg-custom-yellow-dark transition-all duration-300"
              onClick={handlePublishClick} // Attach the handleSaveClick function to the button
            >
              Publish
            </button>
          </div>
        </div>

        {/* New Container: List and Actions */}
        <div className="flex justify-between">
          {/* List Container */}
          <div className="flex-1 bg-white mr-5 p-5 rounded-md shadow-md">
            <h2 className="text-2xl font-bold mb-4 text-custom-brownnav">1 question</h2>

            <div className="bg-custom-brownnav rounded-md mb-5 p-5 mt-5">
              {/* Parent Container */}
              <div className="w-full flex justify-between items-center">
                <div className="flex gap-2 items-center">
                  <div>
                    {/* Question Type */}
                    <h1 className="text-sm font-bold text-custom-brownbg mb-1">1. Multiple Choice</h1>
                  </div>
                  <select className="border bg-custom-brownbg text-custom-brownnav border-gray-300 rounded-md p-1 w-auto text-xs">
                    <option>Difficulty level</option>
                    <option>Easy</option>
                    <option>Medium</option>
                    <option>Hard</option>
                  </select>
                  <select className="border bg-custom-brownbg text-custom-brownnav border-gray-300 rounded-md p-1 w-auto text-xs">
                    <option>Timer</option>
                    <option>15 secs</option>
                    <option>30 secs</option>
                    <option>1 min</option>
                  </select>
                  <select className="border bg-custom-brownbg text-custom-brownnav border-gray-300 rounded-md p-1 w-auto text-xs">
                    <option>Point</option>
                    <option>1 point</option>
                    <option>3 point</option>
                    <option>5 point</option>
                  </select>
                </div>

                <div className="flex gap-2 items-center">
                  {/* Duplicate Button */}
                  <img
                    src={duplicatebutton}
                    alt="Duplicate"
                    className="w-5 h-5 cursor-pointer"
                  />
                  {/* Edit Button */}
                  <button className="flex text-sm gap-2 bg-custom-yellow text-custom-brownbg py-1 px-2 rounded-md">
                    {/* Add Button */}
                    <img
                      src={editpenbutton}
                      alt="Add"
                      className="w-5 h-5"
                    />
                    Edit
                  </button>
                  {/* Delete Button */}
                  <img
                    src={deletebutton}
                    alt="Delete"
                    className="w-5 h-6 cursor-pointer"
                  />
                </div>
              </div>

              <div className="mt-5">
                {/* Question Title */}
                <h1 className="text-sm font-bold text-custom-brownbg mb-1">Sino ang pambansang bayani ng Pilipinas?</h1>
              </div>

              {/* Grid Container */}
              <div className="grid grid-cols-3 gap-4 mt-2">
                {/* First Row (3 Columns) */}
                <div className="flex items-center">
                  <img
                    src={getAnswerButton('Sphere')}
                    alt="Answer Indicator"
                    className="w-5 h-5 mr-2"
                  />
                  <label className="text-sm font-bold text-custom-brownbg">Jose Rizal</label>
                </div>
                <div className="flex items-center">
                  <img
                    src={getAnswerButton('Flat')}
                    alt="Answer Indicator"
                    className="w-5 h-5 mr-2"
                  />
                  <label className="text-sm font-bold text-custom-brownbg">Andres Bonifacio</label>
                </div>
                <div className="flex items-center">
                  <img
                    src={getAnswerButton('Oval')}
                    alt="Answer Indicator"
                    className="w-5 h-5 mr-2"
                  />
                  <label className="text-sm font-bold text-custom-brownbg">Apolinario Mabini</label>
                </div>

                {/* Second Row (2 Columns) */}
                <div className="flex items-center">
                  <img
                    src={getAnswerButton('Cube')}
                    alt="Answer Indicator"
                    className="w-5 h-5 mr-2"
                  />
                  <label className="text-sm font-bold text-custom-brownbg">Lapu-Lapu</label>
                </div>
                <div className="flex items-center">
                  <img
                    src={getAnswerButton('Pyramid')}
                    alt="Answer Indicator"
                    className="w-5 h-5 mr-2"
                  />
                  <label className="text-sm font-bold text-custom-brownbg">Ferdinand Magellan</label>
                </div>
              </div>
            </div>

            {/* Repeat for other questions if needed */}
          </div>

          {/* Add Question and Update Container */}
          <div className="bg-custom-brownnav p-5 rounded-md shadow-md">
            {/* Add Question Section */}
            <button className="flex text-base gap-2 mb-6 bg-custom-yellow text-white py-2 px-8 rounded-md hover:bg-custom-yellow-dark transition-all duration-300">
              {/* Add Button */}
              <img
                src={addButton}
                alt="Add"
                className="w-6 h-6"
              />
              {/* Add Question Text */}
              <span>Add Question</span>
            </button>

            {/* Update All Container */}
            <div className="mt-6 border border-custom-brownbg rounded-md p-4">
              <p className="font-bold text-lg mb-5 border-b-4 border-custom-brownbg text-custom-brownbg">Update All</p>

              {/* Dropdown 1 */}
              <select className="border flex border-transparent bg-transparent text-custom-brownbg rounded-md pr-10 w-auto mb-4">
                <option>Dropdown 1</option>
              </select>

              {/* Dropdown 2 */}
              <select className="border border-transparent bg-transparent text-custom-brownbg rounded-md pr-10 w-auto">
                <option>Dropdown 2</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PublishPage;
