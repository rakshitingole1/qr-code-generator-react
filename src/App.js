import React, { useState } from 'react';
import QRCode from 'qrcode';
import './App.css';

function App() {
    const [text, setText] = useState('');
    const [qrCodeURL, setQRCodeURL] = useState('');

    const generateQRCode = () => {
        if (text.trim() !== '') {
            QRCode.toDataURL(text.trim(), (err, url) => {
                if (err) {
                    console.error('Error generating QR code:', err);
                } else {
                    setQRCodeURL(url);
                }
            });
        }
    };

    return (
        <div className="App">
            <h1 className="heading">QR Code Generator</h1>
            <div className="form-container">
                <input
                    type="url"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    placeholder="Enter text or URL"
                    required
                />
                <button onClick={generateQRCode} className="generateBtn">
                    Generate QR Code
                </button>
            </div>
            {qrCodeURL && (
                <div className="qr-code-container">
                    <img src={qrCodeURL} alt="QR Code" />
                </div>
            )}
        </div>
    );
}

export default App;
