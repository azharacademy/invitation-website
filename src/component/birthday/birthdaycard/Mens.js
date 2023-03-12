import React from 'react'
import cx from 'classnames'
import styles from '../Birthday.module.scss'
import MensModel from '../birthdaymodel/MensModel';
function Mens() {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
    const handleClose = () => {
      setOpen(false);
    }; 
    return (
        <>
        <div onClick={handleClickOpen} className={cx(styles.hinduCard, styles.cardCommonStyle)}>
            <p>Men’s</p>
        </div>
        {open ? <MensModel handleClose={handleClose} handleClickOpen={handleClickOpen} open={open} setOpen={setOpen} /> : ''}
        </>
    )
}

export default Mens