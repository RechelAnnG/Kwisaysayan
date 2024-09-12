import { useState } from 'react';
import backbutton from '../assets/images/backButton-icon.png'; // Corrected import path
import { useNavigate } from 'react-router-dom';

function DropDownPage() {
  const [selectedOption, setSelectedOption] = useState(''); // State to manage dropdown selection
  const [dropdown1, setDropdown1] = useState(''); // State for first dropdown
  const [dropdown2, setDropdown2] = useState(''); // State for second dropdown
  const [dropdown3, setDropdown3] = useState(''); // State for third dropdown
  const [correctAnswer, setCorrectAnswer] = useState(''); // State to track correct answer checkbox

  const navigate = useNavigate(); // Initialize navigate function

  // Handle dropdown change and navigate
  const handleDropdownChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedOption(selectedValue);

    // Navigate to the corresponding page based on selected option
    switch (selectedValue) {
      case 'multipleChoice':
        navigate('/Multiple-Choice');
        break;
      case 'fillInTheBlank':
        navigate('/Fill-In-The-Blank');
        break;
      case 'openEnded':
        navigate('/Open-Ended');
        break;
      case 'dropdown':
        navigate('/Drop-Down');
        break;
      default:
        break;
    }
  };

  // Handle checkbox change
  const handleCheckboxChange = (event) => {
    setCorrectAnswer(event.target.value);
  };

  // Handle save button click
  const handleSaveClick = () => {
    navigate('/Publish-Page'); // Navigate to PublishPage
  };

  return (
    <div className="flex-1 bg-custom-brownbg pb-5">
      {/* First container: Back button, heading, and dropdown */}
      <div className="flex flex-col pt-10 px-10 bg-custom-brownbg">
        <div className="flex items-center">
          {/* Image on the left */}
          <img 
            src={backbutton} 
            alt="Back" 
            className="w-7 h-7 mr-4" // Adjust width and height as needed
          />
          <h1 className="mr-4 text-3xl font-bold text-custom-brownnav">Kabihasnang Asya</h1>

          {/* Dropdown */}
          <select 
            value={selectedOption} 
            onChange={handleDropdownChange} 
            className="border border-custom-brownnav rounded-md py-1 text-custom-brownnav text-base"
          >
            <option value="">Type</option>
            <option value="multipleChoice">Multiple Choice</option>
            <option value="fillInTheBlank">Fill in the Blank</option>
            <option value="openEnded">Open Ended</option>
            <option value="dropdown">Dropdown</option>
          </select>
        </div>
      </div>

      {/* Second container: Pink container below the first container */}
      <div className="flex bg-custom-brownnav w-[calc(100% - 20px)] h-[60px] shadow-md mx-10 mt-10 p-4">
        <div className="flex flex-grow items-center gap-4">
          {/* First inner container: Letters A B I U */}
          <div className="flex gap-4 text-white text-xl font-bold">
            <div>A</div>
            <div>B</div>
            <div>I</div>
            <div>U</div>
          </div>
          
          {/* Second inner container: Dropdowns and Save button */}
          <div className="flex items-center gap-2 ml-auto">
            <select 
              value={dropdown1} 
              onChange={(e) => handleDropdownChange(e, setDropdown1)} 
              className="border border-gray-300 rounded-md py-1 text-gray-700 text-base w-auto"
            >
              <option value="">Difficulty level</option>
              <option value="Easy">Easy</option>
              <option value="Medium">Medium</option>
              <option value="Hard">Hard</option>
            </select>
            <select 
              value={dropdown2} 
              onChange={(e) => handleDropdownChange(e, setDropdown2)} 
              className="border border-gray-300 rounded-md py-1 text-gray-700 text-base w-auto"
            >
              <option value="">Minutes</option>
              <option value="15 secs">15 secs</option>
              <option value="30 secs">30 secs</option>
              <option value="1 min">1 min</option>
            </select>
            <select 
              value={dropdown3} 
              onChange={(e) => handleDropdownChange(e, setDropdown3)} 
              className="border border-gray-300 rounded-md py-1 text-gray-700 text-base w-auto"
            >
              <option value="">Point</option>
              <option value="1 point">1 point</option>
              <option value="3 points">3 points</option>
              <option value="5 points">5 points</option>
            </select>
            <button 
              className="bg-custom-yellow text-white font-bold py-1 px-2 rounded-md hover:bg-custom-yellow transition-all duration-300"
              onClick={handleSaveClick} // Attach the handleSaveClick function to the button
            >
              Save
            </button>
          </div>
        </div>
      </div>

      {/* Third container: Custom yellow container */}
      <div className="flex bg-custom-yellow w-[calc(100% - 20px)] h-auto shadow-md mx-10 my-10 p-4 rounded-md">
        <div className="flex flex-grow items-center">
          {/* Pink container with large textbox */}
          <div className="bg-custom-brownnav w-full h-auto p-4 rounded-md">
            <textarea 
              className="w-full h-[200px] border border-white bg-transparent p-2 text-white text-center rounded-md"
              style={{ lineHeight: '200px' }} // Adjust the line height for vertical centering
              placeholder="Enter text here..."
            />
            {/* Container for text and buttons */}
            <div className="mt-4">
              <p className=" text-custom-yellow mb-2">Up to 10 options</p>
              <div className="flex justify-between mb-2">
                <button 
                  className="bg-custom-green text-white font-bold py-1 px-2 rounded-md hover:bg-custom-green-dark transition-all duration-300"
                >
                  Add Correct Answer
                </button>
                <button 
                  className="bg-custom-red text-white font-bold py-1 px-2 rounded-md hover:bg-custom-red-dark transition-all duration-300"
                >
                  Add Incorrect Answer
                </button>
              </div>
              {/* Container for two horizontally aligned textareas */}
              <div className="flex gap-2">
                <textarea 
                  className="w-1/2 h-[50px] border border-white bg-white p-2 text-black rounded-md"
                  placeholder="Correct Answer"
                />
                <textarea 
                  className="w-1/2 h-[50px] border border-white bg-white p-2 text-black rounded-md"
                  placeholder="Incorrect Answer"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DropDownPage;
