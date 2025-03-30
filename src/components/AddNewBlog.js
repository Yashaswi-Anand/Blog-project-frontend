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
        description: "",
        link: ""
        // images: [],
        // urls: ["https://images.pexels.com/photos/724921/pexels-photo-724921.jpeg"]
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
    };

    // Handle Form Reset
    const handleReset = () => {
        setFormData({
            title: "",
            category: "",
            description: "",
            link: ""
            // images: [],
            // urls: [""]
        });
        setContentDescription("");
    };

    return (
        <Box>
            <Paper elevation={3} sx={{ p: 3, maxWidth: '70%', mx: "auto", marginTop: 10, mb: 5 }}>
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
                        name="description"
                        value={formData.description}
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

                    {/* Image Upload */}
                    {/* {formData.images.length > 0 && (
                        <Box sx={{ mt: 1 }}>
                            {formData.images.map((file, index) => (
                                <Typography key={index} variant="body2">
                                    {file.name}
                                </Typography>
                            ))}
                        </Box>
                    )} */}
                    {/* <Button
                        variant="contained"
                        component="label"
                        fullWidth
                        sx={{ mt: 2 }}
                        startIcon={<CloudUploadIcon />}
                    >
                        Upload Images
                        <input type="file" hidden multiple accept="image/*" onChange={handleImageUpload} />
                    </Button> */}

                    {/* URLs Section */}
                    {/* <Box>
                        <Typography variant="subtitle1" sx={{ mt: 2, fontWeight: "bold" }}>
                            Add URLs:
                        </Typography>
                        {formData.urls.map((url, index) => (
                            <Box key={index} display="flex" alignItems="center" gap={1} sx={{ mt: 1 }}>
                                <TextField
                                    fullWidth
                                    label={`URL ${index + 1}`}
                                    value={url}
                                    onChange={(e) => handleUrlChange(index, e.target.value)}
                                    required
                                />
                                <IconButton onClick={() => handleRemoveUrl(index)} color="error" disabled={formData.urls.length === 1}>
                                    <RemoveCircleIcon />
                                </IconButton>
                            </Box>
                        ))}
                        <Button
                            variant="outlined"
                            startIcon={<AddCircleIcon />}
                            sx={{ mt: 1 }}
                            onClick={handleAddUrl}
                        >
                            Add More URL
                        </Button>
                    </Box> */}

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