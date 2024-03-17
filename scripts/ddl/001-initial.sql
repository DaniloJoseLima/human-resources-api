CREATE SCHEMA human_resources;

USE human_resources;

CREATE TABLE roles (
  id int(11) NOT NULL AUTO_INCREMENT,
  name_key varchar(100) NOT NULL,
  description varchar(255) NOT NULL,
  deprecated tinyint(1) NOT NULL DEFAULT '0',
  created_at datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  updated_at datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
  PRIMARY KEY (id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE users (
  id VARCHAR(255) NOT NULL,
  role_id INT(11) NOT NULL DEFAULT 1,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(100) NOT NULL,
  password VARCHAR(200) NOT NULL,
  updated_at DATETIME(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
  created_at DATETIME(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  PRIMARY KEY (id),
  INDEX fk_users_roles_idx (role_id ASC),
  CONSTRAINT fk_users_roles_idx
    FOREIGN KEY (role_id)
    REFERENCES roles (id)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);


CREATE TABLE permissions (
  id INT(11) NOT NULL AUTO_INCREMENT,
  name VARCHAR(100) NOT NULL,
  name_key VARCHAR(45) NULL,
  deprecated TINYINT(1) NOT NULL DEFAULT '0',
  created_at DATETIME(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  updated_at DATETIME(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
  PRIMARY KEY (id));

CREATE TABLE permissions_roles (
  permissions_id int(11) NOT NULL,
  role_id int(11) NOT NULL,
  deprecated tinyint(1) NOT NULL DEFAULT '0',
  created_at datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  updated_at datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
  PRIMARY KEY (permissions_id,role_id),
  KEY fk_roles_idx (role_id),
  CONSTRAINT fk_permissions FOREIGN KEY (permissions_id) REFERENCES permissions (id) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT fk_roles FOREIGN KEY (role_id) REFERENCES roles (id) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;


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

CREATE TABLE transport_types (
  id BIGINT(20) NOT NULL AUTO_INCREMENT,
  name VARCHAR(100) NOT NULL,
  PRIMARY KEY (id));

CREATE TABLE transport_cards_types (
  id BIGINT(20) NOT NULL AUTO_INCREMENT,
  name VARCHAR(100) NOT NULL,
  PRIMARY KEY (id));


CREATE TABLE collaborators (
  id VARCHAR(255) NOT NULL,
  contract_type ENUM('pj', 'clt', 'internship', 'cooperated') NOT NULL,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(100) NOT NULL,
  birth_date DATETIME NOT NULL,
  mother_name VARCHAR(100) NULL DEFAULT NULL,
  father_name VARCHAR(100) NULL DEFAULT NULL,
  nationality VARCHAR(100) NOT NULL,
  naturalness VARCHAR(100) NOT NULL,
  schooling_type_id BIGINT(20) NULL DEFAULT NULL,
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

CREATE TABLE collaborator_documents (
  id BIGINT(20) NOT NULL AUTO_INCREMENT,
  document_type_id BIGINT(20) NOT NULL,
  collaborator_id VARCHAR(255) NOT NULL,
  document_number VARCHAR(60) NOT NULL,
  expedition_date DATETIME(6) DEFAULT NULL,
  expedition_uf VARCHAR(10) NULL,
  expedition_agency VARCHAR(50) NULL,
  series VARCHAR(45) DEFAULT NULL,
  zone VARCHAR(45) DEFAULT NULL,
  session VARCHAR(45) DEFAULT NULL,
  city VARCHAR(45) DEFAULT NULL,
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

CREATE TABLE collaborator_contacts (
  id BIGINT(20) NOT NULL AUTO_INCREMENT,
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

CREATE TABLE collaborator_addresses (
  id BIGINT(20) NOT NULL AUTO_INCREMENT,
  collaborator_id VARCHAR(255) NOT NULL,
  address_type_id BIGINT(20) NOT NULL,
  zip_code VARCHAR(20) NOT NULL,
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

CREATE TABLE collaborator_dependents (
  id BIGINT(20) NOT NULL AUTO_INCREMENT,
  collaborator_id VARCHAR(255) NOT NULL,
  dependent_type_id BIGINT(20) NOT NULL,
  name VARCHAR(100) NOT NULL,
  birth_date DATETIME NOT NULL,
  gender_type_id BIGINT(20) NOT NULL,
  marital_status_type_id BIGINT(20) NOT NULL,
  name_mother VARCHAR(100) NULL DEFAULT NULL,
  name_father VARCHAR(100) NULL DEFAULT NULL ,
  number_cpf VARCHAR(45) NULL DEFAULT NULL,
  number_rg VARCHAR(45) NULL DEFAULT NULL,
  expedition_date DATETIME NULL DEFAULT NULl,
  expedition_uf VARCHAR(10) NULL DEFAULT NULL,
  expedition_agency VARCHAR(50) NULL DEFAULT NULL,
  irpf_dependent TINYINT(1) NULL DEFAULT 0,
  updated_at DATETIME(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
  created_at DATETIME(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  PRIMARY KEY (id),
  INDEX fk_dependents_collaborators (collaborator_id ASC),
  INDEX fk_dependents_dependent_types (dependent_type_id ASC),
  INDEX fk_dependents_gender_types (gender_type_id ASC),
  INDEX fk_dependents_marital_status_types (marital_status_type_id ASC),
  CONSTRAINT fk_dependents_collaborators
    FOREIGN KEY (collaborator_id)
    REFERENCES collaborators (id)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT fk_dependents_dependent_types
    FOREIGN KEY (dependent_type_id)
    REFERENCES dependent_types (id)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT fk_dependents_gender_types
    FOREIGN KEY (gender_type_id)
    REFERENCES gender_types (id)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT fk_dependents_marital_status_types
    FOREIGN KEY (marital_status_type_id)
    REFERENCES marital_status_types (id)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);

CREATE TABLE collaborator_bank_data (
  id bigint(20) NOT NULL AUTO_INCREMENT,
  collaborator_id varchar(255) NOT NULL,
  name varchar(50) NOT NULL,
  agency bigint(20) NOT NULL,
  account bigint(20) NOT NULL,
  account_type enum('savings','current') NOT NULL,
  account_category enum('pj','pf') NOT NULL,
  pix_key_type enum('telephone', 'email', 'cpf', 'cnpj', 'random') DEFAULT NULL,
  pix_key varchar(250) DEFAULT NULL,
  updated_at datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
  created_at datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  PRIMARY KEY (id),
  KEY fk_bank_data_collaborators (collaborator_id),
  CONSTRAINT fk_bank_data_collaborators FOREIGN KEY (collaborator_id) REFERENCES collaborators (id) ON DELETE NO ACTION ON UPDATE NO ACTION
);

CREATE TABLE collaborator_contract_data (
  id BIGINT(20) NOT NULL AUTO_INCREMENT,
  collaborator_id VARCHAR(255) NOT NULL,
  remuneration VARCHAR(45) NOT NULL,
  occupation VARCHAR(45) NOT NULL,
  start DATETIME NOT NULL,
  end DATETIME NULL DEFAULT NULL,
  working_hours VARCHAR(45) NOT NULL,
  comments VARCHAR(255) NULL DEFAULT NULL,
  updated_at DATETIME(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
  created_at DATETIME(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  PRIMARY KEY (id),
  INDEX fk_contract_data_collaborators (collaborator_id ASC),
  CONSTRAINT fk_contract_data_collaborators
    FOREIGN KEY (collaborator_id)
    REFERENCES collaborators (id)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);

CREATE TABLE collaborator_formation (
  id bigint(20) NOT NULL AUTO_INCREMENT,
  collaborator_id varchar(255) NOT NULL,
  schooling_type_id bigint(20) NOT NULL,
  updated_at datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
  created_at datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  PRIMARY KEY (id),
  KEY fk_formation_collaborators (collaborator_id),
  KEY fk_formation_schooling_types (schooling_type_id),
  CONSTRAINT fk_formation_collaborators FOREIGN KEY (collaborator_id) REFERENCES collaborators (id) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT fk_formation_schooling_types FOREIGN KEY (schooling_type_id) REFERENCES schooling_types (id) ON DELETE NO ACTION ON UPDATE NO ACTION
);

CREATE TABLE collaborator_academic_formation (
  id BIGINT(20) NOT NULL AUTO_INCREMENT,
  collaborator_id VARCHAR(255) NOT NULL,
  course VARCHAR(50) NULL DEFAULT NULL,
  institution VARCHAR(150) NULL DEFAULT NULL,
  period VARCHAR(50) NULL DEFAULT NULL,
  updated_at DATETIME(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
  created_at DATETIME(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  PRIMARY KEY (id),
  INDEX fk_academic_formation_collaborators (collaborator_id ASC),
  CONSTRAINT fk_academic_formation_collaborators
    FOREIGN KEY (collaborator_id)
    REFERENCES collaborators (id)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);

CREATE TABLE collaborator_certification (
  id BIGINT(20) NOT NULL AUTO_INCREMENT,
  collaborator_id VARCHAR(255) NOT NULL,
  name VARCHAR(50) NULL DEFAULT NULL,
  number VARCHAR(50) NULL DEFAULT NULL,
  institution VARCHAR(50) NULL DEFAULT NULL,
  updated_at DATETIME(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
  created_at DATETIME(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  PRIMARY KEY (id),
  INDEX fk_collaborator_certification_collaborators (collaborator_id ASC),
  CONSTRAINT fk_collaborator_certification_collaborators
  FOREIGN KEY (collaborator_id)
  REFERENCES collaborators (id)
  ON DELETE NO ACTION
  ON UPDATE NO ACTION);

CREATE TABLE collaborator_transport (
  id BIGINT(20) NOT NULL AUTO_INCREMENT,
  collaborator_id VARCHAR(255) NOT NULL,
  type ENUM('going', 'return') NOT NULL,
  transport_type_id BIGINT(20) NOT NULL,
  company VARCHAR(45) NULL DEFAULT NULL,
  line VARCHAR(45) NULL DEFAULT NULL,
  quantity BIGINT(20) NULL DEFAULT NULL,
  value DOUBLE NULL DEFAULT NULL,
  updated_at DATETIME(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
  created_at DATETIME(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  PRIMARY KEY (id),
  INDEX fk_collaborator_transport_collaborators (collaborator_id ASC),
  INDEX fk_collaborator_transport_transport_type (transport_type_id ASC),
  CONSTRAINT fk_collaborator_transport_collaborators
    FOREIGN KEY (collaborator_id)
    REFERENCES collaborators (id)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT fk_collaborator_transport_transport_type
    FOREIGN KEY (transport_type_id)
    REFERENCES transport_types (id)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);

CREATE TABLE collaborator_transport_cards_types (
  collaborator_transport_id BIGINT(20) NOT NULL,
  transport_cards_types_id BIGINT(20) NOT NULL,
  PRIMARY KEY (collaborator_transport_id, transport_cards_types_id),
  INDEX fk_transport_cards_types_id_idx (transport_cards_types_id ASC),
  CONSTRAINT fk_collaborator_transport_id
    FOREIGN KEY (collaborator_transport_id)
    REFERENCES human_resources.collaborator_transport (id)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT fk_transport_cards_types_id
    FOREIGN KEY (transport_cards_types_id)
    REFERENCES human_resources.transport_cards_types (id)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);


CREATE TABLE collaborator_company_data (
  id BIGINT(20) NOT NULL AUTO_INCREMENT,
  collaborator_id VARCHAR(255) NOT NULL,
  corporate_name VARCHAR(100) NOT NULL,
  fantasy_name VARCHAR(100) NOT NULL,
  cnpj VARCHAR(20) NOT NULL,
  state_registration VARCHAR(45) NOT NULL,
  municipal_registration VARCHAR(45) NOT NULL,
  main_activity BIGINT(20) NOT NULL,
  secondary_activity BIGINT(20) NOT NULL,  
  updated_at DATETIME(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
  created_at DATETIME(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  PRIMARY KEY (id),
  INDEX fk_collaborator_company_data_collaborators (collaborator_id ASC),
  CONSTRAINT fk_collaborator_company_data_collaborators
    FOREIGN KEY (collaborator_id)
    REFERENCES collaborators (id)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);