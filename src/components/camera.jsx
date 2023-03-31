import React, { useState, useEffect, useRef } from 'react';

function Camera() {
  const [stream, setStream] = useState(null);
  const [capturedImage, setCapturedImage] = useState(null);
  const videoRef = useRef();
  const canvasRef = useRef();

  useEffect(() => {
    async function enableStream() {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      setStream(stream);
    }
    enableStream();
  }, []);

  useEffect(() => {
    if (videoRef.current && stream) {
      videoRef.current.srcObject = stream;
      videoRef.current.play();
    }
  }, [stream]);

  const capture = () => {
    const canvas = canvasRef.current;
    canvas.width = videoRef.current.videoWidth;
    canvas.height = videoRef.current.videoHeight;
    canvas.getContext('2d').drawImage(
      videoRef.current,
      0,
      0,
      canvas.width,
      canvas.height
    );
    const dataURL = canvas.toDataURL('image/png');
    setCapturedImage(dataURL);
    stream.getTracks().forEach(track => track.stop()); // Stop the camera
  };

  return (
    <div>
      {capturedImage ? (
        <img src={capturedImage} alt="Captured" />
      ) : (
        <div>
          <video ref={videoRef} />
          <button onClick={capture}>Capture</button>
          <canvas ref={canvasRef} style={{ display: 'none' }} />
        </div>
      )}
    </div>
  );
}

export default Camera;
