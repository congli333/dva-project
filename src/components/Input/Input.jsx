import React, {Component} from 'react'
import style from './Input.scss'

export default class Input extends Component {
  constructor () {
    super()
    this.state = {
      val: ''
    }
  }
  render () {
    return <p className={style.input}>
      <input className={style.inputText} type='text' value={this.state.val} placeholder='请输入要搜索的内容' onChange={this.valChange}/>
      <i className={'icon iconfont icon-refresh' + style.inputIcon} onClick={this.refresh.bind(this)}></i>
    </p>
  }
  refresh () {
    this.setState({
      val: ''
    })
  }
  valChange = (e) => {
    this.setState({
      val: e.target.value
    })
  }
}