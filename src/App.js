import { BrowserRouter as Router } from "react-router-dom";
import AppHeader from "./component/Header";

import { motion } from "framer-motion";

import "./App.css";
import "./assets/styles/style.css";
import { useState } from "react";
function App() {
  const [preloadState, setPreloadState] = useState(true);

  setInterval(() => {
    setPreloadState(false);
  }, 2000);

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ ease: "easeInOut", duration: 0.5, delay: 0.1 }}>
      <div className="metaverse_fn_main">
        {preloadState && (
          <div className="metaverse_fn_preloader">
            <div className="multi-spinner-container">
              <div className="multi-spinner">
                <div className="multi-spinner">
                  <div className="multi-spinner">
                    <div className="multi-spinner">
                      <div className="multi-spinner">
                        <div className="multi-spinner"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        <Router>
          <AppHeader />
        </Router>
      </div>
    </motion.section>
  );
}

export default App;
