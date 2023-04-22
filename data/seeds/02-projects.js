const projects= [
  {project_name: 'Build a house'},
  {project_name: 'Renovate bathroom', project_description: 'Add modern amenties'},
  {project_name: 'Write a song', project_completed: true}
]

exports.projects = projects

exports.seed = function(knex) {
  return knex('projects').insert(projects)
  
}
