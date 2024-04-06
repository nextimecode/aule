import React, { Component } from 'react'

interface CollapsibleProps {
  title: string
  children?: React.ReactNode
}

interface CollapsibleState {
  open: boolean
}

export class Collapsible extends Component<CollapsibleProps, CollapsibleState> {
  constructor(props: CollapsibleProps) {
    super(props)
    this.state = { open: false }
  }

  togglePanel = () => {
    this.setState(prevState => ({ open: !prevState.open }))
  }

  render() {
    return (
      <>
        <div
          onClick={this.togglePanel}
          className="collapse-header container p-3"
        >
          <span className="text-uppercase fw-bold">{this.props.title} ▼</span>
        </div>
        {this.state.open && (
          <div className="collapse-content p-3 pb-0">{this.props.children}</div>
        )}
      </>
    )
  }
}
