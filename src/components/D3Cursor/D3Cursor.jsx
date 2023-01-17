import * as d3 from 'd3'
import { useEffect, useRef } from 'react'

export default function D3Cursor() {
	const D3 = useRef()

	useEffect(() => {
		drawMouseEffect()
	}, [])

	const drawMouseEffect = () => {
		const svg = d3
			.select(D3.current)
			.append('svg')
			.attr('width', '100%')
			.attr('height', '100%')
			.style('position', 'fixed')
			.style('top', '0')
			.style('left', '0')

		svg.on('mousemove', (e) => {
			let i = 0
			let coord = d3.pointer(e)
			// console.log(coord)

			svg.insert('circle')
				.attr('cx', coord[0])
				.attr('cy', coord[1])
				.attr('r', 0)
				.attr('fill', d3.hsl((i = i + 1), 1, 0.5))
				.transition()
				.duration(1500)
				.ease(d3.easeCircleOut)
				.attr('r', 25)
				.style('opacity', 0)
				.remove()
		})
	}

	return <div ref={D3}></div>
}
