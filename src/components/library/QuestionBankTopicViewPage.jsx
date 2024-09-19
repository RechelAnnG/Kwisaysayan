import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import addButtonBrown from '../../assets/images/addButtonBrown-icon.png';
import addButtonWhite from '../../assets/images/addButtonWhite.png';
import viewarrow from '../../assets/images/viewArrowButtonBeige-icon.png';
import arrowpage from '../../assets/images/arrowPageButtonDark-icon.png';
import editButton from '../../assets/images/editButtonDark-icon.png';

import EditModal from '../../components/library/EditQuestionandAnswerModal';

function QuestionBankTopicViewPage() {
  const navigate = useNavigate();

  const [isHovered, setIsHovered] = useState(false);
  const [editmodal, editsetModal] = useState(false);

  const edittoggleModal = () => {
    editsetModal(prevState => !prevState);
  };

  // Handle view button click
  const handleViewPageClick = () => {
    navigate('/Library/QuestionBankTopicView');
  };

  // Sample data (replace this with data from your database)
  const sampleData = [
    { id: 1, type: 'Multiple Choice' },
    { id: 2, type: 'True/False' },
    // Add more sample data as needed
  ];

  return (
    <div className="flex flex-col min-h-screen bg-custom-brownbg pb-10">
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

      <div className="flex items-center justify-between px-10 pt-10">
        <div className="flex gap-4 items-center">
          <input
            type="text"
            placeholder="Search..."
            className="border border-gray-300 w-[400px] rounded-md px-4 py-2 text-gray-700"
          />
        </div>
      </div>

      <div className="px-10 pt-10 flex-1">
        <div className="bg-white shadow-[0_0_15px_#AEA9A9] rounded-lg overflow-x-auto">
          <div className="w-full">
            {/* Header */}
            <div className="flex bg-custom-brownnav text-white font-bold text-lg p-3 rounded-t-lg">
              <div className="w-full">Multiple Choice</div>
            </div>

            {/* Content area */}
            <div className="p-6">
              {/* Question */}
              {sampleData.map((data) => (
                <div key={data.id} className="mb-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-lg font-semibold text-custom-brownnav">
                      Sino ang pambansang bayani?
                    </div>
                    <button
                      className="ml-auto p-2 hover:bg-gray-200 rounded-full"
                      onClick={edittoggleModal}
                    >
                      <img
                        src={editButton}
                        alt="Edit"
                        className="w-5 h-5"
                      />
                    </button>
                  </div>
                  {/* Choices in grid format */}
                  <div className="grid grid-cols-3 gap-4 border-b border-gray-300 pb-4">
                    <div className="p-4 text-center font-medium">Jose Rizal</div>
                    <div className="p-4 text-center font-medium">Jose Rizal</div>
                    <div className="p-4 text-center font-medium">Jose Rizal</div>
                    <div className="p-4 text-center font-medium">Jose Rizal</div>
                    <div className="p-4 text-center font-medium">Jose Rizal</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <EditModal
        editmodal={editmodal}
        editsetModal={editsetModal}
        edittoggleModal={edittoggleModal}
      />
    </div>
  );
}

export default QuestionBankTopicViewPage;
