interface SuggestionsProps {
    data: any;
    handleClick: (value: string) => void;
}

export default function Suggestions(props: SuggestionsProps) {
  const { data, handleClick } = props

  return (
    <>
      <ul className="suggestions">
        {data.map((suggestion: { login: string }, i: number) => (
          i < 5 && <li key={i} className="item-suggestion" onClick={() => handleClick(suggestion.login)}>{suggestion.login}</li>
        ))}
      </ul>
    </>
  )
}
