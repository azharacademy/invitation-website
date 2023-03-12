import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import List from '@mui/material/List';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import styles from './WeddingModel.module.scss'
import cx from 'classnames'
import img1 from '../../images/arrow.png'
import EgagementModel from '../models/engagement/EgagementModel';
import { useState } from 'react';
import BrideMarriage from '../models/bridemarriage/BrideMarriage';
import GroomMarriage from '../models/grommarraige/GroomMarriage';
import Haldi from '../models/haldi/Haldi';
import Mahendi from '../models/mahndi/Mahendi';
import Sachak from '../models/sachak/Sachak';



export default function WeddingModel(props) {
  const [engagement,setEngagement] =useState(false)
  const [bride,setBride] =useState(false)
  const [groom,setGroom] =useState(false)
  const [haldi,setHaldi] =useState(false)
  const [mehndi,setMehndi] =useState(false)
  const [sachak,setSachak] =useState(false)

  const { open, handleClose } = props
  
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
              Muslim Marriage Invitation
            </Typography>

          </Toolbar>
        </AppBar>
        <List>
          <div className={styles.weddingCards}>
            <div className={styles.mainDiv}>
              <div className={styles.WeddingCardsMain} >

                <div onClick={()=> setBride(true)} className={cx(styles.muslimCard, styles.cardCommonStyle)}>
                  <p>Bride Marriage Biodata</p>
                </div>
                <div onClick={()=> setGroom(true)} className={cx(styles.muslimCard, styles.cardCommonStyle)}>
                  <p>Groom Marriage Biodata</p>
                </div>
                <div onClick={()=> setEngagement(true)} className={cx(styles.muslimCard, styles.cardCommonStyle)}>
                  <p>Engagement</p>
                </div>
                <div onClick={()=> setHaldi(true)} className={cx(styles.muslimCard, styles.cardCommonStyle)}>
                  <p>Haldi</p>
                </div>
                <div onClick={()=> setMehndi(true)} className={cx(styles.muslimCard, styles.cardCommonStyle)}>
                  <p>Mehendi</p>
                </div>
                <div onClick={()=> setSachak(true)} className={cx(styles.muslimCard, styles.cardCommonStyle)}>
                  <p>Sachak</p>
                </div>
                <div className={cx(styles.muslimCard, styles.cardCommonStyle)}>
                  <p>Nikah</p>
                </div>
                <div className={cx(styles.muslimCard, styles.cardCommonStyle)}>
                  <p>Reception</p>
                </div>
                <div className={cx(styles.muslimCard, styles.cardCommonStyle)}>
                  <p>Jumagi</p>
                </div>
                <div className={cx(styles.muslimCard, styles.cardCommonStyle)}>
                  <p>Birth Announcement</p>
                </div>
                <div className={cx(styles.muslimCard, styles.cardCommonStyle)}>
                  <p>Cradle Ceremony</p>
                </div>
                <div className={cx(styles.muslimCard, styles.cardCommonStyle)}>
                  <p>Marriage Anniversary</p>
                </div>
              </div>
            </div>
          </div>
        </List>
      </Dialog>
      {engagement ? <EgagementModel handleClose={handleClose}  open={open}  /> : ''}
      {bride ? <BrideMarriage handleClose={handleClose}  open={open}  /> : ''}
      {groom ? <GroomMarriage handleClose={handleClose}  open={open}  /> : ''}
      {haldi ? <Haldi handleClose={handleClose}  open={open}  /> : ''}
      {mehndi ? <Mahendi handleClose={handleClose}  open={open}  /> : ''}
      {sachak ? <Sachak handleClose={handleClose}  open={open}  /> : ''}

    </div>
  );
}