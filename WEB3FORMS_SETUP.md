# 📧 Web3Forms Setup Guide

## 🎯 Objective
Configure the contact form to send emails to **sarbaxio@gmail.com**

## 📝 Steps to Setup

### 1. Get Your Access Key

1. Go to **https://web3forms.com/**
2. Enter your email: **sarbaxio@gmail.com**
3. Click "Create Access Key"
4. Check your email (sarbaxio@gmail.com) for the verification link
5. Click the verification link
6. Copy your **Access Key** (looks like: `xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx`)

### 2. Update index.html

Replace this line in `index.html`:

```html
<input type="hidden" name="access_key" value="YOUR_ACCESS_KEY_HERE">
```

With your actual key:

```html
<input type="hidden" name="access_key" value="YOUR_ACTUAL_KEY">
```

### 3. Test the Form

1. Open the website
2. Fill out the contact form
3. Submit
4. Check **sarbaxio@gmail.com** for the email

## ✅ What's Already Configured

- ✅ Form action points to Web3Forms API
- ✅ All form fields have proper `name` attributes
- ✅ Subject line: "New Contact Form Submission from SARBAXIO"
- ✅ From name: "SARBAXIO Contact Form"

## 🔧 Form Fields Sent

- **name** - Contact's name
- **email** - Contact's email
- **phone** - Contact's phone (optional)
- **service** - Selected service
- **message** - Message content

## 🚀 Alternative: Formspree

If you prefer Formspree:

1. Go to **https://formspree.io/**
2. Create free account with sarbaxio@gmail.com
3. Create a new form
4. Replace the form action:

```html
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

## 📋 Notes

- **Web3Forms** is 100% free
- No backend code needed
- Works immediately after setup
- No monthly limits on free plan
- SPAM protection included

---

Built with ❤️ by SARBAXIO Team 🇺🇸
