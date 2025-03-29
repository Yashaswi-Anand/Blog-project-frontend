import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard'; // Wrapper with Header
import Home from './components/Home'; // Default home page
import ContentPage from './components/ContentPage';
import ContentDetailsPage from './components/ContentDetailsPage';
import AddNewBlog from './components/AddNewBlog';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Main layout wrapper */}
        <Route path="/" element={<Dashboard />}>
          {/* Default page */}
          <Route index element={<Home />} />
          {/* Other pages */}
          <Route path="gadget" element={<ContentPage />} />
          <Route path="ai_website" element={<ContentPage />} />
          <Route path="apps" element={<ContentPage />} />
          <Route path="tips" element={<ContentPage />} />
          <Route path="profile" element={<ContentPage />} />
          <Route path="add-new-post" element={<AddNewBlog />} />
          <Route path="content-detail/:content_type/:id" element={<ContentDetailsPage />} />
          <Route path="*" element={<div>404 Not Found</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
