import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from 'components/Static/Home';
import Welcome from 'components/Static/Welcome';
import Workshops from 'components/Static/Workshops';
import Dances from 'components/Static/Dances';
import Fragrance from 'components/Static/Fragrance';
import Staff from 'components/Static/Staff';
import Contact from 'components/Static/Contact';
import Schedule from 'components/Static/Schedule';
// import Registration from 'components/Registration';
import MaterialLayout from 'components/Layout/';
import Error from 'components/Error';
import PaymentExplanation from 'components/Static/PaymentExplanation';
import ScrollToAnchor from 'components/ScrollToAnchor';
import { OrderProvider } from 'components/OrderContext';
import config from 'config';
const { EMAIL_CONTACT } = config;

export default function App() {
  return (
    <>
      <Router>
        <ScrollToAnchor />
        <MaterialLayout>
          <OrderProvider>
            <Routes>
              <Route exact path="/" element=<Home /> />
              <Route exact path="/welcome" element=<Welcome /> />
              <Route exact path="/staff" element=<Staff /> />
              <Route exact path="/workshops" element=<Workshops /> />
              <Route exact path="/schedule" element=<Schedule /> />
              <Route exact path="/dances" element=<Dances /> />
              <Route exact path="/fragrance" element=<Fragrance /> />
              <Route exact path="/contact" element=<Contact /> />
              <Route exact path="/waystopay" element=<PaymentExplanation /> />
              {/* <Route path="/registration" element=<Registration /> /> */}
              <Route exact path="/error-contact-support" element=<Error error={`Unexpected payment processing error. Please email ${EMAIL_CONTACT}`} /> />
              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
          </OrderProvider>
        </MaterialLayout>
      </Router>
    </>
  );
}
