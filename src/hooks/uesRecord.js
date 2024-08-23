import { useState, useRef } from 'react';

// 커스텀 훅
const useRecord = () => {
    const [isRecording, setIsRecording] = useState(false); // 녹음 중 상태
    const [audioUrl, setAudioUrl] = useState(null); // 오디오 URL
    const mediaRecorderRef = useRef(null); // MediaRecorder 참조
    const audioChunksRef = useRef([]); // 오디오 데이터 조각

    // 녹음 시작 함수
    const startRecording = async () => {
        setAudioUrl(null) // 초기화

        const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        mediaRecorderRef.current = new MediaRecorder(stream);
        mediaRecorderRef.current.ondataavailable = (event) => {
            audioChunksRef.current.push(event.data);
        };
        mediaRecorderRef.current.onstop = () => {
            const audioBlob = new Blob(audioChunksRef.current, { type: 'audio/wav' });
            const audioUrl = URL.createObjectURL(audioBlob);
            setAudioUrl(audioUrl);
            audioChunksRef.current = [];
        };
        mediaRecorderRef.current.start();
        setIsRecording(true);
    };

    // 녹음 중지 함수
    const stopRecording = () => {
        mediaRecorderRef.current.stop();
        setIsRecording(false);
    };

    return {
        isRecording,
        audioUrl,
        startRecording,
        stopRecording
    };
};

export default useRecord;
