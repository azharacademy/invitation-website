import React from 'react'
import cx from 'classnames'
import styles from '../Birthday.module.scss'
import BabyGirlModel from '../birthdaymodel/BabyGirlModel';
function BabyGirl() {
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
            <p>Baby Girl</p>
        </div>
        {open ? <BabyGirlModel handleClose={handleClose} handleClickOpen={handleClickOpen} open={open} setOpen={setOpen} /> : ''}

        </>
        
    )
}

export default BabyGirl