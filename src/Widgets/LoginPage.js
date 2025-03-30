import React, { useState } from 'react';
import { loginUser } from '../utils/api';
import { Dialog, DialogTitle, DialogContent, TextField, DialogActions, Button } from '@mui/material';

function LoginPage({ open, setOpen }) {
    const [formData, setFormData] = useState({ username: '', password: '' });

    const handleClose = () => {
        setOpen(false);
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await loginUser(formData);
            if (response.data.code === 200) {
                localStorage.setItem('isLoggedIn', true);
                setOpen(false);
            } else {
                alert(response.response.data.error);
            }
        } catch (error) {
            alert("Unable to login. Please try again.");
        }
    };

    return (
        <Dialog open={open} onClose={handleClose}>
            <DialogTitle>Login</DialogTitle>
            <DialogContent>
                <form onSubmit={handleSubmit}>
                    <TextField
                        autoFocus
                        margin="dense"
                        name="username"
                        label="Username"
                        type="text"
                        fullWidth
                        variant="standard"
                        value={formData.username}
                        onChange={handleChange}
                    />
                    <TextField
                        margin="dense"
                        name="password"
                        label="Password"
                        type="password"
                        fullWidth
                        variant="standard"
                        value={formData.password}
                        onChange={handleChange}
                    />
                    <DialogActions>
                        <Button onClick={handleClose}>Cancel</Button>
                        <Button type="submit">Submit</Button>
                    </DialogActions>
                </form>
            </DialogContent>
        </Dialog>
    );
}

export default LoginPage;