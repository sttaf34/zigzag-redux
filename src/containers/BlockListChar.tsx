import { connect } from "react-redux"
import { Dispatch } from "redux"

import { GameAction, tapBlockList } from "../actions"
import { BlockListChar } from "../components/BlockListChar"
import { BlockListIndex } from "../others/types"

interface StateProps {
  label: string
  ownWordIndex: number
  ownCharIndex: number
}

interface OwnProps {
  label: string
  ownWordIndex: number
  ownCharIndex: number
}

const mapStateToProps = (_, ownProps: OwnProps): StateProps => {
  return ownProps
}

interface DispatchProps {
  tapBlockList: (newSelectedIndex: BlockListIndex) => void
}

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
  tapBlockList: (newSelectedIndex: BlockListIndex): GameAction =>
    dispatch(tapBlockList(newSelectedIndex))
})

export default connect(mapStateToProps, mapDispatchToProps)(BlockListChar)
