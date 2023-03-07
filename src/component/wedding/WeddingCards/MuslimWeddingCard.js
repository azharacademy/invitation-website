import React from 'react'
import cx from 'classnames'
import styles from '../Wedding.module.scss'
import WeddingModel from '../weddingmodel/WeddingModel';
function MuslimWeddingCard() {
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
        <p>Muslim Marriage Invitation</p>
      </div>
      {open ? <WeddingModel handleClose={handleClose} handleClickOpen={handleClickOpen} open={open} setOpen={setOpen} /> : ''}
    </>
  )
}

export default MuslimWeddingCard