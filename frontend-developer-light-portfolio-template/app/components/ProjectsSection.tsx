'use client';

import { motion } from 'framer-motion';

export default function ProjectsSection() {
	return (
		<section className="py-12 sm:py-20 px-4">
			<div className="max-w-6xl mx-auto">
				<motion.h2
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					viewport={{ once: true }}
					className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-12 text-center text-gray-900"
				>
					Featured Projects
				</motion.h2>

				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
					className="text-center"
				>
					<div className="bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 rounded-3xl p-8 sm:p-16 border border-gray-200 shadow-lg">
						<motion.div
							animate={{ 
								scale: [1, 1.05, 1],
								opacity: [0.7, 1, 0.7]
							}}
							transition={{ 
								duration: 3,
								repeat: Infinity,
								ease: "easeInOut"
							}}
							className="mb-4 sm:mb-6"
						>
							<div className="w-16 h-16 sm:w-24 sm:h-24 mx-auto bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
								<svg className="w-8 h-8 sm:w-12 sm:h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
								</svg>
							</div>
						</motion.div>
						
						<motion.h3
							initial={{ opacity: 0, y: 10 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ delay: 0.2 }}
							className="text-2xl sm:text-4xl font-bold mb-3 sm:mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-transparent bg-clip-text"
						>
							Coming Soon!
						</motion.h3>
						
						<motion.p
							initial={{ opacity: 0, y: 10 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ delay: 0.4 }}
							className="text-lg sm:text-xl text-gray-600 mb-4 sm:mb-6"
						>
							Exciting projects are in development
						</motion.p>
						
						<motion.p
							initial={{ opacity: 0, y: 10 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ delay: 0.6 }}
							className="text-gray-500 text-sm sm:text-base"
						>
							Check back soon to see my latest work in action
						</motion.p>

						{/* Animated dots */}
						<motion.div className="flex justify-center space-x-2 mt-6 sm:mt-8">
							{[0, 1, 2].map((i) => (
								<motion.div
									key={i}
									className="w-2 h-2 sm:w-3 sm:h-3 bg-blue-400 rounded-full"
									animate={{
										scale: [1, 1.2, 1],
										opacity: [0.5, 1, 0.5]
									}}
									transition={{
										duration: 1.5,
										repeat: Infinity,
										delay: i * 0.2
									}}
								/>
							))}
						</motion.div>
					</div>
				</motion.div>
			</div>
		</section>
	);
}