import moment from 'moment';

interface ModalDetailProps {
  data: any;
  lang: any;
}

export default function ModalDetail(props: ModalDetailProps) {
  const { data, lang } = props

  return (
    <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              {data.name}
              {' '}
              <span>
                ID -
                {' '}
                {data.id}
              </span>
            </h5>
          </div>
          <div className="modal-body">
            <p>{data.description}</p>
            <div className="lang">
              {lang.length > 0 && lang.map((lg: any) => (
                <p>
                  {lg}
                </p>
              ))}
            </div>
            <div className="time">
              <p>
                Created at
                {' '}
                <span>{moment(data.created_at).format('DD MMMM YYYY')}</span>
              </p>
              <p>
                Update at
                {' '}
                <span>{moment(data.updated_at).format('DD MMMM YYYY')}</span>
              </p>
            </div>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>
  )
}
