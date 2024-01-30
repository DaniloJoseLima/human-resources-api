import { Router } from 'express'
import { authMiddleware } from '../../shared/middlewares/authMiddleware'
import { CollaboratorController } from '../controllers/CollaboratorController'

const collaboratorRoutes = Router()

collaboratorRoutes.post('', authMiddleware, new CollaboratorController().save)
collaboratorRoutes.put('', authMiddleware, new CollaboratorController().update)
collaboratorRoutes.get('', authMiddleware, new CollaboratorController().list)
collaboratorRoutes.get('/export-to-excel', authMiddleware, new CollaboratorController().listExportToExcel)
collaboratorRoutes.get('/:id', authMiddleware, new CollaboratorController().find)
collaboratorRoutes.get('/:id/registration-verification', authMiddleware, new CollaboratorController().registrationVerification)

collaboratorRoutes.post('/documents', authMiddleware, new CollaboratorController().saveDocuments)
collaboratorRoutes.put('/documents', authMiddleware, new CollaboratorController().updateDocuments)
collaboratorRoutes.delete('/documents/:id', authMiddleware, new CollaboratorController().deleteDocument)
collaboratorRoutes.get('/:id/documents', authMiddleware, new CollaboratorController().findDocuments)

collaboratorRoutes.post('/contacts', authMiddleware, new CollaboratorController().saveContacts)
collaboratorRoutes.put('/contacts', authMiddleware, new CollaboratorController().updateContacts)
collaboratorRoutes.delete('/contacts/:id', authMiddleware, new CollaboratorController().deleteContacts)
collaboratorRoutes.get('/:id/contacts', authMiddleware, new CollaboratorController().findContacts)

collaboratorRoutes.post('/address', authMiddleware, new CollaboratorController().saveAddress)
collaboratorRoutes.put('/address', authMiddleware, new CollaboratorController().updateAddress)
collaboratorRoutes.get('/:id/address', authMiddleware, new CollaboratorController().findAddress)

collaboratorRoutes.post('/dependents', authMiddleware, new CollaboratorController().saveDependents)
collaboratorRoutes.put('/dependents', authMiddleware, new CollaboratorController().updateDependents)
collaboratorRoutes.delete('/dependents/:id', authMiddleware, new CollaboratorController().deleteDependents)
collaboratorRoutes.get('/:id/dependents', authMiddleware, new CollaboratorController().findDependents)

collaboratorRoutes.post('/bank-data', authMiddleware, new CollaboratorController().saveBanckData)
collaboratorRoutes.put('/bank-data', authMiddleware, new CollaboratorController().updateBanckData)
collaboratorRoutes.get('/:id/bank-data', authMiddleware, new CollaboratorController().findBanckData)

collaboratorRoutes.post('/contract-data', authMiddleware, new CollaboratorController().saveContractData)
collaboratorRoutes.put('/contract-data', authMiddleware, new CollaboratorController().updateContractData)
collaboratorRoutes.get('/:id/contract-data', authMiddleware, new CollaboratorController().findContractData)

collaboratorRoutes.post('/professional-data', authMiddleware, new CollaboratorController().saveProfessionalData)
collaboratorRoutes.put('/professional-data', authMiddleware, new CollaboratorController().updateProfessionalData)
collaboratorRoutes.delete('/professional-data/formation/:id', authMiddleware, new CollaboratorController().deleteFormation)
collaboratorRoutes.delete('/professional-data/certification/:id', authMiddleware, new CollaboratorController().deleteCertification)
collaboratorRoutes.get('/:id/professional-data', authMiddleware, new CollaboratorController().findProfessionalData)

collaboratorRoutes.post('/transportation-vouchers', authMiddleware, new CollaboratorController().saveTransportationVouchers)
collaboratorRoutes.put('/transportation-vouchers', authMiddleware, new CollaboratorController().updateTransportationVouchers)
collaboratorRoutes.delete('/transportation-vouchers/:id', authMiddleware, new CollaboratorController().deleteTransportationVouchers)
collaboratorRoutes.get('/:id/transportation-vouchers', authMiddleware, new CollaboratorController().findTransportationVouchers)

collaboratorRoutes.post('/company-data', authMiddleware, new CollaboratorController().saveCompanyData)
collaboratorRoutes.put('/company-data', authMiddleware, new CollaboratorController().updateCompanyData)
collaboratorRoutes.get('/:id/company-data', authMiddleware, new CollaboratorController().findCompanyData)

collaboratorRoutes.get('/total/type', authMiddleware, new CollaboratorController().totalType)
collaboratorRoutes.get('/month/birthday', authMiddleware, new CollaboratorController().monthBirthdayList)
collaboratorRoutes.get('/month/company', authMiddleware, new CollaboratorController().companyBirthdayList)

export default collaboratorRoutes
