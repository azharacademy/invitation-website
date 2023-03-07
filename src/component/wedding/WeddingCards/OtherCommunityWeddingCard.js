import React from 'react'
import cx from 'classnames'
import styles from '../Wedding.module.scss'
import OtherWeddingModel from '../weddingmodel/OtherWeddingModel';
function OtherCommunityWeddingCard() {
    const [open, setOpen] = React.useState(false);
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    return (
        <>
            <div onClick={handleClickOpen} className={cx(styles.otherCommunityWeddingCard)}>
                <p>Other Community Wedding Marriage Invitation</p>
            </div>
            {open ? <OtherWeddingModel handleClose={handleClose} handleClickOpen={handleClickOpen} open={open} setOpen={setOpen} /> : ''}

        </>
    )
}

export default OtherCommunityWeddingCard