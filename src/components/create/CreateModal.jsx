import React, { useState } from 'react';
import xButton from '../../assets/images/xButton-icon.png'; // Corrected import path
import { useNavigate } from 'react-router-dom';

export default function CreateModal({
  createquizmodal,
  createquizsetModal,
  createquiztoggleModal,
}) {
  const [selectedQuestionType, setSelectedQuestionType] = useState('');
  const [topicName, setTopicName] = useState('');
  const navigate = useNavigate();

  if (!createquizmodal) return null;

  // Handle radio button change
  const handleRadioChange = (event) => {
    setSelectedQuestionType(event.target.value);
  };

  // Handle Create button click
  const handleCreateQuiz = () => {
    if (!topicName.trim()) {
      alert('Please enter a topic name.');
      return;
    }
    
    if (!selectedQuestionType) {
      alert('Please select a question type.');
      return;
    }

    // Close modal
    createquiztoggleModal();

    // Navigate based on the selected question type
    if (selectedQuestionType === 'multipleChoice') {
      navigate('/Multiple-Choice');
    } else if (selectedQuestionType === 'fillintheblank') {
      navigate('/Fill-In-The-Blank');
    } else if (selectedQuestionType === 'openended') {
      navigate('/Open-Ended');
    } else if (selectedQuestionType === 'dropdown') {
      navigate('/Drop-Down');
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-custom-brownbg w-[300px] h-[416px] rounded-lg shadow-2xl transform hover:scale-105 transition-all duration-500 ease-in-out">
        <div className="bg-custom-brownnav flex items-center justify-between p-4 rounded-t-lg">
          <h2 className="text-white text-xl font-bold">Create Quiz</h2>
          <button
            className="rounded-full p-1"
            onClick={createquiztoggleModal}
          >
            <img src={xButton} alt="Close" className="w-4 h-4" />
          </button>
        </div>

        <div className="p-4 flex flex-col gap-4 text-custom-bronwnnav">
          <label htmlFor="topicName" className="text-lg font-semibold">
            Topic Name:
          </label>
          <input
            id="topicName"
            type="text"
            placeholder="Enter topic name"
            value={topicName}
            onChange={(e) => setTopicName(e.target.value)}
            className="border border-custom-brownnav rounded-md px-4 py-2 text-custom-brownnav"
          />

          <div className="flex flex-col gap-2">
            <span className="text-lg font-semibold">Question Type:</span>
            <div className="flex flex-col gap-1">
              <label className={`flex items-center cursor-pointer ${selectedQuestionType === 'multipleChoice' ? 'text-custom-yellow' : ''}`}>
                <input
                  type="radio"
                  name="questionType"
                  value="multipleChoice"
                  className="mr-2 accent-custom-yellow border-custom-yellow"
                  onChange={handleRadioChange}
                  checked={selectedQuestionType === 'multipleChoice'}
                />
                <span>Multiple Choice</span>
              </label>

              <label className={`flex items-center cursor-pointer ${selectedQuestionType === 'fillintheblank' ? 'text-custom-yellow' : ''}`}>
                <input
                  type="radio"
                  name="questionType"
                  value="fillintheblank"
                  className="mr-2 accent-custom-yellow border-custom-yellow"
                  onChange={handleRadioChange}
                  checked={selectedQuestionType === 'fillintheblank'}
                />
                <span>Fill in the Blank</span>
              </label>

              <label className={`flex items-center cursor-pointer ${selectedQuestionType === 'openended' ? 'text-custom-yellow' : ''}`}>
                <input
                  type="radio"
                  name="questionType"
                  value="openended"
                  className="mr-2 accent-custom-yellow border-custom-yellow"
                  onChange={handleRadioChange}
                  checked={selectedQuestionType === 'openended'}
                />
                <span>Open Ended</span>
              </label>

              <label className={`flex items-center cursor-pointer ${selectedQuestionType === 'dropdown' ? 'text-custom-yellow' : ''}`}>
                <input
                  type="radio"
                  name="questionType"
                  value="dropdown"
                  className="mr-2 accent-custom-yellow border-custom-yellow"
                  onChange={handleRadioChange}
                  checked={selectedQuestionType === 'dropdown'}
                />
                <span>Dropdown</span>
              </label>
            </div>
          </div>

          <button
            className="bg-custom-brownnav text-white font-bold mt-5 py-2 px-6 rounded-md hover:bg-custom-brownnav transition-all duration-300"
            onClick={handleCreateQuiz}
          >
            Create
          </button>
        </div>
      </div>
    </div>
  );
}
