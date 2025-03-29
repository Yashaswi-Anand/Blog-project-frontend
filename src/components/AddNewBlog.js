import React, { useState } from "react";
import {
    TextField,
    MenuItem,
    Button,
    Typography,
    Box,
    IconButton,
    Paper,
} from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
// import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import TextEditor from "../Widgets/TextEditor";
import { createNewBlog } from "../utils/api";

const tagOptions = ["Gadget", "Apps", "AI Website", "Trick"];

const AddNewBlog = () => {
    const [formData, setFormData] = useState({
        title: "",
        category: "",
        description: "",
        images: [],
        urls: ["https://images.pexels.com/photos/724921/pexels-photo-724921.jpeg"],
        sections: [{ short_title: "", large_description: "" }],
    });

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
    const handleAddUrl = () => {
        setFormData({ ...formData, urls: [...formData.urls, ""] });
    };

    // Handle URL Remove
    const handleRemoveUrl = (index) => {
        const newUrls = [...formData.urls];
        newUrls.splice(index, 1);
        setFormData({ ...formData, urls: newUrls });
    };

    // Handle URL Change
    const handleUrlChange = (index, value) => {
        const newUrls = [...formData.urls];
        newUrls[index] = value;
        setFormData({ ...formData, urls: newUrls });
    };

    // Handle Section Add
    const handleAddSection = () => {
        setFormData({
            ...formData,
            sections: [...formData.sections, { short_title: "", large_description: "" }],
        });
    };

    // Handle Section Remove
    const handleRemoveSection = (index) => {
        const newSections = [...formData.sections];
        newSections.splice(index, 1);
        setFormData({ ...formData, sections: newSections });
    };

    // Handle Section Change
    const handleSectionChange = (index, name, value) => {
        const newSections = [...formData.sections];
        newSections[index][name] = value;
        setFormData({ ...formData, sections: newSections });
    };

    // Handle Form Submit
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("Form Data Submitted:", formData);
        await createNewBlog(formData);
        alert("Form submitted! Check console.");
    };

    // Handle Form Reset
    const handleReset = () => {
        setFormData({
            title: "",
            category: "",
            description: "",
            images: [],
            urls: [""],
            sections: [{ short_title: "", large_description: "" }],
        });
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
                        {tagOptions.map((option) => (
                            <MenuItem key={option} value={option}>
                                {option}
                            </MenuItem>
                        ))}
                    </TextField>

                    {/* Image Upload */}
                    {formData.images.length > 0 && (
                        <Box sx={{ mt: 1 }}>
                            {formData.images.map((file, index) => (
                                <Typography key={index} variant="body2">
                                    {file.name}
                                </Typography>
                            ))}
                        </Box>
                    )}
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

                    {/* Dynamic Short Title and Large Description */}
                    <Typography variant="subtitle1" sx={{ mt: 3, fontWeight: "bold" }}>
                        Add Sections (Short Title & Large Description):
                    </Typography>

                    {formData.sections.map((section, index) => (
                        <Box key={index} sx={{ mt: 2, p: 2, border: '1px solid #ccc', borderRadius: 2 }}>
                            <TextField
                                fullWidth
                                label={`Short Title ${index + 1}`}
                                value={section.short_title}
                                onChange={(e) => handleSectionChange(index, "short_title", e.target.value)}
                                margin="normal"
                                required
                            />
                            <TextField
                                fullWidth
                                label={`Large Description ${index + 1}`}
                                value={section.large_description}
                                onChange={(e) => handleSectionChange(index, "large_description", e.target.value)}
                                margin="normal"
                                multiline
                                rows={3}
                                required
                            />
                            <Box display="flex" justifyContent="flex-end">
                                <IconButton
                                    onClick={() => handleRemoveSection(index)}
                                    color="error"
                                    disabled={formData.sections.length === 1}
                                >
                                    <RemoveCircleIcon />
                                </IconButton>
                            </Box>
                        </Box>
                    ))}
                    <Button
                        variant="outlined"
                        startIcon={<AddCircleIcon />}
                        sx={{ mt: 2 }}
                        onClick={handleAddSection}
                    >
                        Add More Section
                    </Button>

                    {/* Submit & Reset Buttons */}
                    <Box display="flex" justifyContent="space-between" sx={{ mt: 3 }}>
                        <Button type="submit" variant="contained" color="primary">
                            Submit
                        </Button>
                        <Button type="button" variant="outlined" color="secondary" onClick={handleReset}>
                            Reset
                        </Button>
                    </Box>
                </form>
            </Paper>
            
            <TextEditor/>
        </Box>
    );
};

export default AddNewBlog;