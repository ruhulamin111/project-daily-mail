import styles from '../styles/SendMail.module.css'
import CloseIcon from '@mui/icons-material/Close'
import { Button } from '@mui/material'
import { useForm } from "react-hook-form";
import { useDispatch } from 'react-redux';
import { closedSendMessage } from '../features/mailSlice';
import { collection, addDoc } from 'firebase/firestore';
import database from '../firebaseInit/firebase';

const SendMail = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const dispatch = useDispatch();
  const onSubmit = (formData) => {
    // firebase database data insert
    const dbInstance = collection(database, 'emails');
    addDoc(dbInstance, {
      to: formData.to,
      subject: formData.subject,
      message: formData.message,
      // timestamp: firebase.filestore.FieldValue.serverTimestamp,
    })
    dispatch(closedSendMessage());
  }

  return (
    <div className={styles.sendMail}>
      <div className={styles.sendMail_header}>
        <h3>New Message</h3>
        <CloseIcon
          onClick={() => dispatch(closedSendMessage())}
          className={styles.sendMail_close} />
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="email"
          placeholder="To"
          {...register('to', { required: true })} />
        {errors.to && <p className={styles.sendMail_error}>To is required!</p>}
        <input
          placeholder='Subject'
          type='text'
          {...register('subject', { required: true })} />
        {errors.to && <p className={styles.sendMail_error}>Subject is required!</p>}
        <input
          placeholder='Message'
          type='text'
          className={styles.sendMail_message}
          {...register('message', { required: true })} />
        {errors.to && <p className={styles.sendMail_error}>Message is required!</p>}
        <div className={styles.sendMail_options}>
          <Button className={styles.sendMail_button}
            variant="contained"
            color="primary"
            type="submit">Send</Button>
        </div>
      </form>
    </div>
  )
}

export default SendMail