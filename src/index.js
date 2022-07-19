import React from 'react';
import ReactDOM from 'react-dom/client';
import RoutesPage from './Controller/Routes';

/* ---- Imports Css View ---- */
import './index.css';
import './View/HomePage.css';
import './View/InstaScreen.css';
import './View/Contain/About.css';
import './View/Contain/Especiality.css';
import './View/Contain/Service.css';
import './View/Contain/Contate.css';
import './View/Contain/Footer.css';

import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RoutesPage/>
  </React.StrictMode>
);

