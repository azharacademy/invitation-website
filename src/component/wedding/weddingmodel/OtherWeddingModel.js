
import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import List from '@mui/material/List';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import styles from './WeddingModel.module.scss'
import cx from 'classnames'
import img1 from '../../images/arrow.png'

function OtherWeddingModel(props) {

    const { open, handleClose } = props

    return (
        <>
            <div>

                <Dialog
                    fullScreen
                    open={open}
                    onClose={handleClose}
                >
                    <AppBar sx={{ position: 'relative' }}>
                        <Toolbar>

                            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
                                <button
                                    style={{ border: "none" }}
                                    edge="start"
                                    color="inherit"
                                    onClick={handleClose}
                                    aria-label="close"
                                >
                                    <img src={img1} alt='!' style={{ marginRight: ' 0.5rem' }} />
                                </button>
                                Other Marriage Invitation
                            </Typography>

                        </Toolbar>
                    </AppBar>
                    <List>
                        <div className={styles.weddingCards}>
                            <div className={styles.mainDiv}>
                                <div className={styles.WeddingCardsMain} >

                                    <div className={cx(styles.muslimCard, styles.cardCommonStyle)}>
                                        <p>Bride Marriage Biodata</p>
                                    </div>
                                    <div className={cx(styles.muslimCard, styles.cardCommonStyle)}>
                                        <p>Bride Marriage Biodata</p>
                                    </div><div className={cx(styles.muslimCard, styles.cardCommonStyle)}>
                                        <p>Engagement Invitation</p>
                                    </div>
                                    <div className={cx(styles.muslimCard, styles.cardCommonStyle)}>
                                        <p>Marriage Invitation</p>
                                    </div>
                                    <div className={cx(styles.muslimCard, styles.cardCommonStyle)}>
                                        <p>Reception Invitation</p>
                                    </div>
                                    <div className={cx(styles.muslimCard, styles.cardCommonStyle)}>
                                        <p>Anniversary Invitation</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </List>
                </Dialog>
            </div>

        </>
    )
}

export default OtherWeddingModel
