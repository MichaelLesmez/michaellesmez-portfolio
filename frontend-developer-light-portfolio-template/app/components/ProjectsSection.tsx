'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

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
							initial={{ opacity: 0, scale: 0.8 }}
							whileInView={{ opacity: 1, scale: 1 }}
							viewport={{ once: true }}
							transition={{ delay: 0.2, duration: 0.6 }}
							className="mb-6 sm:mb-8"
						>
							<div className="relative w-48 h-48 sm:w-64 sm:h-64 mx-auto rounded-2xl overflow-hidden shadow-xl">
								<Image
									src="/JumpyBall.png"
									alt="JumpyBall Game Screenshot"
									fill
									className="object-cover"
									priority
								/>
							</div>
						</motion.div>
						
						<motion.h3
							initial={{ opacity: 0, y: 10 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ delay: 0.4 }}
							className="text-2xl sm:text-4xl font-bold mb-3 sm:mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-transparent bg-clip-text"
						>
							JumpyBall
						</motion.h3>
						
						<motion.p
							initial={{ opacity: 0, y: 10 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ delay: 0.6 }}
							className="text-lg sm:text-xl text-gray-600 mb-4 sm:mb-6"
						>
							A fun 3D platformer game
						</motion.p>
						
						<motion.p
							initial={{ opacity: 0, y: 10 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ delay: 0.8 }}
							className="text-gray-500 text-sm sm:text-base mb-6"
						>
							Built with Unity game engine, featuring smooth 3D animations and immersive gameplay mechanics
						</motion.p>

						<motion.div
							initial={{ opacity: 0, y: 10 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ delay: 1.0 }}
							className="flex flex-wrap justify-center gap-2 sm:gap-3"
						>
							{['C#', 'Unity', '3D Game Development', 'Game Design'].map((tech) => (
								<span
									key={tech}
									className="px-3 py-1 sm:px-4 sm:py-2 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 text-xs sm:text-sm font-medium rounded-full border border-blue-200"
								>
									{tech}
								</span>
							))}
						</motion.div>
					</div>
				</motion.div>
			</div>
		</section>
	);
}