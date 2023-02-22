import React from 'react'
import cx from 'classnames'
import styles from './Wedding.module.scss'
import ExploreNowBanner from './ExploreNowBanner'
import WeddingCards from './WeddingCards/WeddingCards'

function Wedding() {
    return (
        <>
            <ExploreNowBanner styles={styles} cx={cx}/>
            <WeddingCards/>
        </>
    )
}

export default Wedding
