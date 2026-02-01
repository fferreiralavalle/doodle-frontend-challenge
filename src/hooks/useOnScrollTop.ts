import { useCallback, useEffect, useRef } from "react"

const useOnScrollTop = ({ onReachTop, loading, error }: { onReachTop?: () => void, loading?: boolean, error?: boolean }) => {
	const containerRef = useRef<HTMLDivElement | null>(null)
	// Stop the onReachTop event from triggering multiple times
	const reachedTop = useRef(false)

	const isTopReached = useCallback(() => {
		const el = containerRef.current
		return (el && el.scrollTop <= 50)
	}, [containerRef])

	const handleTopCheck = useCallback(() => {
		if (isTopReached() && !loading && onReachTop && !reachedTop.current) {
			reachedTop.current = true
			onReachTop()
		}
	}, [onReachTop, loading, reachedTop, isTopReached])

	useEffect(() => {
		// Once loading is done, allow reach to to retrigger
		if (!loading) {
			if (isTopReached() && onReachTop && !error){
				onReachTop();
			}
			else {
				reachedTop.current = false
			}
		}
	}, [loading, onReachTop, isTopReached, error])

	useEffect(() => {
		const el = containerRef.current
		if (!el) return
		el.addEventListener('scroll', handleTopCheck)
		return () => el.removeEventListener('scroll', handleTopCheck)
	}, [onReachTop, loading, handleTopCheck])

	return { containerRef }
}

export default useOnScrollTop;