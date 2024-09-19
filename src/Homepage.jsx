import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Students from "./pages/Students";
import Library from "./pages/Library"
import Reports from "./pages/Reports";
import CreateModal from "./components/create/CreateModal";
import MultipleChoice from "./pages/MultipleChoicePage";
import FillInTheBlank from "./pages/FillInTheBlankPage";
import OpenEnded from "./pages/OpenEndedPage";
import DropDown from "./pages/DropDownPage";
import PublishPage from "./components/create/PublishPage";
import ViewPage from "./components/library/ViewPage";
import QuestionBankPage from "./components/library/QuestionBankPage";
import QuestionBankViewPage from "./components/library/QuestionBankViewPage";
import QuestionBankTopicViewPage from "./components/library/QuestionBankTopicViewPage";
import EditQuestionandAnswerModal from "./components/library/EditQuestionandAnswerModal";
import CreateQuestionBankPage from "./components/library/CreateQuestionBankPage";

const Homepage = () => {
  const [activeLink, setActiveLink] = useState(0);

  return (
    <div className="flex h-screen overflow-hidden">
        <Nav activeLink={activeLink} setActiveLink={setActiveLink} />
            <div className="flex-1 overflow-y-scroll ">
                <Routes>
                    <Route path="/Library" element={<Library />} />
                    <Route path="/Students" element={<Students />} />
                    <Route path="/Reports" element={<Reports />} />
                    <Route path="/Create-Quiz" element={<CreateModal />} />
                    <Route path="/Multiple-Choice" element={<MultipleChoice />} />
                    <Route path="/Fill-In-The-Blank" element={<FillInTheBlank />} />
                    <Route path="/Open-Ended" element={<OpenEnded />} />
                    <Route path="/Drop-down" element={<DropDown />} />
                    <Route path="/Publish-Page" element={<PublishPage />} />
                    <Route path="/View-Page" element={<ViewPage />} />
                    <Route path="/Library/QuestionBank" element={<QuestionBankPage />} />
                    <Route path="/Library/QuestionBankView" element={<QuestionBankViewPage />} />
                    <Route path="/Library/QuestionBankTopicView" element={<QuestionBankTopicViewPage />} />
                    <Route path="/Library/QuestionBankTopicView/Edit" element={<EditQuestionandAnswerModal />} />
                    <Route path="/Library/QuestionBank/Create" element={<CreateQuestionBankPage />} />
                </Routes>
            </div>
     </div>
  );
};

export default Homepage;
