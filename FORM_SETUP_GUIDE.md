# 📧 Contact Form Setup Guide

## Current Status
✅ Form HTML is ready with Web3Forms integration
✅ Form validation is working
❌ **NEEDS:** Access Key from Web3Forms to send emails to **sarbaxio@gmail.com**

---

## 🚀 Quick Setup (5 minutes)

### Step 1: Get Your Access Key

1. Go to **https://web3forms.com**
2. Click **"Get Started Free"**
3. Enter email: **sarbaxio@gmail.com**
4. Click **"Create Access Key"**
5. You'll receive an email with your **Access Key** (looks like: `a1b2c3d4-e5f6-7g8h-9i0j-k1l2m3n4o5p6`)

### Step 2: Add Access Key to Your Site

1. Open `index.html`
2. Find line **397** (search for `YOUR_ACCESS_KEY_HERE`)
3. Replace `YOUR_ACCESS_KEY_HERE` with your actual Access Key

**Example:**
```html
<!-- BEFORE -->
<input type="hidden" name="access_key" value="YOUR_ACCESS_KEY_HERE">

<!-- AFTER -->
<input type="hidden" name="access_key" value="a1b2c3d4-e5f6-7g8h-9i0j-k1l2m3n4o5p6">
```

### Step 3: Commit and Push

```bash
cd /home/user/webapp/sarbaxio
git add index.html
git commit -m "feat: Add Web3Forms access key for contact form"
git push origin genspark_ai_developer
```

### Step 4: Test the Form

1. Go to your live site
2. Fill out the contact form
3. Submit
4. Check **sarbaxio@gmail.com** for the email!

---

## 📋 What the Form Will Send

When someone submits the form, you'll receive an email with:

- **Subject:** "New Contact Form Submission from SARBAXIO"
- **From:** SARBAXIO Contact Form
- **To:** sarbaxio@gmail.com

**Email Content:**
```
Name: [Customer Name]
Email: [Customer Email]
Phone: [Customer Phone]
Service: [Selected Service]
Message: [Customer Message]
```

---

## 🔧 Technical Details

### Form Configuration:
- **Action:** `https://api.web3forms.com/submit`
- **Method:** `POST`
- **Hidden Fields:**
  - `access_key` - Your unique Web3Forms key
  - `subject` - Email subject line
  - `from_name` - Shows as sender name

### Form Fields:
- `name` (required) - Customer name
- `email` (required) - Customer email
- `phone` (optional) - Customer phone
- `service` (required) - Selected service
- `message` (required) - Customer message

---

## ⚡ Alternative: If You Already Have the Access Key

If you already have a Web3Forms account with **sarbaxio@gmail.com**, just give me the Access Key and I'll update the code immediately!

**Just tell me:**
> "My Web3Forms Access Key is: [your-key-here]"

And I'll update it in the next commit! 🚀

---

## 🆘 Troubleshooting

### Form not sending?
1. Check that Access Key is correct (no spaces, complete key)
2. Verify email **sarbaxio@gmail.com** in Web3Forms dashboard
3. Check spam folder for test emails

### Need different email service?
I can also set up:
- **Formspree** (easier, 50 forms/month free)
- **EmailJS** (200 emails/month free)
- **Custom backend** (if you have a server)

---

## 📞 Current Form Setup

**Sends to:** sarbaxio@gmail.com (once Access Key is added)
**Reply-to:** Customer's email address
**Subject:** "New Contact Form Submission from SARBAXIO"

---

**Need help?** Just ask! 🚀

Built with ❤️ by SARBAXIO Team 🇺🇸
