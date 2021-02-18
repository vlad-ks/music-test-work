import React from 'react'


/**
 * componentDidMount in hook way
 *
 * @export
 * @param onMount
 * @returns
 */
export function useOnMount(onMount) {
    return React.useEffect(() => {
        if (onMount) {
            onMount()
        }
    }, [])
}

/**
 * componentWillUnmount in hook way
 *
 * @export
 * @param onUnmount
 * @returns
 */
export function useOnUnmount(onUnmount) {
    return React.useEffect(() => {
        return () => onUnmount && onUnmount()
    }, [])
}
