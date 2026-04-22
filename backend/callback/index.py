import json
import os
import smtplib
from email.mime.text import MIMEText


def handler(event: dict, context) -> dict:
    """Приём заявки на обратный звонок и отправка уведомления на email"""

    if event.get('httpMethod') == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'POST, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Max-Age': '86400',
            },
            'body': ''
        }

    body = json.loads(event.get('body') or '{}')
    name = body.get('name', '').strip()
    phone = body.get('phone', '').strip()

    if not name or not phone:
        return {
            'statusCode': 400,
            'headers': {'Access-Control-Allow-Origin': '*'},
            'body': json.dumps({'error': 'Укажите имя и телефон'})
        }

    smtp_user = os.environ.get('SMTP_USER', '')
    smtp_pass = os.environ.get('SMTP_PASS', '')
    notify_email = 'reklmatver@bk.ru'

    if smtp_user and smtp_pass:
        msg = MIMEText(
            f"Новая заявка на обратный звонок!\n\nИмя: {name}\nТелефон: {phone}",
            'plain', 'utf-8'
        )
        msg['Subject'] = f"Заявка от {name} — АлмазМозаика"
        msg['From'] = smtp_user
        msg['To'] = notify_email

        with smtplib.SMTP_SSL('smtp.mail.ru', 465) as server:
            server.login(smtp_user, smtp_pass)
            server.sendmail(smtp_user, notify_email, msg.as_string())

    return {
        'statusCode': 200,
        'headers': {'Access-Control-Allow-Origin': '*'},
        'body': json.dumps({'ok': True})
    }