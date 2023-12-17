export const generateSlug = (dirtyText: string) => {
	return dirtyText
		.trim() // Remove leading and trailing whitespaces
		.replace(/\s+/g, '-') // Replace spaces with hyphens
		.replace(/[^\w-]/g, '') // Remove non-word characters except hyphens
		.toLowerCase() // Convert to lowercase
}
