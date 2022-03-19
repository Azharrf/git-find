interface DropdownItemProps {
    title: string;
    handleClick: () => void;
}

export default function DropdownItem(props: DropdownItemProps) {
  const { title, handleClick } = props
  return (
    <li><a className="dropdown-item" onClick={() => handleClick()}>{title}</a></li>
  )
}
