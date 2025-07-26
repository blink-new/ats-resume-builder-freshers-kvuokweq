import React, { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from './components/ui/card'
import { Input } from './components/ui/input'
import { Label } from './components/ui/label'
import { Textarea } from './components/ui/textarea'
import { Button } from './components/ui/button'
import { Separator } from './components/ui/separator'
import { Badge } from './components/ui/badge'
import { Download, Plus, X } from 'lucide-react'

interface PersonalInfo {
  fullName: string
  email: string
  phone: string
  location: string
  linkedin: string
  github: string
  summary: string
}

interface Education {
  id: string
  degree: string
  institution: string
  location: string
  graduationDate: string
  gpa: string
  relevantCourses: string[]
}

interface Skill {
  id: string
  name: string
  category: 'technical' | 'soft'
}

interface Project {
  id: string
  title: string
  description: string
  technologies: string[]
  link: string
}

interface Experience {
  id: string
  title: string
  company: string
  location: string
  startDate: string
  endDate: string
  description: string[]
}

function App() {
  const [personalInfo, setPersonalInfo] = useState<PersonalInfo>({
    fullName: 'Sarah Johnson',
    email: 'sarah.johnson@email.com',
    phone: '+1 (555) 123-4567',
    location: 'San Francisco, CA',
    linkedin: 'linkedin.com/in/sarahjohnson',
    github: 'github.com/sarahjohnson',
    summary: 'Recent Computer Science graduate with strong foundation in full-stack development and passion for creating user-friendly applications. Experienced in modern web technologies and eager to contribute to innovative software solutions.'
  })

  const [education, setEducation] = useState<Education[]>([
    {
      id: '1',
      degree: 'Bachelor of Science in Computer Science',
      institution: 'University of California, Berkeley',
      location: 'Berkeley, CA',
      graduationDate: 'May 2024',
      gpa: '3.7',
      relevantCourses: ['Data Structures', 'Algorithms', 'Database Systems', 'Web Development', 'Software Engineering']
    }
  ])

  const [skills, setSkills] = useState<Skill[]>([
    { id: '1', name: 'JavaScript', category: 'technical' },
    { id: '2', name: 'React', category: 'technical' },
    { id: '3', name: 'Node.js', category: 'technical' },
    { id: '4', name: 'Python', category: 'technical' },
    { id: '5', name: 'SQL', category: 'technical' },
    { id: '6', name: 'Git', category: 'technical' },
    { id: '7', name: 'Problem Solving', category: 'soft' },
    { id: '8', name: 'Team Collaboration', category: 'soft' },
    { id: '9', name: 'Communication', category: 'soft' }
  ])

  const [projects, setProjects] = useState<Project[]>([
    {
      id: '1',
      title: 'E-Commerce Web Application',
      description: 'Built a full-stack e-commerce platform with user authentication, product catalog, shopping cart, and payment integration. Implemented responsive design and optimized for performance.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'Stripe API'],
      link: 'github.com/sarahjohnson/ecommerce-app'
    },
    {
      id: '2',
      title: 'Task Management Dashboard',
      description: 'Developed a collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
      technologies: ['React', 'TypeScript', 'Firebase', 'Material-UI'],
      link: 'github.com/sarahjohnson/task-dashboard'
    }
  ])

  const [experience, setExperience] = useState<Experience[]>([
    {
      id: '1',
      title: 'Software Development Intern',
      company: 'TechStart Inc.',
      location: 'San Francisco, CA',
      startDate: 'Jun 2023',
      endDate: 'Aug 2023',
      description: [
        'Developed and maintained React components for the company\'s main web application',
        'Collaborated with senior developers to implement new features and fix bugs',
        'Participated in code reviews and agile development processes'
      ]
    }
  ])

  const addSkill = (category: 'technical' | 'soft') => {
    const newSkill: Skill = {
      id: Date.now().toString(),
      name: '',
      category
    }
    setSkills([...skills, newSkill])
  }

  const updateSkill = (id: string, name: string) => {
    setSkills(skills.map(skill => skill.id === id ? { ...skill, name } : skill))
  }

  const removeSkill = (id: string) => {
    setSkills(skills.filter(skill => skill.id !== id))
  }

  const addProject = () => {
    const newProject: Project = {
      id: Date.now().toString(),
      title: '',
      description: '',
      technologies: [],
      link: ''
    }
    setProjects([...projects, newProject])
  }

  const updateProject = (id: string, field: keyof Project, value: string | string[]) => {
    setProjects(projects.map(project => 
      project.id === id ? { ...project, [field]: value } : project
    ))
  }

  const removeProject = (id: string) => {
    setProjects(projects.filter(project => project.id !== id))
  }

  const handleDownload = () => {
    window.print()
  }

  const technicalSkills = skills.filter(skill => skill.category === 'technical')
  const softSkills = skills.filter(skill => skill.category === 'soft')

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">ATS-Friendly Resume Builder</h1>
          <p className="text-gray-600">Create a professional resume optimized for freshers</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Form Section */}
          <div className="space-y-6">
            {/* Personal Information */}
            <Card>
              <CardHeader>
                <CardTitle>Personal Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="fullName">Full Name</Label>
                    <Input
                      id="fullName"
                      value={personalInfo.fullName}
                      onChange={(e) => setPersonalInfo({...personalInfo, fullName: e.target.value})}
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      value={personalInfo.email}
                      onChange={(e) => setPersonalInfo({...personalInfo, email: e.target.value})}
                    />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="phone">Phone</Label>
                    <Input
                      id="phone"
                      value={personalInfo.phone}
                      onChange={(e) => setPersonalInfo({...personalInfo, phone: e.target.value})}
                    />
                  </div>
                  <div>
                    <Label htmlFor="location">Location</Label>
                    <Input
                      id="location"
                      value={personalInfo.location}
                      onChange={(e) => setPersonalInfo({...personalInfo, location: e.target.value})}
                    />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="linkedin">LinkedIn</Label>
                    <Input
                      id="linkedin"
                      value={personalInfo.linkedin}
                      onChange={(e) => setPersonalInfo({...personalInfo, linkedin: e.target.value})}
                    />
                  </div>
                  <div>
                    <Label htmlFor="github">GitHub</Label>
                    <Input
                      id="github"
                      value={personalInfo.github}
                      onChange={(e) => setPersonalInfo({...personalInfo, github: e.target.value})}
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="summary">Professional Summary</Label>
                  <Textarea
                    id="summary"
                    rows={4}
                    value={personalInfo.summary}
                    onChange={(e) => setPersonalInfo({...personalInfo, summary: e.target.value})}
                  />
                </div>
              </CardContent>
            </Card>

            {/* Education */}
            <Card>
              <CardHeader>
                <CardTitle>Education</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {education.map((edu) => (
                  <div key={edu.id} className="space-y-3 p-4 border rounded-lg">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label>Degree</Label>
                        <Input
                          value={edu.degree}
                          onChange={(e) => setEducation(education.map(e => 
                            e.id === edu.id ? {...e, degree: e.target.value} : e
                          ))}
                        />
                      </div>
                      <div>
                        <Label>Institution</Label>
                        <Input
                          value={edu.institution}
                          onChange={(e) => setEducation(education.map(e => 
                            e.id === edu.id ? {...e, institution: e.target.value} : e
                          ))}
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-3 gap-4">
                      <div>
                        <Label>Location</Label>
                        <Input
                          value={edu.location}
                          onChange={(e) => setEducation(education.map(e => 
                            e.id === edu.id ? {...e, location: e.target.value} : e
                          ))}
                        />
                      </div>
                      <div>
                        <Label>Graduation Date</Label>
                        <Input
                          value={edu.graduationDate}
                          onChange={(e) => setEducation(education.map(e => 
                            e.id === edu.id ? {...e, graduationDate: e.target.value} : e
                          ))}
                        />
                      </div>
                      <div>
                        <Label>GPA</Label>
                        <Input
                          value={edu.gpa}
                          onChange={(e) => setEducation(education.map(e => 
                            e.id === edu.id ? {...e, gpa: e.target.value} : e
                          ))}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Skills */}
            <Card>
              <CardHeader>
                <CardTitle>Skills</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <Label>Technical Skills</Label>
                    <Button size="sm" variant="outline" onClick={() => addSkill('technical')}>
                      <Plus className="w-4 h-4 mr-1" />
                      Add
                    </Button>
                  </div>
                  <div className="space-y-2">
                    {technicalSkills.map((skill) => (
                      <div key={skill.id} className="flex items-center gap-2">
                        <Input
                          value={skill.name}
                          onChange={(e) => updateSkill(skill.id, e.target.value)}
                          placeholder="Enter skill"
                        />
                        <Button size="sm" variant="ghost" onClick={() => removeSkill(skill.id)}>
                          <X className="w-4 h-4" />
                        </Button>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <Label>Soft Skills</Label>
                    <Button size="sm" variant="outline" onClick={() => addSkill('soft')}>
                      <Plus className="w-4 h-4 mr-1" />
                      Add
                    </Button>
                  </div>
                  <div className="space-y-2">
                    {softSkills.map((skill) => (
                      <div key={skill.id} className="flex items-center gap-2">
                        <Input
                          value={skill.name}
                          onChange={(e) => updateSkill(skill.id, e.target.value)}
                          placeholder="Enter skill"
                        />
                        <Button size="sm" variant="ghost" onClick={() => removeSkill(skill.id)}>
                          <X className="w-4 h-4" />
                        </Button>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Projects */}
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>Projects</CardTitle>
                  <Button size="sm" onClick={addProject}>
                    <Plus className="w-4 h-4 mr-1" />
                    Add Project
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                {projects.map((project) => (
                  <div key={project.id} className="space-y-3 p-4 border rounded-lg">
                    <div className="flex items-center justify-between">
                      <Input
                        value={project.title}
                        onChange={(e) => updateProject(project.id, 'title', e.target.value)}
                        placeholder="Project Title"
                        className="font-medium"
                      />
                      <Button size="sm" variant="ghost" onClick={() => removeProject(project.id)}>
                        <X className="w-4 h-4" />
                      </Button>
                    </div>
                    <Textarea
                      value={project.description}
                      onChange={(e) => updateProject(project.id, 'description', e.target.value)}
                      placeholder="Project description..."
                      rows={3}
                    />
                    <Input
                      value={project.technologies.join(', ')}
                      onChange={(e) => updateProject(project.id, 'technologies', e.target.value.split(', '))}
                      placeholder="Technologies used (comma separated)"
                    />
                    <Input
                      value={project.link}
                      onChange={(e) => updateProject(project.id, 'link', e.target.value)}
                      placeholder="Project link (GitHub, demo, etc.)"
                    />
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Resume Preview */}
          <div className="lg:sticky lg:top-8">
            <Card className="shadow-lg">
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle>Resume Preview</CardTitle>
                <Button onClick={handleDownload} className="flex items-center gap-2">
                  <Download className="w-4 h-4" />
                  Download PDF
                </Button>
              </CardHeader>
              <CardContent>
                <div id="resume-preview" className="bg-white p-8 text-sm leading-relaxed font-serif">
                  {/* Header */}
                  <div className="text-center mb-6">
                    <h1 className="text-2xl font-bold text-gray-900 mb-2">{personalInfo.fullName}</h1>
                    <div className="text-gray-600 space-y-1">
                      <div>{personalInfo.email} | {personalInfo.phone}</div>
                      <div>{personalInfo.location}</div>
                      <div>{personalInfo.linkedin} | {personalInfo.github}</div>
                    </div>
                  </div>

                  {/* Professional Summary */}
                  {personalInfo.summary && (
                    <div className="mb-6">
                      <h2 className="text-lg font-bold text-gray-900 mb-2 border-b border-gray-300 pb-1">
                        PROFESSIONAL SUMMARY
                      </h2>
                      <p className="text-gray-700">{personalInfo.summary}</p>
                    </div>
                  )}

                  {/* Education */}
                  <div className="mb-6">
                    <h2 className="text-lg font-bold text-gray-900 mb-2 border-b border-gray-300 pb-1">
                      EDUCATION
                    </h2>
                    {education.map((edu) => (
                      <div key={edu.id} className="mb-3">
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="font-semibold text-gray-900">{edu.degree}</h3>
                            <p className="text-gray-700">{edu.institution}, {edu.location}</p>
                          </div>
                          <div className="text-right text-gray-600">
                            <p>{edu.graduationDate}</p>
                            {edu.gpa && <p>GPA: {edu.gpa}</p>}
                          </div>
                        </div>
                        {edu.relevantCourses.length > 0 && (
                          <p className="text-gray-600 mt-1">
                            <strong>Relevant Coursework:</strong> {edu.relevantCourses.join(', ')}
                          </p>
                        )}
                      </div>
                    ))}
                  </div>

                  {/* Technical Skills */}
                  {technicalSkills.length > 0 && (
                    <div className="mb-6">
                      <h2 className="text-lg font-bold text-gray-900 mb-2 border-b border-gray-300 pb-1">
                        TECHNICAL SKILLS
                      </h2>
                      <p className="text-gray-700">
                        {technicalSkills.map(skill => skill.name).filter(name => name).join(' • ')}
                      </p>
                    </div>
                  )}

                  {/* Projects */}
                  {projects.length > 0 && (
                    <div className="mb-6">
                      <h2 className="text-lg font-bold text-gray-900 mb-2 border-b border-gray-300 pb-1">
                        PROJECTS
                      </h2>
                      {projects.map((project) => (
                        <div key={project.id} className="mb-4">
                          <div className="flex justify-between items-start">
                            <h3 className="font-semibold text-gray-900">{project.title}</h3>
                            {project.link && (
                              <span className="text-gray-600 text-xs">{project.link}</span>
                            )}
                          </div>
                          <p className="text-gray-700 mt-1">{project.description}</p>
                          {project.technologies.length > 0 && (
                            <p className="text-gray-600 mt-1">
                              <strong>Technologies:</strong> {project.technologies.filter(tech => tech).join(', ')}
                            </p>
                          )}
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Experience */}
                  {experience.length > 0 && (
                    <div className="mb-6">
                      <h2 className="text-lg font-bold text-gray-900 mb-2 border-b border-gray-300 pb-1">
                        EXPERIENCE
                      </h2>
                      {experience.map((exp) => (
                        <div key={exp.id} className="mb-4">
                          <div className="flex justify-between items-start">
                            <div>
                              <h3 className="font-semibold text-gray-900">{exp.title}</h3>
                              <p className="text-gray-700">{exp.company}, {exp.location}</p>
                            </div>
                            <p className="text-gray-600">{exp.startDate} - {exp.endDate}</p>
                          </div>
                          <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1">
                            {exp.description.map((desc, index) => (
                              <li key={index}>{desc}</li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Soft Skills */}
                  {softSkills.length > 0 && (
                    <div className="mb-6">
                      <h2 className="text-lg font-bold text-gray-900 mb-2 border-b border-gray-300 pb-1">
                        ADDITIONAL SKILLS
                      </h2>
                      <p className="text-gray-700">
                        {softSkills.map(skill => skill.name).filter(name => name).join(' • ')}
                      </p>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App