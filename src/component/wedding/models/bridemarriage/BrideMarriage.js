import React from 'react'
import Dialog from '@mui/material/Dialog';
import List from '@mui/material/List';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import styles from './BrideMarriage.module.scss'
import cx from 'classnames'
import img1 from '../../../images/arrow.png'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


function BrideMarriage(props) {
    const { open, handleClose } = props
    const [showCard,setShowCard]=useState(false)
    const navigate = useNavigate()
    return (
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
                            Bride Marriage Invitation
                        </Typography>

                    </Toolbar>
                </AppBar>
                <List>
                    <div className={styles.weddingCards}>
                        <div className={styles.mainDiv}>
                            <div className={styles.WeddingCardsMain} >

                                <div onClick={()=>setShowCard(true)} className={cx(styles.muslimCard, styles.cardCommonStyle)}>
                                    {/* <p>Bride Marriage Biodata</p> */}
                                </div>
                                <div className={cx(styles.muslimCard, styles.cardCommonStyle)}>
                                    {/* <p>Groom Marriage Biodata</p> */}
                                </div>
                                <div className={cx(styles.muslimCard, styles.cardCommonStyle)}>
                                    {/* <p>Engagement</p> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </List>
            </Dialog>
        </div>
    )
}

export default BrideMarriage
