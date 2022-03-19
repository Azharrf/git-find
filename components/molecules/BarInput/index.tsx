import Input from '../../atoms/input'

interface BarInputProps {
    changeHandler: (e: any) => void;
    value: string;
}

export default function BarInput(props: BarInputProps) {
  const {
    changeHandler, value,
  } = props
  return (
    <>
      <div className="bar-input">
        <div className="icon-search">
          <i className="bx bx-search-alt" />
        </div>
        <Input
          type="search"
          name="search"
          id="search"
          placeholder="Search..."
          value={value}
          onChange={(e) => changeHandler(e.target.value)}
        />
      </div>
    </>
  )
}
