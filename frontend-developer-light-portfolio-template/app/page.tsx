'use client';

import HeroSection from './components/HeroSection';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';

export default function FrontendPortfolio() {
	return (
		<main className="min-h-screen bg-gray-50 text-gray-900 overflow-x-hidden">
			<HeroSection />
			<ProjectsSection />
			<ContactSection />
		</main>
	);
}
