"use client";
import React, { useRef, useState } from "react";
import classes from "./image-picker.module.css";
import Image from "next/image";

const ImagePicker = ({ label, name }: { label: string; name: string }) => {
  const [pickedImage, setPickedImage] = useState<string | null>(null);
  const imageInputRef = useRef<HTMLInputElement>(null);
  function handlePickImage() {
    imageInputRef.current?.click();
  }
  function handleImageChange(event: React.ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];
    if (file) {
      setPickedImage(URL.createObjectURL(file));
    }
    // Another way to read the file
    // if (!file) {
    //   return;
    // }
    // const fileReader = new FileReader();
    // fileReader.onload = () => {
    //   setPickedImage(fileReader.result as string);
    // };
    // fileReader.readAsDataURL(file);
  }
  return (
    <div className={classes.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={classes.controls}>
        <div className={classes.preview}>
          {!pickedImage && <p>No image selected yet </p>}
          {pickedImage && <Image src={pickedImage} alt="picked" fill />}
        </div>
        <input
          type="file"
          id={name}
          name={name}
          accept="image/png image/jpeg image/jpg"
          className={classes.input}
          ref={imageInputRef}
          onChange={handleImageChange}
        />
        <button
          type="button"
          className={classes.button}
          onClick={handlePickImage}
        >
          Pick an Image
        </button>
      </div>
    </div>
  );
};

export default ImagePicker;
