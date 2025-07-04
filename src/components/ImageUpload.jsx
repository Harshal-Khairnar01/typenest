"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";

export default function ImageUpload({ returnImage, preloadedImage }) {
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState(null);

 

  const CLOUDINARY_CLOUD_NAME = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
  const CLOUDINARY_UPLOAD_PRESET =
    process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET;

  const handleImageAsFile = async (e) => {
    const image = e.target.files[0];
    if (image) {
      uploadToCloudinary(image);
    }
  };

  const uploadToCloudinary = async (image) => {
    setLoading(true);
    const formData = new FormData();
    formData.append("file", image);
    formData.append("upload_preset", CLOUDINARY_UPLOAD_PRESET);
    formData.append("folder", "cms_images");

    try {
      const response = await axios.post(
        `https://api.cloudinary.com/v1_1/${CLOUDINARY_CLOUD_NAME}/image/upload`,
        formData
      );

      const url = response.data.secure_url;
      setImageUrl(url);
      returnImage(url);
    } catch (error) {
      if (error.response) {
        console.error("Cloudinary error response:", error.response.data);
      }
      alert("Error uploading image. Please check console for details.");
    } finally {
      setLoading(false);
    }
  };

  if (preloadedImage) {
    return (
      <>
        <label>
          <span className="bg-gray-500/10 border border-gray-200 border-dashed p-3 rounded cursor-pointer">
            {loading ? "Uploading..." : "Update Cover Image"}
          </span>
          <input
            type="file"
            onChange={handleImageAsFile}
            hidden
            disabled={loading}
          />
        </label>
        <Image
          width={300}
          height={170}
          src={preloadedImage}
          alt="Uploaded"
          className="max-w-xs h-auto border border-gray-400 rounded-md"
        />
      </>
    );
  }

  return (
    <div className=" py-2">
      <label>
        <span className="bg-gray-500/10 border border-gray-200 border-dashed p-3 rounded cursor-pointer">
          {loading ? "Uploading..." : "Upload Cover Image"}
        </span>
        <input
          type="file"
          onChange={handleImageAsFile}
          hidden
          disabled={loading}
        />
      </label>
      {imageUrl && (
        <div className="mt-2">
          <h3>Uploaded Successfully</h3>
          <img
            src={imageUrl}
            alt="Uploaded"
            className="max-w-xs h-auto border border-gray-400 rounded-md"
          />
        </div>
      )}
    </div>
  );
}
