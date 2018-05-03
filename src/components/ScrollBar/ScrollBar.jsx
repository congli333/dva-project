import React, {Component} from 'react'
import {connect} from 'dva'
import style from './scroll.scss'

class ScrollBar extends Component {
  render () {
    const list = this.props.scroll.length > 0 ? this.props.scroll : []
    return (
      <div className={style.scrollBar}>
        <ul className={style.scroll}>
          {
            list.map((v, ind) => {
              return <li className={v.flag ? style.scrollCur : style.scrollItem} key={v.id} onClick={this.change.bind(this, ind)}>
                <span>{v.text}</span>
              </li>
            })
          }
        </ul>
      </div>
    )
  }
  componentDidMount () {
    this.props.dispatch({type: 'dva/fetch'})
  }
  change (ind) {
    const {history, dispatch} = this.props
    // 改变当前的数据
    if (ind !== 0) {
      history.push('/common')
    } else {
      history.push('/')
    }
    dispatch({type: 'dva/update_scroll', ind})
  }
}

function mapState (state) {
  return {
    scroll: state.dva.scrollList
  }
}

export default connect(mapState, null, null, {pure: false})(ScrollBar)