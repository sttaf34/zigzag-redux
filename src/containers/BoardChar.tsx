import { connect } from "react-redux"
import { Dispatch } from "redux"

import { GameAction, tapBoard } from "../actions"
import { BoardChar } from "../components/BoardChar"
import { BoardIndex } from "../others/types"

interface StateProps {
  label: string
  ownXIndex: number
  ownYIndex: number
}

interface OwnProps {
  label: string
  ownXIndex: number
  ownYIndex: number
}

const mapStateToProps = (_, ownProps: OwnProps): StateProps => {
  return ownProps
}

interface DispatchProps {
  tapBoard: (boardIndex: BoardIndex) => void
}

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
  tapBoard: (boardIndex: BoardIndex): GameAction =>
    dispatch(tapBoard(boardIndex))
})

export default connect(mapStateToProps, mapDispatchToProps)(BoardChar)
