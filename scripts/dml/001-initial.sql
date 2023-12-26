INSERT INTO roles (id,name,description,deprecated) VALUES (1,'ROLE_BASIC_USER','Básico',0);
INSERT INTO roles (id,name,description,deprecated) VALUES (2,'ROLE_ADMINISTRATOR','Administrador',0);
INSERT INTO roles (id,name,description,deprecated) VALUES (3,'ROLE_OPERATOR','Operador',0);

INSERT INTO permissions (name, name_key, deprecated) VALUES ('Menu - Dashboard', 'MENU_DASHBOARD', '0');
INSERT INTO permissions (name, name_key, deprecated) VALUES ('Menu - Colaboradores', 'MENU_COLLABORATORS', '0');
INSERT INTO permissions (name, name_key, deprecated) VALUES ('Menu - Colaboradores/Listar', 'MENU_COLLABORATORS_LIST', '0');
INSERT INTO permissions (name, name_key, deprecated) VALUES ('Menu - Configurações', 'MENU_SETTINGS', '0');
INSERT INTO permissions (name, name_key, deprecated) VALUES ('Menu - Configurações/Usuários', 'MENU_SETTINGS_USERS', '0');


INSERT INTO permissions_roles (permissions_id, role_id, deprecated) VALUES ('1', '1', '0');
INSERT INTO permissions_roles (permissions_id, role_id, deprecated) VALUES ('1', '2', '0');
INSERT INTO permissions_roles (permissions_id, role_id, deprecated) VALUES ('2', '2', '0');
INSERT INTO permissions_roles (permissions_id, role_id, deprecated) VALUES ('3', '2', '0');
INSERT INTO permissions_roles (permissions_id, role_id, deprecated) VALUES ('4', '2', '0');
INSERT INTO permissions_roles (permissions_id, role_id, deprecated) VALUES ('5', '2', '0');
INSERT INTO permissions_roles (permissions_id, role_id, deprecated) VALUES ('1', '3', '0');
INSERT INTO permissions_roles (permissions_id, role_id, deprecated) VALUES ('2', '3', '0');
INSERT INTO permissions_roles (permissions_id, role_id, deprecated) VALUES ('3', '3', '0');


INSERT INTO dependent_types (name) VALUES ('Cônjuge');
INSERT INTO dependent_types (name) VALUES ('Filho');
INSERT INTO dependent_types (name) VALUES ('Enteado');
INSERT INTO dependent_types (name) VALUES ('Companheiro');
INSERT INTO dependent_types (name) VALUES ('Pai');
INSERT INTO dependent_types (name) VALUES ('Mãe');
INSERT INTO dependent_types (name) VALUES ('Avó');
INSERT INTO dependent_types (name) VALUES ('Avô');
INSERT INTO dependent_types (name) VALUES ('Bisavó');
INSERT INTO dependent_types (name) VALUES ('Bisavô');
INSERT INTO dependent_types (name) VALUES ('Irmão');
INSERT INTO dependent_types (name) VALUES ('Neto');
INSERT INTO dependent_types (name) VALUES ('Bisneto');

INSERT INTO address_types (name) VALUES ('Residêncial');
INSERT INTO address_types (name) VALUES ('Comercial');

INSERT INTO contact_types (name) VALUES ('Residencial');
INSERT INTO contact_types (name) VALUES ('Celular');
INSERT INTO contact_types (name) VALUES ('Comercial');

INSERT INTO documents_types (name) VALUES ('RG');
INSERT INTO documents_types (name) VALUES ('CPF');
INSERT INTO documents_types (name) VALUES ('PIS');
INSERT INTO documents_types (name) VALUES ('Reservista');
INSERT INTO documents_types (name) VALUES ('Título de eleitor');
INSERT INTO documents_types (name) VALUES ('CNPJ');
INSERT INTO documents_types (name) VALUES ('CTPS');

INSERT INTO gender_types (name) VALUES ('Masculino');
INSERT INTO gender_types (name) VALUES ('Feminino');
INSERT INTO gender_types (name) VALUES ('Outro');
INSERT INTO gender_types (name) VALUES ('Prefiro não dizer');

INSERT INTO marital_status_types (name) VALUES ('Solteiro');
INSERT INTO marital_status_types (name) VALUES ('Casado');
INSERT INTO marital_status_types (name) VALUES ('Separado judicialmente');
INSERT INTO marital_status_types (name) VALUES ('Separado extrajudicialmente');
INSERT INTO marital_status_types (name) VALUES ('Divorciado');
INSERT INTO marital_status_types (name) VALUES ('Viúvo');

INSERT INTO ethnicity_types (name) VALUES ('Branco');
INSERT INTO ethnicity_types (name) VALUES ('Pardo');
INSERT INTO ethnicity_types (name) VALUES ('Preto');
INSERT INTO ethnicity_types (name) VALUES ('Amarelo');
INSERT INTO ethnicity_types (name) VALUES ('Indígena');
INSERT INTO ethnicity_types (name) VALUES ('Outra');

INSERT INTO schooling_types (name) VALUES ('Médio Completo');
INSERT INTO schooling_types (name) VALUES ('Superior Incompleto');
INSERT INTO schooling_types (name) VALUES ('Superior Completo');
INSERT INTO schooling_types (name) VALUES ('Pós-graduação Incompleto');
INSERT INTO schooling_types (name) VALUES ('Pós-graduação Completo');
INSERT INTO schooling_types (name) VALUES ('Mestrado Incompleto');
INSERT INTO schooling_types (name) VALUES ('Mestrado Completo');
INSERT INTO schooling_types (name) VALUES ('Doutorado Incompleto');
INSERT INTO schooling_types (name) VALUES ('Doutorado Completo');

INSERT INTO transport_types (name) VALUES ('Ônibus Municipal');
INSERT INTO transport_types (name) VALUES ('Ônibus Intermunicipal');
INSERT INTO transport_types (name) VALUES ('Ônibus Fretado');
INSERT INTO transport_types (name) VALUES ('Ônibus Especial');
INSERT INTO transport_types (name) VALUES ('Metro');
INSERT INTO transport_types (name) VALUES ('Trem');
INSERT INTO transport_types (name) VALUES ('Trólebus');

INSERT INTO transport_cards_types (name) VALUES ('Bilhete Único');
INSERT INTO transport_cards_types (name) VALUES ('Bilhete TOP');
