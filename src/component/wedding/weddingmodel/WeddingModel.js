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



export default function WeddingModel(props) {
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

                <div className={cx(styles.muslimCard, styles.cardCommonStyle)}>
                  <p>Grand Opening Ceremony</p>
                </div>
                <div className={cx(styles.muslimCard, styles.cardCommonStyle)}>
                  <p>Vastu Shanti</p>
                </div><div className={cx(styles.muslimCard, styles.cardCommonStyle)}>
                  <p>Political Program</p>
                </div>
                <div className={cx(styles.muslimCard, styles.cardCommonStyle)}>
                  <p>Haldi Kumkum</p>
                </div>
                <div className={cx(styles.muslimCard, styles.cardCommonStyle)}>
                  <p>Tilgud</p>
                </div>
                <div className={cx(styles.muslimCard, styles.cardCommonStyle)}>
                  <p>School Reunion</p>
                </div>
              </div>
            </div>
          </div>
        </List>
      </Dialog>
    </div>
  );
}