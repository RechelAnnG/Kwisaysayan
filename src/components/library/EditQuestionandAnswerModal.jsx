import React, { useState } from 'react';
import xButton from '../../assets/images/xButton-icon.png'; // Corrected import path
import { useNavigate } from 'react-router-dom';

export default function EditQuestionandAnswerModal({
  editmodal,
  editsetModal,
  edittoggleModal,
}) {
  const [topicName, setTopicName] = useState('');
  const [choices, setChoices] = useState(['', '', '', '', '']); // Initial empty choices
  const navigate = useNavigate();

  if (!editmodal) return null;

  // Handle Create button click
  const handleCreateQuiz = () => {
    if (!topicName.trim()) {
      alert('Please enter a topic name.');
      return;
    }

    // Check if there are enough choices filled
    if (choices.some(choice => !choice.trim())) {
      alert('Please fill in all choices.');
      return;
    }

    // Close modal
    edittoggleModal();

    // Navigate to a default page or some specific page
    navigate('/DefaultPage'); // Replace with the actual path you want to navigate to
  };

  // Handle change for choice textboxes
  const handleChoiceChange = (index, value) => {
    const newChoices = [...choices];
    newChoices[index] = value;
    setChoices(newChoices);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-custom-brownbg w-auto h-auto rounded-lg shadow-2xl transform hover:scale-105 transition-all duration-500 ease-in-out">
        <div className="bg-custom-brownnav flex items-center justify-between p-4 rounded-t-lg">
          <h2 className="text-white text-xl font-bold">Create Quiz</h2>
          <button
            className="rounded-full p-1"
            onClick={edittoggleModal}
          >
            <img src={xButton} alt="Close" className="w-4 h-4" />
          </button>
        </div>

        <div className="p-4 flex flex-col gap-4 text-custom-brownnav">
          <label htmlFor="topicName" className="text-lg font-semibold">
            Question:
          </label>
          <input
            id="topicName"
            type="text"
            placeholder=""
            value={topicName}
            onChange={(e) => setTopicName(e.target.value)}
            className="border w-[500px] border-custom-brownnav rounded-md px-4 py-2 text-custom-brownnav"
          />

          <div className="flex flex-col gap-2">
            <span className="text-lg font-semibold">Choices:</span>
            <div className="grid grid-cols-2 gap-4">
              {choices.map((choice, index) => (
                <input
                  key={index}
                  type="text"
                  placeholder={`Choice ${index + 1}`}
                  value={choice}
                  onChange={(e) => handleChoiceChange(index, e.target.value)}
                  className="border border-custom-brownnav rounded-md px-4 py-2 text-custom-brownnav"
                />
              ))}
            </div>
          </div>

          <div className="flex  gap-4">
            <button
              className="flex-1 bg-custom-brownnav text-custom-yellow font-bold mt-5 py-2 px-6 rounded-md hover:bg-custom-yellow border hover:text-custom-brownnav border-custom-brownnav transition-all duration-300"
              onClick={handleCreateQuiz}
            >
              Edit
            </button>
            <button
              className="flex-1 bg-custom-brownnav text-custom-yellow font-bold mt-5 py-2 px-6 rounded-md hover:bg-custom-yellow hover:text-custom-brownnav border border-custom-brownnav transition-all duration-300"
              onClick={edittoggleModal}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
