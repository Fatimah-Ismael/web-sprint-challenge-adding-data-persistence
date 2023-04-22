const resources= [
  {resource_name: 'Home Depot', resource_description: 'place to get supplies'},
  {resource_name: 'Pintrest', resource_description:'Create mood board and get ideas'},
  {resource_name: 'Starbucks', resource_description:'little cup of joy'},
  {resource_name: 'Music studio', }

]
exports.resources = resources

exports.seed = function(knex) {
  return knex('resources').insert(resources)
};