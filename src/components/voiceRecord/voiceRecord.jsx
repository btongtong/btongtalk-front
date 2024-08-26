import './voiceRecord.css'
import useRecord from "../../hooks/useRecord";
import { MdOutlineKeyboardVoice } from "react-icons/md";
import { FaRegCircleStop } from "react-icons/fa6";
import useFillColor from "../../hooks/useFillColor";

const VoiceRecord = (props) => {
    const { isRecording, audioUrl, startRecording, stopRecording} = useRecord();
    const { fillColor, handleMouseOver, handleMouseLeave } = useFillColor('var(--gray-60)', 'var(--primary-color)');

    return (
        <div className='voice-record-box'>
            {audioUrl && !isRecording && (
                <div className='audio-player'>
                    <audio controls src={audioUrl}></audio>
                </div>
            )}
            {!isRecording && (
                <button className='record-btn' onClick={startRecording}>
                    <MdOutlineKeyboardVoice size={'32px'} fill={fillColor} onMouseOver={handleMouseOver} onMouseLeave={handleMouseLeave}/>
                </button>
            )}
            {isRecording && (
                <button className='stop-btn' onClick={stopRecording}>
                    <FaRegCircleStop size={'32px'} fill={fillColor} onMouseOver={handleMouseOver} onMouseLeave={handleMouseLeave} />
                </button>
            )}
        </div>
    )
}

export default VoiceRecord;