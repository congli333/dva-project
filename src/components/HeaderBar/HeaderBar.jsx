import React, {Component} from 'react'
import style from './headerBar.scss'

export default class HeaderBar extends Component {
  render () {
    const {leftIcon, rightIcon, tit} = this.props
    return (
      <div className={style.headerBar}>
        <i className = {'icon iconfont ' + leftIcon + style.leftIcon}></i>
        <div>{tit}</div>
        <i className = {'icon iconfont ' + rightIcon + style.rightIcon}></i> 
      </div>
    )
  }
}