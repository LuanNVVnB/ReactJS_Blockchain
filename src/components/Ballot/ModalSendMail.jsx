import React,{useState} from 'react'
import { Button, Modal } from 'react-bootstrap'
import * as BallotActions from '../../actions/ballot-manager/ballotActions'
import { useDispatch } from 'react-redux';
import { Trans } from 'react-i18next';
import Loading from './Loading';
function ModalSendMail(props) {
  const [ passwordTo, setPasswordEmail] = useState();
  const dispatch = useDispatch()
  const [loading,setLoading] = useState(false);
  const onSubmit = () => {
    const dataSend = {
      passwordTo, ...props.data
    }
    dispatch(BallotActions.fnSendEmail(dataSend));
    setTimeout(()=>{
      setLoading(true);
        props.onHide()
    },3000);
    setLoading(false);
   
  }
  return (
    <>
    {
      loading ? <Loading/>:
   
    <Modal
      {...props}
      size="ms"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body>
       <form>
            <div className="form-group">
                <label htmlFor="name">password</label>
                <input onChange={item => { setPasswordEmail(item.target.value) }}  type="text" className="form-control" name="name"  placeholder="password" />
            </div>
        </form>
      </Modal.Body>
      <Modal.Footer>

        <Button variant="secondary" onClick={props.onHide}><Trans i18nKey={'quiz.cancel'} /></Button>
        <Button variant="primary" onClick={onSubmit}><Trans i18nKey={'quiz.submit'} /></Button>
      </Modal.Footer>
    </Modal> }
    </>
  )
}

export default ModalSendMail