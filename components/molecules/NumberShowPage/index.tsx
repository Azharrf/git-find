interface NumberShowPageProps {
    showHandler: (value: string) => void;
}

export default function NumberShowPage(props: NumberShowPageProps) {
  const { showHandler } = props
  return (
    <>
      <select className="form-select" aria-label=".form-select-sm example" onChange={(e) => showHandler(e.target.value)}>
        <option value="5">5</option>
        <option value="10">10</option>
        <option value="20">20</option>
      </select>
    </>
  )
}
