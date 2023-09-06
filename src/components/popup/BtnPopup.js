import { useState } from 'react';
import './BtnPopup.css'
export default function BtnPopup() {
    const [open, setOpen] = useState();
    const handleOpen = () => {
     
        setOpen(true)
        console.log("click....",open)

    }
    const handleClose=()=>{
        
    
        setOpen(false)
        console.log("close...",open)
    }
    return (
        // <div className="menu-area">
            <div className="menu-area" onClick={() => handleOpen()}>
                <i class="fa fa-ellipsis-v" ></i>
                {open && <div className="menu-popup" onClick={() => handleClose()} >dexee</div>}
            </div>
        // </div>
    )
}