'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

interface ResumeSection {
	id: string;
	title: string;
	content: React.ReactNode;
}

const resumeData = {
	experience: [
		{
			title: 'Full Stack Developer',
			company: 'Freddie Mac',
			period: 'June 2022 – October 2025',
			location: '8200 Jones Branch Drive',
			categories: [
				{
					label: 'Development',
					color: 'blue',
					items: [
						'Contributed to the migration of monolithic systems to Spring Boot microservices architecture, enhancing modularity and scalability',
						'Designed and implemented GraphQL APIs for flexible and efficient data retrieval',
					],
				},
				{
					label: 'Optimization',
					color: 'purple',
					items: [
						'Used Kibana dashboards to identify microservice bottlenecks and simulated heavy loads using JMeter scripts',
						'Resolved bottlenecks by optimizing SQL queries and implementing thread-safe parallel processing, reducing API response times by 40%',
					],
				},
				{
					label: 'DevOps',
					color: 'green',
					items: [
						'Utilized Jenkins CI/CD pipelines to automate testing and deploy validated code to production',
						'Managed microservices infrastructure in multitenant environments with automated builds and cloud resource redistribution',
					],
				},
			],
			technologies: ['Java', 'Spring Boot', 'GraphQL', 'Angular', 'Jenkins', 'Kubernetes', 'Kibana', 'JMeter', 'AWS'],
		},
		{
			title: 'Software Developer Intern',
			company: 'Babylon Microfarms',
			period: 'June 2021 – August 2021',
			location: '3409 Carlton St, Richmond, VA',
			categories: [
				{
					label: 'Development',
					color: 'green',
					items: [
						'Designed and implemented an automated customer notification system tailored to individual preferences, increasing user engagement',
						'Practiced Test-Driven Development (TDD) principles throughout the development lifecycle',
					],
				},
			],
			technologies: ['Python', 'TDD', 'Git'],
		},
	],
	projects: [
		{
			title: 'Cash Contracts Calendar',
			company: 'Freddie Mac',
			period: 'August 2024 – Present',
			description: 'Calendar dashboard displaying current monthly fund transfers and projected forecasts of future costs.',
			technologies: ['Angular', 'TypeScript'],
		},
		{
			title: 'Face Detector',
			period: 'March 2022 – April 2022',
			description: 'Neural network-based facial recognition model providing an extra layer of biometric authentication.',
			technologies: ['Python', 'TensorFlow', 'Machine Learning', 'Computer Vision'],
		},
	],
	education: [
		{
			degree: 'Bachelor of Science in Computer Science',
			school: 'Elon University',
			period: 'August 2018 – May 2022',
			location: 'Elon, NC',
		},
	],
	skills: {
		'Languages': ['Python', 'Java', 'SQL', 'JavaScript', 'TypeScript', 'C', 'HTML/CSS'],
		'Web Frameworks': ['Spring Boot', 'Django', 'Flask', 'Angular', 'React', 'JUnit'],
		'ML / AI': ['TensorFlow', 'Computer Vision', 'Neural Networks', 'AWS SageMaker', 'RAG'],
		'Cloud & DevOps': ['AWS', 'Docker', 'Kubernetes', 'Jenkins', 'Git', 'CI/CD Pipelines', 'Infrastructure as Code'],
		'Databases & Tools': ['MySQL', 'NoSQL DBs', 'Postman', 'JMeter', 'Kibana', 'Kiali', 'Linux', 'Gradle'],
		'Methodologies': ['Agile', 'Microservices Architecture', 'Test-Driven Development'],
		'Collaboration': ['Jira', 'Confluence'],
	},
	certifications: [
		{
			name: 'AWS Cloud Practitioner',
			issuer: 'Amazon Web Services',
			date: '2023',
			description: 'Foundational cloud computing and AWS services knowledge',
		},
		{
			name: 'AWS AI Practitioner',
			issuer: 'Amazon Web Services',
			date: '2023',
			description: 'AI/ML workflows and AWS artificial intelligence services',
		},
	],
};

const colorMap: Record<string, string> = {
	blue: 'text-blue-600 bg-blue-50 border-blue-200',
	purple: 'text-purple-600 bg-purple-50 border-purple-200',
	green: 'text-green-600 bg-green-50 border-green-200',
};

export default function InteractiveResume() {
	const [activeSection, setActiveSection] = useState('experience');

	const sections: ResumeSection[] = [
		{
			id: 'experience',
			title: 'Experience',
			content: (
				<div className="space-y-6">
					{resumeData.experience.map((job, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: index * 0.1 }}
							className="bg-white rounded-xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300"
						>
							<div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-1">
								<div>
									<h3 className="text-xl font-bold text-gray-900">{job.title}</h3>
									<p className="text-lg text-blue-600 font-semibold">{job.company}</p>
								</div>
								<div className="text-right mt-1 sm:mt-0">
									<p className="text-sm text-gray-500">{job.period}</p>
									<p className="text-xs text-gray-400">{job.location}</p>
								</div>
							</div>

							<div className="mt-4 space-y-4">
								{job.categories.map((cat) => (
									<div key={cat.label}>
										<span className={`inline-block text-xs font-bold px-2 py-0.5 rounded border mb-2 ${colorMap[cat.color]}`}>
											{cat.label}
										</span>
										<ul className="list-disc list-inside space-y-1">
											{cat.items.map((item, i) => (
												<li key={i} className="text-sm text-gray-600">{item}</li>
											))}
										</ul>
									</div>
								))}
							</div>

							<div className="flex flex-wrap gap-2 mt-4">
								{job.technologies.map((tech, i) => (
									<span key={i} className="px-3 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full">
										{tech}
									</span>
								))}
							</div>
						</motion.div>
					))}
				</div>
			),
		},
		{
			id: 'projects',
			title: 'Projects',
			content: (
				<div className="space-y-6">
					{resumeData.projects.map((project, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: index * 0.1 }}
							className="bg-white rounded-xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300"
						>
							<div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-3">
								<div>
									<h3 className="text-xl font-bold text-gray-900">{project.title}</h3>
									{project.company && (
										<p className="text-sm text-blue-600 font-medium">{project.company}</p>
									)}
								</div>
								<span className="text-sm text-gray-500 mt-1 sm:mt-0">{project.period}</span>
							</div>
							<p className="text-gray-600 text-sm mb-4">{project.description}</p>
							<div className="flex flex-wrap gap-2">
								{project.technologies.map((tech, i) => (
									<span key={i} className="px-3 py-1 bg-purple-100 text-purple-800 text-xs font-medium rounded-full">
										{tech}
									</span>
								))}
							</div>
						</motion.div>
					))}
				</div>
			),
		},
		{
			id: 'education',
			title: 'Education',
			content: (
				<div className="space-y-6">
					{resumeData.education.map((edu, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: index * 0.1 }}
							className="bg-white rounded-xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300"
						>
							<div className="flex flex-col sm:flex-row sm:justify-between sm:items-start">
								<div>
									<h3 className="text-xl font-bold text-gray-900">{edu.degree}</h3>
									<p className="text-lg text-blue-600 font-semibold">{edu.school}</p>
									<p className="text-sm text-gray-400">{edu.location}</p>
								</div>
								<span className="text-sm text-gray-500 mt-1 sm:mt-0">{edu.period}</span>
							</div>
						</motion.div>
					))}
				</div>
			),
		},
		{
			id: 'skills',
			title: 'Skills',
			content: (
				<div className="space-y-4">
					{Object.entries(resumeData.skills).map(([category, skills], index) => (
						<motion.div
							key={category}
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: index * 0.07 }}
							className="bg-white rounded-xl p-5 shadow-lg border border-gray-200"
						>
							<h3 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-3">{category}</h3>
							<div className="flex flex-wrap gap-2">
								{skills.map((skill, i) => (
									<motion.span
										key={i}
										whileHover={{ scale: 1.05 }}
										className="px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 text-sm font-medium rounded-full border border-blue-200 cursor-default hover:shadow-md transition-all duration-200"
									>
										{skill}
									</motion.span>
								))}
							</div>
						</motion.div>
					))}
				</div>
			),
		},
		{
			id: 'certifications',
			title: 'Certifications',
			content: (
				<div className="space-y-6">
					{resumeData.certifications.map((cert, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: index * 0.1 }}
							className="bg-white rounded-xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300"
						>
							<div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2">
								<div>
									<h3 className="text-xl font-bold text-gray-900">{cert.name}</h3>
									<p className="text-lg text-blue-600 font-semibold">{cert.issuer}</p>
								</div>
								<span className="text-sm text-gray-500 mt-1 sm:mt-0">{cert.date}</span>
							</div>
							<p className="text-sm text-gray-500">{cert.description}</p>
						</motion.div>
					))}
				</div>
			),
		},
	];

	return (
		<div className="max-w-4xl mx-auto">
			{/* Section Navigation */}
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				className="flex flex-wrap justify-center gap-2 mb-8"
			>
				{sections.map((section) => (
					<motion.button
						key={section.id}
						onClick={() => setActiveSection(section.id)}
						whileHover={{ scale: 1.05 }}
						whileTap={{ scale: 0.95 }}
						className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
							activeSection === section.id
								? 'bg-blue-600 text-white shadow-lg'
								: 'bg-white text-gray-600 border border-gray-200 hover:bg-gray-50'
						}`}
					>
						{section.title}
					</motion.button>
				))}
			</motion.div>

			{/* Section Content */}
			<motion.div
				key={activeSection}
				initial={{ opacity: 0, x: 20 }}
				animate={{ opacity: 1, x: 0 }}
				transition={{ duration: 0.3 }}
				className="min-h-[400px]"
			>
				{sections.find((s) => s.id === activeSection)?.content}
			</motion.div>

			{/* Download Button */}
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ delay: 0.5 }}
				className="text-center mt-8"
			>
				<motion.a
					href="/Resume.png"
					download
					whileHover={{ scale: 1.05 }}
					whileTap={{ scale: 0.95 }}
					className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-200"
				>
					<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
					</svg>
					Download PDF Resume
				</motion.a>
			</motion.div>
		</div>
	);
}
