import React from 'react'
import coupleImage from '../images/image19.png'
function ExploreNowBanner({ styles,cx }) {
    return (
        <div className={styles.exploreNowBannerMain}>
            <div className={styles.exploreNowBanner}>
                <div className={styles.linearGradient}>
                    <div className={styles.flowerBackground}>
                        <img src={coupleImage} />
                        <div className={styles.tagLine}>
                            <p>
                                Select and Customize card for your special day
                            </p>
                            <button className={styles.exploreButton}>
                                Explore Now
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default ExploreNowBanner