import { useRef, useState } from "react";

export function useDropDown() {

    const [showHide, setShowHide] = useState(false);
    const refs = useRef();

    function toggleHeight() {
        const siblingElem = refs.current;
        if (!showHide) {
            setShowHide(true)
            siblingElem.style.height = siblingElem.scrollHeight + 'px';
        } else {
            setShowHide(false);
            siblingElem.style.height = '0px';
        }
    };
    return { showHide, toggleHeight, refs }
}