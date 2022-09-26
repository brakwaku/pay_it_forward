import { Routes, Route } from 'react-router-dom';
import Hero from './components/Hero/Hero';
import HomeScreen from './screens/Home/Home';
import GetInvolvedScreen from './screens/Get-Involved/GetInvolved';
import OurWorkScreen from './screens/Our-Work/OurWork';
import OurMissionScreen from './screens/Our-Mission/OurMission';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Hero />}>
          <Route index element={<HomeScreen />} />
          <Route path='get-involved' element={<GetInvolvedScreen />} />
          <Route path='our-work' element={<OurWorkScreen />} />
          <Route path='our-mission' element={<OurMissionScreen />} />
        </Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
