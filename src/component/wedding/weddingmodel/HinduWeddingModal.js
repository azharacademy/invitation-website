import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import ListItemText from '@mui/material/ListItemText';
import ListItem from '@mui/material/ListItem';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import styles from './WeddingModel.module.scss'
import cx from 'classnames'
import img1 from '../../images/arrow.png'


function HinduWeddingModal(props) {

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
                                Hindu Marriage Invitation
                            </Typography>

                        </Toolbar>
                    </AppBar>
                    <List>
                        <div className={styles.weddingCards}>
                            <div className={styles.mainDiv}>
                                <div className={styles.WeddingCardsMain} >

                                    <div className={cx(styles.muslimCard, styles.cardCommonStyle)}>
                                        <p>Var Parichay Patr</p>
                                    </div>
                                    <div className={cx(styles.muslimCard, styles.cardCommonStyle)}>
                                        <p>Vadhu Parichay Patr</p>
                                    </div><div className={cx(styles.muslimCard, styles.cardCommonStyle)}>
                                        <p>Sakharpuda</p>
                                    </div>
                                    <div className={cx(styles.muslimCard, styles.cardCommonStyle)}>
                                        <p>Haldi</p>
                                    </div>
                                    <div className={cx(styles.muslimCard, styles.cardCommonStyle)}>
                                        <p>Lagn Patrika</p>
                                    </div>
                                    <div className={cx(styles.muslimCard, styles.cardCommonStyle)}>
                                        <p>Reception</p>
                                    </div>
                                    <div className={cx(styles.muslimCard, styles.cardCommonStyle)}>
                                        <p>Pregnancy Announcement</p>
                                    </div>
                                    <div className={cx(styles.muslimCard, styles.cardCommonStyle)}>
                                        <p>Birth Announcement</p>
                                    </div>
                                    <div className={cx(styles.muslimCard, styles.cardCommonStyle)}>
                                        <p>Munj Invitation</p>
                                    </div>
                                    <div className={cx(styles.muslimCard, styles.cardCommonStyle)}>
                                        <p>Cradle Ceremony</p>                                    </div>
                                </div>
                            </div>
                        </div>
                    </List>
                </Dialog>
            </div>
        </>
    )
}

export default HinduWeddingModal
