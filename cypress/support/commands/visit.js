import * as timers from './timers';
import * as device from './device';

function visitSaxoTraderPage(page, deviceObj) {
    const url = `http://localhost:3001${page}${timers.getHashData()}`;
    const { deviceType, devicePlatform = 'Win32' } = deviceObj;

    cy.visit(url, {
        log: false,
        onBeforeLoad: (win) => {
            if (deviceType) {
                Object.defineProperty(win.navigator, 'userAgent', {
                    value: device.getUserAgent(deviceType, win.navigator.userAgent),
                });
            }
            Object.defineProperty(win.navigator, 'platform', {
                value: devicePlatform,
            });
        },
    });
    cy.window({ log: false, timeout: 20000 }).should('have.property', 'appReady', true);
}

Cypress.Commands.add(
    'visitIntegrationTests',
    (
        app,
        {
            theme,
            direction = 'ltr',
            config,
            deeplinkRoute = '',
            timezone,
            partnerKey,
            deviceType,
            devicePlatform,
        } = {},
    ) => {
        if (!theme) {
            theme = app === 'investor' || app === 'spa' ? 'white' : 'black';
        }

        const hasSyncParams = deeplinkRoute && deeplinkRoute.includes('?');
        const themeQuery = hasSyncParams ? `&theme=${theme}` : `?theme=${theme}`;
        const language = direction === 'rtl' ? 'ar' : 'en';
        const culture = direction === 'rtl' ? `&culture=ar-EG` : '';
        const tz = timezone ? `&tz=${timezone}` : '';
        const configParam = config
            ? `&cfg=${encodeURIComponent(JSON.stringify(config))}`
            : '';
        const partnerKeyParam = partnerKey ? `&partnerKey=${partnerKey}` : '';

        visitSaxoTraderPage(
            `/integrationTests/${app}${deeplinkRoute}${themeQuery}&lang=${language}${culture}${tz}${configParam}${partnerKeyParam}`,
            { deviceType, devicePlatform },
        );

        const logTimezone = timezone ? ', '.concat(timezone) : '';
        const logFeatureFlags = config ? ', '.concat(JSON.stringify(config)) : '';

        Cypress.config('language', language);

        Cypress.log({
            name: 'visitIntegrationTests',
            displayName: 'Visit Integration Tests',
            message: `(${app}, ${theme}, ${direction}${logTimezone}${logFeatureFlags})`,
        });
    },
);
