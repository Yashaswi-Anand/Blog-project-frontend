import React, { useState } from "react";
import {
    TextField, MenuItem, Button, Typography,
    Box,
    // IconButton,
    Paper
} from "@mui/material";
// import AddCircleIcon from "@mui/icons-material/AddCircle";
// import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
// import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import TextEditor from "../Widgets/TextEditor";
import { createNewBlog } from "../utils/api";

const tagOptions = ["Gadget", "Apps", "AI Website", "Trick"];

const AddNewBlog = () => {
    const [formData, setFormData] = useState({
        title: "",
        category: "",
        short_description: "",
        description: "",
        link: ""
    });
    const [content_description, setContentDescription] = useState("");

    // Handle Basic Input Change
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    // Handle Image Upload
    // const handleImageUpload = (e) => {
    //     const files = Array.from(e.target.files);
    //     setFormData({ ...formData, images: files });
    // };

    // Handle URL Add
    // const handleAddUrl = () => {
    //     setFormData({ ...formData, urls: [...formData.urls, ""] });
    // };

    // // Handle URL Remove
    // const handleRemoveUrl = (index) => {
    //     const newUrls = [...formData.urls];
    //     newUrls.splice(index, 1);
    //     setFormData({ ...formData, urls: newUrls });
    // };

    // Handle URL Change
    // const handleUrlChange = (index, value) => {
    //     const newUrls = [...formData.urls];
    //     newUrls[index] = value;
    //     setFormData({ ...formData, urls: newUrls });
    // };

    // Handle Form Submit
    const handleSubmit = async (e) => {
        e.preventDefault();
        formData.description = content_description;
        await createNewBlog(formData);
        alert("Form submitted! Check console.");
        handleReset();
    };

    // Handle Form Reset
    const handleReset = () => {
        setFormData({
            title: "",
            category: "",
            short_description: "",
            description: "",
            link: ""
        });
        setContentDescription("");
    };

    return (
        <Box sx={{ paddingTop: 10}}>
            <Paper elevation={3} sx={{ p: 3, maxWidth: '70%', mx: "auto", mb: 5 }}>
                <Typography variant="h5" fontWeight="bold" gutterBottom>
                    Create a Post
                </Typography>

                <form onSubmit={handleSubmit}>
                    {/* Title */}
                    <TextField
                        fullWidth
                        label="Title"
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                        margin="normal"
                        required
                    />

                    {/* Short Description */}
                    <TextField
                        fullWidth
                        label="Short Description"
                        name="short_description"
                        value={formData.short_description}
                        onChange={handleChange}
                        margin="normal"
                        multiline
                        rows={2}
                        required
                    />

                    {/* Tag Dropdown */}
                    <TextField
                        select
                        fullWidth
                        label="Category"
                        name="category"
                        value={formData.category}
                        onChange={handleChange}
                        margin="normal"
                        required
                    >
                        {tagOptions && tagOptions.length > 0 && tagOptions?.map((option) => (
                            <MenuItem key={option} value={option}>
                                {option}
                            </MenuItem>
                        ))}
                    </TextField>

                    <TextField
                        fullWidth
                        label="Image Link"
                        name="link"
                        value={formData.link}
                        onChange={handleChange}
                        margin="normal"
                        required
                    />

                    {/* Dynamic Description */}
                    <Box sx={{ p: 2, border: '1px solid #ccc', borderRadius: 2, mt: 2 }}>
                        <TextEditor content_description={content_description} setContentDescription={setContentDescription} />
                    </Box>

                    {/* Submit & Reset Buttons */}
                    <Box display="flex" justifyContent="flex-end" sx={{ mt: 3, gap: 2 }}>
                        <Button type="submit" variant="contained" color="primary">
                            Submit
                        </Button>
                        <Button type="button" variant="outlined" color="secondary" onClick={handleReset}>
                            Clear
                        </Button>
                    </Box>
                </form>
            </Paper>

        </Box>
    );
};

export default AddNewBlog;