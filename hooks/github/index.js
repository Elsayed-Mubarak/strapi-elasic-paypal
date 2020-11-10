const GitHubAPI = require("@octokit/rest");

module.exports = (strapi) => {
    return {
        async initialize() {
            const { token } = strapi.config.hook.github;

            strapi.services.github = new GitHubAPI({
                userAgent: `${strapi.config.info.name} v${strapi.config.info.version}`,
                auth: `token ${token}`,
            });
        },
    };
};