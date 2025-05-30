import React from 'react';
import { FaGithub } from 'react-icons/fa';

function About() {
    return (
        <div className="p-8 text-white max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold mb-6">About Me</h1>
            <p className="text-lg leading-relaxed">
                Hi! I'm <strong>Nitish</strong>, a passionate web developer with a strong focus on full-stack development and modern web technologies.
                I love building responsive, user-centric applications that not only look good but also solve real-world problems with impact.
            </p>
            <br />
            <p className="text-lg leading-relaxed">
                My current focus is on mastering the entire web development stack—from creating intuitive front-end interfaces with
                <strong> HTML, CSS, Tailwind, and JavaScript</strong>, to building reliable back-end services using
                <strong> Supabase, REST APIs,</strong> and cloud-based tools.
            </p>
            <br />
            <p className="text-lg leading-relaxed">
                I'm especially interested in enhancing user experience through smart features—like integrating <strong>Gemini, Hume AI</strong> for sentiment analysis or
                developing mental health-focused tools such as <em>WellBe</em>. These projects reflect my passion for building meaningful tech that helps people.
            </p>
            <br />
            <p className="text-lg leading-relaxed">
                As a developer, I constantly strive to write cleaner, scalable, and efficient code, while keeping up with evolving tools, frameworks, and design systems.
                Currently, I'm learning Node.js, MySQL, OS and Concurrency and also practicing data structures and algorithms to enhance my problem-solving skills with CP.
            </p>
            <br />
            <div className="flex items-center gap-3 mt-4">
                <FaGithub size={28} className="text-white" />
                <a
                    href="https://github.com/ThereIsSomething/disney_clone.git"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:underline text-lg"
                >
                    View Project on GitHub
                </a>
            </div>
            <br />
            <p className="text-sm leading-relaxed">
                By the way, this about me was generated by AI.....Never mind!!!
            </p>
        </div>
    );
}

export default About;
