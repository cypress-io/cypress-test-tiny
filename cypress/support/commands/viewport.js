// overwrite viewport to support predefined presets
Cypress.Commands.overwrite(
    'viewport',
    (originalFn, presetString, orientationString, options) => {
        const VIEWPORT_PRESETS = {
            // small desktop (pro minimum requirements)
            desktop: { width: 1024, height: 768, reversible: false },
            // small tablet (nexus-7)
            tablet: { width: 600, height: 960, reversible: true },
            // small phone (iphone-5)
            phone: { width: 320, height: 568, reversible: true },
        };

        const preset = VIEWPORT_PRESETS[presetString];

        // if preset string is not a string, assume it is a width declaration
        // if preset is not defined, assume standard cypress preset
        if (typeof presetString !== 'string' || !preset) {
            return originalFn(presetString, orientationString, options);
        }

        if (orientationString === 'landscape') {
            if (!preset.reversible) {
                throw new Error(`${presetString} viewport dimensions are not reversible`);
            }

            return originalFn(preset.height, preset.width, options);
        }

        return originalFn(preset.width, preset.height, options);
    },
);
