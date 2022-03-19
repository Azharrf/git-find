import BarInput from '../../molecules/BarInput'
import Suggestions from '../../molecules/Suggestion'

interface HeadMainProps {
    username: string;
    suggestions: any;
    userChangeHandler: (text: string) => void;
    userSuggestionHandler: (text: string) => void;
}

export default function HeadMain(props: HeadMainProps) {
  const {
    username, suggestions, userChangeHandler, userSuggestionHandler,
  } = props
  return (
    <div className="col-12 header-content">
      <h1>Find user</h1>
      <p>Find github user by displaying data and repository user</p>
      <div className="input-search">
        <BarInput value={username} changeHandler={userChangeHandler} />
        {suggestions.length > 0 && (
          <Suggestions data={suggestions} handleClick={userSuggestionHandler} />
        )}
      </div>
    </div>
  )
}
