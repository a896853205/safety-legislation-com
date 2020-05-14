module.exports = {
  deploy: {
    production: {
      user: 'root',
      host: '39.97.175.30',
      ref: 'origin/master',
      repo: 'git@github.com:a896853205/safety-legislation-com.git',
      path: '/safety-legislation/safety-legislation-com',
      'post-deploy': 'npm install && npm run build',
      'post-setup': 'npm install',
    },
  },
};
