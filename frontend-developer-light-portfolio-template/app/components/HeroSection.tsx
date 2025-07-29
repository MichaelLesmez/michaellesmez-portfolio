'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function HeroSection() {
	return (
		<section className="relative min-h-screen flex items-center justify-center overflow-hidden">
			<div className="absolute inset-0 bg-gradient-to-r from-blue-100 to-purple-100 opacity-50" />
			<div className="absolute inset-0">
				<div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
			</div>

			{/* AWS Certification Floating */}
			<motion.a
				href="https://www.credly.com/badges/9474819f-563d-4903-b9bc-94f5ef5979ad"
				target="_blank"
				rel="noopener noreferrer"
				className="absolute top-20 right-10 z-20 cursor-pointer"
				animate={{
					y: [0, -15, 0],
					rotate: [0, 2, -2, 0]
				}}
				transition={{
					duration: 4,
					repeat: Infinity,
					ease: "easeInOut"
				}}
				whileHover={{ scale: 1.05 }}
				whileTap={{ scale: 0.95 }}
			>
				<div className="relative w-40 h-40 md:w-48 md:h-48 flex items-center justify-center">
					<Image
						src="/AWSCloudPractitioner.png"
						alt="AWS Cloud Practitioner Certification"
						width={160}
						height={160}
						className="object-contain drop-shadow-lg"
						priority
						onError={(e) => {
							console.error('Failed to load AWS certification image');
							// Show a fallback text instead
							e.currentTarget.style.display = 'none';
							const fallback = document.createElement('div');
							fallback.className = 'text-xs text-gray-600 font-medium text-center';
							fallback.textContent = 'AWS Cloud Practitioner';
							e.currentTarget.parentNode?.appendChild(fallback);
						}}
					/>
				</div>
			</motion.a>

			{/* AWS AI Practitioner Badge Floating (Left) */}
			<motion.a
				href="#" // Add your Credly link if you have one
				target="_blank"
				rel="noopener noreferrer"
				className="absolute top-8 left-0 z-20 cursor-pointer"
				animate={{
					y: [0, -15, 0],
					rotate: [0, -2, 2, 0]
				}}
				transition={{
					duration: 4,
					repeat: Infinity,
					ease: "easeInOut"
				}}
				whileHover={{ scale: 1.05 }}
				whileTap={{ scale: 0.95 }}
			>
				<Image
					src="/AWSAIPractitioner.png"
					alt="AWS AI Practitioner Certification"
					width={280}
					height={280}
					className="object-contain drop-shadow-lg"
					priority
					onError={(e) => {
						console.error('Failed to load AWS AI Practitioner image');
						// Show a fallback text instead
						e.currentTarget.style.display = 'none';
						const fallback = document.createElement('div');
						fallback.className = 'text-xs text-gray-600 font-medium text-center';
						fallback.textContent = 'AWS AI Practitioner';
						e.currentTarget.parentNode?.appendChild(fallback);
					}}
				/>
			</motion.a>

			<div className="relative z-10 text-center px-4">
				<motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
					{/* Profile Image */}
					<motion.div 
						initial={{ opacity: 0, scale: 0.8 }} 
						animate={{ opacity: 1, scale: 1 }} 
						transition={{ duration: 0.6, delay: 0.2 }}
						className="mb-8 flex justify-center"
					>
						<div className="relative w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-white shadow-lg">
							<Image
								src="/profile.png"
								alt="Michael Lesmez"
								fill
								className="object-cover"
								priority
							/>
						</div>
					</motion.div>
					
					<h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">Michael Lesmez</h1>
					<p className="text-xl md:text-2xl text-gray-600 mb-8">Full Stack Developer</p>
				</motion.div>
			</div>

			<div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
				<motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 2, repeat: Infinity }} className="text-gray-500">
					<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
					</svg>
				</motion.div>
			</div>
		</section>
	);
}
