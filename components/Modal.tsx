"use client";
import React from "react";

interface ModalProps {
	open: boolean;
	onClose: () => void;
	children: React.ReactNode;
}

export default function Modal({ open, onClose, children }: ModalProps) {
	if (!open) return null;
	return (
		<div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-[6px]">
			<div
				className="bg-white rounded-xl shadow-lg p-6 min-w-[320px] max-w-[90vw] relative flex flex-col items-center justify-center focus:outline-none"
				tabIndex={-1}
			>
				<button
					className="absolute top-2 right-2 text-gray-400 hover:text-gray-700 text-xl font-bold"
					onClick={onClose}
					aria-label="Close"
				>
					×
				</button>
				{children}
			</div>
		</div>
	);
}
