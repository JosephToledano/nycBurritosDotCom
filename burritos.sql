SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;


CREATE TABLE public.users (
	"_id" serial NOT NULL,
  "username" varchar NOT NULL,
	"password" varchar,
	PRIMARY KEY ("_id")
 ) WITH (
  OIDS=FALSE
);


CREATE TABLE public.reviews (
	"_id" serial NOT NULL,
  "user_id" bigint NOT NULL,
	"burrito_type" varchar,
	"restaurant_name" varchar,
  "neighborhood" varchar,
  "borough" varchar,
  "image_src" varchar,
  "price" bigint,
  "rating" bigint,
   PRIMARY KEY ("_id"),
    CONSTRAINT "fk_users"
      FOREIGN KEY("user_id")
        REFERENCES public.users("_id")
) WITH (
  OIDS=FALSE
);