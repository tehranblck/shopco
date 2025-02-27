"use client";
import React, { useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";

export default function MyAccount() {
  const [profileImage, setProfileImage] = useState("/images/avatar/default-avatar.png");
  const fileInputRef = useRef(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setProfileImage(e.target.result);
        // Profil resmini localStorage'a kaydet
        localStorage.setItem("profileImage", e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  // Component yüklendiğinde localStorage'dan profil resmini al
  React.useEffect(() => {
    const savedImage = localStorage.getItem("profileImage");
    if (savedImage) {
      setProfileImage(savedImage);
    }
  }, []);

  return (
    <div className="my-account-content account-dashboard">
      <div className="profile-section mb_40">
        <div className="profile-image-container" style={{ textAlign: "center" }}>
          <div
            style={{
              position: "relative",
              width: "150px",
              height: "150px",
              margin: "0 auto",
              cursor: "pointer",
              borderRadius: "50%",
              overflow: "hidden"
            }}
            onClick={() => fileInputRef.current.click()}
          >
            <Image
              src={profileImage}
              alt="Profile"
              layout="fill"
              objectFit="cover"
              className="profile-image"
            />
            <div
              style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                background: "rgba(0,0,0,0.5)",
                color: "white",
                padding: "5px",
                textAlign: "center",
                fontSize: "12px"
              }}
            >
              Dəyişmək üçün klikləyin
            </div>
          </div>
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleImageChange}
            accept="image/*"
            style={{ display: "none" }}
          />
        </div>
      </div>
      <div className="mb_60">
        <h5 className="fw-5 mb_20">Salam Themesflat</h5>
        <p>
          Hesab paneliniz üzərindən{" "}
          <Link className="text_primary" href={`/my-account-orders`}>
            sifarişlərinizə
          </Link>
          {" "}baxa,{" "}
          <Link className="text_primary" href={`/my-account-edit`}>
            çatdırılma və ödəmə məlumatlarınızı
          </Link>
          {" "}idarə edə və{" "}
          <Link className="text_primary" href={`/my-account-edit`}>
            şifrənizi və hesab məlumatlarınızı
          </Link>
          {" "}dəyişə bilərsiniz.
        </p>
      </div>
    </div>
  );
}
