'use client'

export default function Home() {
  return (
    <main className="min-h-screen bg-primary">
      <header className="fixed top-0 w-full bg-primary/80 backdrop-blur-md z-50 border-b border-secondary">
        <nav className="section-container flex justify-between items-center h-20">
          <h1 className="text-2xl font-bold gradient-text">Uday Maroju</h1>
          <div className="hidden md:flex gap-8">
            <a href="#about" className="text-gray-300 hover:text-white transition">About</a>
            <a href="#projects" className="text-gray-300 hover:text-white transition">Projects</a>
            <a href="#skills" className="text-gray-300 hover:text-white transition">Skills</a>
            <a href="#contact" className="text-gray-300 hover:text-white transition">Contact</a>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-primary via-primary to-secondary">
        <div className="section-container text-center">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 animate-slide-up">
            Frontend <span className="gradient-text">Engineer</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto animate-slide-up" style={{ animationDelay: '0.2s' }}>
            Building beautiful, responsive, and scalable web applications with modern technologies like React, TypeScript, and Tailwind CSS.
          </p>
          <div className="flex gap-4 justify-center animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <button className="btn-primary">Download Resume</button>
            <button className="btn-secondary">Get In Touch</button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section-container">
        <h3 className="text-4xl font-bold mb-8 gradient-text">About Me</h3>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="card">
            <h4 className="text-2xl font-bold mb-4">Who I Am</h4>
            <p className="text-gray-300 leading-relaxed">
              I&apos;m a passionate Frontend Engineer with expertise in building modern web applications. With a strong foundation in React, TypeScript, and web technologies, I create intuitive user interfaces that solve real-world problems. I believe in writing clean, maintainable code and continuously learning new technologies.
            </p>
          </div>
          <div className="card">
            <h4 className="text-2xl font-bold mb-4">My Approach</h4>
            <p className="text-gray-300 leading-relaxed">
              I focus on creating user-centered designs that are both beautiful and functional. I prioritize performance, accessibility, and code quality in every project. My goal is to deliver solutions that not only meet requirements but exceed expectations and provide lasting value.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section-container bg-secondary/50">
        <h3 className="text-4xl font-bold mb-8 gradient-text">Featured Projects</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ProjectCard 
            title="E-commerce Platform"
            description="Full-featured e-commerce platform built with React and Node.js"
            tags={['React', 'TypeScript', 'MongoDB', 'Stripe']}
          />
          <ProjectCard 
            title="Task Management App"
            description="Collaborative task management application with real-time updates"
            tags={['React', 'Firebase', 'Tailwind CSS', 'Redux']}
          />
          <ProjectCard 
            title="Weather Dashboard"
            description="Real-time weather dashboard with beautiful UI and animations"
            tags={['React', 'API Integration', 'Framer Motion', 'Tailwind']}
          />
          <ProjectCard 
            title="Portfolio Website"
            description="Responsive portfolio website showcasing projects and skills"
            tags={['Next.js', 'TypeScript', 'Tailwind CSS']}
          />
          <ProjectCard 
            title="Analytics Dashboard"
            description="Data visualization dashboard with interactive charts"
            tags={['React', 'Chart.js', 'TypeScript', 'Material-UI']}
          />
          <ProjectCard 
            title="Chat Application"
            description="Real-time chat application with user authentication"
            tags={['React', 'Socket.io', 'Node.js', 'MongoDB']}
          />
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section-container">
        <h3 className="text-4xl font-bold mb-8 gradient-text">Skills & Technologies</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <SkillCategory 
            title="Frontend"
            skills={['React', 'TypeScript', 'JavaScript', 'Next.js', 'HTML5', 'CSS3']}
          />
          <SkillCategory 
            title="Styling & UI"
            skills={['Tailwind CSS', 'CSS-in-JS', 'Responsive Design', 'Material-UI', 'Bootstrap', 'SCSS']}
          />
          <SkillCategory 
            title="Tools & Libraries"
            skills={['Redux', 'React Query', 'Axios', 'Jest', 'Git', 'Webpack']}
          />
          <SkillCategory 
            title="Backend & Databases"
            skills={['Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'Firebase', 'REST APIs']}
          />
          <SkillCategory 
            title="Deployment & DevOps"
            skills={['Vercel', 'Docker', 'GitHub', 'CI/CD', 'AWS', 'Netlify']}
          />
          <SkillCategory 
            title="Other"
            skills={['Problem Solving', 'Code Review', 'Agile', 'Communication', 'Testing']}
          />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-container bg-secondary/50">
        <h3 className="text-4xl font-bold mb-8 text-center gradient-text">Get In Touch</h3>
        <div className="max-w-2xl mx-auto">
          <form className="space-y-6">
            <input 
              type="text" 
              placeholder="Your Name" 
              className="w-full px-4 py-3 bg-primary rounded-lg border border-secondary focus:border-accent outline-none text-white placeholder-gray-500"
            />
            <input 
              type="email" 
              placeholder="Your Email" 
              className="w-full px-4 py-3 bg-primary rounded-lg border border-secondary focus:border-accent outline-none text-white placeholder-gray-500"
            />
            <textarea 
              placeholder="Your Message" 
              rows={5}
              className="w-full px-4 py-3 bg-primary rounded-lg border border-secondary focus:border-accent outline-none text-white placeholder-gray-500 resize-none"
            />
            <button type="submit" className="w-full btn-primary">Send Message</button>
          </form>
          
          <div className="mt-12 grid md:grid-cols-3 gap-6 text-center">
            <div className="card">
              <h4 className="font-bold mb-2">Email</h4>
              <a href="mailto:uday@example.com" className="text-accent hover:text-blue-400">uday@example.com</a>
            </div>
            <div className="card">
              <h4 className="font-bold mb-2">LinkedIn</h4>
              <a href="#" className="text-accent hover:text-blue-400">linkedin.com/in/uday</a>
            </div>
            <div className="card">
              <h4 className="font-bold mb-2">GitHub</h4>
              <a href="#" className="text-accent hover:text-blue-400">github.com/uday</a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary border-t border-secondary py-8">
        <div className="section-container text-center text-gray-400">
          <p>&copy; 2024 Uday Maroju. All rights reserved.</p>
          <p className="text-sm mt-2">Built with Next.js, React, and Tailwind CSS</p>
        </div>
      </footer>
    </main>
  )
}

function ProjectCard({ title, description, tags }: { title: string; description: string; tags: string[] }) {
  return (
    <div className="card group cursor-pointer">
      <div className="h-40 bg-gradient-to-br from-blue-500 to-blue-700 rounded-lg mb-4 group-hover:shadow-lg group-hover:shadow-blue-500/50 transition-all"></div>
      <h4 className="text-xl font-bold mb-2">{title}</h4>
      <p className="text-gray-400 mb-4 text-sm">{description}</p>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span key={tag} className="text-xs px-3 py-1 bg-blue-900/30 text-blue-300 rounded-full">
            {tag}
          </span>
        ))}
      </div>
    </div>
  )
}

function SkillCategory({ title, skills }: { title: string; skills: string[] }) {
  return (
    <div className="card">
      <h4 className="text-xl font-bold mb-4 text-accent">{title}</h4>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span key={skill} className="px-3 py-2 bg-blue-900/20 text-blue-300 rounded-lg text-sm font-medium">
            {skill}
          </span>
        ))}
      </div>
    </div>
  )
}
