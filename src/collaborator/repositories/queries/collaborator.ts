function queryBase() {
  return `
  select 
    col.id 'id',
    col.contract_type 'contractType',
    col.name 'name',
    col.email 'email',
    col.birth_date 'birthDate',
    col.mother_name 'motherName',
    col.father_name 'fatherName',
    col.nationality 'nationality',
    col.naturalness 'naturalness',
      JSON_OBJECT(
      'id', mst.id,
      'name', mst.name
    ) as maritalStatus,
      JSON_OBJECT(
      'id', et.id,
      'name', et.name
    ) as ethnicity,
      JSON_OBJECT(
      'id', gt.id,
      'name', gt.name
    ) as gender,
    JSON_OBJECT(
      'id', ccd.id,
      'collaboratorId', ccd.collaborator_id,
      'remuneration', ccd.remuneration,
      'occupation', ccd.occupation,
      'start', ccd.start,
      'end', ccd.end,
      'workingHours', ccd.working_hours,
      'comments', ccd.comments
    ) as contract
  from collaborators col
  left join marital_status_types mst on (mst.id = col.marital_status_type_id)
  left join ethnicity_types et on (et.id = col.ethnicity_type_id)
  left join gender_types gt on (gt.id = col.gender_type_id)
  left join collaborator_contract_data ccd on (ccd.collaborator_id = col.id)
  where col.created_at is not null `
}

export function listCollaborator(field: string, q: string, pageNumber: number, limitRegisters: number) {
  let filterCondition = ''
  if (field === 'name') {
    filterCondition = ` and col.name like '%${q}%' `
  } else if (field === 'contractStart') {
    filterCondition = ` and col.contract_type like '%${q}%' `
  } else if (field === 'contractOccupation') {
    filterCondition = ` and ccd.occupation like '%${q}%' `
  }
  return `${queryBase()} ${filterCondition} LIMIT ${limitRegisters} offset ${pageNumber}`
}

export function listCollaboratorCount(field: string, q: string, limitRegisters: number) {
  const query = `
    select 
      count(col.id) totalRegisters
    from collaborators col
    left join marital_status_types mst on (mst.id = col.marital_status_type_id)
    left join ethnicity_types et on (et.id = col.ethnicity_type_id)
    left join gender_types gt on (gt.id = col.gender_type_id)
    left join collaborator_contract_data ccd on (ccd.collaborator_id = col.id)
    where col.created_at is not null
  `
  if (field === 'name') {
    return `${query} and col.name like '%${q}%' `
  } else if (field === 'contractStart') {
    return `${query} and col.contract_type like '%${q}%' `
  } else if (field === 'contractOccupation') {
    return `${query} and ccd.occupation like '%${q}%' `
  }
  return `${query} limit ${limitRegisters}`
}

export function findCollaborator(id: string) {  
  return `${queryBase()} and col.id = '${id}' `
}

export function registrationVerification(id: string) {
  return `
    select 
      c.contract_type contractType,
      case
        when c.id is not null
            then true
            else false
      end personalData,
      case
        when cd.id is not null
            then true
            else false
      end documents,
      case
        when cc.id is not null
            then true
            else false
      end contacts,
      case
        when ca.id is not null
            then true
            else false
      end addressess,
      case
        when cde.id is not null
            then true
            else false
      end dependents,
      case
        when cb.id is not null
            then true
            else false
      end bank,
      case
        when cco.id is not null
            then true
            else false
      end contract,
      case
        when caf.id is not null
            then true
            else false
      end ProfessionalData,
      case
        when ct.id is not null
            then true
            else false
      end TransportationVouchers,
      case
        when ccd.id is not null
            then true
            else false
      end CompanyData
    from 
      collaborators c
    left join collaborator_documents cd on (cd.collaborator_id = c.id)
    left join collaborator_contacts cc on (cc.collaborator_id = c.id)
    left join collaborator_addresses ca on (ca.collaborator_id = c.id)
    left join collaborator_dependents cde on (cde.collaborator_id = c.id)
    left join collaborator_bank_data cb on (cb.collaborator_id = c.id)
    left join collaborator_contract_data cco on (cco.collaborator_id = c.id)
    left join collaborator_academic_formation caf on (caf.collaborator_id = c.id)
    left join collaborator_transport ct on (ct.collaborator_id = c.id)
    left join collaborator_company_data ccd on (ccd.collaborator_id = c.id)
    where c.id = '${id}';
  `
}