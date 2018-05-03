import React, {Component} from 'react';
import { connect } from 'dva';
import style from './IndexPage.scss'
import Input from '../../components/Input'
import HeaderBar from '../../components/HeaderBar'
import ScrollBar from '../../components/ScrollBar'
import {Route} from 'dva/router'
import Common from '../CommonPage'
import Echarts from 'echarts'

class IndexPage extends Component {
  render () {
    console.log(this.props)
    const tit = <p><i className='icon iconfont icon-logo'></i><span>译见|新闻媒体</span></p>
    return (
      <div className={style.wrapper}>
        <Input />
        <HeaderBar leftIcon='icon-list' rightIcon='icon-search' tit={tit} />
        <ScrollBar history={this.props.history}/>
        <div>
          <Route path='/common' component={Common}/>
          <section className={style.events}>
          <h3 className={style.eventsTit}>
            <span>EVENTS</span>
            <i className='icon iconfont icon-asrow-right'></i>
          </h3>
          <p className={style.dsc}>贵州雷山县返现一例H7N9禽流感病例</p>
          <div className={style.tab}>
            <p className={style.tabList}>
              <span className={style.tabItem + ' ' + style.cur}>事件态势</span>
              <span className={style.tabItem}>传播路径</span>
            </p>
            <canvas ref='canvas' className={style.canvas}/>
          </div>
        </section>
        </div>
      </div>
    )
  }
  componentDidMount () {
    this.props.dispatch({type: 'dva/events'})
    // 获取到canvas标签
    const can = this.refs.canvas
    console.dir(Echarts)
    const myChart = Echarts.init(can)
    myChart.setOption({
      xAxis : [
          {
              type : 'category',
              boundaryGap : false,
              data : [
                "7.22",
                "8.18",
                "9.25",
                "10.24",
                "11.04",
                "11.14",
                "11.18"
              ],
          }
      ],
      yAxis : [
          {
              type : 'value',
              data: [
                100,
                1000,
                2000,
                3000,
                4000
              ]
          }
      ],
      series : [
          {
              name:'成交',
              type:'line',
              itemStyle: {normal: {areaStyle: {type: 'default'}}},
              data: [100, 1000, 3000, 4000, 2000, 3000, 100],
          }
      ]
  })
  }
}

function mapState (state) {
  return {
    events: state.events
  }
}

export default connect(mapState)(IndexPage);
