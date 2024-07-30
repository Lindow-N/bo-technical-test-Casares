import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Layout from '../../Layout';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import styles from './videoDetail.module.scss';

const PayloadModal = ({ open, handleClose, payload }) => (
  <Modal open={open} onClose={handleClose}>
    <div className={styles.modalContent}>
      <h2>Payload</h2>
      <pre>{JSON.stringify(payload, null, 2)}</pre>
      <Button onClick={handleClose}>Close</Button>
    </div>
  </Modal>
);

function VideoDetail() {
  const { id } = useParams();
  const [open, setOpen] = useState(false);

  const videos = [
    { id: 1, title: 'Video 1', description: 'Description 1' },
    { id: 2, title: 'Video 2', description: 'Description 2' },
  ];

  const video = videos.find((video) => video.id === parseInt(id));

  const [title, setTitle] = useState(video.title);
  const [description, setDescription] = useState(video.description);

  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = { id, title, description };
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Layout>
      <div className={styles.container}>
        <h1>Video Detail</h1>
        <form onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label htmlFor="title" className={styles.label}>
              Title
            </label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className={styles.input}
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="description" className={styles.label}>
              Description
            </label>
            <textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className={styles.textarea}
            />
          </div>
          <Button variant="contained" color="primary" type="submit" className={styles.button}>
            Submit
          </Button>
        </form>
        <PayloadModal open={open} handleClose={handleClose} payload={{ id, title, description }} />
      </div>
    </Layout>
  );
}

export default VideoDetail;
