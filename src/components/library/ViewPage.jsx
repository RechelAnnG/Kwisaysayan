import { useState } from 'react';

import { useNavigate } from 'react-router-dom';

import backbutton from '../../assets/images/backButton-icon.png'; // Import the back button image
import editbutton from '../../assets/images/editButton-icon.png'; // Import the edit button image
import settingsBeigeicon from '../../assets/images/settingsBeige-icon.png'; // Import the settings icon
import previewbutton from '../../assets/images/previewButton-icon.png'; // Import the preview button image
import duplicatebutton from '../../assets/images/duplicateButtonDark-icon.png'; // Import the duplicate button image
import deletebutton from '../../assets/images/deleteButton-icon.png'; // Import the delete button image
import addButton from '../../assets/images/addButtonWhite.png'; // Import the add button image
import editpenbutton from '../../assets/images/editpenButton-icon.png';
import menuicon from '../../assets/images/menu-icon.png';
import xbutton from '../../assets/images/xButtonDark-icon.png';

function ViewPage() {
  const [count, setCount] = useState(0);

  const navigate = useNavigate(); // Initialize navigate function

  const correctAnswer = 'Sphere'; // Define the correct answer

  const getAnswerClass = (answer) => {
    return answer === correctAnswer
      ? 'bg-green-200 text-green-800' // Green for correct answer
      : 'bg-red-200 text-red-800'; // Red for incorrect answer
  };

  // Handle save button click
  const handleGotoLibraryClick = () => {
    navigate('/Library'); // Navigate to PublishPage
  };

  return (
    <div className="flex-1 bg-custom-brownbg h-screen">
      {/* Main Container */}
      <div className="flex flex-col pt-10 px-10">
        {/* Containermain */}
        <div className="flex justify-between items-center mb-5 py-2 ">
          {/* First Container */}
          <div className="flex items-center ml-auto">
            {/* Back Button */}
            <button
            className="rounded-full p-1"
            onClick={handleGotoLibraryClick} // Attach the handlegotolibraryclick function to the button
          >
            <img src={xbutton}
              alt="Back"
              className="w-7 h-7 " />
          </button>
          </div>
        </div>

        {/* New Container */}
        <div className="bg-white p-5 rounded-md shadow-md flex flex gap-4">

          <div className="flex items-center gap-4">
            {/* Square (Placeholder for content) */}
            <div className="w-28 h-28 bg-gray-300 rounded-md"></div>
            {/* Title */}
          </div>
         
         {/* Info */}
         <div className="flex items-center">
            <div className="flex-1 justify-center">
              <p className="text-xl font-bold text-custom-brownnav mb-1">Kabihasnang Asya</p>
              <p className="text-sm text-custom-brownnav mb-1">0% Accuracy</p>
              <p className="text-sm text-custom-brownnav mb-1">0 Plays</p>
              <p className="text-sm text-custom-brownnav mb-1">4 hours ago</p>
            </div>
          </div>

          <div className=" flex flex-col ml-auto justify-between items-end">
            <div className="flex gap-2">
            
                {/* Back Button */}
                <img
                  src={duplicatebutton}
                  alt="Back"
                  className="w-7 h-7 ml-4 border border-custom-brownnav rounded-md p-1 " // Adjust width and height as needed
                />
            
           
                {/* Back Button */}
                <img
                  src={duplicatebutton}
                  alt="Back"
                  className="w-7 h-7 ml-4 border border-custom-brownnav rounded-md p-1 " // Adjust width and height as needed
                />
           
            
                {/* Back Button */}
                <img
                  src={duplicatebutton}
                  alt="Back"
                  className="w-7 h-7 ml-4 border border-custom-brownnav rounded-md p-1 " // Adjust width and height as needed
                />
         
            </div>
            <div className="flex gap-2">
              <button
                className="flex  bg-custom-yellow text-white font-bold py-1 px-2 rounded-md hover:bg-custom-yellow-dark transition-all duration-300"
              >
                Edit
              </button>

              <button
                className="flex bg-custom-yellow text-white font-bold py-1 px-2 rounded-md hover:bg-custom-yellow-dark transition-all duration-300"
              >
                Delete
              </button>
            </div>
      
          </div>

          
        </div>

        <div className="flex mt-5 gap-5">

          <div className="flex-1 bg-custom-yellow p-5 rounded-md justify-center shadow-md flex ">
              <div className="justify-center items-center">
                <h1 className="text-xl font-bold text-custom-brownnav mb-1">Start Now</h1>
              </div>
            </div>
            <div className="flex-1 bg-custom-yellow p-5 justify-center rounded-md shadow-md flex flex gap-4">
              <div className="justify-center items-center">
                <h1 className="text-xl font-bold text-custom-brownnav mb-1">Assign</h1>
              </div>
          </div>
        </div>

        <div className="flex items-center pt-5 gap-3 ">
            <div className=" gap-4">
              {/* Back Button */}
              <img
                src={menuicon}
                alt="Back"
                className="w-8 h-8 p-1 " // Adjust width and height as needed
              />
            </div>

            <div className="justify-center items-center">
              <h1 className="text-xl font-bold text-custom-brownnav mb-1">1 Question</h1>
            </div>

            <div className="flex gap-2 ml-auto">
              <button
                className="flex  bg-transparent text-custom-brownnav border border-custom-brownnav font-bold py-1 px-2 rounded-md hover:bg-custom-brownnav hover:text-custom-brownbg transition-all duration-300"
              >
                Show Answer
              </button>

              <button
                className="flex bg-transparent text-custom-brownnav border border-custom-brownnav font-bold py-1 px-2 rounded-md hover:bg-custom-brownnav hover:text-custom-brownbg transition-all duration-300"
              >
                Preview
              </button>
            </div>
        </div>

        <div className="bg-custom-brownnav p-5 mt-5">
          {/* Parent Container */}
          <div className="w-full flex justify-between items-center">
            <div>
              {/* Question Type */}
              <h1 className="text-base font-bold text-custom-brownbg mb-1">1. Multiple Choice</h1>
            </div>

            <div className="flex gap-2">
              {/* Time and Points */}
              <p className="bg-custom-yellow text-white font-bold text-base py-1 px-2 rounded-md hover:bg-custom-yellow-dark transition-all duration-300">
                Easy
              </p>
              <p className="bg-custom-yellow text-white font-bold text-base py-1 px-2 rounded-md hover:bg-custom-yellow-dark transition-all duration-300">
                30 seconds
              </p>

              <p className="bg-custom-yellow text-white font-bold text-base py-1 px-2 rounded-md hover:bg-custom-yellow-dark transition-all duration-300">
                2 points
              </p>
            </div>
          </div>

          <div className="mt-5">
            {/* Question Title */}
            <h1 className="text-lg font-bold text-custom-brownbg mb-1">What is the shape of the Earth?</h1>
          </div>

          {/* Grid Container */}
          <div className="grid grid-cols-3 gap-4 mt-2">
            {/* First Row (3 Columns) */}
            <div className="flex items-center">
              <input type="radio" name="answer" id="option1" className="mr-2" />
              <label htmlFor="option1" className="text-base font-bold text-custom-brownbg">Sphere</label>
            </div>
            <div className="flex items-center">
              <input type="radio" name="answer" id="option2" className="mr-2" />
              <label htmlFor="option2" className="text-base font-bold text-custom-brownbg">Flat</label>
            </div>
            <div className="flex items-center">
              <input type="radio" name="answer" id="option3" className="mr-2" />
              <label htmlFor="option3" className="text-base font-bold text-custom-brownbg">Oval</label>
            </div>

            {/* Second Row (2 Columns) */}
            <div className="flex items-center">
              <input type="radio" name="answer" id="option4" className="mr-2" />
              <label htmlFor="option4" className="text-base font-bold text-custom-brownbg">Cube</label>
            </div>
            <div className="flex items-center">
              <input type="radio" name="answer" id="option5" className="mr-2" />
              <label htmlFor="option5" className="text-base font-bold text-custom-brownbg">Pyramid</label>
            </div>
          </div>
        </div>


      </div>
    </div>
  );
}

export default ViewPage;
