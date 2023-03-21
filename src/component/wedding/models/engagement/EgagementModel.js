import React from 'react'
import Dialog from '@mui/material/Dialog'
import List from '@mui/material/List'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import styles from './Engagement.module.scss'
import cx from 'classnames'
import img1 from '../../../images/arrow.png'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import card2_thumbnail from '../../../MuslimMarriage/Card2/card2Images/thumbnail.png'
import card1_thumbnail from '../../../MuslimMarriage/Card1/card1Images/thumbnail.png'
import { height, margin } from '@mui/system'
function EgagementModel(props) {
  const { open, handleClose } = props
  const [showCard, setShowCard] = useState(false)
  const navigate = useNavigate()
  if (showCard) {
    console.log('log is happing')
  }

  return (
    <div>
      <Dialog fullScreen open={open} onClose={handleClose}>
        <AppBar sx={{ position: 'relative' }}>
          <Toolbar>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              <button
                style={{ border: 'none' }}
                edge="start"
                color="inherit"
                onClick={handleClose}
                aria-label="close"
              >
                <img src={img1} alt="!" style={{ marginRight: ' 0.5rem' }} />
              </button>
              Engagement Invitation
            </Typography>
          </Toolbar>
        </AppBar>
        <List>
          <div className={styles.weddingCards}>
            <div className={styles.mainDiv}>
              <div className={styles.WeddingCardsMain}>
                <div
                  style={{ backgroundImage: `url(${card2_thumbnail})` }}
                  onClick={() => navigate('/card2')}
                  className={cx(
                    styles.engagementFirst,
                    styles.cardCommonStyle,
                    styles.card1,
                    styles.commonCardStyle,
                  )}
                >
                  {/* <p>Bride Marriage Biodata</p> */}
                </div>
                <div
                  style={{ backgroundImage: `url(${card1_thumbnail})` }}
                  onClick={() => navigate('/card1')}
                  className={cx(
                    styles.engagementSecond,
                    styles.cardCommonStyle,
                    styles.commonCardStyle,
                  )}
                >
                  {/* <p>Groom Marriage Biodata</p> */}
                </div>
                <div
                  className={cx(
                    styles.engagementThird,
                    styles.cardCommonStyle,
                    styles.commonCardStyle,
                  )}
                >
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

export default EgagementModel
