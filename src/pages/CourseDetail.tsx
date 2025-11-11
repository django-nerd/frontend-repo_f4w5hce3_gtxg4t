import React from 'react'
import styled from '@emotion/styled'
import { AppShell } from '../components/layout/AppShell'
import { Button } from '../components/primitives/Button'
import { Card } from '../components/primitives/Card'
import { courses, lessons } from '../data/mock'

const Layout = styled.div({ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: 16 })

export const CourseDetail: React.FC = () => {
  const course = courses[0]
  const courseLessons = lessons.filter(l => l.courseId === course.id)
  return (
    <AppShell>
      <Layout>
        <div>
          <h1 style={{ marginTop: 0 }}>{course.title}</h1>
          <p>{course.summary}</p>
          <Button>Start lesson</Button>
        </div>
        <Card title="Syllabus">
          <ul>
            {courseLessons.map(l => <li key={l.id}>{l.title} — {l.duration}</li>)}
          </ul>
        </Card>
      </Layout>
    </AppShell>
  )
}
