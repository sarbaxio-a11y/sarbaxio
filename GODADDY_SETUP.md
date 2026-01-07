# 🌐 GoDaddy DNS Setup για SARBAXIO

## Οδηγίες Βήμα-Βήμα για GoDaddy

### 📍 Βήμα 1: Πρόσβαση στο GoDaddy DNS Management

1. Πήγαινε στο: **https://dcc.godaddy.com/manage/dns**
2. Ή: My Products → Domains → **sarbaxio.com** → DNS

### 🔧 Βήμα 2: Διαγραφή Υπαρχόντων Records (αν υπάρχουν)

**Διέγραψε αυτά τα records αν υπάρχουν:**
- Παλιά A records που δείχνουν σε άλλη IP
- CNAME record για @ (root domain)
- Forwarding rules (parking page)

### ➕ Βήμα 3: Προσθήκη Νέων DNS Records

#### 🔹 A RECORDS (για sarbaxio.com)

Κάνε κλικ στο **"ADD"** και πρόσθεσε 4 A records:

```
┌────────────────────────────────────────┐
│ Record 1:                              │
├────────────────────────────────────────┤
│ Type:     A                            │
│ Name:     @                            │
│ Value:    185.199.108.153              │
│ TTL:      1 Hour (ή 3600 seconds)      │
└────────────────────────────────────────┘

┌────────────────────────────────────────┐
│ Record 2:                              │
├────────────────────────────────────────┤
│ Type:     A                            │
│ Name:     @                            │
│ Value:    185.199.109.153              │
│ TTL:      1 Hour                       │
└────────────────────────────────────────┘

┌────────────────────────────────────────┐
│ Record 3:                              │
├────────────────────────────────────────┤
│ Type:     A                            │
│ Name:     @                            │
│ Value:    185.199.110.153              │
│ TTL:      1 Hour                       │
└────────────────────────────────────────┘

┌────────────────────────────────────────┐
│ Record 4:                              │
├────────────────────────────────────────┤
│ Type:     A                            │
│ Name:     @                            │
│ Value:    185.199.111.153              │
│ TTL:      1 Hour                       │
└────────────────────────────────────────┘
```

#### 🔹 CNAME RECORD (για www.sarbaxio.com)

Κάνε κλικ στο **"ADD"** και πρόσθεσε:

```
┌────────────────────────────────────────┐
│ CNAME Record:                          │
├────────────────────────────────────────┤
│ Type:     CNAME                        │
│ Name:     www                          │
│ Value:    sarbaxio-a11y.github.io      │
│ TTL:      1 Hour                       │
└────────────────────────────────────────┘
```

⚠️ **ΣΗΜΑΝΤΙΚΟ:** Το Value για CNAME πρέπει να τελειώνει με τελεία (.) στο GoDaddy:
- Γράψε: `sarbaxio-a11y.github.io.` (με τελεία στο τέλος)
- Ή αν όχι, το GoDaddy θα την προσθέσει αυτόματα

### 💾 Βήμα 4: Αποθήκευση

Κάνε κλικ **"Save"** για κάθε record που προσθέτεις.

---

## 📸 Οπτικός Οδηγός - Πώς θα φαίνονται τα records

Στο GoDaddy DNS Management θα δεις:

```
┌──────┬────────┬──────────────────────────┬──────────┐
│ Type │ Name   │ Value                    │ TTL      │
├──────┼────────┼──────────────────────────┼──────────┤
│ A    │ @      │ 185.199.108.153          │ 1 Hour   │
│ A    │ @      │ 185.199.109.153          │ 1 Hour   │
│ A    │ @      │ 185.199.110.153          │ 1 Hour   │
│ A    │ @      │ 185.199.111.153          │ 1 Hour   │
│ CNAME│ www    │ sarbaxio-a11y.github.io. │ 1 Hour   │
└──────┴────────┴──────────────────────────┴──────────┘
```

---

## ⏱️ Χρόνος Ενεργοποίησης

- **GoDaddy Propagation:** Συνήθως 10-30 λεπτά
- **Παγκόσμια Propagation:** 1-2 ώρες (max 48 ώρες)
- **GitHub SSL Certificate:** 5-10 λεπτά μετά το DNS

---

## ✅ Έλεγχος DNS (μετά από 15-30 λεπτά)

### Online Tools:
- https://dnschecker.org/ → Γράψε: `sarbaxio.com`
- https://www.whatsmydns.net/ → Γράψε: `www.sarbaxio.com`

### Command Line (αν έχεις terminal):
```bash
# Έλεγχος apex domain
nslookup sarbaxio.com

# Έλεγχος www subdomain
nslookup www.sarbaxio.com
```

Θα πρέπει να δεις τις GitHub IPs (185.199.108-111.153)

---

## 🚀 Μετά το DNS Setup - GitHub Pages

Όταν το DNS είναι έτοιμο (μετά από 30 λεπτά):

1. Πήγαινε: **https://github.com/sarbaxio-a11y/sarbaxio**
2. **Settings** → **Pages**
3. **Source:** Deploy from a branch → **main** branch
4. **Custom domain:** `www.sarbaxio.com`
5. Κάνε κλικ **"Save"**
6. Περίμενε 2-3 λεπτά
7. ✅ Ενεργοποίησε **"Enforce HTTPS"**

---

## ⚠️ Συνήθη Προβλήματα & Λύσεις

### ❌ Πρόβλημα: "Domain's DNS record could not be retrieved"
**Λύση:** Το DNS δεν έχει γίνει propagate ακόμα. Περίμενε 30-60 λεπτά.

### ❌ Πρόβλημα: "CNAME already exists"
**Λύση:** Διέγραψε το παλιό CNAME record για "www" πριν προσθέσεις το νέο.

### ❌ Πρόβλημα: "Improperly configured domain"
**Λύση:** 
- Έλεγξε ότι έχεις προσθέσει και τα 4 A records
- Έλεγξε ότι το CNAME record είναι σωστό
- Προσπάθησε να αφαιρέσεις το custom domain από GitHub Pages και να το ξαναβάλεις

### ❌ Πρόβλημα: GoDaddy Forwarding/Parking Page
**Λύση:**
1. Πήγαινε στο Domain Settings
2. Domain Forwarding → **Διέγραψέ το**
3. Parking Page → **Disable**

---

## 📝 Checklist

- [ ] Συνδέθηκα στο GoDaddy
- [ ] Πήγα στο DNS Management για sarbaxio.com
- [ ] Διέγραψα παλιά A records (αν υπήρχαν)
- [ ] Πρόσθεσα τα 4 A records (185.199.108-111.153)
- [ ] Πρόσθεσα το CNAME record (www → sarbaxio-a11y.github.io)
- [ ] Έκανα Save όλα τα records
- [ ] Περίμενα 30 λεπτά για DNS propagation
- [ ] Έκανα check με dnschecker.org ✅
- [ ] Ρύθμισα το GitHub Pages με custom domain
- [ ] Ενεργοποίησα το "Enforce HTTPS"
- [ ] Το site λειτουργεί στο www.sarbaxio.com! 🎉

---

## 📞 GoDaddy Support

Αν χρειαστείς βοήθεια:
- **Phone:** +30 210 45 41 640 (Ελλάδα)
- **Chat:** https://www.godaddy.com/help
- **Support Hours:** 24/7

---

## 🎯 Αναμενόμενο Αποτέλεσμα

Μετά την ολοκλήρωση:

✅ **https://www.sarbaxio.com** → Το website σου  
✅ **https://sarbaxio.com** → Redirect στο www.sarbaxio.com  
✅ **HTTPS** → Αυτόματο SSL certificate (δωρεάν από GitHub)

---

**Τελευταία Ενημέρωση:** 2024-01-07  
**Provider:** GoDaddy  
**Domain:** sarbaxio.com
