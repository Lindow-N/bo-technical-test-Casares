import React from 'react';
import { useHistory } from 'react-router-dom';
import Layout from '../../Layout';
import Button from '@material-ui/core/Button';
import styles from './videosList.module.scss';

function VideosList() {
  const history = useHistory();

  // Liste fictive de vidéos
  const videos = [
    { id: 1, title: 'Video 1' },
    { id: 2, title: 'Video 2' },
  ];

  const handleEdit = (id) => {
    history.push(`/videos/${id}/edit`);
  };

  return (
    <Layout>
      <div className={styles.container}>
        <h1 className={styles.title}>Liste des vidéos</h1>
        {videos.length > 0 ? (
          <ul className={styles.videoList}>
            {videos.map((video) => (
              <li key={video.id} className={styles.videoItem}>
                {video.title}
                <Button
                  variant="contained"
                  color="primary"
                  className={styles.editButton}
                  onClick={() => handleEdit(video.id)}>
                  Edit
                </Button>
              </li>
            ))}
          </ul>
        ) : (
          <p className={styles.noVideos}>Aucune vidéo disponible.</p>
        )}
      </div>
    </Layout>
  );
}

export default VideosList;
