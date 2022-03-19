import { useCallback, useEffect, useState } from 'react';
import { getRepoDataUser } from '../../../services/user';
import ModalDetail from '../modalDetail/index'

interface ItemRepoProps {
  user: string;
  name: string;
  id: string;
  description: string;
  language: string;
  handleClick: (value: string) =>void;
}

export default function ItemRepo(props: ItemRepoProps) {
  const { user, name, id, description, language, handleClick } = props

  return (
    <>
      <div className="item-list-repo" key={id}>
        <div className="title-item-list-repo">
          <a
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
            onClick={() => handleClick(name)}
          >
            {name}
          </a>
          <span>{id}</span>
        </div>
        {description != 'null' ? (
          <p className="desc-item-list-repo">{description}</p>
        ) : (
          <p className="desc-item-list-repo" />
        )}
        <p className="lang-item-list-repo">
          <span className={`color-language ${language}`} />
          {' '}
          {language}
        </p>
      </div>
    </>
  )
}
