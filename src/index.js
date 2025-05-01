import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { CustomThemeProvider } from './Widgets/theme/ThemeContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <CustomThemeProvider >
    <App />
  </CustomThemeProvider >
  // </React.StrictMode>
);

/*
1. Pagination -- done
2. Logo -- done
3. Privacy Policy -- done
4. Terms and Conditions -- done
5. Contact Us -- done
6. About Us -- done
8. SEO
9. Global Search
10. Format of Editor display data
11. Google Search console -- working
12. Skeleton loading -- done
13. Fancy & Animated Home page UI --- done
14. Sitemap - done
15. Light and Dark Theme -- done
16. Google Fonts
17. List View for desktop on Category page & UI - in progress
18. Lazy Loading, Suspense -- done
19. Infinite Scroll 
20. Suggestion Box
21. Contact Us using mail
*/
