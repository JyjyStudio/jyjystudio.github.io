import React, { useContext } from 'react'
import styles from './cursor.module.css'
import useMousePosition from '../../hooks/useMousePosition'
import { MouseContext } from '../../context/mouse-context'

export default function Cursor() {
	const { cursorType, cursorChangeHandler } = useContext(MouseContext)
	const { x, y } = useMousePosition()
	return (
		<div
			className={`${styles.dot} ${cursorType}`}
			style={{ left: `${x}px`, top: `${y}px` }}
		></div>
	)
}
