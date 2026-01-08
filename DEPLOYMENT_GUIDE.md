# 🚀 SARBAXIO Deployment Guide

## ✅ CURRENT STATUS (8 Jan 2026)

### Production Site
- **URL:** https://sarbaxio.com
- **Status:** ✅ LIVE and WORKING
- **HTTPS:** ✅ Enabled (cert expires: 2026-04-07)
- **Server:** GitHub Pages

### GitHub Repository
- **Repo:** https://github.com/sarbaxio-a11y/sarbaxio
- **Owner:** sarbaxio-a11y
- **Branch:** gh-pages (production)

---

## 📊 GITHUB PAGES CONFIGURATION

### Current Settings (DO NOT CHANGE!)
```json
{
  "status": "built",
  "source": {
    "branch": "gh-pages",
    "path": "/"
  },
  "cname": "sarbaxio.com",
  "https_enforced": false
}
```

### Branch Structure
```
main         → Development branch (latest code)
gh-pages     → Production branch (live site)
```

### Files in Production (34 total)
```
✅ index.html          - Main page
✅ styles.css          - Styles with blue theme
✅ script.js           - Main JavaScript
✅ translations.js     - EN/GR/ES translations
✅ favicon.svg         - Blue 'S' logo
✅ CNAME               - Custom domain config
✅ ai-chatbot.html     - AI chatbot page
✅ demos/              - 4 demo pages
✅ 22 documentation files
```

---

## 🔒 WHAT TO PRESERVE

### 🚫 NEVER DELETE OR MODIFY:

1. **gh-pages branch**
   - This is your production branch
   - Deletion = Site goes down immediately
   - Always keep in sync with main

2. **CNAME file**
   - Content: `sarbaxio.com`
   - Deletion = Site becomes inaccessible via custom domain
   - Will revert to: https://sarbaxio-a11y.github.io/sarbaxio/

3. **GitHub Pages Settings**
   - Source: gh-pages branch
   - Path: / (root)
   - If disabled = 404 on all pages

4. **DNS Records (GoDaddy)**
   - A Records → GitHub IPs
   - CNAME → sarbaxio-a11y.github.io
   - Changes = 24-48h propagation time

---

## 🛡️ DISASTER RECOVERY

### If Site Goes Down (404):

**STEP 1: Check GitHub Pages**
```bash
# Verify Pages is enabled
gh api repos/sarbaxio-a11y/sarbaxio/pages

# Should show: "status": "built"
# If "Not Found" → Pages is disabled
```

**STEP 2: Re-enable if needed**
```
1. Go to: https://github.com/sarbaxio-a11y/sarbaxio/settings/pages
2. Source: Deploy from a branch
3. Branch: gh-pages
4. Folder: / (root)
5. Click Save
6. Wait 1-2 minutes
```

**STEP 3: Verify CNAME**
```bash
# Check if CNAME exists in gh-pages branch
git show origin/gh-pages:CNAME

# Should show: sarbaxio.com
# If missing, recreate it
```

**STEP 4: Check DNS**
```bash
# Test domain
curl -I https://sarbaxio.com

# Should return: HTTP/2 200
# If 404 → DNS or Pages issue
```

---

## 🔄 DEPLOYMENT WORKFLOW

### When Making Changes:

**Development → Production:**
```bash
# 1. Work on main branch
git checkout main
# ... make changes ...
git add .
git commit -m "feat: description"
git push origin main

# 2. Sync to gh-pages (production)
git checkout gh-pages
git merge main
git push origin gh-pages

# 3. Wait 1-2 minutes for deployment
# 4. Verify: https://sarbaxio.com
```

### Safe Deployment Checklist:
```
□ Test locally first
□ Commit to main branch
□ Merge to gh-pages
□ Push to GitHub
□ Wait for deployment (1-2 min)
□ Test live site
□ Check console for errors
□ Verify on mobile & desktop
```

---

## 🆘 EMERGENCY CONTACTS

### GitHub Settings:
- **Repository:** https://github.com/sarbaxio-a11y/sarbaxio
- **Pages Settings:** https://github.com/sarbaxio-a11y/sarbaxio/settings/pages
- **Branches:** https://github.com/sarbaxio-a11y/sarbaxio/branches

### DNS Settings:
- **Provider:** GoDaddy
- **Domain:** sarbaxio.com
- **DNS Management:** (Your GoDaddy account)

### Backup URLs:
- **GitHub Pages:** https://sarbaxio-a11y.github.io/sarbaxio/
- **Repository Clone:** Can always re-download from GitHub

---

## 📋 VERIFICATION CHECKLIST

### Everything is OK if:
```
✅ gh api repos/sarbaxio-a11y/sarbaxio/pages shows "built"
✅ curl -I https://sarbaxio.com returns "HTTP/2 200"
✅ Branch gh-pages exists on GitHub
✅ CNAME file contains "sarbaxio.com"
✅ Site loads in browser without errors
✅ All features work (navigation, languages, mobile menu)
```

### Red Flags:
```
❌ GitHub Pages shows "Not Found" → Pages disabled
❌ curl returns 404 → Pages or DNS issue
❌ gh-pages branch missing → Create from main
❌ CNAME file missing → Add: echo "sarbaxio.com" > CNAME
❌ Site not loading → Check all above
```

---

## 🎯 KEY COMMANDS

### Check Status:
```bash
# Pages status
gh api repos/sarbaxio-a11y/sarbaxio/pages --jq '.status'

# Test site
curl -I https://sarbaxio.com

# Check branches
git branch -a
```

### Sync Branches:
```bash
# Update gh-pages with latest from main
git checkout gh-pages
git merge main
git push origin gh-pages
```

### Emergency Restore:
```bash
# If gh-pages is deleted
git checkout main
git checkout -b gh-pages
git push -u origin gh-pages
# Then re-enable Pages in GitHub settings
```

---

## 💡 IMPORTANT NOTES

1. **GitHub Pages builds from gh-pages branch**
   - Any changes must be pushed to this branch
   - Changes to main only won't update the live site

2. **Deployment takes 1-2 minutes**
   - Be patient after pushing
   - Check deployment status in Actions tab

3. **CNAME must exist in gh-pages**
   - Without it, custom domain won't work
   - Always verify after major changes

4. **HTTPS certificate auto-renews**
   - GitHub handles this automatically
   - Current cert expires: 2026-04-07
   - Will renew ~30 days before expiry

5. **Branches must stay in sync**
   - main = development
   - gh-pages = production
   - Regular merging keeps them aligned

---

## 📞 TROUBLESHOOTING

### Problem: Site shows 404
**Solution:**
1. Check if Pages is enabled (Settings → Pages)
2. Verify gh-pages branch exists
3. Check CNAME file is present
4. Wait 2 minutes for deployment
5. Clear browser cache

### Problem: Old content showing
**Solution:**
1. Verify gh-pages has latest commits
2. Check GitHub Actions for deployment status
3. Hard refresh browser (Ctrl+Shift+R)
4. Wait for cache to expire (5-10 min)

### Problem: Custom domain not working
**Solution:**
1. Verify CNAME file contains: sarbaxio.com
2. Check DNS records in GoDaddy
3. Wait for DNS propagation (up to 48h)
4. Test with: curl -I https://sarbaxio.com

---

## ✅ FINAL SAFETY CHECKLIST

Before making ANY changes:
```
□ Backup: git clone the repo locally
□ Document: what you're changing and why
□ Test: verify locally before pushing
□ Commit: meaningful commit messages
□ Push: to main first, then gh-pages
□ Verify: check live site after 2 minutes
□ Monitor: watch for errors in console
```

---

## 📅 Last Updated: 8 January 2026

**Status:** ✅ Everything is working perfectly
**Next Review:** When making major changes
**Maintainer:** sarbaxio-a11y

---

**🎉 Your site is safe and stable! Keep this guide for reference.**
