import React, { Component } from 'react'
import PropTypes from 'prop-types'

import raf from 'raf'
import context from './context'

export default class SpringyScrollProvider extends Component {
  static propTypes = {
    children: PropTypes.node
  }

  state = {
    offset: 0
  }

  _lastOffsetY = 0

  componentDidMount() {
    this._lastOffsetY = this._currentPositionY()
    window.addEventListener('scroll', this._onScroll)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this._onScroll)
    this._cancelScroll()
  }

  render() {
    const {
      children
    } = this.props

    const {
      offset
    } = this.state

    return (
      <context.Provider value={offset}>
        {children}
      </context.Provider>
    )
  }

  _cancelScroll = () => {
    if (this._scrollRaf) {
      raf.cancel(this._scrollRaf)
      this._scrollRaf = null
    }
  }

  _cancelScrollPost = () => {
    if (this._scrollPostRaf) {
      raf.cancel(this._scrollPostRaf)
      this._scrollPostRaf = null
    }
  }

  _scroll = () => {
    this._cancelScroll()
    this._cancelScrollPost()

    const prevOffset = this._lastOffsetY
    const currOffset = this._currentPositionY()
    this._lastOffsetY = currOffset

    const offset = (currOffset - prevOffset)
    this.setState({ offset })

    this._scrollPostRaf = raf(this._scrollPost)
  }

  _scrollPost = () => {
    this._cancelScrollPost()

    const currOffset = this._currentPositionY()
    this._lastOffsetY = currOffset

    this.setState({ offset: 0 })
  }

  _onScroll = () => {
    this._cancelScrollPost()
    this._scrollRaf = raf(this._scroll)
  }

  _currentPositionY(scrollSpyContainer = document) {
    if (scrollSpyContainer === document) {
      if (window.pageXOffset !== undefined) {
        return window.pageYOffset
      } else if (document.compatMode === 'CSS1Compat') {
        return document.documentElement.scrollTop
      } else {
        return document.body.scrollTop
      }
    } else {
      return scrollSpyContainer.scrollTop
    }
  }
}
