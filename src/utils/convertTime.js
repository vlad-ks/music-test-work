/**
 * Get time by seconds (mm:ss)
 *
 * @param sec
 * @returns {string}
 */
export const secToTime = sec =>
	new Date(sec * 1000)
	.toISOString()
	.substr(14, 5);