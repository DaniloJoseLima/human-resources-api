export function listAll(field: string, q: string, pageNumber: number, limitRegisters: number) {
  let filterCondition = ''
  if (field === 'name') {
    filterCondition = ` AND u.name like '%${q}%' `
  } else if (field === 'email') {
    filterCondition = ` AND u.email like '%${q}%' `
  }

  return `
    SELECT 
      u.id id,
      u.role_id roleId,
      u.name name,
      u.email,
      JSON_OBJECT(
        'id', r.id,
        'nameKey', r.name_key,
        'name', r.name
      ) as roles
    FROM users u
    INNER JOIN roles r ON (r.id = u.role_id)
    WHERE 0=0 
    ${filterCondition} ORDER BY u.name LIMIT ${limitRegisters} OFFSET ${pageNumber}
  `
}
export function listAllCount(field: string, q: string, pageNumber: number, limitRegisters: number) {
  let filterCondition = ''
  if (field === 'name') {
    filterCondition = ` AND u.name like '%${q}%' `
  } else if (field === 'email') {
    filterCondition = ` AND u.email like '%${q}%' `
  }
  
  return `
    SELECT 
      count(u.id) totalRegisters
    FROM users u
    WHERE 0=0 
    ${filterCondition} LIMIT ${limitRegisters} offset ${pageNumber}
  `
}

export function findById(id: string) {
  return `
    SELECT 
      u.id id,
      u.role_id roleId,
      r.name roleName,
      u.name name,
      u.email,
      COALESCE((
        SELECT JSON_ARRAYAGG(
          JSON_OBJECT(
            'id', p.id,
            'name', p.name,
            'nameKey', p.name_key
          )
        )
        FROM permissions AS p
        INNER JOIN permissions_roles pr ON (pr.permissions_id = p.id)
        WHERE pr.role_id = u.role_id
      ), JSON_ARRAY()) as permissions,
      JSON_OBJECT(
        'id', r.id,
        'nameKey', r.name_key,
        'name', r.name
      ) as roles
    FROM users u
    INNER JOIN roles r ON (r.id = u.role_id)
    WHERE u.id = '${id}'
  `
}