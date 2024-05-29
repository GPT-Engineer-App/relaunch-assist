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
      </Routes>
    </Router>
  );
}

export default App;