import { useEffect, useRef } from "react"

const useOnScrollTop = ({ onReachTop, loading }: { onReachTop(): void, loading?: boolean }) => {
	const containerRef = useRef<HTMLDivElement | null>(null)

	useEffect(() => {
		const el = containerRef.current
		if (!el) return
		function handleScroll() {
			if (el && el.scrollTop <= 50 && !loading) {
				onReachTop()
			}
		}
		el.addEventListener('scroll', handleScroll)
		return () => el.removeEventListener('scroll', handleScroll)
	}, [onReachTop, loading])

	return { containerRef }
}

export default useOnScrollTop;