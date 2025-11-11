import React from 'react'
import { ThemeProvider } from './theme/ThemeProvider'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

// Switch to direct imports to avoid any lazy-loading edge cases causing a blank screen
import { Landing } from './pages/Landing'
import { Catalog } from './pages/Catalog'
import { CourseDetail } from './pages/CourseDetail'
import { LessonPlayer } from './pages/LessonPlayer'
import { LiveClass } from './pages/LiveClass'
import { Chat } from './pages/Chat'
import { Profile } from './pages/Profile'
import { Settings } from './pages/Settings'
import { NotFound } from './pages/NotFound'

export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/course/:id" element={<CourseDetail />} />
          <Route path="/lesson/:id" element={<LessonPlayer />} />
          <Route path="/live" element={<LiveClass />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/404" element={<NotFound />} />
          <Route path="*" element={<Navigate to="/404" replace />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}
