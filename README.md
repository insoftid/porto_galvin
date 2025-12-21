# Portfolio Website

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## 📋 Table of Contents

- [Fork & Deploy Guide](#fork--deploy-guide)
- [Getting Started](#getting-started)
- [Learn More](#learn-more)
- [Deploy on Vercel](#deploy-on-vercel)

## 🚀 Fork & Deploy Guide

### Prerequisites

Before you begin, make sure you have:
- A [GitHub account](https://github.com/signup)
- A [Vercel account](https://vercel.com/signup) (you can sign up with your GitHub account)
- [Git](https://git-scm.com/downloads) installed on your computer
- [Node.js](https://nodejs.org/) (version 18.17 or later) installed on your computer
- A code editor like [VS Code](https://code.visualstudio.com/)

### Step 1: Fork the Repository

1. **Navigate to the original repository** on GitHub
2. **Click the "Fork" button** in the top-right corner of the repository page
3. **Select your account** as the destination for the fork
4. **Wait for GitHub** to create your forked repository
5. You now have your own copy of the repository at `https://github.com/YOUR_USERNAME/REPO_NAME`

### Step 2: Clone Your Forked Repository

1. **Open your terminal** or command prompt
2. **Navigate to the directory** where you want to store the project:
   ```bash
   cd ~/Documents
   ```
3. **Clone your forked repository**:
   ```bash
   git clone https://github.com/YOUR_USERNAME/REPO_NAME.git
   ```
   Replace `YOUR_USERNAME` with your GitHub username and `REPO_NAME` with the repository name
4. **Navigate into the project directory**:
   ```bash
   cd REPO_NAME
   ```

### Step 3: Install Dependencies

1. **Install all required packages** using npm:
   ```bash
   npm install
   ```
   This will download and install all dependencies listed in `package.json`

### Step 4: Run Locally (Optional but Recommended)

1. **Start the development server**:
   ```bash
   npm run dev
   ```
2. **Open your browser** and visit [http://localhost:3000](http://localhost:3000)
3. **Verify everything works** correctly before deploying
4. **Stop the server** by pressing `Ctrl + C` in the terminal when done

### Step 5: Customize Your Portfolio (Optional)

Before deploying, you may want to customize the content:
- Update personal information in the components
- Replace images in the `public` folder
- Modify colors and styles to match your brand
- Update project details and certificates

### Step 6: Commit Your Changes (If You Made Any)

If you customized the portfolio:
1. **Stage your changes**:
   ```bash
   git add .
   ```
2. **Commit your changes**:
   ```bash
   git commit -m "Customize portfolio with my information"
   ```
3. **Push to GitHub**:
   ```bash
   git push origin main
   ```

### Step 7: Deploy to Vercel

#### Method 1: Deploy via Vercel Dashboard (Recommended for Beginners)

1. **Go to [Vercel](https://vercel.com)** and sign in with your GitHub account
2. **Click "Add New Project"** or "Import Project"
3. **Import your GitHub repository**:
   - Click "Import Git Repository"
   - Find and select your forked repository from the list
   - Click "Import"
4. **Configure your project**:
   - **Project Name**: Choose a name for your project (or keep the default)
   - **Framework Preset**: Vercel should auto-detect "Next.js"
   - **Root Directory**: Leave as `./` (default)
   - **Build Command**: `npm run build` (default)
   - **Output Directory**: `.next` (default)
   - **Install Command**: `npm install` (default)
5. **Add Environment Variables** (if needed):
   - Click "Environment Variables"
   - Add any required environment variables
   - For this portfolio, you typically don't need any
6. **Click "Deploy"**
7. **Wait for deployment** to complete (usually takes 1-3 minutes)
8. **Your site is live!** Vercel will provide you with a URL like `https://your-project.vercel.app`

#### Method 2: Deploy via Vercel CLI (Advanced)

1. **Install Vercel CLI**:
   ```bash
   npm install -g vercel
   ```
2. **Login to Vercel**:
   ```bash
   vercel login
   ```
3. **Deploy from your project directory**:
   ```bash
   vercel
   ```
4. **Follow the prompts**:
   - Set up and deploy? `Y`
   - Which scope? Select your account
   - Link to existing project? `N`
   - What's your project's name? Enter a name or press Enter
   - In which directory is your code located? `./`
   - Want to override the settings? `N`
5. **Deploy to production**:
   ```bash
   vercel --prod
   ```

### Step 8: Configure Custom Domain (Optional)

1. **Go to your project** in the Vercel dashboard
2. **Click "Settings"** → **"Domains"**
3. **Add your custom domain**:
   - Enter your domain name
   - Click "Add"
4. **Configure DNS settings** with your domain provider:
   - Add the DNS records provided by Vercel
   - Wait for DNS propagation (can take up to 48 hours)
5. **Your site will be accessible** via your custom domain

### Step 9: Automatic Deployments

Vercel automatically deploys your site when you push to GitHub:
1. **Make changes** to your code locally
2. **Commit and push** to GitHub:
   ```bash
   git add .
   git commit -m "Your commit message"
   git push origin main
   ```
3. **Vercel automatically detects** the push and deploys the new version
4. **Check deployment status** in the Vercel dashboard

### 🎉 Congratulations!

Your portfolio is now live on the internet! You can share your Vercel URL with anyone.

### 📝 Useful Tips

- **Preview Deployments**: Every pull request gets its own preview URL
- **Rollback**: You can rollback to any previous deployment in the Vercel dashboard
- **Analytics**: Enable Vercel Analytics to track your site's performance
- **Logs**: Check deployment logs in Vercel dashboard if something goes wrong
- **Environment Variables**: Update them in Vercel dashboard under Settings → Environment Variables

### 🆘 Troubleshooting

**Build fails on Vercel:**
- Check the build logs in Vercel dashboard
- Make sure the project builds locally with `npm run build`
- Verify all dependencies are in `package.json`

**Site doesn't update after pushing:**
- Check the Deployments tab in Vercel dashboard
- Verify the correct branch is being deployed
- Check if the deployment failed

**404 errors:**
- Make sure your routes are correctly configured
- Check that all files are committed and pushed to GitHub

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
