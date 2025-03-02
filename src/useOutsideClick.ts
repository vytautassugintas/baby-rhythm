import { useEffect, RefObject } from 'react'

export const useOutsideClick = (ref: RefObject<Element | null>, callback: () => void) => {
    useEffect(() => {
        function handleClickOutside(event: MouseEvent): void {
            if (!event.target) {
                return
            }

            if (ref?.current && !ref?.current?.contains(event.target as Node)) {
                callback()
            }
        }

        document.addEventListener('click', handleClickOutside)

        return () => {
            document.removeEventListener('click', handleClickOutside)
        }
    }, [ref, callback])
}
