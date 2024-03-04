![image](https://github.com/attetorres/cuida-t-app/assets/110516703/2dc45b1d-e296-489b-ba80-a8c170131aea)




**Table users {
  id integer [primary key]
  name varchar 
  lastname varchar 
  pass varchar 
  email varchar 
  colegiate varchar 
  validate bool
  avatar image 
  role varchar 
  phone integer 
  psicologo integer
  created_at timestamp 
  updated_at timestamp }

Table lists { 
  id integer [primary key] 
  title varchar 
  description text [note: 'Content of the post'] 
  creator_user_id integer
  cycle varchar [note: 'daily, weekly, monthly']
  created_at timestamp 
  updated_at timestamp }

Table tasks { 
  id integer [primary key] 
  title varchar 
  description text [note: 'Content of the post']
  list_id integer 
  created_at timestamp 
  updated_at timestamp }


Table registryTasks { 
  id integer [primary key] 
  task_id integer 
  asssignedUsers_id integer 
  checkbox boolean 
  moodRanking integer [note: "1-3, 1-10..."]
  created_at timestamp 
  updated_at timestamp 
  closed bool}





Table asssignedUsers {
   id integer [primary key] 
   list_id integer
  user_id integer
  created_at timestamp }


Ref: users.id < lists.creator_user_id 

Ref: lists.id < tasks.list_id

Ref: users.id < asssignedUsers.user_id

Ref: lists.id < asssignedUsers.list_id

Ref: asssignedUsers.id  < registryTasks.asssignedUsers_id

ref: registryTasks.task_id > tasks.id
ref: users.psicologo > users.id
**
