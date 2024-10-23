import { useRef, useState } from 'react';

export default function VideoPlayer() {
  const videoRef = useRef();
  const [isPlaying, setIsPlaying] = useState(false);

  const playVideo = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const pauseVideo = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  return (
    <div className='max-w-[500px] space-y-4 p-8 mx-auto'>
      <h1 className='text-center font-bold text-3xl'>Video Oynatıcı</h1>
      <video
        ref={videoRef}
        src='https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4'
        poster='https://peach.blender.org/wp-content/uploads/title_anouncement.jpg?x11217'
        className='w-full'
        controls={false} 
      />
      <div className='flex justify-between items-center'>
        <button 
          onClick={pauseVideo} 
          className='text-orange-500 font-semibold'
          disabled={!isPlaying}
        >
          Duraklat
        </button>
        <div className='text-center'>
          {isPlaying ? 'Oynatılıyor' : 'Duraklatıldı'}
        </div>
        <button 
          onClick={playVideo} 
          className='text-indigo-500 font-semibold'
          disabled={isPlaying}
        >
          Oynat
        </button>
      </div>
    </div>
  );
}
