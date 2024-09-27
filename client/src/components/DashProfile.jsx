/* eslint-disable no-unused-vars */
import { useSelector, useDispatch } from "react-redux";
import { Alert, Button, TextInput } from "flowbite-react";
import { useEffect, useRef, useState } from "react";
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from "firebase/storage";

import { app } from "../firebase";

import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

import {
  updateStart,
  updateSuccess,
  updateFailure,
} from "../redux/user/userSlice";

function DashProfile() {
  const [formData, setFormData] = useState({});
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.user);

  const [profileImage, setProfileImage] = useState(null);
  const [imageFileUrl, setImageFileUrl] = useState(null);
  const [imageFileUploadingProgress, setImageFileUploadingProgress] = useState(null);
  const [imageFileUploadError, setImageFileUploadError] = useState(null);
  const fileRef = useRef();

  // Handle image selection
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfileImage(file);
      setImageFileUrl(URL.createObjectURL(file));
    }
  };

  // Upload image to Firebase Storage
  useEffect(() => {
    if (profileImage) {
      uploadImage();
    }
  }, [profileImage]);

  const uploadImage = async () => {
    setImageFileUploadError(null);
    const storage = getStorage(app);
    const fileName = new Date().getTime() + profileImage.name;
    const storageRef = ref(storage, fileName);
    const uploadTask = uploadBytesResumable(storageRef, profileImage);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setImageFileUploadingProgress(progress.toFixed(0));
      },
      (error) => {
        setImageFileUploadError("Could not upload the image. (File must be less than 2MB)");
        setImageFileUploadingProgress(null);
        setProfileImage(null);
        setImageFileUrl(null);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setImageFileUrl(downloadURL);
          setFormData({ ...formData, profilePicture: downloadURL });
        });
      }
    );
  };

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (Object.keys(formData).length === 0) {
      return;
    }

    try {
      dispatch(updateStart());

      const res = await fetch(`/api/user/update/${currentUser._id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        const updatedUser = await res.json();
        console.log("User updated successfully:", updatedUser);
        
        // Dispatch action to update user in Redux store
        dispatch(updateSuccess(updatedUser));
        setFormData(updatedUser); // Update local form data
      } else {
        const errorData = await res.json();
        console.error("Error updating user:", errorData);
        dispatch(updateFailure(errorData.message));
      }
    } catch (error) {
      dispatch(updateFailure(error.message));
    }
  };

  // Fetch current user data on component mount
  useEffect(() => {
    const fetchUserData = async () => {
      const res = await fetch(`/api/user/${currentUser._id}`);
      if (res.ok) {
        const userData = await res.json();
        setFormData(userData); // Initialize formData with current user data
      } else {
        console.error("Failed to fetch user data");
      }
    };

    fetchUserData();
  }, [currentUser._id]); // Ensure it runs when currentUser._id changes

  return (
    <div className="sm:relative left-20">
      <div className="sm:max-w-lg sm:mx-auto p-3 sm:w-full">
        <h1 className="my-7 text-center font-semibold text-3xl">Profile</h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            ref={fileRef}
            hidden
          />
          <div
            className="relative w-32 h-32 self-center cursor-pointer shadow-md overflow-hidden rounded-full"
            onClick={() => fileRef.current.click()}
          >
            {imageFileUploadingProgress && (
              <CircularProgressbar
                value={imageFileUploadingProgress || 0}
                text={`${imageFileUploadingProgress}%`}
                strokeWidth={5}
                styles={{
                  root: {
                    width: "100%",
                    height: "100%",
                    position: "absolute",
                    top: 0,
                    left: 0,
                  },
                  path: {
                    stroke: `rgba(62,152,199, ${imageFileUploadingProgress} / 100`,
                  },
                }}
              />
            )}
            <img
              src={imageFileUrl || currentUser.profilePicture}
              alt="user"
              className={`rounded-full h-full w-full object-cover border-8 border-[#efebeb] ${
                imageFileUploadingProgress &&
                imageFileUploadingProgress < 100 &&
                "opacity-60"
              }`}
            />
          </div>

          {imageFileUploadError && (
            <Alert color="failure">{imageFileUploadError}</Alert>
          )}
          <TextInput
            type="text"
            id="username"
            placeholder="username"
            defaultValue={formData.username || currentUser.username}
            onChange={handleChange}
          />
          <TextInput
            type="text"
            id="email"
            placeholder="email"
            defaultValue={formData.email || currentUser.email}
            onChange={handleChange}
          />
          <TextInput
            type="password"
            id="password"
            placeholder="password"
            onChange={handleChange}
          />
          <Button type="submit" outline gradientDuoTone="purpleToPink">
            Update
          </Button>
        </form>
        <div className="text-red-500 flex justify-between mt-5">
          <span className="cursor-pointer">Delete Account</span>
          <span className="cursor-pointer">Sign Out</span>
        </div>
      </div>
    </div>
  );
}

export default DashProfile;
