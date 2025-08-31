# 🚀 Manual Deployment Guide - Sales Intelligence Platform

## **Deploy Without Local Node.js Installation**

Since Node.js isn't available locally, here's how to deploy your platform using Vercel's web interface and GitHub.

---

## **Option 1: Deploy via Vercel Web Interface (Recommended)**

### **Step 1: Prepare Your Code for GitHub**

1. **Create a GitHub repository:**
   - Go to [GitHub.com](https://github.com)
   - Click "New repository"
   - Name it: `sales-intelligence-platform`
   - Make it public or private (your choice)
   - Don't initialize with README (we have our own)

2. **Upload your code to GitHub:**
   - Download your current project folder as a ZIP file
   - Extract it and upload to GitHub, or use GitHub Desktop

### **Step 2: Deploy to Vercel**

1. **Go to Vercel:**
   - Visit [vercel.com](https://vercel.com)
   - Sign up/login with your GitHub account

2. **Import your project:**
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will automatically detect it's a Next.js project

3. **Configure deployment:**
   - **Framework Preset:** Next.js
   - **Root Directory:** `frontend` (since your Next.js app is in the frontend folder)
   - **Build Command:** `npm run build`
   - **Output Directory:** `.next`
   - **Install Command:** `npm install`

4. **Environment Variables:**
   Add these environment variables in Vercel:
   ```
   POSTGRES_URL=your_supabase_connection_string
   JWT_SECRET=your_jwt_secret_key
   JWT_REFRESH_SECRET=your_refresh_secret_key
   HUNTER_API_KEY=your_hunter_api_key
   CLEARBIT_API_KEY=your_clearbit_api_key
   NEWS_API_KEY=your_news_api_key
   OPENAI_API_KEY=your_openai_api_key
   ```

5. **Deploy:**
   - Click "Deploy"
   - Vercel will build and deploy your application

---

## **Option 2: Deploy via GitHub Actions (Alternative)**

### **Step 1: Set up GitHub Actions**

Create `.github/workflows/deploy.yml` in your repository:

```yaml
name: Deploy to Vercel

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      
      - name: Setup Node.js
        uses: actions/setup-node@v2
        with:
          node-version: '18'
          
      - name: Install dependencies
        run: |
          cd frontend
          npm install
          
      - name: Build
        run: |
          cd frontend
          npm run build
          
      - name: Deploy to Vercel
        uses: amondnet/vercel-action@v20
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.ORG_ID }}
          vercel-project-id: ${{ secrets.PROJECT_ID }}
          working-directory: ./frontend
```

---

## **Step 3: Set Up Supabase Database**

### **1. Create Supabase Project:**
- Go to [supabase.com](https://supabase.com)
- Sign up/login
- Create a new project
- Note your project URL and API keys

### **2. Set Up Database Schema:**
- Go to your Supabase dashboard
- Navigate to SQL Editor
- Copy and paste the contents of `database/schema.sql`
- Run the SQL to create all tables

### **3. Add Sample Data:**
- Copy and paste the contents of `database/seed.sql`
- Run the SQL to add sample data

### **4. Get Connection String:**
- Go to Settings → Database
- Copy your connection string
- Format: `postgresql://postgres:[password]@db.[project-ref].supabase.co:5432/postgres`

---

## **Step 4: Configure Environment Variables**

In your Vercel project settings, add these environment variables:

### **Database Configuration:**
```
POSTGRES_URL=postgresql://postgres:[YOUR-PASSWORD]@db.[YOUR-PROJECT-REF].supabase.co:5432/postgres
```

### **JWT Configuration:**
```
JWT_SECRET=your-super-secret-jwt-key-here
JWT_REFRESH_SECRET=your-super-secret-refresh-key-here
```

### **External API Keys:**
```
HUNTER_API_KEY=your_hunter_api_key
CLEARBIT_API_KEY=your_clearbit_api_key
NEWS_API_KEY=your_news_api_key
OPENAI_API_KEY=your_openai_api_key
```

### **Application Configuration:**
```
NODE_ENV=production
CORS_ORIGIN=https://your-app.vercel.app
```

---

## **Step 5: Test Your Deployment**

### **1. Verify Deployment:**
- Visit your Vercel URL (e.g., `https://your-app.vercel.app`)
- You should see your application homepage

### **2. Test Core Functionality:**
- **Login:** Use the test credentials from the seed data:
  - Email: `sales@acme.com`
  - Password: `password123`

### **3. Test File Upload:**
- Upload the sample CSV file: `test-data/sample-prospects.csv`
- Verify data enrichment and signal detection

### **4. Test API Endpoints:**
- Test authentication: `POST /api/auth/login`
- Test contacts: `GET /api/contacts`
- Test signals: `GET /api/signals`
- Test tasks: `GET /api/tasks`
- Test dashboard: `GET /api/dashboard`

---

## **Step 6: Get API Keys (Optional but Recommended)**

### **Hunter.io (Email Finding):**
- Sign up at [hunter.io](https://hunter.io)
- Get your API key from the dashboard
- Add to environment variables

### **Clearbit (Company Data):**
- Sign up at [clearbit.com](https://clearbit.com)
- Get your API key from the dashboard
- Add to environment variables

### **News API (Signal Detection):**
- Sign up at [newsapi.org](https://newsapi.org)
- Get your API key from the dashboard
- Add to environment variables

### **OpenAI (AI Message Generation):**
- Sign up at [openai.com](https://openai.com)
- Get your API key from the dashboard
- Add to environment variables

---

## **Step 7: Launch Your Platform**

### **1. Update Your Domain (Optional):**
- In Vercel, go to your project settings
- Add a custom domain if desired

### **2. Set Up Monitoring:**
- Enable Vercel Analytics
- Set up error tracking (optional)

### **3. Begin Beta Testing:**
- Share your platform URL with beta users
- Use the beta signup form to collect applications
- Monitor usage and feedback

---

## **Troubleshooting**

### **Common Issues:**

1. **Build Failures:**
   - Check that all dependencies are in `package.json`
   - Verify TypeScript compilation
   - Check environment variables

2. **Database Connection Issues:**
   - Verify Supabase connection string
   - Check database schema is properly set up
   - Ensure environment variables are correct

3. **API Errors:**
   - Check API keys are valid
   - Verify rate limits
   - Check CORS configuration

4. **Authentication Issues:**
   - Verify JWT secrets are set
   - Check token expiration settings
   - Ensure password hashing is working

---

## **Success Metrics**

After deployment, monitor these key metrics:

- **Uptime:** 99.9%+
- **Page Load Time:** < 3 seconds
- **API Response Time:** < 500ms
- **User Registration:** Track signups
- **File Upload Success:** > 95%
- **Data Enrichment Rate:** > 80%

---

## **Next Steps After Deployment**

1. **Test thoroughly** with the sample data
2. **Invite beta users** using the signup form
3. **Monitor performance** and user feedback
4. **Iterate and improve** based on usage
5. **Scale up** as you gain more users

---

**🎉 Congratulations! Your Sales Intelligence Platform is now live and ready for real customers!**

**Platform URL:** `https://your-app.vercel.app`
**Test Login:** `sales@acme.com` / `password123`
**Documentation:** Check `docs/user-guide.md` for user instructions
