import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App.tsx'
import DetailPage from './components/detail/DetailPage.tsx'
import GuidePage from './pages/GuidePage.tsx'
import LoginPage from './pages/LoginPage.tsx'
import RegisterPage from './pages/RegisterPage.tsx'
import ReadingPage from './components/reading/ReadingPage.tsx'
import BrowsePage from './pages/BrowsePage.tsx'
import LibraryPage from './pages/LibraryPage.tsx'
import ProfilePage from './pages/ProfilePage.tsx'
import TopupPage from './pages/TopupPage.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/novel/:id" element={<DetailPage />} />
        <Route path="/novel/:id/:chapterId" element={<ReadingPage />} />
        <Route path="/browse" element={<BrowsePage />} />
        <Route path="/category/:genre" element={<BrowsePage />} />
        <Route path="/library" element={<LibraryPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/topup" element={<TopupPage />} />
        <Route path="/guide" element={<GuidePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
