\connect myplaylist_development

CREATE TABLE IF NOT EXISTS songs (
    id BIGSERIAL PRIMARY KEY,
    artist VARCHAR(1024),
    song VARCHAR(1024),
    src VARCHAR(255)
);