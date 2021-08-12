import React from 'react'

export function childrenWithProps(props) {
  React.children.map(props.children, child => {
    return React.cloneElement(child, {
      ...props, ...child.props
    })
  })
}