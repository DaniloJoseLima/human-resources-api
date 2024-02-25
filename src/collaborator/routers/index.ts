import { Router } from 'express'
import { authMiddleware } from '../../shared/middlewares/authMiddleware'
import { CollaboratorController } from '../controllers/CollaboratorController'

const collaboratorRoutes = Router()

/**
 * @swagger
 * components:
 *   schemas:
 *     Collaborator:
 *       type: object
 *       properties:
 *         contractType:
 *           type: string
 *         name:
 *           type: string
 *         email:
 *           type: string
 *         birthDate:
 *           type: string
 *           format: date
 *         motherName:
 *           type: string
 *         fatherName:
 *           type: string
 *         nationality:
 *           type: string
 *         naturalness:
 *           type: string
 *         maritalStatus:
 *           type: object
 *         ethnicity:
 *           type: object
 *         gender:
 *           type: object
 *         contract:
 *           type: object
 */

/**
 * @swagger
 * /collaborator:
 *   post:
 *     tags: [Collaborator]
 *     summary: Create a new collaborator
 *     description: Endpoint to create a new collaborator
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Collaborator'
 *     responses:
 *       201:
 *         description: Successful response
 */
collaboratorRoutes.post('', authMiddleware, new CollaboratorController().save)
/**
 * @swagger
 * /collaborator:
 *   put:
 *     tags: [Collaborator]
 *     summary: Update a collaborator
 *     description: Endpoint to update a collaborator
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               id:
 *                 type: string
 *               contractType:
 *                 type: string
 *               name:
 *                 type: string
 *               email:
 *                 type: string
 *               birthDate:
 *                 type: string
 *                 format: date
 *               motherName:
 *                 type: string
 *               fatherName:
 *                 type: string
 *               nationality:
 *                 type: string
 *               naturalness:
 *                 type: string
 *               maritalStatus:
 *                 type: object
 *               ethnicity:
 *                 type: object
 *               gender:
 *                 type: object
 *               contract:
 *                 type: object
 *     responses:
 *       201:
 *         description: Successful response
 */
collaboratorRoutes.put('', authMiddleware, new CollaboratorController().update)

/**
 * @swagger
 * /collaborator:
 *   get:
 *     tags: [Collaborator]
 *     summary: List collaborators
 *     description: Endpoint to list collaborators
 *     parameters:
 *       - in: query
 *         name: field
 *         schema:
 *           type: string
 *         description: Field to filter collaborators
 *       - in: query
 *         name: q
 *         schema:
 *           type: string
 *         description: Search value
 *       - in: query
 *         name: page
 *         schema:
 *           type: string
 *         description: Page number
 *     responses:
 *       200:
 *         description: Successful response
 */
collaboratorRoutes.get('', authMiddleware, new CollaboratorController().list)
/**
 * @swagger
 * /collaborator/export-to-excel:
 *   get:
 *     tags: [Collaborator]
 *     summary: Export list collaborators
 *     description: Endpoint to Export list collaborators
 *     parameters:
 *       - in: query
 *         name: field
 *         schema:
 *           type: string
 *         description: Field to filter collaborators
 *       - in: query
 *         name: q
 *         schema:
 *           type: string
 *         description: Search value
 *       - in: query
 *         name: page
 *         schema:
 *           type: string
 *         description: Page number
 *     responses:
 *       200:
 *         description: Successful response
 */
collaboratorRoutes.get('/export-to-excel', authMiddleware, new CollaboratorController().listExportToExcel)
/**
 * @swagger
 * /collaborator/:id:
 *   get:
 *     tags: [Collaborator]
 *     summary: Find collaborator
 *     description: Endpoint to find collaborator
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the collaborator
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Successful response
 */
collaboratorRoutes.get('/:id', authMiddleware, new CollaboratorController().find)
/**
 * @swagger
 * /collaborator/:id/registration-verification:
 *   get:
 *     tags: [Collaborator]
 *     summary: Find verification collaborator
 *     description: Endpoint to find verification collaborator
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the collaborator
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Successful response
 */
collaboratorRoutes.get('/:id/registration-verification', authMiddleware, new CollaboratorController().registrationVerification)

/**
 * @swagger
 * /collaborator/documents:
 *   post:
 *     tags: [Collaborator Documents]
 *     summary: Create new document for collaborator
 *     description: Endpoint to create new document for collaborator
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               documentType:
 *                 type: object
 *               collaboratorId:
 *                 type: string
 *               documentNumber:
 *                 type: string
 *               expeditionDate:
 *                 type: string
 *                 format: date
 *               expeditionUf:
 *                 type: string
 *               expeditionAgency:
 *                 type: string
 *               series:
 *                 type: string
 *               zone:
 *                 type: string
 *               session:
 *                 type: string
 *               city:
 *                 type: string
 *     responses:
 *       201:
 *         description: Successful response
 */
collaboratorRoutes.post('/documents', authMiddleware, new CollaboratorController().saveDocuments)
/**
 * @swagger
 * /collaborator/documents:
 *   put:
 *     tags: [Collaborator Documents]
 *     summary: Update new document for collaborator
 *     description: Endpoint to update new document for collaborator
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               id:
 *                 type: number
 *               documentType:
 *                 type: object
 *               collaboratorId:
 *                 type: string
 *               documentNumber:
 *                 type: string
 *               expeditionDate:
 *                 type: string
 *                 format: date
 *               expeditionUf:
 *                 type: string
 *               expeditionAgency:
 *                 type: string
 *               series:
 *                 type: string
 *               zone:
 *                 type: string
 *               session:
 *                 type: string
 *               city:
 *                 type: string
 *     responses:
 *       201:
 *         description: Successful response
 */
collaboratorRoutes.put('/documents', authMiddleware, new CollaboratorController().updateDocuments)
/**
 * @swagger
 * /collaborator/documents/:id:
 *   delete:
 *     tags: [Collaborator Documents]
 *     summary: Delete document for collaborator
 *     description: Endpoint to delete document for collaborator
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the collaborator_documents
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Successful response
 */
collaboratorRoutes.delete('/documents/:id', authMiddleware, new CollaboratorController().deleteDocument)
/**
 * @swagger
 * /collaborator/:id/documents:
 *   get:
 *     tags: [Collaborator Documents]
 *     summary: Find document for collaborator
 *     description: Endpoint to find document for collaborator
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the collaborator
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Successful response
 */
collaboratorRoutes.get('/:id/documents', authMiddleware, new CollaboratorController().findDocuments)

/**
 * @swagger
 * /collaborator/contacts:
 *   post:
 *     tags: [Collaborator Contacts]
 *     summary: Create new contacts for collaborator
 *     description: Endpoint to create new contacts for collaborator
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               collaboratorId:
 *                 type: string
 *               contactTypes:
 *                 type: object
 *               phoneNumber:
 *                 type: string
 *     responses:
 *       201:
 *         description: Successful response
 */
collaboratorRoutes.post('/contacts', authMiddleware, new CollaboratorController().saveContacts)
/**
 * @swagger
 * /collaborator/contacts:
 *   put:
 *     tags: [Collaborator Contacts]
 *     summary: Update new contacts for collaborator
 *     description: Endpoint to update new contacts for collaborator
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               id:
 *                 type: number
 *               collaboratorId:
 *                 type: string
 *               contactTypes:
 *                 type: object
 *               phoneNumber:
 *                 type: string
 *     responses:
 *       201:
 *         description: Successful response
 */
collaboratorRoutes.put('/contacts', authMiddleware, new CollaboratorController().updateContacts)
/**
 * @swagger
 * /collaborator/contacts/:id:
 *   delete:
 *     tags: [Collaborator Contacts]
 *     summary: Delete contact for collaborator
 *     description: Endpoint to delete contact for collaborator
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the collaborator_contacts
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Successful response
 */
collaboratorRoutes.delete('/contacts/:id', authMiddleware, new CollaboratorController().deleteContacts)
/**
 * @swagger
 * /collaborator/:id/contacts:
 *   get:
 *     tags: [Collaborator Contacts]
 *     summary: Find contact for collaborator
 *     description: Endpoint to find contact for collaborator
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the collaborator
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Successful response
 */
collaboratorRoutes.get('/:id/contacts', authMiddleware, new CollaboratorController().findContacts)

/**
 * @swagger
 * /collaborator/address:
 *   post:
 *     tags: [Collaborator Address]
 *     summary: Create new address for collaborator
 *     description: Endpoint to create new address for collaborator
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               collaboratorId:
 *                 type: string
 *               addressTypes:
 *                 type: object
 *               zipCode:
 *                 type: string
 *               place:
 *                 type: string
 *               number:
 *                 type: string
 *               complement:
 *                 type: string
 *               district:
 *                 type: string
 *               state:
 *                 type: string
 *               city:
 *                 type: string
 *               country:
 *                 type: string
 *     responses:
 *       201:
 *         description: Successful response
 */
collaboratorRoutes.post('/address', authMiddleware, new CollaboratorController().saveAddress)
/**
 * @swagger
 * /collaborator/address:
 *   put:
 *     tags: [Collaborator Address]
 *     summary: Update new address for collaborator
 *     description: Endpoint to update new address for collaborator
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               id:
 *                 type: number
 *               collaboratorId:
 *                 type: string
 *               addressTypes:
 *                 type: object
 *               zipCode:
 *                 type: string
 *               place:
 *                 type: string
 *               number:
 *                 type: string
 *               complement:
 *                 type: string
 *               district:
 *                 type: string
 *               state:
 *                 type: string
 *               city:
 *                 type: string
 *               country:
 *                 type: string
 *     responses:
 *       201:
 *         description: Successful response
 */
collaboratorRoutes.put('/address', authMiddleware, new CollaboratorController().updateAddress)
/**
 * @swagger
 * /collaborator/:id/address:
 *   get:
 *     tags: [Collaborator Address]
 *     summary: Find address for collaborator
 *     description: Endpoint to find address for collaborator
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the collaborator
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Successful response
 */
collaboratorRoutes.get('/:id/address', authMiddleware, new CollaboratorController().findAddress)

/**
 * @swagger
 * /collaborator/dependents:
 *   post:
 *     tags: [Collaborator Dependents]
 *     summary: Create new dependents for collaborator
 *     description: Endpoint to create new dependents for collaborator
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               collaboratorId:
 *                 type: string
 *               dependentTypes:
 *                 type: object
 *               name:
 *                 type: string
 *               birthDate:
 *                 type: string
 *                 format: date
 *               genderTypes:
 *                 type: object
 *               maritalStatusTypes:
 *                 type: object
 *               nameMother:
 *                 type: string
 *               nameFather:
 *                 type: string
 *               numberCpf:
 *                 type: string
 *               numberRg:
 *                 type: string
 *               expeditionDate:
 *                 type: string
 *                 format: date
 *               expeditionUf:
 *                 type: string
 *               expeditionAgency:
 *                 type: string
 *               irpfDependent:
 *                 type: boolean
 *     responses:
 *       201:
 *         description: Successful response
 */
collaboratorRoutes.post('/dependents', authMiddleware, new CollaboratorController().saveDependents)
/**
 * @swagger
 * /collaborator/dependents:
 *   put:
 *     tags: [Collaborator Dependents]
 *     summary: Update new dependents for collaborator
 *     description: Endpoint to update new dependents for collaborator
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               id:
 *                 type: number
 *               collaboratorId:
 *                 type: string
 *               dependentTypes:
 *                 type: object
 *               name:
 *                 type: string
 *               birthDate:
 *                 type: string
 *                 format: date
 *               genderTypes:
 *                 type: object
 *               maritalStatusTypes:
 *                 type: object
 *               nameMother:
 *                 type: string
 *               nameFather:
 *                 type: string
 *               numberCpf:
 *                 type: string
 *               numberRg:
 *                 type: string
 *               expeditionDate:
 *                 type: string
 *                 format: date
 *               expeditionUf:
 *                 type: string
 *               expeditionAgency:
 *                 type: string
 *               irpfDependent:
 *                 type: boolean
 *     responses:
 *       201:
 *         description: Successful response
 */
collaboratorRoutes.put('/dependents', authMiddleware, new CollaboratorController().updateDependents)
/**
 * @swagger
 * /collaborator/dependents/:id:
 *   delete:
 *     tags: [Collaborator Dependents]
 *     summary: Delete dependents for collaborator
 *     description: Endpoint to delete dependents for collaborator
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the collaborator_dependents
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Successful response
 */
collaboratorRoutes.delete('/dependents/:id', authMiddleware, new CollaboratorController().deleteDependents)
/**
 * @swagger
 * /collaborator/:id/dependents:
 *   get:
 *     tags: [Collaborator Dependents]
 *     summary: Find dependents for collaborator
 *     description: Endpoint to find dependents for collaborator
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the collaborator
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Successful response
 */
collaboratorRoutes.get('/:id/dependents', authMiddleware, new CollaboratorController().findDependents)

/**
 * @swagger
 * /collaborator/bank-data:
 *   post:
 *     tags: [Collaborator Bank]
 *     summary: Create new bank for collaborator
 *     description: Endpoint to create new bank for collaborator
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               collaboratorId:
 *                 type: string
 *               name:
 *                 type: string
 *               agency:
 *                 type: number
 *               account:
 *                 type: number
 *               accountType:
 *                 type: object
 *               accountCategory:
 *                 type: object
 *               pixKey:
 *                 type: string
 *               pixKeyType:
 *                 type: object
 *     responses:
 *       201:
 *         description: Successful response
 */
collaboratorRoutes.post('/bank-data', authMiddleware, new CollaboratorController().saveBanckData)
/**
 * @swagger
 * /collaborator/bank-data:
 *   put:
 *     tags: [Collaborator Bank]
 *     summary: Update new bank for collaborator
 *     description: Endpoint to update new bank for collaborator
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               id:
 *                 type: number
 *               collaboratorId:
 *                 type: string
 *               name:
 *                 type: string
 *               agency:
 *                 type: number
 *               account:
 *                 type: number
 *               accountType:
 *                 type: object
 *               accountCategory:
 *                 type: object
 *               pixKey:
 *                 type: string
 *               pixKeyType:
 *                 type: object
 *     responses:
 *       201:
 *         description: Successful response
 */
collaboratorRoutes.put('/bank-data', authMiddleware, new CollaboratorController().updateBanckData)
/**
 * @swagger
 * /collaborator/:id/bank-data:
 *   get:
 *     tags: [Collaborator Bank]
 *     summary: Find bank for collaborator
 *     description: Endpoint to find bank for collaborator
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the collaborator
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Successful response
 */
collaboratorRoutes.get('/:id/bank-data', authMiddleware, new CollaboratorController().findBanckData)

/**
 * @swagger
 * /collaborator/contract-data:
 *   post:
 *     tags: [Collaborator Contract]
 *     summary: Create new contract for collaborator
 *     description: Endpoint to create new contract for collaborator
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               collaboratorId:
 *                 type: string
 *               remuneration:
 *                 type: string
 *               occupation:
 *                 type: string
 *                 format: date
 *               start:
 *                 type: string
 *                 format: date
 *               end:
 *                 type: string
 *               workingHours:
 *                 type: string
 *               comments:
 *                 type: string
 *     responses:
 *       201:
 *         description: Successful response
 */
collaboratorRoutes.post('/contract-data', authMiddleware, new CollaboratorController().saveContractData)
/**
 * @swagger
 * /collaborator/contract-data:
 *   put:
 *     tags: [Collaborator Contract]
 *     summary: Update new contract for collaborator
 *     description: Endpoint to update new contract for collaborator
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               id:
 *                 type: number
 *               collaboratorId:
 *                 type: string
 *               remuneration:
 *                 type: string
 *               occupation:
 *                 type: string
 *                 format: date
 *               start:
 *                 type: string
 *                 format: date
 *               end:
 *                 type: string
 *               workingHours:
 *                 type: string
 *               comments:
 *                 type: string
 *     responses:
 *       201:
 *         description: Successful response
 */
collaboratorRoutes.put('/contract-data', authMiddleware, new CollaboratorController().updateContractData)
/**
 * @swagger
 * /collaborator/:id/contract-data:
 *   get:
 *     tags: [Collaborator Contract]
 *     summary: Find contract for collaborator
 *     description: Endpoint to find contract for collaborator
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the collaborator
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Successful response
 */
collaboratorRoutes.get('/:id/contract-data', authMiddleware, new CollaboratorController().findContractData)

/**
 * @swagger
 * /collaborator/professional-data:
 *   post:
 *     tags: [Collaborator Professional]
 *     summary: Create new professional for collaborator
 *     description: Endpoint to create new professional for collaborator
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               collaboratorId:
 *                 type: string
 *               schoolingTypes:
 *                 type: object
 *               formation:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     collaboratorId:
 *                       type: string
 *                     institution:
 *                       type: string
 *                     course:
 *                       type: string
 *                     period:
 *                       type: string
 *               certification:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     collaboratorId:
 *                       type: string
 *                     name:
 *                       type: string
 *                     number:
 *                       type: string
 *                     institution:
 *                       type: string
 *     responses:
 *       201:
 *         description: Successful response
 */
collaboratorRoutes.post('/professional-data', authMiddleware, new CollaboratorController().saveProfessionalData)
/**
 * @swagger
 * /collaborator/professional-data:
 *   put:
 *     tags: [Collaborator Professional]
 *     summary: Update new professional for collaborator
 *     description: Endpoint to update new professional for collaborator
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               id:
 *                 type: number
 *               collaboratorId:
 *                 type: string
 *               schoolingTypes:
 *                 type: object
 *               formation:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     collaboratorId:
 *                       type: string
 *                     institution:
 *                       type: string
 *                     course:
 *                       type: string
 *                     period:
 *                       type: string
 *               certification:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     collaboratorId:
 *                       type: string
 *                     name:
 *                       type: string
 *                     number:
 *                       type: string
 *                     institution:
 *                       type: string
 *     responses:
 *       201:
 *         description: Successful response
 */
collaboratorRoutes.put('/professional-data', authMiddleware, new CollaboratorController().updateProfessionalData)
/**
 * @swagger
 * /collaborator/professional-data/formation/:id:
 *   delete:
 *     tags: [Collaborator Professional]
 *     summary: Delete formation for collaborator
 *     description: Endpoint to delete formation for collaborator
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the collaborator_academic_formation
 *         schema:
 *           type: number
 *     responses:
 *       200:
 *         description: Successful response
 */
collaboratorRoutes.delete('/professional-data/formation/:id', authMiddleware, new CollaboratorController().deleteFormation)
/**
 * @swagger
 * /collaborator/professional-data/certification/:id:
 *   delete:
 *     tags: [Collaborator Professional]
 *     summary: Delete certification for collaborator
 *     description: Endpoint to delete certification for collaborator
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the collaborator_certification
 *         schema:
 *           type: number
 *     responses:
 *       200:
 *         description: Successful response
 */
collaboratorRoutes.delete('/professional-data/certification/:id', authMiddleware, new CollaboratorController().deleteCertification)
/**
 * @swagger
 * /collaborator/:id/professional-data:
 *   get:
 *     tags: [Collaborator Professional]
 *     summary: Find professional for collaborator
 *     description: Endpoint to find professional for collaborator
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the collaborator
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Successful response
 */
collaboratorRoutes.get('/:id/professional-data', authMiddleware, new CollaboratorController().findProfessionalData)

/**
 * @swagger
 * /collaborator/transportation-vouchers:
 *   post:
 *     tags: [Collaborator Transportation]
 *     summary: Create new transportation for collaborator
 *     description: Endpoint to create new transportation for collaborator
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               typeTransportOneWay:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     collaboratorId:
 *                       type: string
 *                     type:
 *                       type: string
 *                     transportTypes:
 *                       type: object
 *                     company:
 *                       type: string
 *                     line:
 *                       type: string
 *                     quantity:
 *                       type: number
 *                     value:
 *                       type: number
 *                     collaboratorTransportCardTypes:
 *                       type: array
 *                       items:
 *                          type: object
 *                     transportCardType:
 *                       type: array
 *                       items:
 *                          type: number
 *               typeTransportReturn:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     collaboratorId:
 *                       type: string
 *                     type:
 *                       type: string
 *                     transportTypes:
 *                       type: object
 *                     company:
 *                       type: string
 *                     line:
 *                       type: string
 *                     quantity:
 *                       type: number
 *                     value:
 *                       type: number
 *                     collaboratorTransportCardTypes:
 *                       type: array
 *                       items:
 *                          type: object
 *                     transportCardType:
 *                       type: array
 *                       items:
 *                          type: number
 *     responses:
 *       201:
 *         description: Successful response
 */
collaboratorRoutes.post('/transportation-vouchers', authMiddleware, new CollaboratorController().saveTransportationVouchers)
/**
 * @swagger
 * /collaborator/transportation-vouchers:
 *   put:
 *     tags: [Collaborator Transportation]
 *     summary: Update new transportation for collaborator
 *     description: Endpoint to update new transportation for collaborator
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               typeTransportOneWay:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: number
 *                     collaboratorId:
 *                       type: string
 *                     type:
 *                       type: string
 *                     transportTypes:
 *                       type: object
 *                     company:
 *                       type: string
 *                     line:
 *                       type: string
 *                     quantity:
 *                       type: number
 *                     value:
 *                       type: number
 *                     collaboratorTransportCardTypes:
 *                       type: array
 *                       items:
 *                          type: object
 *                     transportCardType:
 *                       type: array
 *                       items:
 *                          type: number
 *               typeTransportReturn:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: number
 *                     collaboratorId:
 *                       type: string
 *                     type:
 *                       type: string
 *                     transportTypes:
 *                       type: object
 *                     company:
 *                       type: string
 *                     line:
 *                       type: string
 *                     quantity:
 *                       type: number
 *                     value:
 *                       type: number
 *                     collaboratorTransportCardTypes:
 *                       type: array
 *                       items:
 *                          type: object
 *                     transportCardType:
 *                       type: array
 *                       items:
 *                          type: number
 *     responses:
 *       201:
 *         description: Successful response
 */
collaboratorRoutes.put('/transportation-vouchers', authMiddleware, new CollaboratorController().updateTransportationVouchers)
/**
 * @swagger
 * /collaborator/transportation-vouchers/:id:
 *   delete:
 *     tags: [Collaborator Transportation]
 *     summary: Delete transportation for collaborator
 *     description: Endpoint to delete transportation for collaborator
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the collaborator_transport
 *         schema:
 *           type: number
 *     responses:
 *       200:
 *         description: Successful response
 */
collaboratorRoutes.delete('/transportation-vouchers/:id', authMiddleware, new CollaboratorController().deleteTransportationVouchers)
/**
 * @swagger
 * /collaborator/:id/transportation-vouchers:
 *   get:
 *     tags: [Collaborator Transportation]
 *     summary: Find transportation for collaborator
 *     description: Endpoint to find transportation for collaborator
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the collaborator
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Successful response
 */
collaboratorRoutes.get('/:id/transportation-vouchers', authMiddleware, new CollaboratorController().findTransportationVouchers)

/**
 * @swagger
 * /collaborator/company-data:
 *   post:
 *     tags: [Collaborator Company]
 *     summary: Create new company for collaborator
 *     description: Endpoint to create new company for collaborator
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               collaboratorId:
 *                 type: string
 *               corporateName:
 *                 type: string
 *               fantasyName:
 *                 type: string
 *               cnpj:
 *                 type: string
 *               stateRegistration:
 *                 type: string
 *               municipalRegistration:
 *                 type: string
 *               mainActivity:
 *                 type: number
 *               secondaryActivity:
 *                 type: number
 *     responses:
 *       201:
 *         description: Successful response
 */
collaboratorRoutes.post('/company-data', authMiddleware, new CollaboratorController().saveCompanyData)
/**
 * @swagger
 * /collaborator/company-data:
 *   put:
 *     tags: [Collaborator Company]
 *     summary: Update new company for collaborator
 *     description: Endpoint to update new company for collaborator
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               id:
 *                 type: string
 *               collaboratorId:
 *                 type: string
 *               corporateName:
 *                 type: string
 *               fantasyName:
 *                 type: string
 *               cnpj:
 *                 type: string
 *               stateRegistration:
 *                 type: string
 *               municipalRegistration:
 *                 type: string
 *               mainActivity:
 *                 type: number
 *               secondaryActivity:
 *                 type: number
 *     responses:
 *       201:
 *         description: Successful response
 */
collaboratorRoutes.put('/company-data', authMiddleware, new CollaboratorController().updateCompanyData)
/**
 * @swagger
 * /collaborator/:id/company-data:
 *   get:
 *     tags: [Collaborator Company]
 *     summary: Find company for collaborator
 *     description: Endpoint to find company for collaborator
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the collaborator
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Successful response
 */
collaboratorRoutes.get('/:id/company-data', authMiddleware, new CollaboratorController().findCompanyData)

/**
 * @swagger
 * /collaborator/total/type:
 *   get:
 *     tags: [Collaborator Info]
 *     summary: Find total collaborator
 *     description: Endpoint to find total collaborator
 *     responses:
 *       200:
 *         description: Successful response
 */
collaboratorRoutes.get('/total/type', authMiddleware, new CollaboratorController().totalType)
/**
 * @swagger
 * /collaborator/month/birthday:
 *   get:
 *     tags: [Collaborator Info]
 *     summary: Find birthday boy of the month
 *     description: Endpoint to find birthday boy of the month
 *     responses:
 *       200:
 *         description: Successful response
 */
collaboratorRoutes.get('/month/birthday', authMiddleware, new CollaboratorController().monthBirthdayList)
/**
 * @swagger
 * /collaborator/month/company:
 *   get:
 *     tags: [Collaborator Info]
 *     summary: Find company anniversary of the month
 *     description: Endpoint to find company anniversary of the month
 *     responses:
 *       200:
 *         description: Successful response
 */
collaboratorRoutes.get('/month/company', authMiddleware, new CollaboratorController().companyBirthdayList)

export default collaboratorRoutes
