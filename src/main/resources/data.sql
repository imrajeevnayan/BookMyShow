-- =============================================
-- BookMyShow – High-Fidelity Bulk Seed Data (PostgreSQL)
-- =============================================

-- Clear existing data
TRUNCATE TABLE shows CASCADE;
TRUNCATE TABLE seats CASCADE;
TRUNCATE TABLE screens CASCADE;
TRUNCATE TABLE theaters CASCADE;
TRUNCATE TABLE movies CASCADE;
TRUNCATE TABLE cities CASCADE;
TRUNCATE TABLE users CASCADE;

-- 1. Cities
INSERT INTO cities (name, state) VALUES 
('Mumbai', 'Maharashtra'), ('Delhi', 'Delhi'), ('Bangalore', 'Karnataka'), 
('Hyderabad', 'Telangana'), ('Chennai', 'Tamil Nadu'), ('Pune', 'Maharashtra'), 
('Kolkata', 'West Bengal'), ('Ahmedabad', 'Gujarat'), ('Jaipur', 'Rajasthan'),
('Lucknow', 'Uttar Pradesh'), ('Kochi', 'Kerala'), ('Indore', 'Madhya Pradesh');

-- 2. Users
INSERT INTO users (name, email, password, phone, created_at) VALUES 
('Rajeev Mehra', 'rajeev@example.com', 'pass123', '9999999999', CURRENT_TIMESTAMP),
('Simran Kaur', 'simran@example.com', 'pass123', '8888888888', CURRENT_TIMESTAMP);

-- 3. Movies (Real Blockbusters + Programmatic)
-- Using picsum seeds for 100% reliability in images
INSERT INTO movies (title, description, genre, language, duration_minutes, rating, release_date, poster_url) VALUES 
('Pushpa 2: The Rule', 'The rule of Pushpa Raj continue.', 'Action', 'Telugu', 165, 9.2, '2024-12-05', 'https://picsum.photos/seed/pushpa2/500/750'),
('Stree 2', 'A new terror in Chanderi.', 'Horror/Comedy', 'Hindi', 147, 8.5, '2024-08-15', 'https://picsum.photos/seed/stree2/500/750'),
('Kalki 2898 AD', 'The modern avatar of Vishnu.', 'Sci-Fi/Action', 'Telugu', 181, 8.1, '2024-06-27', 'https://picsum.photos/seed/kalki/500/750'),
('Jawan', 'A soldier with a vision.', 'Action', 'Hindi', 169, 7.8, '2023-09-07', 'https://picsum.photos/seed/jawan/500/750'),
('Animal', 'Excessive love for father.', 'Action/Drama', 'Hindi', 201, 7.6, '2023-12-01', 'https://picsum.photos/seed/animal/500/750'),
('RRR', 'Fire and Water.', 'Action', 'Telugu', 187, 8.7, '2022-03-25', 'https://picsum.photos/seed/rrr/500/750'),
('Pathaan', 'A spy on a mission.', 'Action/Thriller', 'Hindi', 146, 7.1, '2023-01-25', 'https://picsum.photos/seed/pathaan/500/750'),
('3 Idiots', 'Chase excellence.', 'Comedy/Drama', 'Hindi', 170, 8.4, '2009-12-25', 'https://picsum.photos/seed/3idiots/500/750'),
('DDLJ', 'Fall in love again.', 'Romance', 'Hindi', 189, 8.2, '1995-10-20', 'https://picsum.photos/seed/ddlj/500/750'),
('Vikram', 'The master of disguise.', 'Action/Thriller', 'Tamil', 175, 8.3, '2022-06-03', 'https://picsum.photos/seed/vikram/500/750');

-- 4. Programmatic Movies (to hit 100+)
DO $$
DECLARE
    genres TEXT[] := ARRAY['Action', 'Comedy', 'Drama', 'Thriller', 'Romance', 'Horror', 'Sci-Fi', 'Sport'];
    langs TEXT[] := ARRAY['Hindi', 'Telugu', 'Tamil', 'English', 'Kannada', 'Malayalam'];
    movie_title TEXT;
    r_genre TEXT;
    r_lang TEXT;
BEGIN
   FOR i IN 11..110 LOOP
      movie_title := 'Blockbuster Movie ' || i;
      r_genre := genres[1 + floor(random() * 8)];
      r_lang := langs[1 + floor(random() * 6)];
      
      INSERT INTO movies (title, description, genre, language, duration_minutes, rating, release_date, poster_url) 
      VALUES (movie_title, 'An epic ' || r_lang || ' movie from the ' || r_genre || ' genre.', 
              r_genre, r_lang, 120 + (i % 60), 6.5 + (random() * 3.0), '2023-01-01', 
              'https://picsum.photos/seed/' || i || '/500/750');
   END LOOP;
END $$;

-- 5. Theaters
INSERT INTO theaters (name, address, city_id) VALUES 
('PVR Phoenix', 'Lower Parel, Mumbai', 1),
('AMB Cinemas', 'Gachibowli, Hyderabad', 4),
('Sathyam Cinemas', 'Royapettah, Chennai', 5),
('PVR Orion Mall', 'Rajajinagar, Bangalore', 3),
('INOX Eros', 'Connaught Place, Delhi', 2),
('Raj Mandir', 'Jaipur', 9),
('Wave Cinemas', 'Lucknow', 10);

-- 6. Screens
INSERT INTO screens (name, total_seats, theater_id) VALUES 
('Screen 1', 100, 1), ('IMAX 3D', 200, 1),
('Screen A', 150, 2), ('IMAX Large', 300, 2),
('Sathyam Main', 500, 3),
('PVR Screen 1', 180, 4),
('INOX Screen 1', 160, 5);

-- 7. Shows (Dynamic for first 20 movies)
DO $$
DECLARE
    m_id INT;
    s_id INT;
BEGIN
    FOR m_id IN 1..20 LOOP
        FOR s_id IN 1..7 LOOP
            IF random() > 0.5 THEN
                INSERT INTO shows (movie_id, screen_id, show_date, start_time, end_time, ticket_price)
                VALUES (m_id, s_id, CURRENT_DATE, '10:00:00', '13:00:00', 250.00 + (random() * 250.00));
            END IF;
        END LOOP;
    END LOOP;
END $$;

-- 8. Seats (Sample for first screen)
INSERT INTO seats (seat_number, seat_row, seat_col, seat_type, screen_id)
SELECT 
    chr(65 + (i/10)) || (i%10 + 1),
    chr(65 + (i/10)),
    (i%10 + 1),
    CASE WHEN (i/10) < 2 THEN 'PREMIUM' ELSE 'REGULAR' END,
    1
FROM generate_series(0, 49) AS i;
