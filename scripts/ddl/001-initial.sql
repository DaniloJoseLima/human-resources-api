CREATE SCHEMA human_resources;

CREATE TABLE users (
  id VARCHAR(255) NOT NULL,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(100) NOT NULL,
  password VARCHAR(200) NOT NULL,
  updated_at DATETIME(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
  created_at DATETIME(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  PRIMARY KEY (id));

CREATE TABLE ethnicity_types (
  id BIGINT(20) NOT NULL AUTO_INCREMENT,
  name VARCHAR(100) NOT NULL,
  PRIMARY KEY (id));

CREATE TABLE marital_status_types (
  id BIGINT(20) NOT NULL AUTO_INCREMENT,
  name VARCHAR(100) NOT NULL,
  PRIMARY KEY (id));

CREATE TABLE gender_types (
  id BIGINT(20) NOT NULL AUTO_INCREMENT,
  name VARCHAR(100) NOT NULL,
  PRIMARY KEY (id));

CREATE TABLE documents_types (
  id BIGINT(20) NOT NULL AUTO_INCREMENT,
  name VARCHAR(100) NOT NULL,
  PRIMARY KEY (id));

CREATE TABLE contact_types (
  id BIGINT(20) NOT NULL AUTO_INCREMENT,
  name VARCHAR(100) NOT NULL,
  PRIMARY KEY (id));

CREATE TABLE address_types (
  id BIGINT(20) NOT NULL AUTO_INCREMENT,
  name VARCHAR(100) NOT NULL,
  PRIMARY KEY (id));

CREATE TABLE dependent_types (
  id BIGINT(20) NOT NULL AUTO_INCREMENT,
  name VARCHAR(100) NOT NULL,
  PRIMARY KEY (id));

CREATE TABLE schooling_types (
  id BIGINT(20) NOT NULL AUTO_INCREMENT,
  name VARCHAR(100) NOT NULL,
  PRIMARY KEY (id));


CREATE TABLE collaborators (
  id VARCHAR(255) NOT NULL,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(100) NOT NULL,
  birth_date DATETIME NOT NULL,
  mother_name VARCHAR(100) NULL DEFAULT NULL,
  father_name VARCHAR(100) NULL DEFAULT NULL,
  nationality VARCHAR(100) NOT NULL,
  naturalness VARCHAR(100) NOT NULL,
  schooling_type_id BIGINT(20) NOT NULL,
  marital_status_type_id BIGINT(20) NOT NULL,
  ethnicity_type_id BIGINT(20) NOT NULL,
  gender_type_id BIGINT(20) NOT NULL,
  updated_at DATETIME(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
  created_at DATETIME(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  PRIMARY KEY (id),
  INDEX fk_collaborators_schooling_types (schooling_type_id ASC),
  INDEX fk_collaborators_marital_status_types (marital_status_type_id ASC),
  INDEX fk_collaborators_ethnicity_types (ethnicity_type_id ASC),
  INDEX fk_collaborators_gender_types (gender_type_id ASC),
  CONSTRAINT fk_collaborators_schooling_types
    FOREIGN KEY (schooling_type_id)
    REFERENCES schooling_types (id)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT fk_collaborators_marital_status_types
    FOREIGN KEY (marital_status_type_id)
    REFERENCES marital_status_types (id)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT fk_collaborators_ethnicity_types
    FOREIGN KEY (ethnicity_type_id)
    REFERENCES ethnicity_types (id)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT fk_collaborators_gender_types
    FOREIGN KEY (gender_type_id)
    REFERENCES gender_types (id)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);

CREATE TABLE documents (
  id BIGINT(20) NOT NULL,
  document_type_id BIGINT(20) NOT NULL,
  collaborator_id VARCHAR(255) NOT NULL,
  document_number VARCHAR(60) NOT NULL,
  expedition_date DATETIME NOT NULL,
  expedition_uf VARCHAR(10) NULL,
  expedition_agency VARCHAR(50) NULL,
  updated_at DATETIME(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
  created_at DATETIME(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  PRIMARY KEY (id),
  INDEX fk_documents_document_types (document_type_id ASC),
  INDEX fk_documents_collaborators (collaborator_id ASC),
  CONSTRAINT fk_documents_document_types
    FOREIGN KEY (document_type_id)
    REFERENCES documents_types (id)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT fk_documents_collaborators
    FOREIGN KEY (collaborator_id)
    REFERENCES collaborators (id)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);

CREATE TABLE contacts (
  id BIGINT(20) NOT NULL,
  collaborator_id VARCHAR(255) NOT NULL,
  contact_type_id BIGINT(20) NOT NULL,
  phone_number VARCHAR(45) NOT NULL,
  updated_at DATETIME(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
  created_at DATETIME(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  PRIMARY KEY (id),
  INDEX fk_contacts_collaborators (collaborator_id ASC),
  INDEX fk_contacts_contact_types (contact_type_id ASC),
  CONSTRAINT fk_contacts_collaborators
    FOREIGN KEY (collaborator_id)
    REFERENCES collaborators (id)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT fk_contacts_contact_types
    FOREIGN KEY (contact_type_id)
    REFERENCES contact_types (id)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);

CREATE TABLE addresses (
  id BIGINT(20) NOT NULL,
  collaborator_id VARCHAR(255) NOT NULL,
  address_type_id BIGINT(20) NOT NULL,
  zip_code VARCHAR(8) NOT NULL,
  place VARCHAR(255) NOT NULL,
  number VARCHAR(20) NOT NULL,
  complement VARCHAR(100) NULL DEFAULT NULL,
  district VARCHAR(100) NOT NULL,
  state VARCHAR(100) NOT NULL,
  city VARCHAR(100) NOT NULL,
  country VARCHAR(100) NOT NULL,
  PRIMARY KEY (id),
  INDEX fk_addresses_collaborators (collaborator_id ASC),
  INDEX fk_addresses_address_types (address_type_id ASC),
  CONSTRAINT fk_addresses_collaborators
    FOREIGN KEY (collaborator_id)
    REFERENCES collaborators (id)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT fk_addresses_address_types
    FOREIGN KEY (address_type_id)
    REFERENCES address_types (id)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);

CREATE TABLE dependents (
  id BIGINT(20) NOT NULL AUTO_INCREMENT,
  collaborator_id VARCHAR(255) NOT NULL,
  dependent_type_id BIGINT(20) NOT NULL,
  name VARCHAR(100) NOT NULL,
  birth_date DATETIME NOT NULL,
  updated_at DATETIME(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
  created_at DATETIME(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  PRIMARY KEY (id),
  INDEX fk_dependents_collaborators (collaborator_id ASC),
  INDEX fk_dependents_dependent_types (dependent_type_id ASC),
  CONSTRAINT fk_dependents_collaborators
    FOREIGN KEY (collaborator_id)
    REFERENCES collaborators (id)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT fk_dependents_dependent_types
    FOREIGN KEY (dependent_type_id)
    REFERENCES dependent_types (id)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);
