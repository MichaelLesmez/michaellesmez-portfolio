'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import InteractiveResume from './InteractiveResume';

export default function ResumeSection() {
	const [isResumeOpen, setIsResumeOpen] = useState(false);

	return (
		<section className="py-12 sm:py-20 px-4">
			<div className="max-w-4xl mx-auto">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
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
						<div className="mt-4">
							<InteractiveResume />
						</div>
					</motion.div>
				</motion.div>
			</div>
		</section>
	);
}
