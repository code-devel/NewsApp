import "./App.css";
import React, { useState } from "react";
import NavBar from "./components/NavBar";
import News from "./components/News";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

const App = () => {
  const pageSize = 6;
  const apiKey = process.env.REACT_APP_NEWS_API;
  // state = {
  //   progress: 0,
  // };
  const [progress, setProgress] = useState(0);

  const progressUpdate = (progress) => {
    setProgress(progress);
  };

  return (
    <div>
      <Router>
        <NavBar />
        <LoadingBar
          color="#f11946"
          progress={progress}
          onLoaderFinished={() => progressUpdate(0)}
        />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <News
                setProgress={progressUpdate}
                key="general"
                pageSize={pageSize}
                apiKey={apiKey}
                country="in"
                category="general"
              />
            }
          />
          <Route
            exact
            path="/business"
            element={
              <News
                setProgress={progressUpdate}
                key="business"
                pageSize={pageSize}
                apiKey={apiKey}
                country="in"
                category="business"
              />
            }
          />
          <Route
            exact
            path="/entertainment"
            element={
              <News
                setProgress={progressUpdate}
                key="entertainment"
                pageSize={pageSize}
                apiKey={apiKey}
                country="in"
                category="entertainment"
              />
            }
          />
          <Route
            exact
            path="/health"
            element={
              <News
                setProgress={progressUpdate}
                key="health"
                pageSize={pageSize}
                apiKey={apiKey}
                country="in"
                category="health"
              />
            }
          />
          <Route
            exact
            path="/science"
            element={
              <News
                setProgress={progressUpdate}
                key="science"
                pageSize={pageSize}
                apiKey={apiKey}
                country="in"
                category="science"
              />
            }
          />
          <Route
            exact
            path="/sports"
            element={
              <News
                setProgress={progressUpdate}
                key="sports"
                pageSize={pageSize}
                apiKey={apiKey}
                country="in"
                category="sports"
              />
            }
          />
          <Route
            exact
            path="/technology"
            element={
              <News
                setProgress={progressUpdate}
                key="technology"
                pageSize={pageSize}
                apiKey={apiKey}
                country="in"
                category="technology"
              />
            }
          />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
