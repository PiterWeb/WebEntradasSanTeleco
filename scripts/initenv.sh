
HMAC_KEY=$(openssl rand -base64 48)

FILE="
LOCAL=true
HMAC_KEY=$HMAC_KEY

# DB
DB_FILE_NAME=file:reservas.db
DB_TOKEN=xxx

# RESEND
RESEND_API_KEY=re_xxx

# EMAIL
EMAIL_ADDRESS=santeleco@daat.uvigo.es
GOOGLE_APP_PASSWORD=xxx
"

echo "$FILE" > .env