# 🌐 Custom Domain Setup - SARBAXIO

## Ρύθμιση του www.sarbaxio.com & sarbaxio.com

### ✅ Έτοιμο στο GitHub
- [x] CNAME file δημιουργήθηκε
- [x] Ανέβηκε στο repository
- [ ] DNS configuration (χρειάζεται action από εσένα)
- [ ] GitHub Pages enabled με custom domain

---

## 📋 ΒΗΜΑ 1: Ρύθμιση DNS στον Domain Registrar σου

Πήγαινε στον domain provider σου (π.χ. GoDaddy, Namecheap, Google Domains, Hostinger, Papaki, κλπ) και πρόσθεσε τα παρακάτω DNS records:

### 🔹 Για το κύριο domain (sarbaxio.com):

**Διέγραψε** υπάρχοντα A records και πρόσθεσε αυτά:

```
Type: A
Name: @ (ή άδειο, ή sarbaxio.com)
Value/Points to: 185.199.108.153
TTL: 3600 (ή Auto)

Type: A
Name: @ (ή άδειο, ή sarbaxio.com)
Value/Points to: 185.199.109.153
TTL: 3600

Type: A
Name: @ (ή άδειο, ή sarbaxio.com)
Value/Points to: 185.199.110.153
TTL: 3600

Type: A
Name: @ (ή άδειο, ή sarbaxio.com)
Value/Points to: 185.199.111.153
TTL: 3600
```

### 🔹 Για το www subdomain (www.sarbaxio.com):

```
Type: CNAME
Name: www
Value/Points to: sarbaxio-a11y.github.io
TTL: 3600 (ή Auto)
```

---

## 📋 ΒΗΜΑ 2: Enable GitHub Pages με Custom Domain

1. Πήγαινε στο: **https://github.com/sarbaxio-a11y/sarbaxio**
2. Κάνε κλικ στο **Settings** (πάνω δεξιά)
3. Στο αριστερό menu → **Pages**
4. Στο **Source** → Επίλεξε **main** branch
5. Στο **Custom domain** → Γράψε: **www.sarbaxio.com**
6. Κάνε κλικ **Save**
7. ✅ Ενεργοποίησε το **Enforce HTTPS** (μετά από λίγα λεπτά)

---

## ⏱️ Χρόνος Ενεργοποίησης

- **DNS propagation**: 5 λεπτά - 48 ώρες (συνήθως 1-2 ώρες)
- **SSL Certificate**: Αυτόματο μετά το DNS propagation (5-10 λεπτά)

### Έλεγχος DNS:
Μπορείς να ελέγξεις αν έχει ενεργοποιηθεί το DNS με:
```bash
# Για το κύριο domain
dig sarbaxio.com +noall +answer

# Για το www
dig www.sarbaxio.com +noall +answer
```

Ή online: https://dnschecker.org/

---

## 📱 Αναμενόμενα Αποτελέσματα

Μετά την ολοκλήρωση της ρύθμισης:

✅ **www.sarbaxio.com** → Θα δείχνει το website σου  
✅ **sarbaxio.com** → Θα κάνει redirect στο www.sarbaxio.com  
✅ **HTTPS** → Αυτόματο SSL certificate (δωρεάν)

---

## 🔧 Troubleshooting

### Πρόβλημα: "Domain's DNS record could not be retrieved"
**Λύση:** Περίμενε 1-2 ώρες για DNS propagation

### Πρόβλημα: "HTTPS certificate is being provisioned"
**Λύση:** Αυτό είναι φυσιολογικό, περίμενε 5-10 λεπτά

### Πρόβλημα: "Improperly configured domain"
**Λύση:** Έλεγξε ότι τα DNS records είναι σωστά:
- A records δείχνουν στα 4 GitHub IPs
- CNAME record για www δείχνει στο sarbaxio-a11y.github.io

---

## 📞 Δημοφιλείς Domain Providers - Οδηγίες

### GoDaddy:
1. My Products → DNS → Manage Zones
2. Πρόσθεσε τα A records και CNAME

### Namecheap:
1. Domain List → Manage → Advanced DNS
2. Add New Record → Πρόσθεσε τα records

### Google Domains:
1. DNS → Resource Records
2. Πρόσθεσε τα records

### Hostinger:
1. Domains → DNS / Nameservers
2. Διαχείριση DNS Records

### Papaki (Ελληνικό):
1. My Domains → Διαχείριση
2. DNS Management → Πρόσθεσε records

---

## ✅ Checklist

- [ ] Πρόσθεσα τα 4 A records για sarbaxio.com
- [ ] Πρόσθεσα το CNAME record για www.sarbaxio.com
- [ ] Merge του Pull Request στο main branch
- [ ] Ενεργοποίησα το GitHub Pages με custom domain
- [ ] Περίμενα για DNS propagation (1-2 ώρες)
- [ ] Ενεργοποίησα το Enforce HTTPS
- [ ] Το site λειτουργεί σε www.sarbaxio.com ✅
- [ ] Το sarbaxio.com κάνει redirect σε www ✅

---

## 🎉 Έτοιμο!

Μετά την ολοκλήρωση όλων των βημάτων, το website σου θα είναι διαθέσιμο στο:

🌐 **https://www.sarbaxio.com**  
🌐 **https://sarbaxio.com** (redirect)

---

**Τελευταία Ενημέρωση:** 2024  
**Repository:** https://github.com/sarbaxio-a11y/sarbaxio
