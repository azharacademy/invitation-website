import React from 'react'
import cx from 'classnames'
import styles from '../Wedding.module.scss'
import HinduWeddingModal from '../weddingmodel/HinduWeddingModal';

function HinduWeddingCard() {
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
                <p>Hindu Marriage Invitation</p>
            </div>
            {open ? <HinduWeddingModal handleClose={handleClose} handleClickOpen={handleClickOpen} open={open} setOpen={setOpen} /> : ''}
        </>

    )
}

export default HinduWeddingCard