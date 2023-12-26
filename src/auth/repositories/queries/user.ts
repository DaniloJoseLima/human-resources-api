export function findById(email: string) {
  return `
    SELECT 
      u.id id,
      u.role_id roleId,
      u.name name,
      u.email,
      u.password password,
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
      ), JSON_ARRAY()) as permissions
    FROM users u
    WHERE u.email = '${email}'
  `
}