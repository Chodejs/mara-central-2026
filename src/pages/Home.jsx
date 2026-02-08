// Home.jsx
// Main Dashboard for Learning Modules

import { useFetch } from '../hooks/useFetch';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; 

export default function Home() {
    const modules = [
        {
            id: 1,
            title: 'HTML Lessons',
            desc: 'Learn all about HTML in this section. Dive deep into Semantic Tags, Forms, and everything else.',
            image: 'public/images/html-module.JPG',
            link: '/html'
        },
        {
            id: 2,
            title: 'CSS Styling',
            desc: 'Master the art of design with CSS. Explore Flexbox, Grid, animations, and responsive layouts.',
            image: 'public/images/css-module.JPG',
            link: '/css'
        },
        {
            id: 3,
            title: 'JavaScript Logic',
            desc: 'The brain of the web. DOM manipulation, async programming, and ES6+ features.',
            image: 'public/images/javascript-module.JPG',
            link: '/javascript'
        },
        {
            id: 4,
            title: 'PHP Development',
            desc: 'Server-side scripting. Handle form data, manage sessions, and communicate with servers.',
            image: 'public/images/php-module.JPG',
            link: '/php'
        },
        {
            id: 5,
            title: 'MySQL Databases',
            desc: 'Store and manage data. Relational database design, complex queries, and data integrity.',
            image: 'public/images/mysql-module.JPG',
            link: '/mysql'
        },
        {
            id: 6,
            title: 'React Framework',
            desc: 'Dynamic UIs with components. Hooks, state management, and the virtual DOM.',
            image: 'public/images/react-module.JPG',
            link: '/react'
        },
        {
            id: 7,
            title: 'Python Programming',
            desc: 'Versatility of Python. From automation scripts to backend development with Django.',
            image: 'public/images/python-module.JPG',
            link: '/python'
        },
        {
            id: 8,
            title: 'TypeScript Essentials',
            desc: 'Static typing for JS. Improve code quality and catch bugs before they even happen.',
            image: 'public/images/typescript-module.JPG',
            link: '/typescript'
        },
        {
            id: 9,
            title: 'Featured Projects',
            desc: 'Real-world applications. A collection of landing pages to full-stack platforms.',
            image: 'public/images/projects-module.JPG',
            link: '/projects'
        }
    ];

    return (
        <main className="home-container">
            {/* Grid Container */}
            <div className="module-grid">
                {modules.map((module) => (
                    <article key={module.id} className="module-card">
                        
                        {/* Image Section */}
                        <img 
                            src={module.image} 
                            alt={module.title} 
                            className="module-image" 
                        />
                        
                        {/* Text Content */}
                        <h2 className="module-title">{module.title}</h2>
                        <p className="module-desc">{module.desc}</p>
                        
                        {/* Button/Link */}
                        <Link to={module.link} className="module-btn">
                            Access Module
                        </Link>
                    </article>
                ))}
            </div>
        </main>
    );
}