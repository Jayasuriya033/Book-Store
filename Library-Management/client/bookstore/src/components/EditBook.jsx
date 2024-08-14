import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
// import { Toaster, toast } from 'react-hot-toast'
import 'bootstrap/dist/css/bootstrap.min.css'

const EditBook = () => {
  const [name, setName] = useState('')
  const [author, setAuthor] = useState('')
  const [imagefile, setImageFile] = useState('')
  const navigate = useNavigate()
  const { id } = useParams()

  useEffect(() => {
    axios.get('http://localhost:8001/book/book/' + id)
      .then(res => {
        setName(res.data.name)
        setAuthor(res.data.author)
        setImagefile(res.data.imagefile)
      })
      .catch(err => console.log(err))
  }, [id])

  
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setImageFile(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    const formData = new FormData();
    formData.append('name', name);
    formData.append('author', author);
    if (imagefile) {
      formData.append('image', imagefile); // Only append if a new image is selected
    }

    const editbookPromise = axios
      .put('http://localhost:8001/book/book/' + id, formData)
      .then(res => {
        if (res.data.updated) {
          navigate('/books')
          return 'Book edited successfully'
        } else {
          console.log(res)
          throw new Error('Failed to update the book')
        }
      })
      .catch(err => {
        console.log(err)
        throw new Error('An error occurred while updating the book')
      })

    toast.promise(editbookPromise, {
      loading: 'Editing...',
      success: (message) => message,
      error: (err) => err.message,
    }, {
      position: 'top-center',
    })
  }

  return (
    <div className="student-form-container">
      <form className="student-form" onSubmit={handleSubmit}>
        <h2>Edit Book</h2>
        <div className="form-group">
          <label htmlFor="book">Book Name:</label>
          <input
            type="text"
            id="book"
            name="book"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="author">Author Name:</label>
          <input
            type="text"
            id="author"
            name="author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="image">Upload images link:</label>
          <input
            type="file"
            id="image"
            name="image"
            style={{ width: '310px', height: '40px' }} // Adjust width and height as needed
            // value={imagefile}
            onChange={handleFileChange} // Set the selected image file to state
          />
        </div>
        <button type="submit">Update</button>
      </form>
      <Toaster
        position="top-center"
        reverseOrder={false}
      />
    </div>
  )
}

export default EditBook
