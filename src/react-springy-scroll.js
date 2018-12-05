import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { Spring } from 'react-spring'
import random from 'random'

import context from './context'
import Provider from './provider'

const tension = random.normal(170, 20)
const friction = random.normal(26, 5)

export default class ReactSpringyScroll extends Component {
  static Provider = Provider

  static propTypes = {
    children: PropTypes.node,
    config: PropTypes.object
  }

  componentWillMount() {
    this._config = this.props.config || {
      tension: tension(),
      friction: friction()
    }
  }

  render() {
    const {
      children,
      config,
      ...rest
    } = this.props

    console.log(this._config)
    return (
      <context.Consumer>
        {offset => (
          <Spring
            from={{ offset: 0 }}
            to={{ offset }}
            config={this._config}
            {...rest}
          >
            {props => (
              <>
                {React.Children.map(children, (child) => (
                  React.cloneElement(child, {
                    style: {
                      transform: `translateY(${props.offset}px)`
                    }
                  })
                ))}
              </>
            )}
          </Spring>
        )}
      </context.Consumer>
    )
  }
}
