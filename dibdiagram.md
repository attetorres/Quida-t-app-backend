// Use DBML to define your database structure
// Docs: https://dbml.dbdiagram.io/docs

Table users {
  id integer [primary key]
  role varchar 
  username varchar
  email varchar
  pass varchar 
  name varchar
  phone integer
  avatar image
  colegiate varchar 
  created_at timestamp 
  updated_at timestamp
}



Table lists {
  id integer [primary key]
  creator_user_id integer
  title varchar
  description text [note: 'Content of the post']
  cycle varchar [note: 'daily, weekly, monthly']
 

  created_at timestamp
  updated_at timestamp
}

Table tasks {
  id integer [primary key]
  list_id integer
  title varchar
  description text [note: 'Content of the post']

  created_at timestamp
  updated_at timestamp
}

Table registryTasks {
  id integer [primary key]
  task_id integer
  user_id integer
  checkbox boolean
  moodRanking integer [note: "1-3, 1-10..."]  
  created_at timestamp
}

Table registryCycle {
  id integer [primary key]
  list_id integer
  freq varchar
 
  created_at timestamp
}

Table asssignedUsers {
  id integer [primary key]
  list_id integer
  user_id integer
}

table patient_psychologist {
  id integer [primary key]
  patient_id integer
  psychologist_id integer
  
}


Ref: users.id < lists.creator_user_id
Ref: lists.id < tasks.list_id

Ref: users.id < asssignedUsers.user_id

Ref: registryTasks.task_id <> tasks.id
Ref: lists.id < asssignedUsers.list_id

Ref: registryTasks.user_id < users.id

Ref: patient_psychologist.psychologist_id > users.id
Ref: patient_psychologist.patient_id - users.id

