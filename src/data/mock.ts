export type Level = 'Beginner' | 'Intermediate' | 'Advanced'

export interface Course {
  id: string
  title: string
  level: Level
  skill: 'Speaking' | 'Listening' | 'Writing' | 'Reading'
  instructor: string
  rating: number
  lessons: number
  summary: string
  cover: string
}

export const courses: Course[] = [
  {
    id: 'conv-101',
    title: 'Conversational English Fundamentals',
    level: 'Beginner',
    skill: 'Speaking',
    instructor: 'Ava Reed',
    rating: 4.7,
    lessons: 24,
    summary: 'Build confidence with everyday dialogues and key phrases.',
    cover: 'https://images.unsplash.com/photo-1529336953121-a52d69d8b7f9?q=80&w=1200&auto=format&fit=crop'
  },
  {
    id: 'listen-pro',
    title: 'Active Listening for Real Conversations',
    level: 'Intermediate',
    skill: 'Listening',
    instructor: 'Noah Lin',
    rating: 4.8,
    lessons: 18,
    summary: 'Decode accents and intent; respond naturally.',
    cover: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=1200&auto=format&fit=crop'
  },
  {
    id: 'write-style',
    title: 'Writing with Clarity and Style',
    level: 'Advanced',
    skill: 'Writing',
    instructor: 'Maya Chen',
    rating: 4.9,
    lessons: 20,
    summary: 'Structure arguments, refine tone, and edit with precision.',
    cover: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=1200&auto=format&fit=crop'
  }
]

export interface Lesson {
  id: string
  courseId: string
  title: string
  duration: string
  transcriptUrl?: string
}

export const lessons: Lesson[] = [
  { id: 'l1', courseId: 'conv-101', title: 'Greetings & Introductions', duration: '8:35' },
  { id: 'l2', courseId: 'conv-101', title: 'Small Talk that Matters', duration: '11:20' },
  { id: 'l3', courseId: 'listen-pro', title: 'Signal Words', duration: '9:05' }
]

export interface Message { id: string; author: string; text: string; time: string }
export const demoChat: Message[] = [
  { id: 'm1', author: 'Instructor', text: 'Welcome! Say hello and share your goal for today.', time: '10:00' },
  { id: 'm2', author: 'You', text: 'Hi everyone! I want to practice job interview answers.', time: '10:01' }
]
