import video from '../../Video1/video1.mov'
import './video.css'
const VideoCard = () => {
    return (
        <div className='video'>
            <video src={video} autoPlay muted loop></video>
        </div>
    )
}

export default VideoCard