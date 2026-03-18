
HMAC_KEY=$(openssl rand -base64 48)

FILE="LOCAL=true
DB_FILE_NAME=file:reservas.db
DB_TOKEN=xxx
HMAC_KEY=$HMAC_KEY
EMAIL_ADDRESS=santeleco@daat.uvigo.es
RESEND_API_KEY=re_xxx"

echo "$FILE" > .env.local