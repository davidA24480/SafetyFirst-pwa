# SafetyFirst.AI Mobile PWA - Deployment Guide

## 📱 What You've Got

A **Progressive Web App (PWA)** that tradies can install on their phones like a native app!

### Features:
✅ **Installable** - Adds icon to home screen
✅ **Offline Mode** - Works without internet (cached)
✅ **Voice Agent** - Big "Call Now" button to dial voice assistant
✅ **Chat Interface** - Ask WHS questions
✅ **Photo Analysis** - Take photos for hazard identification
✅ **Voice Input** - Speak questions instead of typing
✅ **Push Notifications** - Ready for future alerts
✅ **Fast & Responsive** - Mobile-optimized design

---

## 🚀 How to Deploy

### Option 1: Vercel (Recommended - FREE)

1. **Go to Vercel.com**
   - Sign up with GitHub/Google
   - It's completely free

2. **Upload Files**
   - Drag and drop these 3 files:
     * `safetyfirst-pwa.html` (rename to `index.html`)
     * `manifest.json`
     * `sw.js`

3. **Deploy**
   - Click "Deploy"
   - Get URL: `safetyfirst.vercel.app`

4. **Add Custom Domain**
   - In Vercel: Settings → Domains → Add `safetyfirsthq.ai`
   - In GoDaddy: DNS → Add CNAME record pointing to Vercel

**Total Time:** 10 minutes
**Cost:** $0

---

### Option 2: Netlify (Also FREE)

Same process as Vercel:
1. Drag files to Netlify Drop
2. Deploy
3. Add custom domain

---

### Option 3: GoDaddy Hosting

If you buy GoDaddy hosting:
1. Get cPanel access
2. File Manager → public_html
3. Upload all 3 files
4. Rename to index.html

**Cost:** ~$5-10/month

---

## 📲 How Tradies Install It

### On iPhone:
1. Open Safari
2. Go to `safetyfirsthq.ai`
3. Tap **Share** button (□↑)
4. Tap **"Add to Home Screen"**
5. Tap **"Add"**
6. App icon appears on home screen! ✅

### On Android:
1. Open Chrome
2. Go to `safetyfirsthq.ai`
3. Tap **3-dot menu**
4. Tap **"Install App"** or **"Add to Home Screen"**
5. Tap **"Install"**
6. App icon appears! ✅

---

## ⚙️ Configuration Needed

### 1. Update Voice Number

In `safetyfirst-pwa.html` line 622, change:
```javascript
const VOICE_NUMBER = 'tel:+17658856366';
```

To your ElevenLabs phone number once it's verified.

### 2. API Endpoint

Already configured:
```javascript
const API_URL = 'https://safetyfirstai.app.n8n.cloud/webhook/whs-query';
```

This should work immediately!

---

## 🧪 Testing Checklist

Once deployed, test on a real phone:

### Basic Features
- [ ] App loads on mobile browser
- [ ] Install prompt appears
- [ ] Can install to home screen
- [ ] App opens from home screen icon
- [ ] Voice call button works (dials number)
- [ ] Chat interface works
- [ ] Can send messages
- [ ] Receives AI responses

### Photo Features
- [ ] Camera button works
- [ ] Can take photo
- [ ] Photo preview shows
- [ ] Analyze button works
- [ ] Gets hazard analysis

### Advanced Features
- [ ] Voice input works (speech-to-text)
- [ ] Works offline (cached)
- [ ] Offline banner shows when no internet
- [ ] App stays logged in (persistent)

---

## 🎨 Customization

### Change Colors
In the CSS `:root` section (line 30):
```css
--primary: #D32F2F;        /* Main red color */
--primary-dark: #B71C1C;   /* Darker red */
--secondary: #FF6B35;      /* Orange accent */
```

### Change App Name
In `manifest.json`:
```json
"name": "SafetyFirst.AI - WHS Assistant",
"short_name": "SafetyFirst",
```

### Change Icon
Replace the emoji 🛡️ in:
- HTML (line 622)
- manifest.json (icons section)

Or create proper PNG icons:
- 192x192px for mobile
- 512x512px for high-res displays

---

## 📊 Analytics Integration

Add to `<head>` section:

### Google Analytics
```html
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

### Track Button Clicks
Already included:
- Voice call button
- Chat messages
- Photo uploads

---

## 🔒 HTTPS Required

PWAs **MUST** be served over HTTPS. 

**Good news:** Vercel and Netlify automatically provide HTTPS!

If using your own hosting, get free SSL certificate from:
- Let's Encrypt (free)
- Cloudflare (free)
- GoDaddy SSL (paid)

---

## 🚨 Common Issues & Fixes

### Issue: Install prompt doesn't show
**Fix:** 
- Make sure HTTPS is enabled
- Check manifest.json is loading
- Try on different browser

### Issue: Service worker not registering
**Fix:**
- Check browser console for errors
- Make sure sw.js is in root directory
- Clear cache and reload

### Issue: Voice call doesn't work
**Fix:**
- Check VOICE_NUMBER is correct
- Make sure phone can make calls
- Test on real device (not simulator)

### Issue: Camera won't open
**Fix:**
- Check browser permissions
- Use HTTPS (required for camera)
- Test on real device

---

## 📱 Distribution Ideas

### For Tradies:
1. **QR Code on business cards**
   - Generate QR for safetyfirsthq.ai
   - Print on cards/posters

2. **SMS Campaign**
   - Text: "Install SafetyFirst app: safetyfirsthq.ai"

3. **Toolbox Talks**
   - Show how to install at site meetings

4. **Site Signage**
   - Posters with QR codes at entry

---

## 📈 Future Enhancements

### Phase 2:
- [ ] Push notifications for safety alerts
- [ ] Offline regulation cache
- [ ] GPS location for site-specific rules
- [ ] Digital SWMS forms
- [ ] Incident reporting

### Phase 3:
- [ ] Wearable device integration
- [ ] Multiple languages
- [ ] Team collaboration
- [ ] Client management dashboard

---

## 💰 Costs

**Current:**
- Hosting: $0 (Vercel/Netlify)
- Domain: $12/year (already have)
- **Total: $0/month**

**Optional:**
- Custom app icons: $50-200 (designer)
- Push notification service: $0-20/month
- Analytics: $0 (Google Analytics)

---

## 🎯 Next Steps

1. **Deploy to Vercel** (10 minutes)
2. **Test on your phone** (5 minutes)
3. **Update voice number** when ElevenLabs ready
4. **Share with 5 tradies** for feedback
5. **Iterate based on feedback**

---

## 📞 Support

If you need help:
1. Check browser console for errors (F12)
2. Test on different device/browser
3. Check all files uploaded correctly
4. Verify HTTPS is working

---

**You now have a professional mobile app that tradies can install and use on any job site!** 🎉

No App Store approval needed. No monthly app fees. Just works! 📱✨
