import { useLayoutEffect, useRef, useState } from "react"


export const Quote = ({ author, quote }) => {

    const pRef = useRef()
    const [boxSize, setBoxSize] = useState({ width: 0, height: 0 })

    useLayoutEffect(() => {
        const { height, width } = pRef.current.getBoundingClientRect()
        setBoxSize({ height, width })
    }, [])

    return (
        <>
            <blockquote className="blockquote text-end" style={{ display: 'flex' }}>
                <p ref={ pRef }>{ quote }</p>
                <footer className="blockquote-footer mt-2">{ author }</footer>
            </blockquote>

            <code>{ JSON.stringify(boxSize) }</code>
        </>
    )
}
