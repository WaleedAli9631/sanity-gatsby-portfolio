import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'



import Project from './Project';
import LandingImages from './LandingImages';
import About from './About';
import ContactPortable from './ContactPortable';
import contact from './contact.js'


export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    /* Your types here! */
    Project,
    LandingImages,
    About,
    contact,
    ContactPortable
  ])
})