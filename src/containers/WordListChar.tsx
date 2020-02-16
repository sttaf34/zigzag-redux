import { connect } from "react-redux"
import { Dispatch } from "redux"

import { GameAction, tapWordList } from "../actions"
import { WordListChar } from "../components/WordListChar"
import { WordListIndex } from "../others/types"

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
  tapWordList: (newSelectedIndex: WordListIndex) => void
}

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
  tapWordList: (newSelectedIndex: WordListIndex): GameAction =>
    dispatch(tapWordList(newSelectedIndex))
})

export default connect(mapStateToProps, mapDispatchToProps)(WordListChar)
