import { useState, useRef } from 'react'
import { useOutsideClick } from '../useOutsideClick'

import { useDispatch } from 'react-redux'
import { add } from '../eventsSlice'

import './Fab.css'

export const Fab = () => {
    const dispatch = useDispatch()
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const ref = useRef(null)

    useOutsideClick(ref, () => {
        setIsMenuOpen(false)
    })

    return (
        <div ref={ref}>
            {isMenuOpen && (
                <div className={`fabMenu`}>
                    <div
                        className="fabMenuButton"
                        onClick={() => {
                            dispatch(add({ type: 'LEFT', title: 'Left Breast' }))
                            setIsMenuOpen((value) => !value)
                        }}
                    >
                        Left Breast
                    </div>
                    <div
                        className="fabMenuButton"
                        onClick={() => {
                            dispatch(add({ type: 'RIGHT', title: 'Right Breast' }))
                            setIsMenuOpen((value) => !value)
                        }}
                    >
                        Right Breast
                    </div>
                    <div
                        className="fabMenuButton"
                        onClick={() => {
                            dispatch(add({ type: 'BOTTLE', title: 'Bottle' }))
                            setIsMenuOpen((value) => !value)
                        }}
                    >
                        Bottle
                    </div>
                    <div
                        className="fabMenuButton"
                        onClick={() => {
                            dispatch(add({ type: 'BURP', title: 'Burp' }))
                            setIsMenuOpen((value) => !value)
                        }}
                    >
                        Burp
                    </div>
                    <div
                        className="fabMenuButton"
                        onClick={() => {
                            dispatch(add({ type: 'CHANGE', title: 'Change' }))
                            setIsMenuOpen((value) => !value)
                        }}
                    >
                        Change
                    </div>
                </div>
            )}
            <button
                onClick={() => {
                    setIsMenuOpen((value) => !value)
                }}
                className={`fab ${isMenuOpen ? 'fabFocus' : ''}`}
            >
                +
            </button>
        </div>
    )
}
