import React from "react";
import { Routes, Route } from "react-router-dom";
import About from "src/pages/About";
import Home from "src/pages/Home";
import How from "src/pages/How";
import NotFound from "src/pages/NotFound";
import Layout from "src/components/layouts/Layout";
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/how" element={<How />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
