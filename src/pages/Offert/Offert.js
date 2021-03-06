import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import styles from './Offert.module.css'

import project from '../../assets/project.jpg'
import room from '../../assets/room.jpg'
import camera from '../../assets/camera.jpg'

class Offert extends PureComponent {
    images = { project, room, camera }
    render = () => (
        <div className={`page ${styles.offer}`}>
            { Object.keys( this.images ).map(( el, i ) => {
                console.log(this.props)
                const graph = <div className={styles.graph}>
                                <img src={ this.images[ el ] } alt={`${el} icon`}/>
                            </div>
                const text = <div className={styles.text}>
                                <h2>{ this.props.text[ i ].heading }</h2>
                                <p>{ this.props.text[ i ].content }</p>
                            </div>
                return <div className={styles.item} key={ el }>
                        { i === 1 ? <>{text}{graph}</> : <>{graph}{text}</> }
                    </div>
            })}
            <Link to={{
                pathname: this.props.contactLink,
                id: 'contact'
            }}>{ this.props.contactLink.slice(1) }<i className='icon-right-small'/></Link>
        </div>
    )
}
const mapStateToProps = state => ({
    text: state.language.text.offert,
    contactLink: state.language.text.routes.contact
})
export default connect( mapStateToProps )( Offert )