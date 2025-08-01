'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';

export default function ContactSection() {
	const [isResumeOpen, setIsResumeOpen] = useState(false);

	return (
		<section className="py-12 sm:py-20 px-4">
			<div className="max-w-4xl mx-auto">
				{/* Resume Section */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					className="mb-8 sm:mb-12"
				>
					<motion.button
						onClick={() => setIsResumeOpen(!isResumeOpen)}
						whileHover={{ scale: 1.02 }}
						whileTap={{ scale: 0.98 }}
						className="w-full bg-white rounded-xl shadow-lg p-4 sm:p-6 border border-gray-200 hover:shadow-xl transition-all duration-300"
					>
						<div className="flex items-center justify-center relative">
							<h3 className="text-xl sm:text-2xl font-bold text-gray-900">Resume</h3>
							<motion.svg
								animate={{ rotate: isResumeOpen ? 180 : 0 }}
								transition={{ duration: 0.3 }}
								className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600 absolute right-0"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
							>
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
							</motion.svg>
						</div>
					</motion.button>

					<motion.div
						initial={false}
						animate={{ 
							height: isResumeOpen ? "auto" : 0,
							opacity: isResumeOpen ? 1 : 0
						}}
						transition={{ duration: 0.3 }}
						className="overflow-hidden"
					>
						<div className="bg-white rounded-xl shadow-lg p-4 sm:p-6 mt-4">
							<Image
								src="/resume.png"
								alt="Michael Lesmez Resume"
								width={800}
								height={1000}
								className="w-full h-auto rounded-lg"
								priority
							/>
						</div>
					</motion.div>
				</motion.div>

				{/* Contact Section */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					className="relative p-8 sm:p-12 rounded-3xl overflow-hidden backdrop-blur-xl border border-gray-200 bg-white shadow-lg"
				>
					<div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50" />
					<div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-30" />
					<div className="relative z-10">
						<motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
							<h2 className="text-2xl sm:text-4xl font-bold mb-3 text-center bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-transparent bg-clip-text">
								Let&apos;s Connect
							</h2>
							<p className="text-gray-600 text-center mb-4 text-sm sm:text-base">Ready to collaborate or have a project in mind? Let&apos;s make something amazing together.</p>
							<div className="flex items-center justify-center gap-2 text-gray-600 mb-6 sm:mb-8">
								<svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
									/>
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
								</svg>
								<span className="text-sm sm:text-base">Arlington, VA</span>
							</div>
						</motion.div>
						<div className="flex flex-col items-center gap-4 sm:gap-6 mb-6 sm:mb-8">
							<motion.a
								href="mailto:michaellesmez@gmail.com"
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}
								className="w-full sm:w-auto flex items-center justify-center gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 font-medium text-white text-sm sm:text-base"
							>
								<svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
									/>
								</svg>
								Get in Touch
							</motion.a>
							<div className="flex gap-3 sm:gap-4">
								<motion.a
									href="https://github.com/michaellesmez"
									target="_blank"
									rel="noopener noreferrer"
									whileHover={{ scale: 1.05 }}
									whileTap={{ scale: 0.95 }}
									className="group flex items-center justify-center p-3 sm:p-4 bg-blue-50 hover:bg-blue-100 rounded-xl border border-blue-200 transition-all duration-300"
								>
									<svg className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600 group-hover:text-blue-700 transition-colors" fill="currentColor" viewBox="0 0 24 24">
										<path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
									</svg>
								</motion.a>
								<motion.a
									href="https://linkedin.com/in/michael-lesmez-390bb4204"
									target="_blank"
									rel="noopener noreferrer"
									whileHover={{ scale: 1.05 }}
									whileTap={{ scale: 0.95 }}
									className="group flex items-center justify-center p-3 sm:p-4 bg-purple-50 hover:bg-purple-100 rounded-xl border border-purple-200 transition-all duration-300"
								>
									<svg className="w-5 h-5 sm:w-6 sm:h-6 text-purple-600 group-hover:text-purple-700 transition-colors" fill="currentColor" viewBox="0 0 24 24">
										<path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
									</svg>
								</motion.a>
							</div>
						</div>
					</div>
				</motion.div>
			</div>
		</section>
	);
}
