import clsx from 'clsx'

export const GradientBG = ({ className }: { className?: string }) => {
	return (
		<div className={clsx('absolute bottom-0 left-1/2 transform -translate-x-1/2 sm:hidden', className)}>
			<svg xmlns="http://www.w3.org/2000/svg" width="450" height="606" viewBox="0 0 450 606" fill="none">
				<path d="M0 50.0316C142.227 -17.7246 221 -15.6215 500 50.0316V605.532H0V50.0316Z" fill="#FDA2D9" fillOpacity="0.61" />
			</svg>
		</div>
	)
}
