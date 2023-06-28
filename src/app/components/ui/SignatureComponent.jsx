import React, { useRef, useEffect, useState } from 'react';
import SignaturePad from 'react-signature-canvas';
import Image from 'next/image';
const SignatureComponent = () => {
  const sigCanvas = useRef({});
  const [imageURL, setImageURL] = useState(null);

  const clear = () => {
    sigCanvas.current.clear();
  };

  const save = () => {
    setImageURL(sigCanvas.current.getTrimmedCanvas().toDataURL('image/png'));
  };

  return (
    <div>
      <SignaturePad canvasProps={{width: 500, height: 200}} ref={sigCanvas} />
      <button onClick={clear}>Clear</button>
      <button onClick={save}>Save</button>
      {imageURL ? <Image src={imageURL} alt="signature" /> : null}
    </div>
  );
};

export default SignatureComponent;
