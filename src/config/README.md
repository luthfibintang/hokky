# Configuration Files

This folder contains configuration files for the application.

## WhatsApp Configuration

**File:** `whatsapp.js`

To update your WhatsApp Business phone number:

1. Open `src/config/whatsapp.js`
2. Replace the `phoneNumber` value with your actual WhatsApp Business number
3. Use international format: country code + phone number (no + sign, no spaces)

**Example:**
```javascript
export const WHATSAPP_CONFIG = {
  phoneNumber: '6281234567890', // Indonesia format
};
```

**Common country codes:**
- Indonesia: 62
- Malaysia: 60
- Singapore: 65
- USA: 1
- UK: 44

**Important:** Make sure the number is registered with WhatsApp Business!
