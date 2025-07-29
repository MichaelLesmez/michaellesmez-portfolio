'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const skillCategories = {
	'Frontend': [
		{ skill: 'Angular' },
		{ skill: 'React' },
		{ skill: 'JavaScript' },
		{ skill: 'HTML/CSS' },
		{ skill: 'TypeScript' },
	],
	'Backend': [
		{ skill: 'Java' },
		{ skill: 'Python' },
		{ skill: 'C++' },
		{ skill: 'SQL' },
		{ skill: 'Node.js' },
	],
	'Frameworks': [
		{ skill: 'Spring Boot' },
		{ skill: 'Django' },
		{ skill: 'JUnit' },
		{ skill: 'Cucumber' },
		{ skill: 'Playwright' },
		{ skill: 'Next.js' },
	],
	'Cloud Computing': [
		{ skill: 'AWS' },
		{ skill: 'Docker' },
		{ skill: 'Kubernetes' },
		{ skill: 'Jenkins' },
		{ skill: 'Kiali' },
		{ skill: 'Kibana' },
	],
	'Tools': [
		{ skill: 'Git' },
		{ skill: 'Gradle' },
		{ skill: 'Linux' },
		{ skill: 'JMeter' },
	],
	'Skills': [
		{ skill: 'Machine Learning (ML)' },
		{ skill: 'Data Curation' },
		{ skill: 'AI Pair Programming' },
		{ skill: 'Microservice Architecture' },
		{ skill: 'CICD Pipelines' },
	]
};

const categories = Object.keys(skillCategories);

export default function SkillsSection() {
	const [selectedCategory, setSelectedCategory] = useState(categories[0]);
	const [displayedSkills, setDisplayedSkills] = useState<Array<{skill: string, category: string}>>([]);

	// Flatten all skills with their categories
	const allSkills = Object.entries(skillCategories).flatMap(([category, skills]) =>
		skills.map(skill => ({ ...skill, category }))
	);

	const handleCategoryClick = (category: string) => {
		setSelectedCategory(category);
		setDisplayedSkills(allSkills.filter(skill => skill.category === category));
	};

	// Initialize with first category
	useEffect(() => {
		setDisplayedSkills(allSkills.filter(skill => skill.category === categories[0]));
	}, []);

	return (
		<section className="py-20 px-4 bg-gray-100">
			<div className="max-w-6xl mx-auto">
				<motion.h2
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					viewport={{ once: true }}
					className="text-3xl font-bold mb-12 text-center text-gray-900"
				>
					Technical Skills
				</motion.h2>

				{/* Category Buttons */}
				<motion.div 
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					className="flex flex-wrap justify-center gap-3 mb-12"
				>
					{categories.map((category) => (
						<motion.button
							key={category}
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.95 }}
							onClick={() => handleCategoryClick(category)}
							className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
								selectedCategory === category
									? 'bg-blue-600 text-white shadow-lg'
									: 'bg-white text-gray-700 hover:bg-blue-50 border border-gray-200'
							}`}
						>
							{category}
						</motion.button>
					))}
				</motion.div>

				{/* Skills Display */}
				<motion.div 
					key={selectedCategory}
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 0.5 }}
					className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
				>
					{displayedSkills.map((skill, index) => (
						<motion.div
							key={`${skill.skill}-${skill.category}`}
							initial={{ opacity: 0, scale: 0.8, y: 20 }}
							animate={{ 
								opacity: 1, 
								scale: 1, 
								y: 0,
								rotate: [0, 5, -5, 0],
							}}
							transition={{ 
								delay: index * 0.1,
								duration: 0.6,
								type: "spring",
								stiffness: 100
							}}
							whileHover={{ 
								scale: 1.05,
								rotate: [0, 2, -2, 0],
								transition: { duration: 0.2 }
							}}
							className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
						>
							<div className="text-center">
								<h3 className="font-semibold text-gray-900 text-lg">{skill.skill}</h3>
							</div>
						</motion.div>
					))}
				</motion.div>
			</div>
		</section>
	);
}
