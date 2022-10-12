import React from 'react';
import styled from 'styled-components';

import useControllableValue from '@alicloud/react-hook-controllable-value';

import {
  IPropsRating
} from '../../types';

import RatingUnderlay from './rating-underlay';
import RatingOverlay from './rating-overlay';

const ScRating = styled.span`
  display: inline-block;
  position: relative;
  vertical-align: middle;
`;

function getWidthPercentage(value: number): string | 0 {
  const percentage = value / 5;
  
  if (percentage <= 0) {
    return 0;
  }
  
  if (percentage >= 1) {
    return '100%';
  }
  
  return `${percentage * 100}%`;
}

export default function Rating({
  value,
  defaultValue,
  onChange,
  ...props
}: IPropsRating): JSX.Element {
  const [controllableValue] = useControllableValue<number>(0, value, defaultValue, onChange); // TODO setControllableValue 还没有用起来，也就是这个组件暂时只有展示功能，没有设置功能
  
  return <ScRating role="group" {...props}>
    <RatingUnderlay />
    <RatingOverlay {...{
      style: {
        width: getWidthPercentage(controllableValue)
      }
    }} />
  </ScRating>;
}

/*
class RatingItem extends React.Component {
  static displayName = 'RatingItem';
  static propTypes = {
    index: PropTypes.number.isRequired,
    activeIndex: PropTypes.number,
    activeValue: PropTypes.any, // 当前选中的 value
    hoverIndex: PropTypes.number,
    value: PropTypes.any, // 此 item value
    onEnter: PropTypes.func.isRequired,
    onClick: PropTypes.func.isRequired
  };
  
  _handleEnter = () => {
    const {
      index,
      onEnter
    } = this.props;
    
    onEnter(index);
  };
  _handleClick = () => {
    const {
      index,
      onClick
    } = this.props;
    onClick(index);
  };
  
  render() {
    /!*
     * 1. 闲置状态（鼠标未 hover）
     *                      .is-active
     * ⌜ .is-active-indirect ⌝  |
     * |                     |  | 
     * ◉ .................. ◉ ◉ ◎ ... ◎
     *          activeIndex ⤴
     * 
     * ----------------------------------
     * 
     * 2. 交互状态（鼠标 hover）
     *                       .is-hovered
     * ⌜ .is-hovered-indirect ⌝  |
     * |                      |  |
     * ◉ ................... ◉ ◉ ◎ ... ◎
     *            hoverIndex ⤴
     * 
     * NOTE
     * 1. 鼠标 hover 的 CSS 优先级需高于 active 状态（后定义即可）
     * 2. 「激活 / 鼠标覆盖」的需计算是否「好」rating TODO 参数配置何为「好中差」
     *!/
    const {
      index,
      activeIndex,
      activeValue,
      hoverIndex,
      value
    } = this.props;
    const active = index === activeIndex;
    const className = classNames('val-' + value, hoverIndex >= 0 ? { // val-__ 用于方便开发者查看 鼠标划过的时候清除 active 样式
      'is-hovered': index === hoverIndex,
      'is-hovered-indirect': index < hoverIndex
    } : {
      'is-active': active,
      'is-active-indirect': index < activeIndex,
      'is-active-half': active && activeValue && !!(activeValue % 1)
    });
    
    return <label className={className} onMouseEnter={this._handleEnter} onClick={this._handleClick}><Icon type="star" /></label>;
  }
}

export default class extends React.Component {
  static displayName = 'Rating';
  static propTypes = {
    value: PropTypes.number,
    values: PropTypes.arrayOf(PropTypes.number),
    readOnly: PropTypes.bool,
    showValue: PropTypes.bool
  };
  static defaultProps = {
    value: 0,
    values: [1, 2, 3, 4, 5], // 值应该是个等差升序数列
    readOnly: false,
    onChange: noop
  };
  
  state = {
    value: this.props.value,
    hoverIndex: -1 // 第几个元素处于鼠标 hover 状态
  };
  
  _handleLeave = () => {
    const {
      readOnly
    } = this.props;
    
    if (readOnly) {
      return;
    }
    
    this.setState({
      hoverIndex: -1
    });
  };
  _handleItemEnter = index => {
    const {
      readOnly
    } = this.props;
    
    if (readOnly) {
      return;
    }
    
    this.setState({
      hoverIndex: index
    });
  };
  _handleItemClick = index => {
    const {
      readOnly,
      values,
      onChange
    } = this.props;
    
    if (readOnly) {
      return;
    }
    
    this.setState({
      value: values[index]
    });
    
    onChange(values[index]);
  };
  
  render() {
    const {
      values,
      readOnly,
      showValue
    } = this.props;
    const {
      hoverIndex,
      value
    } = this.state;
    
    return <span className={classNames('h5try-ra-form-rating', {
      'is-readonly': readOnly
    })} onMouseLeave={this._handleLeave}>
      {values.map((v, index) => <RatingItem key={index} {...{
        index,
        activeIndex: this._getActiveIndex(),
        activeValue: value,
        hoverIndex,
        value: v,
        onEnter: this._handleItemEnter,
        onClick: this._handleItemClick
      }} />)}
      {showValue ? <label className="value-display" tabIndex="0"><Num {...{ value, precision: 1 }} /></label> : null}
    </span>;
  }
  
  componentWillReceiveProps(nextProps) {
    if ('value' in nextProps) {
      this.setState({
        value: nextProps.value
      });
    }
  }
  
  _getActiveIndex() {
    let {
      value
    } = this.state;
    
    value = Number(value);
    
    if (isNaN(value) || value <= 0) {
      return -1;
    }
    
    const {
      values
    } = this.props;
    let index = -1;
    
    values.some((v, k) => {
      index = k;
      
      return v >= value;
    });
    
    return index;
  }
};*/
