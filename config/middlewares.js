module.exports = [ 
  'strapi::logger', 
  'strapi::errors', 
  'strapi::security', 
  { name: 'strapi::cors', 
    config: {
       origin: [ 'https://thepurposelab.space', 'https://www.thepurposelab.space', ], 
      }, 
    }, 
    'strapi::poweredBy', 
    'strapi::query', 
    'strapi::body', 
    'strapi::session', 
    'strapi::favicon', 
    'strapi::public', ];
