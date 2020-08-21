module.exports = (router) => {
    router.get('/:appPath+', (ctx) => {
        const { appPath } = ctx.params;
        const app = appPath.split('/')[0];
        const { theme, lang, target, partnerKey } = ctx.query;
        const language = lang || 'en';
        const cssApp = target || app;
        const direction = lang === 'ar' ? 'rtl' : 'ltr';
        const partner = partnerKey || 'saxo';

        const cssUrl = `${ctx.protocol}://${ctx.host}/static/${cssApp}-${theme}-${direction}-${partner}.css`;
        const scriptBaseUrl = `${ctx.protocol}://${ctx.host}/static/integrationTests-${app}/`;
        const jsUrl = `${scriptBaseUrl}entry.js`;

        ctx.body = `
<!DOCTYPE html>
<html lang="${language}" dir="${direction}">
<head>
    <title>Integration Tests - ${app}</title>
    <meta charset="utf-8" />
    <meta http-equiv='X-UA-Compatible' content='IE=edge' />
    ${
        app === 'investor'
            ? '<meta name="viewport" content="width=device-width, initial-scale=1.0" />'
            : ''
    }
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link title="${theme}" rel="stylesheet" type="text/css" href="${cssUrl}" />
</head>
<body>
    <div id="root"></div>
    <script>window.scriptBaseUrl = '${scriptBaseUrl}';</script>
    <script src="${jsUrl}"></script>
    <aside id="help"></aside>
    <div id="help-tour-navigator"></div>
</body>
</html>`;
    });
};
