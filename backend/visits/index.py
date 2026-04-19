import json
import os
import psycopg2

def handler(event: dict, context) -> dict:
    """Инкрементирует счётчик посещений и возвращает текущее значение."""

    if event.get('httpMethod') == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Max-Age': '86400'
            },
            'body': ''
        }

    conn = psycopg2.connect(os.environ['DATABASE_URL'])
    cur = conn.cursor()

    if event.get('httpMethod') == 'POST':
        cur.execute(
            "UPDATE t_p86220228_quantum_networking_p.site_visits SET count = count + 1, updated_at = NOW() WHERE id = 1 RETURNING count"
        )
        row = cur.fetchone()
        conn.commit()
        count = int(row[0]) if row else 0
    else:
        cur.execute(
            "SELECT count FROM t_p86220228_quantum_networking_p.site_visits WHERE id = 1"
        )
        row = cur.fetchone()
        count = int(row[0]) if row else 0

    cur.close()
    conn.close()

    return {
        'statusCode': 200,
        'headers': {'Access-Control-Allow-Origin': '*'},
        'body': json.dumps({'count': count})
    }
