import React from 'react';
import { Container, Typography, Box } from '@mui/material';

const PrivacyPolicy = () => {
  return (
    <Container maxWidth="md" sx={{ marginTop: "70px" }}>
      <Typography variant="h4" gutterBottom align="center">
        <strong><i>Privacy Policy</i></strong>
      </Typography>

      <Box mb={4}>
        <Typography variant="h6" gutterBottom><strong><em>1. Personal Data</em></strong></Typography>
        <Typography>
          We only collect username and password for the sole purpose of enabling users to log in and manage blog posts.
        </Typography>
      </Box>

      <Box mb={4}>
        <Typography variant="h6" gutterBottom><strong><em>2. Children's Privacy</em></strong></Typography>
        <Typography>
          Our platform is not intended for use by children under the age of 13. We do not knowingly collect or solicit any personal data from children.
        </Typography>
      </Box>

      <Box mb={4}>
        <Typography variant="h6" gutterBottom><strong><em>3. What Personal Data Do We Collect & How Do We Process It?</em></strong></Typography>
        <Typography>
          We collect only username and password. These credentials are collected solely for login purposes to manage blog content.
        </Typography>
      </Box>

      <Box mb={4}>
        <Typography variant="h6" gutterBottom>4<strong><em>. How & Where Do We Obtain Your Personal Data?</em></strong></Typography>
        <Typography>
          We do not collect personal data directly from users. The login credentials are provided by the backend developer.
        </Typography>
      </Box>

      <Box mb={4}>
        <Typography variant="h6" gutterBottom><strong><em>5. Lawful Bases of Processing Your Personal Data</em></strong></Typography>
        <Typography>
          We rely on user consent and our legitimate interest in providing secure login and blog management functionality.
        </Typography>
      </Box>

      <Box mb={4}>
        <Typography variant="h6" gutterBottom><strong><em>6. When Do We Share Your Personal Data with Third Parties?</em></strong></Typography>
        <Typography>
          We do not share your personal data with third parties. Your login credentials remain confidential and secure.
        </Typography>
      </Box>

      <Box mb={4}>
        <Typography variant="h6" gutterBottom><strong><em>7. No Sale of Personal Data</em></strong></Typography>
        <Typography>
          We do not sell or rent your personal data to any third parties.
        </Typography>
      </Box>

      <Box mb={4}>
        <Typography variant="h6" gutterBottom><strong><em>8. Links to Other Applications</em></strong></Typography>
        <Typography>
          Our blog may include links to external websites or apps to enhance user experience. We are not responsible for their privacy practices.
        </Typography>
      </Box>

      <Box mb={4}>
        <Typography variant="h6" gutterBottom><strong><em>9. Your Rights</em></strong></Typography>
        <Typography>
          You have the right to access, correct, or delete your data, and to withdraw your consent. Contact us for data-related requests.
        </Typography>
      </Box>

      <Box mb={4}>
        <Typography variant="h6" gutterBottom><strong><em>10. Third Party Permission</em></strong></Typography>
        <Typography>
          We do not give any third party permission to access or manage your personal data.
        </Typography>
      </Box>

      <Box mb={4}>
        <Typography variant="h6" gutterBottom><strong><em>11. Notification of Changes to Our Privacy Notice</em></strong></Typography>
        <Typography>
          We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated effective date.
        </Typography>
      </Box>
    </Container>
  );
};

export default PrivacyPolicy
