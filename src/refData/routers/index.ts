import { Router } from 'express'
import { RefDataController } from '../controllers/RefDataController'

const refDataRoutes = Router()


/**
 * @swagger
 * /ref-data/ethnicity-types:
 *   get:
 *     tags: [RefData]
 *     responses:
 *       200:
 *         description: Successful response
 */
refDataRoutes.get('/ethnicity-types', new RefDataController().getEthnicityTypes)
/**
 * @swagger
 * /ref-data/marital-status-types:
 *   get:
 *     tags: [RefData]
 *     responses:
 *       200:
 *         description: Successful response
 */
refDataRoutes.get('/marital-status-types', new RefDataController().getMaritalStatusTypes)
/**
 * @swagger
 * /ref-data/gender-types:
 *   get:
 *     tags: [RefData]
 *     responses:
 *       200:
 *         description: Successful response
 */
refDataRoutes.get('/gender-types', new RefDataController().getGenderTypes)
/**
 * @swagger
 * /ref-data/documents-types:
 *   get:
 *     tags: [RefData]
 *     responses:
 *       200:
 *         description: Successful response
 */
refDataRoutes.get('/documents-types', new RefDataController().getDocumentsTypes)
/**
 * @swagger
 * /ref-data/schooling-types:
 *   get:
 *     tags: [RefData]
 *     responses:
 *       200:
 *         description: Successful response
 */
refDataRoutes.get('/schooling-types', new RefDataController().getSchoolingTypes)
/**
 * @swagger
 * /ref-data/contact-types:
 *   get:
 *     tags: [RefData]
 *     responses:
 *       200:
 *         description: Successful response
 */
refDataRoutes.get('/contact-types', new RefDataController().getContactTypes)
/**
 * @swagger
 * /ref-data/dependent-types:
 *   get:
 *     tags: [RefData]
 *     responses:
 *       200:
 *         description: Successful response
 */
refDataRoutes.get('/dependent-types', new RefDataController().getDependentTypes)
/**
 * @swagger
 * /ref-data/transport-types:
 *   get:
 *     tags: [RefData]
 *     responses:
 *       200:
 *         description: Successful response
 */
refDataRoutes.get('/transport-types', new RefDataController().getTransportTypes)
/**
 * @swagger
 * /ref-data/transport-card-types:
 *   get:
 *     tags: [RefData]
 *     responses:
 *       200:
 *         description: Successful response
 */
refDataRoutes.get('/transport-card-types', new RefDataController().getTransportCardTypes)
/**
 * @swagger
 * /ref-data/roles:
 *   get:
 *     tags: [RefData]
 *     responses:
 *       200:
 *         description: Successful response
 */
refDataRoutes.get('/roles', new RefDataController().getRoles)

export default refDataRoutes
