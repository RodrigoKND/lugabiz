import React from 'react';
import { IoImageOutline } from 'react-icons/io5';

export default function ImageUpload({ onChange }) {
  return (
    <div className="mt-3 d-flex justify-content-center px-3 py-4 border border-1 border-secondary rounded bg-light">
      <div className="text-center">
        <IoImageOutline className="text-secondary mb-3" size={48} />
        <div className="d-flex justify-content-center align-items-center text-secondary">
          <label className="btn btn-outline-primary btn-sm" htmlFor="upload-image">
            <span>Sube tus imagenes para compartir</span>
            <input
              type="file"
              id="upload-image"
              className="d-none"
              accept="image/png, image/jpeg, image/jpg"
              multiple
              onChange={onChange}
            />
          </label>
        </div>
        <p className="small text-muted mt-2">PNG, JPG, JPEG</p>
      </div>
    </div>
  );
}