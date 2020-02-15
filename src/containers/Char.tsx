import { connect } from "react-redux"
import { Dispatch } from "redux"

import { CharAction, select } from "../actions"
import { Char } from "../components/Char"
import { CharState } from "../reducers/char"
import { WordCharIndex } from "../others/types"

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

const mapStateToProps = (state: CharState, ownProps: OwnProps): StateProps => {
  return ownProps
}

interface DispatchProps {
  select: (newSelectedIndex: WordCharIndex) => void
}

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
  select: (newSelectedIndex: WordCharIndex): CharAction =>
    dispatch(select(newSelectedIndex))
})

export default connect(mapStateToProps, mapDispatchToProps)(Char)
