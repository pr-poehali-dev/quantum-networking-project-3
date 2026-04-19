CREATE TABLE IF NOT EXISTS t_p86220228_quantum_networking_p.site_visits (
  id SERIAL PRIMARY KEY,
  count BIGINT NOT NULL DEFAULT 0,
  updated_at TIMESTAMP DEFAULT NOW()
);

INSERT INTO t_p86220228_quantum_networking_p.site_visits (count) VALUES (1000);
