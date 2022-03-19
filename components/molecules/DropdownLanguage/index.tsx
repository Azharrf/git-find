import DropdownItem from './DropdownItem'

interface DropdownLanguageProps {
    handleLanguage: (value: string) => void;
    disable?: boolean;
}

export default function DropdownLanguage(props: DropdownLanguageProps) {
  const { handleLanguage, disable } = props
  return (
    <>
      {disable ? (
        <button className="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false" disabled>Language</button>
      ) : (
        <button className="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">Language</button>
      )}
      <ul className="dropdown-menu dropdown-menu-end">
        <DropdownItem title="All" handleClick={() => handleLanguage('all')} />
        <DropdownItem title="Html" handleClick={() => handleLanguage('html')} />
        <DropdownItem title="Css" handleClick={() => handleLanguage('css')} />
        <DropdownItem title="Javascrip" handleClick={() => handleLanguage('javascript')} />
        <DropdownItem title="Typescript" handleClick={() => handleLanguage('typescript')} />
        <DropdownItem title="Ruby" handleClick={() => handleLanguage('ruby')} />
        <DropdownItem title="Python" handleClick={() => handleLanguage('python')} />
      </ul>
    </>
  )
}
