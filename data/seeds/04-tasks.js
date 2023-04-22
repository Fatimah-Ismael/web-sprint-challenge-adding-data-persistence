const tasks=[
  {task_description:'Buy supplies', project_id:1},
  {task_description:'Watch YouTube videos', project_id:1}, 
  {task_description:'Find hammer', project_id:1},

  {task_description:'Replace shower curtain, and fixtures', project_id:2},

  {task_description:'Write a catchy hook', project_id:3},
  {task_description:'Ask Taylor Swift to sing it', project_id:3}
]


exports.tasks = tasks

exports.seed = function(knex) {
  return knex('tasks').insert(tasks)
};
