import React, { useContext, useEffect, useRef, useState } from "react";
import { InputFade } from "../Input";
import Image from "next/image";
import { useFormik } from "formik";
import { profileSchema } from "@/schemas";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { GlobalContext } from "@/context/context";
import Modal from "../Modal";
import { getProfileData, updateProfileData } from "@/store/auth/authActions";
import { updateDetails } from "@/app/dashboard/profile/page";
import "react-phone-input-2/lib/style.css";
import PhoneInput from "react-phone-input-2";
import Load, { LoadButton } from "../Load";

const Profile = () => {
  const dispatch = useAppDispatch();
  const pictureRef = useRef<HTMLInputElement>(null);
  
  const [formButtonDisabled, setFormButtonDisabled] = useState<boolean>(false);
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [phone, setPhone] = useState<string>("");
  const [errorPH, setErrorPH] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [updateLoading, setUpdateLoading] = useState<boolean>(false);

  const userDetails = useAppSelector((state) => state.auth.userDetails);
  const isLoading = useAppSelector<boolean>((state) => state.auth.loading);
  const isUpdateLoading = useAppSelector<boolean>(
    (state) => state.auth.updateLoading
  );

  const { picture, setPicture } = useContext(GlobalContext);

  const onSubmit = () => {
    dispatch(
      updateProfileData({
        firstname: values.firstname,
        lastname: values.lastname,
        phoneNumber: phone,
        photo: picture || "",
      } as updateDetails)
    );
    // alert('I have been clicked');
  };

  const openPhotoModal = () => {
    setOpenModal(true);
  };

  const handlePictureStaging = () => {
    if (pictureRef.current && pictureRef.current.files) {
      const file = pictureRef.current.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onloadend = () => {
          setPicture(reader.result as string);
        };
        reader.readAsDataURL(file);
      }
    }
  };

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        firstname: userDetails?.first_name,
        lastname: userDetails?.last_name,
        username: userDetails?.first_name,
        email: userDetails?.email,
      },
      validationSchema: profileSchema,
      onSubmit,
    });

  useEffect(() => {
    if (
      values.firstname !== "" &&
      values.lastname !== "" &&
      values.email !== "" &&
      values.username !== "" &&
      phone !== "" &&
      !errors.firstname &&
      !errors.lastname &&
      !errors.username &&
      errorPH === "" &&
      !errors.email
    ) {
      setFormButtonDisabled(true);
    } else {
      setFormButtonDisabled(false);
    }

    if (phone === "") {
      setErrorPH("This field is required");
    } else if (phone.length < 13) {
      setErrorPH("Invalid phone number");
    } else if (phone.length > 14) {
      setErrorPH("Invalid phone number");
    } else {
      setErrorPH("");
    }

    console.log(phone);
    console.log(errorPH);
  }, [values, errors, phone, errorPH]);

  useEffect(() => {
    if (isLoading) {
      setLoading(true);
    } else {
      setLoading(false);
    }

    if (isUpdateLoading) {
      setUpdateLoading(true);
    } else {
      setUpdateLoading(false);
    }
  }, [isLoading, isUpdateLoading]);

  useEffect(() => {
    if (userDetails) {
      return;
    }
    dispatch(getProfileData());
  }, []);

  return (
    <div className="w-full">
      { loading === true && <Load/>}
      <Modal isOpen={openModal} setIsOpen={setOpenModal}>
        <h1 className="text-xl font-semibold text-appBlack">
          Upload Profile Picture
        </h1>
        <div className="w-full py-[50px] flex items-center justify-between flex-col">
          <div className="w-[200px] h-[200px] rounded-full flex items-center justify-center overflow-hidden">
            {/* MODAL PICTURE */}
            {picture !== null ? (
              <img
                src={picture}
                width={1024}
                height={1024}
                alt="uploaded profile picture"
                className="w-full h-full object-cover"
              />
            ) : (
              // <p className="w-[300px]">Hello</p>
              <Image
                src={require("../../assets/images/avatar2.png")}
                alt="uploaded profile picture"
                width={1024}
                height={1024}
              />
            )}
          </div>
          <p className="text-sm max-w-[300px] text-center mt-8">
            {pictureRef?.current &&
            pictureRef?.current?.files &&
            pictureRef?.current?.files[0]
              ? pictureRef.current.files[0].name
              : "plase select a file"}
          </p>

          {/* Add photo button */}
          <button className="buttons !w-fit !px-10 !py-2 relative cursor-pointer">
            <p className="text-sm">
              {picture !== null ? "Choose another photo" : "Upload Photo"}
            </p>
            <input
              type="file"
              ref={pictureRef}
              onChange={handlePictureStaging}
              className="opacity-0 absolute w-full h-full top-0 left-0 cursor-pointer"
            />
          </button>

          {/* SAVE BUTTON */}
          {picture !== null && (
            <button
              onClick={() => setOpenModal(false)}
              className="buttons !bg-success !w-fit !px-10 !py-2 relative cursor-pointer"
            >
              <p className="text-sm">Save</p>
            </button>
          )}
        </div>
      </Modal>

      {/* TOP  */}
      <div className="w-full">
        <h3 className="text-lg 2xl:text-xl text-headDesc ">Profile</h3>
      </div>

      {/* PROFILE DIV */}
      <div className="w-full flex flex-col items-center">
        {/* PROFILE PICTURE */}
        <div className="flex flex-col items-center my-[48px] ">
          {/* IMAGE */}
          <div className="relative w-[70px] h-[70px] mb-6 2xl:mb-8">
            <div className="w-full h-full rounded-full overflow-hidden">
              {/* USER PICTURE */}
              {/* USER PICTURE */}
              {updateLoading === true ? (
                <div className="absolute top-0 w-full h-full flex items-center justify-center bg-blackLoading z-10">
                  <LoadButton />
                </div>
              ) : (
                ""
              )}
              {userDetails?.photo ? (
                <Image
                  src={`https://fx-lms.onrender.com${userDetails.photo}`}
                  alt="stacfx.com"
                  width={1024}
                  height={1024}
                  className="w-full h-full object-cover"
                />
              ) : (
                <Image
                  src={require("../../assets/images/avatar2.png")}
                  alt="stacfx.com"
                  className="w-full"
                />
              )}
            </div>
            <button
              onClick={openPhotoModal}
              className="w-[24px] h-[24px] hoverActive rounded-full flex items-center justify-center bg-primary2 absolute bottom-0 right-0 cursor-pointer"
            >
              <Image
                src={require("../../assets/icons/edit.png")}
                alt="stacfx.com"
                className="w-[18px]"
              />
            </button>
          </div>

          {/* USER DETAILS TEXT */}
          <div className="flex flex-col items-center gap-1">
            {userDetails?.first_name ? (
              <h4 className="text-[20px] 2xl:text-[24px] text-headDesc">{`${userDetails?.first_name} ${userDetails?.last_name}`}</h4>
            ) : (
              <h4 className="text-[20px] 2xl:text-[24px] text-headDesc">
                No Data Found
              </h4>
            )}
            <p className="text-[11px] 2xl:text-[13px] text-greytxt">
              Joined November 2023
            </p>
          </div>
        </div>

        {/* PROFILE FORM */}
        <div className="w-[360px]">
          <form onSubmit={handleSubmit} className="w-full flex flex-col gap-4 ">
            <InputFade
              id="firstname"
              value={values.firstname}
              touched={touched.firstname}
              blur={handleBlur}
              handleChange={handleChange}
              error={errors.firstname}
              isDisabled={false}
              label="First Name"
              type="text"
              placeholder=""
            />
            <InputFade
              id="lastname"
              value={values.lastname}
              touched={touched.lastname}
              blur={handleBlur}
              handleChange={handleChange}
              error={errors.lastname}
              isDisabled={false}
              label="Last Name"
              type="text"
              placeholder=""
            />
            <InputFade
              id="username"
              value={values.username}
              touched={touched.username}
              blur={handleBlur}
              handleChange={handleChange}
              error={errors.username}
              isDisabled={false}
              label="Username"
              type="text"
              placeholder=""
            />
            <InputFade
              id="email"
              value={values.email}
              touched={touched.email}
              blur={handleBlur}
              handleChange={handleChange}
              error={errors.email}
              isDisabled={true}
              label="Email"
              type="email"
              placeholder=""
            />

            <div className="input-wrap">
              <label className="labelsFade">Phone Number</label>
              <div className="w-full flex inputsfade !p-0">
                <PhoneInput
                  country={"ng"}
                  placeholder="Enter phone number"
                  value={userDetails?.phone_number || phone}
                  onChange={(phone) => setPhone(phone)}
                  searchStyle={{
                    width: "100%",
                  }}
                  inputStyle={{
                    width: "100%",
                    padding: "20px 50px",
                    border: 'none',
                    background: 'none'
                  }}
                  buttonStyle={{
                    border: 'none',
                    background: "none"
                  }}
                />
              </div>
              {errorPH && (
                <p className="text-error text-[10px] italic">{errorPH}</p>
              )}
            </div> 
            <button
              type="submit"
              disabled={
                !formButtonDisabled ||
                loading === true ||
                updateLoading === true
              }
              className="buttons"
            >
              { loading === true || updateLoading === true ? (
                <LoadButton />
              ) : (
                <p className="text-[13px] 2xl:text-[15px]">Update Profile</p>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Profile;
