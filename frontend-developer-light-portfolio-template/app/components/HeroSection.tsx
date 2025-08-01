'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function HeroSection() {
	const [currentRole, setCurrentRole] = useState(0);
	const [mounted, setMounted] = useState(false);
	const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
	const [isOverClickable, setIsOverClickable] = useState(false);
	
	const roles = [
		'Full Stack Developer',
		'Performance Engineer',
		'Microservices Architect',
		'AWS Cloud Practitioner'
	];



	// Handle mounting to avoid hydration issues
	useEffect(() => {
		setMounted(true);
		const interval = setInterval(() => {
			setCurrentRole((prev) => (prev + 1) % roles.length);
		}, 3000);
		return () => clearInterval(interval);
	}, [roles.length]);

	// Global mouse tracking for black hole cursor
	useEffect(() => {
		const handleMouseMove = (e: MouseEvent) => {
			setMousePosition({
				x: e.clientX,
				y: e.clientY
			});

					// Check if mouse is over a hoverable element
		const target = e.target as HTMLElement;
		const isHoverable = target.closest('.hoverable, .group, [class*="group/"], a, button, [role="button"], [onclick]');
		console.log('Mouse move detected! Target:', target.className, 'Is hoverable:', !!isHoverable);
		setIsOverClickable(!!isHoverable);
		};

		// Add cursor style to body and all clickable elements
		document.body.style.cursor = 'none';
		
		// Override cursor for all clickable elements
		const style = document.createElement('style');
		style.textContent = `
			a, button, [role="button"], [onclick], .hoverable, .group, [class*="group/"] {
				cursor: none !important;
				pointer-events: auto !important;
			}
			a *, button *, [role="button"] *, [onclick] *, .hoverable *, .group *, [class*="group/"] * {
				cursor: none !important;
				pointer-events: auto !important;
			}
			* {
				cursor: none !important;
			}
			.animated-gradient {
				background: linear-gradient(90deg, #3b82f6, #8b5cf6, #3b82f6);
				background-size: 200% 100%;
				animation: gradient 8s ease infinite;
				-webkit-background-clip: text;
				-webkit-text-fill-color: transparent;
				background-clip: text;
			}
			.animated-gradient-reverse {
				background: linear-gradient(90deg, #8b5cf6, #3b82f6, #8b5cf6);
				background-size: 200% 100%;
				animation: gradient 8s ease infinite;
				-webkit-background-clip: text;
				-webkit-text-fill-color: transparent;
				background-clip: text;
			}
			@keyframes gradient {
				0% {
					background-position: 0% 0%;
				}
				100% {
					background-position: 200% 0%;
				}
			}
		`;
		document.head.appendChild(style);
		
		document.addEventListener('mousemove', handleMouseMove);

		return () => {
			document.body.style.cursor = 'auto';
			document.removeEventListener('mousemove', handleMouseMove);
			// Remove the style element
			if (style.parentNode) {
				style.parentNode.removeChild(style);
			}
		};
	}, []);

	return (
		<>
			{/* Global Black Hole Cursor */}
			{mounted && (
				<motion.div
					className="fixed pointer-events-none z-[9999]"
					style={{
						left: mousePosition.x - 25,
						top: mousePosition.y - 25,
					}}
					initial={{ scale: 0 }}
					animate={{ 
						scale: 1,
						filter: isOverClickable ? 'brightness(2) drop-shadow(0 0 20px rgba(255,255,255,1))' : 'brightness(1)'
					}}
					transition={{ duration: 0.2 }}
				>
					{/* Outer event horizon */}
					<motion.div
						className="w-12 h-12 rounded-full border"
						style={{
							borderColor: isOverClickable ? 'rgba(147, 51, 234, 0.6)' : 'rgba(147, 51, 234, 0.3)'
						}}
						animate={{ 
							scale: [1, 1.5, 1],
							opacity: isOverClickable ? [0.6, 0.3, 0.6] : [0.3, 0.1, 0.3]
						}}
						transition={{ duration: 2, repeat: Infinity }}
					/>
					
					{/* Middle ring */}
					<motion.div
						className="absolute inset-1 w-10 h-10 rounded-full border"
						style={{
							borderColor: isOverClickable ? 'rgba(59, 130, 246, 0.8)' : 'rgba(59, 130, 246, 0.5)'
						}}
						animate={{ 
							scale: [1, 1.3, 1],
							rotate: 360
						}}
						transition={{ 
							scale: { duration: 1.5, repeat: Infinity },
							rotate: { duration: 3, repeat: Infinity, ease: "linear" }
						}}
					/>
					
					{/* Inner black core */}
					<motion.div
						className="absolute inset-2 w-8 h-8 rounded-full bg-black border border-white/20"
						animate={{ 
							scale: [1, 0.8, 1],
						}}
						transition={{ duration: 1, repeat: Infinity }}
						style={{
							boxShadow: isOverClickable 
								? 'inset 0 0 15px rgba(255,255,255,0.3), 0 0 30px rgba(255,255,255,0.4)'
								: 'inset 0 0 15px rgba(255,255,255,0.1), 0 0 30px rgba(0,0,0,0.8)'
						}}
					/>
					

				</motion.div>
			)}

			<section className="relative min-h-[100vh] sm:min-h-screen flex items-center justify-center overflow-hidden py-8 sm:py-0">
				{/* Animated Background */}
				<div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
					<div className="absolute inset-0 bg-gradient-to-r from-blue-100/30 to-purple-100/30" />
				</div>



				{/* Grid Pattern */}
				<div className="absolute inset-0">
					<div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-20 [mask-image:radial-gradient(ellipse_at_center,white,transparent)]" />
				</div>

				{/* AWS Certifications - Responsive positioning */}
				<motion.a
					href="https://www.credly.com/badges/9474819f-563d-4903-b9bc-94f5ef5979ad"
					target="_blank"
					rel="noopener noreferrer"
					className="absolute top-4 sm:top-20 right-2 sm:right-10 z-20"
					animate={{
						y: [0, -15, 0],
						rotate: [0, 2, -2, 0],
						scale: [1, 1.05, 1],
					}}
					transition={{
						duration: 4,
						repeat: Infinity,
						ease: "easeInOut"
					}}
					whileHover={{ 
						scale: 1.1,
						rotate: 5,
						transition: { duration: 0.2 }
					}}
					whileTap={{ scale: 0.95 }}
				>
					<div className="relative w-20 h-20 sm:w-40 sm:h-40 md:w-48 md:h-48 flex items-center justify-center">
						<Image
							src="/AWSCloudPractitioner.png"
							alt="AWS Cloud Practitioner Certification"
							width={160}
							height={160}
							className="object-contain drop-shadow-xl"
							priority
						/>
					</div>
				</motion.a>

				<motion.a
					href="#"
					target="_blank"
					rel="noopener noreferrer"
					className="absolute top-2 sm:top-8 left-0 z-20"
					animate={{
						y: [0, -15, 0],
						rotate: [0, -2, 2, 0],
						scale: [1, 1.03, 1],
					}}
					transition={{
						duration: 4.5,
						repeat: Infinity,
						ease: "easeInOut"
					}}
					whileHover={{ 
						scale: 1.08,
						rotate: -5,
						transition: { duration: 0.2 }
					}}
					whileTap={{ scale: 0.95 }}
				>
					<Image
						src="/AWSAIPractitioner.png"
						alt="AWS AI Practitioner Certification"
						width={280}
						height={280}
						className="object-contain drop-shadow-xl w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 lg:w-72 lg:h-72"
						priority
					/>
				</motion.a>

				{/* Main Content */}
				<div className="relative z-10 text-center px-4">
					<motion.div 
						initial={{ opacity: 0, y: 50 }} 
						animate={{ opacity: 1, y: 0 }} 
						transition={{ duration: 1, ease: "easeOut" }}
					>
						{/* Profile Image */}
						<motion.div 
							initial={{ opacity: 0, scale: 0.5, rotate: -180 }} 
							animate={{ opacity: 1, scale: 1, rotate: 0 }} 
							transition={{ duration: 1.2, delay: 0.3, type: "spring", stiffness: 200 }}
							className="mb-4 sm:mb-8 flex justify-center"
						>
							<motion.div 
								className="relative w-32 h-32 sm:w-44 sm:h-44 md:w-52 md:h-52 rounded-full overflow-hidden border-4 border-white shadow-2xl"
								whileHover={{ scale: 1.15, y: -10 }}
								transition={{ duration: 0.4, ease: "easeOut" }}
							>
								<Image
									src="/profile.png"
									alt="Michael Lesmez"
									fill
									className="object-cover"
									priority
								/>
							</motion.div>
						</motion.div>
						
						{/* Name with Staggered Animation */}
						<motion.h1 
							className="text-3xl sm:text-5xl md:text-7xl font-bold mb-4 sm:mb-6"
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ duration: 0.5, delay: 0.4 }}
						>
							<motion.span
								className="inline-block bg-clip-text text-transparent animated-gradient"
								initial={{ y: 50, opacity: 0 }}
								animate={{ y: 0, opacity: 1 }}
								transition={{ duration: 0.3, delay: 0.4 }}
							>
								Michael
							</motion.span>{' '}
							<motion.span
								className="inline-block bg-clip-text text-transparent animated-gradient-reverse"
								initial={{ y: 50, opacity: 0 }}
								animate={{ y: 0, opacity: 1 }}
								transition={{ duration: 0.3, delay: 0.5 }}
							>
								Lesmez
							</motion.span>
						</motion.h1>

						{/* Dynamic Role Title - only show after mount */}
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, delay: 0.9 }}
							className="mb-4 sm:mb-8 h-12 sm:h-16 flex items-center justify-center"
						>
							{mounted ? (
								<motion.p
									key={currentRole}
									initial={{ opacity: 0, y: 20, rotateX: -90 }}
									animate={{ opacity: 1, y: 0, rotateX: 0 }}
									exit={{ opacity: 0, y: -20, rotateX: 90 }}
									transition={{ duration: 0.5 }}
									className="text-lg sm:text-xl md:text-2xl text-gray-700 font-medium"
								>
									{roles[currentRole]}
								</motion.p>
							) : (
								<p className="text-lg sm:text-xl md:text-2xl text-gray-700 font-medium">
									{roles[0]}
								</p>
							)}
						</motion.div>

						{/* Interactive Experience Button */}
						<motion.div
							initial={{ opacity: 0, y: 30 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, delay: 1.1 }}
							className="flex justify-center mb-4 sm:mb-8"
						>
							<div className="relative group hoverable">
								{/* Main Experience Button */}
								<motion.div
									className="bg-white/60 backdrop-blur-sm rounded-2xl px-6 sm:px-8 py-3 sm:py-4 shadow-lg border border-white/20 hover:shadow-xl transition-all duration-300 cursor-pointer hoverable"
									whileHover={{ scale: 1.02 }}
									whileTap={{ scale: 0.98 }}
								>
									<div className="text-2xl sm:text-3xl font-bold text-blue-600">4+</div>
									<div className="text-xs sm:text-sm text-gray-600">Years Experience</div>
								</motion.div>

								{/* Always Visible Experience Boxes - Responsive layout */}
								<div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 sm:mt-4">
									<div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
										{/* Babylon Microfarms Box with Detailed Hover */}
										<div className="relative group/babylon hoverable">
											<div className="bg-white/90 backdrop-blur-sm rounded-xl px-3 sm:px-4 py-2 sm:py-3 shadow-lg border border-white/30 cursor-pointer hover:shadow-xl transition-all duration-300 hoverable group-hover:scale-105 hover:scale-105 relative overflow-hidden">
												<div className="text-sm sm:text-lg font-bold text-green-600">Babylon Microfarms</div>
												<div className="text-xs text-gray-600">1 Year</div>
												
												{/* Revolving highlight line */}
												<div className="absolute inset-0 opacity-100 group-hover/babylon:opacity-0 transition-opacity duration-300">
													<div className="absolute inset-0 rounded-xl">
														<div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-green-400 to-transparent animate-pulse"></div>
														<div className="absolute top-0 right-0 w-0.5 h-full bg-gradient-to-b from-transparent via-green-400 to-transparent animate-pulse" style={{ animationDelay: '0.5s' }}></div>
														<div className="absolute bottom-0 right-0 w-full h-0.5 bg-gradient-to-r from-transparent via-green-400 to-transparent animate-pulse" style={{ animationDelay: '1s' }}></div>
														<div className="absolute bottom-0 left-0 w-0.5 h-full bg-gradient-to-b from-transparent via-green-400 to-transparent animate-pulse" style={{ animationDelay: '1.5s' }}></div>
													</div>
												</div>
											</div>

											{/* Detailed Babylon Microfarms Information - Responsive positioning */}
											<div className="absolute -top-32 sm:-top-40 -left-48 sm:-left-96 opacity-0 group-hover/babylon:opacity-100 transition-all duration-700 ease-out z-50 transform group-hover/babylon:scale-100 scale-0 origin-center">
												{/* Header Box */}
												<div className="bg-green-600 text-white rounded-t-xl px-4 sm:px-6 py-3 sm:py-4 shadow-lg mb-3 w-64 sm:w-80 relative transform group-hover/babylon:scale-100 scale-0 transition-all duration-700 ease-out origin-center">
													<div className="text-base sm:text-lg font-bold">Junior Software Developer</div>
													<div className="text-xs sm:text-sm opacity-90">June 2021 – Aug. 2021</div>
													<div className="text-xs opacity-75">Babylon Microfarms • 3409 Carlton St, Richmond, VA</div>
												</div>

												{/* Content Boxes */}
												<div className="relative">
													{/* Development Box */}
													<div className="bg-white/95 backdrop-blur-sm rounded-xl px-4 sm:px-6 py-3 sm:py-4 shadow-lg border border-white/30 mb-3 relative w-64 sm:w-80 transform group-hover/babylon:scale-100 scale-0 transition-all duration-700 ease-out origin-center">
														<div className="text-xs sm:text-sm font-bold text-green-600 mb-2">Development</div>
														<div className="text-xs text-gray-700 space-y-2">
															<div>Designed and implemented automated customer notification system tailored to individual preferences, increasing user engagement</div>
														</div>
													</div>

													{/* Testing Box */}
													<div className="bg-white/95 backdrop-blur-sm rounded-xl px-4 sm:px-6 py-3 sm:py-4 shadow-lg border border-white/30 relative w-64 sm:w-80 transform group-hover/babylon:scale-100 scale-0 transition-all duration-700 ease-out origin-center">
														<div className="text-xs sm:text-sm font-bold text-green-600 mb-2">Testing</div>
														<div className="text-xs text-gray-700 space-y-2">
															<div>Learned the importance of Test-Driven Development</div>
														</div>
													</div>
												</div>
											</div>
										</div>

										{/* Freddie Mac Box with Detailed Hover */}
										<div className="relative group/freddie hoverable">
											<div className="bg-white/90 backdrop-blur-sm rounded-xl px-3 sm:px-4 py-2 sm:py-3 shadow-lg border border-white/30 cursor-pointer hover:shadow-xl transition-all duration-300 hoverable group-hover:scale-105 hover:scale-105 relative overflow-hidden">
												<div className="text-sm sm:text-lg font-bold text-blue-600">Freddie Mac</div>
												<div className="text-xs text-gray-600">3 Years</div>
												
												{/* Revolving highlight line */}
												<div className="absolute inset-0 opacity-100 group-hover/freddie:opacity-0 transition-opacity duration-300">
													<div className="absolute inset-0 rounded-xl">
														<div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-blue-400 to-transparent animate-pulse"></div>
														<div className="absolute top-0 right-0 w-0.5 h-full bg-gradient-to-b from-transparent via-blue-400 to-transparent animate-pulse" style={{ animationDelay: '0.5s' }}></div>
														<div className="absolute bottom-0 right-0 w-full h-0.5 bg-gradient-to-r from-transparent via-blue-400 to-transparent animate-pulse" style={{ animationDelay: '1s' }}></div>
														<div className="absolute bottom-0 left-0 w-0.5 h-full bg-gradient-to-b from-transparent via-blue-400 to-transparent animate-pulse" style={{ animationDelay: '1.5s' }}></div>
													</div>
												</div>
											</div>

											{/* Detailed Freddie Mac Information - Responsive positioning */}
											<div className="absolute -top-64 sm:-top-80 left-32 sm:left-80 opacity-0 group-hover/freddie:opacity-100 transition-all duration-700 ease-out z-50 transform group-hover/freddie:scale-100 scale-0 origin-center">
												{/* Header Box */}
												<div className="bg-blue-600 text-white rounded-t-xl px-4 sm:px-6 py-3 sm:py-4 shadow-lg mb-3 w-64 sm:w-80 relative transform group-hover/freddie:scale-100 scale-0 transition-all duration-700 ease-out origin-center">
													<div className="text-base sm:text-lg font-bold">Full Stack Developer</div>
													<div className="text-xs sm:text-sm opacity-90">June 2022 – Present</div>
													<div className="text-xs opacity-75">Freddie Mac • 8200 Jones Branch Drive</div>
												</div>

												{/* Content Boxes */}
												<div className="relative">
													{/* Development Box */}
													<div className="bg-white/95 backdrop-blur-sm rounded-xl px-4 sm:px-6 py-3 sm:py-4 shadow-lg border border-white/30 mb-3 relative w-64 sm:w-80 transform group-hover/freddie:scale-100 scale-0 transition-all duration-700 ease-out origin-center">
														<div className="text-xs sm:text-sm font-bold text-blue-600 mb-2">Development</div>
														<div className="text-xs text-gray-700 space-y-2">
															<div>Contributed to the migration effort of monolithic systems to Spring Boot microservices architecture, enhancing modularity and scalability</div>
														</div>
													</div>

													{/* Optimization Box */}
													<div className="bg-white/95 backdrop-blur-sm rounded-xl px-4 sm:px-6 py-3 sm:py-4 shadow-lg border border-white/30 mb-3 relative w-64 sm:w-80 transform group-hover/freddie:scale-100 scale-0 transition-all duration-700 ease-out origin-center">
														<div className="text-xs sm:text-sm font-bold text-blue-600 mb-2">Optimization</div>
														<div className="text-xs text-gray-700 space-y-2">
															<div>Utilized Kibana data dashboards to identify microservice bottlenecks impacting system performance and improved response times by implementing thread-safe parallel processing with proper resource management and error handling</div>
														</div>
													</div>

													{/* DevOps Box */}
													<div className="bg-white/95 backdrop-blur-sm rounded-xl px-4 sm:px-6 py-3 sm:py-4 shadow-lg border border-white/30 relative w-64 sm:w-80 transform group-hover/freddie:scale-100 scale-0 transition-all duration-700 ease-out origin-center">
														<div className="text-xs sm:text-sm font-bold text-blue-600 mb-2">DevOps</div>
														<div className="text-xs text-gray-700 space-y-2">
															<div>Utilized Jenkins CI/CD pipelines to automate testing and deploy validated code to production</div>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</motion.div>
					</motion.div>
				</div>

				{/* Enhanced Scroll Indicator */}
				<motion.div 
					className="absolute bottom-4 sm:bottom-10 left-1/2 transform -translate-x-1/2"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 2 }}
				>
					<motion.div 
						animate={{ y: [0, 10, 0] }} 
						transition={{ duration: 2, repeat: Infinity }} 
						className="flex flex-col items-center text-gray-500"
					>
						<span className="text-xs sm:text-sm mb-2 font-medium">Scroll to explore</span>
						<motion.svg
							className="w-5 h-5 sm:w-6 sm:h-6"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
							whileHover={{ scale: 1.2 }}
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M19 14l-7 7m0 0l-7-7m7 7V3"
							/>
						</motion.svg>
					</motion.div>
				</motion.div>
			</section>
		</>
	);
}