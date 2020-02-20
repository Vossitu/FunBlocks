import React from 'react'
import { connect } from 'react-redux'
import { Dispatch } from 'redux'

import { setActiveWorkspace } from 'FunBlocks/UI/Actions/IDE'
import { IDEWorkspace } from 'FunBlocks/UI/Reducers'
import { RootState } from 'FunBlocks/UI/Store'
import DownloadButton from './DownloadButton'
import MenuBarItem from './MenuBarItem'
import UploadButton from './UploadButton'

const styles = require('./IDE.module')

type Props = {
  activeWorkspace: IDEWorkspace,
  setActiveWorkspace(mode: IDEWorkspace): void,
}

class MenuBar extends React.PureComponent<Props> {

  render() {
    const activeWorkspace = this.props.activeWorkspace
    return (
      <div className={ styles.menuBar }>
        <div className={ styles.menuGroup }>
          <MenuBarItem
            icon="pen"
            label="Edit"
            pressed={ activeWorkspace === IDEWorkspace.Edit }
            onClick={ () => this.props.setActiveWorkspace(IDEWorkspace.Edit) }
          />
          <MenuBarItem
            icon="bug"
            label="Debug"
            pressed={ activeWorkspace === IDEWorkspace.Debug }
            onClick={ () => this.props.setActiveWorkspace(IDEWorkspace.Debug) }
          />
          <MenuBarItem
            icon="play"
            label="Run"
            pressed={ activeWorkspace === IDEWorkspace.Run }
            onClick={ () => this.props.setActiveWorkspace(IDEWorkspace.Run) }
          />
        </div>
        <div className={ styles.menuGroup }>
          <DownloadButton />
          <UploadButton />
        </div>
      </div>
    )
  }

}

const mapStateToProps = (state: RootState) => ({
  activeWorkspace: state.activeWorkspace,
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
  setActiveWorkspace: (mode: IDEWorkspace) => dispatch(setActiveWorkspace(mode)),
})

export default connect(mapStateToProps, mapDispatchToProps)(MenuBar)
