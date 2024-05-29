import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import Landing from "./pages/Landing.jsx";
import Register from "./pages/Register.jsx";
import Navbar from "./components/Navbar.jsx";
import LegalAssistance from "./pages/LegalAssistance.jsx";
import SeveranceAgreements from "./pages/SeveranceAgreements.jsx";
import UnemploymentBenefits from "./pages/UnemploymentBenefits.jsx";
import EmploymentRights from "./pages/EmploymentRights.jsx";
import ConnectLegalExperts from "./pages/ConnectLegalExperts.jsx";
import DocumentReview from "./pages/DocumentReview.jsx";
import FinancialManagement from "./pages/FinancialManagement.jsx";
import Budgeting from "./pages/Budgeting.jsx";
import FinancialPlanning from "./pages/FinancialPlanning.jsx";
import Management401k from "./pages/401kManagement.jsx";
import FinancialAdvice from "./pages/FinancialAdvice.jsx";
import ConnectAdvisors from "./pages/ConnectAdvisors.jsx";
import HealthcareNavigation from "./pages/HealthcareNavigation.jsx";
import COBRA from "./pages/COBRA.jsx";
import HealthInsuranceMarketplaces from "./pages/HealthInsuranceMarketplaces.jsx";
import EnrollmentAssistance from "./pages/EnrollmentAssistance.jsx";
import MentalHealthSupport from "./pages/MentalHealthSupport.jsx";
import TherapyAndWellness from "./pages/TherapyAndWellness.jsx";
import OnlineCounseling from "./pages/OnlineCounseling.jsx";
import MentalHealthArticles from "./pages/MentalHealthArticles.jsx";
import MentalHealthVideos from "./pages/MentalHealthVideos.jsx";
import MentalHealthExercises from "./pages/MentalHealthExercises.jsx";
import StressManagement from "./pages/StressManagement.jsx";
import SkillBuilding from "./pages/SkillBuilding.jsx";
import Courses from "./pages/Courses.jsx";
import Workshops from "./pages/Workshops.jsx";
import LearningPaths from "./pages/LearningPaths.jsx";
import Mentorship from "./pages/Mentorship.jsx";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/legal-assistance" element={<LegalAssistance />} />
        <Route exact path="/resources/severance-agreements" element={<SeveranceAgreements />} />
        <Route exact path="/resources/unemployment-benefits" element={<UnemploymentBenefits />} />
        <Route exact path="/resources/employment-rights" element={<EmploymentRights />} />
        <Route exact path="/connect-legal-experts" element={<ConnectLegalExperts />} />
        <Route exact path="/document-review" element={<DocumentReview />} />
        <Route exact path="/financial-management" element={<FinancialManagement />} />
        <Route exact path="/financial-management/budgeting" element={<Budgeting />} />
        <Route exact path="/financial-management/financial-planning" element={<FinancialPlanning />} />
        <Route exact path="/financial-management/401k-management" element={<Management401k />} />
        <Route exact path="/financial-management/advice" element={<FinancialAdvice />} />
        <Route exact path="/financial-management/connect-advisors" element={<ConnectAdvisors />} />
        <Route exact path="/healthcare-navigation" element={<HealthcareNavigation />} />
        <Route exact path="/resources/cobra" element={<COBRA />} />
        <Route exact path="/resources/health-insurance-marketplaces" element={<HealthInsuranceMarketplaces />} />
        <Route exact path="/healthcare/enrollment-assistance" element={<EnrollmentAssistance />} />
        <Route exact path="/healthcare/mental-health-support" element={<MentalHealthSupport />} />
        <Route exact path="/therapy-and-wellness" element={<TherapyAndWellness />} />
        <Route exact path="/therapy-and-wellness/online-counseling" element={<OnlineCounseling />} />
        <Route exact path="/therapy-and-wellness/articles" element={<MentalHealthArticles />} />
        <Route exact path="/therapy-and-wellness/videos" element={<MentalHealthVideos />} />
        <Route exact path="/therapy-and-wellness/exercises" element={<MentalHealthExercises />} />
        <Route exact path="/therapy-and-wellness/stress-management" element={<StressManagement />} />
        <Route exact path="/skill-building" element={<SkillBuilding />} />
        <Route exact path="/skill-building/courses" element={<Courses />} />
        <Route exact path="/skill-building/workshops" element={<Workshops />} />
        <Route exact path="/skill-building/learning-paths" element={<LearningPaths />} />
        <Route exact path="/skill-building/mentorship" element={<Mentorship />} />
      </Routes>
    </Router>
  );
}

export default App;