import React from 'react';
import { Container, Typography, Box } from '@mui/material';

const TermsAndConditions = () => {
  return (
    <Container maxWidth="md" sx={{ marginTop: "70px" }}>
      <Typography variant="h4" gutterBottom align="center">
        <strong><i>Terms and Conditions</i></strong>
      </Typography>

      <Box mb={4}>
        <Typography variant="h6" gutterBottom><strong>1. Acceptance of Terms</strong></Typography>
        <Typography>
        By choosing to visit our blog platform, you acknowledge that you have read and agree to the following terms and conditions. If you do not agree with any part of these terms, please do not use the Platform.
        </Typography>
      </Box>

      <Box mb={4}>
        <Typography variant="h6" gutterBottom><strong>2. User Accounts</strong></Typography>
        <Typography>
          To manage blog posts, users must log in using a valid <strong>username and password</strong> provided by the backend developer or platform admin. You are responsible for safeguarding your login credentials and for any activity under your account.
        </Typography>
      </Box>

      <Box mb={4}>
        <Typography variant="h6" gutterBottom><strong>3. User Content</strong></Typography>
        <Typography>
          You retain ownership of any content you post on the blog. However, by publishing content, you grant us a non-exclusive, royalty-free right to use, display, and distribute your content on the Platform.
        </Typography>
        <Typography mt={1}>
          You must ensure that your content is legal, does not violate any third-party rights, and does not include any harmful, hateful, or misleading material.
        </Typography>
      </Box>

      <Box mb={4}>
        <Typography variant="h6" gutterBottom><strong>4. Prohibited Activities</strong></Typography>
        <Typography>
          Users agree not to:
        </Typography>
        <ul>
          <li>Use the platform for illegal or unauthorized purposes</li>
          <li>Attempt to hack, disrupt, or damage the Platform</li>
          <li>Post content that is false, defamatory, or offensive</li>
        </ul>
      </Box>

      <Box mb={4}>
        <Typography variant="h6" gutterBottom><strong>5. Privacy</strong></Typography>
        <Typography>
          We respect your privacy. Please refer to our <strong>Privacy Policy</strong> for detailed information on how we collect, process, and protect your data.
        </Typography>
      </Box>

      <Box mb={4}>
        <Typography variant="h6" gutterBottom><strong>6. Intellectual Property</strong></Typography>
        <Typography>
          Except for user-submitted content, all materials on the Platform (including text, graphics, code, and design) are our intellectual property. You may not copy, reproduce, or distribute any content without permission.
        </Typography>
      </Box>

      <Box mb={4}>
        <Typography variant="h6" gutterBottom><strong>7. Links to Third-Party Sites</strong></Typography>
        <Typography>
          The blog may include links to external websites or applications intended to improve user experience. We are not responsible for the content, policies, or practices of any third-party websites.
        </Typography>
      </Box>

      <Box mb={4}>
        <Typography variant="h6" gutterBottom><strong>8. Termination</strong></Typography>
        <Typography>
          We may suspend or terminate your access to the Platform at our discretion if you breach these Terms or misuse the service.
        </Typography>
      </Box>

      <Box mb={4}>
        <Typography variant="h6" gutterBottom><strong>9. Changes to These Terms</strong></Typography>
        <Typography>
          We reserve the right to update or modify these Terms at any time. Changes will be effective immediately upon being posted on the Platform. Continued use of the Platform constitutes your acceptance of the updated Terms.
        </Typography>
      </Box>

      <Box mb={4}>
        <Typography variant="h6" gutterBottom><strong>10. Contact</strong></Typography>
        <Typography>
          For questions or concerns regarding these Terms and Conditions, please contact us at: <strong>contact@socialriser.com</strong>.
        </Typography>
      </Box>
    </Container>
  );
};

export default TermsAndConditions