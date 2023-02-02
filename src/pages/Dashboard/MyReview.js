import React, { useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import auth from "../../firebase.init";

function MyReview() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const [user] = useAuthState(auth);

  const [files, setFiles] = useState([]);
  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      "image/*": [],
    },
    onDrop: (acceptedFiles) => {
      setFiles(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )
      );
    },
  });

  const imgHostKey = process.env.REACT_APP_IMAGE_API_KEY;

  const onSubmit = (data) => {
    const img = files[0];
    const formData = new FormData();
    formData.append("image", img);
    const url = `https://api.imgbb.com/1/upload?expiration=600&key=${imgHostKey}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgData) => {
        console.log("image data", imgData);
        if (imgData.success) {
          const reviewer = {
            author: data.author,
            division: data.division,
            email: user?.email,
            message: data.message,
            image: imgData.data.url,
          };

          fetch("http://localhost:5000/reviewers", {
            method: "POST",
            headers: {
              "content-type": "application/json",
              authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
            body: JSON.stringify(reviewer),
          })
            .then((res) => res.json())
            .then((result) => {
              console.log(result);
              if (result.success) {
                toast.success(
                  `Yas 📌${data.author}, your review is set Successfully`
                );
              }
            })
            .then(reset())
            .then(setFiles([]));
        }
      });
  };

  // react dropzone
  // const thumbsContainer = {
  //   display: "flex",
  //   flexDirection: "row",
  //   flexWrap: "wrap",
  //   marginTop: 16,
  // };

  const thumb = {
    display: "inline-flex",
    borderRadius: 2,
    border: "1px solid #eaeaea",
    marginBottom: 8,
    marginRight: 8,
    width: 100,
    height: 100,
    padding: 4,
    boxSizing: "border-box",
  };

  const thumbInner = {
    display: "flex",
    minWidth: 0,
    overflow: "hidden",
  };

  const img = {
    display: "block",
    width: "auto",
    height: "100%",
  };

  const thumbs = files.map((file) => (
    <div style={thumb} key={file.name}>
      <div style={thumbInner}>
        <img
          src={file.preview}
          alt=""
          style={img}
          // Revoke data uri after image is loaded
          onLoad={() => {
            URL.revokeObjectURL(file.preview);
          }}
        />
      </div>
    </div>
  ));

  useEffect(() => {
    // Make sure to revoke the data uris to avoid memory leaks, will run on unmount
    return () => files.forEach((file) => URL.revokeObjectURL(file.preview));
  }, [files]);

  return (
    <div>
      <h2 className=" text-2xl text-primary font-bold my-6">
        Add Your Reviews
      </h2>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid grid-cols-1 gap-3 justify-items-center mt-3"
      >
        <input
          {...register("author", { required: true })}
          className="input w-full max-w-xs"
          placeholder="Write your name"
        />
        {errors.author && (
          <span className=" text-red-600">Please Write Your Name</span>
        )}
        <input
          disabled
          defaultValue={user?.email}
          {...register("email")}
          className="input w-full max-w-xs"
        />

        <select
          {...register("division", { required: true })}
          className="select w-full max-w-xs"
        >
          <option disabled>Pick your present division</option>
          <option value="barisal">Barisal</option>
          <option value="chittagong">Chittagong</option>
          <option value="dhaka">Dhaka</option>
          <option value="khulna">Khulna</option>
          <option value="rajshahi">Rajshahi</option>
          <option value="rangpur">Rangpur</option>
          <option value="sylhet">Sylhet</option>
        </select>
        {errors.division && (
          <span className=" text-red-600">Please Select Your Division</span>
        )}

        <textarea
          {...register("message", { required: true })}
          className="textarea w-full max-w-xs"
          placeholder="Write your comments"
        ></textarea>
        {errors.message && (
          <span className=" text-red-600">Please Write Your Comments</span>
        )}
        {/* <input
          type="file"
          {...register("imgFile", { required: true })}
          id=""
          className="file-input w-full max-w-xs"
        /> */}
        <div className="border-dashed border-2 border-primary rounded-md w-full max-w-xs p-4 flex flex-row justify-center items-center">
          <div {...getRootProps()}>
            <input {...getInputProps()} />

            <p>Drag 'n' drop your photo here, or click to select photo</p>
          </div>
          <div>{thumbs}</div>
        </div>

        <input
          type="submit"
          className="btn btn-primary text-white w-full max-w-xs"
        />
      </form>
    </div>
  );
}

export default MyReview;
