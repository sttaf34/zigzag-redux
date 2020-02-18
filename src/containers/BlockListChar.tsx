import { connect } from "react-redux"
import { Dispatch } from "redux"

import { GameAction, tapWordList } from "../actions"
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
  tapWordList: (newSelectedIndex: BlockListIndex) => void
}

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
  tapWordList: (newSelectedIndex: BlockListIndex): GameAction =>
    dispatch(tapWordList(newSelectedIndex))
})

export default connect(mapStateToProps, mapDispatchToProps)(BlockListChar)
