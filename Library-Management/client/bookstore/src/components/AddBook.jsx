import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddBook = () => {
  const [name, setName] = useState("");
  const [author, setAuthor] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [category, setCategory] = useState("");
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    author: "",
    imageUrl: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validate = () => {
    let errors = {};

    if (!formData.name) {
      errors.name = "Name is required";
    } else errors.name = "";

    if (!formData.author) {
      errors.author = "Author is required";
    } else errors.author = "";

    if (!formData.category) {
      errors.category = "category is required";
    } else errors.category = "";

    if (!formData.imageUrl) {
      errors.imageUrl = "ImageUrl is required";
    } else errors.imageUrl = "";

    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    }
  };

  useEffect(() => {
    if (Object.keys(errors).length > 0) {
      const timer = setTimeout(() => {
        setErrors({});
      }, 4000);

      return () => clearTimeout(timer);
    }
  }, [errors]);

  // const handleFormSubmit = (e) => {
  //     e.preventDefault()
  //     axios.post('http://localhost:8001/book/add', {name, author, imageUrl})
  //     .then(res => {
  //         if(res.data.added) {
  //             navigate('/books')
  //         }
  //         // else {
  //         //     console.log(res)
  //         // }
  //     })
  //     .catch(err => console.log(err))
  //   }

  const handleFormSubmit = (e) => {
    e.preventDefault();
    axios
      .get("http://localhost:8001/auth/verify")
      .then((res) => {
        if (res.data.login) {
          if (name && author && category && imageUrl) {
            axios
              .post("http://localhost:8001/book/add", {
                name,
                author,
                category,
                imageUrl,
              })
              .then((res) => {
                if (res.data.added) {
                  navigate("/books");
                }
              })
              .catch((err) => console.log(err));
          }
        } else {
          navigate("/login");
        }
      })
      .catch((err) => console.log(err));
  };

  const handleCombinedSubmit = (event) => {
    event.preventDefault();
    handleSubmit(event);
    handleFormSubmit(event);
    // setFormData({ name: '', author: '', imageUrl: '' });
    // setUsername('');
    // setPassword('');
  };

  return (
    <div className="student-form-container">
      <form onSubmit={handleCombinedSubmit} className="student-form">
        <h2>Add Book</h2>
        <div className="form-group">
          <label htmlFor="book">Book Name:</label>
          <input
            type="text"
            id="book"
            name="name"
            placeholder="Enter Book Name"
            value={formData.name}
            onChange={(e) => {
              setName(e.target.value);
              handleChange(e);
            }}
          />
          {errors.name && <span style={{ color: "red" }}>{errors.name}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="author">Author Name:</label>
          <input
            type="text"
            id="author"
            name="author"
            placeholder="Enter Author"
            value={formData.author}
            onChange={(e) => {
              setAuthor(e.target.value);
              handleChange(e);
            }}
          />
          {errors.author && (
            <span style={{ color: "red" }}>{errors.author}</span>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="category">Category:</label>
          <select
            className=" select-option"
            id="category"
            name="category"
            value={formData.category}
            onChange={(e) => {
              setCategory(e.target.value);
              handleChange(e);
            }}
          >
            <option value="">--- Select Category ---</option>
            <option value="Technical">Technical</option>
            <option value="Non-technical">Non-technical</option>
            <option value="Entertainment">Entertainment</option>
            <option value="Story">Story</option>
            <option value="Others">Others</option>
          </select>
          {errors.category && (
            <span style={{ color: "red" }}>{errors.category}</span>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="image">Image URL:</label>
          <input
            // className=" select-option"
            type="text"
            id="image"
            name="imageUrl"
            placeholder="Enter Image Url"
            value={formData.imageUrl}
            onChange={(e) => {
              setImageUrl(e.target.value);
              handleChange(e);
            }}
          />
          {errors.imageUrl && (
            <span style={{ color: "red" }}>{errors.imageUrl}</span>
          )}
        </div>
        <button type="submit">Add </button>
      </form>
    </div>
  );
};

export default AddBook;

// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// const AddBook = () => {
//     const [name, setName] = useState('');
//     const [author, setAuthor] = useState('');
//     const [imageUrl, setImageUrl] = useState('');
//     const navigate = useNavigate();

//     const handleFormSubmit = (e) => {
//         e.preventDefault();
//         axios.get('http://localhost:8001/auth/verify')
//             .then(res => {
//                 if (res.data.login) {
//                     if (name && author && imageUrl) {
//                         axios.post('http://localhost:8001/book/add', { name, author, imageUrl })
//                             .then(res => {
//                                 if (res.data.added) {
//                                     navigate('/books');
//                                 }
//                             })
//                             .catch(err => console.log(err));
//                     }
//                 } else {
//                     navigate('/login');
//                 }
//             })
//             .catch(err => console.log(err));
//     };

//     return (
//         <div className="student-form-container">
//             <form onSubmit={handleFormSubmit} className="student-form">
//                 <h2>Add Book</h2>
//                 <div className="form-group">
//                     <label htmlFor="book">Book Name:</label>
//                     <input
//                         type="text"
//                         id="book"
//                         name="name"
//                         placeholder="Enter Book Name"
//                         value={name}
//                         onChange={(e) => setName(e.target.value)}
//                     />
//                 </div>
//                 <div className="form-group">
//                     <label htmlFor="author">Author Name:</label>
//                     <input
//                         type="text"
//                         id="author"
//                         name="author"
//                         placeholder="Enter Author"
//                         value={author}
//                         onChange={(e) => setAuthor(e.target.value)}
//                     />
//                 </div>
//                 <div className="form-group">
//                     <label htmlFor="image">Image URL:</label>
//                     <input
//                         type="text"
//                         id="image"
//                         name="imageUrl"
//                         placeholder="Enter Image Url"
//                         value={imageUrl}
//                         onChange={(e) => setImageUrl(e.target.value)}
//                     />
//                 </div>
//                 <button type="submit">Add </button>
//             </form>
//         </div>
//     );
// };

// export default AddBook;
