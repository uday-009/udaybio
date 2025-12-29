'use client'

import { useState } from 'react'

export default function Home() {
  const [copied, setCopied] = useState(false)

  const copyEmail = () => {
    navigator.clipboard.writeText('uday.maroju@example.com')
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* Navigation */}
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100">
        <nav className="section-container flex justify-between items-center h-16">
          <a href="#" className="text-xl font-bold bg-gradient-to-r from-black to-gray-600 bg-clip-text text-transparent hover:opacity-80">UM</a>
          <div className="hidden md:flex gap-8">
            <a href="#work" className="text-gray-900 hover:text-black transition text-sm font-medium">Work</a>
            <a href="#open-source" className="text-gray-900 hover:text-black transition text-sm font-medium">Open Source</a>
            <a href="#contact" className="text-gray-900 hover:text-black transition text-sm font-medium">Contact</a>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-24 bg-white">
        <div className="section-container">
          <div className="max-w-4xl">
            <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">
              Hi, I&apos;m <span className="bg-gradient-to-r from-black to-gray-600 bg-clip-text text-transparent">Uday Maroju</span>
              <span className="text-5xl md:text-6xl ml-2">👋</span>
            </h1>
            <p className="text-2xl md:text-3xl text-gray-900 mb-6 font-medium">
              A Frontend Engineer
            </p>
            <p className="text-lg text-gray-600 max-w-2xl leading-relaxed mb-8">
              I&apos;m a web developer based in India, specializing in React, TypeScript, and modern full-stack development. Building performant, scalable applications with clean code and exceptional user experiences.
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section-container bg-white">
        <h2 className="text-5xl font-bold mb-12 bg-gradient-to-r from-black to-gray-600 bg-clip-text text-transparent">About</h2>
        <div className="grid md:grid-cols-3 gap-12">
          <div className="md:col-span-2">
            <p className="text-gray-900 mb-6 text-lg leading-relaxed">
              I&apos;m a passionate frontend engineer with deep expertise in building modern web applications. Specializing in React, TypeScript, and Node.js with a proven track record of delivering high-quality products for startups and enterprises.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              I blend aesthetics with problem-solving to create user-centric solutions. Currently focused on performance optimization, scalable architecture, and mentoring junior developers. I love exploring new technologies and contributing to open-source projects.
            </p>
          </div>
          <div className="space-y-4">
            <p className="text-gray-600 text-sm uppercase tracking-wider">Contact</p>
            <a href="mailto:uday.maroju@example.com" className="text-black hover:text-gray-700 transition flex items-center gap-2 font-medium text-lg">
              uday.maroju@example.com
              <span className="text-xs">→</span>
            </a>
            <button 
              onClick={copyEmail}
              className="text-black hover:text-gray-700 transition text-sm font-medium flex items-center gap-2"
            >
              {copied ? '✓ Copied!' : '📋 Copy email'}
            </button>
          </div>
        </div>

        {/* Companies/Clients Section */}
        <div className="mt-20">
          <p className="text-gray-600 text-sm uppercase tracking-wider mb-10">Worked with amazing teams at</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="h-20 bg-gray-100 rounded-lg border border-gray-300 flex items-center justify-center hover:border-black transition group cursor-pointer">
              <span className="text-gray-600 text-sm font-medium group-hover:text-gray-900 transition">Company 1</span>
            </div>
            <div className="h-20 bg-gray-100 rounded-lg border border-gray-300 flex items-center justify-center hover:border-black transition group cursor-pointer">
              <span className="text-gray-600 text-sm font-medium group-hover:text-gray-900 transition">Company 2</span>
            </div>
            <div className="h-20 bg-gray-100 rounded-lg border border-gray-300 flex items-center justify-center hover:border-black transition group cursor-pointer">
              <span className="text-gray-600 text-sm font-medium group-hover:text-gray-900 transition">Company 3</span>
            </div>
            <div className="h-20 bg-gray-100 rounded-lg border border-gray-300 flex items-center justify-center hover:border-black transition group cursor-pointer">
              <span className="text-gray-600 text-sm font-medium group-hover:text-gray-900 transition">Company 4</span>
            </div>
          </div>
        </div>
      </section>

      {/* Open Source Contributions Section */}
      <section id="open-source" className="section-container py-20 bg-white">
        <h2 className="text-5xl font-bold mb-12 bg-gradient-to-r from-black to-gray-600 bg-clip-text text-transparent">Open Source Contributions</h2>
        <div className="bg-gray-50 rounded-lg border border-gray-200 p-8 hover:border-black transition">
          <p className="text-gray-600 mb-4">
            I actively contribute to open-source projects and believe in giving back to the developer community. Through contributions to major projects and maintaining my own packages, I&apos;ve helped thousands of developers build better applications.
          </p>
          <a href="https://github.com/uday-009" target="_blank" rel="noopener noreferrer" className="text-black hover:text-gray-700 transition font-medium inline-flex items-center gap-2">
            View on GitHub →
          </a>
        </div>
      </section>

      {/* Open Source Projects Section */}
      <section className="section-container py-20 bg-white">
        <h2 className="text-5xl font-bold mb-12 bg-gradient-to-r from-black to-gray-600 bg-clip-text text-transparent">Open Source Projects</h2>
        <div className="space-y-12">
          {/* Project 1 */}
          <div className="group grid md:grid-cols-3 gap-8 items-start hover:bg-gray-50 p-8 rounded-lg transition border border-transparent hover:border-gray-300">
            <div className="md:col-span-1 h-40 bg-gray-200 rounded-lg border border-gray-300 group-hover:border-black transition"></div>
            <div className="md:col-span-2">
              <h3 className="text-2xl font-bold mb-2 text-gray-900">React Task Manager</h3>
              <p className="text-gray-600 mb-4">
                A lightweight and performant task management library built with React. Features real-time updates, offline support, and intuitive API for managing complex task flows in applications.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="inline-block px-3 py-1 bg-gray-100 text-gray-900 rounded-full text-sm font-medium hover:bg-black hover:text-white transition">React</span>
                <span className="inline-block px-3 py-1 bg-gray-100 text-gray-900 rounded-full text-sm font-medium hover:bg-black hover:text-white transition">TypeScript</span>
                <span className="inline-block px-3 py-1 bg-gray-100 text-gray-900 rounded-full text-sm font-medium hover:bg-black hover:text-white transition">NPM</span>
              </div>
              <div className="flex gap-4">
                <a href="#" className="inline-flex items-center gap-1 text-black font-semibold hover:gap-2 transition">GitHub</a>
                <a href="#" className="inline-flex items-center gap-1 text-black font-semibold hover:gap-2 transition">NPM</a>
              </div>
            </div>
          </div>

          {/* Project 2 */}
          <div className="group grid md:grid-cols-3 gap-8 items-start hover:bg-gray-50 p-8 rounded-lg transition border border-transparent hover:border-gray-300">
            <div className="md:col-span-1 h-40 bg-gray-200 rounded-lg border border-gray-300 group-hover:border-black transition order-2 md:order-1"></div>
            <div className="md:col-span-2 order-1 md:order-2">
              <h3 className="text-2xl font-bold mb-2 text-gray-900">Form Validation Hooks</h3>
              <p className="text-gray-600 mb-4">
                A comprehensive set of form validation utilities and hooks for React. Simplifies form handling with built-in validators, error management, and accessibility features out of the box.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="inline-block px-3 py-1 bg-gray-100 text-gray-900 rounded-full text-sm font-medium hover:bg-black hover:text-white transition">React Hooks</span>
                <span className="inline-block px-3 py-1 bg-gray-100 text-gray-900 rounded-full text-sm font-medium hover:bg-black hover:text-white transition">TypeScript</span>
                <span className="inline-block px-3 py-1 bg-gray-100 text-gray-900 rounded-full text-sm font-medium hover:bg-black hover:text-white transition">Testing</span>
              </div>
              <div className="flex gap-4">
                <a href="#" className="inline-flex items-center gap-1 text-black font-semibold hover:gap-2 transition">GitHub</a>
                <a href="#" className="inline-flex items-center gap-1 text-black font-semibold hover:gap-2 transition">Docs</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects & Works Section */}
      <section id="work" className="section-container py-20 bg-white">
        <h2 className="text-5xl font-bold mb-12 bg-gradient-to-r from-black to-gray-600 bg-clip-text text-transparent">Projects & Works</h2>
        <div className="space-y-12">
          {/* Work 1 */}
          <div className="group grid md:grid-cols-3 gap-8 items-start hover:bg-gray-50 p-8 rounded-lg transition border border-transparent hover:border-gray-300">
            <div className="md:col-span-1 h-40 bg-gray-200 rounded-lg border border-gray-300 group-hover:border-black transition"></div>
            <div className="md:col-span-2">
              <h3 className="text-2xl font-bold mb-2 text-gray-900">E-Learning Platform</h3>
              <p className="text-gray-600 mb-4">
                Comprehensive e-learning platform with video streaming, interactive quizzes, progress tracking, and instructor dashboard. Served 10,000+ students with real-time updates and engagement features.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="inline-block px-3 py-1 bg-gray-100 text-gray-900 rounded-full text-sm font-medium hover:bg-black hover:text-white transition">Next.js</span>
                <span className="inline-block px-3 py-1 bg-gray-100 text-gray-900 rounded-full text-sm font-medium hover:bg-black hover:text-white transition">React</span>
                <span className="inline-block px-3 py-1 bg-gray-100 text-gray-900 rounded-full text-sm font-medium hover:bg-black hover:text-white transition">Node.js</span>
                <span className="inline-block px-3 py-1 bg-gray-100 text-gray-900 rounded-full text-sm font-medium hover:bg-black hover:text-white transition">PostgreSQL</span>
              </div>
              <div className="flex gap-4">
                <a href="#" className="inline-flex items-center gap-1 text-black font-semibold hover:gap-2 transition">Visit</a>
                <a href="#" className="inline-flex items-center gap-1 text-black font-semibold hover:gap-2 transition">GitHub</a>
              </div>
            </div>
          </div>

          {/* Work 2 */}
          <div className="group grid md:grid-cols-3 gap-8 items-start hover:bg-gray-50 p-8 rounded-lg transition border border-transparent hover:border-gray-300">
            <div className="md:col-span-1 h-40 bg-gray-200 rounded-lg border border-gray-300 group-hover:border-black transition order-2 md:order-1"></div>
            <div className="md:col-span-2 order-1 md:order-2">
              <h3 className="text-2xl font-bold mb-2 text-gray-900">SaaS Analytics Dashboard</h3>
              <p className="text-gray-600 mb-4">
                Enterprise-grade SaaS dashboard for customer analytics and reporting. Built with React, Redux, and real-time data visualization. Powers analytics for 500+ companies with complex queries.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="inline-block px-3 py-1 bg-gray-100 text-gray-900 rounded-full text-sm font-medium hover:bg-black hover:text-white transition">React</span>
                <span className="inline-block px-3 py-1 bg-gray-100 text-gray-900 rounded-full text-sm font-medium hover:bg-black hover:text-white transition">Redux</span>
                <span className="inline-block px-3 py-1 bg-gray-100 text-gray-900 rounded-full text-sm font-medium hover:bg-black hover:text-white transition">D3.js</span>
                <span className="inline-block px-3 py-1 bg-gray-100 text-gray-900 rounded-full text-sm font-medium hover:bg-black hover:text-white transition">AWS</span>
              </div>
              <div className="flex gap-4">
                <a href="#" className="inline-flex items-center gap-1 text-black font-semibold hover:gap-2 transition">Visit</a>
                <a href="#" className="inline-flex items-center gap-1 text-black font-semibold hover:gap-2 transition">Case Study</a>
              </div>
            </div>
          </div>

          {/* Work 3 */}
          <div className="group grid md:grid-cols-3 gap-8 items-start hover:bg-gray-50 p-8 rounded-lg transition border border-transparent hover:border-gray-300">
            <div className="md:col-span-1 h-40 bg-gray-200 rounded-lg border border-gray-300 group-hover:border-black transition"></div>
            <div className="md:col-span-2">
              <h3 className="text-2xl font-bold mb-2 text-gray-900">Mobile Commerce App</h3>
              <p className="text-gray-600 mb-4">
                Cross-platform mobile commerce application with product browsing, secure checkout, order tracking, and push notifications. Reached 100K+ downloads with excellent user retention.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="inline-block px-3 py-1 bg-gray-100 text-gray-900 rounded-full text-sm font-medium hover:bg-black hover:text-white transition">React Native</span>
                <span className="inline-block px-3 py-1 bg-gray-100 text-gray-900 rounded-full text-sm font-medium hover:bg-black hover:text-white transition">TypeScript</span>
                <span className="inline-block px-3 py-1 bg-gray-100 text-gray-900 rounded-full text-sm font-medium hover:bg-black hover:text-white transition">Firebase</span>
                <span className="inline-block px-3 py-1 bg-gray-100 text-gray-900 rounded-full text-sm font-medium hover:bg-black hover:text-white transition">Stripe</span>
              </div>
              <div className="flex gap-4">
                <a href="#" className="inline-flex items-center gap-1 text-black font-semibold hover:gap-2 transition">App Store</a>
                <a href="#" className="inline-flex items-center gap-1 text-black font-semibold hover:gap-2 transition">Play Store</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-container py-20 bg-white">
        <h2 className="text-5xl font-bold mb-12 bg-gradient-to-r from-black to-gray-600 bg-clip-text text-transparent">Let&apos;s Connect</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <a href="mailto:uday.maroju@example.com" className="group bg-gray-50 rounded-lg p-8 text-center hover:bg-white transition border border-gray-200 hover:border-black">
            <div className="text-5xl mb-4">✉️</div>
            <h3 className="text-lg font-bold mb-2 text-gray-900">Email</h3>
            <p className="text-black text-sm group-hover:text-gray-700">uday.maroju@example.com</p>
          </a>
          <a href="https://linkedin.com/in/uday-maroju" target="_blank" rel="noopener noreferrer" className="group bg-gray-50 rounded-lg p-8 text-center hover:bg-white transition border border-gray-200 hover:border-black">
            <div className="text-5xl mb-4">💼</div>
            <h3 className="text-lg font-bold mb-2 text-gray-900">LinkedIn</h3>
            <p className="text-black text-sm group-hover:text-gray-700">Connect with me</p>
          </a>
          <a href="https://github.com/uday-009" target="_blank" rel="noopener noreferrer" className="group bg-gray-50 rounded-lg p-8 text-center hover:bg-white transition border border-gray-200 hover:border-black">
            <div className="text-5xl mb-4">💻</div>
            <h3 className="text-lg font-bold mb-2 text-gray-900">GitHub</h3>
            <p className="text-black text-sm group-hover:text-gray-700">View my projects</p>
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-100 border-t border-gray-200 py-8">
        <div className="section-container text-center text-gray-600">
          <p>&copy; 2024 Uday Maroju. All rights reserved.</p>
          <p className="text-sm mt-2">Built with Next.js, React, and Tailwind CSS</p>
        </div>
      </footer>
    </main>
  )
}
