import React, { Suspense, lazy } from 'react'
import { ThemeProvider } from './theme/ThemeProvider'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

const Landing = lazy(() => import('./pages/Landing').then(m => ({ default: m.Landing })))
const Catalog = lazy(() => import('./pages/Catalog').then(m => ({ default: m.Catalog })))
const CourseDetail = lazy(() => import('./pages/CourseDetail').then(m => ({ default: m.CourseDetail })))
const LessonPlayer = lazy(() => import('./pages/LessonPlayer').then(m => ({ default: m.LessonPlayer })))
const LiveClass = lazy(() => import('./pages/LiveClass').then(m => ({ default: m.LiveClass })))
const Chat = lazy(() => import('./pages/Chat').then(m => ({ default: m.Chat })))
const Profile = lazy(() => import('./pages/Profile').then(m => ({ default: m.Profile })))
const Settings = lazy(() => import('./pages/Settings').then(m => ({ default: m.Settings })))
const NotFound = lazy(() => import('./pages/NotFound').then(m => ({ default: m.NotFound })))

export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Suspense fallback={<div style={{ padding: 20 }}>Loading…</div>}>
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
        </Suspense>
      </BrowserRouter>
    </ThemeProvider>
  )
}
