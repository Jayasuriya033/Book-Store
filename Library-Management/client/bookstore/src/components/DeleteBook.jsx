import axios from 'axios';
import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const DeleteBook = () => {
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        // Show confirmation dialog
        const confirmed = window.confirm("Are you sure you want to delete this book?");
       
        if (confirmed) {
            // Proceed with deletion if user confirms
            axios.delete('http://localhost:8001/book/book/' + id)
                .then(res => {
                    if (res.data.deleted) {
                        alert("Book successfully deleted!");
                        navigate('/books');
                    }
                }).catch(err => console.log(err));
        } else {
            // User cancelled the deletion
            alert("Deletion cancelled.");
            navigate('/books');
        }
    }, [id, navigate]);

    return null; // No UI component to render
};

export default DeleteBook;
