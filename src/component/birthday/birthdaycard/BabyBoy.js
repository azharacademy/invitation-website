import React from 'react'
import cx from 'classnames'
import styles from '../Birthday.module.scss'
import BabyBoyModel from '../birthdaymodel/BabyBoyModel';
function BabyBoy() {

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
    const handleClose = () => {
      setOpen(false);
    };  
      return (
        <>
        <div onClick={handleClickOpen} className={cx(styles.muslimCard, styles.cardCommonStyle)}>
            <p>Baby Boy</p>
        </div>
        {open ? <BabyBoyModel handleClose={handleClose} handleClickOpen={handleClickOpen} open={open} setOpen={setOpen} /> : ''}

        </>
    )
}

export default BabyBoy